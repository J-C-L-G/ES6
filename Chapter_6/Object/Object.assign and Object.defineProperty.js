/**
 * Created by JCLG on 4/4/2016.
 */

var target = {},
    o1 = {a : 1},
    o2 = {b : 2},
    o3 = {
        c : 3,
        [Symbol('g')] : 'g'
        },
    o4 = {d : 4};

//Setup read-only property
Object.defineProperty(o3, 'e',{
    value : 5,
    enumerable : true,
    writable : false,
    configurable : false
});

//Setup non-enumerable property
Object.defineProperty(o3, 'f',{
    value : 6,
    enumerable : false
});

//Setup non-enumerable symbol
Object.defineProperty(o3,Symbol('h'),{
    value : 8,
    enumerable : false
});

//Set prototype of o3 as o4
Object.setPrototypeOf(o3,o4);

//Assign the values
Object.assign(target, o1, o2, o3);
console.log('target: ',target);
console.log('target-symbols: ',Object.getOwnPropertySymbols(target));
console.log(Object.getOwnPropertyDescriptor(target,'e'));
