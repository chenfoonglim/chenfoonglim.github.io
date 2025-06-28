// var val = 0

// function rotateDuck(com){
//     val += 20
//     document.getElementById("quack").style = `rotate: ${val}deg;`;

// }

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navLink");

function updateActiveLink() {
  let scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const offsetTop = section.offsetTop;
    const offsetHeight = section.offsetHeight;
    if (
      scrollPosition >= offsetTop - 100 &&
      scrollPosition < offsetTop + offsetHeight - 100
    ) {
      const id = section.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// On scroll and on load
window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);
