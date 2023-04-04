//timer variables
let timerText = document.getElementById("timer")
let startGame = document.getElementById("start-game")
let stopGame = document.getElementById("stop-game")

//scoreboard variables
let scoreBtn1 = document.getElementById("point-action-home")
let scoreBtn2 = document.getElementById("point-action-away")

//modal open and close variable
let modalBtn = document.getElementById("player-action-home")
let modalBg = document.querySelector(".modal-bg")
let activeBG = document.querySelector(".bg-active")
let spanClose = document.getElementById("close")
let submitBtn = document.getElementById("submit-btn")

//updating match stats variables
let matchStats = document.getElementById("player")

startGame.addEventListener("click", () => { 
    let seconds = 0
    timer = setInterval(() => {
        seconds ++;

        let minutes = Math.floor(seconds / 60);
        let extraSeconds = seconds % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

        timerText.textContent = minutes + ":"+ extraSeconds
    }, 1000);
})



//score


let count = 0
let count2 = 0

scoreBtn1.addEventListener("click", () =>{
    count += 1
    score1.innerHTML = count
});

scoreBtn2.addEventListener("click", () => {
    count2 += 1
    score2.innerHTML = count2
    console.log(score2) 
});

// Adding action e.g. Red/yellow card or warning.

modalBtn.addEventListener("click", () => {
    modalBg.classList.toggle("bg-active")
})
spanClose.addEventListener("click", () => {
    modalBg.classList.toggle("bg-active")
})
submitBtn.addEventListener("click", () => {
    modalBg.classList.toggle("bg-active")
    // console.log("yeye")
})

function getFormData () {
    let playerNumber = document.getElementById("player-input").value
    let playerAction = document.getElementById("player-action").value


    console.log(player =
        {
            "player" : {
                "number" : playerNumber, 
                "action" : playerAction
            }
        })

        matchStats.innerHTML = player[1]
}

console.log(getFormData())
