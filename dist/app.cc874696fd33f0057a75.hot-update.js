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
    <fast-button id="addBreed" class="add-breed">Add Breed</fast-button>
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
        this.addBreedBtn = this.shadowRoot.querySelector(".add-breed");
        if (this.addBreedBtn)
            console.log(`found add breed button`);
    }
    callAddBreed() {
        console.log(`callAddBreed url = ${this.selectedBreedUrl}`);
        this.handleAddBreed(this.selectedBreedUrl);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "handleaddbreed") {
            if (!this.addBreedBtn)
                return;
            console.log(`addEventListener`);
            this.addBreedBtn.addEventListener("click", this.callAddBreed.bind(this));
        }
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
/******/ 	__webpack_require__.h = () => ("c776fb78a0e1785605ae")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNjODc0Njk2ZmQzM2YwMDU3YTc1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNpQztBQUVqQyxNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFlOzs7O2dCQUlwQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWE7aUJBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7O1FBRS9DLCtEQUFNLENBQ04sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQ2YseURBQUksQ0FBUSxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQ3ZEOzs7TUFHRCw2REFBSSxDQUNKLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQzdCLHlEQUFJLENBQWU7OztxQkFHSixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOztZQUVsRCwrREFBTSxDQUNOLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUNsQix5REFBSSxDQUFRLGlCQUFpQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FDdkQ7O09BRUosQ0FDRjs7O0NBR0osQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLHdEQUFHOzs7OztDQUtqQixDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUNuQyxPQUFPLEtBQUs7U0FDVCxXQUFXLEVBQUU7U0FDYixLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJ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QUFVOzZDQUF1QjtBQUN0QjtJQUFYLCtEQUFVO2dEQUEwQjtBQUN6QjtJQUFYLCtEQUFVO29EQUE0QjtBQUMzQjtJQUFYLCtEQUFVO3VEQUErQjtBQUM5QjtJQUFYLCtEQUFVO3VEQUErQjtBQUM5QjtJQUFYLCtEQUFVO3lEQUF5QjtBQVB6QixhQUFhO0lBRHpCLHNFQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQy9DLGFBQWEsQ0E4RnpCO0FBOUZ5Qjs7Ozs7Ozs7O1VDOUQxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtZG9ncy8uL3NyYy9jb21wb25lbnRzL2JyZWVkLXNlbGVjdG9yLnRzIiwid2VicGFjazovL2Zhc3QtZG9ncy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGQVNURWxlbWVudCxcclxuICBjdXN0b21FbGVtZW50LFxyXG4gIGF0dHIsXHJcbiAgaHRtbCxcclxuICBjc3MsXHJcbiAgb2JzZXJ2YWJsZSxcclxuICByZXBlYXQsXHJcbiAgd2hlbixcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gaHRtbDxCcmVlZFNlbGVjdG9yPmBcclxuICA8ZGl2IGNsYXNzPVwiYnJlZWQtc2VsZWN0b3JcIj5cclxuICAgIDxmYXN0LWNvbWJvYm94XHJcbiAgICAgIGF1dG9jb21wbGV0ZT1cImJvdGhcIlxyXG4gICAgICA6dmFsdWU9XCIkeyh4KSA9PiB4LnNlbGVjdGVkQnJlZWR9XCJcclxuICAgICAgQGNoYW5nZT1cIiR7KHgsIGMpID0+IHguaGFuZGxlQnJlZWRDaGFuZ2UoYy5ldmVudCl9XCJcclxuICAgID5cclxuICAgICAgJHtyZXBlYXQoXHJcbiAgICAgICAgKHgpID0+IHguYnJlZWRzLFxyXG4gICAgICAgIGh0bWw8c3RyaW5nPmAgPGZhc3Qtb3B0aW9uPiR7KHgpID0+IHh9PC9mYXN0LW9wdGlvbj4gYFxyXG4gICAgICApfVxyXG4gICAgPC9mYXN0LWNvbWJvYm94PlxyXG5cclxuICAgICR7d2hlbihcclxuICAgICAgKHgpID0+IHguc3ViQnJlZWRzLmxlbmd0aCA+IDAsXHJcbiAgICAgIGh0bWw8QnJlZWRTZWxlY3Rvcj5gXHJcbiAgICAgICAgPGZhc3QtY29tYm9ib3hcclxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImJvdGhcIlxyXG4gICAgICAgICAgQGNoYW5nZT1cIiR7KHgsIGMpID0+IHguaGFuZGxlU3ViQnJlZWRDaGFuZ2UoYy5ldmVudCl9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAke3JlcGVhdChcclxuICAgICAgICAgICAgKHgpID0+IHguc3ViQnJlZWRzLFxyXG4gICAgICAgICAgICBodG1sPHN0cmluZz5gIDxmYXN0LW9wdGlvbj4keyh4KSA9PiB4fTwvZmFzdC1vcHRpb24+IGBcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9mYXN0LWNvbWJvYm94PlxyXG4gICAgICBgXHJcbiAgICApfVxyXG4gICAgPGZhc3QtYnV0dG9uIGlkPVwiYWRkQnJlZWRcIiBjbGFzcz1cImFkZC1icmVlZFwiPkFkZCBCcmVlZDwvZmFzdC1idXR0b24+XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLmJyZWVkLXNlbGVjdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAuNWVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNhcGl0YWxpemUgPSAod29yZHM6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiB3b3Jkc1xyXG4gICAgLnRvTG93ZXJDYXNlKClcclxuICAgIC5zcGxpdChcIiBcIilcclxuICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cmluZygxKSlcclxuICAgIC5qb2luKFwiIFwiKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFN1YkJyZWVkcyA9IChicmVlZHNEYXRhOiBhbnksIGN1cnJCcmVlZDogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGJyZWVkc0RhdGEubWVzc2FnZVtjdXJyQnJlZWQudG9Mb3dlckNhc2UoKV07XHJcbn07XHJcblxyXG5AY3VzdG9tRWxlbWVudCh7IG5hbWU6IFwiYnJlZWQtc2VsZWN0b3JcIiwgdGVtcGxhdGUsIHN0eWxlcyB9KVxyXG5leHBvcnQgY2xhc3MgQnJlZWRTZWxlY3RvciBleHRlbmRzIEZBU1RFbGVtZW50IHtcclxuICBAYXR0ciBoYW5kbGVBZGRCcmVlZDogYW55O1xyXG4gIEBvYnNlcnZhYmxlIGJyZWVkczogc3RyaW5nW10gPSBbXTtcclxuICBAb2JzZXJ2YWJsZSBzdWJCcmVlZHM6IHN0cmluZ1tdID0gW107XHJcbiAgQG9ic2VydmFibGUgc2VsZWN0ZWRCcmVlZDogc3RyaW5nID0gXCJcIjtcclxuICBAb2JzZXJ2YWJsZSBzZWxlY3RlZFN1YkJyZWVkOiBzdHJpbmcgPSBcIlwiO1xyXG4gIEBvYnNlcnZhYmxlIHNlbGVjdGVkQnJlZWRVcmw6IHN0cmluZyA9IFwiXCI7XHJcbiAgQG9ic2VydmFibGUgY2FsbEhhbmRsZUFkZEJyZWVkOiBhbnk7XHJcbiAgYWxsQnJlZWRzRGF0YTogYW55ID0ge307XHJcbiAgYWRkQnJlZWRCdG46IGFueTtcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgIHRoaXMuZmV0Y2hBbGxCcmVlZHMoKTtcclxuXHJcbiAgICB0aGlzLmFkZEJyZWVkQnRuID0gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiLmFkZC1icmVlZFwiKTtcclxuXHJcbiAgICBpZiAodGhpcy5hZGRCcmVlZEJ0bikgY29uc29sZS5sb2coYGZvdW5kIGFkZCBicmVlZCBidXR0b25gKTtcclxuICB9XHJcblxyXG4gIGNhbGxBZGRCcmVlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKGBjYWxsQWRkQnJlZWQgdXJsID0gJHt0aGlzLnNlbGVjdGVkQnJlZWRVcmx9YCk7XHJcbiAgICB0aGlzLmhhbmRsZUFkZEJyZWVkKHRoaXMuc2VsZWN0ZWRCcmVlZFVybCk7XHJcbiAgfVxyXG5cclxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBvbGRWYWx1ZTogc3RyaW5nLFxyXG4gICAgbmV3VmFsdWU6IHN0cmluZ1xyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKG5hbWUgPT09IFwiaGFuZGxlYWRkYnJlZWRcIikge1xyXG4gICAgICBpZiAoIXRoaXMuYWRkQnJlZWRCdG4pIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGBhZGRFdmVudExpc3RlbmVyYCk7XHJcbiAgICAgIHRoaXMuYWRkQnJlZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2FsbEFkZEJyZWVkLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkQnJlZWRDaGFuZ2VkKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGBoYW5kbGVBZGRCcmVlZCBjaGFuZ2VkOyBoYW5kbGVBZGRCcmVlZCA9ICR7dGhpcy5oYW5kbGVBZGRCcmVlZH1gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQnJlZWRDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQnJlZWQgPSAoZXZlbnQudGFyZ2V0ISBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWU7XHJcbiAgICB0aGlzLnNlbGVjdGVkU3ViQnJlZWQgPSBcIlwiO1xyXG4gICAgdGhpcy5zdWJCcmVlZHMgPSBnZXRTdWJCcmVlZHModGhpcy5hbGxCcmVlZHNEYXRhLCB0aGlzLnNlbGVjdGVkQnJlZWQpLm1hcChcclxuICAgICAgKGJyZWVkOiBzdHJpbmcpID0+IGNhcGl0YWxpemUoYnJlZWQpXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLnN1YkJyZWVkcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEJyZWVkLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEJyZWVkVXJsID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZldGNoQnJlZWRVcmwoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3ViQnJlZWRDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkU3ViQnJlZWQgPSAoZXZlbnQudGFyZ2V0ISBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWRTdWJCcmVlZCA9ICR7dGhpcy5zZWxlY3RlZFN1YkJyZWVkfWApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hBbGxCcmVlZHMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGxcIik7XHJcbiAgICB0aGlzLmFsbEJyZWVkc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB0aGlzLmJyZWVkcyA9IE9iamVjdC5rZXlzKHRoaXMuYWxsQnJlZWRzRGF0YS5tZXNzYWdlKS5tYXAoKGtleSkgPT5cclxuICAgICAgY2FwaXRhbGl6ZShrZXkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gYWxsIGJyZWVkID0gaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC9ob3VuZC9pbWFnZXNcclxuICAvLyBhbGwgc3ViIGJyZWVkcyA9IGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvaG91bmQvYWZnaGFuL2ltYWdlc1xyXG4gIGFzeW5jIGZldGNoQnJlZWRVcmwoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBsZXQgcmVzcG9uc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRTdWJCcmVlZC5sZW5ndGggPD0gMCkge1xyXG4gICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkLyR7dGhpcy5zZWxlY3RlZEJyZWVkLnRvTG93ZXJDYXNlKCl9L2ltYWdlc2BcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHt0aGlzLnNlbGVjdGVkQnJlZWQudG9Mb3dlckNhc2UoKX0vJHt0aGlzLnNlbGVjdGVkU3ViQnJlZWQudG9Mb3dlckNhc2UoKX0vaW1hZ2VzYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZEJyZWVkVXJsID1cclxuICAgICAganNvbi5tZXNzYWdlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGpzb24ubWVzc2FnZS5sZW5ndGgpICsgMV07XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM3NzZmYjc4YTBlMTc4NTYwNWFlXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9