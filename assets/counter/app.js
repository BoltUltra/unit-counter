let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
let mode = document.getElementById("mode");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
      value.style.color = "green";
    } else {
      count = 0;
      value.style.color = "black";
    }

    if (count > 0) {
      value.style.color = "lightgreen";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#fff";
    }
    value.textContent = count;
  });
});
