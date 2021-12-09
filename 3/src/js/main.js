
const inputMailing = document.querySelectorAll('.form-mailing__input');
const inputRequest = document.querySelectorAll('.form-request__input');
const closeLocation = document.querySelector('.maps__close');
const locationMaps = document.querySelector('.maps__location');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const body = document.querySelector('body');
const menuList = document.querySelectorAll('.nav__link')

const inputRule = (input, write) => {
    input.forEach(el => {
        el.addEventListener('input', () => {
            el.value ? (el.style.border = write) : el.style.border = '1px solid #FF6E30';

        })
    });
}

window.addEventListener('DOMContentLoaded', function () {

    burger.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('burger--active');
        menu.classList.toggle('nav--active');
        body.classList.toggle('scroll-off');
    });

    menuList.forEach(el => {
        el.addEventListener('click', (e) => {
            body.classList.remove('scroll-off');
            menu.classList.remove('nav--active');
            burger.classList.remove('burger--active');
        })
    })

    closeLocation.addEventListener('click', () => {
        locationMaps.style.display = 'none';
    })


    inputRule(inputMailing, '1px solid #4A4A4A');
    inputRule(inputRequest, '1px solid #E9E9E9');
})