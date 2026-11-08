const button = document.getElementById('modechange');

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark-mode');
}

button.addEventListener('click', () => {

  document.documentElement.classList.toggle('dark-mode');

  if (document.documentElement.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
