
let secondsEl = document.getElementById('seconds');
let minutesEl = document.getElementById('minutes');
let hoursEl = document.getElementById('hours');
let daysEl = document.getElementById('days');

let newYear = "1 Jan 2022";

function countDown() {
    let newYearDate = new Date(newYear);
    let currentDate = new Date();
    let diffseconds = (newYearDate - currentDate)/1000;
    let minutes = Math.ceil(diffseconds/60) % 60;
    let hours = Math.ceil(diffseconds/60) % 60;
    let days = Math.ceil(diffseconds/3600/24);
    let seconds = Math.ceil(diffseconds) % 60;
    console.log(seconds, minutes, hours, days);

    secondsEl.innerHTML = seconds
    minutesEl.innerHTML = minutes
    hoursEl.innerHTML = hours
    daysEl.innerHTML = days
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000);

countDown();
