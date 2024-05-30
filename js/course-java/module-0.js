const menu = document.querySelector('.nav__menu');
const close = document.querySelector('.nav__close')
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');

const modal = document.querySelector('.modal');
const modalButtonClose = document.querySelector('.modal__close');
const modalButtonCta = document.querySelector('.modal__cta');

menu.addEventListener('click', () => {
    menuList.classList.add('nav__list--show');
    menu.style.display = 'none';
    close.style.display = 'block';
    close.style.position = 'fixed';
});

close.addEventListener('click', () => {
    menuList.classList.remove('nav__list--show');
    menu.style.display = 'block';
    close.style.display = 'none';
    close.style.position = '';
});

links.forEach(function (link) {
    link.addEventListener('click', function () {
        menuList.classList.remove('nav__list--show');
        menu.style.position = 'block';
        close.style.display = 'none';
    });
});

// MODAL

// Se ejecuta cuando se carga el DOM
document.addEventListener('DOMContentLoaded', () => {
    modal.classList.add('modal--visible');

    modalButtonClose.addEventListener('click', () => {
        modal.classList.remove('modal--visible');
    });

    modalButtonCta.addEventListener('click', () => {
        modal.classList.remove('modal--visible');
    });
});