import Card from './Card.js';
import FormValidator from './FormValidator.js';

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

const ESC = 27;
const popupEdit = document.querySelector('.page__edit-popup');
const formPopupEdit = popupEdit.querySelector('.popup__form');
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const inputNamePopupEdit = formPopupEdit.querySelector('.popup__input_field_name');
const inputAboutMePopupEdit = formPopupEdit.querySelector('.popup__input_field_about-me');
const textNameProfile = document.querySelector('.profile__name');
const textAboutMeProfile = document.querySelector('.profile__about-me');
const popupAdd = document.querySelector('.page__add-popup');
const formPopupAdd = popupAdd.querySelector('.popup__form');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const inputNamePopupAdd = formPopupAdd.querySelector('.popup__input_field_card-name');
const inputLinkPopupAdd = formPopupAdd.querySelector('.popup__input_field_card-link');
const popupCard = document.querySelector('.page__card-popup');
const listCards = document.querySelector('.cards');
const popups = document.querySelectorAll('.popup');

function openPopup(popup) {
  document.addEventListener('keydown', searchEventKeyPopup);
  popup.classList.add('popup_active');
}

function closePopup(popup) {
  document.removeEventListener('keydown', searchEventKeyPopup);
  popup.classList.remove('popup_active');
}

function openPopupEdit () {
  formPopupEdit.reset();
  inputNamePopupEdit.value = textNameProfile.textContent;
  inputAboutMePopupEdit.value = textAboutMeProfile.textContent;
  openPopup(popupEdit);
}

function openPopupAdd() {
  formPopupAdd.reset();
  openPopup(popupAdd);
}

function submitPopupEdit (evt) {
  evt.preventDefault();
  textNameProfile.textContent = inputNamePopupEdit.value;
  textAboutMeProfile.textContent = inputAboutMePopupEdit.value;
  closePopup(popupEdit);
}

function submitPopupAdd (evt) {
  evt.preventDefault();
  addPrependCards({
    name: inputNamePopupAdd.value,
    link: inputLinkPopupAdd.value
  });
  closePopup(popupAdd);
}

function openPopupCard (name, link) { 
  const imagePopup = popupCard.querySelector('.popup__image'); 
  imagePopup.src = link; 
  imagePopup.alt = name; 
  popupCard.querySelector('.popup__subtitle').textContent = name; 
  openPopup(popupCard); 
} 

function searchEventClickPopup(evt) {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
    closePopup(evt.currentTarget);
  }
}

function searchEventKeyPopup(evt) {
  if (evt.keyCode === ESC) {
    closePopup(document.querySelector('.popup_active'));
  }
}

function initialCardList(dateCards) {
  dateCards.forEach(dateCard => addPrependCards(dateCard));
}

function addPrependCards(dataCard) {
  const card = createCard(dataCard);
  listCards.prepend(card);
}

function createCard(dataCard) {
  const cardElement = new Card(dataCard, '.template-card', openPopupCard);
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

popups.forEach((popup) => {
  popup.addEventListener('mousedown', evt => searchEventClickPopup(evt));
});