let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function updateTime(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
    }
    if(minutes === 60){
        minutes = 0;
        hours++
    }

  // Format time as HH:MM:SS
  const formattedTime = 
  (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
  timeDisplay.textContent = formattedTime;
}

// Start button
startBtn.addEventListener('click', () => {
    if(!interval) {
        interval = setInterval(updateTime, 1000);
    }
});

// Stop button
stopBtn.addEventListener('click', () =>  {
    clearInterval(interval);
    interval = null;
});

//Reset button
resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    timeDisplay.textContent = "00:00:00";
});