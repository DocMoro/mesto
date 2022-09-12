import krasnoyarsk from '../images/krasnoyarsk.jpg';
import sochi from '../images/sochi.jpg';
import nizhnyNovgorod from '../images/nizhny_novgorod.jpg';
import kamchatka from '../images/kamchatka.jpg';
import moscow from '../images/moscow.jpg';
import stPetersburg from '../images/st-petersburg.jpg';

const dateCards = [
  {
    cardName: 'Красноярск',
    cardLink: krasnoyarsk
  },
  {
    cardName: 'Сочи',
    cardLink: sochi
  },
  {
    cardName: 'Нижний Новгород',
    cardLink: nizhnyNovgorod
  },
  {
    cardName: 'Камчатка',
    cardLink: kamchatka
  },
  {
    cardName: 'Москва',
    cardLink: moscow
  },
  {
    cardName: 'Санкт-Петербург',
    cardLink: stPetersburg
  }
];

const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const buttonOpenPopupEdit = document.querySelector('.profile__edit-button'); 
const inputNamePopupEdit = document.querySelector('.popup__input_field_name'); 
const inputInfoPopupEdit = document.querySelector('.popup__input_field_about-me'); 
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');

const formSelector = '.popup__form';

const ESC = 27;

export {
  dateCards,
  config,
  formSelector,
  buttonOpenPopupEdit,
  inputNamePopupEdit,
  inputInfoPopupEdit,
  buttonOpenPopupAdd,
  ESC
}