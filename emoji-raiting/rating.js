const refs = {
  stars: document.querySelectorAll(".fa-star"),
  emojis: document.querySelectorAll(".fa-regular"),
  backGround: document.querySelector("body"),
  backGroundSection: document.querySelector("section"),
  colorsArray: ["red", "tomato", "blue", "lightgreen", "green"],
};
refs.stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  refs.stars.forEach((star, idx) => {
    if (idx < index + 1) {
      star.classList.add("active");
      star.style.color = refs.colorsArray[index];
    } else {
      star.classList.remove("active");
      star.style.color = "";
    }
  });
  refs.emojis.forEach((emoji) => {
    emoji.style.transform = `translateX(-${index * 50}px)`;
    emoji.style.color = refs.colorsArray[index];
    refs.backGround.style.backgroundColor = refs.colorsArray[index];
    refs.backGroundSection.style.backgroundColor = refs.colorsArray[index];
  });
}
