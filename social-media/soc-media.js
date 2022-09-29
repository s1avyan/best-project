const refs = {
  menuEl: document.querySelector(".menu"),
  menuTextEl: document.querySelector(".menu p"),
  socList: document.querySelector(".soc-list"),
  arrowMenu: document.querySelector(".fa-chevron-down"),
  allLiEls: document.querySelectorAll(".soc-list li"),
};

refs.menuEl.addEventListener("click", () => {
  refs.socList.classList.toggle("hide");
  refs.menuEl.classList.toggle("rotate");
});

refs.allLiEls.forEach((liEl) => {
  liEl.addEventListener("click", () => {
    refs.menuTextEl.innerHTML = liEl.innerHTML;
    refs.socList.classList.toggle("hide");
    refs.menuEl.classList.toggle("rotate");
  });
});
