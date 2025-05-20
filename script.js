
const video = document.getElementById('background-video');
const soundToggle = document.getElementById('sound-toggle');

soundToggle.addEventListener('click', () => {
  video.muted = !video.muted;
  soundToggle.textContent = video.muted ? '🔇' : '🔊';
});

console.log('Portfolio chargé.');
