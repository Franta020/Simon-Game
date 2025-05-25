var buttonCollors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomChosenColor = "";
var userclickePattern = [];
var gameLevel = 0;

//create random number betwee 0 - 4 //
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonCollors[randomNumber];
  gamePattern.push(randomChosenColor);
  animatePress(randomChosenColor);
  playSound(randomChosenColor);
  gameLevel += 1;
  $("h1").text("level " + gameLevel);
  $(".btn").on("click", function () {
    handler(this);
  });
}

function handler(button) {
  var userChosenColor = $(button).attr("id");
  userclickePattern.push(userChosenColor);
  checkAnswer();
}

$("body").keypress(function () {
  if (gameLevel === 0) {
    nextSequence();
  } else {
    return;
  }
});

function playSound(name) {
  var sound = new Audio("./sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(name) {
  $("." + name)
    .fadeOut(100)
    .fadeIn(100);
}

function checkAnswer() {
  var lastColor = userclickePattern.length - 1;
  if (userclickePattern[lastColor] !== gamePattern[lastColor]) {
    gameOver();
    $(".btn").off("click");
  } else {
    playSound(userclickePattern[lastColor]);
    animatePress(userclickePattern[lastColor]);
    if (userclickePattern.length === gamePattern.length) {
      $(".btn").off("click");
      userclickePattern = [];
      setTimeout(nextSequence, 1000);
    }
  }
}

function gameOver() {
  var error = new Audio("./sounds/wrong.mp3");
  error.play();
  $("h1").text("Game over, pres any key to restart");
  gameLevel = 0;
  gamePattern = [];
  userclickePattern = [];
  $("body").addClass("game-over");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 300);
}
