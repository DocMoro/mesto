import openPopupCard from './index.js'

export default class Card {
  constructor(dateCard, selector) {
    this._name = dateCard.name;
    this._link = dateCard.link;
    this._selector = selector;
  }

  create() {
    this._element = document.querySelector(this._selector).content.querySelector('.card').cloneNode(true);
    this._imageElement = this._element.querySelector('.card__image');
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._name;
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__button').addEventListener('click', evt => evt.target.classList.toggle('card__button_like'));
    this._element.querySelector('.card__delete').addEventListener('click', () => this._element.remove());
    this._imageElement.addEventListener('click', () => openPopupCard(this._name, this._link));
  }
}