//Audit Intro Player
const play = document.querySelector('.play-button');
const overlay = document.querySelector('.overlay');
const light = document.querySelector('.light2');
const pulse1 = document.querySelector('.pulse2s-player');
const pulse2 = document.querySelector('.pulse3s-player');
const pulse3 = document.querySelector('.pulse4s-player');
const message1 = document.querySelector('.message1');
const message2 = document.querySelector('.message2');
const message3 = document.querySelector('.message3');
const phase1 = document.querySelector('.phase1');
const phase2 = document.querySelector('.phase2');
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

async function animate() {
  play.classList.add('remove');
  overlay.classList.add('remove');
  light.classList.add('playing');
  pulse1.classList.add('playing');
  pulse2.classList.add('playing');
  pulse3.classList.add('playing');
  await wait(7000);
  message1.classList.add('remove');
  message2.classList.add('show');
  await wait(7000);
  phase1.classList.add('remove');
  message3.classList.add('show');
  phase2.classList.add('show');
  await wait(9000);
  phase2.classList.remove('show');
  message3.classList.remove('show');
  phase1.classList.remove('remove');
  message2.classList.remove('show');
  message1.classList.remove('remove');
  pulse3.classList.remove('playing');
  pulse2.classList.remove('playing');
  pulse1.classList.remove('playing');
  light.classList.remove('playing');
  overlay.classList.remove('remove');
  play.classList.remove('remove');
}

play.addEventListener('click', animate);