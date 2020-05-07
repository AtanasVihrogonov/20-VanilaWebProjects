const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breath In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breath Out!';
      container.className = 'container shrink';
    }, holdTime);

  }, breathTime);
};

setInterval(breathAnimation, totalTime);