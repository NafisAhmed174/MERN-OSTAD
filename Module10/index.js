//1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum(a, b){
    return a + b;
}

//2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(a){
    return a % 2 == 0;
}

//3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

function findMax(ar){
    // return Math.max(...ar);
    let mx = ar[0];
    for(let i = 1; i < ar.length; i++){
        if(mx < ar[i]){
            mx = ar[i];
        }
    }
    return mx;
}

//4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(str){
    let revString = "";
    for(let i = str.length - 1; i >= 0; i--){
        revString += str[i];
    }
    return revString;
}

//5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers(ar){

    let oddNumberArray = [];

    for(let i = 0; i < ar.length; i++){
        if(ar[i] & 1){
            oddNumberArray.push(ar[i]);
        }
    }

    return oddNumberArray;
}

//6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

function sumArray(ar){
    let sum = 0;

    for(let i = 0; i < ar.length; i++){
        sum += ar[i];
    }

    return sum;
}

//7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

function sortArray(ar){
    ar.sort();
    return ar;
}

//8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"

function capitalizeFirstLetter(str){
    
    if(str[0] >= 'a'){
        newStr = "";
        newStr += str[0];
        newStr = newStr.toUpperCase();
        str = newStr + str.slice(1);
    }
    return str;
}

// Testing 

console.log(calculateSum(5, 6));
console.log(isEven(10));
console.log(findMax([3, 2, 5, 4]));
console.log(reverseString("Nafis Ahmed"));
console.log(filterOddNumbers([1, 2, 3, 4, 5]));
console.log(sumArray([3, 2, 5, 4]));
console.log(sortArray([3, 2, 5, 4]));
console.log(capitalizeFirstLetter("nafis Ahmed"));