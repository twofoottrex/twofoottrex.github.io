var music = new Audio('Music/music.mp3');
var isPlaying = false;
var playButton = document.getElementsByClassName('button-play')[0];
var startTime = 0; // Start the song 58 seconds in
var fadeOutDuration = 0; // Fade out duration in seconds

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  playButton.addEventListener('click', toggleMusic);

}

function toggleMusic() {
  if (!isPlaying) {
    // Set the starting time of the audio
    music.currentTime = startTime;
    music.play();
    playButton.innerHTML = '&#10074;&#10074;'; // Change button content to the pause symbol
    isPlaying = true;

    // Schedule the audio to fade out after 60 seconds
    
  } else {
    // If the music is currently playing, pause it and update the button content
    music.pause();
    playButton.innerHTML = '&#9658;'; // Change button content to the play symbol
    isPlaying = false;
  }
}



// Get all the "BUY TICKETS" buttons
const buyButtons = document.querySelectorAll('.tour-button');

// Add a click event listener to each button
buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Display the sold-out message
    alert('Sorry, this concert is fully sold out!');
  });
});
