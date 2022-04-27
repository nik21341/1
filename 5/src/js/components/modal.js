document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('.page__body');
  const modal = document.querySelector('.modal');
  const modalPicture = modal.querySelector('picture');
  const modalImg = modalPicture.querySelector('img');
  const modalSource = modalPicture.querySelector('source');
  const modalClose = modal.querySelector('.modal__close');
  const galleryImgs = document.querySelectorAll('.gallery__open-modal');


  galleryImgs.forEach(item => {
    const src = item.dataset.src;
    const imgAlt = item.querySelector('img').alt;

    item.addEventListener('click', (e) => {
      disableScroll();
      modal.classList.add('is-open');
      modalImg.src = `${src}.jpg`;
      modalImg.alt = imgAlt;
      modalSource.srcset = `${src}.webp`;
    })
  })

  modalClose.addEventListener('click', () => {
    closeModal();
  })

  document.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }

  });

  window.addEventListener('keydown', function (e) {
    if (e.keyCode == 27 && modal.classList.contains('is-open')) {
      closeModal();
    }
  }.bind(this));



  const disableScroll = () => {
    const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    const pagePosition = window.scrollY;
    modal.style.paddingRight = paddingOffset;
    body.style.paddingRight = paddingOffset;
    body.classList.add('dis-scroll');
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + 'px';
  }

  const enableScroll = () => {
    const pagePosition = parseInt(document.body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('dis-scroll');
    modal.style.paddingRight = '0px';
    body.style.paddingRight = '0px';
    window.scroll({ top: pagePosition, left: 0 });
    body.removeAttribute('data-position');
  }

  const closeModal = () => {
    modal.classList.remove('is-open');
    enableScroll();
  };
});
