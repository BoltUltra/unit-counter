let myDate = new Date();
let timendate = document.getElementById("dateAndTime");

timendate.textContent = myDate;

setInterval(myDate, 1000);
