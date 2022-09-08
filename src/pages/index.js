import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import { dateCards, config, formSelector } from '../components/utils.js';


const userInfo = new UserInfo({
  selectorUserName: '.profile__name',
  selectorUserInfo: '.profile__about-me'});

const popupEdit = new PopupWithForm('.page__edit-popup', evt => {
  evt.preventDefault();
  userInfo.setUserInfo(inputNamePopupEdit.value, inputAboutMePopupEdit.value);
  popupEdit.closePopup();
});

const popupAdd = new PopupWithForm('.page__add-popup', evt => {
  evt.preventDefault();
  addCardToPage({
    name: inputNamePopupAdd.value,
    link: inputLinkPopupAdd.value
  });
  popupAdd.closePopup();
});

const popupCard = new PopupWithImage('.page__card-popup');

const listCards = new Section({
  data: dateCards,
  renderer: addCardToPage,
}, '.cards', );

function addCardToPage(dateCard) {
  const card = new Card(dateCard, '.template-card', popupCard.openPopup.bind(popupCard));
  const elementCard = card.generateCard();
  listCards.addItem(elementCard);
}

const formPopupEdit = popupEdit.popup.querySelector('.popup__form');
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const inputNamePopupEdit = formPopupEdit.querySelector('.popup__input_field_name');
const inputAboutMePopupEdit = formPopupEdit.querySelector('.popup__input_field_about-me');
const formPopupAdd = popupAdd.popup.querySelector('.popup__form');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const inputNamePopupAdd = formPopupAdd.querySelector('.popup__input_field_card-name');
const inputLinkPopupAdd = formPopupAdd.querySelector('.popup__input_field_card-link');

const openPopupEdit = popupEdit.openPopup.bind(popupEdit);
const popups = [popupEdit, popupAdd, popupCard];

function enableFormValidation() {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(formElement => {
    const formValidation = new FormValidator(config, formElement);
    formValidation.enableValidation();
  });
}

listCards.renderItems();
enableFormValidation();
buttonOpenPopupEdit.addEventListener('click', () => {
  openPopupEdit();
  ({name: inputNamePopupEdit.value, info: inputAboutMePopupEdit.value} = userInfo.getUserInfo());
});
buttonOpenPopupAdd.addEventListener('click', popupAdd.openPopup.bind(popupAdd));

popups.forEach((popupObj) => {
  popupObj.setEventListeners();
});