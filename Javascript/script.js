// GETTING THE ID OF HOME & GUEST SCORE BOARD
let home = document.getElementById("home-score")
let guest = document.getElementById("guest-score")

// DISPLAYING THE CLICKED BUTTON ON THE HOME SCORE BOARD
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

// DISPLAYING THE CLICKED BUTTON ON THE GUEST SCORE BOARD
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

// GETTING THE ID OF THE GAME PERIOD BOARD
let periodCounter = document.getElementById("period-time")

// DISPLAYING THE CLICKED BUTTON ON THE PERIOD BOARD
let periodScore = 0
function period() {
    periodScore+= 1
    periodCounter.textContent = periodScore
}

// GETTING THE ID OF HOME-FOUL & GUEST-FOUL BOARD
let foulHome = document.getElementById("home-foul")
let foulGuest = document.getElementById("guest-foul")

// DISPLAYING THE CLICKED BUTTON ON THE HOME-FOUL BOARD
let homeFoulScore = 0
function homeFoul() {
    homeFoulScore += 1
    foulHome.textContent = homeFoulScore
}

// DISPLAYING THE CLICKED BUTTON ON THE GUEST-FOUL BOARD
let guestFoulScore = 0
function guestFoul() {
    guestFoulScore += 1
    foulGuest.textContent = guestFoulScore
}

// QUERY SELECT HOME +1 BUTTON
let home_add1 = document.querySelector(".home-btn1")
let countHomeAdd1Clicks = 0

// ADD EVENT LISTENER AND INCREASE BY 1 ON EACH CLICK
home_add1.addEventListener("click", function () {
    countHomeAdd1Clicks += 1
})

// QUERY SELECT HOME +2 BUTTON
let home_add2 = document.querySelector(".home-btn2")
let countHomeAdd2Clicks = 0

// ADD EVENT LISTENER AND INCREASE BY 2 ON EACH CLICK
home_add2.addEventListener("click", function () {
    countHomeAdd2Clicks += 2
})

// QUERY SELECT HOME +3 BUTTON
let home_add3 = document.querySelector(".home-btn3")
let countHomeAdd3Clicks = 0

// ADD EVENT LISTENER AND INCREASE BY 3 ON EACH CLICK
home_add3.addEventListener("click", function () {
    countHomeAdd3Clicks += 3
})

// STORE EACH LISTENER IN VARIABLES
let home1 = home_add1.addEventListener()
let home2 = home_add2.addEventListener()
let home3 = home_add3.addEventListener()


// SUM UP ALL LISTENERS STORED IN EACH VARIABLE AND STORE IN homeBtnTotalClick VARIABLE
let homeBtnTotalClick = home1 + home2 + home3
console.log(homeBtnTotalClick)

// QUERY SELECT GUEST +1 BUTTON
let guest_add1 = document.querySelector(".guest-btn1")
let countGuestAdd1Clicks = 0

// ADD EVENT LISTENER AND INCREASE BY 1 ON EACH CLICK
guest_add1.addEventListener("click", function () {
    countGuestAdd1Clicks += 1
})

// QUERY SELECT GUEST +2 BUTTON
let guest_add2 = document.querySelector(".guest-btn2")
let countGuestAdd2Clicks = 0

// ADD EVENT LISTENER AND INCREASE BY 2 ON EACH CLICK
guest_add2.addEventListener("click", function () {
    countGuestAdd2Clicks += 2
})

// QUERY SELECT GUEST +2 BUTTON
let guest_add3 = document.querySelector(".guest-btn3")
let countGuestAdd3Clicks = 0

// ADD EVENT LISTENER AND INCREASE BY 2 ON EACH CLICK
guest_add3.addEventListener("click", function () {
    countGuestAdd3Clicks += 3
})

// STORE EACH LISTENER IN VARIABLES
let guest1 = guest_add1.addEventListener
let guest2 = guest_add2.addEventListener
let guest3 = guest_add3.addEventListener

// SUM UP ALL LISTENERS STORED IN EACH VARIABLE AND STORE IN guestBtnTotalClick VARIABLE
let guestBtnTotalClick = guest1 + guest2 + guest3

// GET THE ID game-leader
let leadingScore = document.getElementById("game-leader")

// DECLARES THE WINNER 
function endGame() {
    if ( homeBtnTotalClick > guestBtnTotalClick) {
        leadingScore.textContent = "Home Wins"
    }else if ( homeBtnTotalClick < guestBtnTotalClick) {
        leadingScore.textContent = "Guest Wins"
    }else {
        leadingScore.textContent = "Draw"
    }

    reset();
}

// RESETS THE WHOLE GAME
function reset() {
    home.textContent = 0
    guest.textContent = 0
    periodCounter.textContent = 1
    foulHome.textContent = 0
    foulGuest.textContent = 0
}