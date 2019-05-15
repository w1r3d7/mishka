    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    var map = document.querySelector('.contacts__map');
    map.classList.remove('contacts__map--no-js');

    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map('map', {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.938631, 30.323055],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16,
            controls: []
        });
        var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/icon-map-pin.svg',
          iconImageSize: [66, 108],
          iconImageOffset: [-35, -100],

      });

      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable('scrollZoom');
      myMap.controls.remove('zoomControl');
    }
