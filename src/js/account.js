import '../scss/account.scss';

import './libs/jquery.countdown';
import './page/countdown';
import './page/forms';

/* sidebar */
if(document.querySelector('.sidebar__toggler')) {
  document.querySelector('.sidebar__toggler').addEventListener('click', (e) =>{
    e.preventDefault();
    e.target.closest('.sidebar').classList.toggle('active');
  });
}

const showSidebarBtn = document.querySelector('.show-sidebar');
if(showSidebarBtn) {
  showSidebarBtn.addEventListener('click', (e) => {
    document.body.classList.toggle('overflow-hidden');
    document.querySelector('.sidebar').classList.toggle('active');
    if(document.body.classList.contains('overflow-hidden')) {
      document.querySelector('.sidebar').style.top = `${showSidebarBtn.getBoundingClientRect().top + showSidebarBtn.scrollHeight + Number(window.getComputedStyle(showSidebarBtn.parentNode).getPropertyValue('margin-bottom').replace('px',''))}px`;
    } else {
      document.querySelector('.sidebar').style.top = null;
    }
  });
  document.body.addEventListener('click', (e) => {
    if(document.body.classList.contains('overflow-hidden') && !e.target.closest('.sidebar') && e.target != showSidebarBtn) {
      document.body.classList.remove('overflow-hidden');
      document.querySelector('.sidebar').classList.remove('active');
      document.querySelector('.sidebar').style.top = null;
    }
  });
}

/* page */
const leftmenuTogglers = document.querySelectorAll('.leftmenu__toggler');
leftmenuTogglers.forEach(leftmenuToggler => {
  leftmenuToggler.addEventListener('click', (e) =>{
    e.preventDefault();
    e.target.closest('.leftmenu__item').classList.toggle('active');
  });
});

if(document.querySelector('.show-tooltip') && document.querySelector('.tooltip__close')) {
  document.querySelector('.show-tooltip').addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('.tooltip').classList.add('active');
  });
  
  document.querySelector('.tooltip__close').addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('.tooltip').classList.remove('active');
  });
}

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 0.3*document.body.scrollHeight) {
      document.querySelector('.btn_up').classList.add('active');
  } else {
      document.querySelector('.btn_up').classList.remove('active');
  };
});

if(document.querySelector('.btn_up')) {
    document.querySelector('.btn_up').addEventListener('click', (e) => {
        document.querySelector('.page').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

/* form */
import classie from 'desandro-classie';

const onInputFocus = (e) => {
  classie.add(e.target, 'active');
}

const onInputBlur = (e) => {
  if(e.target.value.trim() === '') {
    classie.remove(e.target, 'active');
  }
};

[].slice.call(document.querySelectorAll('.form__field')).forEach((input) => {
  if(input.value.trim() !== '') {
    classie.add(input, 'active');
  }

  input.addEventListener('focus', onInputFocus);
  input.addEventListener('blur', onInputBlur);
});

/* video */
let video;
if(document.querySelector('#trial')) {
  video = document.querySelector('#trial');
  let player = new Vimeo.Player(video);
  player.on('ended', () => {
    $('#getcourse').modal('show');
  });
};