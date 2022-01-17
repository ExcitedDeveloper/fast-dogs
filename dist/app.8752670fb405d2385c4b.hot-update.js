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
    }
    callAddBreed() {
        console.log(`callAddBreed url = ${this.selectedBreedUrl}`);
        this.handleAddBreed(this.selectedBreedUrl);
    }
    handleAddBreedChanged() {
        console.log(`handleAddBreed changed; handleAddBreed = ${this.handleAddBreed}`);
        if (!this.addBreedBtn)
            return;
        console.log(`addEventListener`);
        this.addBreedBtn.addEventListener("click", this.callAddBreed.bind(this));
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
/******/ 	__webpack_require__.h = () => ("8fc87d80ead7be7cf44c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjg3NTI2NzBmYjQwNWQyMzg1YzRiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNpQztBQUVqQyxNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFlOzs7O2dCQUlwQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWE7aUJBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7O1FBRS9DLCtEQUFNLENBQ04sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQ2YseURBQUksQ0FBUSxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQ3ZEOzs7TUFHRCw2REFBSSxDQUNKLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQzdCLHlEQUFJLENBQWU7OztxQkFHSixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOztZQUVsRCwrREFBTSxDQUNOLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUNsQix5REFBSSxDQUFRLGlCQUFpQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FDdkQ7O09BRUosQ0FDRjs7O0NBR0osQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLHdEQUFHOzs7OztDQUtqQixDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUNuQyxPQUFPLEtBQUs7U0FDVCxXQUFXLEVBQUU7U0FDYixLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJ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RUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDL0MsYUFBYSxDQW9GekI7QUFwRnlCOzs7Ozs7Ozs7VUM5RDFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdC1kb2dzLy4vc3JjL2NvbXBvbmVudHMvYnJlZWQtc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZBU1RFbGVtZW50LFxyXG4gIGN1c3RvbUVsZW1lbnQsXHJcbiAgYXR0cixcclxuICBodG1sLFxyXG4gIGNzcyxcclxuICBvYnNlcnZhYmxlLFxyXG4gIHJlcGVhdCxcclxuICB3aGVuLFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBodG1sPEJyZWVkU2VsZWN0b3I+YFxyXG4gIDxkaXYgY2xhc3M9XCJicmVlZC1zZWxlY3RvclwiPlxyXG4gICAgPGZhc3QtY29tYm9ib3hcclxuICAgICAgYXV0b2NvbXBsZXRlPVwiYm90aFwiXHJcbiAgICAgIDp2YWx1ZT1cIiR7KHgpID0+IHguc2VsZWN0ZWRCcmVlZH1cIlxyXG4gICAgICBAY2hhbmdlPVwiJHsoeCwgYykgPT4geC5oYW5kbGVCcmVlZENoYW5nZShjLmV2ZW50KX1cIlxyXG4gICAgPlxyXG4gICAgICAke3JlcGVhdChcclxuICAgICAgICAoeCkgPT4geC5icmVlZHMsXHJcbiAgICAgICAgaHRtbDxzdHJpbmc+YCA8ZmFzdC1vcHRpb24+JHsoeCkgPT4geH08L2Zhc3Qtb3B0aW9uPiBgXHJcbiAgICAgICl9XHJcbiAgICA8L2Zhc3QtY29tYm9ib3g+XHJcblxyXG4gICAgJHt3aGVuKFxyXG4gICAgICAoeCkgPT4geC5zdWJCcmVlZHMubGVuZ3RoID4gMCxcclxuICAgICAgaHRtbDxCcmVlZFNlbGVjdG9yPmBcclxuICAgICAgICA8ZmFzdC1jb21ib2JveFxyXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwiYm90aFwiXHJcbiAgICAgICAgICBAY2hhbmdlPVwiJHsoeCwgYykgPT4geC5oYW5kbGVTdWJCcmVlZENoYW5nZShjLmV2ZW50KX1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICR7cmVwZWF0KFxyXG4gICAgICAgICAgICAoeCkgPT4geC5zdWJCcmVlZHMsXHJcbiAgICAgICAgICAgIGh0bWw8c3RyaW5nPmAgPGZhc3Qtb3B0aW9uPiR7KHgpID0+IHh9PC9mYXN0LW9wdGlvbj4gYFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Zhc3QtY29tYm9ib3g+XHJcbiAgICAgIGBcclxuICAgICl9XHJcbiAgICA8ZmFzdC1idXR0b24gaWQ9XCJhZGRCcmVlZFwiIGNsYXNzPVwiYWRkLWJyZWVkXCI+QWRkIEJyZWVkPC9mYXN0LWJ1dHRvbj5cclxuICA8L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IGNzc2BcclxuICAuYnJlZWQtc2VsZWN0b3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC41ZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY2FwaXRhbGl6ZSA9ICh3b3Jkczogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIHdvcmRzXHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnNwbGl0KFwiIFwiKVxyXG4gICAgLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyaW5nKDEpKVxyXG4gICAgLmpvaW4oXCIgXCIpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3ViQnJlZWRzID0gKGJyZWVkc0RhdGE6IGFueSwgY3VyckJyZWVkOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gYnJlZWRzRGF0YS5tZXNzYWdlW2N1cnJCcmVlZC50b0xvd2VyQ2FzZSgpXTtcclxufTtcclxuXHJcbkBjdXN0b21FbGVtZW50KHsgbmFtZTogXCJicmVlZC1zZWxlY3RvclwiLCB0ZW1wbGF0ZSwgc3R5bGVzIH0pXHJcbmV4cG9ydCBjbGFzcyBCcmVlZFNlbGVjdG9yIGV4dGVuZHMgRkFTVEVsZW1lbnQge1xyXG4gIEBhdHRyIGhhbmRsZUFkZEJyZWVkOiBhbnk7XHJcbiAgQG9ic2VydmFibGUgYnJlZWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBvYnNlcnZhYmxlIHN1YkJyZWVkczogc3RyaW5nW10gPSBbXTtcclxuICBAb2JzZXJ2YWJsZSBzZWxlY3RlZEJyZWVkOiBzdHJpbmcgPSBcIlwiO1xyXG4gIEBvYnNlcnZhYmxlIHNlbGVjdGVkU3ViQnJlZWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgQG9ic2VydmFibGUgc2VsZWN0ZWRCcmVlZFVybDogc3RyaW5nID0gXCJcIjtcclxuICBAb2JzZXJ2YWJsZSBjYWxsSGFuZGxlQWRkQnJlZWQ6IGFueTtcclxuICBhbGxCcmVlZHNEYXRhOiBhbnkgPSB7fTtcclxuICBhZGRCcmVlZEJ0bjogYW55O1xyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcblxyXG4gICAgdGhpcy5mZXRjaEFsbEJyZWVkcygpO1xyXG5cclxuICAgIHRoaXMuYWRkQnJlZWRCdG4gPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWJyZWVkXCIpO1xyXG4gIH1cclxuXHJcbiAgY2FsbEFkZEJyZWVkKCkge1xyXG4gICAgY29uc29sZS5sb2coYGNhbGxBZGRCcmVlZCB1cmwgPSAke3RoaXMuc2VsZWN0ZWRCcmVlZFVybH1gKTtcclxuICAgIHRoaXMuaGFuZGxlQWRkQnJlZWQodGhpcy5zZWxlY3RlZEJyZWVkVXJsKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZEJyZWVkQ2hhbmdlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBgaGFuZGxlQWRkQnJlZWQgY2hhbmdlZDsgaGFuZGxlQWRkQnJlZWQgPSAke3RoaXMuaGFuZGxlQWRkQnJlZWR9YFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuYWRkQnJlZWRCdG4pIHJldHVybjtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgYWRkRXZlbnRMaXN0ZW5lcmApXHJcbiAgICB0aGlzLmFkZEJyZWVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNhbGxBZGRCcmVlZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUJyZWVkQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEJyZWVkID0gKGV2ZW50LnRhcmdldCEgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgdGhpcy5zZWxlY3RlZFN1YkJyZWVkID0gXCJcIjtcclxuICAgIHRoaXMuc3ViQnJlZWRzID0gZ2V0U3ViQnJlZWRzKHRoaXMuYWxsQnJlZWRzRGF0YSwgdGhpcy5zZWxlY3RlZEJyZWVkKS5tYXAoXHJcbiAgICAgIChicmVlZDogc3RyaW5nKSA9PiBjYXBpdGFsaXplKGJyZWVkKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5zdWJCcmVlZHMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRCcmVlZC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCcmVlZFVybCA9IFwiXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaEJyZWVkVXJsKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVN1YkJyZWVkQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFN1YkJyZWVkID0gKGV2ZW50LnRhcmdldCEgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coYHNlbGVjdGVkU3ViQnJlZWQgPSAke3RoaXMuc2VsZWN0ZWRTdWJCcmVlZH1gKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoQWxsQnJlZWRzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsXCIpO1xyXG4gICAgdGhpcy5hbGxCcmVlZHNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgdGhpcy5icmVlZHMgPSBPYmplY3Qua2V5cyh0aGlzLmFsbEJyZWVkc0RhdGEubWVzc2FnZSkubWFwKChrZXkpID0+XHJcbiAgICAgIGNhcGl0YWxpemUoa2V5KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIGFsbCBicmVlZCA9IGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvaG91bmQvaW1hZ2VzXHJcbiAgLy8gYWxsIHN1YiBicmVlZHMgPSBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkL2hvdW5kL2FmZ2hhbi9pbWFnZXNcclxuICBhc3luYyBmZXRjaEJyZWVkVXJsKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgbGV0IHJlc3BvbnNlO1xyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkU3ViQnJlZWQubGVuZ3RoIDw9IDApIHtcclxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC8ke3RoaXMuc2VsZWN0ZWRCcmVlZC50b0xvd2VyQ2FzZSgpfS9pbWFnZXNgXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkLyR7dGhpcy5zZWxlY3RlZEJyZWVkLnRvTG93ZXJDYXNlKCl9LyR7dGhpcy5zZWxlY3RlZFN1YkJyZWVkLnRvTG93ZXJDYXNlKCl9L2ltYWdlc2BcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRCcmVlZFVybCA9XHJcbiAgICAgIGpzb24ubWVzc2FnZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBqc29uLm1lc3NhZ2UubGVuZ3RoKSArIDFdO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ZmM4N2Q4MGVhZDdiZTdjZjQ0Y1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==