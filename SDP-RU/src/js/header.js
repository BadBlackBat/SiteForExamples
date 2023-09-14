// export const headerSelect = () => {
  if (document.getElementById('header')) {
    // select Region
    const selectRegion = document.querySelector('#selectRegion');
    const choicesRegion = new Choices(selectRegion, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
    });
    
    // selectCategory
    const selectCategory = document.querySelector('#selectCategory');
    const choicesCategory = new Choices(selectCategory, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
    });
  };
// }