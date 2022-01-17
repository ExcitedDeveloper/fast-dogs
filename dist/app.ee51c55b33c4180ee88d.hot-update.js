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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/when.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
  <fast-button appearance="primary">Random Breed</fast-button>

  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.when)((x) => !x.ready, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <span>Loading... </span>`)}
  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.when)((x) => x.ready, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
      <dog-card
        breed="Hound - Afghan"
        url="https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1954.jpg"
      ></dog-card>
    `)}
`;
const getBreedName = (url) => {
    if (!url)
        return `ERROR: URL empty`;
    const breedsPos = url.indexOf(`breeds/`);
    if (breedsPos < 0)
        return `ERROR: Could not find breeds/`;
    const slashPos = url.indexOf("/", breedsPos + 7);
    if (slashPos < 0)
        return `ERROR: Could not find slash`;
    if (slashPos < breedsPos + 7)
        return `ERROR: Positions invalid`;
    const breedSubstr = url.substring(breedsPos + 7, slashPos);
    const dashPos = breedSubstr.indexOf("-");
    if (dashPos < 0)
        return breedSubstr;
    const parts = breedSubstr.split("-");
    return `${parts[1]} ${parts[0]}`;
};
const fetchRandomBreed = () => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://dog.ceo/api/breeds/image/random");
    return yield response.json();
});
let BreedSearch = class BreedSearch extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.FASTElement {
    constructor() {
        super(...arguments);
        this.ready = false;
    }
    connectedCallback() {
        super.connectedCallback();
        const btn = this.shadowRoot.querySelector("fast-button");
        if (!btn)
            return;
        btn.addEventListener("click", this.handleGetRandomBreed.bind(this));
    }
    handleGetRandomBreed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const card = this.shadowRoot.querySelector("dog-card");
            if (!card)
                return;
            const breed = yield fetchRandomBreed();
            card.url = breed.message;
            card.breed = getBreedName(card.url);
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], BreedSearch.prototype, "ready", void 0);
BreedSearch = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.customElement)({ name: "breed-search", template })
], BreedSearch);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("644b9234ef9e26c393fd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmVlNTFjNTViMzNjNDE4MGVlODhkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFpQztBQUdqQyxNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFhOzs7SUFHOUIsNkRBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLHlEQUFJLENBQWE7NkJBQ2QsQ0FBQztJQUMxQiw2REFBSSxDQUNKLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNkLHlEQUFJLENBQWE7Ozs7O0tBS2hCLENBQ0Y7Q0FDRixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtJQUNuQyxJQUFJLENBQUMsR0FBRztRQUFFLE9BQU8sa0JBQWtCLENBQUM7SUFFcEMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV6QyxJQUFJLFNBQVMsR0FBRyxDQUFDO1FBQUUsT0FBTywrQkFBK0IsQ0FBQztJQUUxRCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFakQsSUFBSSxRQUFRLEdBQUcsQ0FBQztRQUFFLE9BQU8sNkJBQTZCLENBQUM7SUFFdkQsSUFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUM7UUFBRSxPQUFPLDBCQUEwQixDQUFDO0lBRWhFLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUUzRCxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXpDLElBQUksT0FBTyxHQUFHLENBQUM7UUFBRSxPQUFPLFdBQVcsQ0FBQztJQUVwQyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXJDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxnQkFBZ0IsR0FBRyxHQUFTLEVBQUUsQ0FBQztJQUNuQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ3hFLE9BQU8sTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0IsQ0FBQyxFQUFDO0FBR0YsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBWSxTQUFRLGdFQUFXO0lBQTVDOztRQUNjLFVBQUssR0FBWSxLQUFLLENBQUM7SUFxQnJDLENBQUM7SUFuQkMsaUJBQWlCO1FBQ2YsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFMUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBRWpCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFSyxvQkFBb0I7O1lBQ3hCLE1BQU0sSUFBSSxHQUFtQixJQUFJLENBQUMsVUFBVyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV4RSxJQUFJLENBQUMsSUFBSTtnQkFBRSxPQUFPO1lBRWxCLE1BQU0sS0FBSyxHQUFHLE1BQU0sZ0JBQWdCLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtDQUNGO0FBckJhO0lBQVgsK0RBQVU7MENBQXdCO0FBRHhCLFdBQVc7SUFEdkIsc0VBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLENBQUM7R0FDckMsV0FBVyxDQXNCdkI7QUF0QnVCOzs7Ozs7Ozs7VUN6RHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdC1kb2dzLy4vc3JjL2NvbXBvbmVudHMvYnJlZWQtc2VhcmNoLnRzIiwid2VicGFjazovL2Zhc3QtZG9ncy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGQVNURWxlbWVudCxcclxuICBjdXN0b21FbGVtZW50LFxyXG4gIGF0dHIsXHJcbiAgaHRtbCxcclxuICBjc3MsXHJcbiAgb2JzZXJ2YWJsZSxcclxuICB3aGVuLFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBEb2dDYXJkIH0gZnJvbSBcIi4vZG9nLWNhcmRcIjtcclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gaHRtbDxCcmVlZFNlYXJjaD5gXHJcbiAgPGZhc3QtYnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCI+UmFuZG9tIEJyZWVkPC9mYXN0LWJ1dHRvbj5cclxuXHJcbiAgJHt3aGVuKCh4KSA9PiAheC5yZWFkeSwgaHRtbDxCcmVlZFNlYXJjaD5gXHJcbiAgICA8c3Bhbj5Mb2FkaW5nLi4uIDwvc3Bhbj5gKX1cclxuICAke3doZW4oXHJcbiAgICAoeCkgPT4geC5yZWFkeSxcclxuICAgIGh0bWw8QnJlZWRTZWFyY2g+YFxyXG4gICAgICA8ZG9nLWNhcmRcclxuICAgICAgICBicmVlZD1cIkhvdW5kIC0gQWZnaGFuXCJcclxuICAgICAgICB1cmw9XCJodHRwczovL2ltYWdlcy5kb2cuY2VvL2JyZWVkcy93b2xmaG91bmQtaXJpc2gvbjAyMDkwNzIxXzE5NTQuanBnXCJcclxuICAgICAgPjwvZG9nLWNhcmQ+XHJcbiAgICBgXHJcbiAgKX1cclxuYDtcclxuXHJcbmNvbnN0IGdldEJyZWVkTmFtZSA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gIGlmICghdXJsKSByZXR1cm4gYEVSUk9SOiBVUkwgZW1wdHlgO1xyXG5cclxuICBjb25zdCBicmVlZHNQb3MgPSB1cmwuaW5kZXhPZihgYnJlZWRzL2ApO1xyXG5cclxuICBpZiAoYnJlZWRzUG9zIDwgMCkgcmV0dXJuIGBFUlJPUjogQ291bGQgbm90IGZpbmQgYnJlZWRzL2A7XHJcblxyXG4gIGNvbnN0IHNsYXNoUG9zID0gdXJsLmluZGV4T2YoXCIvXCIsIGJyZWVkc1BvcyArIDcpO1xyXG5cclxuICBpZiAoc2xhc2hQb3MgPCAwKSByZXR1cm4gYEVSUk9SOiBDb3VsZCBub3QgZmluZCBzbGFzaGA7XHJcblxyXG4gIGlmIChzbGFzaFBvcyA8IGJyZWVkc1BvcyArIDcpIHJldHVybiBgRVJST1I6IFBvc2l0aW9ucyBpbnZhbGlkYDtcclxuXHJcbiAgY29uc3QgYnJlZWRTdWJzdHIgPSB1cmwuc3Vic3RyaW5nKGJyZWVkc1BvcyArIDcsIHNsYXNoUG9zKTtcclxuXHJcbiAgY29uc3QgZGFzaFBvcyA9IGJyZWVkU3Vic3RyLmluZGV4T2YoXCItXCIpO1xyXG5cclxuICBpZiAoZGFzaFBvcyA8IDApIHJldHVybiBicmVlZFN1YnN0cjtcclxuXHJcbiAgY29uc3QgcGFydHMgPSBicmVlZFN1YnN0ci5zcGxpdChcIi1cIik7XHJcblxyXG4gIHJldHVybiBgJHtwYXJ0c1sxXX0gJHtwYXJ0c1swXX1gO1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hSYW5kb21CcmVlZCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvaW1hZ2UvcmFuZG9tXCIpO1xyXG4gIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG5AY3VzdG9tRWxlbWVudCh7IG5hbWU6IFwiYnJlZWQtc2VhcmNoXCIsIHRlbXBsYXRlIH0pXHJcbmV4cG9ydCBjbGFzcyBCcmVlZFNlYXJjaCBleHRlbmRzIEZBU1RFbGVtZW50IHtcclxuICBAb2JzZXJ2YWJsZSByZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcblxyXG4gICAgY29uc3QgYnRuID0gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiZmFzdC1idXR0b25cIik7XHJcblxyXG4gICAgaWYgKCFidG4pIHJldHVybjtcclxuXHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlR2V0UmFuZG9tQnJlZWQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVHZXRSYW5kb21CcmVlZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGNhcmQ6IERvZ0NhcmQgfCBudWxsID0gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiZG9nLWNhcmRcIik7XHJcblxyXG4gICAgaWYgKCFjYXJkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgYnJlZWQgPSBhd2FpdCBmZXRjaFJhbmRvbUJyZWVkKCk7XHJcbiAgICBjYXJkLnVybCA9IGJyZWVkLm1lc3NhZ2U7XHJcbiAgICBjYXJkLmJyZWVkID0gZ2V0QnJlZWROYW1lKGNhcmQudXJsKTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjQ0YjkyMzRlZjllMjZjMzkzZmRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=