let game = document.querySelectorAll(".game");
game.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.backgroundColor = "red";
  });
});
