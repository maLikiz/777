function startTimer() {
setInterval(function() {
if (timer.seconds == 0) {
timer.seconds = 59;
if (timer.minutes == 0) {
timer.minutes = 59;
if (timer.hours == 0) {
timer.hours = 23;
timer.days--;
} else {
timer.hours--;
}
} else {
timer.minutes--;
}
} else {
timer.seconds--;
}
renderTimer();
}, 1000);
renderTimer();
}
function renderTimer() {
$(".count .days").html((timer.days < 10 ? "0" : "") + timer.days);
$(".count .hours").html((timer.hours < 10 ? "0" : "") + timer.hours);
$(".count .minutes").html((timer.minutes < 10 ? "0" : "") + timer.minutes);
$(".count .seconds").html((timer.seconds < 10 ? "0" : "") + timer.seconds);
}