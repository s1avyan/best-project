const refs = {
  container: document.querySelector(".container"),
  leftSide: document.querySelector(".left"),
  rightSide: document.querySelector(".right"),
};

refs.leftSide.addEventListener("mouseenter", () => {
  refs.container.classList.add("active-left");
});

refs.leftSide.addEventListener("mouseleave", () => {
  refs.container.classList.remove("active-left");
});

refs.rightSide.addEventListener("mouseenter", () => {
  refs.container.classList.add("active-right");
});

refs.rightSide.addEventListener("mouseleave", () => {
  refs.container.classList.remove("active-right");
});
