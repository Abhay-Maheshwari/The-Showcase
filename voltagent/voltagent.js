document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a, button');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href')?.startsWith('#') || link.tagName === 'BUTTON') {
        if (!link.classList.contains('theme-toggle')) {
           e.preventDefault();
        }
      }
    });
  });
});
