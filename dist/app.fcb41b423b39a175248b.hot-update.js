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
  <fast-combobox autocomplete="both">
  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.repeat)((x) => x.breeds, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <fast-option>${(x) => x}</fast-option> `)}
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
/******/ 	__webpack_require__.h = () => ("a27ea29a0e46d9c4552c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmZjYjQxYjQyM2IzOWExNzUyNDhiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaUM7QUFFakMsTUFBTSxRQUFRLEdBQUcseURBQUksQ0FBZTs7O0lBR2hDLCtEQUFNLENBQ0osQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQ2YseURBQUksQ0FBUSxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQ3ZEOzs7Q0FHSixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsd0RBQUc7Ozs7Q0FJakIsQ0FBQztBQUtGLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWMsU0FBUSxnRUFBVztJQUE5Qzs7UUFDYyxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBYSxFQUFFLENBQUM7SUFhdkMsQ0FBQztJQVhDLGlCQUFpQjtRQUNmLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTFCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUssY0FBYzs7WUFDbEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUNwRSxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUFBLENBQUM7Q0FDSDtBQWRhO0lBQVgsK0RBQVU7NkNBQXVCO0FBQ3RCO0lBQVgsK0RBQVU7Z0RBQTBCO0FBRjFCLGFBQWE7SUFEekIsc0VBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDL0MsYUFBYSxDQWV6QjtBQWZ5Qjs7Ozs7Ozs7O1VDOUIxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtZG9ncy8uL3NyYy9jb21wb25lbnRzL2JyZWVkLXNlbGVjdG9yLnRzIiwid2VicGFjazovL2Zhc3QtZG9ncy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGQVNURWxlbWVudCxcclxuICBjdXN0b21FbGVtZW50LFxyXG4gIGF0dHIsXHJcbiAgaHRtbCxcclxuICBjc3MsXHJcbiAgb2JzZXJ2YWJsZSxcclxuICByZXBlYXQsXHJcbn0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC1lbGVtZW50XCI7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8QnJlZWRTZWxlY3Rvcj5gIFxyXG48ZGl2IGNsYXNzPVwiYnJlZWQtc2VsZWN0b3JcIj5cclxuICA8ZmFzdC1jb21ib2JveCBhdXRvY29tcGxldGU9XCJib3RoXCI+XHJcbiAgJHtyZXBlYXQoXHJcbiAgICAgICh4KSA9PiB4LmJyZWVkcyxcclxuICAgICAgaHRtbDxzdHJpbmc+YCA8ZmFzdC1vcHRpb24+JHsoeCkgPT4geH08L2Zhc3Qtb3B0aW9uPiBgXHJcbiAgICApfVxyXG4gIDwvZmFzdC1jb21ib2JveD5cclxuPC9kaXY+IFxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gY3NzYFxyXG4gIC5icmVlZC1zZWxlY3RvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5cclxuQGN1c3RvbUVsZW1lbnQoeyBuYW1lOiBcImJyZWVkLXNlbGVjdG9yXCIsIHRlbXBsYXRlLCBzdHlsZXMgfSlcclxuZXhwb3J0IGNsYXNzIEJyZWVkU2VsZWN0b3IgZXh0ZW5kcyBGQVNURWxlbWVudCB7XHJcbiAgQG9ic2VydmFibGUgYnJlZWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBvYnNlcnZhYmxlIHN1YkJyZWVkczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgIHRoaXMuZmV0Y2hBbGxCcmVlZHMoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoQWxsQnJlZWRzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHRoaXMuYnJlZWRzID0gT2JqZWN0LmtleXMoZGF0YS5tZXNzYWdlKTtcclxuICB9O1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImEyN2VhMjlhMGU0NmQ5YzQ1NTJjXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9