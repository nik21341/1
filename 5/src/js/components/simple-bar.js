import SimpleBar from 'simplebar';

(() => {
  const dropdowns = document.querySelectorAll('.dropdown__list');

  dropdowns.forEach(item => {
    new SimpleBar(item, {
      autoHide: false,
      scrollbarMaxSize: 28,
    });
  })
})()

