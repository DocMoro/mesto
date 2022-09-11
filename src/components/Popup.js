import { ESC } from './utils.js';

export default class Popup {
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
    this._bindHandleEscClose = this._handleEscClose.bind(this);
    this.openPopup = this.openPopup.bind(this);
  }

  openPopup() {
    document.addEventListener('keydown', this._bindHandleEscClose);
    this.popup.classList.add('popup_active');
  }
  
  closePopup() {
    document.removeEventListener('keydown', this._bindHandleEscClose);
    this.popup.classList.remove('popup_active');
  }

  _handleEscClose(evt) {
    if (evt.keyCode === ESC) {
      this.closePopup();
    }
  }

  setEventListeners() {
    this.popup.addEventListener('mousedown', evt => {
      if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
        this.closePopup();
      }
    });
  }
}