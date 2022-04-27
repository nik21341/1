document.addEventListener('DOMContentLoaded', () => {
  const menuBtns = document.querySelectorAll('.nav-bottom__btn');
  const drops = document.querySelectorAll('.dropdown');

  menuBtns.forEach(item => {
    item.addEventListener('click', (e) => {

      const drop = item.closest('.nav-bottom__item').querySelector('.dropdown');

      menuBtns.forEach(el => {
        if (el !== item) {
          el.classList.remove('is-active');
        }
      });

      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('is-active');
        }
      });

      drop.classList.toggle('is-active');
      item.classList.toggle('is-active');
    });
  });



  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-bottom__item')) {
      menuBtns.forEach(el => {
        el.classList.remove('is-active');
      });

      drops.forEach(el => {
        el.classList.remove('is-active');
      });
    }
  });


});
