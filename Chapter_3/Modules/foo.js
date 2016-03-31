/**
 * Created by JCLG on 3/30/2016.
 */

export function foo(){
    console.log('this is foo');
}

var baz = 100;
export {baz};

var bar = {
    name : 'bar'
};
export {bar};