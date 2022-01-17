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
  <div class="controls">
    <fast-button
      @click="${(x) => x.handleGetRandomBreed()}"
      }
      appearance="primary"
      >Random Breed</fast-button
    >
    <fast-button @click="${(x) => x.clearList()}" appearance="primary"
      >Clear List</fast-button
    >
    <breed-selector></breed-selector>
  </div>

  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.when)((x) => !x.ready, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <div class="pt-1">Loading...</div>`)}

  <div class="breed-list">
    ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.repeat)((x) => x.breeds, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <dog-card url="${(x) => x}"></dog-card> `)}
  </div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.css `
  .controls {
    display: flex;
  }

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
/******/ 	__webpack_require__.h = () => ("386afa4b76369ccd4690")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmYwOTIyMTEzZjk1YmY5Y2FlZTU4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2lDO0FBRWpDLE1BQU0sUUFBUSxHQUFHLHlEQUFJLENBQWE7OztnQkFHbEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsRUFBRTs7Ozs7MkJBS3BCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFOzs7Ozs7SUFNM0MsNkRBQUksQ0FDSixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNmLHlEQUFJLENBQWEscUNBQXFDLENBQ3ZEOzs7TUFHRywrREFBTSxDQUNOLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUNmLHlEQUFJLENBQWEsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUM3RDs7Q0FFSixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsd0RBQUc7Ozs7Ozs7Ozs7Ozs7O0NBY2pCLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHLEdBQVMsRUFBRSxDQUFDO0lBQ25DLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDeEUsT0FBTyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMvQixDQUFDLEVBQUM7QUFHRixJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsZ0VBQVc7SUFBNUM7O1FBQ2MsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFNLEdBQWEsRUFBRSxDQUFDO0lBV3BDLENBQUM7SUFUTyxvQkFBb0I7O1lBQ3hCLE1BQU0sS0FBSyxHQUFHLE1BQU0sZ0JBQWdCLEVBQUUsQ0FBQztZQUV2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQVphO0lBQVgsK0RBQVU7MENBQXVCO0FBQ3RCO0lBQVgsK0RBQVU7MkNBQXVCO0FBRnZCLFdBQVc7SUFEdkIsc0VBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQzdDLFdBQVcsQ0FhdkI7QUFidUI7Ozs7Ozs7OztVQzVEeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9zcmMvY29tcG9uZW50cy9icmVlZC1zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZBU1RFbGVtZW50LFxyXG4gIGN1c3RvbUVsZW1lbnQsXHJcbiAgYXR0cixcclxuICBodG1sLFxyXG4gIGNzcyxcclxuICBvYnNlcnZhYmxlLFxyXG4gIHdoZW4sXHJcbiAgcmVwZWF0LFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBodG1sPEJyZWVkU2VhcmNoPmBcclxuICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cclxuICAgIDxmYXN0LWJ1dHRvblxyXG4gICAgICBAY2xpY2s9XCIkeyh4KSA9PiB4LmhhbmRsZUdldFJhbmRvbUJyZWVkKCl9XCJcclxuICAgICAgfVxyXG4gICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXHJcbiAgICAgID5SYW5kb20gQnJlZWQ8L2Zhc3QtYnV0dG9uXHJcbiAgICA+XHJcbiAgICA8ZmFzdC1idXR0b24gQGNsaWNrPVwiJHsoeCkgPT4geC5jbGVhckxpc3QoKX1cIiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXHJcbiAgICAgID5DbGVhciBMaXN0PC9mYXN0LWJ1dHRvblxyXG4gICAgPlxyXG4gICAgPGJyZWVkLXNlbGVjdG9yPjwvYnJlZWQtc2VsZWN0b3I+XHJcbiAgPC9kaXY+XHJcblxyXG4gICR7d2hlbihcclxuICAgICh4KSA9PiAheC5yZWFkeSxcclxuICAgIGh0bWw8QnJlZWRTZWFyY2g+YCA8ZGl2IGNsYXNzPVwicHQtMVwiPkxvYWRpbmcuLi48L2Rpdj5gXHJcbiAgKX1cclxuXHJcbiAgPGRpdiBjbGFzcz1cImJyZWVkLWxpc3RcIj5cclxuICAgICR7cmVwZWF0KFxyXG4gICAgICAoeCkgPT4geC5icmVlZHMsXHJcbiAgICAgIGh0bWw8QnJlZWRTZWFyY2g+YCA8ZG9nLWNhcmQgdXJsPVwiJHsoeCkgPT4geH1cIj48L2RvZy1jYXJkPiBgXHJcbiAgICApfVxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gY3NzYFxyXG4gIC5jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLmJyZWVkLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMmVtO1xyXG4gIH1cclxuXHJcbiAgLnB0LTEge1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBmZXRjaFJhbmRvbUJyZWVkID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9pbWFnZS9yYW5kb21cIik7XHJcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbkBjdXN0b21FbGVtZW50KHsgbmFtZTogXCJicmVlZC1zZWFyY2hcIiwgdGVtcGxhdGUsIHN0eWxlcyB9KVxyXG5leHBvcnQgY2xhc3MgQnJlZWRTZWFyY2ggZXh0ZW5kcyBGQVNURWxlbWVudCB7XHJcbiAgQG9ic2VydmFibGUgcmVhZHk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBvYnNlcnZhYmxlIGJyZWVkczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgYXN5bmMgaGFuZGxlR2V0UmFuZG9tQnJlZWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBicmVlZCA9IGF3YWl0IGZldGNoUmFuZG9tQnJlZWQoKTtcclxuXHJcbiAgICB0aGlzLmJyZWVkcy51bnNoaWZ0KGJyZWVkLm1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJMaXN0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5icmVlZHMgPSBbXTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzg2YWZhNGI3NjM2OWNjZDQ2OTBcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=