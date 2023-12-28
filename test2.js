import { AAAgetMyName, MyName } from './test.js';
import ABC, { test3Func } from './test3.js';
// import * as myObj from './test.js';


var obj = {
    name: "Test 1",
    address: 'Hyderabad'
};

var { name } = obj;

console.log(obj.name);
console.log(name);
// console.log(myObj.MyName);

// console.log(window);
//  var myName = myObj.AAAgetMyName('Test name here');
// console.log(myName);
 var myName = AAAgetMyName('Test name here');
 console.log(MyName);
 
 console.log(myName);
 console.log(ABC);
 console.log(test3Func());