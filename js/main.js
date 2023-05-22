const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav__btn');
const navBtnImg = document.querySelector('#nav__btn-img');

navBtn.onclick = () => {
   if (nav.classList.toggle('open')) {
      navBtnImg.src = "./img/svg/nav_close.svg";
   } else {
      navBtnImg.src = './img/svg/NAV.svg';
   }
}

AOS.init();