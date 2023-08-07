const refs = {
  sections: document.querySelectorAll('.section-js'),
  links: document.querySelectorAll('.navigation__link-js'),
  navList: document.querySelector('.navigation__list-js'),
  navListFooter: document.querySelector('.navigation__list-f-js'),
};

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        refs.links.forEach(link => {
          link.classList.toggle(
            'navigation__link_current',
            link.getAttribute('href').replace('#', '') === entry.target.id
          );
        });
      }
    });
  },
  {
    threshold: 0.2,
  }
);

refs.sections.forEach(section => observer.observe(section));

refs.navList.addEventListener('click', smoothScroll);
refs.navListFooter.addEventListener('click', smoothScroll);
function smoothScroll(event) {
  if (event.target.classList.contains('navigation__link-js')) {
    event.preventDefault();

    const id = event.target.getAttribute('href').replace('#', '');

    window.scrollTo({
      top: document.getElementById(id).offsetTop,
      behavior: 'smooth',
    });
  }
}
