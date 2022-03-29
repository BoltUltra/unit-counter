// let calc = document.getElementById("calculator");
let buttons = document.querySelectorAll(".drum");
let numberOfButtons = document.querySelectorAll(".drum").length;
let click = addEventListener("click", drumClick);
let intro = new Audio("./sounds/intro.mp3");

for (i = 0; i < numberOfButtons; i++) {
  buttons[i].click;
}

function drumClick() {
  // alert(Math.floor(Math.random() * 6));
  intro.play();
}

// Calculator Practice

// function add(num1, num2) {
//   return num1 + num2;
// }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function mod(num1, num2) {
//   return num1 % num2;
// }

// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }

// calc.textContent = Math.ceil(calculator(20, 3, divide)) + " approximately";
