import Popup from './Popup.js';

export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  setSubmitAction(callBackDeleteCard) {
    this.popup.querySelector('.popup__button').addEventListener('click', () => {
      callBackDeleteCard();
    });
  }
}