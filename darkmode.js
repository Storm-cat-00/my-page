const button = document.getElementById('modechange');

button.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
});
