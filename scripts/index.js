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
const templeCard = document.querySelector('.template-card').content.querySelector('.card')


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
  newCard.querySelector('.card__button').addEventListener('click', (evt) => {evt.target.classList.toggle('card__button_like')});
  newCard.querySelector('.card__delete').addEventListener('click', () => {newCard.remove()});
  imageNewCard.addEventListener('click', openPopupCard);
  return newCard;
}

function addCard(dateCard) {
  listCards.prepend(createCard(dateCard));
}

function openPopup(popup) {
  popup.classList.add('popup_active');
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
}

function openPopupEdit () {
  inputNamePopupEdit.value = textNameProfile.textContent;
  inputAboutMePopupEdit.value = textAboutMeProfile.textContent;
  openPopup(popupEdit);
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

function openPopupCard (evt) {
  imageCard = evt.target;
  popupCard.querySelector('.popup__image').src = imageCard.src;
  popupCard.querySelector('.popup__subtitle').textContent = imageCard.closest('.card').querySelector('.card__title').textContent;
  openPopup(popupCard);
}

initialCardList();
buttonOpenPopupEdit.addEventListener('click', openPopupEdit);
formPopupEdit.addEventListener('submit', submitPopupEdit);
buttonClosePopupEdit.addEventListener('click', () => {closePopup(popupEdit)});
buttonOpenPopupAdd.addEventListener('click', () => {openPopup(popupAdd)});
formPopupAdd.addEventListener('submit', submitPopupAdd);
buttonClosePopupAdd.addEventListener('click', () => {closePopup(popupAdd)});
buttonClosePopupCard.addEventListener('click', () => {closePopup(popupCard)});