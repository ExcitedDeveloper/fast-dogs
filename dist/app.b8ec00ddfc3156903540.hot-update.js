"use strict";
self["webpackHotUpdatefast_dogs"]("app",{

/***/ "./src/components/breed-search.ts":
/*!****************************************!*\
  !*** ./src/components/breed-search.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreedSearch": () => (/* binding */ BreedSearch)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/when.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/repeat.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
  <fast-button id="random-breed" appearance="primary">Random Breed</fast-button>
  <fast-button @click="${(x) => x.clearList()}" appearance="primary"
    >Clear List</fast-button
  >

  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.when)((x) => !x.ready, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <div class="pt-1">Loading...</div>`)}

  <div class="breed-list">
    ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.repeat)((x) => x.breeds, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <dog-card url="${(x) => x}"></dog-card> `)}
  </div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.css `
  .breed-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
  }

  .pt-1 {
    padding-top: 1em;
  }
`;
const fetchRandomBreed = () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://dog.ceo/api/breeds/image/random");
    return yield response.json();
});
let BreedSearch = class BreedSearch extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.FASTElement {
    constructor() {
        super(...arguments);
        this.ready = true;
        this.breeds = [];
    }
    connectedCallback() {
        super.connectedCallback();
        const randomBreed = this.shadowRoot.getElementById("random-breed");
        if (!randomBreed)
            return;
        randomBreed.addEventListener("click", this.handleGetRandomBreed.bind(this));
    }
    handleGetRandomBreed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const breed = yield fetchRandomBreed();
            this.breeds.unshift(breed.message);
        });
    }
    clearList() {
        this.breeds = [];
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.observable
], BreedSearch.prototype, "ready", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.observable
], BreedSearch.prototype, "breeds", void 0);
BreedSearch = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.customElement)({ name: "breed-search", template, styles })
], BreedSearch);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("111b78906036a30da9df")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmI4ZWMwMGRkZmMzMTU2OTAzNTQwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2lDO0FBRWpDLE1BQU0sUUFBUSxHQUFHLHlEQUFJLENBQWE7O3lCQUVULENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFOzs7O0lBSXpDLDZEQUFJLENBQ0osQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDZix5REFBSSxDQUFhLHFDQUFxQyxDQUN2RDs7O01BR0csK0RBQU0sQ0FDTixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFDZix5REFBSSxDQUFhLG1CQUFtQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FDN0Q7O0NBRUosQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLHdEQUFHOzs7Ozs7Ozs7O0NBVWpCLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHLEdBQVMsRUFBRSxDQUFDO0lBQ25DLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDeEUsT0FBTyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMvQixDQUFDLEVBQUM7QUFHRixJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsZ0VBQVc7SUFBNUM7O1FBQ2MsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFNLEdBQWEsRUFBRSxDQUFDO0lBcUJwQyxDQUFDO0lBbkJDLGlCQUFpQjtRQUNmLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTFCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFXLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUV6QixXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUssb0JBQW9COztZQUN4QixNQUFNLEtBQUssR0FBRyxNQUFNLGdCQUFnQixFQUFFLENBQUM7WUFFdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUF0QmE7SUFBWCwrREFBVTswQ0FBdUI7QUFDdEI7SUFBWCwrREFBVTsyQ0FBdUI7QUFGdkIsV0FBVztJQUR2QixzRUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDN0MsV0FBVyxDQXVCdkI7QUF2QnVCOzs7Ozs7Ozs7VUNoRHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdC1kb2dzLy4vc3JjL2NvbXBvbmVudHMvYnJlZWQtc2VhcmNoLnRzIiwid2VicGFjazovL2Zhc3QtZG9ncy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGQVNURWxlbWVudCxcclxuICBjdXN0b21FbGVtZW50LFxyXG4gIGF0dHIsXHJcbiAgaHRtbCxcclxuICBjc3MsXHJcbiAgb2JzZXJ2YWJsZSxcclxuICB3aGVuLFxyXG4gIHJlcGVhdCxcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gaHRtbDxCcmVlZFNlYXJjaD5gXHJcbiAgPGZhc3QtYnV0dG9uIGlkPVwicmFuZG9tLWJyZWVkXCIgYXBwZWFyYW5jZT1cInByaW1hcnlcIj5SYW5kb20gQnJlZWQ8L2Zhc3QtYnV0dG9uPlxyXG4gIDxmYXN0LWJ1dHRvbiBAY2xpY2s9XCIkeyh4KSA9PiB4LmNsZWFyTGlzdCgpfVwiIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCJcclxuICAgID5DbGVhciBMaXN0PC9mYXN0LWJ1dHRvblxyXG4gID5cclxuXHJcbiAgJHt3aGVuKFxyXG4gICAgKHgpID0+ICF4LnJlYWR5LFxyXG4gICAgaHRtbDxCcmVlZFNlYXJjaD5gIDxkaXYgY2xhc3M9XCJwdC0xXCI+TG9hZGluZy4uLjwvZGl2PmBcclxuICApfVxyXG5cclxuICA8ZGl2IGNsYXNzPVwiYnJlZWQtbGlzdFwiPlxyXG4gICAgJHtyZXBlYXQoXHJcbiAgICAgICh4KSA9PiB4LmJyZWVkcyxcclxuICAgICAgaHRtbDxCcmVlZFNlYXJjaD5gIDxkb2ctY2FyZCB1cmw9XCIkeyh4KSA9PiB4fVwiPjwvZG9nLWNhcmQ+IGBcclxuICAgICl9XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLmJyZWVkLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMmVtO1xyXG4gIH1cclxuXHJcbiAgLnB0LTEge1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBmZXRjaFJhbmRvbUJyZWVkID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9pbWFnZS9yYW5kb21cIik7XHJcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbkBjdXN0b21FbGVtZW50KHsgbmFtZTogXCJicmVlZC1zZWFyY2hcIiwgdGVtcGxhdGUsIHN0eWxlcyB9KVxyXG5leHBvcnQgY2xhc3MgQnJlZWRTZWFyY2ggZXh0ZW5kcyBGQVNURWxlbWVudCB7XHJcbiAgQG9ic2VydmFibGUgcmVhZHk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBvYnNlcnZhYmxlIGJyZWVkczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgIGNvbnN0IHJhbmRvbUJyZWVkID0gdGhpcy5zaGFkb3dSb290IS5nZXRFbGVtZW50QnlJZChcInJhbmRvbS1icmVlZFwiKTtcclxuXHJcbiAgICBpZiAoIXJhbmRvbUJyZWVkKSByZXR1cm47XHJcblxyXG4gICAgcmFuZG9tQnJlZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlR2V0UmFuZG9tQnJlZWQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVHZXRSYW5kb21CcmVlZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGJyZWVkID0gYXdhaXQgZmV0Y2hSYW5kb21CcmVlZCgpO1xyXG5cclxuICAgIHRoaXMuYnJlZWRzLnVuc2hpZnQoYnJlZWQubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBjbGVhckxpc3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJyZWVkcyA9IFtdO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMTFiNzg5MDYwMzZhMzBkYTlkZlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==