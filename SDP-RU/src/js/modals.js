// export const modalsWindows = () => {
  
  if (document.getElementById('product')) {
  const btns = document.querySelectorAll('.btn-modal');
  const modalsMain = document.getElementById('modals');
  const modals = document.querySelectorAll('.modal');
  const modalsOverlay = document.querySelector('.modals__overlay');
  const close = document.querySelectorAll('.modal__close');
    
    btns.forEach((el) => {
      el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
      modalsOverlay.classList.add('modals__overlay--visible');
      document.body.classList.add('stop-scroll');
      });
    });
  
    modalsOverlay.addEventListener('click', (e) => {
      if (e.target == modalsOverlay) {
      modalsOverlay.classList.remove('modals__overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
        document.body.classList.remove('stop-scroll');
      });
      }
    });
  
    close.forEach((el) => {
      el.addEventListener('click', () => {
        modalsOverlay.classList.remove('modals__overlay--visible');
        modals.forEach((el) => {
          el.classList.remove('modal--visible');
          document.body.classList.remove('stop-scroll');
        });
      });
    });

    // modal validate form
  
    var selectorModal = document.getElementById("modal-phone");
    var mask = new Inputmask("+7(999) 999-99-99");
    mask.mask(selectorModal);
  
    const modalValidate = new window.JustValidate('#modal-form');
    
    modalValidate
      .addField('#modal-name', [
        {
          rule: 'required',
          errorMessage: 'Представьтесь, пожалуйста',
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Имя должно содержать минимум 2 символа',
        },
        {
          rule: 'maxLength',
          value: 15,
          errorMessage: 'Имя не может быть больше 15 символов',
        },
      ])
  
      .addField('#modal-phone', [
        {
          rule: 'required',
          errorMessage: 'Введите Ваш номер телефона'
        },
      ])
  
      .addField('#modal-checkbox', [
        {
          rule: 'required',
          errorMessage: 'Вы должны принять соглашение',
        },
      ])
  
      .onSuccess(()=> {
          document.getElementById('modal-name').value = '';
          document.getElementById('modal-phone').value = '';
          document.getElementById('modal-checkbox').checked = false;
          document.getElementById('sendForm').classList.remove('modal--visible');
          setTimeout(() => {
            document.querySelector('.modals__thanks').classList.add('modal--visible')
          }, 500);
      });
  };
// }