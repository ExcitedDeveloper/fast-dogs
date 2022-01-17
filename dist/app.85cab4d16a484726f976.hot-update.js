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
    (x.subBreeds.length <= 0 && x.selectedBreed.length > 0), _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <fast-button id="addBreed">Add Breed</fast-button> `)}
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
            console.log(`handleAddBreed changed`);
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
/******/ 	__webpack_require__.h = () => ("bd8421ac85014815182a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFbkMsSUFBSSxDQUFDLGdCQUFnQjtnQkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7S0FBQTtDQUNGO0FBOUZPO0lBQUwseURBQUk7cURBQXFCO0FBQ2Q7SUFBWCwrREFBVTs2Q0FBdUI7QUFDdEI7SUFBWCwrREFBVTtnREFBMEI7QUFDekI7SUFBWCwrREFBVTtvREFBNEI7QUFDM0I7SUFBWCwrREFBVTt1REFBK0I7QUFDOUI7SUFBWCwrREFBVTt1REFBK0I7QUFDOUI7SUFBWCwrREFBVTt5REFBeUI7QUFQekIsYUFBYTtJQUR6QixzRUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUMvQyxhQUFhLENBK0Z6QjtBQS9GeUI7Ozs7Ozs7OztVQ25FMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9zcmMvY29tcG9uZW50cy9icmVlZC1zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3Mvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRkFTVEVsZW1lbnQsXHJcbiAgY3VzdG9tRWxlbWVudCxcclxuICBhdHRyLFxyXG4gIGh0bWwsXHJcbiAgY3NzLFxyXG4gIG9ic2VydmFibGUsXHJcbiAgcmVwZWF0LFxyXG4gIHdoZW4sXHJcbn0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC1lbGVtZW50XCI7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8QnJlZWRTZWxlY3Rvcj5gXHJcbiAgPGRpdiBjbGFzcz1cImJyZWVkLXNlbGVjdG9yXCI+XHJcbiAgICA8ZmFzdC1jb21ib2JveFxyXG4gICAgICBhdXRvY29tcGxldGU9XCJib3RoXCJcclxuICAgICAgOnZhbHVlPVwiJHsoeCkgPT4geC5zZWxlY3RlZEJyZWVkfVwiXHJcbiAgICAgIEBjaGFuZ2U9XCIkeyh4LCBjKSA9PiB4LmhhbmRsZUJyZWVkQ2hhbmdlKGMuZXZlbnQpfVwiXHJcbiAgICA+XHJcbiAgICAgICR7cmVwZWF0KFxyXG4gICAgICAgICh4KSA9PiB4LmJyZWVkcyxcclxuICAgICAgICBodG1sPHN0cmluZz5gIDxmYXN0LW9wdGlvbj4keyh4KSA9PiB4fTwvZmFzdC1vcHRpb24+IGBcclxuICAgICAgKX1cclxuICAgIDwvZmFzdC1jb21ib2JveD5cclxuXHJcbiAgICAke3doZW4oXHJcbiAgICAgICh4KSA9PiB4LnN1YkJyZWVkcy5sZW5ndGggPiAwLFxyXG4gICAgICBodG1sPEJyZWVkU2VsZWN0b3I+YFxyXG4gICAgICAgIDxmYXN0LWNvbWJvYm94XHJcbiAgICAgICAgICBhdXRvY29tcGxldGU9XCJib3RoXCJcclxuICAgICAgICAgIEBjaGFuZ2U9XCIkeyh4LCBjKSA9PiB4LmhhbmRsZVN1YkJyZWVkQ2hhbmdlKGMuZXZlbnQpfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgJHtyZXBlYXQoXHJcbiAgICAgICAgICAgICh4KSA9PiB4LnN1YkJyZWVkcyxcclxuICAgICAgICAgICAgaHRtbDxzdHJpbmc+YCA8ZmFzdC1vcHRpb24+JHsoeCkgPT4geH08L2Zhc3Qtb3B0aW9uPiBgXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZmFzdC1jb21ib2JveD5cclxuICAgICAgYFxyXG4gICAgKX1cclxuICAgICR7d2hlbihcclxuICAgICAgKHgpID0+XHJcbiAgICAgICAgeC5zZWxlY3RlZFN1YkJyZWVkLmxlbmd0aCA+IDAgfHxcclxuICAgICAgICAoeC5zdWJCcmVlZHMubGVuZ3RoIDw9IDAgJiYgeC5zZWxlY3RlZEJyZWVkLmxlbmd0aCA+IDApLFxyXG4gICAgICBodG1sPEJyZWVkU2VsZWN0b3I+YCA8ZmFzdC1idXR0b24gaWQ9XCJhZGRCcmVlZFwiPkFkZCBCcmVlZDwvZmFzdC1idXR0b24+IGBcclxuICAgICl9XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLmJyZWVkLXNlbGVjdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAuNWVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNhcGl0YWxpemUgPSAod29yZHM6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiB3b3Jkc1xyXG4gICAgLnRvTG93ZXJDYXNlKClcclxuICAgIC5zcGxpdChcIiBcIilcclxuICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cmluZygxKSlcclxuICAgIC5qb2luKFwiIFwiKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFN1YkJyZWVkcyA9IChicmVlZHNEYXRhOiBhbnksIGN1cnJCcmVlZDogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGJyZWVkc0RhdGEubWVzc2FnZVtjdXJyQnJlZWQudG9Mb3dlckNhc2UoKV07XHJcbn07XHJcblxyXG5AY3VzdG9tRWxlbWVudCh7IG5hbWU6IFwiYnJlZWQtc2VsZWN0b3JcIiwgdGVtcGxhdGUsIHN0eWxlcyB9KVxyXG5leHBvcnQgY2xhc3MgQnJlZWRTZWxlY3RvciBleHRlbmRzIEZBU1RFbGVtZW50IHtcclxuICBAYXR0ciBoYW5kbGVBZGRCcmVlZDogYW55O1xyXG4gIEBvYnNlcnZhYmxlIGJyZWVkczogc3RyaW5nW10gPSBbXTtcclxuICBAb2JzZXJ2YWJsZSBzdWJCcmVlZHM6IHN0cmluZ1tdID0gW107XHJcbiAgQG9ic2VydmFibGUgc2VsZWN0ZWRCcmVlZDogc3RyaW5nID0gXCJcIjtcclxuICBAb2JzZXJ2YWJsZSBzZWxlY3RlZFN1YkJyZWVkOiBzdHJpbmcgPSBcIlwiO1xyXG4gIEBvYnNlcnZhYmxlIHNlbGVjdGVkQnJlZWRVcmw6IHN0cmluZyA9IFwiXCI7XHJcbiAgQG9ic2VydmFibGUgY2FsbEhhbmRsZUFkZEJyZWVkOiBhbnk7XHJcbiAgYWxsQnJlZWRzRGF0YTogYW55ID0ge307XHJcbiAgYWRkQnJlZWRCdG46IGFueTtcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgIHRoaXMuZmV0Y2hBbGxCcmVlZHMoKTtcclxuXHJcbiAgICB0aGlzLmFkZEJyZWVkQnRuID0gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiLmFkZC1icmVlZFwiKTtcclxuXHJcbiAgICBpZiAodGhpcy5hZGRCcmVlZEJ0bikgY29uc29sZS5sb2coYGZvdW5kIGFkZCBicmVlZCBidXR0b25gKTtcclxuICB9XHJcblxyXG4gIGNhbGxBZGRCcmVlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKGBjYWxsQWRkQnJlZWQgdXJsID0gJHt0aGlzLnNlbGVjdGVkQnJlZWRVcmx9YCk7XHJcbiAgICB0aGlzLmhhbmRsZUFkZEJyZWVkKHRoaXMuc2VsZWN0ZWRCcmVlZFVybCk7XHJcbiAgfVxyXG5cclxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBvbGRWYWx1ZTogc3RyaW5nLFxyXG4gICAgbmV3VmFsdWU6IHN0cmluZ1xyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKG5hbWUgPT09IFwiaGFuZGxlYWRkYnJlZWRcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhgaGFuZGxlQWRkQnJlZWQgY2hhbmdlZGApO1xyXG4gICAgICBpZiAoIXRoaXMuYWRkQnJlZWRCdG4pIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGBhZGRFdmVudExpc3RlbmVyYCk7XHJcbiAgICAgIHRoaXMuYWRkQnJlZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2FsbEFkZEJyZWVkLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkQnJlZWRDaGFuZ2VkKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGBoYW5kbGVBZGRCcmVlZCBjaGFuZ2VkOyBoYW5kbGVBZGRCcmVlZCA9ICR7dGhpcy5oYW5kbGVBZGRCcmVlZH1gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQnJlZWRDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQnJlZWQgPSAoZXZlbnQudGFyZ2V0ISBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWU7XHJcbiAgICB0aGlzLnNlbGVjdGVkU3ViQnJlZWQgPSBcIlwiO1xyXG4gICAgdGhpcy5zdWJCcmVlZHMgPSBnZXRTdWJCcmVlZHModGhpcy5hbGxCcmVlZHNEYXRhLCB0aGlzLnNlbGVjdGVkQnJlZWQpLm1hcChcclxuICAgICAgKGJyZWVkOiBzdHJpbmcpID0+IGNhcGl0YWxpemUoYnJlZWQpXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLnN1YkJyZWVkcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEJyZWVkLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEJyZWVkVXJsID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZldGNoQnJlZWRVcmwoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3ViQnJlZWRDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkU3ViQnJlZWQgPSAoZXZlbnQudGFyZ2V0ISBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWRTdWJCcmVlZCA9ICR7dGhpcy5zZWxlY3RlZFN1YkJyZWVkfWApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hBbGxCcmVlZHMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGxcIik7XHJcbiAgICB0aGlzLmFsbEJyZWVkc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB0aGlzLmJyZWVkcyA9IE9iamVjdC5rZXlzKHRoaXMuYWxsQnJlZWRzRGF0YS5tZXNzYWdlKS5tYXAoKGtleSkgPT5cclxuICAgICAgY2FwaXRhbGl6ZShrZXkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gYWxsIGJyZWVkID0gaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC9ob3VuZC9pbWFnZXNcclxuICAvLyBhbGwgc3ViIGJyZWVkcyA9IGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvaG91bmQvYWZnaGFuL2ltYWdlc1xyXG4gIGFzeW5jIGZldGNoQnJlZWRVcmwoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBsZXQgcmVzcG9uc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRTdWJCcmVlZC5sZW5ndGggPD0gMCkge1xyXG4gICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkLyR7dGhpcy5zZWxlY3RlZEJyZWVkLnRvTG93ZXJDYXNlKCl9L2ltYWdlc2BcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHt0aGlzLnNlbGVjdGVkQnJlZWQudG9Mb3dlckNhc2UoKX0vJHt0aGlzLnNlbGVjdGVkU3ViQnJlZWQudG9Mb3dlckNhc2UoKX0vaW1hZ2VzYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZEJyZWVkVXJsID1cclxuICAgICAganNvbi5tZXNzYWdlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGpzb24ubWVzc2FnZS5sZW5ndGgpICsgMV07XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJkODQyMWFjODUwMTQ4MTUxODJhXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9