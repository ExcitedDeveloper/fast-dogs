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
/******/ 	__webpack_require__.h = () => ("1881b5fe73a117e97a5c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9zcmMvY29tcG9uZW50cy9icmVlZC1zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3Mvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRkFTVEVsZW1lbnQsXHJcbiAgY3VzdG9tRWxlbWVudCxcclxuICBhdHRyLFxyXG4gIGh0bWwsXHJcbiAgY3NzLFxyXG4gIG9ic2VydmFibGUsXHJcbiAgcmVwZWF0LFxyXG4gIHdoZW4sXHJcbn0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC1lbGVtZW50XCI7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8QnJlZWRTZWxlY3Rvcj5gXHJcbiAgPGRpdiBjbGFzcz1cImJyZWVkLXNlbGVjdG9yXCI+XHJcbiAgICA8ZmFzdC1jb21ib2JveFxyXG4gICAgICBhdXRvY29tcGxldGU9XCJib3RoXCJcclxuICAgICAgOnZhbHVlPVwiJHsoeCkgPT4geC5zZWxlY3RlZEJyZWVkfVwiXHJcbiAgICAgIEBjaGFuZ2U9XCIkeyh4LCBjKSA9PiB4LmhhbmRsZUJyZWVkQ2hhbmdlKGMuZXZlbnQpfVwiXHJcbiAgICA+XHJcbiAgICAgICR7cmVwZWF0KFxyXG4gICAgICAgICh4KSA9PiB4LmJyZWVkcyxcclxuICAgICAgICBodG1sPHN0cmluZz5gIDxmYXN0LW9wdGlvbj4keyh4KSA9PiB4fTwvZmFzdC1vcHRpb24+IGBcclxuICAgICAgKX1cclxuICAgIDwvZmFzdC1jb21ib2JveD5cclxuXHJcbiAgICAke3doZW4oXHJcbiAgICAgICh4KSA9PiB4LnN1YkJyZWVkcy5sZW5ndGggPiAwLFxyXG4gICAgICBodG1sPEJyZWVkU2VsZWN0b3I+YFxyXG4gICAgICAgIDxmYXN0LWNvbWJvYm94XHJcbiAgICAgICAgICBhdXRvY29tcGxldGU9XCJib3RoXCJcclxuICAgICAgICAgIEBjaGFuZ2U9XCIkeyh4LCBjKSA9PiB4LmhhbmRsZVN1YkJyZWVkQ2hhbmdlKGMuZXZlbnQpfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgJHtyZXBlYXQoXHJcbiAgICAgICAgICAgICh4KSA9PiB4LnN1YkJyZWVkcyxcclxuICAgICAgICAgICAgaHRtbDxzdHJpbmc+YCA8ZmFzdC1vcHRpb24+JHsoeCkgPT4geH08L2Zhc3Qtb3B0aW9uPiBgXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZmFzdC1jb21ib2JveD5cclxuICAgICAgYFxyXG4gICAgKX1cclxuICAgICR7d2hlbihcclxuICAgICAgKHgpID0+XHJcbiAgICAgICAgeC5zZWxlY3RlZFN1YkJyZWVkLmxlbmd0aCA+IDAgfHxcclxuICAgICAgICAoeC5zdWJCcmVlZHMubGVuZ3RoIDw9IDAgJiYgeC5zZWxlY3RlZEJyZWVkLmxlbmd0aCA+IDApLFxyXG4gICAgICBodG1sPEJyZWVkU2VsZWN0b3I+YFxyXG4gICAgICAgIDxmYXN0LWJ1dHRvbiBAY2xpY2s9XCIkeyh4LCBjKSA9PiB4LmhhbmRsZUFkZEJyZWVkKHguc2VsZWN0ZWRCcmVlZFVybCl9XCJcclxuICAgICAgICAgID5BZGQgQnJlZWQ8L2Zhc3QtYnV0dG9uXHJcbiAgICAgICAgPlxyXG4gICAgICBgXHJcbiAgICApfVxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gY3NzYFxyXG4gIC5icmVlZC1zZWxlY3RvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjVlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjYXBpdGFsaXplID0gKHdvcmRzOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gd29yZHNcclxuICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAuc3BsaXQoXCIgXCIpXHJcbiAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHJpbmcoMSkpXHJcbiAgICAuam9pbihcIiBcIik7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTdWJCcmVlZHMgPSAoYnJlZWRzRGF0YTogYW55LCBjdXJyQnJlZWQ6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBicmVlZHNEYXRhLm1lc3NhZ2VbY3VyckJyZWVkLnRvTG93ZXJDYXNlKCldO1xyXG59O1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoeyBuYW1lOiBcImJyZWVkLXNlbGVjdG9yXCIsIHRlbXBsYXRlLCBzdHlsZXMgfSlcclxuZXhwb3J0IGNsYXNzIEJyZWVkU2VsZWN0b3IgZXh0ZW5kcyBGQVNURWxlbWVudCB7XHJcbiAgQGF0dHIgaGFuZGxlQWRkQnJlZWQ6IGFueSA9ICgpID0+IHt9O1xyXG4gIEBvYnNlcnZhYmxlIGJyZWVkczogc3RyaW5nW10gPSBbXTtcclxuICBAb2JzZXJ2YWJsZSBzdWJCcmVlZHM6IHN0cmluZ1tdID0gW107XHJcbiAgQG9ic2VydmFibGUgc2VsZWN0ZWRCcmVlZDogc3RyaW5nID0gXCJcIjtcclxuICBAb2JzZXJ2YWJsZSBzZWxlY3RlZFN1YkJyZWVkOiBzdHJpbmcgPSBcIlwiO1xyXG4gIEBvYnNlcnZhYmxlIHNlbGVjdGVkQnJlZWRVcmw6IHN0cmluZyA9IFwiXCI7XHJcbiAgYWxsQnJlZWRzRGF0YTogYW55ID0ge307XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuXHJcbiAgICB0aGlzLmZldGNoQWxsQnJlZWRzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRCcmVlZENoYW5nZWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgaGFuZGxlQWRkQnJlZWQgY2hhbmdlZDsgaGFuZGxlQWRkQnJlZWQgPSAke3RoaXMuaGFuZGxlQWRkQnJlZWR9YClcclxuICB9XHJcblxyXG4gIGhhbmRsZUJyZWVkQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEJyZWVkID0gKGV2ZW50LnRhcmdldCEgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgdGhpcy5zZWxlY3RlZFN1YkJyZWVkID0gXCJcIjtcclxuICAgIHRoaXMuc3ViQnJlZWRzID0gZ2V0U3ViQnJlZWRzKHRoaXMuYWxsQnJlZWRzRGF0YSwgdGhpcy5zZWxlY3RlZEJyZWVkKS5tYXAoXHJcbiAgICAgIChicmVlZDogc3RyaW5nKSA9PiBjYXBpdGFsaXplKGJyZWVkKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5zdWJCcmVlZHMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRCcmVlZC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCcmVlZFVybCA9IFwiXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaEJyZWVkVXJsKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVN1YkJyZWVkQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFN1YkJyZWVkID0gKGV2ZW50LnRhcmdldCEgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coYHNlbGVjdGVkU3ViQnJlZWQgPSAke3RoaXMuc2VsZWN0ZWRTdWJCcmVlZH1gKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoQWxsQnJlZWRzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsXCIpO1xyXG4gICAgdGhpcy5hbGxCcmVlZHNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgdGhpcy5icmVlZHMgPSBPYmplY3Qua2V5cyh0aGlzLmFsbEJyZWVkc0RhdGEubWVzc2FnZSkubWFwKChrZXkpID0+XHJcbiAgICAgIGNhcGl0YWxpemUoa2V5KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIGFsbCBicmVlZCA9IGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvaG91bmQvaW1hZ2VzXHJcbiAgLy8gYWxsIHN1YiBicmVlZHMgPSBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkL2hvdW5kL2FmZ2hhbi9pbWFnZXNcclxuICBhc3luYyBmZXRjaEJyZWVkVXJsKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgbGV0IHJlc3BvbnNlO1xyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkU3ViQnJlZWQubGVuZ3RoIDw9IDApIHtcclxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC8ke3RoaXMuc2VsZWN0ZWRCcmVlZC50b0xvd2VyQ2FzZSgpfS9pbWFnZXNgXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkLyR7dGhpcy5zZWxlY3RlZEJyZWVkLnRvTG93ZXJDYXNlKCl9LyR7dGhpcy5zZWxlY3RlZFN1YkJyZWVkLnRvTG93ZXJDYXNlKCl9L2ltYWdlc2BcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRCcmVlZFVybCA9XHJcbiAgICAgIGpzb24ubWVzc2FnZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBqc29uLm1lc3NhZ2UubGVuZ3RoKSArIDFdO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxODgxYjVmZTczYTExN2U5N2E1Y1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==