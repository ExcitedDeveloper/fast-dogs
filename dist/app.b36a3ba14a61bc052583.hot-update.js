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
    <fast-button id="addBreed"
          >Add Breed</fast-button
        >
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
    callAddBreed() {
        console.log(`callAddBreed url = ${this.selectedBreedUrl}`);
        this.handleAddBreed(this.selectedBreedUrl);
    }
    handleAddBreedChanged() {
        var _a;
        console.log(`handleAddBreed changed; handleAddBreed = ${this.handleAddBreed}`);
        (_a = this.shadowRoot.getElementById('addBreed')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.callAddBreed.bind(this));
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
/******/ 	__webpack_require__.h = () => ("069546a0efd8853453fb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmIzNmEzYmExNGE2MWJjMDUyNTgzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNpQztBQUVqQyxNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFlOzs7O2dCQUlwQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWE7aUJBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7O1FBRS9DLCtEQUFNLENBQ04sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQ2YseURBQUksQ0FBUSxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQ3ZEOzs7TUFHRCw2REFBSSxDQUNKLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQzdCLHlEQUFJLENBQWU7OztxQkFHSixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOztZQUVsRCwrREFBTSxDQUNOLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUNsQix5REFBSSxDQUFRLGlCQUFpQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FDdkQ7O09BRUosQ0FDRjs7Ozs7Q0FLSixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsd0RBQUc7Ozs7O0NBS2pCLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ25DLE9BQU8sS0FBSztTQUNULFdBQVcsRUFBRTtTQUNiLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDVixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElB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ZC1zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3Mvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRkFTVEVsZW1lbnQsXHJcbiAgY3VzdG9tRWxlbWVudCxcclxuICBhdHRyLFxyXG4gIGh0bWwsXHJcbiAgY3NzLFxyXG4gIG9ic2VydmFibGUsXHJcbiAgcmVwZWF0LFxyXG4gIHdoZW4sXHJcbn0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC1lbGVtZW50XCI7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8QnJlZWRTZWxlY3Rvcj5gXHJcbiAgPGRpdiBjbGFzcz1cImJyZWVkLXNlbGVjdG9yXCI+XHJcbiAgICA8ZmFzdC1jb21ib2JveFxyXG4gICAgICBhdXRvY29tcGxldGU9XCJib3RoXCJcclxuICAgICAgOnZhbHVlPVwiJHsoeCkgPT4geC5zZWxlY3RlZEJyZWVkfVwiXHJcbiAgICAgIEBjaGFuZ2U9XCIkeyh4LCBjKSA9PiB4LmhhbmRsZUJyZWVkQ2hhbmdlKGMuZXZlbnQpfVwiXHJcbiAgICA+XHJcbiAgICAgICR7cmVwZWF0KFxyXG4gICAgICAgICh4KSA9PiB4LmJyZWVkcyxcclxuICAgICAgICBodG1sPHN0cmluZz5gIDxmYXN0LW9wdGlvbj4keyh4KSA9PiB4fTwvZmFzdC1vcHRpb24+IGBcclxuICAgICAgKX1cclxuICAgIDwvZmFzdC1jb21ib2JveD5cclxuXHJcbiAgICAke3doZW4oXHJcbiAgICAgICh4KSA9PiB4LnN1YkJyZWVkcy5sZW5ndGggPiAwLFxyXG4gICAgICBodG1sPEJyZWVkU2VsZWN0b3I+YFxyXG4gICAgICAgIDxmYXN0LWNvbWJvYm94XHJcbiAgICAgICAgICBhdXRvY29tcGxldGU9XCJib3RoXCJcclxuICAgICAgICAgIEBjaGFuZ2U9XCIkeyh4LCBjKSA9PiB4LmhhbmRsZVN1YkJyZWVkQ2hhbmdlKGMuZXZlbnQpfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgJHtyZXBlYXQoXHJcbiAgICAgICAgICAgICh4KSA9PiB4LnN1YkJyZWVkcyxcclxuICAgICAgICAgICAgaHRtbDxzdHJpbmc+YCA8ZmFzdC1vcHRpb24+JHsoeCkgPT4geH08L2Zhc3Qtb3B0aW9uPiBgXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZmFzdC1jb21ib2JveD5cclxuICAgICAgYFxyXG4gICAgKX1cclxuICAgIDxmYXN0LWJ1dHRvbiBpZD1cImFkZEJyZWVkXCJcclxuICAgICAgICAgID5BZGQgQnJlZWQ8L2Zhc3QtYnV0dG9uXHJcbiAgICAgICAgPlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gY3NzYFxyXG4gIC5icmVlZC1zZWxlY3RvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjVlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjYXBpdGFsaXplID0gKHdvcmRzOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gd29yZHNcclxuICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAuc3BsaXQoXCIgXCIpXHJcbiAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHJpbmcoMSkpXHJcbiAgICAuam9pbihcIiBcIik7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTdWJCcmVlZHMgPSAoYnJlZWRzRGF0YTogYW55LCBjdXJyQnJlZWQ6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBicmVlZHNEYXRhLm1lc3NhZ2VbY3VyckJyZWVkLnRvTG93ZXJDYXNlKCldO1xyXG59O1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoeyBuYW1lOiBcImJyZWVkLXNlbGVjdG9yXCIsIHRlbXBsYXRlLCBzdHlsZXMgfSlcclxuZXhwb3J0IGNsYXNzIEJyZWVkU2VsZWN0b3IgZXh0ZW5kcyBGQVNURWxlbWVudCB7XHJcbiAgQGF0dHIgaGFuZGxlQWRkQnJlZWQ6IGFueTtcclxuICBAb2JzZXJ2YWJsZSBicmVlZHM6IHN0cmluZ1tdID0gW107XHJcbiAgQG9ic2VydmFibGUgc3ViQnJlZWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBvYnNlcnZhYmxlIHNlbGVjdGVkQnJlZWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgQG9ic2VydmFibGUgc2VsZWN0ZWRTdWJCcmVlZDogc3RyaW5nID0gXCJcIjtcclxuICBAb2JzZXJ2YWJsZSBzZWxlY3RlZEJyZWVkVXJsOiBzdHJpbmcgPSBcIlwiO1xyXG4gIEBvYnNlcnZhYmxlIGNhbGxIYW5kbGVBZGRCcmVlZDogYW55O1xyXG4gIGFsbEJyZWVkc0RhdGE6IGFueSA9IHt9O1xyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcblxyXG4gICAgdGhpcy5mZXRjaEFsbEJyZWVkcygpO1xyXG5cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgY2FsbEFkZEJyZWVkKCkge1xyXG4gICAgY29uc29sZS5sb2coYGNhbGxBZGRCcmVlZCB1cmwgPSAke3RoaXMuc2VsZWN0ZWRCcmVlZFVybH1gKVxyXG4gICAgdGhpcy5oYW5kbGVBZGRCcmVlZCh0aGlzLnNlbGVjdGVkQnJlZWRVcmwpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkQnJlZWRDaGFuZ2VkKCkge1xyXG4gICAgY29uc29sZS5sb2coYGhhbmRsZUFkZEJyZWVkIGNoYW5nZWQ7IGhhbmRsZUFkZEJyZWVkID0gJHt0aGlzLmhhbmRsZUFkZEJyZWVkfWApXHJcbiAgICB0aGlzLnNoYWRvd1Jvb3QhLmdldEVsZW1lbnRCeUlkKCdhZGRCcmVlZCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2FsbEFkZEJyZWVkLmJpbmQodGhpcykpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVCcmVlZENoYW5nZShldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRCcmVlZCA9IChldmVudC50YXJnZXQhIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRTdWJCcmVlZCA9IFwiXCI7XHJcbiAgICB0aGlzLnN1YkJyZWVkcyA9IGdldFN1YkJyZWVkcyh0aGlzLmFsbEJyZWVkc0RhdGEsIHRoaXMuc2VsZWN0ZWRCcmVlZCkubWFwKFxyXG4gICAgICAoYnJlZWQ6IHN0cmluZykgPT4gY2FwaXRhbGl6ZShicmVlZClcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3ViQnJlZWRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkQnJlZWQubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQnJlZWRVcmwgPSBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZmV0Y2hCcmVlZFVybCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJCcmVlZENoYW5nZShldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRTdWJCcmVlZCA9IChldmVudC50YXJnZXQhIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZFN1YkJyZWVkID0gJHt0aGlzLnNlbGVjdGVkU3ViQnJlZWR9YCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaEFsbEJyZWVkcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9saXN0L2FsbFwiKTtcclxuICAgIHRoaXMuYWxsQnJlZWRzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHRoaXMuYnJlZWRzID0gT2JqZWN0LmtleXModGhpcy5hbGxCcmVlZHNEYXRhLm1lc3NhZ2UpLm1hcCgoa2V5KSA9PlxyXG4gICAgICBjYXBpdGFsaXplKGtleSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBhbGwgYnJlZWQgPSBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkL2hvdW5kL2ltYWdlc1xyXG4gIC8vIGFsbCBzdWIgYnJlZWRzID0gaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC9ob3VuZC9hZmdoYW4vaW1hZ2VzXHJcbiAgYXN5bmMgZmV0Y2hCcmVlZFVybCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGxldCByZXNwb25zZTtcclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFN1YkJyZWVkLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHt0aGlzLnNlbGVjdGVkQnJlZWQudG9Mb3dlckNhc2UoKX0vaW1hZ2VzYFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC8ke3RoaXMuc2VsZWN0ZWRCcmVlZC50b0xvd2VyQ2FzZSgpfS8ke3RoaXMuc2VsZWN0ZWRTdWJCcmVlZC50b0xvd2VyQ2FzZSgpfS9pbWFnZXNgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkQnJlZWRVcmwgPVxyXG4gICAgICBqc29uLm1lc3NhZ2VbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoganNvbi5tZXNzYWdlLmxlbmd0aCkgKyAxXTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDY5NTQ2YTBlZmQ4ODUzNDUzZmJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=