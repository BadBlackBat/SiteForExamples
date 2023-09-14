// export const priceSlider = () => {
  const rangeSlider = document.getElementById('slider-range');
  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [20000, 150000],
      connect: true,
      step: 1,
      range: {
          'min': [0],
          'max': [250000],
      }
    });
  
    const inputFrom = document.getElementById('price-from');
    const inputTo = document.getElementById('price-to');
    const inputs = [inputFrom, inputTo];
  
    rangeSlider.noUiSlider.on('update', function(values, handle){
      inputs[handle].value = Math.round(values[handle]);
    });
  
    const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;
      rangeSlider.noUiSlider.set(arr);
    };
  
    inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    });
  };
// }