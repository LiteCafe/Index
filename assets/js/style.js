navheader = document.getElementById("navbar");
navLogo = document.getElementById("nav-logo");
navbar = document.getElementById("navbar");

addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-scrolled");
        navLogo.setAttribute("src", "/img/logo-nobg-black.png");
        navheader.setAttribute("data-bs-theme", "light");
    } else {
        navbar.classList.remove("navbar-scrolled");
        navLogo.setAttribute("src", "/img/logo-nobg-white.png");
        navheader.setAttribute("data-bs-theme", "dark");
    }
});
