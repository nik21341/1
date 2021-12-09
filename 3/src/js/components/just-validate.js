new JustValidate('.form-mailing', {
    rules: {

        mail: {
            required: true,
            email: true
        },
    },

    messages: {

        mail: {
            required: 'Укажите ваш e-mail',
            email: 'Недопустимый формат',
        },
    },
});

new JustValidate('.form-request', {
    rules: {

        name: {
            required: true,
            minLength: 2,
            maxLength: 20,
            strength: {
                custom: '^[a-zA-Z\-]+$',
            },
        },

        mail: {
            required: true,
            email: true
        },

        text: {
            required: true,
            minLength: 2,
            maxLength: 20
        },

    },

    messages: {


        name: {
            required: 'Введите имя',
            minLength: 'Минимально 2 символа',
            maxLength: 'Максимально 20 символов',
            strength: 'Недопустимый формат'
        },

        mail: {
            required: 'Укажите ваш e-mail',
            email: 'Недопустимый формат',
        },

        text: {
            required: 'Оставте коментарий',
            minLength: 2,
            maxLength: 20
        },
    },
});