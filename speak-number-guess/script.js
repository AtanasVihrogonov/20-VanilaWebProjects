const msgEl = document.getElementById('msg');

const randomNum = getRandomNummber();

console.log('Number:', randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

// Capture user speak
function onSpeak(e) {
  const msg = e.results[0][0].transcript;

  // writeMessage(msg);
  // checkNumber(msg);
};

// Generate random number
function getRandomNummber() {
  return Math.floor(Math.random() * 100) + 1;
};


// Speak result
recognition.addEventListener('result', onSpeak);