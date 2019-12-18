let navbar = document.querySelector("#navbar")

let showNavMenu = false;
const navmenu = document.getElementById("nav-menu");
function toggleNavMenu () {// eslint-disable-line no-unused-vars
 showNavMenu = !showNavMenu;
 if (showNavMenu) {
  navmenu.className = "nav-menu responsive";
 }
 else {
  navmenu.className = "nav-menu";
 }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navmenu.className = "nav-menu"
    showNavMenu = false
  });
});

let main = document.getElementById("main");
let prevScrollPosition = main.scrollTop;
function scrollFunction() {
  let currentScrollPosition = main.scrollTop;
  (prevScrollPosition > currentScrollPosition) ? navbar.style.top = "0" : navbar.style.top = "-4.5rem"; 
  prevScrollPosition = currentScrollPosition;
}

main.onscroll = scrollFunction;
