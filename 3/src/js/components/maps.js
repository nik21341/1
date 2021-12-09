const script = document.createElement('script');
let flag = 0;
script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU';
script.type = 'text/javascript';

window.addEventListener('scroll', function () {
  let scrollY = window.scrollY;

  let mapOffset = document.querySelector(".contacts").offsetTop;

  if ((scrollY >= mapOffset - 300) && (flag == 0)) {
    document.head.append(script);
    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("map", {
        center: [55.760027847747125, 37.61872215846591],
        controls: [],
        zoom: 13
      },
        {
          suppressMapOpenBlock: true
        });

      var myPlacemark = new ymaps.Placemark([55.769490834587224, 37.639480376958915], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.svg',
        iconImageSize: [12, 12],
        iconImageOffset: [-20, -35]
      });

      myMap.geoObjects.add(myPlacemark);
    }
    flag = 1;
  }
});





