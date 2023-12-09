// alert practice
alert("Hi I am Munawar");
console.log("Hi I am Munawar");
// variable practice
var myname = "Munawar";
var mymarks = "65";
alert(mymarks);
// mathematics expressions practice
var a = 10;
var b = 20;
var c = 30;
console.log(a + b * c);

var a = 10;
var b = 20;
var c = a + b;
console.log(c);

// var and prompts with console practice
// var username = prompt("Enter your birthdate");
// var age = prompt("Enter your age");
// console.log(birthdate, age);

// if statement practice
var a = prompt("Which city is the capital of Pakistan?");

if (a == "Islamabad") {
  alert("Wow! You did great.");
} else {
  alert("Incorect Answer");
}

// comparison operators practice

// if (yourCNICNumber !== 4220108) {
//   alert("You can not register for this task");
// }

// ifelse statement and nested list practice
var yourCNICNumber = prompt("Enter numbers 4220108");
var Yourpassport = true;
if (yourCNICNumber !== 4220108) {
  console.log("You can not register for this task");
} else if (Yourpassport == true) {
  console.log("Allow on student Card");
}
{
  console.log("You've entered on basis of your passport");
}

// sets of conditions practice
var age = 15;
var cnic = true;
passport = true;
if (age >= 18 || cnic == true || passport == true) {
  console.log("Allow");
}

// array practice from chp 15-17
var a = "A";
var b = "B";

var arr = ["A", "B", "F", "M", "3"];

console.log(arr);

arr[2] = 12;

console.log(arr);

arr[5] = "D";

console.log(arr);

// arr.push("E");
// arr.pop();
// arr.shift();
// arr.unshift("1");
// console.log(arr);
// var b = arr.slice(0, 3);
// console.log(b);

arr.splice(2, 2, "1", "2");
var b = arr.splice(2, 2, "1", "2");

console.log(arr);
console.log(b);
