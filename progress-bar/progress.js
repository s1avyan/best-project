const refs = {
  buttonNext: document.querySelector(".next"),
  buttonPrev: document.querySelector(".prev"),
  stepElem: document.querySelectorAll(".step"),
  progressBar: document.querySelector(".progress-bar-front"),
};
refs.progressBar.style.width = `0%`;
let currenChecked = 1;
refs.buttonNext.addEventListener("click", () => {
  currenChecked += 1;
  if (currenChecked > refs.stepElem.length) {
    currenChecked = refs.stepElem.length;
  }
  updateStepProgress();
});
refs.buttonPrev.addEventListener("click", () => {
  currenChecked -= 1;
  if (currenChecked < 1) {
    currenChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  refs.stepElem.forEach((elem, idx) => {
    if (idx < currenChecked) {
      elem.classList.add("checked");
      elem.innerHTML = `<i class="fa-solid fa-check"></i>
      <small>${
        idx === 0
          ? "Start"
          : idx === refs.stepElem.length - 1
          ? "Final"
          : "Step" + idx
      }</small>
      `;
      refs.progressBar.style.width = `${
        (100 / (refs.stepElem.length - 1)) * idx
      }%`;
      console.log(idx);
    } else {
      elem.classList.remove("checked");
      elem.innerHTML = `<i class="fas fa-times"></i>
      `;
      //   console.log(idx);
    }
    if (currenChecked === 1) {
      refs.buttonPrev.disabled = true;
    } else if (currenChecked === refs.stepElem.length) {
      refs.buttonNext.disabled = true;
    } else {
      refs.buttonPrev.disabled = false;
      refs.buttonNext.disabled = false;
    }
  });

  // refs.progressBar.requestPointerLock.width = ``;
}
