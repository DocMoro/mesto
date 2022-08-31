import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js'

const dateCards = [
  {
    name: 'Красноярск',
    link: './images/krasnoyarsk.jpg'
  },
  {
    name: 'Сочи',
    link: './images/sochi.jpg'
  },
  {
    name: 'Нижний Новгород',
    link: './images/nizhny_novgorod.jpg'
  },
  {
    name: 'Камчатка',
    link: './images/kamchatka.jpg'
  },
  {
    name: 'Москва',
    link: './images/moscow.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: './images/st-petersburg.jpg'
  }
];

const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const formSelector = '.popup__form';

const popupEdit = new Popup('.page__edit-popup');
const formPopupEdit = popupEdit.popup.querySelector('.popup__form');
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const inputNamePopupEdit = formPopupEdit.querySelector('.popup__input_field_name');
const inputAboutMePopupEdit = formPopupEdit.querySelector('.popup__input_field_about-me');
const textNameProfile = document.querySelector('.profile__name');
const textAboutMeProfile = document.querySelector('.profile__about-me');
const popupAdd = new Popup('.page__add-popup');
const formPopupAdd = popupAdd.popup.querySelector('.popup__form');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const inputNamePopupAdd = formPopupAdd.querySelector('.popup__input_field_card-name');
const inputLinkPopupAdd = formPopupAdd.querySelector('.popup__input_field_card-link');
const popupCard = new PopupWithImage('.page__card-popup');
const listCards = document.querySelector('.cards');
const popups = [popupEdit, popupAdd, popupCard];

function openPopupEdit () {
  formPopupEdit.reset();
  inputNamePopupEdit.value = textNameProfile.textContent;
  inputAboutMePopupEdit.value = textAboutMeProfile.textContent;
  popupEdit.openPopup();
}

function openPopupAdd() {
  formPopupAdd.reset();
  popupAdd.openPopup();
}

function submitPopupEdit (evt) {
  evt.preventDefault();
  textNameProfile.textContent = inputNamePopupEdit.value;
  textAboutMeProfile.textContent = inputAboutMePopupEdit.value;
  popupEdit.closePopup();
}

function submitPopupAdd (evt) {
  evt.preventDefault();
  addPrependCards({
    name: inputNamePopupAdd.value,
    link: inputLinkPopupAdd.value
  });
  popupAdd.closePopup();
}

function initialCardList(dateCards) {
  dateCards.forEach(dateCard => addPrependCards(dateCard));
}

function addPrependCards(dataCard) {
  const card = createCard(dataCard);
  listCards.prepend(card);
}

function createCard(dataCard) {
  const cardElement = new Card(dataCard, '.template-card', popupCard.openPopup.bind(popupCard));
  return cardElement.generateCard()
}

function enableFormValidation() {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(formElement => {
    const formValidation = new FormValidator(config, formElement);
    formValidation.enableValidation();
  });
}

initialCardList(dateCards);
enableFormValidation();
buttonOpenPopupEdit.addEventListener('click', openPopupEdit);
formPopupEdit.addEventListener('submit', submitPopupEdit);
buttonOpenPopupAdd.addEventListener('click', openPopupAdd);
formPopupAdd.addEventListener('submit', submitPopupAdd);

popups.forEach((popupObj) => {
  popupObj.popup.addEventListener('mousedown', evt => popupObj.setEventListeners(evt));
});