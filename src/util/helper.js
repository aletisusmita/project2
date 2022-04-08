// Problem 2
// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - ‘Thorium, W3D1, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler

let printDate= function(){
let currentDate = new Date()
console.log('the current date is ',currentDate);
}

let printMonth= function(){
 let currentDate= new Date()
 console.log('the current month is:', currentDate.getMonth()+1);
}

let getBatchInfo= function(){
console.log("Uranium, W4D5, the topic for today is Nodejs module system")
}

module.exports.printTodayDate=printDate
module.exports.printCurrentMonth=printMonth
module.exports.getBatchInformation=getBatchInfo