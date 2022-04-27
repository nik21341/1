document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector('.header__search-top');
  const openSearch = document.querySelector('.header__open-search');
  const inputSearch = search.querySelector('input');
  const closeSearch = search.querySelector('.search-site__button--close');

  const closeBlock = () => {
    search.classList.remove('is-active');
    inputSearch.value = '';
  }

  openSearch.addEventListener('click', () => {
    search.classList.add('is-active');
  });

  closeSearch.addEventListener('click', () => {
    if (search.classList.contains('is-active')) {
      closeBlock();
    }
  })

  document.addEventListener('click', (e) => {
    if (search.classList.contains('is-active') && !e.target.closest('.header__search-top') && !e.target.closest('.header__open-search')) {
      closeBlock();
    }
  })
});
