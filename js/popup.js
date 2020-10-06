const enterEmailBtn = document.querySelectorAll('.enter-email')
const popup = document.getElementById('popup')
const body = document.querySelector('.body')
const closePopup = document.querySelector('.popup__close')

for(let i = 0; i < enterEmailBtn.length; i++) {
  enterEmailBtn[i].addEventListener('click', () => {
    popup.classList.remove('visually-hidden')
    body.classList.add('body__overlay')
  })
}

closePopup.addEventListener('click', () => {
  popup.classList.add('visually-hidden')
    body.classList.remove('body__overlay')
})
