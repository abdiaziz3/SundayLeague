let timerText = document.getElementById("timer")
let startGame = document.getElementById("start-game")
let stopGame = document.getElementById("stop-game")

let scoreBtn1 = document.getElementById("point-action-home")
let scoreBtn2 = document.getElementById("point-action-away")


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
