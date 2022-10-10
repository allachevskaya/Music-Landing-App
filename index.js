const btnLogeinHeader = document.querySelector('.header-login');
const inputHeader = document.querySelector('.input');
const iconMenuHeader = document.querySelector('.menu')
const iconInput = document.querySelector('#inputImg');
const listInput = document.querySelector('.list');
const BtnsLogin = document.querySelector('.__burger-login');


const slides = document.querySelectorAll('.slide')
const btnUp = document.querySelector('.__right')
const btnDown = document.querySelector('.__left')



let state = 0;





addClassListOpen(); // media
getSlide(); // slider



// при изменении ширины экрана добавляет классы
function addClassListOpen() {
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 1050) {
      // 0...768
      btnLogeinHeader.classList.add('close');
      inputHeader.classList.add('close');
      iconMenuHeader.classList.add('open')
    } else {
      // 769...Inf
      btnLogeinHeader.classList.remove('close');
      inputHeader.classList.remove('close');
      iconMenuHeader.classList.add('open');
    }
  });

  getListHeader();
}


// при клике показывает список 
function getListHeader() {
  iconInput.addEventListener('click', () => {
    listInput.classList.toggle('close')
  })
  iconMenuHeader.addEventListener('click', () => {
    BtnsLogin.classList.toggle('close')
  })
}





function getSlide() {

  const activeSlide = index => {
    for (let i of slides) {
      i.classList.remove('active')
    }
    slides[index].classList.add('active')
  }

  const nextSlide = () => {
    if (state == slides.length - 1) {
      state = 0;
      activeSlide(state);
    } else {
      state++;
      activeSlide(state);
    }

  }

  const prevSlide = () => {
    if (state === 0) {
      state = slides.length - 1;
      activeSlide(state)
    } else {
      state--;
      activeSlide(state)
    }
  }
  btnUp.addEventListener('click', nextSlide);

  btnDown.addEventListener('click', prevSlide);

  let timerId = setInterval(() => nextSlide(), 5000);
}

