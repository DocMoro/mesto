export default class Card {
  constructor(dateCard, selector, handleImageClick, idUser, handleDeleteClick) {
    this._name = dateCard.name;
    this._link = dateCard.link;
    this._likes = dateCard.likes;
    this._idUserCard = dateCard.owner._id
    this._selector = selector;
    this._handleImageClick = handleImageClick;
    this._idUser = idUser;
    this._handleDeleteClick = handleDeleteClick;
    this._id = dateCard._id;
  }

  generateCard() {
    this._element = document.querySelector(this._selector).content.querySelector('.card').cloneNode(true);
    this._imageElement = this._element.querySelector('.card__image');
    if (this._idUser === this._idUserCard) {
      this._imageElement.insertAdjacentHTML('afterend', 
        '<button type="button" class="card__delete button" aria-label="Удалить"></button>');
    }
    this._element.querySelector('.card__counter-like').textContent = this._likes.length;
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._name;
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__button').addEventListener('click', evt => this._toggleLike(evt));
    if (this._idUser === this._idUserCard) {
      this._element.querySelector('.card__delete').addEventListener('click', () => this._handleDeleteClick());
    }
    this._imageElement.addEventListener('click', () => this._handleImageClick(this._name, this._link));
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('card__button_like');
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }
}