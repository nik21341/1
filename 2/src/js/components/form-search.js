const form = document.querySelector('.header__form');
const close = document.querySelector('.form-search__close');
const open = document.querySelector('.header__search');

window.addEventListener('DOMContentLoaded', () => {
  open.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.display = 'flex';
    form.style.opacity = '1';
  })
  close.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.opacity = '0';
    setTimeout(() => {
      form.style.display = 'none';
    }, 300)
  })
})
