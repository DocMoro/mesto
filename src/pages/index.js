import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

import {
  config,
  formSelector,
  buttonOpenPopupEdit,
  inputNamePopupEdit,
  inputInfoPopupEdit,
  buttonOpenPopupAdd,
  buttonOpenPopupAvatar
} from '../components/utils.js';


const listCards = new Section(createCard, '.cards');

const userInfo = new UserInfo({
  selectorUserName: '.profile__name',
  selectorUserInfo: '.profile__about-me',
  selectorUserAvatar: '.profile__avatar'
});

const popupAvatar = new PopupWithForm('.page__avatar-popup', (data) => {
  api.setUserAvatar(data.avatarLink)
    .then(data => {
      userInfo.setUserAvatar(data.avatar);
    })
    .then(() => {
      popupAvatar.closePopup();
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupAvatar.resetButton();
    });
})

const popupEdit = new PopupWithForm('.page__edit-popup', (data) => {
  api.setUserInfo(data.profileName, data.profileInfo)
    .then(data => {
      userInfo.setUserInfo(data.name, data.about);
    })
    .then(() => {
      popupEdit.closePopup();
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupEdit.resetButton();
    });
});

const popupAdd = new PopupWithForm('.page__add-popup', (data) => {
  api.addCard(data.cardName, data.cardLink)
    .then(data => {
      const elementCard = createCard(data);
      listCards.addItem(elementCard);
    })
    .then(() => {
      popupAdd.closePopup();
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupAdd.resetButton();
    });
});

const popupCard = new PopupWithImage('.page__card-popup');

const popupConfirmation = new PopupWithConfirmation('.page__delete-popup');

const popups = [popupEdit, popupAdd, popupCard, popupConfirmation, popupAvatar];

const api = new Api({
  url: 'https://mesto.nomoreparties.co./v1/cohort-50/',
  headers: {
		authorization: '869fd84c-8f33-41d3-abfa-9b98ecd7be14',
    'Content-Type': 'application/json'
  },
});

function createCard(dataCard) {
  const card = new Card(dataCard, '.template-card', popupCard.openPopup, userInfo.getUserId(), 
  () => {
    popupConfirmation.openPopup();
    popupConfirmation.setSubmitAction(() => {
      api.deleteCard(card._id)
        .then(() => {
          card.removeCard();
          popupConfirmation.closePopup();
        })
        .catch((err) => console.log(err));
    });
  },
  () => {
    const method = card._isLiked ? 'DELETE' : 'PUT';
    api.likeCard(card._id, method)
      .then(data => {
        card._setCounterLike(data.likes);
        card._toggleLike();
        card._setLike();
      })
      .catch(err => console.log(err));
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

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([dataUser, dataCards])  => {
    userInfo.setUserInfo(dataUser.name, dataUser.about);
    userInfo.setUserId(dataUser._id);
    userInfo.setUserAvatar(dataUser.avatar);
    listCards.renderItems(dataCards.slice(0, 6));
  })
  .catch(err => console.log(err));

enableFormValidation();
buttonOpenPopupEdit.addEventListener('click', () => {
  popupEdit.openPopup();
  ({name: inputNamePopupEdit.value, info: inputInfoPopupEdit.value} = userInfo.getUserInfo());
});
buttonOpenPopupAdd.addEventListener('click', popupAdd.openPopup);
buttonOpenPopupAvatar.addEventListener('click', popupAvatar.openPopup);

popups.forEach((popupObj) => {
  popupObj.setEventListeners();
});