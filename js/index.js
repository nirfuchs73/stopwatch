var seconds = 0;
var minutes = 0;
var hours = 0;
var t;
var secondsTotal = 0;

//Get lastTime
var lastTime = localStorage.getItem('lastTime');
if (lastTime !== null) {
    document.getElementById("lastTime").innerHTML = "Last Time: " + secondsToTime(lastTime);
}

function startTime() {
    incrementTime();
}

function stopTime() {
    clearTimeout(t);
    localStorage.setItem('lastTime', secondsTotal);
    document.getElementById("lastTime").innerHTML = "Last Time: " + secondsToTime(secondsTotal);
}

function clearTime() {
    document.getElementById("output").innerHTML = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
    secondsTotal = 0;
}

function incrementTime() {
    var seconds1 = 0;
    var minutes1 = 0;
    var hours1 = 0;
    t = setTimeout(function () {
        seconds++;
        secondsTotal++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        hours1 = hours;
        minutes1 = minutes;
        seconds1 = seconds;
        if (hours1 < 10) {
            hours1 = "0" + hours1;
        }
        if (minutes1 < 10) {
            minutes1 = "0" + minutes1;
        }
        if (seconds1 < 10) {
            seconds1 = "0" + seconds1;
        }
        document.getElementById("output").innerHTML = hours1 + ":" + minutes1 + ":" + seconds1;
        incrementTime();
    }, 1000)
}

function secondsToTime(seconds) {
    var hrs = Math.floor(seconds / 60 / 60);
    var mins = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    return hrs + ":" + mins + ":" + secs;
}