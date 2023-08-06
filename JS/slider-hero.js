const refs = {
  btnPrev: document.querySelector('.hero-info__btn-prev'),
  btnNext: document.querySelector('.hero-info__btn-next'),
  slider: document.querySelector('.hero-image'),
  sliderList: document.querySelector('.hero-image__list'),
  slide: document.querySelectorAll('.hero-image__item'),
  currentImg: document.querySelector('.hero-info__text-current'),
};

let count = 0;
let width;

function init() {
  width = refs.slider.offsetWidth;
  refs.sliderList.style.width = width * refs.slide.lenght + 'px';
  refs.slide.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
}

window.addEventListener('resize', init);

init();

refs.btnNext.addEventListener('click', onBtnNextClick);

function onBtnNextClick() {
  count++;
  if (count >= refs.slide.length - 1) {
    refs.currentImg.textContent = '02';
    refs.btnNext.classList.add('disabled');

    refs.btnNext.removeEventListener('click', onBtnNextClick);
  }
  refs.btnPrev.classList.remove('disabled');
  refs.btnPrev.addEventListener('click', onBtnPrevClick);
  rollSlider();
}

function onBtnPrevClick() {
  count--;
  if (count <= 1) {
    refs.currentImg.textContent = '01';
    refs.btnNext.classList.remove('disabled');
    refs.btnPrev.classList.add('disabled');
    refs.btnPrev.removeEventListener('click', onBtnPrevClick);
  }

  refs.btnNext.addEventListener('click', onBtnNextClick);
  rollSlider();
}

function rollSlider() {
  refs.sliderList.style.transform = 'translate(-' + count * width + 'px';
}
