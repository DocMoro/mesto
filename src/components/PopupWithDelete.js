import Popup from './Popup.js';

export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  openPopup(callBackDeleteCard) {
    super.openPopup()
    this.popup.querySelector('.popup__button').addEventListener('click', () => {
      callBackDeleteCard();
    });
  }
}