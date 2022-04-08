// Problem 3
// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler

let trim= function(){
    console.log("after trim string is:", 'PankajSingh  '.trim())
    }
    let changetoLowerCase=function(){
   console.log("After changing the case of the string to lower:",'PaNkAjKuMaRsInGh'.toLowerCase())
    }
   
    let changeToUpperCase=function(){
       console.log("After changing the case of the string to Upper:",'PaNkAjKuMaRsInGh'.toLocaleUpperCase())
    }
   
   
    module.exports.trim=trim
    module.exports.lowerCase=changetoLowerCase
    module.exports.upperCase=changeToUpperCase