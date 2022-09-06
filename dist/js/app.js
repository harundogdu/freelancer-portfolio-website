window.onscroll = () => {
  colorFunction();
};

const portfolio = document.getElementById('portfolio');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const list = document.querySelector('#navbar ul');

const portfolioOffsetTop = portfolio.offsetTop - 10;
const aboutOffsetTop = about.offsetTop;
const contactOffsetTop = contact.offsetTop;

const colorFunction = () => {
  if (
    window.pageYOffset >= portfolioOffsetTop &&
    window.pageYOffset < aboutOffsetTop
  ) {
    list.children[0].classList.add('active');
    list.children[1].classList.remove('active');
    list.children[2].classList.remove('active');
  } else if (
    window.pageYOffset >= aboutOffsetTop &&
    window.pageYOffset < contactOffsetTop
  ) {
    list.children[1].classList.add('active');
    list.children[0].classList.remove('active');
    list.children[2].classList.remove('active');
  } else if (window.pageYOffset >= contactOffsetTop) {
    list.children[2].classList.add('active');
    list.children[0].classList.remove('active');
    list.children[1].classList.remove('active');
  } else {
    list.children[0].classList.remove('active');
    list.children[1].classList.remove('active');
    list.children[2].classList.remove('active');
  }
};
