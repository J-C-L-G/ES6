/**
 * Created by JCLG on 3/30/2016.
 */
class Animal{
    constructor(type){
        this.type = type;
    }

    get type(){
        return this.__type;
    }

    set type(type){
        this.__type = type;
    }
}


class Dog extends Animal{
    constructor(type,name){
        super(type);
        this.__name = name;
    }

    get name(){
        return this.__name;
    }

    set name(name){
        this.__name = name;
    }

    getName(){
        return this.__name;
    }
}

var dog = new Dog('canine','fido');
console.log(dog);
console.log(dog.type);
console.log(dog.name);
console.log(dog.getName());