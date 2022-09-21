import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithDelete from '../components/PopupWithDelete.js';

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
  api.addCard(data.cardName, data.cardLink)
    .then(data => {
      const elementCard = createCard(data);
      listCards.addItem(elementCard);
    })
    .catch(err => console.log(err));
  popupAdd.closePopup();
});

const popupCard = new PopupWithImage('.page__card-popup');

const popupDelete = new PopupWithDelete('.page__delete-popup');

const popups = [popupEdit, popupAdd, popupCard, popupDelete];

const api = new Api({
  url: 'https://mesto.nomoreparties.co./v1/cohort-50/',
  headers: {
		authorization: '869fd84c-8f33-41d3-abfa-9b98ecd7be14',
    'Content-Type': 'application/json'
  },
});

function createCard(dataCard) {
  const card = new Card(dataCard, '.template-card', popupCard.openPopup, userInfo.idUser, () => {
    popupDelete.openPopup();
    popupDelete.setSubmitAction(() => {
      api.deleteCard(card._id)
        .then(() => {
          card.removeCard();
          popupDelete.closePopup();
        })
        .catch((err) => console.log(err));
    });
  });
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
    userInfo.setUserId(data._id);
    console.log(data._id);
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