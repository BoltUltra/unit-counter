const values = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "g",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "!",
  "@",
  "#",
  "$",
];

const btn = document.getElementById("generate");
const password = document.querySelector(".output");
let txt = document.querySelector(".text");

btn.addEventListener("click", function () {
  let generatedPassword = "";
  for (let i = 0; i < 15; i++) {
    generatedPassword += values[getRandomNumber()];
  }

  password.textContent = generatedPassword;
  setInterval(() => {
    txt.textContent = "password successfully generated";
  }, 5000);
});

function getRandomNumber() {
  return Math.floor(Math.random() * values.length);
}
