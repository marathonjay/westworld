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
const houseOfTheRisingSun = new Audio("assets/audio/house-of-the-rising-sun.mp3");
const nitroHeist = new Audio("assets/audio/nitro-heist.mp3");
const sweetChildOMine = new Audio("assets/audio/sweet-child-o-mine.mp3");

const music = 
[westworldTheme, 
blackHoleSun,
paintItBlack,
heartShapedBox,
spaceOddity,
houseOfTheRisingSun,
nitroHeist,
sweetChildOMine,
]


console.log(music.length)



//// PLAY AUDIO ////

function audioPlay(event) {
  let playClick = event.target.id;
  for (i = 0; i < music.length; i ++) { 
    if (playClick !== `song${[i + 1]}-play`) {
      music[i].pause();
      music[i].currentTime = 0; 
    }
    else  {music[i].play();
    }
  };
  
};

//// PAUSE AUDIO ////
function audioPause(event) {
  let playPause = event.target.id;
  for (i = 0; i <= music.length; i ++) {   
    if (playPause === `song${[i + 1]}-pause`) {
      music[i].pause();
      
      
      
    };
  };
};

//// STOP AUDIO ////
function audioStop(event) {
  let playStop = event.target.id;
  for (i = 0; i <= music.length; i ++) {   
    if (playStop === `song${[i + 1]}-stop`) {
      music[i].pause();
      music[i].currentTime = 0;
      
    };
  };
};


const controlPlay = document.querySelectorAll(".audio-play");
const controlPause = document.querySelectorAll(".audio-pause");
const controlStop = document.querySelectorAll(".audio-stop");
console.log(controlPlay.length)

for (i = 0; i < controlPlay.length; i++) {
  controlPlay[i].addEventListener("click", audioPlay);
  console.log(controlPlay[i]);
};

for (i = 0; i < controlPause.length; i++) {
  controlPause[i].addEventListener("click", audioPause);
};

for (i = 0; i < controlStop.length; i++) {
  controlStop[i].addEventListener("click", audioStop);
};











// document.querySelector(".audio-play").addEventListener("click", function() {
//   music[2].play();
// });
//   // console.log(audio.currentTime);

// document.querySelector(".audio-pause").addEventListener("click", function() {
//   Audio().pause;
  // console.log(audio.currentTime);


// document.querySelector(".audio-stop").addEventListener("click", function() {
//   westworldTheme.pause();
//   westworldTheme.currentTime = 0;
//   // console.log(audio.currentTime);
// } );

















}); //////* END OF DOM CONTENT LOADED EVENT *////