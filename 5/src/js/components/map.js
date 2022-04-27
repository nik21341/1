const script = document.createElement('script');
let flag = 0;
script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU';
script.type = 'text/javascript';
const map = document.querySelector('#map')

window.addEventListener('scroll', function () {
  let scrollY = window.scrollY;

  let mapOffset = document.querySelector(".contacts").offsetTop;

  if ((scrollY >= mapOffset - 300) && (flag == 0)) {
    document.head.append(script);
    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map(map, {
        center: [55.75853651944223, 37.60120253195957],
        controls: [],
        zoom: 15
      },
        {
          suppressMapOpenBlock: true
        });

      var myPlacemark = new ymaps.Placemark([55.75853651944223, 37.60120253195957], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/contacts/marker.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-20, -35]
      });


      var zoomControl = new ymaps.control.ZoomControl({
        options: {
          size: "small",
          position: {
            top: 108,
            right: 10,
            left: 'auto',
          }
        }
      });

      var geolocationControl = new ymaps.control.GeolocationControl({
        options: {
          noPlacemark: true,
          position: {
            top: 190,
            right: 10,
            left: 'auto'
          }
        }
      });
      geolocationControl.events.add('locationchange', function (event) {
        var position = event.get('position'),
          // При создании метки можно задать ей любой внешний вид.
          locationPlacemark = new ymaps.Placemark(position);

        myMap.geoObjects.add(locationPlacemark);
        // Установим новый центр карты в текущее местоположение пользователя.
        myMap.panTo(position);
      });

      myMap.setCenter([55.75853651944223, 37.60120253195957])

      myMap.behaviors.disable('scrollZoom');
      myMap.controls.add(geolocationControl);
      myMap.controls.add(zoomControl);
      myMap.geoObjects.add(myPlacemark);
    }
    flag = 1;
  }
});
