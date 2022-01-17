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
        this.handleAddBreed = () => { console.log(`default handleAddBreed`); };
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
BreedSelector = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.customElement)({ name: "breed-selector", template, styles })
], BreedSelector);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fbb0610bfd82ba685e87")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBcEV5Qjs7Ozs7Ozs7O1VDdkUxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtZG9ncy8uL3NyYy9jb21wb25lbnRzL2JyZWVkLXNlbGVjdG9yLnRzIiwid2VicGFjazovL2Zhc3QtZG9ncy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGQVNURWxlbWVudCxcclxuICBjdXN0b21FbGVtZW50LFxyXG4gIGF0dHIsXHJcbiAgaHRtbCxcclxuICBjc3MsXHJcbiAgb2JzZXJ2YWJsZSxcclxuICByZXBlYXQsXHJcbiAgd2hlbixcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gaHRtbDxCcmVlZFNlbGVjdG9yPmBcclxuICA8ZGl2IGNsYXNzPVwiYnJlZWQtc2VsZWN0b3JcIj5cclxuICAgIDxmYXN0LWNvbWJvYm94XHJcbiAgICAgIGF1dG9jb21wbGV0ZT1cImJvdGhcIlxyXG4gICAgICA6dmFsdWU9XCIkeyh4KSA9PiB4LnNlbGVjdGVkQnJlZWR9XCJcclxuICAgICAgQGNoYW5nZT1cIiR7KHgsIGMpID0+IHguaGFuZGxlQnJlZWRDaGFuZ2UoYy5ldmVudCl9XCJcclxuICAgID5cclxuICAgICAgJHtyZXBlYXQoXHJcbiAgICAgICAgKHgpID0+IHguYnJlZWRzLFxyXG4gICAgICAgIGh0bWw8c3RyaW5nPmAgPGZhc3Qtb3B0aW9uPiR7KHgpID0+IHh9PC9mYXN0LW9wdGlvbj4gYFxyXG4gICAgICApfVxyXG4gICAgPC9mYXN0LWNvbWJvYm94PlxyXG5cclxuICAgICR7d2hlbihcclxuICAgICAgKHgpID0+IHguc3ViQnJlZWRzLmxlbmd0aCA+IDAsXHJcbiAgICAgIGh0bWw8QnJlZWRTZWxlY3Rvcj5gXHJcbiAgICAgICAgPGZhc3QtY29tYm9ib3hcclxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImJvdGhcIlxyXG4gICAgICAgICAgQGNoYW5nZT1cIiR7KHgsIGMpID0+IHguaGFuZGxlU3ViQnJlZWRDaGFuZ2UoYy5ldmVudCl9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAke3JlcGVhdChcclxuICAgICAgICAgICAgKHgpID0+IHguc3ViQnJlZWRzLFxyXG4gICAgICAgICAgICBodG1sPHN0cmluZz5gIDxmYXN0LW9wdGlvbj4keyh4KSA9PiB4fTwvZmFzdC1vcHRpb24+IGBcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9mYXN0LWNvbWJvYm94PlxyXG4gICAgICBgXHJcbiAgICApfVxyXG4gICAgJHt3aGVuKFxyXG4gICAgICAoeCkgPT5cclxuICAgICAgICB4LnNlbGVjdGVkU3ViQnJlZWQubGVuZ3RoID4gMCB8fFxyXG4gICAgICAgICh4LnN1YkJyZWVkcy5sZW5ndGggPD0gMCAmJiB4LnNlbGVjdGVkQnJlZWQubGVuZ3RoID4gMCksXHJcbiAgICAgIGh0bWw8QnJlZWRTZWxlY3Rvcj5gXHJcbiAgICAgICAgPGZhc3QtYnV0dG9uIEBjbGljaz1cIiR7KHgsIGMpID0+IHguaGFuZGxlQWRkQnJlZWQoeC5zZWxlY3RlZEJyZWVkVXJsKX1cIlxyXG4gICAgICAgICAgPkFkZCBCcmVlZDwvZmFzdC1idXR0b25cclxuICAgICAgICA+XHJcbiAgICAgIGBcclxuICAgICl9XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLmJyZWVkLXNlbGVjdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAuNWVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNhcGl0YWxpemUgPSAod29yZHM6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiB3b3Jkc1xyXG4gICAgLnRvTG93ZXJDYXNlKClcclxuICAgIC5zcGxpdChcIiBcIilcclxuICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cmluZygxKSlcclxuICAgIC5qb2luKFwiIFwiKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFN1YkJyZWVkcyA9IChicmVlZHNEYXRhOiBhbnksIGN1cnJCcmVlZDogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGJyZWVkc0RhdGEubWVzc2FnZVtjdXJyQnJlZWQudG9Mb3dlckNhc2UoKV07XHJcbn07XHJcblxyXG5AY3VzdG9tRWxlbWVudCh7IG5hbWU6IFwiYnJlZWQtc2VsZWN0b3JcIiwgdGVtcGxhdGUsIHN0eWxlcyB9KVxyXG5leHBvcnQgY2xhc3MgQnJlZWRTZWxlY3RvciBleHRlbmRzIEZBU1RFbGVtZW50IHtcclxuICBAYXR0ciBoYW5kbGVBZGRCcmVlZDogYW55ID0gKCkgPT4geyBjb25zb2xlLmxvZyhgZGVmYXVsdCBoYW5kbGVBZGRCcmVlZGApfTtcclxuICBAb2JzZXJ2YWJsZSBicmVlZHM6IHN0cmluZ1tdID0gW107XHJcbiAgQG9ic2VydmFibGUgc3ViQnJlZWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBvYnNlcnZhYmxlIHNlbGVjdGVkQnJlZWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgQG9ic2VydmFibGUgc2VsZWN0ZWRTdWJCcmVlZDogc3RyaW5nID0gXCJcIjtcclxuICBAb2JzZXJ2YWJsZSBzZWxlY3RlZEJyZWVkVXJsOiBzdHJpbmcgPSBcIlwiO1xyXG4gIGFsbEJyZWVkc0RhdGE6IGFueSA9IHt9O1xyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcblxyXG4gICAgdGhpcy5mZXRjaEFsbEJyZWVkcygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkQnJlZWRDaGFuZ2VkKCkge1xyXG4gICAgY29uc29sZS5sb2coYGhhbmRsZUFkZEJyZWVkIGNoYW5nZWQ7IGhhbmRsZUFkZEJyZWVkID0gJHt0aGlzLmhhbmRsZUFkZEJyZWVkfWApXHJcbiAgfVxyXG5cclxuICBoYW5kbGVCcmVlZENoYW5nZShldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRCcmVlZCA9IChldmVudC50YXJnZXQhIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRTdWJCcmVlZCA9IFwiXCI7XHJcbiAgICB0aGlzLnN1YkJyZWVkcyA9IGdldFN1YkJyZWVkcyh0aGlzLmFsbEJyZWVkc0RhdGEsIHRoaXMuc2VsZWN0ZWRCcmVlZCkubWFwKFxyXG4gICAgICAoYnJlZWQ6IHN0cmluZykgPT4gY2FwaXRhbGl6ZShicmVlZClcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3ViQnJlZWRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkQnJlZWQubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQnJlZWRVcmwgPSBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZmV0Y2hCcmVlZFVybCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJCcmVlZENoYW5nZShldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRTdWJCcmVlZCA9IChldmVudC50YXJnZXQhIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZFN1YkJyZWVkID0gJHt0aGlzLnNlbGVjdGVkU3ViQnJlZWR9YCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaEFsbEJyZWVkcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9saXN0L2FsbFwiKTtcclxuICAgIHRoaXMuYWxsQnJlZWRzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHRoaXMuYnJlZWRzID0gT2JqZWN0LmtleXModGhpcy5hbGxCcmVlZHNEYXRhLm1lc3NhZ2UpLm1hcCgoa2V5KSA9PlxyXG4gICAgICBjYXBpdGFsaXplKGtleSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBhbGwgYnJlZWQgPSBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkL2hvdW5kL2ltYWdlc1xyXG4gIC8vIGFsbCBzdWIgYnJlZWRzID0gaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC9ob3VuZC9hZmdoYW4vaW1hZ2VzXHJcbiAgYXN5bmMgZmV0Y2hCcmVlZFVybCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGxldCByZXNwb25zZTtcclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFN1YkJyZWVkLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHt0aGlzLnNlbGVjdGVkQnJlZWQudG9Mb3dlckNhc2UoKX0vaW1hZ2VzYFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC8ke3RoaXMuc2VsZWN0ZWRCcmVlZC50b0xvd2VyQ2FzZSgpfS8ke3RoaXMuc2VsZWN0ZWRTdWJCcmVlZC50b0xvd2VyQ2FzZSgpfS9pbWFnZXNgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkQnJlZWRVcmwgPVxyXG4gICAgICBqc29uLm1lc3NhZ2VbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoganNvbi5tZXNzYWdlLmxlbmd0aCkgKyAxXTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmJiMDYxMGJmZDgyYmE2ODVlODdcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=