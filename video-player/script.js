const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stops');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play and pause video
function toggleVideoStatus() {
  return true;
};

// Update play/pouse icon
function updatePlayIcon() {
  return true;
};

// Update progress & timestamp
function updateProgress() {
  return true;
};

// Stop video icon
function stopVideo() {
  return true;
};

// Set video  time to progress
function setVideoProgress() {
  return true;
};


// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pouse', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timestamp', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stops.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);