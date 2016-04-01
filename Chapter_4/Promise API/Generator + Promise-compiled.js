'use strict';

var _marked = [main].map(regeneratorRuntime.mark);

/**
 * Created by JCLG on 4/1/2016.
 */

function main() {
    var step1, step2, step3a, step3b, step3c, step4, ret;
    return regeneratorRuntime.wrap(function main$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    step4 = function step4() {
                        console.log('step 4');
                        return 4;
                    };

                    step3c = function step3c() {
                        console.log('step 3c');
                        return 33;
                    };

                    step3b = function step3b() {
                        console.log('step 3b');
                        return 32;
                    };

                    step3a = function step3a() {
                        console.log('step 3a');
                        return 31;
                    };

                    step2 = function step2() {
                        console.log('step 2');
                        return 2;
                    };

                    step1 = function step1() {
                        console.log('step 1');
                        return 1;
                    };

                    _context.next = 8;
                    return step1();

                case 8:
                    ret = _context.sent;
                    _context.prev = 9;
                    _context.next = 12;
                    return step2(ret);

                case 12:
                    ret = _context.sent;
                    _context.next = 18;
                    break;

                case 15:
                    _context.prev = 15;
                    _context.t0 = _context['catch'](9);

                    console.log(_context.t0);

                case 18:
                    _context.next = 20;
                    return Promise.all([step3a(ret), step3b(ret), step3c(ret)]);

                case 20:
                    ret = _context.sent;
                    _context.next = 23;
                    return step4(ret);

                case 23:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this, [[9, 15]]);
}

function run(gen) {
    var args = [].slice.call(arguments, 1),
        it;
    it = gen.apply(this, args);
    return Promise.resolve().then(function handleNext(value) {
        var next = it.next(value);
        console.log(value);
        console.log(next);
        return function handleResult(next) {
            if (next.done) {
                return next.value;
            } else {
                return Promise.resolve(next.value).then(handleNext, function handleErr(err) {
                    return Promise.resolve(it.throw(err)).then(handleResult);
                });
            }
        }(next);
    });
}

run(main).then(function fulfilled() {
    console.log('completed');
}, function rejected(reason) {
    console.log(reason);
});

//# sourceMappingURL=Generator + Promise-compiled.js.map