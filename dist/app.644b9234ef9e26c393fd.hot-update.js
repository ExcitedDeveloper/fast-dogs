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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/when.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
  <fast-button appearance="primary">Random Breed</fast-button>

  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.when)((x) => !x.ready, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <div>Loading... </div>`)}
  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.when)((x) => x.ready, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
      <dog-card
        breed="Hound - Afghan"
        url="https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1954.jpg"
      ></dog-card>
    `)}
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
const fetchRandomBreed = () => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://dog.ceo/api/breeds/image/random");
    return yield response.json();
});
let BreedSearch = class BreedSearch extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.FASTElement {
    constructor() {
        super(...arguments);
        this.ready = false;
    }
    connectedCallback() {
        super.connectedCallback();
        const btn = this.shadowRoot.querySelector("fast-button");
        if (!btn)
            return;
        btn.addEventListener("click", this.handleGetRandomBreed.bind(this));
    }
    handleGetRandomBreed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const card = this.shadowRoot.querySelector("dog-card");
            if (!card)
                return;
            const breed = yield fetchRandomBreed();
            card.url = breed.message;
            card.breed = getBreedName(card.url);
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], BreedSearch.prototype, "ready", void 0);
BreedSearch = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.customElement)({ name: "breed-search", template })
], BreedSearch);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d49b245a19d1ad24609d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjY0NGI5MjM0ZWY5ZTI2YzM5M2ZkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFpQztBQUdqQyxNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFhOzs7SUFHOUIsNkRBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLHlEQUFJLENBQWE7MkJBQ2hCLENBQUM7SUFDeEIsNkRBQUksQ0FDSixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDZCx5REFBSSxDQUFhOzs7OztLQUtoQixDQUNGO0NBQ0YsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7SUFDbkMsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFPLGtCQUFrQixDQUFDO0lBRXBDLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFekMsSUFBSSxTQUFTLEdBQUcsQ0FBQztRQUFFLE9BQU8sK0JBQStCLENBQUM7SUFFMUQsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWpELElBQUksUUFBUSxHQUFHLENBQUM7UUFBRSxPQUFPLDZCQUE2QixDQUFDO0lBRXZELElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxDQUFDO1FBQUUsT0FBTywwQkFBMEIsQ0FBQztJQUVoRSxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFM0QsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV6QyxJQUFJLE9BQU8sR0FBRyxDQUFDO1FBQUUsT0FBTyxXQUFXLENBQUM7SUFFcEMsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVyQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsR0FBUyxFQUFFLENBQUM7SUFDbkMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUN4RSxPQUFPLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQy9CLENBQUMsRUFBQztBQUdGLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVksU0FBUSxnRUFBVztJQUE1Qzs7UUFDYyxVQUFLLEdBQVksS0FBSyxDQUFDO0lBcUJyQyxDQUFDO0lBbkJDLGlCQUFpQjtRQUNmLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTFCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUVqQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUssb0JBQW9COztZQUN4QixNQUFNLElBQUksR0FBbUIsSUFBSSxDQUFDLFVBQVcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFeEUsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTztZQUVsQixNQUFNLEtBQUssR0FBRyxNQUFNLGdCQUFnQixFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDO0tBQUE7Q0FDRjtBQXJCYTtJQUFYLCtEQUFVOzBDQUF3QjtBQUR4QixXQUFXO0lBRHZCLHNFQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxDQUFDO0dBQ3JDLFdBQVcsQ0FzQnZCO0FBdEJ1Qjs7Ozs7Ozs7O1VDekR4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtZG9ncy8uL3NyYy9jb21wb25lbnRzL2JyZWVkLXNlYXJjaC50cyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3Mvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRkFTVEVsZW1lbnQsXHJcbiAgY3VzdG9tRWxlbWVudCxcclxuICBhdHRyLFxyXG4gIGh0bWwsXHJcbiAgY3NzLFxyXG4gIG9ic2VydmFibGUsXHJcbiAgd2hlbixcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgRG9nQ2FyZCB9IGZyb20gXCIuL2RvZy1jYXJkXCI7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8QnJlZWRTZWFyY2g+YFxyXG4gIDxmYXN0LWJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiPlJhbmRvbSBCcmVlZDwvZmFzdC1idXR0b24+XHJcblxyXG4gICR7d2hlbigoeCkgPT4gIXgucmVhZHksIGh0bWw8QnJlZWRTZWFyY2g+YFxyXG4gICAgPGRpdj5Mb2FkaW5nLi4uIDwvZGl2PmApfVxyXG4gICR7d2hlbihcclxuICAgICh4KSA9PiB4LnJlYWR5LFxyXG4gICAgaHRtbDxCcmVlZFNlYXJjaD5gXHJcbiAgICAgIDxkb2ctY2FyZFxyXG4gICAgICAgIGJyZWVkPVwiSG91bmQgLSBBZmdoYW5cIlxyXG4gICAgICAgIHVybD1cImh0dHBzOi8vaW1hZ2VzLmRvZy5jZW8vYnJlZWRzL3dvbGZob3VuZC1pcmlzaC9uMDIwOTA3MjFfMTk1NC5qcGdcIlxyXG4gICAgICA+PC9kb2ctY2FyZD5cclxuICAgIGBcclxuICApfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QnJlZWROYW1lID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKCF1cmwpIHJldHVybiBgRVJST1I6IFVSTCBlbXB0eWA7XHJcblxyXG4gIGNvbnN0IGJyZWVkc1BvcyA9IHVybC5pbmRleE9mKGBicmVlZHMvYCk7XHJcblxyXG4gIGlmIChicmVlZHNQb3MgPCAwKSByZXR1cm4gYEVSUk9SOiBDb3VsZCBub3QgZmluZCBicmVlZHMvYDtcclxuXHJcbiAgY29uc3Qgc2xhc2hQb3MgPSB1cmwuaW5kZXhPZihcIi9cIiwgYnJlZWRzUG9zICsgNyk7XHJcblxyXG4gIGlmIChzbGFzaFBvcyA8IDApIHJldHVybiBgRVJST1I6IENvdWxkIG5vdCBmaW5kIHNsYXNoYDtcclxuXHJcbiAgaWYgKHNsYXNoUG9zIDwgYnJlZWRzUG9zICsgNykgcmV0dXJuIGBFUlJPUjogUG9zaXRpb25zIGludmFsaWRgO1xyXG5cclxuICBjb25zdCBicmVlZFN1YnN0ciA9IHVybC5zdWJzdHJpbmcoYnJlZWRzUG9zICsgNywgc2xhc2hQb3MpO1xyXG5cclxuICBjb25zdCBkYXNoUG9zID0gYnJlZWRTdWJzdHIuaW5kZXhPZihcIi1cIik7XHJcblxyXG4gIGlmIChkYXNoUG9zIDwgMCkgcmV0dXJuIGJyZWVkU3Vic3RyO1xyXG5cclxuICBjb25zdCBwYXJ0cyA9IGJyZWVkU3Vic3RyLnNwbGl0KFwiLVwiKTtcclxuXHJcbiAgcmV0dXJuIGAke3BhcnRzWzFdfSAke3BhcnRzWzBdfWA7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaFJhbmRvbUJyZWVkID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9pbWFnZS9yYW5kb21cIik7XHJcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbkBjdXN0b21FbGVtZW50KHsgbmFtZTogXCJicmVlZC1zZWFyY2hcIiwgdGVtcGxhdGUgfSlcclxuZXhwb3J0IGNsYXNzIEJyZWVkU2VhcmNoIGV4dGVuZHMgRkFTVEVsZW1lbnQge1xyXG4gIEBvYnNlcnZhYmxlIHJlYWR5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuXHJcbiAgICBjb25zdCBidG4gPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJmYXN0LWJ1dHRvblwiKTtcclxuXHJcbiAgICBpZiAoIWJ0bikgcmV0dXJuO1xyXG5cclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVHZXRSYW5kb21CcmVlZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZUdldFJhbmRvbUJyZWVkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgY2FyZDogRG9nQ2FyZCB8IG51bGwgPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJkb2ctY2FyZFwiKTtcclxuXHJcbiAgICBpZiAoIWNhcmQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBicmVlZCA9IGF3YWl0IGZldGNoUmFuZG9tQnJlZWQoKTtcclxuICAgIGNhcmQudXJsID0gYnJlZWQubWVzc2FnZTtcclxuICAgIGNhcmQuYnJlZWQgPSBnZXRCcmVlZE5hbWUoY2FyZC51cmwpO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNDliMjQ1YTE5ZDFhZDI0NjA5ZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==