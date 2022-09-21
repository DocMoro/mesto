import Popup from './Popup.js';

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, deleteCard) {
    super(popupSelector);
    this._deleteCard = deleteCard;
  }

  setEventListeners() {
    super.setEventListeners();
    
  }
}