let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let openButton = document.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__button-close');
let inputName = popupForm.querySelector('.popup__input_field_name');
let inputAboutMe = popupForm.querySelector('.popup__input_field_about-me');
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
popupForm.addEventListener('submit', formSubmitHandler);
closeButton.addEventListener('click', closePopup);