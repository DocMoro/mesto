export default class Card {
  constructor(dateCard, selector, handleImageClick, idUser, handleDeleteClick, handleLikeClick) {
    this._name = dateCard.name;
    this._link = dateCard.link;
    this._likes = dateCard.likes;
    this._idUserCard = dateCard.owner._id
    this._selector = selector;
    this._handleImageClick = handleImageClick;
    this._idUser = idUser;
    this._handleDeleteClick = handleDeleteClick;
    this._id = dateCard._id;
    this._handleLikeClick = handleLikeClick;
  }

  _searchLikeUser() {
    const user = this._likes.find(user => user._id === this._idUser);
    if (user === undefined) {
      this._isLiked = false;
    } else {
      this._isLiked = true;
    }
  }

  _setCounterLike(dataLikes) {
    this._counterLike.textContent = dataLikes.length;
  }

  generateCard() {
    this._element = document.querySelector(this._selector).content.querySelector('.card').cloneNode(true);
    this._imageElement = this._element.querySelector('.card__image');
    if (this._idUser === this._idUserCard) {
      this._imageElement.insertAdjacentHTML('afterend', 
        '<button type="button" class="card__delete button" aria-label="Удалить"></button>');
    }
    this._buttonLike = this._element.querySelector('.card__button');
    this._searchLikeUser();
    if(this._isLiked) {
      this._toggleLike();
    }
    this._counterLike = this._element.querySelector('.card__counter-like');
    this._setCounterLike(this._likes);
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._name;
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => this._handleLikeClick());
    if (this._idUser === this._idUserCard) {
      this._element.querySelector('.card__delete').addEventListener('click', () => this._handleDeleteClick());
    }
    this._imageElement.addEventListener('click', () => this._handleImageClick(this._name, this._link));
  }

  _setLike() {
    this._isLiked = !this._isLiked;
  }

  _toggleLike() {
    this._buttonLike.classList.toggle('card__button_like');
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }
}