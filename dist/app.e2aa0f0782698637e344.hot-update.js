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

    ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.when)(x => x.selectedSubBreed.length > 0 || (x.subBreeds.length <= 0 && x.selectedBreed.length > 0), _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
        <fast-button @change="${(x, c) => x.handleAddBreed(x.selectedBreedUrl)}">Add Breed</fast-button>
      `)}
  </div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.css `
  .breed-selector {
    display: flex;
    gap: .5em;
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
                response = yield fetch(`https://dog.ceo/api/breed/${this.selectedBreed}/images`);
            }
            else {
                response = yield fetch(`https://dog.ceo/api/breed/${this.selectedBreed}/${this.selectedSubBreed}/images`);
            }
            const json = yield response.json();
            this.selectedBreedUrl = json.message[Math.floor(Math.random() * json.message.length) + 1];
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
/******/ 	__webpack_require__.h = () => ("50db75c5513c793a9260")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxpRUFBaUU7SUFDM0QsYUFBYTs7WUFDakIsSUFBSSxRQUFRLENBQUM7WUFFYixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNyQyxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsNkJBQTZCLElBQUksQ0FBQyxhQUFhLFNBQVMsQ0FBQzthQUNqRjtpQkFBTTtnQkFDTCxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsNkJBQTZCLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGdCQUFnQixTQUFTLENBQUM7YUFDMUc7WUFFRCxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFGLENBQUM7S0FBQTtDQUNGO0FBMURPO0lBQUwseURBQUk7cURBQWdDO0FBQ3pCO0lBQVgsK0RBQVU7NkNBQXVCO0FBQ3RCO0lBQVgsK0RBQVU7Z0RBQTBCO0FBQ3pCO0lBQVgsK0RBQVU7b0RBQTRCO0FBQzNCO0lBQVgsK0RBQVU7dURBQStCO0FBQzlCO0lBQVgsK0RBQVU7dURBQStCO0FBTi9CLGFBQWE7SUFEekIsc0VBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDL0MsYUFBYSxDQTJEekI7QUEzRHlCOzs7Ozs7Ozs7VUNwRTFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdC1kb2dzLy4vc3JjL2NvbXBvbmVudHMvYnJlZWQtc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZBU1RFbGVtZW50LFxyXG4gIGN1c3RvbUVsZW1lbnQsXHJcbiAgYXR0cixcclxuICBodG1sLFxyXG4gIGNzcyxcclxuICBvYnNlcnZhYmxlLFxyXG4gIHJlcGVhdCxcclxuICB3aGVuLFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBodG1sPEJyZWVkU2VsZWN0b3I+YFxyXG4gIDxkaXYgY2xhc3M9XCJicmVlZC1zZWxlY3RvclwiPlxyXG4gICAgPGZhc3QtY29tYm9ib3hcclxuICAgICAgYXV0b2NvbXBsZXRlPVwiYm90aFwiXHJcbiAgICAgIDp2YWx1ZT1cIiR7KHgpID0+IHguc2VsZWN0ZWRCcmVlZH1cIlxyXG4gICAgICBAY2hhbmdlPVwiJHsoeCwgYykgPT4geC5oYW5kbGVCcmVlZENoYW5nZShjLmV2ZW50KX1cIlxyXG4gICAgPlxyXG4gICAgICAke3JlcGVhdChcclxuICAgICAgICAoeCkgPT4geC5icmVlZHMsXHJcbiAgICAgICAgaHRtbDxzdHJpbmc+YCA8ZmFzdC1vcHRpb24+JHsoeCkgPT4geH08L2Zhc3Qtb3B0aW9uPiBgXHJcbiAgICAgICl9XHJcbiAgICA8L2Zhc3QtY29tYm9ib3g+XHJcblxyXG4gICAgJHt3aGVuKFxyXG4gICAgICAoeCkgPT4geC5zdWJCcmVlZHMubGVuZ3RoID4gMCxcclxuICAgICAgaHRtbDxCcmVlZFNlbGVjdG9yPmBcclxuICAgICAgICA8ZmFzdC1jb21ib2JveFxyXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwiYm90aFwiXHJcbiAgICAgICAgICBAY2hhbmdlPVwiJHsoeCwgYykgPT4geC5oYW5kbGVTdWJCcmVlZENoYW5nZShjLmV2ZW50KX1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICR7cmVwZWF0KFxyXG4gICAgICAgICAgICAoeCkgPT4geC5zdWJCcmVlZHMsXHJcbiAgICAgICAgICAgIGh0bWw8c3RyaW5nPmAgPGZhc3Qtb3B0aW9uPiR7KHgpID0+IHh9PC9mYXN0LW9wdGlvbj4gYFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Zhc3QtY29tYm9ib3g+XHJcbiAgICAgIGBcclxuICAgICl9XHJcblxyXG4gICAgJHt3aGVuKFxyXG4gICAgICB4ID0+IHguc2VsZWN0ZWRTdWJCcmVlZC5sZW5ndGggPiAwIHx8ICh4LnN1YkJyZWVkcy5sZW5ndGggPD0gMCAmJiB4LnNlbGVjdGVkQnJlZWQubGVuZ3RoID4gMCksXHJcbiAgICAgIGh0bWw8QnJlZWRTZWxlY3Rvcj5gXHJcbiAgICAgICAgPGZhc3QtYnV0dG9uIEBjaGFuZ2U9XCIkeyh4LCBjKSA9PiB4LmhhbmRsZUFkZEJyZWVkKHguc2VsZWN0ZWRCcmVlZFVybCl9XCI+QWRkIEJyZWVkPC9mYXN0LWJ1dHRvbj5cclxuICAgICAgYFxyXG4gICAgKX1cclxuICA8L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IGNzc2BcclxuICAuYnJlZWQtc2VsZWN0b3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogLjVlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjYXBpdGFsaXplID0gKHdvcmRzOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gd29yZHNcclxuICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAuc3BsaXQoXCIgXCIpXHJcbiAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHJpbmcoMSkpXHJcbiAgICAuam9pbihcIiBcIik7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTdWJCcmVlZHMgPSAoYnJlZWRzRGF0YTogYW55LCBjdXJyQnJlZWQ6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBicmVlZHNEYXRhLm1lc3NhZ2VbY3VyckJyZWVkLnRvTG93ZXJDYXNlKCldO1xyXG59O1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoeyBuYW1lOiBcImJyZWVkLXNlbGVjdG9yXCIsIHRlbXBsYXRlLCBzdHlsZXMgfSlcclxuZXhwb3J0IGNsYXNzIEJyZWVkU2VsZWN0b3IgZXh0ZW5kcyBGQVNURWxlbWVudCB7XHJcbiAgQGF0dHIgaGFuZGxlQWRkQnJlZWQ6IGFueSA9ICgpID0+IHt9O1xyXG4gIEBvYnNlcnZhYmxlIGJyZWVkczogc3RyaW5nW10gPSBbXTtcclxuICBAb2JzZXJ2YWJsZSBzdWJCcmVlZHM6IHN0cmluZ1tdID0gW107XHJcbiAgQG9ic2VydmFibGUgc2VsZWN0ZWRCcmVlZDogc3RyaW5nID0gXCJcIjtcclxuICBAb2JzZXJ2YWJsZSBzZWxlY3RlZFN1YkJyZWVkOiBzdHJpbmcgPSBcIlwiO1xyXG4gIEBvYnNlcnZhYmxlIHNlbGVjdGVkQnJlZWRVcmw6IHN0cmluZyA9IFwiXCI7XHJcbiAgYWxsQnJlZWRzRGF0YTogYW55ID0ge307XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuXHJcbiAgICB0aGlzLmZldGNoQWxsQnJlZWRzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVCcmVlZENoYW5nZShldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRCcmVlZCA9IChldmVudC50YXJnZXQhIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRTdWJCcmVlZCA9IFwiXCI7XHJcbiAgICB0aGlzLnN1YkJyZWVkcyA9IGdldFN1YkJyZWVkcyh0aGlzLmFsbEJyZWVkc0RhdGEsIHRoaXMuc2VsZWN0ZWRCcmVlZCkubWFwKFxyXG4gICAgICAoYnJlZWQ6IHN0cmluZykgPT4gY2FwaXRhbGl6ZShicmVlZClcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3ViQnJlZWRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkQnJlZWQubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQnJlZWRVcmwgPSBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZmV0Y2hCcmVlZFVybCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJCcmVlZENoYW5nZShldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRTdWJCcmVlZCA9IChldmVudC50YXJnZXQhIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZFN1YkJyZWVkID0gJHt0aGlzLnNlbGVjdGVkU3ViQnJlZWR9YClcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoQWxsQnJlZWRzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsXCIpO1xyXG4gICAgdGhpcy5hbGxCcmVlZHNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgdGhpcy5icmVlZHMgPSBPYmplY3Qua2V5cyh0aGlzLmFsbEJyZWVkc0RhdGEubWVzc2FnZSkubWFwKChrZXkpID0+XHJcbiAgICAgIGNhcGl0YWxpemUoa2V5KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIGFsbCBicmVlZCA9IGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvaG91bmQvaW1hZ2VzXHJcbiAgLy8gYWxsIHN1YiBicmVlZHMgPSBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkL2hvdW5kL2FmZ2hhbi9pbWFnZXNcclxuICBhc3luYyBmZXRjaEJyZWVkVXJsKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgbGV0IHJlc3BvbnNlO1xyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkU3ViQnJlZWQubGVuZ3RoIDw9IDApIHtcclxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC8ke3RoaXMuc2VsZWN0ZWRCcmVlZH0vaW1hZ2VzYClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHt0aGlzLnNlbGVjdGVkQnJlZWR9LyR7dGhpcy5zZWxlY3RlZFN1YkJyZWVkfS9pbWFnZXNgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZEJyZWVkVXJsID0ganNvbi5tZXNzYWdlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpqc29uLm1lc3NhZ2UubGVuZ3RoKSArIDFdO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MGRiNzVjNTUxM2M3OTNhOTI2MFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==