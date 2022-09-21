import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

import {
  config,
  formSelector,
  buttonOpenPopupEdit,
  inputNamePopupEdit,
  inputInfoPopupEdit,
  buttonOpenPopupAdd
} from '../components/utils.js';


const listCards = new Section(createCard, '.cards');

const userInfo = new UserInfo({
  selectorUserName: '.profile__name',
  selectorUserInfo: '.profile__about-me',
  selectorUserAvatar: '.profile__avatar'
});

const popupEdit = new PopupWithForm('.page__edit-popup', (data) => {
  userInfo.setUserInfo(data.profileName, data.profileInfo);
  api.setUserInfo(data.profileName, data.profileInfo);
  popupEdit.closePopup();
});

const popupAdd = new PopupWithForm('.page__add-popup', (data) => {
  const elementCard = createCard({
    name: data.cardName,
    link: data.cardLink
  });
  listCards.addItem(elementCard);
  popupAdd.closePopup();
});

const popupCard = new PopupWithImage('.page__card-popup');

const popups = [popupEdit, popupAdd, popupCard];

const api = new Api({
  url: 'https://mesto.nomoreparties.co./v1/cohort-50/',
  headers: {
		authorization: '869fd84c-8f33-41d3-abfa-9b98ecd7be14',
    'Content-Type': 'application/json'
  },
});

function createCard(dataCard) {
  const card = new Card(dataCard, '.template-card', popupCard.openPopup);
  const elementCard = card.generateCard();
  return elementCard;
}

function enableFormValidation() {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(formElement => {
    const formValidation = new FormValidator(config, formElement);
    formValidation.enableValidation();
  });
}

api.getUserInfo()
  .then(data => {
    userInfo.setUserInfo(data.name, data.about);
    userInfo.setUserAvatar(data.avatar);
  })
  .catch(err => console.log(err));

api.getInitialCards()
  .then(data => {
    listCards.renderItems(data.slice(0, 6));
  })
  .catch(err => console.log(err));

enableFormValidation();
buttonOpenPopupEdit.addEventListener('click', () => {
  popupEdit.openPopup();
  ({name: inputNamePopupEdit.value, info: inputInfoPopupEdit.value} = userInfo.getUserInfo());
});
buttonOpenPopupAdd.addEventListener('click', popupAdd.openPopup);

popups.forEach((popupObj) => {
  popupObj.setEventListeners();
});