// Basic interaction logic for Linear Showcase

document.addEventListener('DOMContentLoaded', () => {
  // Command palette item selection simulation
  const cmdItems = document.querySelectorAll('.cmd-item');
  
  cmdItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all
      cmdItems.forEach(i => i.classList.remove('active'));
      // Add active class to clicked
      item.classList.add('active');
    });
  });

  // Buttons simulation
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Button clicked:', btn.textContent.trim());
    });
  });
  
  // Prevent default on links for showcase
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href') === '#') {
        e.preventDefault();
      }
    });
  });
});
