// Vercel showcase interactivity
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.getAttribute('href') !== '/') {
        e.preventDefault();
      }
    });
  });
});
