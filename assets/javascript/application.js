document.addEventListener("DOMContentLoaded", function() {
  //////* CARD FLIP *////
  let cardClick = document.querySelectorAll(".single-card-container");

function flipCard(event) {
  let flip = event.currentTarget.id;
  // console.log(event.currentTarget.id);
  for (i = 0; i <= cardClick.length; i++ ) {
    if (flip === `card-${[i]}`) {
      document.querySelector(`#front${[i]}`).classList.toggle("rotate-back");
      document.querySelector(`#back${[i]}`).classList.toggle("rotate-forward");
      // console.log((`#front${[i]}`))
    }
  }  
};
for (i = 0; i < cardClick.length; i++) {
  cardClick[i].addEventListener("click", flipCard);
  // console.log(i);
};


//////* AUDIO FUNCTIONS *////

const westworldTheme = new Audio("assets/audio/westworld-main-theme.mp3");
const blackHoleSun = new Audio("assets/audio/black-hole-sun.mp3");
const paintItBlack = new Audio("assets/audio/paint-it-black.mp3");
const heartShapedBox = new Audio("assets/audio/heart-shaped-box.mp3");
const spaceOddity = new Audio("assets/audio/space-oddity.mp3");
const houseOfTheRisingSun = new Audio("assets/house-of-the-rising-sun.mp3");
const nitroHeist = new Audio("assets/audio/nitro-heist.mp3");
const sweetChildOMine = new Audio("assets/audio/sweet-child-o-mine.mp3");





document.querySelector(".audioPlay").addEventListener("click", function() {
  westworldTheme.play();
});
  // console.log(audio.currentTime);

document.querySelector(".audioPause").addEventListener("click", function() {
  westworldTheme.pause();
  // console.log(audio.currentTime);
} );

document.querySelector(".audioStop").addEventListener("click", function() {
  westworldTheme.pause();
  westworldTheme.currentTime = 0;
  // console.log(audio.currentTime);
} );
















}) //////* END OF DOM CONTENT LOADED EVENT *////