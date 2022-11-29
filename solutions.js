"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */


//1
function isTrue(input){
    return input === true;
}
//2
function isFalse(input){
    return input === false;
}
//3
function not(input){
    return ! input;
}
//4
function addOne(input){
    if(input === Infinity){
        return Infinity
    } else {
        let addedOne = parseInt(input) + 1;
     return addedOne
    }
}
//5
function isEven(input){
    let resultEven = input % 2 === 0;
    return resultEven;
}
//6
function isIdentical(input1,input2){
    let inputResult = input1 === input2;
    return inputResult;
}
//7
function isEqual(input1,input2){
    let inputResult = input1 == input2;
    return inputResult;
}
//8
function or(input1,input2){
    let orResult = input1 || input2;
    return orResult;
}
//9
function and(input1,input2){
    let orResult = input1 && input2;
    return orResult;
}
//10
function concat(input1,input2){
    let concatResult = ""+ input1 + "" + input2 + "";
    return concatResult;
}