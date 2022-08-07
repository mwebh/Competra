const homeNav = document.getElementById("home-nav");
const gamesNav = document.getElementById("games-nav");
const aboutNav = document.getElementById("about-nav");
const faqsNav = document.getElementById("faqs-nav");
const storeNav = document.getElementById("store-nav");

//Storing navigation buttons in an array
const navigation = [homeNav, gamesNav, aboutNav, faqsNav, storeNav];

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
/*
let gameHeading = [document.getElementById("game1-heading"), document.getElementById("game2-heading"), document.getElementById("game3-heading")];
let gameDesc = [document.getElementById("game1-desc"), document.getElementById("game2-desc"), document.getElementById("game3-desc")];
let gameImage = [document.getElementById("game1-image"), document.getElementById("game2-image"), document.getElementById("game3-image")];

function gameHeader () {
    gameHeading[0].innerHTML = "Titanforce";
    gameHeading[1].innerHTML = "Rocket League";
    gameHeading[2].innerHTML = "Clash of clans";
}

gameHeader();
*/
const menuButton = document.querySelector(".menu-icon");

menuButton.addEventListener('click', () => {
    const mobileNavigation = document.querySelector(".mobile-navigation");
    mobileNavigation.classList.toggle("active");
})