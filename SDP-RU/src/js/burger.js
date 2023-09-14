// export const burgerMenu = () => {
  const burgerBtn = document.querySelector('.burger');
  const burgerNav = document.querySelector('.burger-nav');
  const burgerClose = document.querySelector('.burger-close');
  const navAdd = document.querySelector('.nav-add');
  const mediaQuery580 = window.matchMedia('(max-width: 580px)');
  const mediaQuery980 = window.matchMedia('(min-width: 980px)');

  burgerBtn.addEventListener('click', () => {
    burgerNav.style.display = 'block';
    burgerNav.classList.add('burger-open');
    document.body.classList.add('stop-scroll');
    if (mediaQuery580.matches) {
      navAdd.classList.add('nav-add-mobile');
    };
  });

  burgerClose.addEventListener('click', () => {
    burgerNav.classList.remove('burger-open');
    burgerNav.style.display = 'none';
    document.body.classList.remove('stop-scroll');
    if (mediaQuery580.matches) {
      navAdd.classList.remove('nav-add-mobile');
    };
  });

  function changeSizeMobile(e) {
    if (e.matches) {
      burgerNav.style.display = 'block';
      document.body.classList.remove('stop-scroll');
    } else {
      burgerNav.style.display = 'none';
    };
  };

  mediaQuery980.addListener(changeSizeMobile);
  changeSizeMobile(mediaQuery980);
// }