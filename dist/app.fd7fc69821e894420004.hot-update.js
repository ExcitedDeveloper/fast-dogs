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
    callHandleAddBreed(breedUrl) {
        console.log(`calling handleAddBreed with url = ${breedUrl}`);
        this.handleAddBreed(breedUrl);
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
/******/ 	__webpack_require__.h = () => ("77fac4bca84ac13280bd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztRQUN0RSxDQUFDO0tBQUE7Q0FDRjtBQWhGTztJQUFMLHlEQUFJO3FEQUFxQjtBQUNkO0lBQVgsK0RBQVU7NkNBQXVCO0FBQ3RCO0lBQVgsK0RBQVU7Z0RBQTBCO0FBQ3pCO0lBQVgsK0RBQVU7b0RBQTRCO0FBQzNCO0lBQVgsK0RBQVU7dURBQStCO0FBQzlCO0lBQVgsK0RBQVU7dURBQStCO0FBTi9CLGFBQWE7SUFEekIsc0VBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDL0MsYUFBYSxDQWlGekI7QUFqRnlCOzs7Ozs7Ozs7VUN2RTFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdC1kb2dzLy4vc3JjL2NvbXBvbmVudHMvYnJlZWQtc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZBU1RFbGVtZW50LFxyXG4gIGN1c3RvbUVsZW1lbnQsXHJcbiAgYXR0cixcclxuICBodG1sLFxyXG4gIGNzcyxcclxuICBvYnNlcnZhYmxlLFxyXG4gIHJlcGVhdCxcclxuICB3aGVuLFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBodG1sPEJyZWVkU2VsZWN0b3I+YFxyXG4gIDxkaXYgY2xhc3M9XCJicmVlZC1zZWxlY3RvclwiPlxyXG4gICAgPGZhc3QtY29tYm9ib3hcclxuICAgICAgYXV0b2NvbXBsZXRlPVwiYm90aFwiXHJcbiAgICAgIDp2YWx1ZT1cIiR7KHgpID0+IHguc2VsZWN0ZWRCcmVlZH1cIlxyXG4gICAgICBAY2hhbmdlPVwiJHsoeCwgYykgPT4geC5oYW5kbGVCcmVlZENoYW5nZShjLmV2ZW50KX1cIlxyXG4gICAgPlxyXG4gICAgICAke3JlcGVhdChcclxuICAgICAgICAoeCkgPT4geC5icmVlZHMsXHJcbiAgICAgICAgaHRtbDxzdHJpbmc+YCA8ZmFzdC1vcHRpb24+JHsoeCkgPT4geH08L2Zhc3Qtb3B0aW9uPiBgXHJcbiAgICAgICl9XHJcbiAgICA8L2Zhc3QtY29tYm9ib3g+XHJcblxyXG4gICAgJHt3aGVuKFxyXG4gICAgICAoeCkgPT4geC5zdWJCcmVlZHMubGVuZ3RoID4gMCxcclxuICAgICAgaHRtbDxCcmVlZFNlbGVjdG9yPmBcclxuICAgICAgICA8ZmFzdC1jb21ib2JveFxyXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwiYm90aFwiXHJcbiAgICAgICAgICBAY2hhbmdlPVwiJHsoeCwgYykgPT4geC5oYW5kbGVTdWJCcmVlZENoYW5nZShjLmV2ZW50KX1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICR7cmVwZWF0KFxyXG4gICAgICAgICAgICAoeCkgPT4geC5zdWJCcmVlZHMsXHJcbiAgICAgICAgICAgIGh0bWw8c3RyaW5nPmAgPGZhc3Qtb3B0aW9uPiR7KHgpID0+IHh9PC9mYXN0LW9wdGlvbj4gYFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Zhc3QtY29tYm9ib3g+XHJcbiAgICAgIGBcclxuICAgICl9XHJcbiAgICAke3doZW4oXHJcbiAgICAgICh4KSA9PlxyXG4gICAgICAgIHguc2VsZWN0ZWRTdWJCcmVlZC5sZW5ndGggPiAwIHx8XHJcbiAgICAgICAgKHguc3ViQnJlZWRzLmxlbmd0aCA8PSAwICYmIHguc2VsZWN0ZWRCcmVlZC5sZW5ndGggPiAwKSxcclxuICAgICAgaHRtbDxCcmVlZFNlbGVjdG9yPmBcclxuICAgICAgICA8ZmFzdC1idXR0b24gQGNsaWNrPVwiJHsoeCwgYykgPT4geC5oYW5kbGVBZGRCcmVlZCh4LnNlbGVjdGVkQnJlZWRVcmwpfVwiXHJcbiAgICAgICAgICA+QWRkIEJyZWVkPC9mYXN0LWJ1dHRvblxyXG4gICAgICAgID5cclxuICAgICAgYFxyXG4gICAgKX1cclxuICA8L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IGNzc2BcclxuICAuYnJlZWQtc2VsZWN0b3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC41ZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY2FwaXRhbGl6ZSA9ICh3b3Jkczogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIHdvcmRzXHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnNwbGl0KFwiIFwiKVxyXG4gICAgLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyaW5nKDEpKVxyXG4gICAgLmpvaW4oXCIgXCIpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3ViQnJlZWRzID0gKGJyZWVkc0RhdGE6IGFueSwgY3VyckJyZWVkOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gYnJlZWRzRGF0YS5tZXNzYWdlW2N1cnJCcmVlZC50b0xvd2VyQ2FzZSgpXTtcclxufTtcclxuXHJcbkBjdXN0b21FbGVtZW50KHsgbmFtZTogXCJicmVlZC1zZWxlY3RvclwiLCB0ZW1wbGF0ZSwgc3R5bGVzIH0pXHJcbmV4cG9ydCBjbGFzcyBCcmVlZFNlbGVjdG9yIGV4dGVuZHMgRkFTVEVsZW1lbnQge1xyXG4gIEBhdHRyIGhhbmRsZUFkZEJyZWVkOiBhbnk7XHJcbiAgQG9ic2VydmFibGUgYnJlZWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBvYnNlcnZhYmxlIHN1YkJyZWVkczogc3RyaW5nW10gPSBbXTtcclxuICBAb2JzZXJ2YWJsZSBzZWxlY3RlZEJyZWVkOiBzdHJpbmcgPSBcIlwiO1xyXG4gIEBvYnNlcnZhYmxlIHNlbGVjdGVkU3ViQnJlZWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgQG9ic2VydmFibGUgc2VsZWN0ZWRCcmVlZFVybDogc3RyaW5nID0gXCJcIjtcclxuICBhbGxCcmVlZHNEYXRhOiBhbnkgPSB7fTtcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgIHRoaXMuZmV0Y2hBbGxCcmVlZHMoKTtcclxuICB9XHJcblxyXG4gIGNhbGxIYW5kbGVBZGRCcmVlZChicmVlZFVybDogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgY2FsbGluZyBoYW5kbGVBZGRCcmVlZCB3aXRoIHVybCA9ICR7YnJlZWRVcmx9YClcclxuICAgIHRoaXMuaGFuZGxlQWRkQnJlZWQoYnJlZWRVcmwpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkQnJlZWRDaGFuZ2VkKCkge1xyXG4gICAgY29uc29sZS5sb2coYGhhbmRsZUFkZEJyZWVkIGNoYW5nZWQ7IGhhbmRsZUFkZEJyZWVkID0gJHt0aGlzLmhhbmRsZUFkZEJyZWVkfWApXHJcbiAgfVxyXG5cclxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBhdHRyaWJ1dGUgY2hhbmdlZCBuYW1lID0gJHtuYW1lfWApXHJcbiAgICAgIGlmIChuYW1lID09PSAnaGFuZGxlYWRkYnJlZWQnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHVwZGF0ZSBoYW5kbGVBZGRCcmVlZGApXHJcbiAgICAgICAgdGhpcy5oYW5kbGVBZGRCcmVlZCA9IG5ld1ZhbHVlO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVCcmVlZENoYW5nZShldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRCcmVlZCA9IChldmVudC50YXJnZXQhIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRTdWJCcmVlZCA9IFwiXCI7XHJcbiAgICB0aGlzLnN1YkJyZWVkcyA9IGdldFN1YkJyZWVkcyh0aGlzLmFsbEJyZWVkc0RhdGEsIHRoaXMuc2VsZWN0ZWRCcmVlZCkubWFwKFxyXG4gICAgICAoYnJlZWQ6IHN0cmluZykgPT4gY2FwaXRhbGl6ZShicmVlZClcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3ViQnJlZWRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkQnJlZWQubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQnJlZWRVcmwgPSBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZmV0Y2hCcmVlZFVybCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJCcmVlZENoYW5nZShldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRTdWJCcmVlZCA9IChldmVudC50YXJnZXQhIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZFN1YkJyZWVkID0gJHt0aGlzLnNlbGVjdGVkU3ViQnJlZWR9YCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaEFsbEJyZWVkcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9saXN0L2FsbFwiKTtcclxuICAgIHRoaXMuYWxsQnJlZWRzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHRoaXMuYnJlZWRzID0gT2JqZWN0LmtleXModGhpcy5hbGxCcmVlZHNEYXRhLm1lc3NhZ2UpLm1hcCgoa2V5KSA9PlxyXG4gICAgICBjYXBpdGFsaXplKGtleSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBhbGwgYnJlZWQgPSBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkL2hvdW5kL2ltYWdlc1xyXG4gIC8vIGFsbCBzdWIgYnJlZWRzID0gaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC9ob3VuZC9hZmdoYW4vaW1hZ2VzXHJcbiAgYXN5bmMgZmV0Y2hCcmVlZFVybCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGxldCByZXNwb25zZTtcclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFN1YkJyZWVkLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHt0aGlzLnNlbGVjdGVkQnJlZWQudG9Mb3dlckNhc2UoKX0vaW1hZ2VzYFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC8ke3RoaXMuc2VsZWN0ZWRCcmVlZC50b0xvd2VyQ2FzZSgpfS8ke3RoaXMuc2VsZWN0ZWRTdWJCcmVlZC50b0xvd2VyQ2FzZSgpfS9pbWFnZXNgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkQnJlZWRVcmwgPVxyXG4gICAgICBqc29uLm1lc3NhZ2VbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoganNvbi5tZXNzYWdlLmxlbmd0aCkgKyAxXTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzdmYWM0YmNhODRhYzEzMjgwYmRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=