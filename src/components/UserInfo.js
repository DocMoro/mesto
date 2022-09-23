export default class UserInfo {
  constructor({selectorUserName, selectorUserInfo, selectorUserAvatar}) {
    this._nameUser = document.querySelector(selectorUserName);
    this._infoUser = document.querySelector(selectorUserInfo);
    this._avatarUser = document.querySelector(selectorUserAvatar);
  }

  getUserInfo() {
    return {
      name: this._nameUser.textContent,
      info: this._infoUser.textContent
    };
  }

  setUserInfo(name, info) {
    this._nameUser.textContent = name;
    this._infoUser.textContent = info;
  }

  setUserAvatar(url) {
    this._avatarUser.src = url;
  }

  setUserId(id) {
    this._idUser = id;
  }

  getUserId() {
    return this._idUser;
  }
}