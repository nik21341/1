import Swiper, { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {

  const heroSwiper = new Swiper('.hero__swiper', {
    modules: [Autoplay, EffectFade],
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 2000,
    },
    effect: "fade",
    allowTouchMove: false,
  });

  const gallerySwiper = new Swiper('.gallery__swiper', {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 12,
    height: 'auto',
    pagination: {
      el: ".navigation-gallery__pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".navigation-gallery__btn--next",
      prevEl: ".navigation-gallery__btn--prev",
      disabledClass: "navigation-gallery__btn--disabled"
    },
    breakpoints: {
      400: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 38,
      },
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34,
      },
      1300: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    slidesPerView: 'auto'
  });

  const eventsSwiper = new Swiper('.events__swiper', {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,
    pagination: {
      el: ".events__pagination",
      bulletClass: 'events__pagination-bullet',
      bulletActiveClass: 'events__pagination-bullet--active',
      clickable: true,
    },
    navigation: {
      nextEl: ".events__button--next",
      prevEl: ".events__button--prev",
      disabledClass: "events__button--disabled"
    },
    breakpoints: {
      576: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34,
      },
      900: {
        slidesPerGroup: 3,
        slidesPerView: 2,
        spaceBetween: 28,
      },
      1024: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 27,
      },
      1200: {
        slidesPerGroup: 2,
        slidesPerView: 3,
        spaceBetween: 50,
      }
    }
  })

  const projectsSwiper = new Swiper('.projects__swiper', {
    modules: [Pagination, Navigation],
    slidesPerView: 'auto',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".projects__button--next",
      prevEl: ".projects__button--prev",
      disabledClass: "projects__button--disabled"
    },
    breakpoints: {
      576: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34,
      },
      1024: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1300: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  })
})
