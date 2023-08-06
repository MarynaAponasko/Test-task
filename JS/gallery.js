const refs = {
  button: document.querySelector('.gallery__button-js'),
  gallery: document.querySelector('.gallery__wrapper'),
  iconBtn: document.querySelector('.gallery-direction'),
};

refs.button.addEventListener('click', onBtnShowAll);

function onBtnShowAll(e) {
  refs.gallery.classList.toggle('hidden');

  if (refs.gallery.classList.contains('hidden')) {
    refs.iconBtn.style.rotate = '0deg';
  } else {
    refs.iconBtn.style.rotate = '180deg';
  }
}
