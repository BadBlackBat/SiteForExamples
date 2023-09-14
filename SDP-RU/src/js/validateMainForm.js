// export const validateMainform = () => {
  if (document.getElementById('feedback')) {

    // Input Mask
    var selector = document.getElementById("phone");
    var im = new Inputmask("+7(999) 999-99-99");
    im.mask(selector);
    
    // Validate Form Feedback
    const validate = new window.JustValidate('#feedback-form');
    
    validate
      .addField('#name', [
        {
          rule: 'required',
          errorMessage: 'Поле обязательно для заполнения',
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
      .addField('#email', [
          {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
          },
          {
            rule: 'email',
            errorMessage: 'Недопустимый формат!',
          },
        ])
      .addField('#phone', [
        {
          rule: 'required',
          errorMessage: 'Введите Ваш номер телефона'
        },
        {
          validator: (value) => {
            const tel = selector.inputmask.unmaskedvalue()
            return Boolean(Number(tel) && tel.length === 10)
          },
          errorMessage: "Введите номер полностью"
        },
      ])
      .addField('#checkbox', [
        {
          rule: 'required',
          errorMessage: 'Вы должны принять соглашение',
        },
      ])
      .onSuccess(()=> {
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        document.getElementById('checkbox').checked = false;
        setTimeout(() => {
          document.body.classList.add('stop-scroll');
          document.querySelector('.modals__overlay').classList.add('modal--visible');
          document.querySelector('.modals__thanks').classList.add('modal--visible');
        }, 500);
      }
    );

    document.querySelector('.modal__close').addEventListener('click', () => {
      document.body.classList.remove('stop-scroll');
      document.querySelector('.modals__overlay').classList.remove('modal--visible');
      document.querySelector('.modals__thanks').classList.remove('modal--visible');
    });

    document.querySelector('.modals__overlay').addEventListener('click', (e) => {
      if (e.target == document.querySelector('.modals__overlay')) {
        document.body.classList.remove('stop-scroll');
        document.querySelector('.modals__overlay').classList.remove('modal--visible');
        document.querySelector('.modals__thanks').classList.remove('modal--visible');
      };
    });
  };
// }