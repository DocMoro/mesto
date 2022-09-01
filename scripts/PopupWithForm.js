import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this.submitHandler = submitHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener('submit', evt => {
      this.submitHandler(evt);
    });
  }
}