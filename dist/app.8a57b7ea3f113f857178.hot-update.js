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
        <fast-button @click="${(x, c) => x.handleAddBreed(x.selectedBreedUrl)}"
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
    handleAddBreedChanged() {
        console.log(`handleAddBreed changed; handleAddBreed = ${this.handleAddBreed}`);
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
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], BreedSelector.prototype, "callHandleAddBreed", void 0);
BreedSelector = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.customElement)({ name: "breed-selector", template, styles })
], BreedSelector);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("507009386b376e0f9728")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZG9ncy8uL3NyYy9jb21wb25lbnRzL2JyZWVkLXNlbGVjdG9yLnRzIiwid2VicGFjazovL2Zhc3QtZG9ncy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGQVNURWxlbWVudCxcclxuICBjdXN0b21FbGVtZW50LFxyXG4gIGF0dHIsXHJcbiAgaHRtbCxcclxuICBjc3MsXHJcbiAgb2JzZXJ2YWJsZSxcclxuICByZXBlYXQsXHJcbiAgd2hlbixcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gaHRtbDxCcmVlZFNlbGVjdG9yPmBcclxuICA8ZGl2IGNsYXNzPVwiYnJlZWQtc2VsZWN0b3JcIj5cclxuICAgIDxmYXN0LWNvbWJvYm94XHJcbiAgICAgIGF1dG9jb21wbGV0ZT1cImJvdGhcIlxyXG4gICAgICA6dmFsdWU9XCIkeyh4KSA9PiB4LnNlbGVjdGVkQnJlZWR9XCJcclxuICAgICAgQGNoYW5nZT1cIiR7KHgsIGMpID0+IHguaGFuZGxlQnJlZWRDaGFuZ2UoYy5ldmVudCl9XCJcclxuICAgID5cclxuICAgICAgJHtyZXBlYXQoXHJcbiAgICAgICAgKHgpID0+IHguYnJlZWRzLFxyXG4gICAgICAgIGh0bWw8c3RyaW5nPmAgPGZhc3Qtb3B0aW9uPiR7KHgpID0+IHh9PC9mYXN0LW9wdGlvbj4gYFxyXG4gICAgICApfVxyXG4gICAgPC9mYXN0LWNvbWJvYm94PlxyXG5cclxuICAgICR7d2hlbihcclxuICAgICAgKHgpID0+IHguc3ViQnJlZWRzLmxlbmd0aCA+IDAsXHJcbiAgICAgIGh0bWw8QnJlZWRTZWxlY3Rvcj5gXHJcbiAgICAgICAgPGZhc3QtY29tYm9ib3hcclxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImJvdGhcIlxyXG4gICAgICAgICAgQGNoYW5nZT1cIiR7KHgsIGMpID0+IHguaGFuZGxlU3ViQnJlZWRDaGFuZ2UoYy5ldmVudCl9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAke3JlcGVhdChcclxuICAgICAgICAgICAgKHgpID0+IHguc3ViQnJlZWRzLFxyXG4gICAgICAgICAgICBodG1sPHN0cmluZz5gIDxmYXN0LW9wdGlvbj4keyh4KSA9PiB4fTwvZmFzdC1vcHRpb24+IGBcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9mYXN0LWNvbWJvYm94PlxyXG4gICAgICBgXHJcbiAgICApfVxyXG4gICAgJHt3aGVuKFxyXG4gICAgICAoeCkgPT5cclxuICAgICAgICB4LnNlbGVjdGVkU3ViQnJlZWQubGVuZ3RoID4gMCB8fFxyXG4gICAgICAgICh4LnN1YkJyZWVkcy5sZW5ndGggPD0gMCAmJiB4LnNlbGVjdGVkQnJlZWQubGVuZ3RoID4gMCksXHJcbiAgICAgIGh0bWw8QnJlZWRTZWxlY3Rvcj5gXHJcbiAgICAgICAgPGZhc3QtYnV0dG9uIEBjbGljaz1cIiR7KHgsIGMpID0+IHguaGFuZGxlQWRkQnJlZWQoeC5zZWxlY3RlZEJyZWVkVXJsKX1cIlxyXG4gICAgICAgICAgPkFkZCBCcmVlZDwvZmFzdC1idXR0b25cclxuICAgICAgICA+XHJcbiAgICAgIGBcclxuICAgICl9XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLmJyZWVkLXNlbGVjdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAuNWVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNhcGl0YWxpemUgPSAod29yZHM6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiB3b3Jkc1xyXG4gICAgLnRvTG93ZXJDYXNlKClcclxuICAgIC5zcGxpdChcIiBcIilcclxuICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cmluZygxKSlcclxuICAgIC5qb2luKFwiIFwiKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFN1YkJyZWVkcyA9IChicmVlZHNEYXRhOiBhbnksIGN1cnJCcmVlZDogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGJyZWVkc0RhdGEubWVzc2FnZVtjdXJyQnJlZWQudG9Mb3dlckNhc2UoKV07XHJcbn07XHJcblxyXG5AY3VzdG9tRWxlbWVudCh7IG5hbWU6IFwiYnJlZWQtc2VsZWN0b3JcIiwgdGVtcGxhdGUsIHN0eWxlcyB9KVxyXG5leHBvcnQgY2xhc3MgQnJlZWRTZWxlY3RvciBleHRlbmRzIEZBU1RFbGVtZW50IHtcclxuICBAYXR0ciBoYW5kbGVBZGRCcmVlZDogYW55O1xyXG4gIEBvYnNlcnZhYmxlIGJyZWVkczogc3RyaW5nW10gPSBbXTtcclxuICBAb2JzZXJ2YWJsZSBzdWJCcmVlZHM6IHN0cmluZ1tdID0gW107XHJcbiAgQG9ic2VydmFibGUgc2VsZWN0ZWRCcmVlZDogc3RyaW5nID0gXCJcIjtcclxuICBAb2JzZXJ2YWJsZSBzZWxlY3RlZFN1YkJyZWVkOiBzdHJpbmcgPSBcIlwiO1xyXG4gIEBvYnNlcnZhYmxlIHNlbGVjdGVkQnJlZWRVcmw6IHN0cmluZyA9IFwiXCI7XHJcbiAgQG9ic2VydmFibGUgY2FsbEhhbmRsZUFkZEJyZWVkOiBhbnk7XHJcbiAgYWxsQnJlZWRzRGF0YTogYW55ID0ge307XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuXHJcbiAgICB0aGlzLmZldGNoQWxsQnJlZWRzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRCcmVlZENoYW5nZWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgaGFuZGxlQWRkQnJlZWQgY2hhbmdlZDsgaGFuZGxlQWRkQnJlZWQgPSAke3RoaXMuaGFuZGxlQWRkQnJlZWR9YClcclxuICB9XHJcblxyXG4gIGhhbmRsZUJyZWVkQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEJyZWVkID0gKGV2ZW50LnRhcmdldCEgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgdGhpcy5zZWxlY3RlZFN1YkJyZWVkID0gXCJcIjtcclxuICAgIHRoaXMuc3ViQnJlZWRzID0gZ2V0U3ViQnJlZWRzKHRoaXMuYWxsQnJlZWRzRGF0YSwgdGhpcy5zZWxlY3RlZEJyZWVkKS5tYXAoXHJcbiAgICAgIChicmVlZDogc3RyaW5nKSA9PiBjYXBpdGFsaXplKGJyZWVkKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5zdWJCcmVlZHMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRCcmVlZC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCcmVlZFVybCA9IFwiXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaEJyZWVkVXJsKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVN1YkJyZWVkQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFN1YkJyZWVkID0gKGV2ZW50LnRhcmdldCEgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coYHNlbGVjdGVkU3ViQnJlZWQgPSAke3RoaXMuc2VsZWN0ZWRTdWJCcmVlZH1gKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoQWxsQnJlZWRzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsXCIpO1xyXG4gICAgdGhpcy5hbGxCcmVlZHNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgdGhpcy5icmVlZHMgPSBPYmplY3Qua2V5cyh0aGlzLmFsbEJyZWVkc0RhdGEubWVzc2FnZSkubWFwKChrZXkpID0+XHJcbiAgICAgIGNhcGl0YWxpemUoa2V5KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIGFsbCBicmVlZCA9IGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvaG91bmQvaW1hZ2VzXHJcbiAgLy8gYWxsIHN1YiBicmVlZHMgPSBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkL2hvdW5kL2FmZ2hhbi9pbWFnZXNcclxuICBhc3luYyBmZXRjaEJyZWVkVXJsKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgbGV0IHJlc3BvbnNlO1xyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkU3ViQnJlZWQubGVuZ3RoIDw9IDApIHtcclxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC8ke3RoaXMuc2VsZWN0ZWRCcmVlZC50b0xvd2VyQ2FzZSgpfS9pbWFnZXNgXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkLyR7dGhpcy5zZWxlY3RlZEJyZWVkLnRvTG93ZXJDYXNlKCl9LyR7dGhpcy5zZWxlY3RlZFN1YkJyZWVkLnRvTG93ZXJDYXNlKCl9L2ltYWdlc2BcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRCcmVlZFVybCA9XHJcbiAgICAgIGpzb24ubWVzc2FnZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBqc29uLm1lc3NhZ2UubGVuZ3RoKSArIDFdO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MDcwMDkzODZiMzc2ZTBmOTcyOFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==