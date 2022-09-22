import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._formPopup = this.popup.querySelector('.popup__form');
    this._inputsPopup = Array.from(this._formPopup.querySelectorAll('.popup__input'));
    this._submitButton = this._formPopup.querySelector('.popup__button');
  }

  openPopup() {
    this._formPopup.reset();
    this._submitButton.textContent = 'Сохранить';
    super.openPopup()
  }

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitButton.textContent = 'Сохранение...';
      this._submitHandler(this._getInputValues());
    });
  }

  _getInputValues() {
    const dataInputs = {};
    this._inputsPopup.forEach(inputElement => {
      dataInputs[inputElement.name] = inputElement.value;
    });
    return dataInputs;
  }
}