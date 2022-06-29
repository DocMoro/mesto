let body = document.querySelector(".page");
let popup = body.querySelector(".popup");
let openButton = body.querySelector(".profile__edit-button");
let closeButton = popup.querySelector(".popup__button-close");
let saveButton = popup.querySelector(".popup__botton-save");
let input = popup.querySelectorAll("input");
let textName = body.querySelector(".profile__name");
let textAboutMe = body.querySelector(".profile__about-me");

function openPopup() {
  body.classList.add("page_none-scroll");
  popup.classList.add("popup_active");
}

function closePopup() {
  body.classList.remove("page_none-scroll");
  popup.classList.remove("popup_active");
}

function savePopup() {
  textName.insertAdjacentText("afterbegin", input[0].value);
  textAboutMe.insertAdjacentText("afterbegin", input[1].value);
  closePopup();
}

openButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
saveButton.addEventListener("click", savePopup);