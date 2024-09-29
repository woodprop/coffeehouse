const burgerBtn = document.querySelector('.hamburger');
const burgerMenu = document.querySelector('.header__navigation');
const burgerIcon = burgerBtn.querySelector('.hamburger__icon');

burgerBtn.addEventListener('click', toggleBurgerMenu);
burgerMenu.addEventListener('click', burgerMenuClickHandler);

function toggleBurgerMenu() {

    if (!burgerMenu.classList.contains('header__navigation_popup')) {
        openBurgerMenu();
    } else {
        closeBurgerMenu();
    }
}

function openBurgerMenu() {
    burgerMenu.classList.add('header__navigation_popup');
    burgerIcon.classList.add('hamburger__icon_x');
    document.body.classList.add('body_modal-opened');
}

function closeBurgerMenu() {
    burgerMenu.classList.remove('header__navigation_popup');
    document.body.classList.remove('body_modal-opened');
    burgerIcon.classList.remove('hamburger__icon_x');
}

function burgerMenuClickHandler(e) {

    if (e.target.classList.contains('navigation__link')) {
        closeBurgerMenu();
    }
}