const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
setInterval(() => {
    const d = new Date();
    secondHand.style.transform = `rotate(${d.getSeconds()*6}deg)`;
    minuteHand.style.transform = `rotate(${d.getMinutes()*6}deg)`;
    hourHand.style.transform = `rotate(${d.getHours()*30}deg)`;
}, 1000);