let editPopup = document.querySelector('.page__edit-popup');
let editPopupForm = editPopup.querySelector('.popup__form');
let editOpenButton = document.querySelector('.profile__edit-button');
let editCloseButton = editPopup.querySelector('.popup__button-close');
let editInputName = editPopupForm.querySelector('.popup__input_field_name');
let editInputAboutMe = editPopupForm.querySelector('.popup__input_field_about-me');
let profileTextName = document.querySelector('.profile__name');
let profileTextAboutMe = document.querySelector('.profile__about-me');
let cardsList = document.querySelector('.cards');
let addPopup = document.querySelector('.page__add-popup');
let addPopupForm = addPopup.querySelector('.popup__form');
let addOpenButton = document.querySelector('.profile__add-button');
let addCloseButton = addPopup.querySelector('.popup__button-close');
let addInputName = addPopupForm.querySelector('.popup__input_field_card-name');
let addInputLink = addPopupForm.querySelector('.popup__input_field_card-link');
let cardPopup = document.querySelector('.page__card-popup');
let cardCloseButton = cardPopup.querySelector('.popup__button-close');


function createCardList() {
  const cards = [
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
  cards.forEach(createCard);
}

function createCard(cardDate) {
  const newCard = document.querySelector('.template-card').content.querySelector('.card').cloneNode(true);
  newCard.querySelector('.card__title').textContent = cardDate.name;
  newCard.querySelector('.card__image').src = cardDate.link;
  newCard.querySelector('.card__button').addEventListener('click', likeCard);
  newCard.querySelector('.card__delete').addEventListener('click', () => {newCard.remove()});
  newCard.querySelector('.card__image').addEventListener('click', cardOpenPopup);
  cardsList.prepend(newCard);
}

function likeCard (evt) {
  if (evt.target.style.backgroundImage === 'url("./images/active-heart.svg")') {
    evt.target.style.backgroundImage = 'url(./images/heart.svg)';
  } else {
    evt.target.style.backgroundImage = 'url(./images/active-heart.svg)';
  }
}

function editOpenPopup () {
  editInputName.value = profileTextName.textContent;
  editInputAboutMe.value = profileTextAboutMe.textContent;
  editPopup.classList.add('popup_active');
}

function editClosePopup () {
  editPopup.classList.remove('popup_active');
}

function editSubmitPopup (evt) {
  profileTextName.textContent = editInputName.value;
  profileTextAboutMe.textContent = editInputAboutMe.value;
  editClosePopup();
  evt.preventDefault();
}

function addOpenPopup () {
  addPopup.classList.add('popup_active');
}

function addClosePopup () {
  addPopup.classList.remove('popup_active');
}

function addSubmitPopup (evt) {
  createCard({
    name: addInputName.value,
    link: addInputLink.value
  });
  addClosePopup();
  evt.preventDefault();
}

function cardOpenPopup (evt) {
  cardPopup.querySelector('.popap__card-image').src = evt.target.src;
  cardPopup.querySelector('.popap__card-title').textContent = evt.target.parentNode.querySelector('.card__title').textContent;
  cardPopup.classList.add('popup_active');
}

function cardClosePopup() {
  cardPopup.classList.remove('popup_active');
}

createCardList();
editOpenButton.addEventListener('click', editOpenPopup);
editPopupForm.addEventListener('submit', editSubmitPopup);
editCloseButton.addEventListener('click', editClosePopup);
addOpenButton.addEventListener('click', addOpenPopup);
addPopupForm.addEventListener('submit', addSubmitPopup);
addCloseButton.addEventListener('click', addClosePopup);
cardCloseButton.addEventListener('click', cardClosePopup);