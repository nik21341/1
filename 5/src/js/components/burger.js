document.addEventListener('DOMContentLoaded', () => {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const search = document.querySelector('.search-site__icon');
  const closeModal = document.querySelector('.header__close-menu');
  const loginBtn = document.querySelector('.header__login');
  const body = document.querySelector('.page__body');

  window.addEventListener('resize', () => {
    if (window.innerWidth > '1024') {
      loginBtn.classList.add('bg-focus');
      loginBtn.classList.remove('btn-focus');
    }
  })

  burger?.addEventListener('click', () => {
    burger?.classList.add('burger--active');
    menu?.classList.add('is-active');

    if (menu?.classList.contains('is-active')) {
      body.classList.add('dis-scroll')
      search.style.opacity = '0.1';
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      loginBtn.classList.remove('bg-focus');
      loginBtn.classList.add('btn-focus');
    }
  });

  closeModal.addEventListener('click', () => {
    burger?.classList.remove('burger--active');
    menu?.classList.remove('is-active');

    search.style.opacity = '1';
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    body.classList.remove('dis-scroll')
  })

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('is-active');
    body.classList.remove('dis-scroll')
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      body.classList.remove('dis-scroll')
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      search.style.opacity = '1';
      burger.classList.remove('burger--active');
      menu.classList.remove('is-active');
    });
  });
})
