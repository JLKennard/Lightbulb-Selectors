// Write your code here
const bulbList = document.querySelectorAll(".lightbulb");
const subtitleOn = document.querySelector(".subtitleOn");
const subtitleOff = document.querySelector(".subtitleOff");
let countOn = 0;

function eventHandOn() {
  countOn++;
  if (countOn === 1) {
    subtitleOn.innerHTML = `You've turned the lights on ${countOn} time!`;
  } else {
    subtitleOn.innerHTML = `You've turned the lights on ${countOn} times!`;
  }
  this.classList.add("active");
}

function eventHandOff() {
  this.classList.remove("active");
}

bulbList.forEach((bulb) => {
  bulb.addEventListener("mouseover", eventHandOn);
});

bulbList.forEach((bulb) => {
  bulb.addEventListener("mouseout", eventHandOff);
});
