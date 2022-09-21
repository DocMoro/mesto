(()=>{"use strict";var e={};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.p="";var n=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes,this._idUserCard=t.owner._id,this._selector=n,this._handleImageClick=r,this._idUser=o,this._handleDeleteClick=i,this._id=t._id}var n,r;return n=e,(r=[{key:"generateCard",value:function(){return this._element=document.querySelector(this._selector).content.querySelector(".card").cloneNode(!0),this._imageElement=this._element.querySelector(".card__image"),this._idUser===this._idUserCard&&this._imageElement.insertAdjacentHTML("afterend",'<button type="button" class="card__delete button" aria-label="Удалить"></button>'),this._element.querySelector(".card__counter-like").textContent=this._likes.length,this._setEventListeners(),this._element.querySelector(".card__title").textContent=this._name,this._imageElement.src=this._link,this._imageElement.alt=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__button").addEventListener("click",(function(t){return e._toggleLike(t)})),console.log(this._idUser),console.log(this._idUserCard),this._idUser===this._idUserCard&&this._element.querySelector(".card__delete").addEventListener("click",(function(){return e._handleDeleteClick()})),this._imageElement.addEventListener("click",(function(){return e._handleImageClick(e._name,e._link)}))}},{key:"_toggleLike",value:function(e){e.target.classList.toggle("card__button_like")}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.name,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.name,"-error"));e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._disableButton(),this._formElement.addEventListener("reset",(function(){e._inputList.forEach((function(t){e._hideInputError(t)})),e._disableButton()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","")}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.p,e.p,e.p,e.p,e.p,e.p;var i={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},u=document.querySelector(".profile__edit-button"),c=document.querySelector(".popup__input_field_name"),a=document.querySelector(".popup__input_field_about-me"),s=document.querySelector(".profile__add-button");function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=document.querySelector(t),this._bindHandleEscClose=this._handleEscClose.bind(this),this.openPopup=this.openPopup.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){document.addEventListener("keydown",this._bindHandleEscClose),this.popup.classList.add("popup_active")}},{key:"closePopup",value:function(){document.removeEventListener("keydown",this._bindHandleEscClose),this.popup.classList.remove("popup_active")}},{key:"_handleEscClose",value:function(e){27===e.keyCode&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this.popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__button-close"))&&e.closePopup()}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function b(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imagePopup=t.popup.querySelector(".popup__image"),t._subtitlePopup=t.popup.querySelector(".popup__subtitle"),t}return t=u,(n=[{key:"openPopup",value:function(e,t){this._imagePopup.src=t,this._imagePopup.alt=e,this._subtitlePopup.textContent=e,d(v(u.prototype),"openPopup",this).call(this)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function O(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitHandler=t,n._formPopup=n.popup.querySelector(".popup__form"),n._inputsPopup=Array.from(n._formPopup.querySelectorAll(".popup__input")),n}return t=u,(n=[{key:"openPopup",value:function(){this._formPopup.reset(),w(j(u.prototype),"openPopup",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;w(j(u.prototype),"setEventListeners",this).call(this),this.popup.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues())}))}},{key:"_getInputValues",value:function(){var e={};return this._inputsPopup.forEach((function(t){e[t.name]=t.value})),e}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){console.log(e);var n=t._renderer(e);t.addItem(n)}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.selectorUserName,r=t.selectorUserInfo,o=t.selectorUserAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameUser=document.querySelector(n),this._infoUser=document.querySelector(r),this._avatarUser=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameUser.textContent,info:this._infoUser.textContent}}},{key:"setUserInfo",value:function(e,t){this._nameUser.textContent=e,this._infoUser.textContent=t}},{key:"setUserAvatar",value:function(e){this._avatarUser.src=e}},{key:"setUserId",value:function(e){this.idUser=e}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setUserInfo",value:function(e,t){fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addCard",value:function(e,t){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function x(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"setSubmitAction",value:function(e){this.popup.querySelector(".popup__button").addEventListener("click",(function(){e()}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f),N=new L(Q,".cards"),V=new U({selectorUserName:".profile__name",selectorUserInfo:".profile__about-me",selectorUserAvatar:".profile__avatar"}),M=new S(".page__edit-popup",(function(e){V.setUserInfo(e.profileName,e.profileInfo),K.setUserInfo(e.profileName,e.profileInfo),M.closePopup()})),J=new S(".page__add-popup",(function(e){K.addCard(e.cardName,e.cardLink).then((function(e){var t=Q(e);N.addItem(t)})).catch((function(e){return console.log(e)})),J.closePopup()})),z=new m(".page__card-popup"),F=new H(".page__delete-popup"),G=[M,J,z,F],K=new R({url:"https://mesto.nomoreparties.co./v1/cohort-50/",headers:{authorization:"869fd84c-8f33-41d3-abfa-9b98ecd7be14","Content-Type":"application/json"}});function Q(e){var t=new n(e,".template-card",z.openPopup,V.idUser,(function(){F.openPopup(),F.setSubmitAction((function(){K.deleteCard(t._id).then((function(){t.removeCard(),F.closePopup()})).catch((function(e){return console.log(e)}))}))}));return t.generateCard()}K.getUserInfo().then((function(e){V.setUserInfo(e.name,e.about),V.setUserId(e._id),console.log(e._id),V.setUserAvatar(e.avatar)})).catch((function(e){return console.log(e)})),K.getInitialCards().then((function(e){N.renderItems(e.slice(0,6))})).catch((function(e){return console.log(e)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){new o(i,e).enableValidation()})),u.addEventListener("click",(function(){M.openPopup();var e=V.getUserInfo();c.value=e.name,a.value=e.info})),s.addEventListener("click",J.openPopup),G.forEach((function(e){e.setEventListeners()}))})();