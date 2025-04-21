const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function updateClock() {
    const now = new Date();
        
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes() + seconds / 60 - 1; // -1 to adjust for the second hand's position
    const hours = (now.getHours() % 12) + minutes / 60;
    secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hours * 30}deg)`;
    requestAnimationFrame(updateClock);
}
updateClock();