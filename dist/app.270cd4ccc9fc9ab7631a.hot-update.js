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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/repeat.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/when.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
  <div class="breed-selector">
    <fast-combobox
      autocomplete="both"
      :value="${(x) => x.selectedBreed}"
      @change="${(x, c) => x.handleBreedChange(c.event)}"
    >
      ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.repeat)((x) => x.breeds, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <fast-option>${(x) => x}</fast-option> `)}
    </fast-combobox>

    ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.when)((x) => x.subBreeds.length > 0, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
        <fast-combobox
          autocomplete="both"
          @change="${(x, c) => x.handleSubBreedChange(c.event)}"
        >
          ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.repeat)((x) => x.subBreeds, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <fast-option>${(x) => x}</fast-option> `)}
        </fast-combobox>
      `)}
    ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.when)((x) => x.selectedSubBreed.length > 0 ||
    (x.subBreeds.length <= 0 && x.selectedBreed.length > 0), _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
        <fast-button @click="${(x, c) => x.callHandleAddBreed.bind(undefined)()}"
          >Add Breed</fast-button
        >
      `)}
  </div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.css `
  .breed-selector {
    display: flex;
    gap: 0.5em;
  }
`;
const capitalize = (words) => {
    return words
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" ");
};
const getSubBreeds = (breedsData, currBreed) => {
    return breedsData.message[currBreed.toLowerCase()];
};
let BreedSelector = class BreedSelector extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.FASTElement {
    constructor() {
        super(...arguments);
        this.handleAddBreed = () => { };
        this.breeds = [];
        this.subBreeds = [];
        this.selectedBreed = "";
        this.selectedSubBreed = "";
        this.selectedBreedUrl = "";
        this.allBreedsData = {};
    }
    connectedCallback() {
        super.connectedCallback();
        this.fetchAllBreeds();
    }
    callHandleAddBreed() {
        console.log(`calling handleAddBreed with url = ${this.selectedBreedUrl}`);
        this.handleAddBreed(this.selectedBreedUrl);
    }
    handleAddBreedChanged() {
        console.log(`handleAddBreed changed; handleAddBreed = ${this.handleAddBreed}`);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`attribute changed name = ${name}`);
        if (name === 'handleaddbreed') {
            console.log(`update handleAddBreed`);
            this.handleAddBreed = newValue;
        }
    }
    handleBreedChange(event) {
        this.selectedBreed = event.target.value;
        this.selectedSubBreed = "";
        this.subBreeds = getSubBreeds(this.allBreedsData, this.selectedBreed).map((breed) => capitalize(breed));
        if (this.subBreeds.length <= 0) {
            if (this.selectedBreed.length <= 0) {
                this.selectedBreedUrl = "";
            }
            else {
                this.fetchBreedUrl();
            }
        }
    }
    handleSubBreedChange(event) {
        this.selectedSubBreed = event.target.value;
        console.log(`selectedSubBreed = ${this.selectedSubBreed}`);
    }
    fetchAllBreeds() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch("https://dog.ceo/api/breeds/list/all");
            this.allBreedsData = yield response.json();
            this.breeds = Object.keys(this.allBreedsData.message).map((key) => capitalize(key));
        });
    }
    // all breed = https://dog.ceo/api/breed/hound/images
    // all sub breeds = https://dog.ceo/api/breed/hound/afghan/images
    fetchBreedUrl() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let response;
            if (this.selectedSubBreed.length <= 0) {
                response = yield fetch(`https://dog.ceo/api/breed/${this.selectedBreed.toLowerCase()}/images`);
            }
            else {
                response = yield fetch(`https://dog.ceo/api/breed/${this.selectedBreed.toLowerCase()}/${this.selectedSubBreed.toLowerCase()}/images`);
            }
            const json = yield response.json();
            this.selectedBreedUrl =
                json.message[Math.floor(Math.random() * json.message.length) + 1];
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr
], BreedSelector.prototype, "handleAddBreed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], BreedSelector.prototype, "breeds", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], BreedSelector.prototype, "subBreeds", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], BreedSelector.prototype, "selectedBreed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], BreedSelector.prototype, "selectedSubBreed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], BreedSelector.prototype, "selectedBreedUrl", void 0);
BreedSelector = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.customElement)({ name: "breed-selector", template, styles })
], BreedSelector);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("955f4d2d9af3f708be45")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RSxDQUFDO0tBQUE7Q0FDRjtBQWhGTztJQUFMLHlEQUFJO3FEQUFnQztBQUN6QjtJQUFYLCtEQUFVOzZDQUF1QjtBQUN0QjtJQUFYLCtEQUFVO2dEQUEwQjtBQUN6QjtJQUFYLCtEQUFVO29EQUE0QjtBQUMzQjtJQUFYLCtEQUFVO3VEQUErQjtBQUM5QjtJQUFYLCtEQUFVO3VEQUErQjtBQU4vQixhQUFhO0lBRHpCLHNFQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQy9DLGFBQWEsQ0FpRnpCO0FBakZ5Qjs7Ozs7Ozs7O1VDdkUxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtZG9ncy8uL3NyYy9jb21wb25lbnRzL2JyZWVkLXNlbGVjdG9yLnRzIiwid2VicGFjazovL2Zhc3QtZG9ncy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGQVNURWxlbWVudCxcclxuICBjdXN0b21FbGVtZW50LFxyXG4gIGF0dHIsXHJcbiAgaHRtbCxcclxuICBjc3MsXHJcbiAgb2JzZXJ2YWJsZSxcclxuICByZXBlYXQsXHJcbiAgd2hlbixcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gaHRtbDxCcmVlZFNlbGVjdG9yPmBcclxuICA8ZGl2IGNsYXNzPVwiYnJlZWQtc2VsZWN0b3JcIj5cclxuICAgIDxmYXN0LWNvbWJvYm94XHJcbiAgICAgIGF1dG9jb21wbGV0ZT1cImJvdGhcIlxyXG4gICAgICA6dmFsdWU9XCIkeyh4KSA9PiB4LnNlbGVjdGVkQnJlZWR9XCJcclxuICAgICAgQGNoYW5nZT1cIiR7KHgsIGMpID0+IHguaGFuZGxlQnJlZWRDaGFuZ2UoYy5ldmVudCl9XCJcclxuICAgID5cclxuICAgICAgJHtyZXBlYXQoXHJcbiAgICAgICAgKHgpID0+IHguYnJlZWRzLFxyXG4gICAgICAgIGh0bWw8c3RyaW5nPmAgPGZhc3Qtb3B0aW9uPiR7KHgpID0+IHh9PC9mYXN0LW9wdGlvbj4gYFxyXG4gICAgICApfVxyXG4gICAgPC9mYXN0LWNvbWJvYm94PlxyXG5cclxuICAgICR7d2hlbihcclxuICAgICAgKHgpID0+IHguc3ViQnJlZWRzLmxlbmd0aCA+IDAsXHJcbiAgICAgIGh0bWw8QnJlZWRTZWxlY3Rvcj5gXHJcbiAgICAgICAgPGZhc3QtY29tYm9ib3hcclxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImJvdGhcIlxyXG4gICAgICAgICAgQGNoYW5nZT1cIiR7KHgsIGMpID0+IHguaGFuZGxlU3ViQnJlZWRDaGFuZ2UoYy5ldmVudCl9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAke3JlcGVhdChcclxuICAgICAgICAgICAgKHgpID0+IHguc3ViQnJlZWRzLFxyXG4gICAgICAgICAgICBodG1sPHN0cmluZz5gIDxmYXN0LW9wdGlvbj4keyh4KSA9PiB4fTwvZmFzdC1vcHRpb24+IGBcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9mYXN0LWNvbWJvYm94PlxyXG4gICAgICBgXHJcbiAgICApfVxyXG4gICAgJHt3aGVuKFxyXG4gICAgICAoeCkgPT5cclxuICAgICAgICB4LnNlbGVjdGVkU3ViQnJlZWQubGVuZ3RoID4gMCB8fFxyXG4gICAgICAgICh4LnN1YkJyZWVkcy5sZW5ndGggPD0gMCAmJiB4LnNlbGVjdGVkQnJlZWQubGVuZ3RoID4gMCksXHJcbiAgICAgIGh0bWw8QnJlZWRTZWxlY3Rvcj5gXHJcbiAgICAgICAgPGZhc3QtYnV0dG9uIEBjbGljaz1cIiR7KHgsIGMpID0+IHguY2FsbEhhbmRsZUFkZEJyZWVkLmJpbmQodGhpcykoKX1cIlxyXG4gICAgICAgICAgPkFkZCBCcmVlZDwvZmFzdC1idXR0b25cclxuICAgICAgICA+XHJcbiAgICAgIGBcclxuICAgICl9XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLmJyZWVkLXNlbGVjdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAuNWVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNhcGl0YWxpemUgPSAod29yZHM6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiB3b3Jkc1xyXG4gICAgLnRvTG93ZXJDYXNlKClcclxuICAgIC5zcGxpdChcIiBcIilcclxuICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cmluZygxKSlcclxuICAgIC5qb2luKFwiIFwiKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFN1YkJyZWVkcyA9IChicmVlZHNEYXRhOiBhbnksIGN1cnJCcmVlZDogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGJyZWVkc0RhdGEubWVzc2FnZVtjdXJyQnJlZWQudG9Mb3dlckNhc2UoKV07XHJcbn07XHJcblxyXG5AY3VzdG9tRWxlbWVudCh7IG5hbWU6IFwiYnJlZWQtc2VsZWN0b3JcIiwgdGVtcGxhdGUsIHN0eWxlcyB9KVxyXG5leHBvcnQgY2xhc3MgQnJlZWRTZWxlY3RvciBleHRlbmRzIEZBU1RFbGVtZW50IHtcclxuICBAYXR0ciBoYW5kbGVBZGRCcmVlZDogYW55ID0gKCkgPT4ge307XHJcbiAgQG9ic2VydmFibGUgYnJlZWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBvYnNlcnZhYmxlIHN1YkJyZWVkczogc3RyaW5nW10gPSBbXTtcclxuICBAb2JzZXJ2YWJsZSBzZWxlY3RlZEJyZWVkOiBzdHJpbmcgPSBcIlwiO1xyXG4gIEBvYnNlcnZhYmxlIHNlbGVjdGVkU3ViQnJlZWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgQG9ic2VydmFibGUgc2VsZWN0ZWRCcmVlZFVybDogc3RyaW5nID0gXCJcIjtcclxuICBhbGxCcmVlZHNEYXRhOiBhbnkgPSB7fTtcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgIHRoaXMuZmV0Y2hBbGxCcmVlZHMoKTtcclxuICB9XHJcblxyXG4gIGNhbGxIYW5kbGVBZGRCcmVlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKGBjYWxsaW5nIGhhbmRsZUFkZEJyZWVkIHdpdGggdXJsID0gJHt0aGlzLnNlbGVjdGVkQnJlZWRVcmx9YClcclxuICAgIHRoaXMuaGFuZGxlQWRkQnJlZWQodGhpcy5zZWxlY3RlZEJyZWVkVXJsKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZEJyZWVkQ2hhbmdlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKGBoYW5kbGVBZGRCcmVlZCBjaGFuZ2VkOyBoYW5kbGVBZGRCcmVlZCA9ICR7dGhpcy5oYW5kbGVBZGRCcmVlZH1gKVxyXG4gIH1cclxuXHJcbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZywgbmV3VmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICBjb25zb2xlLmxvZyhgYXR0cmlidXRlIGNoYW5nZWQgbmFtZSA9ICR7bmFtZX1gKVxyXG4gICAgICBpZiAobmFtZSA9PT0gJ2hhbmRsZWFkZGJyZWVkJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGB1cGRhdGUgaGFuZGxlQWRkQnJlZWRgKVxyXG4gICAgICAgIHRoaXMuaGFuZGxlQWRkQnJlZWQgPSBuZXdWYWx1ZTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQnJlZWRDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQnJlZWQgPSAoZXZlbnQudGFyZ2V0ISBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWU7XHJcbiAgICB0aGlzLnNlbGVjdGVkU3ViQnJlZWQgPSBcIlwiO1xyXG4gICAgdGhpcy5zdWJCcmVlZHMgPSBnZXRTdWJCcmVlZHModGhpcy5hbGxCcmVlZHNEYXRhLCB0aGlzLnNlbGVjdGVkQnJlZWQpLm1hcChcclxuICAgICAgKGJyZWVkOiBzdHJpbmcpID0+IGNhcGl0YWxpemUoYnJlZWQpXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLnN1YkJyZWVkcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEJyZWVkLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEJyZWVkVXJsID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZldGNoQnJlZWRVcmwoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3ViQnJlZWRDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkU3ViQnJlZWQgPSAoZXZlbnQudGFyZ2V0ISBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWRTdWJCcmVlZCA9ICR7dGhpcy5zZWxlY3RlZFN1YkJyZWVkfWApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hBbGxCcmVlZHMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGxcIik7XHJcbiAgICB0aGlzLmFsbEJyZWVkc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB0aGlzLmJyZWVkcyA9IE9iamVjdC5rZXlzKHRoaXMuYWxsQnJlZWRzRGF0YS5tZXNzYWdlKS5tYXAoKGtleSkgPT5cclxuICAgICAgY2FwaXRhbGl6ZShrZXkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gYWxsIGJyZWVkID0gaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC9ob3VuZC9pbWFnZXNcclxuICAvLyBhbGwgc3ViIGJyZWVkcyA9IGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvaG91bmQvYWZnaGFuL2ltYWdlc1xyXG4gIGFzeW5jIGZldGNoQnJlZWRVcmwoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBsZXQgcmVzcG9uc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRTdWJCcmVlZC5sZW5ndGggPD0gMCkge1xyXG4gICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkLyR7dGhpcy5zZWxlY3RlZEJyZWVkLnRvTG93ZXJDYXNlKCl9L2ltYWdlc2BcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHt0aGlzLnNlbGVjdGVkQnJlZWQudG9Mb3dlckNhc2UoKX0vJHt0aGlzLnNlbGVjdGVkU3ViQnJlZWQudG9Mb3dlckNhc2UoKX0vaW1hZ2VzYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZEJyZWVkVXJsID1cclxuICAgICAganNvbi5tZXNzYWdlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGpzb24ubWVzc2FnZS5sZW5ndGgpICsgMV07XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk1NWY0ZDJkOWFmM2Y3MDhiZTQ1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9