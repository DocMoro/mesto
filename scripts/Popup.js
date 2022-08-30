const ESC = 27;

export default class Popup {
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
  }

  openPopup() {
    document.addEventListener('keydown', this._handleEscClose);
    this.popup.classList.add('popup_active');
  }
  
  closePopup() {
    document.removeEventListener('keydown', this._handleEscClose);
    this.popup.classList.remove('popup_active');
  }

  _handleEscClose(evt) {
    if (evt.keyCode === ESC) {
      this.closePopup();
    }
  }

  setEventListeners(evt) {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
      this.closePopup();
    }
  }
}