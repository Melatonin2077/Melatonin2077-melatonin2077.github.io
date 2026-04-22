const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const searchInput = document.querySelector('#pubSearch');
if (searchInput) {
  const items = Array.from(document.querySelectorAll('.searchable-item'));
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.classList.toggle('hidden-by-search', q !== '' && !text.includes(q));
    });
  });
}
