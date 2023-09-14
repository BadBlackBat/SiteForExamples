// export const btnsMore = () => {
  if (document.getElementById('rating')) {
    const btnMore = document.querySelector('.rating__btn');
    btnMore.addEventListener('click', function () {
      let count = 4;
      let cardHidden = document.querySelectorAll('.card-hidden');
      if (count <= cardHidden.length) {
        for(let i = 0; i < count; i++) {
          cardHidden[i].classList.remove('card-hidden');
          cardHidden[i].style.display = 'flex';
        }} else {
          btnMore.textContent = 'В каталог!'
          btnMore.addEventListener('click', () => {
            document.location = 'catalog.html';
          })
        }
    })
  };
// }