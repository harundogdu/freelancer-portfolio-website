document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.onscroll = () => {
  colorFunction();
};

const portfolio = document.getElementById("portfolio");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

const colorPortfolio = portfolio.offsetTop;
const colorAbout = about.offsetTop;
const colorContact = contact.offsetTop;

const colorFunction = () => {
  if (window.pageYOffset > colorPortfolio && window.pageYOffset < colorAbout) {
    navPortfolio.classList.add("coloring");
  }
  if (window.pageYOffset > colorAbout && window.pageYOffset < colorContact) {
    navbar.classList.add("coloring");
  }
  if (window.pageYOffset > colorContact) {
    navbar.classList.add("coloring");
  }
};
