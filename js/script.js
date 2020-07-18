let slider = document.querySelectorAll('.review__item');
let btnPrev = document.querySelector('.review__prev')
let btnNext = document.querySelector('.review__next')
let lastSlide = slider.length - 1;

let slideChange = function(side, sideChange, count) {
  for (let i = 0; i <= lastSlide; i++) {
    if (slider[i].classList.contains('active')) {
      slider[i].classList.remove('active')

      if (i === side) {
        slider[sideChange].classList.add('active')
      } else {
        slider[i + count].classList.add('active')
      }
      return;
    }
  }
}

btnNext.onclick = function() {
  slideChange(lastSlide, 0, 1);
}

btnPrev.onclick = function() {
  slideChange(0, lastSlide, -1);
}
