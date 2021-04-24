import "./styles.css";

// You're gonna need this

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const xmasDay = new Date("2021-12-24T00:00:00+0900"), //12-24T00:00:00 으로 해야 사파리에서 인식을해! ,12-24:00:00:00 하면 사파리는몰라!
    nowDate = new Date(),
    daySec = (60 * 60 * 24), //하루는 60초x60분x24시간
    msToSec = 1000,
    interval = (xmasDay - nowDate) / msToSec, // ms -> sec //getTime method는 ms를 반환. 1000ms / 1000 = 1sec
    day = Math.floor(interval / daySec), //getTime() 생략
    hour = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minute = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60)),
    second = Math.floor((interval % (1000 * 60)) / 1000);
  clockTitle.innerText = `D-day ${day} : ${hour < 10 ? `0${hour}` : hour} : ${
    minute < 10 ? `0${minute}` : minute
  } : ${second < 10 ? `0${second}` : second}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
