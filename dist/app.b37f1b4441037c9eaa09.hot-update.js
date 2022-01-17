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
    <div><h2>Hound - Afghan</h2></div>
    <div><img src="${(x) => x.url}" class="dog-img" alt="dog image" /></div>
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
    background: blue;
  }

  .dog-img {
    width: 100%;
    height: 100%;
    object-fit: contain; // or fill?
  }

  .dog-card h2 {
    width: 100%;
    height: 100%;
    background: red;
  }

  .dog-card img {
    width: 100%;
    height: 100%;
    background: green;
  }
`;
let DogCard = class DogCard extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.FASTElement {
};
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
/******/ 	__webpack_require__.h = () => ("d5c54cce76da37b86a54")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmIzN2YxYjQ0NDEwMzdjOWVhYTA5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1pQztBQUVqQyxNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFTOzs7cUJBR1QsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHOztDQUVoQyxDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsd0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E0QmpCLENBQUM7QUFHRixJQUFhLE9BQU8sR0FBcEIsTUFBYSxPQUFRLFNBQVEsZ0VBQVc7Q0FFdkM7QUFETztJQUFMLHlEQUFJO29DQUFjO0FBRFIsT0FBTztJQURuQixzRUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDekMsT0FBTyxDQUVuQjtBQUZtQjs7Ozs7Ozs7O1VDOUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtZG9ncy8uL3NyYy9jb21wb25lbnRzL2RvZy1jYXJkLnRzIiwid2VicGFjazovL2Zhc3QtZG9ncy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGQVNURWxlbWVudCxcclxuICBjdXN0b21FbGVtZW50LFxyXG4gIGF0dHIsXHJcbiAgaHRtbCxcclxuICBjc3MsXHJcbn0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC1lbGVtZW50XCI7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8RG9nQ2FyZD5gXHJcbiAgPGRpdiBjbGFzcz1cImRvZy1jYXJkXCI+XHJcbiAgICA8ZGl2PjxoMj5Ib3VuZCAtIEFmZ2hhbjwvaDI+PC9kaXY+XHJcbiAgICA8ZGl2PjxpbWcgc3JjPVwiJHsoeCkgPT4geC51cmx9XCIgY2xhc3M9XCJkb2ctaW1nXCIgYWx0PVwiZG9nIGltYWdlXCIgLz48L2Rpdj5cclxuICA8L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IGNzc2BcclxuICAuZG9nLWNhcmQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcclxuICB9XHJcblxyXG4gIC5kb2ctaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjsgLy8gb3IgZmlsbD9cclxuICB9XHJcblxyXG4gIC5kb2ctY2FyZCBoMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICB9XHJcblxyXG4gIC5kb2ctY2FyZCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICB9XHJcbmA7XHJcblxyXG5AY3VzdG9tRWxlbWVudCh7IG5hbWU6IFwiZG9nLWNhcmRcIiwgdGVtcGxhdGUsIHN0eWxlcyB9KVxyXG5leHBvcnQgY2xhc3MgRG9nQ2FyZCBleHRlbmRzIEZBU1RFbGVtZW50IHtcclxuICBAYXR0ciB1cmwhOiBzdHJpbmc7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDVjNTRjY2U3NmRhMzdiODZhNTRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=