export default class Card {
  constructor(dateCard, selector, handleImageClick) {
    this._name = dateCard.name;
    this._link = dateCard.link;
    this._selector = selector;
    this._handleImageClick = handleImageClick;
  }

  generateCard() {
    this._element = document.querySelector(this._selector).content.querySelector('.card').cloneNode(true);
    this._imageElement = this._element.querySelector('.card__image');
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._name;
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__button').addEventListener('click', evt => this._toggleLike(evt));
    this._element.querySelector('.card__delete').addEventListener('click', () => this._deleteCard());
    this._imageElement.addEventListener('click', () => this._handleImageClick(this._name, this._link));
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('card__button_like');
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
}