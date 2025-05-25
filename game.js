var buttonCollors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomChosenColor = "";
var userclickePattern = [];

//create random number betwee 0 - 4 //
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonCollors[randomNumber];
  gamePattern.push(randomChosenColor);
  animatePress(randomChosenColor);
  playSound(randomChosenColor);
}

$(".btn").click(function () {
  handler(this);
});

function handler(button) {
  var userChosenColor = $(button).attr("id");
  userclickePattern.push(userChosenColor);
  console.log(userclickePattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
}

$("body").keypress(function () {
  nextSequence();
});

function playSound(name) {
  var sound = new Audio("./sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(name) {
  $("." + name)
    .animate({ opacity: "0" }, "0.01")
    .delay("0.01")
    .animate({ opacity: "1" }, "0.01");
}
