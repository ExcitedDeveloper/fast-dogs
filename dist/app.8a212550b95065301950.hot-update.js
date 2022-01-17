"use strict";
self["webpackHotUpdatefast_dogs"]("app",{

/***/ "./src/components/dog-card.ts":
/*!************************************!*\
  !*** ./src/components/dog-card.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DogCard": () => (/* binding */ DogCard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
  <div class="dog-card">
    <span>${(x) => x.breed}</span>
    <img src="${(x) => x.url}" class="dog-img" alt="dog image" />
  </div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.css `
  .dog-card {
    border: 1px solid black;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .dog-img {
    width: 100%;
    height: 100%;
    object-fit: contain; // or fill?
  }
`;
let DogCard = class DogCard extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.FASTElement {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr
], DogCard.prototype, "breed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr
], DogCard.prototype, "url", void 0);
DogCard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.customElement)({ name: "dog-card", template, styles })
], DogCard);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6543cc3cc4e06fb942f4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjhhMjEyNTUwYjk1MDY1MzAxOTUwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1pQztBQUVqQyxNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFTOztZQUVsQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0JBQ1YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHOztDQUUzQixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsd0RBQUc7Ozs7Ozs7Ozs7Ozs7OztDQWVqQixDQUFDO0FBR0YsSUFBYSxPQUFPLEdBQXBCLE1BQWEsT0FBUSxTQUFRLGdFQUFXO0NBR3ZDO0FBRlM7SUFBTCx5REFBSTtzQ0FBZ0I7QUFDakI7SUFBTCx5REFBSTtvQ0FBYztBQUZSLE9BQU87SUFEbkIsc0VBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3pDLE9BQU8sQ0FHbkI7QUFIbUI7Ozs7Ozs7OztVQ2pDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9zcmMvY29tcG9uZW50cy9kb2ctY2FyZC50cyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3Mvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRkFTVEVsZW1lbnQsXHJcbiAgY3VzdG9tRWxlbWVudCxcclxuICBhdHRyLFxyXG4gIGh0bWwsXHJcbiAgY3NzLFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBodG1sPERvZ0NhcmQ+YFxyXG4gIDxkaXYgY2xhc3M9XCJkb2ctY2FyZFwiPlxyXG4gICAgPHNwYW4+JHsoeCkgPT4geC5icmVlZH08L3NwYW4+XHJcbiAgICA8aW1nIHNyYz1cIiR7KHgpID0+IHgudXJsfVwiIGNsYXNzPVwiZG9nLWltZ1wiIGFsdD1cImRvZyBpbWFnZVwiIC8+XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLmRvZy1jYXJkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5kb2ctaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjsgLy8gb3IgZmlsbD9cclxuICB9XHJcbmA7XHJcblxyXG5AY3VzdG9tRWxlbWVudCh7IG5hbWU6IFwiZG9nLWNhcmRcIiwgdGVtcGxhdGUsIHN0eWxlcyB9KVxyXG5leHBvcnQgY2xhc3MgRG9nQ2FyZCBleHRlbmRzIEZBU1RFbGVtZW50IHtcclxuICAgIEBhdHRyIGJyZWVkITogc3RyaW5nO1xyXG4gIEBhdHRyIHVybCE6IHN0cmluZztcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2NTQzY2MzY2M0ZTA2ZmI5NDJmNFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==