import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  openPopup(name, link) {
    const imagePopup = this.popup.querySelector('.popup__image');
    imagePopup.src = link;
    imagePopup.alt = name;
    this.popup.querySelector('.popup__subtitle').textContent = name;
    super.openPopup();
  }
}