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
  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.repeat)((x) => x.breeds, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <dog-card url="${(x) => x}"></dog-card> `)}
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.css `
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
        this.ready = false;
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
            this.breeds.push(breed.message);
            this.ready = true;
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
/******/ 	__webpack_require__.h = () => ("ecccdfdf52e2dc9d830c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjJlN2Y5ZWRkYTQ5YjdkYWZjOTUwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2lDO0FBRWpDLE1BQU0sUUFBUSxHQUFHLHlEQUFJLENBQWE7OztJQUc5Qiw2REFBSSxDQUNKLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ2YseURBQUksQ0FBYSxxQ0FBcUMsQ0FDdkQ7SUFDQywrREFBTSxDQUNOLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUNmLHlEQUFJLENBQWEsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUM3RDtDQUNGLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRyx3REFBRzs7OztDQUlqQixDQUFDO0FBRUYsTUFBTSxnQkFBZ0IsR0FBRyxHQUFTLEVBQUUsQ0FBQztJQUNuQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ3hFLE9BQU8sTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0IsQ0FBQyxFQUFDO0FBR0YsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBWSxTQUFRLGdFQUFXO0lBQTVDOztRQUNjLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsV0FBTSxHQUFhLEVBQUUsQ0FBQztJQW1CcEMsQ0FBQztJQWpCQyxpQkFBaUI7UUFDZixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUUxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFFakIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVLLG9CQUFvQjs7WUFDeEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxnQkFBZ0IsRUFBRSxDQUFDO1lBRXZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDO0tBQUE7Q0FDRjtBQXBCYTtJQUFYLCtEQUFVOzBDQUF3QjtBQUN2QjtJQUFYLCtEQUFVOzJDQUF1QjtBQUZ2QixXQUFXO0lBRHZCLHNFQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUM3QyxXQUFXLENBcUJ2QjtBQXJCdUI7Ozs7Ozs7OztVQ3BDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9zcmMvY29tcG9uZW50cy9icmVlZC1zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZBU1RFbGVtZW50LFxyXG4gIGN1c3RvbUVsZW1lbnQsXHJcbiAgYXR0cixcclxuICBodG1sLFxyXG4gIGNzcyxcclxuICBvYnNlcnZhYmxlLFxyXG4gIHdoZW4sXHJcbiAgcmVwZWF0LFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBodG1sPEJyZWVkU2VhcmNoPmBcclxuICA8ZmFzdC1idXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIj5SYW5kb20gQnJlZWQ8L2Zhc3QtYnV0dG9uPlxyXG5cclxuICAke3doZW4oXHJcbiAgICAoeCkgPT4gIXgucmVhZHksXHJcbiAgICBodG1sPEJyZWVkU2VhcmNoPmAgPGRpdiBjbGFzcz1cInB0LTFcIj5Mb2FkaW5nLi4uPC9kaXY+YFxyXG4gICl9XHJcbiAgJHtyZXBlYXQoXHJcbiAgICAoeCkgPT4geC5icmVlZHMsXHJcbiAgICBodG1sPEJyZWVkU2VhcmNoPmAgPGRvZy1jYXJkIHVybD1cIiR7KHgpID0+IHh9XCI+PC9kb2ctY2FyZD4gYFxyXG4gICl9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLnB0LTEge1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBmZXRjaFJhbmRvbUJyZWVkID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9pbWFnZS9yYW5kb21cIik7XHJcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbkBjdXN0b21FbGVtZW50KHsgbmFtZTogXCJicmVlZC1zZWFyY2hcIiwgdGVtcGxhdGUsIHN0eWxlcyB9KVxyXG5leHBvcnQgY2xhc3MgQnJlZWRTZWFyY2ggZXh0ZW5kcyBGQVNURWxlbWVudCB7XHJcbiAgQG9ic2VydmFibGUgcmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAb2JzZXJ2YWJsZSBicmVlZHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuXHJcbiAgICBjb25zdCBidG4gPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJmYXN0LWJ1dHRvblwiKTtcclxuXHJcbiAgICBpZiAoIWJ0bikgcmV0dXJuO1xyXG5cclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVHZXRSYW5kb21CcmVlZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZUdldFJhbmRvbUJyZWVkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgYnJlZWQgPSBhd2FpdCBmZXRjaFJhbmRvbUJyZWVkKCk7XHJcblxyXG4gICAgdGhpcy5icmVlZHMucHVzaChicmVlZC5tZXNzYWdlKTtcclxuXHJcbiAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWNjY2RmZGY1MmUyZGM5ZDgzMGNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=