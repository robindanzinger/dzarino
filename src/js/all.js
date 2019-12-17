let navbar = document.querySelector("#navbar")

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
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
