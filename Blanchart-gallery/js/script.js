// Бургер
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');

let menuLinks = menu.querySelectorAll('.header__item--link');

burger.addEventListener('click',

  function() {

    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})


// Поиск
let search = document.querySelector('.input__search--media');
let btnOpen = document.querySelector('.search--media');
let btnClose = document.querySelector('.btn__close--media');
let form = document.querySelector('.search--mediaform');
let logo = document.querySelector('.header__logo');

let iconSearch = document.querySelector('.search--media--icon');

btnOpen.addEventListener('click', function() {

  btnOpen.classList.add('search--media--active');
  search.classList.add('input__search--media--active');
  btnClose.classList.add('btn__close--media--active');
  form.classList.add('search--mediaform--active');
  burger.classList.add('burger--notactive');
  logo.classList.add('header__logo--notactive');
})

btnClose.addEventListener('click', function() {

  search.classList.remove('input__search--media--active');
  btnOpen.classList.remove('search--media--active');
  btnClose.classList.remove('btn__close--media--active');
  form.classList.remove('search--mediaform--active');
  burger.classList.remove('burger--notactive');
  logo.classList.remove('header__logo--notactive')
})


//Хедер табс
const params = {
  btnClassName: "header__item--btn",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationed", onDisable);
  }
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();


// sliders
const swiperHero = new Swiper('.hero__wrap', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
})

const swiperGallery = new Swiper('.gallery__wrap--right', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  loop: true,

  navigation: {
      nextEl: '.gallery__button-next',
      prevEl: '.gallery__button-prev',
  },
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
    clickable: true,
  },

  breakpoints: {
    320: {spaceBetween: 12, slidesPerView: 1, slidesPerGroup: 1},
    577: {spaceBetween: 38, slidesPerView: 2, slidesPerGroup: 2},
    769: {spaceBetween: 34, slidesPerView: 2, slidesPerGroup: 2},
    1025: {spaceBetween: 40, slidesPerView: 2, slidesPerGroup: 2},
    1201: {spaceBetween: 40, slidesPerView: 3, slidesPerGroup: 3},
    1440: {spaceBetween: 45, slidesPerView: 3, slidesPerGroup: 3},
    1650: {spaceBetween: 50, slidesPerView: 3, slidesPerGroup: 3}
  }

});

const swiperEvents = new Swiper('.events__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 2,
  spaceBetween: 50,
  loop: false,

  navigation: {
      nextEl: '.events__button-next',
      prevEl: '.events__button-prev',
  },
  pagination: {
    el: '.events__pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    320: {spaceBetween: 40, slidesPerView: 1, slidesPerGroup: 1},
    577: {spaceBetween: 35, slidesPerView: 2, slidesPerGroup: 2},
    769: {spaceBetween: 27, slidesPerView: 3, slidesPerGroup: 2},
    1025: {spaceBetween: 35, slidesPerView: 3, slidesPerGroup: 2},
    1201: {spaceBetween: 35, slidesPerView: 3, slidesPerGroup: 2},
    1440: {spaceBetween: 45, slidesPerView: 3, slidesPerGroup: 2},
    1650: {spaceBetween: 50, slidesPerView: 3, slidesPerGroup: 2}
  }
});

const swiperProjects = new Swiper('.projects__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  loop: false,

  navigation: {
      nextEl: '.projects__button-next',
      prevEl: '.projects__button-prev',
  },

  breakpoints: {
    320: {spaceBetween: 21, slidesPerView: 1, slidesPerGroup: 1},
    577: {spaceBetween: 34, slidesPerView: 2, slidesPerGroup: 2},
    769: {spaceBetween: 50, slidesPerView: 2, slidesPerGroup: 2},
    1025: {spaceBetween: 50, slidesPerView: 2, slidesPerGroup: 2},
    1201: {spaceBetween: 50, slidesPerView: 2, slidesPerGroup: 2},
    1440: {spaceBetween: 50, slidesPerView: 3, slidesPerGroup: 3},
    1650: {spaceBetween: 50, slidesPerView: 3, slidesPerGroup: 3}
  }
});


// select
const element = document.querySelector('#gallery__dropdown');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
});


// accordion
new Accordion('.catalog__accordion', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});


// tabs
let tabsBtn = document.querySelectorAll('.accordion__content__btn');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn){ btn.classList.remove('accordion__content__btn--active')});
        e.currentTarget.classList.add('accordion__content__btn--active');

        tabsItem.forEach(function(element){ element.classList.remove('tabs__item--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
    });
});


// tippy('.tooltips--one .tooltips--two .tooltips--three');
tippy('.tooltips--one', {
  content: 'Пример современных тенденций - современная методология разработки',
  trigger: 'click',
});

tippy('.tooltips--two', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  trigger: 'click',
});

tippy('.tooltips--three', {
  content: 'В стремлении повысить качество',
  trigger: 'click',
});


// Map
ymaps.ready(init);
function init() {

  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 14,
    controls: []
  });

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/pointmap.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42],
});

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom',);

  myMap.controls.add('geolocationControl', {
    float: 'none',
    position: {
      right: '1%',
      top: '365px',
    }
});

  myMap.controls.add('zoomControl', {
    float: 'none',
    size: 'small',
    position: {
      right: '1%',
      top: '275px',
    }
  });
}


const validation = new JustValidate('.contacts__form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Введите хотябы 2 символа'
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Необходимо ввести не более 15 символов'
    }
  ])

  .addField('#tel', [
    {
      rule: 'number',
      errorMessage: 'Недопустимый формат'
    }
  ])





  // new JustValidate('.contacts__form', {
  //   colorWrong: '#ff5c00',
  //   rules: {
  //       name: {
  //           required: true,
  //           minLength: 3,
  //           maxLength: 15
  //       },
  //       tel: {
  //           required: true,
  //           function: (name, value) => {
  //               const phone = selector.inputmask.unmaskedvalue()
  //               return Number(phone) && phone.length === 10
  //           }
  //           }, },

  //     messages: {
  //       name: {
  //         required: "Вы не ввели имя",
  //         minLength: "Имя слишком короткое",
  //         maxLength: "Имя слишком длинное"
  //         },
  //       tel: {
  //         required: "Вы не ввели телефон",
  //         function: "Введите 10 цифр номера телефона"
  //       }
  //     },
  //  });
