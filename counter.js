const timerDisplay = document.getElementById("counterDisplay");
const buttons = document.querySelectorAll("button");

// const updateTime = updateTime();
const countObj = [`${updateTime()}`];




buttons.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        if(index === 0) {
            console.log("start clicked");
            startTimer();
        }
        else {
            console.log("stop clicked");
            stopTimer();
        }
    });
});

function startTimer() {
    const input = prompt("Enter a Date: ");
    localStorage.setItem("time",input);
    window.location.reload()
}

function stopTimer() {
    clearInterval(counterRepeat);
    timerDisplay.textContent = "CANCELLED";
}
function updateTime() {
    return localStorage.getItem("time");
}

let counterRepeat = setInterval(()=>{
    const countDown = new Date(countObj[0]).getTime();
    const mainDate = new Date();

    const dateDiff = countDown - mainDate;

    const day = Math.floor(dateDiff/(1000*60*60*24));
    const hour = Math.floor(dateDiff % (1000*60*60*24)/(1000*60*60));
    const mins = Math.floor(dateDiff % (1000*60*60)/(1000*60));
    const sec = Math.floor(dateDiff % (1000*60)/(1000));
    console.log(day, hour, mins, sec);

    timerDisplay.innerHTML = `${day < 10 ? "0"+day: day}:${hour < 10 ? "0"+hour: hour}:${mins < 10 ? "0"+mins: mins}:${sec < 10 ? "0"+sec: sec}`;

}, 1000);