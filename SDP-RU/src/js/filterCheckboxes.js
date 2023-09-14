// export const filterCheckboxes = () => {
  if (document.getElementById('catalog')) {
    const btnCategory = document.querySelectorAll('.filter__naming');
    const checkboxes = document.querySelectorAll('.filter__menu');
    const filterTitle = document.querySelectorAll('.filter__title');
  
    filterTitle.forEach((el) => {
      el.addEventListener('click', (e) => {
        let dataNaming = e.currentTarget.getAttribute('data-naming');
        document.querySelector(`[data-filter="${dataNaming}"]`).classList.toggle('filter__menu-active');
        e.path[0].classList.toggle('filter__title-active');      
      });
    });
  };
// }