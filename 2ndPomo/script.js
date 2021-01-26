const startingMinutes = 10;
let time = startingMinutes * 60; //getting all in second

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) { seconds = '0' + seconds }

    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;
}