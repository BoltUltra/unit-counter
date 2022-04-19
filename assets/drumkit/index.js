let drumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let drumButton = this.innerHTML;
    makesound(drumButton);
  });
}

document.addEventListener("keypress", (event) => {
  makesound(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      let sound1 = new Audio("./sounds/sound1.mp3");
      sound1.play();
      break;
    case "a":
      let sound2 = new Audio("./sounds/sound2.mp3");
      sound2.play();
      break;
    case "s":
      let sound3 = new Audio("./sounds/sound3.mp3");
      sound3.play();
      break;
    case "d":
      let sound4 = new Audio("./sounds/sound4.mp3");
      sound4.play();
      break;
    case "j":
      let sound5 = new Audio("./sounds/sound5.mp3");
      sound5.play();
      break;
    case "k":
      let sound6 = new Audio("./sounds/sound6.mp3");
      sound6.play();
      break;
    case "l":
      let sound7 = new Audio("./sounds/sound7.wav");
      sound7.play();
      break;

    default:
      break;
  }
}
