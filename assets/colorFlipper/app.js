const colors = [
  "GREEN",
  "RED",
  "RGBA(133,122,200)",
  "#F15025",
  "HSL(360, 71%, 66%)",
  "HSL(125, 67%, 44%)",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //   get random numbere between 0 - 3
  let randomNumber = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
