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
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");


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
    padding: 0.5em;
    margin-top: 1em;
  }

  .dog-breed {
    font-size: 1.5em;
    text-transform: capitalize;
  }

  .dog-img {
    width: 100%;
    max-height: 350px;
    object-fit: contain;
    padding-top: 1em;
  }
`;
const getBreedName = (url) => {
    if (!url)
        return `ERROR: URL empty`;
    const breedsPos = url.indexOf(`breeds/`);
    if (breedsPos < 0)
        return `ERROR: Could not find breeds/`;
    const slashPos = url.indexOf("/", breedsPos + 7);
    if (slashPos < 0)
        return `ERROR: Could not find slash`;
    if (slashPos < breedsPos + 7)
        return `ERROR: Positions invalid`;
    const breedSubstr = url.substring(breedsPos + 7, slashPos);
    const dashPos = breedSubstr.indexOf("-");
    if (dashPos < 0)
        return breedSubstr;
    const parts = breedSubstr.split("-");
    return `${parts[1]} ${parts[0]}`;
};
let DogCard = class DogCard extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.FASTElement {
    connectedCallback() {
        super.connectedCallback();
        this.breed = getBreedName(this.url);
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], DogCard.prototype, "breed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.attr
], DogCard.prototype, "url", void 0);
DogCard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.customElement)({ name: "dog-card", template, styles })
], DogCard);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e40d089dc24f85b8345")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjM0Yzg0OGQwZThlZmRhOThkOGZhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaUM7QUFFakMsTUFBTSxRQUFRLEdBQUcseURBQUksQ0FBUzs7OEJBRUEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLO2dCQUM1QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUc7O0NBRTNCLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRyx3REFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcUJqQixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtJQUNuQyxJQUFJLENBQUMsR0FBRztRQUFFLE9BQU8sa0JBQWtCLENBQUM7SUFFcEMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV6QyxJQUFJLFNBQVMsR0FBRyxDQUFDO1FBQUUsT0FBTywrQkFBK0IsQ0FBQztJQUUxRCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFakQsSUFBSSxRQUFRLEdBQUcsQ0FBQztRQUFFLE9BQU8sNkJBQTZCLENBQUM7SUFFdkQsSUFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUM7UUFBRSxPQUFPLDBCQUEwQixDQUFDO0lBRWhFLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUUzRCxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXpDLElBQUksT0FBTyxHQUFHLENBQUM7UUFBRSxPQUFPLFdBQVcsQ0FBQztJQUVwQyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXJDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBR0YsSUFBYSxPQUFPLEdBQXBCLE1BQWEsT0FBUSxTQUFRLGdFQUFXO0lBSXRDLGlCQUFpQjtRQUNmLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTFCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Y7QUFSYTtJQUFYLCtEQUFVO3NDQUFnQjtBQUNyQjtJQUFMLHlEQUFJO29DQUFjO0FBRlIsT0FBTztJQURuQixzRUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDekMsT0FBTyxDQVNuQjtBQVRtQjs7Ozs7Ozs7O1VDaEVwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtZG9ncy8uL3NyYy9jb21wb25lbnRzL2RvZy1jYXJkLnRzIiwid2VicGFjazovL2Zhc3QtZG9ncy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGQVNURWxlbWVudCxcclxuICBjdXN0b21FbGVtZW50LFxyXG4gIGF0dHIsXHJcbiAgaHRtbCxcclxuICBjc3MsXHJcbiAgb2JzZXJ2YWJsZSxcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gaHRtbDxEb2dDYXJkPmBcclxuICA8ZGl2IGNsYXNzPVwiZG9nLWNhcmRcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZG9nLWJyZWVkXCI+JHsoeCkgPT4geC5icmVlZH08L3NwYW4+XHJcbiAgICA8aW1nIHNyYz1cIiR7KHgpID0+IHgudXJsfVwiIGNsYXNzPVwiZG9nLWltZ1wiIGFsdD1cImRvZyBpbWFnZVwiIC8+XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLmRvZy1jYXJkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICB9XHJcblxyXG4gIC5kb2ctYnJlZWQge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuXHJcbiAgLmRvZy1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEJyZWVkTmFtZSA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gIGlmICghdXJsKSByZXR1cm4gYEVSUk9SOiBVUkwgZW1wdHlgO1xyXG5cclxuICBjb25zdCBicmVlZHNQb3MgPSB1cmwuaW5kZXhPZihgYnJlZWRzL2ApO1xyXG5cclxuICBpZiAoYnJlZWRzUG9zIDwgMCkgcmV0dXJuIGBFUlJPUjogQ291bGQgbm90IGZpbmQgYnJlZWRzL2A7XHJcblxyXG4gIGNvbnN0IHNsYXNoUG9zID0gdXJsLmluZGV4T2YoXCIvXCIsIGJyZWVkc1BvcyArIDcpO1xyXG5cclxuICBpZiAoc2xhc2hQb3MgPCAwKSByZXR1cm4gYEVSUk9SOiBDb3VsZCBub3QgZmluZCBzbGFzaGA7XHJcblxyXG4gIGlmIChzbGFzaFBvcyA8IGJyZWVkc1BvcyArIDcpIHJldHVybiBgRVJST1I6IFBvc2l0aW9ucyBpbnZhbGlkYDtcclxuXHJcbiAgY29uc3QgYnJlZWRTdWJzdHIgPSB1cmwuc3Vic3RyaW5nKGJyZWVkc1BvcyArIDcsIHNsYXNoUG9zKTtcclxuXHJcbiAgY29uc3QgZGFzaFBvcyA9IGJyZWVkU3Vic3RyLmluZGV4T2YoXCItXCIpO1xyXG5cclxuICBpZiAoZGFzaFBvcyA8IDApIHJldHVybiBicmVlZFN1YnN0cjtcclxuXHJcbiAgY29uc3QgcGFydHMgPSBicmVlZFN1YnN0ci5zcGxpdChcIi1cIik7XHJcblxyXG4gIHJldHVybiBgJHtwYXJ0c1sxXX0gJHtwYXJ0c1swXX1gO1xyXG59O1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoeyBuYW1lOiBcImRvZy1jYXJkXCIsIHRlbXBsYXRlLCBzdHlsZXMgfSlcclxuZXhwb3J0IGNsYXNzIERvZ0NhcmQgZXh0ZW5kcyBGQVNURWxlbWVudCB7XHJcbiAgQG9ic2VydmFibGUgYnJlZWQhOiBzdHJpbmc7XHJcbiAgQGF0dHIgdXJsITogc3RyaW5nO1xyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcblxyXG4gICAgdGhpcy5icmVlZCA9IGdldEJyZWVkTmFtZSh0aGlzLnVybCk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVlNDBkMDg5ZGMyNGY4NWI4MzQ1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9