const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
  item: document.querySelectorAll('.mobile-menu__link'),
};

refs.openMenuBtn.addEventListener('click', toggleModal);
refs.closeMenuBtn.addEventListener('click', toggleModal);
refs.item.forEach(item => {
  item.addEventListener('click', toggleModal);
});

function toggleModal() {
  refs.menu.classList.toggle('is-open');
}
