import krasnoyarsk from '../images/krasnoyarsk.jpg';
import sochi from '../images/sochi.jpg';
import nizhnyNovgorod from '../images/nizhny_novgorod.jpg';
import kamchatka from '../images/kamchatka.jpg';
import moscow from '../images/moscow.jpg';
import stPetersburg from '../images/st-petersburg.jpg';

const dateCards = [
  {
    name: 'Красноярск',
    link: krasnoyarsk
  },
  {
    name: 'Сочи',
    link: sochi
  },
  {
    name: 'Нижний Новгород',
    link: nizhnyNovgorod
  },
  {
    name: 'Камчатка',
    link: kamchatka
  },
  {
    name: 'Москва',
    link: moscow
  },
  {
    name: 'Санкт-Петербург',
    link: stPetersburg
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

export { dateCards, config, formSelector, ESC }