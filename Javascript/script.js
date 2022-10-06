let home = document.getElementById("home-score")
let guest = document.getElementById("guest-score")

let homeScore = 0;
function homeAdd1() {
    homeScore += 1
    home.textContent = homeScore
}
function homeAdd2() {
    homeScore += 2
    home.textContent = homeScore
}
function homeAdd3() {
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

let periodCounter = document.getElementById("period-time")

let periodScore = 0

function period() {
    periodScore+= 1
    periodCounter.textContent = periodScore
}

let foulHome = document.getElementById("home-foul")
let foulGuest = document.getElementById("guest-foul")

let homeFoulScore = 0
function homeFoul() {
    homeFoulScore += 1
    foulHome.textContent = homeFoulScore
}

let guestFoulScore = 0
function guestFoul() {
    guestFoulScore += 1
    foulGuest.textContent = guestFoulScore
}



let leadingScore = document.getElementById("game-leader")

let getHomeScore = document.getElementById("home-score").value
let getGuestScore = document.getElementById("guest-score").value

function endGame() {
    if ( getHomeScore > getGuestScore) {
        leadingScore.textContent = "Home Wins"
    }else if ( getHomeScore < getGuestScore) {
        leadingScore.textContent = "Guest Wins"
    }else if ( getHomeScore === getGuestScore) {
        leadingScore.textContent = "Draw"
    }

    reset();
}

function reset() {
    home.textContent = 0
    guest.textContent = 0
    periodCounter.textContent = 1
    foulHome.textContent = 0
    foulGuest.textContent = 0
}