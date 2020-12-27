document.addEventListener("DOMContentLoaded", function() {
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

var audio = new Audio("https://res.cloudinary.com/jasonp/video/upload/v1609020934/01_-_Main_Title_Theme_-_Westworld_wexm7z.mp3");
audio.play();

document.querySelector(".audioPlay").addEventListener("click", function() {
  audio.play();
});
  // console.log(audio.currentTime);


document.querySelector(".audioPause").addEventListener("click", function() {
  audio.pause();
  // console.log(audio.currentTime);
} );


document.querySelector(".audioStop").addEventListener("click", function() {
  audio.pause();
  audio.currentTime = 0;
  // console.log(audio.currentTime);
} );


})