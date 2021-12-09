const swiperProjects = new Swiper('.projects__swiper', {
    spaceBetween: 30,
    pagination: {
        el: '.projects-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<button class="projects-pagination__btn btn-reset ' + className + '">' + (index + 1) + '</button>';
        },
        bulletClass: 'projects-pagination__btn',
        bulletActiveClass: 'projects-pagination__btn--active',
    },
    autoHeight: true,
});

const swiperService = new Swiper('.services__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
        el: '.pagination__navigation',
        nextEl: '.swiper-prev',
        prevEl: '.swiper-next',
    },
    scrollbar: {
        el: '.pagination__scrollbar',
        draggable: true,
        dragSize: 148,
    },
    autoHeight: true,
});