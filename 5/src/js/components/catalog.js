import data from '../../resources/artists/artist.json';

document.addEventListener('DOMContentLoaded', () => {
  const catalog = document.querySelector('.catalog');
  const picture = catalog.querySelector('picture');
  const img = picture.querySelector('img');
  const source = picture.querySelector('source');
  const name = catalog.querySelector('.catalog__title');
  const date = catalog.querySelector('.catalog__subtitle');
  const desc = catalog.querySelector('.catalog__lead');
  const linkBack = catalog.querySelector('.catalog__link');
  const link = catalog.querySelectorAll('.accordion__link');
  const activeArtist = data.artists.find(item => item.id === '12');

  link.forEach((item, index) => {
    item.setAttribute('data-artist-id', `${index + 1}`);
    const dataLink = item.dataset.artistId;
    const dataArtist = data.artists.find(item => item.id === dataLink);

    item.addEventListener('click', (e) => {
      item.classList.add('active');

      link.forEach(el => {
        if (el !== item) {
          el.classList.remove('active');
        }
      })

      if (window.innerWidth <= 1024) {
        item.href = '#painter';
      } else {
        e.preventDefault();
      }

      img.src = 'img/catalog/Catalog-clear.jpg';
      source.srcset = 'img/catalog/Catalog-clear.webp';
      name.textContent = 'Что мы о нём знаем?';
      desc.textContent = 'Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!';

      date.style.display = 'none';
      linkBack.style.display = 'inline-block';

      if (dataArtist) {
        img.src = `${dataArtist.img}.jpg`;
        source.srcset = `${dataArtist.img}.webp`;
        name.textContent = dataArtist.name;
        date.textContent = dataArtist.date;
        desc.textContent = dataArtist.desc;

        date.style.display = 'inline-block';
        linkBack.style.display = 'none';
      }
    })
  })

  if (activeArtist) {
    img.src = `${activeArtist.img}.jpg`;
    source.srcset = `${activeArtist.img}.webp`;
    name.textContent = activeArtist.name;
    date.textContent = activeArtist.date;
    desc.textContent = activeArtist.desc;

    date.style.display = 'inline-block';
    linkBack.style.display = 'none';
  }

});


