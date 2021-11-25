const swiper = new Swiper('.work__swiper', {
  pagination: {
    el: '.work__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<button class="work__steps ' + className + '">' + (index + 1) + ' шаг' + '</button>';
    },
    bulletClass: 'work__steps',
    bulletActiveClass: 'work__steps--active',
  },
  spaceBetween: 50,
  autoHeight: true,
})
