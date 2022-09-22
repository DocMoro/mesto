import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.buttonSubmit = this.popup.querySelector('.popup__button');
  }

  setSubmitAction(callBackDeleteCard) {
    this._callBackDeleteCard = callBackDeleteCard;
    this.buttonSubmit.addEventListener('click', this._callBackDeleteCard);
  }

  closePopup() {
    this.buttonSubmit.removeEventListener('click', this._callBackDeleteCard);
    super.closePopup();
  }
}