document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

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
