var music = new Audio('Music/music.mp3');
var isPlaying = false;
var playButton = document.getElementsByClassName('button-play')[0];
var startTime = 0; // Start the song 58 seconds in
var fadeOutDuration = 3; // Fade out duration in seconds

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
    setTimeout(fadeOut, 60000);
  } else {
    // If the music is currently playing, pause it and update the button content
    music.pause();
    playButton.innerHTML = '&#9658;'; // Change button content to the play symbol
    isPlaying = false;
  }
}

function fadeOut() {
  var volume = 1.0;
  var fadeOutInterval = 100; // Interval for fading out in milliseconds

  var fadeOutTimer = setInterval(function () {
    // Reduce the volume gradually
    volume -= fadeOutInterval / (fadeOutDuration * 1000);

    // Ensure the volume doesn't go below 0
    if (volume < 0) {
      volume = 0;
    }

    // Set the audio volume
    music.volume = volume;

    // Check if the audio is muted, and if so, pause it
    if (volume <= 0) {
      clearInterval(fadeOutTimer);
      music.pause();
      playButton.innerHTML = '&#9658;'; // Change button content to the play symbol
      isPlaying = false;
    }
  }, fadeOutInterval);
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
