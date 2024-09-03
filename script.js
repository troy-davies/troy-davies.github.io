function updateTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourRotation = (hour % 12) * 30 + (minute / 60) * 30;
    const minuteRotation = minute * 6 + (second / 60) * 6;

    document.querySelector('.hour-hand').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteRotation}deg)`;
}

setInterval(updateTime, 1000);
updateTime();
