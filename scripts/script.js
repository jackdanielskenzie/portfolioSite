/*
// Refactor
let someValue = 'Something'; // String
let someBoolean = true; // Boolean
let finalValue = 50;
let inventoryArray = ["belt","shirt", "pants", "shoes", "boots", "glasses", "hoodie"];


// Closures and Scope
const inventoryFunction = function (selection) {
    // DRY Don't Repeat Yourself
    let returnString = ""

    for (let i = 0; i < inventoryArray.length; i++) {
        returnString += `${i}. ${inventoryArray[i]} <br/>`;
    }
    returnString += `<br/>`;
    document.write(returnString);
    document.write(`<h2>You have selected:</h2>`);
    document.write(`<h1>${inventoryArray[selection]}</h1>`);
    document.write(`<h3>Your selection plus 5 = ${selection + 5} </h3>`);
}

let userInput = parseInt(prompt("Please enter an item number to select from your inventory")); // Always returns string
//inventoryFunction(userInput);


// Retrieve object properties with a .

// finalFinalValueForRealThisTime = 45; // THIS WONT WORK

// Magic Numbers
//

// 1. Do the first thing
let variable = "value";

// 2. Do the second thing
const myFunction = function(parameter) {
    console.log(parameter);
}

myFunction(variable);

// Truthy and Falsy values

// Falsy Value
false;
undefined;
NaN; // Number
null;
0; // Number

// // FizzBuzz
// let number = 100;
// for (let j = 1; j < number; j++) {
//     if (j % 2 === 0 && j % 5 === 0) {
//         console.log(`${j}: FIZZBUZZ`);
//     } else if (j % 2 === 1) {
//         console.log(`${j}: FIZZ`);
//     } else {
//         console.log(`${j}: BUZZ`)
//     }
// }

let filteredArray = [];
let filterArray = function (letter) {
    for (let item of inventoryArray) {
        if (item.includes(letter)) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
}

console.log(filterArray("a"));
*/
