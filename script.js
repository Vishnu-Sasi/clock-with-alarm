let display = document.getElementById("clock");
const alarmAudio = new Audio("./assets/Alarm-ringtone.mp3");
alarmAudio.loop = true;
let alarmTime = null;
let alarmTimeOut = null;

function upadteTime() {
  const date = new Date();
  const hours = timeFormat(date.getHours());
  const minutes = timeFormat(date.getMinutes());
  const seconds = timeFormat(date.getSeconds());
  display.innerText = `${hours} : ${minutes}: ${seconds}`;
}

function timeFormat(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}

setInterval(upadteTime, 1000);

function setAlarmTime(value) {
  alarmTime = value;
}

function setAlarm() {
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);
    if (timeToAlarm > current) {
      const timeOut = timeToAlarm.getTime() - current.getTime();
      alarmTimeOut = setTimeout(function () {
        alarmAudio.play();
      }, timeOut);
    }
    alert("Alarm set");
  }
}

function clearAlarm() {
  alarmAudio.pause();
  if (alarmTimeOut) {
    clearTimeout(alarmTimeOut);
    alert("Alarm cleared");
  }
}
