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
    <breed-selector handleAddBreed="${x => x.handleAddBreed}"></breed-selector>
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
/******/ 	__webpack_require__.h = () => ("8a57b7ea3f113f857178")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmM5NGM4YTQxNzk0YzlmMGVhNjg4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2lDO0FBRWpDLE1BQU0sUUFBUSxHQUFHLHlEQUFJLENBQWE7OztnQkFHbEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsRUFBRTs7Ozs7MkJBS3BCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFOzs7c0NBR1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYzs7O0lBR3ZELDZEQUFJLENBQ0osQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDZix5REFBSSxDQUFhLHFDQUFxQyxDQUN2RDs7O01BR0csK0RBQU0sQ0FDTixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFDZix5REFBSSxDQUFhLG1CQUFtQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FDN0Q7O0NBRUosQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLHdEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Q0FlakIsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsR0FBUyxFQUFFLENBQUM7SUFDbkMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUN4RSxPQUFPLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQy9CLENBQUMsRUFBQztBQUdGLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVksU0FBUSxnRUFBVztJQUE1Qzs7UUFDYyxVQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQU0sR0FBYSxFQUFFLENBQUM7SUFlcEMsQ0FBQztJQWJPLG9CQUFvQjs7WUFDeEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxnQkFBZ0IsRUFBRSxDQUFDO1lBRXZDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFRCxjQUFjLENBQUMsR0FBVztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQWhCYTtJQUFYLCtEQUFVOzBDQUF1QjtBQUN0QjtJQUFYLCtEQUFVOzJDQUF1QjtBQUZ2QixXQUFXO0lBRHZCLHNFQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUM3QyxXQUFXLENBaUJ2QjtBQWpCdUI7Ozs7Ozs7OztVQzdEeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9zcmMvY29tcG9uZW50cy9icmVlZC1zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZBU1RFbGVtZW50LFxyXG4gIGN1c3RvbUVsZW1lbnQsXHJcbiAgYXR0cixcclxuICBodG1sLFxyXG4gIGNzcyxcclxuICBvYnNlcnZhYmxlLFxyXG4gIHdoZW4sXHJcbiAgcmVwZWF0LFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBodG1sPEJyZWVkU2VhcmNoPmBcclxuICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cclxuICAgIDxmYXN0LWJ1dHRvblxyXG4gICAgICBAY2xpY2s9XCIkeyh4KSA9PiB4LmhhbmRsZUdldFJhbmRvbUJyZWVkKCl9XCJcclxuICAgICAgfVxyXG4gICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXHJcbiAgICAgID5SYW5kb20gQnJlZWQ8L2Zhc3QtYnV0dG9uXHJcbiAgICA+XHJcbiAgICA8ZmFzdC1idXR0b24gQGNsaWNrPVwiJHsoeCkgPT4geC5jbGVhckxpc3QoKX1cIiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXHJcbiAgICAgID5DbGVhciBMaXN0PC9mYXN0LWJ1dHRvblxyXG4gICAgPlxyXG4gICAgPGJyZWVkLXNlbGVjdG9yIGhhbmRsZUFkZEJyZWVkPVwiJHt4ID0+IHguaGFuZGxlQWRkQnJlZWR9XCI+PC9icmVlZC1zZWxlY3Rvcj5cclxuICA8L2Rpdj5cclxuXHJcbiAgJHt3aGVuKFxyXG4gICAgKHgpID0+ICF4LnJlYWR5LFxyXG4gICAgaHRtbDxCcmVlZFNlYXJjaD5gIDxkaXYgY2xhc3M9XCJwdC0xXCI+TG9hZGluZy4uLjwvZGl2PmBcclxuICApfVxyXG5cclxuICA8ZGl2IGNsYXNzPVwiYnJlZWQtbGlzdFwiPlxyXG4gICAgJHtyZXBlYXQoXHJcbiAgICAgICh4KSA9PiB4LmJyZWVkcyxcclxuICAgICAgaHRtbDxCcmVlZFNlYXJjaD5gIDxkb2ctY2FyZCB1cmw9XCIkeyh4KSA9PiB4fVwiPjwvZG9nLWNhcmQ+IGBcclxuICAgICl9XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLmNvbnRyb2xzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDJlbTtcclxuICB9XHJcblxyXG4gIC5icmVlZC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDJlbTtcclxuICB9XHJcblxyXG4gIC5wdC0xIHtcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZmV0Y2hSYW5kb21CcmVlZCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvaW1hZ2UvcmFuZG9tXCIpO1xyXG4gIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG5AY3VzdG9tRWxlbWVudCh7IG5hbWU6IFwiYnJlZWQtc2VhcmNoXCIsIHRlbXBsYXRlLCBzdHlsZXMgfSlcclxuZXhwb3J0IGNsYXNzIEJyZWVkU2VhcmNoIGV4dGVuZHMgRkFTVEVsZW1lbnQge1xyXG4gIEBvYnNlcnZhYmxlIHJlYWR5OiBib29sZWFuID0gdHJ1ZTtcclxuICBAb2JzZXJ2YWJsZSBicmVlZHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGFzeW5jIGhhbmRsZUdldFJhbmRvbUJyZWVkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgYnJlZWQgPSBhd2FpdCBmZXRjaFJhbmRvbUJyZWVkKCk7XHJcblxyXG4gICAgdGhpcy5icmVlZHMudW5zaGlmdChicmVlZC5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZEJyZWVkKHVybDogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgaGFuZGxlQWRkQnJlZWQgdXJsID0gJHt1cmx9YClcclxuICB9XHJcblxyXG4gIGNsZWFyTGlzdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnJlZWRzID0gW107XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhhNTdiN2VhM2YxMTNmODU3MTc4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9