let timerText = document.getElementById("timer")
let scoreBtn1 = document.getElementById("point-action-home")
let scoreBtn2 = document.getElementById("point-action-away")
let score1 = document.getElementById("score1")

function secondsCalc () { 
    let seconds = 0
    timer = setInterval(() => {
        // timerText.innerHTML = 0 + seconds;
        seconds ++;
        // console.log(timerText.innerHTML)
        let minutes = Math.floor(seconds / 60);
        let extraSeconds = seconds % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
        // console.log(minutes + "" + extraSeconds)
        timerText.textContent = minutes + ":"+ extraSeconds
    }, 1000);
}

secondsCalc()

let count = 0
let count2 = 0

scoreBtn1.addEventListener("click", () =>{
    count += 1
    score1.innerHTML = count
});

scoreBtn2.addEventListener("click", () => {
    count += 1
    score2.innerHTML = count 
});
