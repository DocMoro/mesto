let popup = document.querySelector('.popup');
let form = popup.querySelector('.popup__form');
let openButton = document.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__button-close');
let inputName = form.querySelector('.popup__input-name');
let inputAboutMe = form.querySelector('.popup__input-about-me');
let textName = document.querySelector('.profile__name');
let textAboutMe = document.querySelector('.profile__about-me');

function openPopup () {
  inputName.value = textName.textContent;
  inputAboutMe.value = textAboutMe.textContent;
  popup.classList.add('popup_active');
}

function closePopup () {
  popup.classList.remove('popup_active');
}

function formSubmitHandler (evt) {
  textName.textContent = inputName.value;
  textAboutMe.textContent = inputAboutMe.value;
  closePopup();
  evt.preventDefault();
}

openButton.addEventListener('click', openPopup);
form.addEventListener('submit', formSubmitHandler);
closeButton.addEventListener('click', closePopup);