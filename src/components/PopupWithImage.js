import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopup = this.popup.querySelector('.popup__image');
    this._subtitlePopup = this.popup.querySelector('.popup__subtitle');
  }

  openPopup(name, link) {
    this._imagePopup.src = link;
    this._imagePopup.alt = name;
    this._subtitlePopup.textContent = name;
    super.openPopup();
  }
}