const burgerBtn = document.querySelector('.hamburger');
const burgerMenu = document.querySelector('.header__navigation');
const burgerIcon = burgerBtn.querySelector('.hamburger__icon');

const sliderBtnLeft = document.querySelector('.slider__button_left');
const sliderBtnRight = document.querySelector('.slider__button_right');
const sliderWrapper = document.querySelector('.slider__slide-wrapper');
const slideLeft = document.querySelector('#slide-left');
const slideMiddle = document.querySelector('#slide-middle');
const slideRight = document.querySelector('#slide-right');



// --------------BURGER MENU --------------------
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


// -------------- SLIDER --------------------



sliderBtnLeft.addEventListener('click', sliderBtnClickHandler);
sliderBtnRight.addEventListener('click', sliderBtnClickHandler);

function sliderBtnClickHandler(e) {
    if (e.target.classList.contains('slider__button_left')) {
        moveSlider('left');
    } else if (e.target.classList.contains('slider__button_right')) {
        moveSlider('right');
    }
}

function moveSlider(direction) {
    const classToAdd = `move-${direction}`;

    const middleSlideData = {
        title: slideMiddle.querySelector('.slide__title').innerText,
        text: slideMiddle.querySelector('.slide__text').innerText,
        price: slideMiddle.querySelector('.slide__price').innerText,
        imageUrl: slideMiddle.querySelector('.slide__image').getAttribute('src'),
    };
    const leftSlideData = {
        title: slideLeft.querySelector('.slide__title').innerText,
        text: slideLeft.querySelector('.slide__text').innerText,
        price: slideLeft.querySelector('.slide__price').innerText,
        imageUrl: slideLeft.querySelector('.slide__image').getAttribute('src'),
    };
    const rightSlideData = {
        title: slideRight.querySelector('.slide__title').innerText,
        text: slideRight.querySelector('.slide__text').innerText,
        price: slideRight.querySelector('.slide__price').innerText,
        imageUrl: slideRight.querySelector('.slide__image').getAttribute('src'),
    };



    sliderWrapper.classList.add(classToAdd);
    sliderWrapper.addEventListener('transitionend', () => {
        sliderWrapper.classList.remove(classToAdd);

        if (direction === 'left') {
            slideMiddle.querySelector('.slide__title').innerText = leftSlideData.title;
            slideMiddle.querySelector('.slide__text').innerText = leftSlideData.text;
            slideMiddle.querySelector('.slide__price').innerText = leftSlideData.price;
            slideMiddle.querySelector('.slide__image').setAttribute('src', leftSlideData.imageUrl);

            slideRight.querySelector('.slide__title').innerText = middleSlideData.title;
            slideRight.querySelector('.slide__text').innerText = middleSlideData.text;
            slideRight.querySelector('.slide__price').innerText = middleSlideData.price;
            slideRight.querySelector('.slide__image').setAttribute('src', middleSlideData.imageUrl);

            slideLeft.querySelector('.slide__title').innerText = rightSlideData.title;
            slideLeft.querySelector('.slide__text').innerText = rightSlideData.text;
            slideLeft.querySelector('.slide__price').innerText = rightSlideData.price;
            slideLeft.querySelector('.slide__image').setAttribute('src', rightSlideData.imageUrl);
        } else {
            slideMiddle.querySelector('.slide__title').innerText = rightSlideData.title;
            slideMiddle.querySelector('.slide__text').innerText = rightSlideData.text;
            slideMiddle.querySelector('.slide__price').innerText = rightSlideData.price;
            slideMiddle.querySelector('.slide__image').setAttribute('src', rightSlideData.imageUrl);

            slideLeft.querySelector('.slide__title').innerText = middleSlideData.title;
            slideLeft.querySelector('.slide__text').innerText = middleSlideData.text;
            slideLeft.querySelector('.slide__price').innerText = middleSlideData.price;
            slideLeft.querySelector('.slide__image').setAttribute('src', middleSlideData.imageUrl);

            slideRight.querySelector('.slide__title').innerText = leftSlideData.title;
            slideRight.querySelector('.slide__text').innerText = leftSlideData.text;
            slideRight.querySelector('.slide__price').innerText = leftSlideData.price;
            slideRight.querySelector('.slide__image').setAttribute('src', leftSlideData.imageUrl);
        }



    });
}
