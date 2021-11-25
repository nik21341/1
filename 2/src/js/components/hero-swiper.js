const swiper = new Swiper('.hero__swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (className) {
      return '<span class="hero__pagination-dot ' + className + '">' + '</span>';
    },
    bulletClass: 'hero__pagination-dot',
    bulletActiveClass: 'hero__pagination-dot--active',
  },
})
