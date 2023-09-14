// export const yandexMap = () => {
  if (document.getElementById('contacts')) {
    ymaps.ready(init);
    
    function init() {
      var myMap = new ymaps.Map("map", {
        center: [55.75517771677701,37.62424696636785],
        zoom: 14,
        controls: []
      });
  
      myMap.behaviors.disable('scrollZoom',);
        
      var solyankaPlacemark = new ymaps.Placemark([55.75204177497464,37.64039987434387], {
        balloonContentBody:
          '<address class="map__popap popap"><div class="popap__wrap"><h3 class="popap__title">SitDownPls на&nbsp;Солянке</h3><span class="popap__address">м. Китай-город, ул. Солянка, д.24</span><a href="+79458854547" class="popap__phone"><span>+7 (495) 885-45-47</span></a><p class="popap__descr"><span>Часы работы:</span>с&nbsp;10:00 до&nbsp;21:00</p><p class="popap__descr"><span>Что здесь:</span>шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</p></div></address>'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/placemark.svg',
        iconImageSize: [32, 22],
      });
  
      var gardenPlacemark = new ymaps.Placemark([55.75895118968326,37.63971322883606], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/placemark.svg',
        iconImageSize: [32, 22],
      });
  
      myMap.geoObjects
      .add(solyankaPlacemark)
      .add(gardenPlacemark);
    };
  };
// }