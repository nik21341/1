import JustValidate from 'just-validate';
import Inputmask from "inputmask";

var selector = document.querySelector('.form-contacts__input--tel');
var im = new Inputmask("+7(999)-999-99-99");
im.mask(selector);

const validate = new JustValidate('.form-contacts', {
  errorLabelStyle: {
    color: '#D11616',
  }
})

validate
  .addField('.form-contacts__input--name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Максимум 30 символа',
    },
    {
      rule: 'required',
      errorMessage: 'Заполните поле',
    },
    {
      validator: (name, value) => {
        const customRegexp = /[^а-яА-яёЁA-Za-z]/;

        return !name.match(customRegexp)
      },
      errorMessage: 'Недопустимый формат',
    }
  ])
  .addField('.form-contacts__input--tel', [
    {
      rule: 'required',
      errorMessage: 'Заполните поле',
    },
    {
      validator: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()

        return phone.length === 10
      },
      errorMessage: 'Введите корректный номер'
    }
  ])

validate.onSuccess((ev) => {
  ev.target.submit();
})
