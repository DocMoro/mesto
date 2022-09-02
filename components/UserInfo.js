export default class UserInfo {
  constructor({selectorUserName, selectorUserInfo}) {
    this._nameUser = document.querySelector(selectorUserName);
    this._infoUser = document.querySelector(selectorUserInfo);
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
}