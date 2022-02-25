// Saved the number to a variable
let valuee = parseInt(prompt("Enter a Value"));
let input = document.getElementById("value");

let meterToFeet = (valuee * 3.281).toFixed(3);
let feetToMeter = (valuee / 3.281).toFixed(3);
let literToGallon = (valuee / 4.546).toFixed(3);
let gallonToLiter = (valuee * 4.546).toFixed(3);
let kiloToPound = (valuee * 2.205).toFixed(3);
let poundToKilo = (valuee * 2.205).toFixed(3);

input.textContent = valuee;

document.getElementById("length").textContent =
  valuee +
  " Meter(s) = " +
  meterToFeet +
  " Feet(s) | " +
  valuee +
  " Feet(s) = " +
  feetToMeter +
  " Meter(s)";

document.getElementById("volume").textContent =
  valuee +
  " Liter(s) = " +
  literToGallon +
  " gallon(s) | " +
  valuee +
  " gallon(s) = " +
  gallonToLiter +
  " liter(s)";

//   20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
document.getElementById("mass").textContent =
  valuee +
  " kilo(s) = " +
  kiloToPound +
  " pound(s) | " +
  valuee +
  " pound(s) = " +
  poundToKilo +
  " kilo(s)";
