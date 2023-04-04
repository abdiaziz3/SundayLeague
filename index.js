let timerText = document.getElementById("timer")
let scorebtn1 = document.getElementById("score1")
let scorebtn2 = document.getElementById("score2")

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

function btnIncrement () {
    add
}
