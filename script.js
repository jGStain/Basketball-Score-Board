const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
const homeOne = document.getElementById("home-one");
const homeTwo = document.getElementById("home-two");
const homeThree = document.getElementById("home-three");
const guestOne = document.getElementById("guest-one");
const guestTwo = document.getElementById("guest-two");
const guestThree = document.getElementById("guest-three");
const newGameBtn = document.getElementById("new-game");

let homeTotal = 0;
let guestTotal = 0;

homeOne.addEventListener("click", scoreOneHome);
homeTwo.addEventListener("click", scoreTwoHome);
homeThree.addEventListener("click", scoreThreeHome);
guestOne.addEventListener("click", scoreOneGuest);
guestTwo.addEventListener("click", scoreTwoGuest);
guestThree.addEventListener("click", scoreThreeGuest);

function scoreOneHome() {
    homeTotal = homeTotal + 1;
    homeScore.innerHTML = homeTotal;
}

function scoreTwoHome() {
    homeTotal = homeTotal + 2;
    homeScore.innerHTML = homeTotal;
}

function scoreThreeHome() {
    homeTotal = homeTotal + 3;
    homeScore.innerHTML = homeTotal;
}

function scoreOneGuest() {
    guestTotal = guestTotal + 1;
    guestScore.innerHTML = guestTotal;
}

function scoreTwoGuest() {
    guestTotal = guestTotal + 2;
    guestScore.innerHTML = guestTotal;
}

function scoreThreeGuest() {
    guestTotal = guestTotal + 3;
    guestScore.innerHTML = guestTotal;
}

newGameBtn.addEventListener("click", newGame);

function newGame() {
    homeTotal = 0;
    guestTotal = 0;
    homeScore.innerHTML = homeTotal;
    guestScore.innerHTML = guestTotal;
}