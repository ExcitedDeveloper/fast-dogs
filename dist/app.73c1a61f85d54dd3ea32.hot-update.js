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
    <span class="dog-breed">${(x) => x.breed}</span>
    <img src="${(x) => x.url}" class="dog-img" alt="dog image" />
  </div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.css `
  .dog-card {
    border: 1px solid black;
    width: 400px;
    height: 400px;
    overflow: hidden;
  }

  .dog-breed {
      font-size: 2em;
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
/******/ 	__webpack_require__.h = () => ("7d67c22addf25bd26302")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjczYzFhNjFmODVkNTRkZDNlYTMyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1pQztBQUVqQyxNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFTOzs4QkFFQSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0JBQzVCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRzs7Q0FFM0IsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLHdEQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCakIsQ0FBQztBQUdGLElBQWEsT0FBTyxHQUFwQixNQUFhLE9BQVEsU0FBUSxnRUFBVztDQUd2QztBQUZTO0lBQUwseURBQUk7c0NBQWdCO0FBQ2pCO0lBQUwseURBQUk7b0NBQWM7QUFGUixPQUFPO0lBRG5CLHNFQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN6QyxPQUFPLENBR25CO0FBSG1COzs7Ozs7Ozs7VUNuQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdC1kb2dzLy4vc3JjL2NvbXBvbmVudHMvZG9nLWNhcmQudHMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZBU1RFbGVtZW50LFxyXG4gIGN1c3RvbUVsZW1lbnQsXHJcbiAgYXR0cixcclxuICBodG1sLFxyXG4gIGNzcyxcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gaHRtbDxEb2dDYXJkPmBcclxuICA8ZGl2IGNsYXNzPVwiZG9nLWNhcmRcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZG9nLWJyZWVkXCI+JHsoeCkgPT4geC5icmVlZH08L3NwYW4+XHJcbiAgICA8aW1nIHNyYz1cIiR7KHgpID0+IHgudXJsfVwiIGNsYXNzPVwiZG9nLWltZ1wiIGFsdD1cImRvZyBpbWFnZVwiIC8+XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLmRvZy1jYXJkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuZG9nLWJyZWVkIHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG5cclxuICAuZG9nLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47IC8vIG9yIGZpbGw/XHJcbiAgfVxyXG5gO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoeyBuYW1lOiBcImRvZy1jYXJkXCIsIHRlbXBsYXRlLCBzdHlsZXMgfSlcclxuZXhwb3J0IGNsYXNzIERvZ0NhcmQgZXh0ZW5kcyBGQVNURWxlbWVudCB7XHJcbiAgICBAYXR0ciBicmVlZCE6IHN0cmluZztcclxuICBAYXR0ciB1cmwhOiBzdHJpbmc7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2Q2N2MyMmFkZGYyNWJkMjYzMDJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=