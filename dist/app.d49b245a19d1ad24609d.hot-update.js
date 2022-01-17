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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/when.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
  <fast-button appearance="primary">Random Breed</fast-button>

  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.when)((x) => !x.ready, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <div class="pt-1">Loading... </div>`)}
  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.when)((x) => x.ready, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
      <dog-card
        breed="Hound - Afghan"
        url="https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1954.jpg"
      ></dog-card>
    `)}
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.css `
    pt-1: 1em;
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
const fetchRandomBreed = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://dog.ceo/api/breeds/image/random");
    return yield response.json();
});
let BreedSearch = class BreedSearch extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.FASTElement {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const card = this.shadowRoot.querySelector("dog-card");
            if (!card)
                return;
            const breed = yield fetchRandomBreed();
            card.url = breed.message;
            card.breed = getBreedName(card.url);
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.observable
], BreedSearch.prototype, "ready", void 0);
BreedSearch = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.customElement)({ name: "breed-search", template, styles })
], BreedSearch);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b5a33b28a9eff6e2e995")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtDQUNGO0FBckJhO0lBQVgsK0RBQVU7MENBQXdCO0FBRHhCLFdBQVc7SUFEdkIsc0VBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQzdDLFdBQVcsQ0FzQnZCO0FBdEJ1Qjs7Ozs7Ozs7O1VDN0R4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtZG9ncy8uL3NyYy9jb21wb25lbnRzL2JyZWVkLXNlYXJjaC50cyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3Mvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRkFTVEVsZW1lbnQsXHJcbiAgY3VzdG9tRWxlbWVudCxcclxuICBhdHRyLFxyXG4gIGh0bWwsXHJcbiAgY3NzLFxyXG4gIG9ic2VydmFibGUsXHJcbiAgd2hlbixcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgRG9nQ2FyZCB9IGZyb20gXCIuL2RvZy1jYXJkXCI7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8QnJlZWRTZWFyY2g+YFxyXG4gIDxmYXN0LWJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiPlJhbmRvbSBCcmVlZDwvZmFzdC1idXR0b24+XHJcblxyXG4gICR7d2hlbigoeCkgPT4gIXgucmVhZHksIGh0bWw8QnJlZWRTZWFyY2g+YFxyXG4gICAgPGRpdiBjbGFzcz1cInB0LTFcIj5Mb2FkaW5nLi4uIDwvZGl2PmApfVxyXG4gICR7d2hlbihcclxuICAgICh4KSA9PiB4LnJlYWR5LFxyXG4gICAgaHRtbDxCcmVlZFNlYXJjaD5gXHJcbiAgICAgIDxkb2ctY2FyZFxyXG4gICAgICAgIGJyZWVkPVwiSG91bmQgLSBBZmdoYW5cIlxyXG4gICAgICAgIHVybD1cImh0dHBzOi8vaW1hZ2VzLmRvZy5jZW8vYnJlZWRzL3dvbGZob3VuZC1pcmlzaC9uMDIwOTA3MjFfMTk1NC5qcGdcIlxyXG4gICAgICA+PC9kb2ctY2FyZD5cclxuICAgIGBcclxuICApfVxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gY3NzYFxyXG4gICAgcHQtMTogMWVtO1xyXG5gO1xyXG5cclxuY29uc3QgZ2V0QnJlZWROYW1lID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKCF1cmwpIHJldHVybiBgRVJST1I6IFVSTCBlbXB0eWA7XHJcblxyXG4gIGNvbnN0IGJyZWVkc1BvcyA9IHVybC5pbmRleE9mKGBicmVlZHMvYCk7XHJcblxyXG4gIGlmIChicmVlZHNQb3MgPCAwKSByZXR1cm4gYEVSUk9SOiBDb3VsZCBub3QgZmluZCBicmVlZHMvYDtcclxuXHJcbiAgY29uc3Qgc2xhc2hQb3MgPSB1cmwuaW5kZXhPZihcIi9cIiwgYnJlZWRzUG9zICsgNyk7XHJcblxyXG4gIGlmIChzbGFzaFBvcyA8IDApIHJldHVybiBgRVJST1I6IENvdWxkIG5vdCBmaW5kIHNsYXNoYDtcclxuXHJcbiAgaWYgKHNsYXNoUG9zIDwgYnJlZWRzUG9zICsgNykgcmV0dXJuIGBFUlJPUjogUG9zaXRpb25zIGludmFsaWRgO1xyXG5cclxuICBjb25zdCBicmVlZFN1YnN0ciA9IHVybC5zdWJzdHJpbmcoYnJlZWRzUG9zICsgNywgc2xhc2hQb3MpO1xyXG5cclxuICBjb25zdCBkYXNoUG9zID0gYnJlZWRTdWJzdHIuaW5kZXhPZihcIi1cIik7XHJcblxyXG4gIGlmIChkYXNoUG9zIDwgMCkgcmV0dXJuIGJyZWVkU3Vic3RyO1xyXG5cclxuICBjb25zdCBwYXJ0cyA9IGJyZWVkU3Vic3RyLnNwbGl0KFwiLVwiKTtcclxuXHJcbiAgcmV0dXJuIGAke3BhcnRzWzFdfSAke3BhcnRzWzBdfWA7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaFJhbmRvbUJyZWVkID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9pbWFnZS9yYW5kb21cIik7XHJcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbkBjdXN0b21FbGVtZW50KHsgbmFtZTogXCJicmVlZC1zZWFyY2hcIiwgdGVtcGxhdGUsIHN0eWxlcyB9KVxyXG5leHBvcnQgY2xhc3MgQnJlZWRTZWFyY2ggZXh0ZW5kcyBGQVNURWxlbWVudCB7XHJcbiAgQG9ic2VydmFibGUgcmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgIGNvbnN0IGJ0biA9IHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImZhc3QtYnV0dG9uXCIpO1xyXG5cclxuICAgIGlmICghYnRuKSByZXR1cm47XHJcblxyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUdldFJhbmRvbUJyZWVkLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlR2V0UmFuZG9tQnJlZWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBjYXJkOiBEb2dDYXJkIHwgbnVsbCA9IHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImRvZy1jYXJkXCIpO1xyXG5cclxuICAgIGlmICghY2FyZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGJyZWVkID0gYXdhaXQgZmV0Y2hSYW5kb21CcmVlZCgpO1xyXG4gICAgY2FyZC51cmwgPSBicmVlZC5tZXNzYWdlO1xyXG4gICAgY2FyZC5icmVlZCA9IGdldEJyZWVkTmFtZShjYXJkLnVybCk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI1YTMzYjI4YTllZmY2ZTJlOTk1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9