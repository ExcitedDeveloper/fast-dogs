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
    <breed-selector handleAddBreed="${x => x.handleAddBreed}></breed-selector>
  </div>

  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.when)((x) => !x.ready, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <div class="pt-1">Loading...</div>`)}

  <div class="breed-list">
    ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.repeat)((x) => x.breeds, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <dog-card url="${(x) => x}"></dog-card> `)}
  </div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.css `
  .controls {
    display: flex;
    gap: 2em;
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
    handleAddBreed(url) {
        console.log(`handleAddBreed url = ${url}`);
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
/******/ 	__webpack_require__.h = () => ("f41c2ee78f27f52e4a7a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjNmMDAwMzA1MjYwNzhkNTUzMzMyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2lDO0FBRWpDLE1BQU0sUUFBUSxHQUFHLHlEQUFJLENBQWE7OztnQkFHbEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsRUFBRTs7Ozs7MkJBS3BCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFOzs7c0NBR1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYzs7O0lBR3ZELDZEQUFJLENBQ0osQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDZix5REFBSSxDQUFhLHFDQUFxQyxDQUN2RDs7O01BR0csK0RBQU0sQ0FDTixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFDZix5REFBSSxDQUFhLG1CQUFtQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FDN0Q7O0NBRUosQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLHdEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Q0FlakIsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsR0FBUyxFQUFFLENBQUM7SUFDbkMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUN4RSxPQUFPLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQy9CLENBQUMsRUFBQztBQUdGLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVksU0FBUSxnRUFBVztJQUE1Qzs7UUFDYyxVQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQU0sR0FBYSxFQUFFLENBQUM7SUFlcEMsQ0FBQztJQWJPLG9CQUFvQjs7WUFDeEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxnQkFBZ0IsRUFBRSxDQUFDO1lBRXZDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFRCxjQUFjLENBQUMsR0FBVztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQWhCYTtJQUFYLCtEQUFVOzBDQUF1QjtBQUN0QjtJQUFYLCtEQUFVOzJDQUF1QjtBQUZ2QixXQUFXO0lBRHZCLHNFQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUM3QyxXQUFXLENBaUJ2QjtBQWpCdUI7Ozs7Ozs7OztVQzdEeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9zcmMvY29tcG9uZW50cy9icmVlZC1zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZBU1RFbGVtZW50LFxyXG4gIGN1c3RvbUVsZW1lbnQsXHJcbiAgYXR0cixcclxuICBodG1sLFxyXG4gIGNzcyxcclxuICBvYnNlcnZhYmxlLFxyXG4gIHdoZW4sXHJcbiAgcmVwZWF0LFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBodG1sPEJyZWVkU2VhcmNoPmBcclxuICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cclxuICAgIDxmYXN0LWJ1dHRvblxyXG4gICAgICBAY2xpY2s9XCIkeyh4KSA9PiB4LmhhbmRsZUdldFJhbmRvbUJyZWVkKCl9XCJcclxuICAgICAgfVxyXG4gICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXHJcbiAgICAgID5SYW5kb20gQnJlZWQ8L2Zhc3QtYnV0dG9uXHJcbiAgICA+XHJcbiAgICA8ZmFzdC1idXR0b24gQGNsaWNrPVwiJHsoeCkgPT4geC5jbGVhckxpc3QoKX1cIiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXHJcbiAgICAgID5DbGVhciBMaXN0PC9mYXN0LWJ1dHRvblxyXG4gICAgPlxyXG4gICAgPGJyZWVkLXNlbGVjdG9yIGhhbmRsZUFkZEJyZWVkPVwiJHt4ID0+IHguaGFuZGxlQWRkQnJlZWR9PjwvYnJlZWQtc2VsZWN0b3I+XHJcbiAgPC9kaXY+XHJcblxyXG4gICR7d2hlbihcclxuICAgICh4KSA9PiAheC5yZWFkeSxcclxuICAgIGh0bWw8QnJlZWRTZWFyY2g+YCA8ZGl2IGNsYXNzPVwicHQtMVwiPkxvYWRpbmcuLi48L2Rpdj5gXHJcbiAgKX1cclxuXHJcbiAgPGRpdiBjbGFzcz1cImJyZWVkLWxpc3RcIj5cclxuICAgICR7cmVwZWF0KFxyXG4gICAgICAoeCkgPT4geC5icmVlZHMsXHJcbiAgICAgIGh0bWw8QnJlZWRTZWFyY2g+YCA8ZG9nLWNhcmQgdXJsPVwiJHsoeCkgPT4geH1cIj48L2RvZy1jYXJkPiBgXHJcbiAgICApfVxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gY3NzYFxyXG4gIC5jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAyZW07XHJcbiAgfVxyXG5cclxuICAuYnJlZWQtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAyZW07XHJcbiAgfVxyXG5cclxuICAucHQtMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGZldGNoUmFuZG9tQnJlZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2ltYWdlL3JhbmRvbVwiKTtcclxuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoeyBuYW1lOiBcImJyZWVkLXNlYXJjaFwiLCB0ZW1wbGF0ZSwgc3R5bGVzIH0pXHJcbmV4cG9ydCBjbGFzcyBCcmVlZFNlYXJjaCBleHRlbmRzIEZBU1RFbGVtZW50IHtcclxuICBAb2JzZXJ2YWJsZSByZWFkeTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQG9ic2VydmFibGUgYnJlZWRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBhc3luYyBoYW5kbGVHZXRSYW5kb21CcmVlZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGJyZWVkID0gYXdhaXQgZmV0Y2hSYW5kb21CcmVlZCgpO1xyXG5cclxuICAgIHRoaXMuYnJlZWRzLnVuc2hpZnQoYnJlZWQubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRCcmVlZCh1cmw6IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coYGhhbmRsZUFkZEJyZWVkIHVybCA9ICR7dXJsfWApXHJcbiAgfVxyXG5cclxuICBjbGVhckxpc3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJyZWVkcyA9IFtdO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNDFjMmVlNzhmMjdmNTJlNGE3YVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==