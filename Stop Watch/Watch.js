const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapseTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapseTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapseTime = Date.now - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapseTime = 0;
    isRunning = false;

    display.textContent = "00:00:00:00";
}

function update() {
    const current = Date.now();
    elapseTime = current - startTime;

    let hours = Math.floor(elapseTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapseTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapseTime / 1000 % 60);
    let mili = Math.floor(elapseTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    mili = String(mili).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${mili}`;
}