const refs = {
  imageContainer: document.querySelector(".image-container"),
  buttonPrev: document.querySelector(".prev"),
  buttonNext: document.querySelector(".next"),
};
let x = 0;
let timer;
refs.buttonPrev.addEventListener("click", () => {
  x = x + 22.5;
  clearTimeout(timer);

  updateGalery("left");
});

refs.buttonNext.addEventListener("click", () => {
  x = x - 22.5;
  clearTimeout(timer);
  updateGalery("right");
});

function updateGalery(direction) {
  refs.imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timer = setTimeout(() => {
    if (direction === "right") {
      x = x - 22.5;
    }
    if (direction === "left") {
      x = x + 22.5;
    }
    updateGalery(direction);
  }, 3000);
}

updateGalery("right");
