const refs = {
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
  timerMessage: document.getElementById("timer-1"),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

setInt = setInterval(() => {
    const newDate = Date.now();
    const timeClock = this.targetDate - newDate;
    this.updateClockface(timeClock);
    this.timeFinish(timeClock);
  }, 1000);

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
    //return updateClock({ days, hours, mins, secs });
  }

//   function updateClock({ days, hours, mins, secs }) {
//     days.textContent = days;
//     hours.textContent = hours;
//     mins.textContent = mins;
//     secs.textContent = secs;
// };

  pad(value) {
    return String(value).padStart(2, "0");
  }
  timeFinish(timeClock) {
    if (timeClock < 0) {
      clearInterval(this.setInt);
      refs.timerMessage.textContent = "Happy Merry Christmas!";
    }
  }
};
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dectmber 25, 2021"),
});