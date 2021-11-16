const btn = document.querySelector('.footer__scroll-up');

window.addEventListener('DOMContentLoaded', function () {

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })

})
