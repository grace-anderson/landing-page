
  
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const buttonTop = document.querySelector("#arrowUp");
/**
 * End Global Variables
 */

// // Create menu
function navMenu() {
  let navListItem = "";

  for (const section of sections) {
    const id = section.id;
    const dataNav = section.dataset.nav;
    navListItem += `<li><a class="menu__link ${id}" href="#${id}">${dataNav}</a></li>`;
  }

  navList.innerHTML = navListItem;
}

navMenu();


// set section to active when near top of viewport

for (const section of sections) {
  window.addEventListener("scroll", function () {
    const box = section.getBoundingClientRect();
    const id = section.getAttribute("id");

    if (box.top <= 80 && box.bottom >= 80) {
      document.querySelector(`.${id}`).classList.add("active");
      section.classList.add("active-class");
    } else {
      document.querySelector(`.${id}`).classList.remove("active");
      section.classList.remove("active-class");
    }
  });
}

// Scroll to section ID

document.querySelectorAll('a[href^="#"]').forEach((navLink) => {
  navLink.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(navLink.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// show scroll to top button

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
});


// scroll to top

buttonTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
