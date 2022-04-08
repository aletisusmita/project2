const express = require('express');

const LoggerModule = require('../logger/logger');
const helperModule = require('../util/helper');
const formatterModule=require('../vallidator/formattor');
const lodash = require('lodash');
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('I am inside the first route handler')
    // console.log('The endpoint value is', logger.endpoint)
    console.log('Calling log function')
     //logger.logging()
    LoggerModule.welcomeMessage()
    helperModule.printTodayDate()
    helperModule.printCurrentMonth()
    helperModule.getBatchInformation()
 formatterModule.trim()
 formatterModule.lowerCase()
 formatterModule.upperCase()

    res.send('This is first server test api by Pankaj Kumar')
});

router.get('/test-hello', function (req, res) {
//     Problem 4
// Using the package ‘lodash’ solve below problems(Write all this in route.js in /hello route handler)
// - Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays
let Months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let subMonths= lodash.chunk(Months,3)
console.log('three equaly divided monthes are:',subMonths)
// - Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.
let oddNumbers=[1,2,3,5,7,11,13,17,23,29]
let elements=lodash.tail(oddNumbers,9)
console.log(elements)
// - Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them
let a =[2,5,2,8,5,7,5,9,3,6,4,5,9]
let b= [5,9,7,6,3,1,]
let c=[11,45,12,31,7,8,11]
let d=[11,12,1,3,13,14,15,17,18,]
let e=[29]
console.log('the final array after removiing duplicate numbers', lodash.union(a, b, c, d, e) )
// - Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]
 let keyVailuePairs= [["horror","The Shining"],["drama" ,"Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
 console.log('keyVailuePairs:',lodash.fromPairs(keyVailuePairs))
 



    res.send('My Hello api!')
});


router.get('/test-me5', function (req, res) {
    res.send('My final ever api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason