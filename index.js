let time = 0
let timerText = document.getElementById("timer").innerHTML
const start = new Date().getTime();

function timeCalc (start) { 
    var days = Math.floor(start / (1000 * 60 * 60 * 24));
    var hours = Math.floor((start % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((start % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((start % (1000 * 60)) / 1000);
    return days + hours + minutes + seconds
}

console.log(timeCalc(start))