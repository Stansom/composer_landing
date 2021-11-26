const navbarOverlay = document.querySelector(".navbar-overlay-content");
const hamburgerButton = document.querySelector(".nav-hamburger");
const navLine = document.querySelector(".nav-line");
const allLinksArray = document.querySelectorAll(".navbar-overlay-text");
const swipeContainer = document.querySelector(".home-swipe");
const playButtons = document.querySelectorAll(".playbutton");

let toggleHamburger = () => {
    hamburgerButton.classList.toggle("expanded");
    navLine.classList.toggle("expanded");
    navbarOverlay.classList.toggle("visible");
};

hamburgerButton.addEventListener("click", toggleHamburger);

const hamburgerComputedStyle = window.getComputedStyle(hamburgerButton);

allLinksArray.forEach((link) => {
    link.addEventListener("click", () => {
        if (!(hamburgerComputedStyle.display == "none")) {
            hamburgerButton.classList.toggle("expanded");
            navLine.classList.toggle("expanded");
            navbarOverlay.classList.toggle("visible");
        }
    });
});

const thumbContainers = document.querySelectorAll('.portfolio-thumb-container');
thumbContainers.forEach((thumb) => {
    thumb.addEventListener('click', (e) => {
        e.currentTarget.style.opacity = "0";
        e.currentTarget.parentNode.querySelector('iframe').style.opacity = "1";
        e.currentTarget.parentNode.querySelector('iframe').style.zIndex = "1";
    })
})


// playButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     console.log("play clicked", e.currentTarget.parentNode.querySelector('.portfolio-thumb').classList.toggle("thumb-hidden"));
//       e.currentTarget.parentNode.querySelector('iframe').classList.toggle("video-hidden");
//       // e.currentTarget.parentNode.querySelector('.portfolio-thumb').classList.toggle("thumb-hidden");
//
//   });
// });

swipeContainer.addEventListener("click", () => {
    location.hash = "portfolio";
});
