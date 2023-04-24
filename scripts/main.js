//let numArr = [10, 52, 10, 56, 54];
//console.log(numArr);

const cars = new Array("Saab", "Volvo", "BMW", "Opel");
cars.sort();
let a = cars.length;
console.log(a);
document.getElementById("demo").innerHTML = cars;
document.getElementById("demo2").innerHTML = a;

// Looping through Arrays

//let flen = fruits.length;
//document.getElementById("fruits").innerHTML = flen;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("fruits").innerHTML = text;

// Another method

let text1 = "<ul>";
fruits.forEach(myFunction);
text1 += "</ul>";

function myFunction(value) {
  text1 += "<li>" + value + "</li>";
}
document.getElementById("fruits2").innerHTML = text;
