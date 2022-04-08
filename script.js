const button = document.querySelector(".toggle-button");
const navbar = document.querySelector(".navbar-links");

button.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
})