document.addEventListener('DOMContentLoaded', () => {
  const categoryItems = document.querySelectorAll('.category-item');
  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      categoryItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
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
