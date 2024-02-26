document.addEventListener("DOMContentLoaded", function () {
    var berandaLink = document.getElementById("berandaLink");
    var aboutLink = document.getElementById("aboutLink");
    var menuLink = document.getElementById("menuLink");
    var contactLink = document.getElementById("contactLink");

    var currentPage = window.location.pathname;

    if (currentPage.includes("index.html")) {
        berandaLink.classList.add("active");
    } else if (currentPage.includes("about.html")) {
        aboutLink.classList.add("active");
    } else if (currentPage.includes("menu.html")) {
        menuLink.classList.add("active");
    } else if (currentPage.includes("contact.html")) {
        contactLink.classList.add("active");
    }
});