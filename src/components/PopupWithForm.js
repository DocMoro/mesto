import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._formPopup = this.popup.querySelector('.popup__form');
  }

  openPopup() {
    this._formPopup.reset();
    super.openPopup()
  }

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener('submit', evt => {
      this._submitHandler(evt);
    });
  }
}