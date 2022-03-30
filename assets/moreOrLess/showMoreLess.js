let content = document.getElementById("fullContent");
let display = document.getElementById("showHide");

display.onclick = function () {
  if (content.className === "expand") {
    content.className = "";
    display.textContent = "Show More";
  } else {
    content.className = "expand";
    display.textContent = "Show Less";
  }
};
