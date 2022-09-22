(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._idUserCard=e.owner._id,this._selector=n,this._handleImageClick=r,this._idUser=o,this._handleDeleteClick=i,this._id=e._id,this._handleLikeClick=u}var n,r;return n=t,(r=[{key:"_searchLikeUser",value:function(){var e=this,t=this._likes.find((function(t){return t._id===e._idUser}));this._isLiked=void 0!==t}},{key:"_setCounterLike",value:function(e){this._counterLike.textContent=e.length}},{key:"generateCard",value:function(){return this._element=document.querySelector(this._selector).content.querySelector(".card").cloneNode(!0),this._imageElement=this._element.querySelector(".card__image"),this._idUser===this._idUserCard&&this._imageElement.insertAdjacentHTML("afterend",'<button type="button" class="card__delete button" aria-label="Удалить"></button>'),this._buttonLike=this._element.querySelector(".card__button"),this._searchLikeUser(),this._isLiked&&this._toggleLike(),this._counterLike=this._element.querySelector(".card__counter-like"),this._setCounterLike(this._likes),this._setEventListeners(),this._element.querySelector(".card__title").textContent=this._name,this._imageElement.src=this._link,this._imageElement.alt=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLike.addEventListener("click",(function(){return e._handleLikeClick()})),this._idUser===this._idUserCard&&this._element.querySelector(".card__delete").addEventListener("click",(function(){return e._handleDeleteClick()})),this._imageElement.addEventListener("click",(function(){return e._handleImageClick(e._name,e._link)}))}},{key:"_setLike",value:function(){this._isLiked=!this._isLiked}},{key:"_toggleLike",value:function(){this._buttonLike.classList.toggle("card__button_like")}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.name,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.name,"-error"));e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._disableButton(),this._formElement.addEventListener("reset",(function(){e._inputList.forEach((function(t){e._hideInputError(t)})),e._disableButton()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","")}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),o={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},i=document.querySelector(".profile__avatar"),u=document.querySelector(".profile__edit-button"),c=document.querySelector(".popup__input_field_name"),a=document.querySelector(".popup__input_field_about-me"),s=document.querySelector(".profile__add-button");function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=document.querySelector(t),this._bindHandleEscClose=this._handleEscClose.bind(this),this.openPopup=this.openPopup.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){document.addEventListener("keydown",this._bindHandleEscClose),this.popup.classList.add("popup_active")}},{key:"closePopup",value:function(){document.removeEventListener("keydown",this._bindHandleEscClose),this.popup.classList.remove("popup_active")}},{key:"_handleEscClose",value:function(e){27===e.keyCode&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this.popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__button-close"))&&e.closePopup()}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imagePopup=t.popup.querySelector(".popup__image"),t._subtitlePopup=t.popup.querySelector(".popup__subtitle"),t}return t=u,(n=[{key:"openPopup",value:function(e,t){this._imagePopup.src=t,this._imagePopup.alt=e,this._subtitlePopup.textContent=e,d(v(u.prototype),"openPopup",this).call(this)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function O(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitHandler=t,n._formPopup=n.popup.querySelector(".popup__form"),n._inputsPopup=Array.from(n._formPopup.querySelectorAll(".popup__input")),n._submitButton=n._formPopup.querySelector(".popup__button"),n}return t=u,(n=[{key:"openPopup",value:function(){this._formPopup.reset(),this._submitButton.textContent="Сохранить",P(C(u.prototype),"openPopup",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;P(C(u.prototype),"setEventListeners",this).call(this),this.popup.addEventListener("submit",(function(t){t.preventDefault(),e._submitButton.textContent="Сохранение...",e._submitHandler(e._getInputValues())}))}},{key:"_getInputValues",value:function(){var e={};return this._inputsPopup.forEach((function(t){e[t.name]=t.value})),e}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){var n=t._renderer(e);t._container.append(n)}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.selectorUserName,r=t.selectorUserInfo,o=t.selectorUserAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameUser=document.querySelector(n),this._infoUser=document.querySelector(r),this._avatarUser=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameUser.textContent,info:this._infoUser.textContent}}},{key:"setUserInfo",value:function(e,t){this._nameUser.textContent=e,this._infoUser.textContent=t}},{key:"setUserAvatar",value:function(e){this._avatarUser.src=e}},{key:"setUserId",value:function(e){this.idUser=e}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addCard",value:function(e,t){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"likeCard",value:function(e,t){return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:t,headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=x(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function H(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).buttonSubmit=t.popup.querySelector(".popup__button"),t}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._callBackDeleteCard=e,this.buttonSubmit.addEventListener("click",this._callBackDeleteCard)}},{key:"closePopup",value:function(){this.buttonSubmit.removeEventListener("click",this._callBackDeleteCard),A(N(u.prototype),"closePopup",this).call(this)}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f),J=new L(Y,".cards"),M=new I({selectorUserName:".profile__name",selectorUserInfo:".profile__about-me",selectorUserAvatar:".profile__avatar"}),z=new j(".page__avatar-popup",(function(e){X.setUserAvatar(e.avatarLink).then((function(e){M.setUserAvatar(e.avatar)})).catch((function(e){return console.log(e)})).finally((function(){z.closePopup()}))})),F=new j(".page__edit-popup",(function(e){X.setUserInfo(e.profileName,e.profileInfo).then((function(e){M.setUserInfo(e.name,e.about)})).catch((function(e){return console.log(e)})).finally((function(){F.closePopup()}))})),G=new j(".page__add-popup",(function(e){X.addCard(e.cardName,e.cardLink).then((function(e){var t=Y(e);J.addItem(t)})).catch((function(e){return console.log(e)})).finally((function(){G.closePopup()}))})),K=new m(".page__card-popup"),Q=new V(".page__delete-popup"),W=[F,G,K,Q,z],X=new B({url:"https://mesto.nomoreparties.co./v1/cohort-50/",headers:{authorization:"869fd84c-8f33-41d3-abfa-9b98ecd7be14","Content-Type":"application/json"}});function Y(e){var n=new t(e,".template-card",K.openPopup,M.idUser,(function(){Q.openPopup(),Q.setSubmitAction((function(){X.deleteCard(n._id).then((function(){n.removeCard(),Q.closePopup()})).catch((function(e){return console.log(e)}))}))}),(function(){var e=n._isLiked?"DELETE":"PUT";X.likeCard(n._id,e).then((function(e){n._setCounterLike(e.likes),n._toggleLike(),n._setLike()})).catch((function(e){return console.log(e)}))}));return n.generateCard()}Promise.all([X.getUserInfo(),X.getInitialCards()]).then((function(e){return M.setUserInfo(e[0].name,e[0].about),M.setUserId(e[0]._id),M.setUserAvatar(e[0].avatar),e[1]})).then((function(e){J.renderItems(e.slice(0,6))})).catch((function(e){return console.log(e)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){new r(o,e).enableValidation()})),u.addEventListener("click",(function(){F.openPopup();var e=M.getUserInfo();c.value=e.name,a.value=e.info})),s.addEventListener("click",G.openPopup),i.addEventListener("click",z.openPopup),W.forEach((function(e){e.setEventListeners()}))})();