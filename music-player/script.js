const musicContainer = document.getElementById('music-container');

const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const audio = document.getElementById('audio');

const title = document.getElementById('title');
const cover = document.getElementById('cover');

const start = document.querySelector('.start');
const end = document.querySelector('.end');

// Song title
const songs = [
  'Low Deep - Casablanca',
  'Sade - I Miss You',
  'Edward Maya - This Is My Life',
  'Delyno - Private Love',
  'Deep Purple - Smoke on the Water'
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

// Previous song
function prevSong() {
  songIndex--;  // --> decrease by 1 = --;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
};

// Next song
function nextSong() {
  songIndex++;  // --> increase by 1 = ++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
};

// Update progress bar
function updareProgress(e) {
  const {duration, currentTime} = e.srcElement;
  //console.log(duration, currentTime);
  const progressPercent = (currentTime / duration) * 100;
  // console.log(progressPercent);
  let s = parseInt(audio.currentTime % 60);
  let m = parseInt((audio.currentTime / 60) % 60);
  if (s / 10 < 1) s = '0'+ s;
  if (m / 10 < 1) m = '0'+ m;
  let es = parseInt(audio.duration % 60);
  let em = parseInt((audio.duration / 60) % 60);
  if (es / 10 < 1) es = '0'+ es;
  if (em / 10 < 1) em = '0'+ em;

  // Set to width of the progress
  progress.style.width = `${progressPercent}%`;
  start.innerHTML = m + ":" + s;
  if(em && !progressPercent) {
    end.innerHTML = em + ":" + es;
  } 
};

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  // console.log(clickX);
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time song update
audio.addEventListener('timeupdate', updareProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);