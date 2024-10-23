
let btn = document.querySelector(".btn");
let body = document.body;
let audio = document.querySelector("#audio");

btn.addEventListener("click", () => {
  body.classList.toggle("on");
  audio.play();
});

// Eye tracking
document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
  let eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = `rotate(${rotate}deg)`;
  });
}

// Blinking animation
function blink() {
  let eyes = document.querySelectorAll(".eye");

  setInterval(() => {
    eyes.forEach((eye) => {
      eye.classList.add("blink");
    });

    setTimeout(() => {
      eyes.forEach((eye) => {
        eye.classList.remove("blink");
      });
    }, 200);
  }, Math.random() * 4000 + 2000);
}

blink();
