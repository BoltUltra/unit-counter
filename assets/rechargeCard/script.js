const value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let pin = document.getElementById("airtime");
let button = document.querySelector(".btn");

button.addEventListener("click", function () {
  let card = "";
  for (let i = 0; i < 16; i++) {
    card += value[generateRandomNumber()];
  }
  pin.textContent = card;
});

function generateRandomNumber() {
  return Math.floor(Math.random() * value.length);
}
