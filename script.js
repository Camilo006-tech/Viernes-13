const music = document.getElementById('background-music');
const controlBtn = document.getElementById('control-music');

controlBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        controlBtn.textContent = 'Pausar Música';
    } else {
        music.pause();
        controlBtn.textContent = 'Reproducir Música';
    }
});
