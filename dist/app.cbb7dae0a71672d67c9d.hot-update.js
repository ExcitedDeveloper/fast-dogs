"use strict";
self["webpackHotUpdatefast_dogs"]("app",{

/***/ "./src/components/breed-search.ts":
/*!****************************************!*\
  !*** ./src/components/breed-search.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreedSearch": () => (/* binding */ BreedSearch)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/when.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/repeat.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
  <fast-button appearance="primary">Random Breed</fast-button>

  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.when)((x) => !x.ready, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <div class="pt-1">Loading...</div>`)}

  <div class="breed-list">
    ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.repeat)((x) => x.breeds, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <dog-card url="${(x) => x}"></dog-card> `)}
  </div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.css `
  .breed-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
  }

  .pt-1 {
    padding-top: 1em;
  }
`;
const fetchRandomBreed = () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://dog.ceo/api/breeds/image/random");
    return yield response.json();
});
let BreedSearch = class BreedSearch extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.FASTElement {
    constructor() {
        super(...arguments);
        this.ready = true;
        this.breeds = [];
    }
    connectedCallback() {
        super.connectedCallback();
        const btn = this.shadowRoot.querySelector("fast-button");
        if (!btn)
            return;
        btn.addEventListener("click", this.handleGetRandomBreed.bind(this));
    }
    handleGetRandomBreed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const breed = yield fetchRandomBreed();
            this.breeds.unshift(breed.message);
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.observable
], BreedSearch.prototype, "ready", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.observable
], BreedSearch.prototype, "breeds", void 0);
BreedSearch = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.customElement)({ name: "breed-search", template, styles })
], BreedSearch);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b8ec00ddfc3156903540")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNiYjdkYWUwYTcxNjcyZDY3YzlkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2lDO0FBRWpDLE1BQU0sUUFBUSxHQUFHLHlEQUFJLENBQWE7OztJQUc5Qiw2REFBSSxDQUNKLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ2YseURBQUksQ0FBYSxxQ0FBcUMsQ0FDdkQ7OztNQUdHLCtEQUFNLENBQ04sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQ2YseURBQUksQ0FBYSxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQzdEOztDQUVKLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRyx3REFBRzs7Ozs7Ozs7OztDQVVqQixDQUFDO0FBRUYsTUFBTSxnQkFBZ0IsR0FBRyxHQUFTLEVBQUUsQ0FBQztJQUNuQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ3hFLE9BQU8sTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0IsQ0FBQyxFQUFDO0FBR0YsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBWSxTQUFRLGdFQUFXO0lBQTVDOztRQUNjLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsV0FBTSxHQUFhLEVBQUUsQ0FBQztJQWlCcEMsQ0FBQztJQWZDLGlCQUFpQjtRQUNmLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTFCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUVqQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUssb0JBQW9COztZQUN4QixNQUFNLEtBQUssR0FBRyxNQUFNLGdCQUFnQixFQUFFLENBQUM7WUFFdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtDQUNGO0FBbEJhO0lBQVgsK0RBQVU7MENBQXVCO0FBQ3RCO0lBQVgsK0RBQVU7MkNBQXVCO0FBRnZCLFdBQVc7SUFEdkIsc0VBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQzdDLFdBQVcsQ0FtQnZCO0FBbkJ1Qjs7Ozs7Ozs7O1VDN0N4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtZG9ncy8uL3NyYy9jb21wb25lbnRzL2JyZWVkLXNlYXJjaC50cyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3Mvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRkFTVEVsZW1lbnQsXHJcbiAgY3VzdG9tRWxlbWVudCxcclxuICBhdHRyLFxyXG4gIGh0bWwsXHJcbiAgY3NzLFxyXG4gIG9ic2VydmFibGUsXHJcbiAgd2hlbixcclxuICByZXBlYXQsXHJcbn0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC1lbGVtZW50XCI7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8QnJlZWRTZWFyY2g+YFxyXG4gIDxmYXN0LWJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiPlJhbmRvbSBCcmVlZDwvZmFzdC1idXR0b24+XHJcblxyXG4gICR7d2hlbihcclxuICAgICh4KSA9PiAheC5yZWFkeSxcclxuICAgIGh0bWw8QnJlZWRTZWFyY2g+YCA8ZGl2IGNsYXNzPVwicHQtMVwiPkxvYWRpbmcuLi48L2Rpdj5gXHJcbiAgKX1cclxuXHJcbiAgPGRpdiBjbGFzcz1cImJyZWVkLWxpc3RcIj5cclxuICAgICR7cmVwZWF0KFxyXG4gICAgICAoeCkgPT4geC5icmVlZHMsXHJcbiAgICAgIGh0bWw8QnJlZWRTZWFyY2g+YCA8ZG9nLWNhcmQgdXJsPVwiJHsoeCkgPT4geH1cIj48L2RvZy1jYXJkPiBgXHJcbiAgICApfVxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gY3NzYFxyXG4gIC5icmVlZC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDJlbTtcclxuICB9XHJcblxyXG4gIC5wdC0xIHtcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZmV0Y2hSYW5kb21CcmVlZCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvaW1hZ2UvcmFuZG9tXCIpO1xyXG4gIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG5AY3VzdG9tRWxlbWVudCh7IG5hbWU6IFwiYnJlZWQtc2VhcmNoXCIsIHRlbXBsYXRlLCBzdHlsZXMgfSlcclxuZXhwb3J0IGNsYXNzIEJyZWVkU2VhcmNoIGV4dGVuZHMgRkFTVEVsZW1lbnQge1xyXG4gIEBvYnNlcnZhYmxlIHJlYWR5OiBib29sZWFuID0gdHJ1ZTtcclxuICBAb2JzZXJ2YWJsZSBicmVlZHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuXHJcbiAgICBjb25zdCBidG4gPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJmYXN0LWJ1dHRvblwiKTtcclxuXHJcbiAgICBpZiAoIWJ0bikgcmV0dXJuO1xyXG5cclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVHZXRSYW5kb21CcmVlZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZUdldFJhbmRvbUJyZWVkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgYnJlZWQgPSBhd2FpdCBmZXRjaFJhbmRvbUJyZWVkKCk7XHJcblxyXG4gICAgdGhpcy5icmVlZHMudW5zaGlmdChicmVlZC5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjhlYzAwZGRmYzMxNTY5MDM1NDBcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=