// import { headerSelect } from "./header.js";
// import { burgerMenu } from "./burger.js";
// import { slidersSite } from "./sliders.js";
// import { btnsMore } from "./btnMore.js";
// import { validateMainform } from "./validateMainForm.js";
// import { priceSlider } from "./rangeSlider.js";
// import { filterCheckboxes } from "./filterCheckboxes.js";
// import { yandexMap } from "./yaMap.js";
// import { modalsWindows } from "./modals.js";

const btnLinkBuy = document.querySelectorAll('.btn-buy');
btnLinkBuy.forEach((el) => {
  el.addEventListener('click', ( )=> {
    document.location='product.html';
  });
});

// headerSelect();
// burgerMenu();
// slidersSite();
// btnsMore();
// validateMainform();
// priceSlider();
// filterCheckboxes();
// yandexMap();
// modalsWindows();

