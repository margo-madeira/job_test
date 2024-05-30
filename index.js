const btnForm = document.querySelector(".welcome__button");
const popup = document.querySelector(".popup");
const close = document.querySelector(".popup__close");
const structureItems = Array.from(
  document.querySelectorAll(".main__structure__item")
);
const productsButton = Array.from(
  document.querySelectorAll(".main__products__button")
);
const footerBtn = Array.from(document.querySelectorAll(".footer_btn"));

btnForm.addEventListener("click", () => {
  popup.classList.add("active");
});

close.addEventListener("click", () => {
  popup.classList.remove("active");
});

structureItems[0].classList.add("checked");
productsButton[0].classList.remove("main__products__button");
productsButton[0].classList.add("checked__button");
footerBtn[0].classList.remove("footer_btn");
footerBtn[0].classList.add("checked__footer_btn");
