const swiper = new Swiper('.featured-products__inner', {
  spaceBetween: 25,
  pagination: {
    el: '.featured-products__pagination',
    clickable: true,
    renderBullet: function (className) {
      return '<span class="pagination__dot ' + className + '">' + '</span>';
    },
    bulletClass: 'pagination__dot',
    bulletActiveClass: 'pagination__dot--active',
  },
})

