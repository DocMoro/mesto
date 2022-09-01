import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import Section from './Section.js';

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

const popupEdit = new PopupWithForm('.page__edit-popup', evt => {
  evt.preventDefault();
  textNameProfile.textContent = inputNamePopupEdit.value;
  textAboutMeProfile.textContent = inputAboutMePopupEdit.value;
  popupEdit.closePopup();
});

const popupAdd = new PopupWithForm('.page__add-popup', evt => {
  evt.preventDefault();
  const card = new Card({
    name: inputNamePopupAdd.value,
    link: inputLinkPopupAdd.value
  }, '.template-card', popupCard.openPopup.bind(popupCard));
  const elementCard = card.generateCard();
  listCards.addItem(elementCard)
  popupAdd.closePopup();
});

const popupCard = new PopupWithImage('.page__card-popup');

const popups = [popupEdit, popupAdd, popupCard];

const listCards = new Section({
  data: dateCards,
  renderer: (dateCard) => {
    const card = new Card(dateCard, '.template-card', popupCard.openPopup.bind(popupCard));
    const elementCard = card.generateCard();
    listCards.addItem(elementCard);
  },
}, '.cards', );

const formSelector = '.popup__form';
const formPopupEdit = popupEdit.popup.querySelector('.popup__form');
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const inputNamePopupEdit = formPopupEdit.querySelector('.popup__input_field_name');
const inputAboutMePopupEdit = formPopupEdit.querySelector('.popup__input_field_about-me');
const textNameProfile = document.querySelector('.profile__name');
const textAboutMeProfile = document.querySelector('.profile__about-me');
const formPopupAdd = popupAdd.popup.querySelector('.popup__form');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const inputNamePopupAdd = formPopupAdd.querySelector('.popup__input_field_card-name');
const inputLinkPopupAdd = formPopupAdd.querySelector('.popup__input_field_card-link');

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

function enableFormValidation() {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(formElement => {
    const formValidation = new FormValidator(config, formElement);
    formValidation.enableValidation();
  });
}

listCards.renderItems();
enableFormValidation();
buttonOpenPopupEdit.addEventListener('click', openPopupEdit);
buttonOpenPopupAdd.addEventListener('click', openPopupAdd);

popups.forEach((popupObj) => {
  popupObj.setEventListeners();
});