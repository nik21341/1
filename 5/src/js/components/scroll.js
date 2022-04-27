import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('[data-scroll]', {
  speed: 800,
  updateURL: true,
  popstate: true,
});
