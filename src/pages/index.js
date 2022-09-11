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
  selectorUserInfo: '.profile__about-me'
});

const popupEdit = new PopupWithForm('.page__edit-popup', (evt, data) => {
  evt.preventDefault();
  userInfo.setUserInfo(data.profileName, data.profileInfo);
  popupEdit.closePopup();
});

const popupAdd = new PopupWithForm('.page__add-popup', (evt, data) => {
  evt.preventDefault();
  addCardToPage(data);
  popupAdd.closePopup();
});

const popupCard = new PopupWithImage('.page__card-popup');

const listCards = new Section({
  data: dateCards,
  renderer: addCardToPage,
}, '.cards', );

function addCardToPage(dataCard) {
  const card = new Card(dataCard, '.template-card', popupCard.openPopup.bind(popupCard));
  const elementCard = card.generateCard();
  listCards.addItem(elementCard);
}

const formPopupEdit = popupEdit.popup.querySelector('.popup__form'); 
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button'); 
const inputNamePopupEdit = formPopupEdit.querySelector('.popup__input_field_name'); 
const inputAboutMePopupEdit = formPopupEdit.querySelector('.popup__input_field_about-me'); 
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');

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