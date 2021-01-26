const openPopupBtn = document.querySelectorAll('.js-open-popup');
const discountPopup = document.getElementById('discount-popup');
const signupPopup = document.getElementById('signup-popup');
const webinarPopup = document.getElementById('webinar-popup');
const body = document.querySelector('.body');
const closePopup = document.querySelectorAll('.popup__close');

for(let i = 0; i < openPopupBtn.length; i++) {
  openPopupBtn[i].addEventListener('click', (e) => {
    let popup = document.getElementById(`${e.target.dataset.popup}-popup`);
    if (popup) {
      popup.classList.remove('visually-hidden');
      body.classList.add('body__overlay');
      popup.querySelector('input').focus();
    }
  })
}

for(let i = 0; i < closePopup.length; i++) {
  closePopup[i].addEventListener('click', () => {
    closePopup[i].parentElement.classList.add('visually-hidden');
      body.classList.remove('body__overlay');
  })
}

// setTimeout(function() {
//   discountPopup.classList.remove('visually-hidden');
//   body.classList.add('body__overlay');
//   discountPopup.querySelector('input').focus();
// }, 40000)
