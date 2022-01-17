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
    <fast-combobox
      autocomplete="both"
      @change="${(x, c) => x.handleBreedChange(c)}"
    >
      ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.repeat)((x) => x.breeds, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <fast-option>${(x) => x}</fast-option> `)}
    </fast-combobox>
  </div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.css `
  .breed-selector {
    display: flex;
  }
`;
const capitalize = (words) => {
    return words
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" ");
};
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
    handleBreedChange(event) {
        console.log(`event = ${JSON.stringify(event)}`);
    }
    fetchAllBreeds() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch("https://dog.ceo/api/breeds/list/all");
            const data = yield response.json();
            this.breeds = Object.keys(data.message).map((key) => capitalize(key));
        });
    }
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
/******/ 	__webpack_require__.h = () => ("d5f44d65d36721e6f745")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjQ2YzgxMjJiMWU5Zjc0Y2UzN2M0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaUM7QUFFakMsTUFBTSxRQUFRLEdBQUcseURBQUksQ0FBZTs7OztpQkFJbkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDOztRQUV6QywrREFBTSxDQUNOLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUNmLHlEQUFJLENBQVEsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUN2RDs7O0NBR04sQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLHdEQUFHOzs7O0NBSWpCLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ25DLE9BQU8sS0FBSztTQUNULFdBQVcsRUFBRTtTQUNiLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDVixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZixDQUFDLENBQUM7QUFHRixJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFjLFNBQVEsZ0VBQVc7SUFBOUM7O1FBQ2MsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQWEsRUFBRSxDQUFDO0lBaUJ2QyxDQUFDO0lBZkMsaUJBQWlCO1FBQ2YsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFVO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUssY0FBYzs7WUFDbEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUNwRSxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQztLQUFBO0NBQ0Y7QUFsQmE7SUFBWCwrREFBVTs2Q0FBdUI7QUFDdEI7SUFBWCwrREFBVTtnREFBMEI7QUFGMUIsYUFBYTtJQUR6QixzRUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUMvQyxhQUFhLENBbUJ6QjtBQW5CeUI7Ozs7Ozs7OztVQ3ZDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9zcmMvY29tcG9uZW50cy9icmVlZC1zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3Mvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRkFTVEVsZW1lbnQsXHJcbiAgY3VzdG9tRWxlbWVudCxcclxuICBhdHRyLFxyXG4gIGh0bWwsXHJcbiAgY3NzLFxyXG4gIG9ic2VydmFibGUsXHJcbiAgcmVwZWF0LFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBodG1sPEJyZWVkU2VsZWN0b3I+YFxyXG4gIDxkaXYgY2xhc3M9XCJicmVlZC1zZWxlY3RvclwiPlxyXG4gICAgPGZhc3QtY29tYm9ib3hcclxuICAgICAgYXV0b2NvbXBsZXRlPVwiYm90aFwiXHJcbiAgICAgIEBjaGFuZ2U9XCIkeyh4LCBjKSA9PiB4LmhhbmRsZUJyZWVkQ2hhbmdlKGMpfVwiXHJcbiAgICA+XHJcbiAgICAgICR7cmVwZWF0KFxyXG4gICAgICAgICh4KSA9PiB4LmJyZWVkcyxcclxuICAgICAgICBodG1sPHN0cmluZz5gIDxmYXN0LW9wdGlvbj4keyh4KSA9PiB4fTwvZmFzdC1vcHRpb24+IGBcclxuICAgICAgKX1cclxuICAgIDwvZmFzdC1jb21ib2JveD5cclxuICA8L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IGNzc2BcclxuICAuYnJlZWQtc2VsZWN0b3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjYXBpdGFsaXplID0gKHdvcmRzOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gd29yZHNcclxuICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAuc3BsaXQoXCIgXCIpXHJcbiAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHJpbmcoMSkpXHJcbiAgICAuam9pbihcIiBcIik7XHJcbn07XHJcblxyXG5AY3VzdG9tRWxlbWVudCh7IG5hbWU6IFwiYnJlZWQtc2VsZWN0b3JcIiwgdGVtcGxhdGUsIHN0eWxlcyB9KVxyXG5leHBvcnQgY2xhc3MgQnJlZWRTZWxlY3RvciBleHRlbmRzIEZBU1RFbGVtZW50IHtcclxuICBAb2JzZXJ2YWJsZSBicmVlZHM6IHN0cmluZ1tdID0gW107XHJcbiAgQG9ic2VydmFibGUgc3ViQnJlZWRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcblxyXG4gICAgdGhpcy5mZXRjaEFsbEJyZWVkcygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQnJlZWRDaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coYGV2ZW50ID0gJHtKU09OLnN0cmluZ2lmeShldmVudCl9YCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaEFsbEJyZWVkcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9saXN0L2FsbFwiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB0aGlzLmJyZWVkcyA9IE9iamVjdC5rZXlzKGRhdGEubWVzc2FnZSkubWFwKChrZXkpID0+IGNhcGl0YWxpemUoa2V5KSk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ1ZjQ0ZDY1ZDM2NzIxZTZmNzQ1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9