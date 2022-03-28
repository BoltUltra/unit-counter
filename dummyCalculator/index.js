let answerEl = document.getElementById("answer-el");
let firstValue = document.getElementById("first-value");
let secondValue = document.getElementById("second-value");
let add = document.querySelector(".add-el");
let subtract = document.querySelector(".subtract-el");
let divide = document.querySelector(".divide-el");
let multiply = document.querySelector(".multiply-el");
let answer = document.getElementById("answer-el");

let value1 = parseInt(firstValue.value);
let value2 = parseInt(secondValue.value);

add.addEventListener("click", addEl);
subtract.addEventListener("click", subtractEl);
divide.addEventListener("click", divideEl);
multiply.addEventListener("click", multiplyEl);

function addEl() {
  let sum = value1 + value2;
  console.log(value1);
}

function subtractEl() {
  //   firstValue + secondValue;
  alert("You clicked on the subtract button");
}

function divideEl() {
  //   firstValue + secondValue;
  alert("You clicked on the divide button");
}

function multiplyEl() {
  //   firstValue + secondValue;
  alert("You clicked on the multiply button");
}
