
// Don't use var
// use let/const

// let a = 10, b = 15;
// let c = a + b;
// console.log(c);




// "use strict"; // this finds error in code.
// x = 3.14; // this will show error




// arrow function
// const add = (a, b) => a + b;
// console.log(add(2, 3));




// Template Literal

// let myname = "Nafis";
// let greeting = `Hello, ${myname}`;
// console.log(greeting);




// array Destructuring
// const ar = [1, 2, 3];

// const [first, second, third] = ar;
// console.log(first);
// console.log(second);
// console.log(third);





// object destructuring

// const person = {
//     Name: "Nafis Ahmed", 
//     age : 23,
//     hometown: "Sherpur"
// };

// const {Name, age, hometown} = person;
// console.log(Name);
// console.log(age);
// console.log(hometown);





// Nested Destructuring

// const user = {

//     Name : "Nafis Ahmed",
//     age : 23,

//     parent : {
//         Father : "MD. Jaynal Abedin",
//         Mother : "Asma Begum"
//     }

// };

// const {Name, age,  parent: {Father , Mother}} = user;

// console.log(Father);
// console.log(Mother);






// Default Parameters

// function greet(name = "guest"){
//     console.log(`Hello, ${name}`);
// }

// greet();
// greet("nafis");






// Rest parameter

// function sumAll(...numbers){ // number of parameter is not fixed
//     let tot = 0;

//     // for(let x of numbers){ // range based loop
//     //     tot += x;
//     // }
//     for(let i = 0; i < numbers.length; i++){
//         tot += numbers[i];
//     }
//     return tot;
// }

// console.log(sumAll(1, 2, 3, 4));
// console.log(sumAll(1, 2, 3, 4, 5));