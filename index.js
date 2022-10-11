const btnLogeinHeader = document.querySelector('.header-login');
const inputHeader = document.querySelector('.input');
const iconMenuHeader = document.querySelector('.menu')
const iconInput = document.querySelector('#inputImg');
const listInput = document.querySelector('.list');
const BtnsLogin = document.querySelector('.__burger-login');


const slides = document.querySelectorAll('.slide');
const btnUp = document.querySelector('.__right');
const btnDown = document.querySelector('.__left');


const btnLogin = document.querySelectorAll('.__loginIn');
const btnRegister = document.querySelectorAll('.__register')
const formLogin = document.querySelector('.__Alertlogin');
const formRegister = document.querySelector('.__Alertregister');
const closeAlerts = document.querySelectorAll('.closeAlert');
const test = document.querySelectorAll('.test');

let state = 0;








addClassListOpen(); // media
getAlert(); //alert 
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


function getAlert() { // alert login/ register

  const showForm = (classToggle) => {
    classToggle.classList.toggle('close');

    for (item of closeAlerts) {
      item.addEventListener('click', () => {
        classToggle.classList.add('close')
      })
    }
  }



  for (btn of btnLogin) {
    btn.addEventListener('click', () => {
      showForm(formLogin)
    })
  }

  for (btn of btnRegister) {
    btn.addEventListener('click', () => {
      showForm(formRegister)
    })
  }


}
