let home = document.getElementById("home-score")
let guest = document.getElementById("guest-score")

let homeScore = 0;

function add1() {
    homeScore += 1
    home.textContent = homeScore
}

function add2() {
    homeScore += 2
    home.textContent = homeScore
}

function add3() {
    homeScore += 3
    home.textContent = homeScore
}

let guestScore = 0

function guestAdd1() {
    guestScore += 1
    guest.textContent = guestScore
}

function guestAdd2() {
    guestScore += 2
    guest.textContent = guestScore
}

function guestAdd3() {
    guestScore += 3
    guest.textContent = guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0
    home.textContent = homeScore
    guest.textContent = guestScore
}


let leadingScore = document.getElementById("game-leader")

function endGame() {
    let getHomeScore = document.getElementById("home-score").value
    let getGuestScore = document.getElementById("guest-score").value

    if ( getHomeScore > getGuestScore) {
        leadingScore.textContent = "Home Wins"
    }else if ( getHomeScore < getGuestScore) {
        leadingScore.textContent = "Guest Wins"
    }else if ( getHomeScore === getGuestScore) {
        leadingScore.textContent = "Draw"
    }
}