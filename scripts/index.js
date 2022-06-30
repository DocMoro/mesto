let popup = document.querySelector(".popup");
let openButton = document.querySelector(".profile__edit-button");
let closeButton = popup.querySelector(".popup__button-close");
let input = popup.querySelectorAll("input");
let textName = document.querySelector(".profile__name");
let textAboutMe = document.querySelector(".profile__about-me");

function openPopup () {
  input[0].value = textName.textContent;
  input[1].value = textAboutMe.textContent;
  popup.classList.add("popup_active");
}

function closePopup () {
  popup.classList.remove("popup_active");
}

function formSubmitHandler (evt) {
  textName.textContent = input[0].value;
  textAboutMe.textContent = input[1].value;
  closePopup();
  evt.preventDefault();
}

openButton.addEventListener("click", openPopup);
popup.addEventListener("submit", formSubmitHandler);
closeButton.addEventListener("click", closePopup);