$(document).ready($(".header").animate({ opacity: "1", top: "260" }, 2000));

const item1 = document.querySelector("#item-1");
const item2 = document.querySelector("#item-2");
const item3 = document.querySelector("#item-3");
const item4 = document.querySelector("#item-4");
const navLink = document.getElementsByClassName("nav-item");
const toggler = document.querySelector(".toggler");
const items = document.getElementsByClassName("item");




const toggleMenu = function () {
  for (var i = 0; i < items.length; i++) {
    items[i].classList.toggle("hide-menu");
  }
  item1.classList.toggle("show-menu-home");
  item2.classList.toggle("show-menu-services");
  item3.classList.toggle("show-menu-gallery");
  item4.classList.toggle("show-menu-contact");

  navLink[3].classList.toggle("disable");
};

toggler.addEventListener("click", function () {
  toggleMenu();
});

for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    toggleMenu();
  });
}

const beforeAfter = [...document.getElementsByClassName('beforeAfter')];

const options = {
  rootMargin: '0px',
  threshold: 0.2
};


let toggleItem = (entries, observer) => {
  entries.forEach(entry => {
      if(entry.isIntersecting){
          entry.target.classList.add('div-show');
      }
  })
}

const observer = new IntersectionObserver(toggleItem, options);

beforeAfter.forEach(item => {
  observer.observe(item);
});

