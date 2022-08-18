let slider = document.querySelectorAll('.review__item');
let btnPrev = document.querySelector('.review__prev');
let btnNext = document.querySelector('.review__next');
let lastSlide = slider.length - 1;

if (document.querySelector('.js-body')) {
  let slideChange = function (side, sideChange, count) {
    for (let i = 0; i <= lastSlide; i++) {
      if (slider[i].classList.contains('active')) {
        slider[i].classList.remove('active');

        if (i === side) {
          slider[sideChange].classList.add('active');
        } else {
          slider[i + count].classList.add('active');
        }
        return;
      }
    }
  };

  //skillup last page, faq buttons
  const question = document.querySelectorAll('.faq__question');
  const answer = document.querySelectorAll('.faq__answer');

  for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', function () {
      question[i].classList.toggle('faq__question--open');
      answer[i].classList.toggle('active');
    });
  }

  // animated scroll for anchors
  const anchors = document.querySelectorAll('a[href^="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  if (btnNext) {
    btnNext.onclick = function () {
      slideChange(lastSlide, 0, 1);
    };

    btnPrev.onclick = function () {
      slideChange(0, lastSlide, -1);
    };
  }
}

// nav burger
const burgerMenu = document.querySelector('.nav__mobile-menu');
const navWrapper = document.querySelector('.nav__wrapper');

if (burgerMenu) {
  burgerMenu.addEventListener('click', () => {
    navWrapper.classList.toggle('nav__wrapper--open-menu');
  });
}

const closeCookie = document.querySelector('.cookie__button');
const cookiePopup = document.querySelector('.cookie');
if (!getCookie('agreePP')) {
  cookiePopup.classList.remove('hidden');
}

if (closeCookie) {
  closeCookie.addEventListener('click', () => {
    setCookie('agreePP', 'agreed');
    cookiePopup.classList.add('hidden');
  });
}

function setCookie(name, value) {
  const date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + date.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(';').forEach(function (el) {
    let [key, value] = el.split('=');
    cookie[key.trim()] = value;
  });
  return cookie[cookieName];
}
