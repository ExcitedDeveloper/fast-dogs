"use strict";
self["webpackHotUpdatefast_dogs"]("app",{

/***/ "./src/components/breed-selector.ts":
/*!******************************************!*\
  !*** ./src/components/breed-selector.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreedSelector": () => (/* binding */ BreedSelector)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/repeat.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` 
<div class="breed-selector">
  <fast-combobox id="breeds">
  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.repeat)((x) => x.breeds, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <fast-option url="${(x) => x}"></fast-option> `)}
  </fast-combobox>
</div> 
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.css `
  .breed-selector {
    display: flex;
  }
`;
let BreedSelector = class BreedSelector extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.FASTElement {
    constructor() {
        super(...arguments);
        this.breeds = [];
        this.subBreeds = [];
    }
    connectedCallback() {
        super.connectedCallback();
        this.fetchAllBreeds();
    }
    fetchAllBreeds() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch("https://dog.ceo/api/breeds/list/all");
            const data = yield response.json();
            console.log(`data = ${data}`);
            this.breeds = Object.keys(data.message);
        });
    }
    ;
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.observable
], BreedSelector.prototype, "breeds", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.observable
], BreedSelector.prototype, "subBreeds", void 0);
BreedSelector = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.customElement)({ name: "breed-selector", template, styles })
], BreedSelector);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("871a0f0b0c9eadd26a0f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmExNGE4N2ZlZjRhYmIxNDEyNDMxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaUM7QUFFakMsTUFBTSxRQUFRLEdBQUcseURBQUksQ0FBZTs7O0lBR2hDLCtEQUFNLENBQ0osQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQ2YseURBQUksQ0FBUSxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQzlEOzs7Q0FHSixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsd0RBQUc7Ozs7Q0FJakIsQ0FBQztBQUtGLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWMsU0FBUSxnRUFBVztJQUE5Qzs7UUFDYyxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBYSxFQUFFLENBQUM7SUFldkMsQ0FBQztJQWJDLGlCQUFpQjtRQUNmLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTFCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUssY0FBYzs7WUFDbEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUNwRSxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQyxDQUFDO0tBQUE7SUFBQSxDQUFDO0NBQ0g7QUFoQmE7SUFBWCwrREFBVTs2Q0FBdUI7QUFDdEI7SUFBWCwrREFBVTtnREFBMEI7QUFGMUIsYUFBYTtJQUR6QixzRUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUMvQyxhQUFhLENBaUJ6QjtBQWpCeUI7Ozs7Ozs7OztVQzlCMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9zcmMvY29tcG9uZW50cy9icmVlZC1zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3Mvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRkFTVEVsZW1lbnQsXHJcbiAgY3VzdG9tRWxlbWVudCxcclxuICBhdHRyLFxyXG4gIGh0bWwsXHJcbiAgY3NzLFxyXG4gIG9ic2VydmFibGUsXHJcbiAgcmVwZWF0LFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBodG1sPEJyZWVkU2VsZWN0b3I+YCBcclxuPGRpdiBjbGFzcz1cImJyZWVkLXNlbGVjdG9yXCI+XHJcbiAgPGZhc3QtY29tYm9ib3ggaWQ9XCJicmVlZHNcIj5cclxuICAke3JlcGVhdChcclxuICAgICAgKHgpID0+IHguYnJlZWRzLFxyXG4gICAgICBodG1sPHN0cmluZz5gIDxmYXN0LW9wdGlvbiB1cmw9XCIkeyh4KSA9PiB4fVwiPjwvZmFzdC1vcHRpb24+IGBcclxuICAgICl9XHJcbiAgPC9mYXN0LWNvbWJvYm94PlxyXG48L2Rpdj4gXHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLmJyZWVkLXNlbGVjdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5AY3VzdG9tRWxlbWVudCh7IG5hbWU6IFwiYnJlZWQtc2VsZWN0b3JcIiwgdGVtcGxhdGUsIHN0eWxlcyB9KVxyXG5leHBvcnQgY2xhc3MgQnJlZWRTZWxlY3RvciBleHRlbmRzIEZBU1RFbGVtZW50IHtcclxuICBAb2JzZXJ2YWJsZSBicmVlZHM6IHN0cmluZ1tdID0gW107XHJcbiAgQG9ic2VydmFibGUgc3ViQnJlZWRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcblxyXG4gICAgdGhpcy5mZXRjaEFsbEJyZWVkcygpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hBbGxCcmVlZHMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGxcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coYGRhdGEgPSAke2RhdGF9YClcclxuICAgIHRoaXMuYnJlZWRzID0gT2JqZWN0LmtleXMoZGF0YS5tZXNzYWdlKTtcclxuXHJcbiAgfTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4NzFhMGYwYjBjOWVhZGQyNmEwZlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==