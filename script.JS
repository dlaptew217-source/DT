const preloader = document.getElementById('preloader');
const intro = document.getElementById('intro');
const enterStory = document.getElementById('enterStory');
const bgMusic = document.getElementById('bgMusic');
const toggleMusic = document.getElementById('toggleMusic');
const toggleMusicIntro = document.getElementById('toggleMusicIntro');
const magicBtn = document.getElementById('magicBtn');
const heroSymbol = document.getElementById('heroSymbol');
const progressBar = document.getElementById('progressBar');
const replayBtn = document.getElementById('replayBtn');
const revealBtn = document.getElementById('revealBtn');
const secretMessage = document.getElementById('secretMessage');
const toTop = document.getElementById('toTop');

const cards = {
  2: document.getElementById('step2'),
  3: document.getElementById('step3'),
  4: document.getElementById('step4'),
  5: document.getElementById('step5'),
  6: document.getElementById('step6'),
  7: document.getElementById('step7')
};

let unlocked = 1;
const total = 7;

window.addEventListener('load', () => {
  setTimeout(() => preloader.classList.add('hidden'), 900);
});

function updateProgress() {
  progressBar.style.width = `${(unlocked / total) * 100}%`;
}

function reveal(step) {
  if (cards[step]) {
    cards[step].classList.add('show');
    cards[step].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  unlocked = Math.max(unlocked, step);
  updateProgress();
}

document.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => reveal(Number(btn.dataset.next)));
});

document.querySelectorAll('.answer').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('correct');
    reveal(Number(btn.dataset.step) + 1);
  });
});

function playMusic() {
  bgMusic.play().then(() => {
    toggleMusic.textContent = '❚❚';
    toggleMusicIntro.textContent = 'Музыка: on';
  }).catch(() => {});
}

function pauseMusic() {
  bgMusic.pause();
  toggleMusic.textContent = '▶️';
  toggleMusicIntro.textContent = 'Музыка: off';
}

function toggleAudio() {
  if (bgMusic.paused) playMusic();
  else pauseMusic();
}

toggleMusic.addEventListener('click', toggleAudio);
toggleMusicIntro.addEventListener('click', toggleAudio);

enterStory.addEventListener('click', () => {
  intro.classList.add('hidden');
  playMusic();
});

magicBtn.addEventListener('click', () => {
  const symbols = ['💐','✨','🌸','💖','🪄','
