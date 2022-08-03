const popupEdit = document.querySelector('.page__edit-popup');
const formPopupEdit = popupEdit.querySelector('.popup__form');
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const buttonClosePopupEdit = popupEdit.querySelector('.popup__button-close');
const inputNamePopupEdit = formPopupEdit.querySelector('.popup__input_field_name');
const inputAboutMePopupEdit = formPopupEdit.querySelector('.popup__input_field_about-me');
const textNameProfile = document.querySelector('.profile__name');
const textAboutMeProfile = document.querySelector('.profile__about-me');
const listCards = document.querySelector('.cards');
const popupAdd = document.querySelector('.page__add-popup');
const formPopupAdd = popupAdd.querySelector('.popup__form');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const buttonClosePopupAdd = popupAdd.querySelector('.popup__button-close');
const inputNamePopupAdd = formPopupAdd.querySelector('.popup__input_field_card-name');
const inputLinkPopupAdd = formPopupAdd.querySelector('.popup__input_field_card-link');
const popupCard = document.querySelector('.page__card-popup');
const buttonClosePopupCard = popupCard.querySelector('.popup__button-close');
const templeCard = document.querySelector('.template-card').content.querySelector('.card');
const ESC = 27;


function initialCardList() {
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
  dateCards.forEach(addCard);
}

function createCard({name, link}) {
  const newCard = templeCard.cloneNode(true);
  const imageNewCard = newCard.querySelector('.card__image');
  newCard.querySelector('.card__title').textContent = name;
  imageNewCard.src = link;
  imageNewCard.alt = name;
  newCard.querySelector('.card__button').addEventListener('click', (evt) => evt.target.classList.toggle('card__button_like'));
  newCard.querySelector('.card__delete').addEventListener('click', () => newCard.remove());
  imageNewCard.addEventListener('click', () => openPopupCard({name, link}));
  return newCard;
}

function addCard(dateCard) {
  listCards.prepend(createCard(dateCard));
}

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
  addCard({
    name: inputNamePopupAdd.value,
    link: inputLinkPopupAdd.value
  });
  closePopup(popupAdd);
}

function openPopupCard ({name, link}) {
  imagePopup = popupCard.querySelector('.popup__image');
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

initialCardList();
buttonOpenPopupEdit.addEventListener('click', openPopupEdit);
formPopupEdit.addEventListener('submit', submitPopupEdit);
popupEdit.addEventListener('mousedown', evt => searchEventClickPopup(evt));
buttonOpenPopupAdd.addEventListener('click', openPopupAdd);
formPopupAdd.addEventListener('submit', submitPopupAdd);
popupAdd.addEventListener('mousedown', evt => searchEventClickPopup(evt));
popupCard.addEventListener('mousedown', evt => searchEventClickPopup(evt));