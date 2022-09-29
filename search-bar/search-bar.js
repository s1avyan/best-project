const refs = {
  searchBar: document.querySelector(".search-bar-container"),
  magnifaer: document.querySelector(".searchIcon"),
};

refs.magnifaer.addEventListener("click", () => {
  refs.searchBar.classList.toggle("active");
});
