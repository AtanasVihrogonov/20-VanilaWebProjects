const musicContainer = document.getElementById('music-container');

const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const audio = document.getElementById('audio');

const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song title
const songs = [
  'Low Deep - Casablanca',
  'Sade - I Miss You',
  'Edward Maya - This Is My Life',
  'Deluno - Private Love',
  'Deep Purple - unknowing'
];

// Keep track of song
let songIndex = 0;

// Initialy load song deteils into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
};

// Play song
function playSong() {
  musicContainer.classList.add('play');

  // Change the playBtn icon to pause
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
};

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');

  // Change the playBtn icon to play
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
};

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});