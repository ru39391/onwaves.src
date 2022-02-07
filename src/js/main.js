import 'swiper/swiper.scss';
import '../scss/main.scss';

import './libs/jquery.countdown';
import './page/countdown';
import './page/forms';

/* menu */
document.querySelector('.header__toggler_menu').addEventListener('click', () => {
    document.querySelector('.nav').classList.add('active');
    document.querySelector('body').style.overflow = 'hidden';
});

document.querySelector('.nav__close').addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('active');
    document.querySelector('body').removeAttribute('style');
});

document.querySelectorAll('.page-anchor').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if(document.querySelector('.nav').classList.contains('active')) {
            document.querySelector('.nav').classList.remove('active');
            document.querySelector('body').removeAttribute('style');
        }
    });
});

const cardTrial = document.querySelectorAll('.card_trial');
window.addEventListener('scroll', () => {
    if(window.scrollY > document.querySelector('.header').scrollHeight) {
        document.querySelector('.top').classList.add('affix');
    } else {
        document.querySelector('.top').classList.remove('affix');
    }

    cardTrial.forEach(cardTrialElem => {
        console.log(cardTrialElem.getBoundingClientRect().top)
        
        if (cardTrialElem.getBoundingClientRect().top <= 300) {
            cardTrialElem.classList.add('card_current');
        } else {
            cardTrialElem.classList.remove('card_current');
        }
    });
});

let dataTarget;
document.querySelectorAll('[data-toggle="modal"]').forEach(modalToggler => {
    modalToggler.addEventListener('click', (e) => {
        dataTarget = e.target.getAttribute('data-target');
        if(e.target.hasAttribute('data-title')) {
            document.querySelector(`${dataTarget} .modal-title`).textContent = e.target.getAttribute('data-title');
        }
        if(e.target.hasAttribute('data-link')) {
            document.querySelector(`${dataTarget} [name*="backlink"]`).value = e.target.getAttribute('data-link');
        }
    });
});

let bottomVideo;
if(document.querySelector('#bottom iframe')) {
    bottomVideo = document.querySelector('#bottom iframe');
    let bottomPlayer = new Vimeo.Player(bottomVideo);
    bottomPlayer.on('play', () => {
        document.querySelector('#bottom .play').classList.add('play_hidden');
    });
};

document.querySelectorAll('.modal_custom').forEach(modalCustom => {
    $(modalCustom).on('hide.bs.modal', () => {
        modalCustom.querySelectorAll('.form__item').forEach(formItem => {
            if(formItem.classList.contains('form__item_error')) {
                formItem.classList.remove('form__item_error');
            }
        });
    });
});

AOS.init({
    once: true
});

/* jumbotron */
const intro = new Swiper('.intro', {
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 1000,
	loop: true,
  	autoplay: {
		delay: 7000,
		disableOnInteraction: false,
	},
    /*
	navigation: {
		nextEl: '.jumbotron__btn_next',
		prevEl: '.jumbotron__btn_prev',
	},
    */
});

const scroller = new Swiper('.scroller', {
    slidesPerView: 'auto',
    spaceBetween: 0,
	navigation: {
		nextEl: '.scroller-nav__btn_next',
		prevEl: '.scroller-nav__btn_prev',
	},
});