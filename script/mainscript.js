const homeNav = document.getElementById("home-nav");
const gamesNav = document.getElementById("games-nav");
const aboutNav = document.getElementById("about-nav");
const faqsNav = document.getElementById("faqs-nav");
const storeNav = document.getElementById("store-nav");

//Storing navigation buttons in an array
const navigation = [homeNav, gamesNav, aboutNav, faqsNav, storeNav];

const menuButton = document.getElementsByClassName("menu-icon");

const profileButton = document.getElementById("profile-icon");
const basketButton = document.getElementById("basket-icon");
/*
homeNav.addEventListener('click', () => {
    window.location.href = "/index.html";
})
gamesNav.addEventListener('click', () => {
    window.location.href = "/pages/games.html"
})
aboutNav.addEventListener('click', () => {
    window.location.href = "/pages/about.html"
})
faqsNav.addEventListener('click', () => {
    window.location.href = "/pages/faqs.html"
})
storeNav.addEventListener('click', () => {
    window.location.href = "/pages/store.html"
})
*/