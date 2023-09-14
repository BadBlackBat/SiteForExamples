// export const slidersSite = () => {
  // Banner
  if (document.getElementById('banner')) {
    const bannerSlider = new Swiper('.banner__swiper', {
      loop: true,
      effect: 'fade',
      
      autoplay: {
        delay: 5000,
      },
      
      pagination: {
        el: '.banner__pagination'
      }
    });
  };

  // Special
  if (document.getElementById('special')) {
    const specialSlider = new Swiper('.special__swiper', {
      
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
      
      navigation: {
        nextEl: '.special__btn-next',
        prevEl: '.special__btn-prev',
      },
      
      breakpoints: {
        320: {slidesPerView: 1, slidesPerGroup: 1},
        700: {slidesPerView: 2, slidesPerGroup: 1},
        980: {slidesPerView: 3, slidesPerGroup: 1},
        1360: {slidesPerView: 'auto', slidesPerGroup: 3}, 
      },  
    });
  };

  // Useful
  if (document.getElementById('useful')) {
    const usefulSlider = new Swiper('.useful__swiper', {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 32,
      
      navigation: {
        nextEl: '.useful__btn-next',
        prevEl: '.useful__btn-prev',
      },
    
      breakpoints: {
        320: {slidesPerView: 1},
        580: {slidesPerView: 2, spaceBetween: 16},
        701: {slidesPerView: 2, spaceBetween: 32},
        981: {slidesPerView: 3}, 
        1200: {slidesPerView: 2}, 
      }, 
    });
  };

  // Catalog
  if (document.getElementById('catalog')) {
    const sliderCatalog = new Swiper('.catalog__swiper', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
      allowTouchMove: false,
      
      grid: {
        rows: 3,
        fill: 'row',
      },
      
      pagination: {
        el: '.catalog__pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 16,
          grid: {rows: 3},
        },
        450: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          grid: {rows: 3},
        },
        980: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          grid: {rows: 3},
        },
      },  
    });
  };

  // Product & product + modal
  if (document.getElementById('product')) {

    const swiperSm = new Swiper('.product__swiper-small', {
      spaceBetween: 38,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,

      breakpoints: {
        300: {direction: 'horizontal', spaceBetween: 38, slidesPerView: 2},
        450: {direction: 'horizontal', spaceBetween: 38, slidesPerView: 3},
        580: {direction: 'vertical', spaceBetween: 25},
        980: {direction: 'horizontal', spaceBetween: 38}
      },
    });

    const swiperBig = new Swiper('.product__swiper-big', {
      spaceBetween: 10,
      centeredSlides: true,
      allowTouchMove: false,
      thumbs: {
        swiper: swiperSm,
      },
    });

    const swiperSimilar = new Swiper('.similar__swiper', {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 32,
      
      navigation: {
        nextEl: '.similar__btn-next',
        prevEl: '.similar__btn-prev',
      },
      
      breakpoints: {
        320: {slidesPerView: 2, spaceBetween: 16},
        580: {slidesPerView: 2},
        700: {slidesPerView: 2, spaceBetween: 32},
        900: {slidesPerView: 3}, 
        1300: {slidesPerView: 4}, 
      }, 
    });
    
    const swiperModal = new Swiper('.modal__swiper-small', {
      spaceBetween: 78,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,

      navigation: {
        nextEl: '.modal__btn-next',
        prevEl: '.modal__btn-prev',
      },

      breakpoints: {
        300: {slidesPerView: 1},
        650: {slidesPerView: 2},
        980: {slidesPerView: 3}, 
        1360: {slidesPerView: 4}, 
      },
    });

    const swiperModalMain = new Swiper('.modal__swiper-big', {
      spaceBetween: 78,
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      allowTouchMove: true,
      thumbs: {
        swiper: swiperModal,
      },
    });
  };
// };