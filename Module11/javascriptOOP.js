/*
//object

let person = {
    firstName: "Nafis",
    lastName: "Ahmed",
    age: 23,
    getName: ()=>{
        return `My name is ${person.firstName} ${person.lastName}`;
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.getName());
*/





/*
//class

class person{
    firstName = "Nafis"
    lastName = "Ahmed"
    age = 23
    getName(){
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

const personObj = new person();
console.log(personObj);
console.log(personObj.firstName);
console.log(personObj.lastName);
console.log(personObj.getName());
*/




/*
// constructor

// auto executed when object is created
// can take parameter
// can't return

class person1{

    constructor(){
        console.log('I am a constructor');
    }

    firstName = "Nafis"
    lastName = "Ahmed"
    age = 23
    getName(){
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

const ob1 = new person1();

class person2{

    constructor(num1, num2){ // parameterized constructor
        console.log(`Sum = ${num1 + num2}`);
    }

    firstName = "Nafis"
    lastName = "Ahmed"
    age = 23
    getName(){
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

const ob2 = new person2(2, 3);
*/






/*
// static keyword

// this allows to access class properties without creating object

// utility purpose: when some properties are frequently used we will not created object
// to access them instead we will make them static and access directly to reduce memory usage


class person{

    static firstName = "Nafis"
    static lastName = "Ahmed"
    age = 23
    getName(){
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

console.log(person.firstName);
console.log(person.lastName);
*/








