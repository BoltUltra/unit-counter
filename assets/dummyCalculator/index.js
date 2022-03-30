let answerEl = document.getElementById("answer-el");
let firstValue = document.getElementById("first-value");
let secondValue = document.getElementById("second-value");
let add = document.querySelector(".add-el");
let subtract = document.querySelector(".subtract-el");
let divide = document.querySelector(".divide-el");
let multiply = document.querySelector(".multiply-el");
let answer = document.getElementById("answer-el");

add.addEventListener("click", addEl);
subtract.addEventListener("click", subtractEl);
divide.addEventListener("click", divideEl);
multiply.addEventListener("click", multiplyEl);

function addEl() {
  let num1 = parseInt(firstValue.value);
  let num2 = parseInt(secondValue.value);
  answer.textContent = num1 + num2;
}

function subtractEl() {
  let num1 = parseInt(firstValue.value);
  let num2 = parseInt(secondValue.value);
  answer.textContent = num1 - num2;
}

function divideEl() {
  let num1 = parseInt(firstValue.value);
  let num2 = parseInt(secondValue.value);
  answer.textContent = num1 / num2;
}

function multiplyEl() {
  let num1 = parseInt(firstValue.value);
  let num2 = parseInt(secondValue.value);
  answer.textContent = num1 * num2;
}

setInterval;
