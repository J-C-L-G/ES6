/**
 * Created by JCLG on 4/1/2016.
 */

function *main() {
    function step1() {
        console.log('step 1');
        return 1;
    }

    function step2() {
        console.log('step 2');
        return 2;
    }

    function step3a() {
        console.log('step 3a');
        return 31;
    }

    function step3b() {
        console.log('step 3b');
        return 32;
    }

    function step3c() {
        console.log('step 3c');
        return 33;
    }

    function step4() {
        console.log('step 4');
        return 4;
    }

    var ret = yield step1();
    try {
        ret = yield step2(ret);
    }
    catch (err) {
        console.log(err);
    }
    ret = yield Promise.all([
        step3a(ret),
        step3b(ret),
        step3c(ret)
    ]);
    yield step4(ret);
}

function run(gen) {
    var args = [].slice.call(arguments, 1), it;
    it = gen.apply(this, args);
    return Promise.resolve()
        .then(function handleNext(value) {
            var next = it.next(value);
            console.log(value);
            console.log(next);
            return (function handleResult(next) {
                if (next.done) {
                    return next.value;
                }
                else {
                    return Promise.resolve(next.value)
                        .then(
                        handleNext,
                        function handleErr(err) {
                            return Promise.resolve(
                                it.throw(err)
                            )
                                .then(handleResult);
                        }
                    );
                }
            })(next);
        });
}

run(main)
    .then(
    function fulfilled() {
        console.log('completed');
    },
    function rejected(reason) {
        console.log(reason);
    }
);