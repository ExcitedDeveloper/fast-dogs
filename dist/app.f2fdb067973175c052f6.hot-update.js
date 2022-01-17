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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
  <fast-button appearance="primary">Random Breed</fast-button>
  <dog-card
    breed="Hound - Afghan"
    url="https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1954.jpg"
  ></dog-card>
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
const handleGetRandomBreed = () => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const card = document.querySelector("dog-card");
    if (!card)
        return;
    const breed = yield fetchRandomBreed();
    card.url = breed.message;
    card.breed = getBreedName(card.url);
});
const fetchRandomBreed = () => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://dog.ceo/api/breeds/image/random");
    return yield response.json();
});
let BreedSearch = class BreedSearch extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.FASTElement {
    connectedCallback() {
        console.log(`BreedSearch 1`);
        const btn = document.querySelector("fast-button");
        if (!btn)
            return;
        btn.addEventListener("click", handleGetRandomBreed);
    }
};
BreedSearch = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.customElement)({ name: "breed-search", template })
], BreedSearch);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2fe9214226370c81af66")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmYyZmRiMDY3OTczMTc1YzA1MmY2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaUM7QUFHakMsTUFBTSxRQUFRLEdBQUcseURBQUksQ0FBYTs7Ozs7O0NBTWpDLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO0lBQ25DLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrQkFBa0IsQ0FBQztJQUVwQyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXpDLElBQUksU0FBUyxHQUFHLENBQUM7UUFBRSxPQUFPLCtCQUErQixDQUFDO0lBRTFELE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVqRCxJQUFJLFFBQVEsR0FBRyxDQUFDO1FBQUUsT0FBTyw2QkFBNkIsQ0FBQztJQUV2RCxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsQ0FBQztRQUFFLE9BQU8sMEJBQTBCLENBQUM7SUFFaEUsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRTNELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFekMsSUFBSSxPQUFPLEdBQUcsQ0FBQztRQUFFLE9BQU8sV0FBVyxDQUFDO0lBRXBDLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFckMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRixNQUFNLG9CQUFvQixHQUFHLEdBQVMsRUFBRSxDQUFDO0lBQ3ZDLE1BQU0sSUFBSSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRWhFLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTztJQUVsQixNQUFNLEtBQUssR0FBRyxNQUFNLGdCQUFnQixFQUFFLENBQUM7SUFDdkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QyxDQUFDLEVBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHLEdBQVMsRUFBRSxDQUFDO0lBQ25DLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDeEUsT0FBTyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMvQixDQUFDLEVBQUM7QUFHRixJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsZ0VBQVc7SUFDMUMsaUJBQWlCO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUVqQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUNGO0FBVFksV0FBVztJQUR2QixzRUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsQ0FBQztHQUNyQyxXQUFXLENBU3ZCO0FBVHVCOzs7Ozs7Ozs7VUN6RHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdC1kb2dzLy4vc3JjL2NvbXBvbmVudHMvYnJlZWQtc2VhcmNoLnRzIiwid2VicGFjazovL2Zhc3QtZG9ncy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGQVNURWxlbWVudCxcclxuICBjdXN0b21FbGVtZW50LFxyXG4gIGF0dHIsXHJcbiAgaHRtbCxcclxuICBjc3MsXHJcbn0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC1lbGVtZW50XCI7XHJcbmltcG9ydCB7IERvZ0NhcmQgfSBmcm9tIFwiLi9kb2ctY2FyZFwiO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBodG1sPEJyZWVkU2VhcmNoPmBcclxuICA8ZmFzdC1idXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIj5SYW5kb20gQnJlZWQ8L2Zhc3QtYnV0dG9uPlxyXG4gIDxkb2ctY2FyZFxyXG4gICAgYnJlZWQ9XCJIb3VuZCAtIEFmZ2hhblwiXHJcbiAgICB1cmw9XCJodHRwczovL2ltYWdlcy5kb2cuY2VvL2JyZWVkcy93b2xmaG91bmQtaXJpc2gvbjAyMDkwNzIxXzE5NTQuanBnXCJcclxuICA+PC9kb2ctY2FyZD5cclxuYDtcclxuXHJcbmNvbnN0IGdldEJyZWVkTmFtZSA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gIGlmICghdXJsKSByZXR1cm4gYEVSUk9SOiBVUkwgZW1wdHlgO1xyXG5cclxuICBjb25zdCBicmVlZHNQb3MgPSB1cmwuaW5kZXhPZihgYnJlZWRzL2ApO1xyXG5cclxuICBpZiAoYnJlZWRzUG9zIDwgMCkgcmV0dXJuIGBFUlJPUjogQ291bGQgbm90IGZpbmQgYnJlZWRzL2A7XHJcblxyXG4gIGNvbnN0IHNsYXNoUG9zID0gdXJsLmluZGV4T2YoXCIvXCIsIGJyZWVkc1BvcyArIDcpO1xyXG5cclxuICBpZiAoc2xhc2hQb3MgPCAwKSByZXR1cm4gYEVSUk9SOiBDb3VsZCBub3QgZmluZCBzbGFzaGA7XHJcblxyXG4gIGlmIChzbGFzaFBvcyA8IGJyZWVkc1BvcyArIDcpIHJldHVybiBgRVJST1I6IFBvc2l0aW9ucyBpbnZhbGlkYDtcclxuXHJcbiAgY29uc3QgYnJlZWRTdWJzdHIgPSB1cmwuc3Vic3RyaW5nKGJyZWVkc1BvcyArIDcsIHNsYXNoUG9zKTtcclxuXHJcbiAgY29uc3QgZGFzaFBvcyA9IGJyZWVkU3Vic3RyLmluZGV4T2YoXCItXCIpO1xyXG5cclxuICBpZiAoZGFzaFBvcyA8IDApIHJldHVybiBicmVlZFN1YnN0cjtcclxuXHJcbiAgY29uc3QgcGFydHMgPSBicmVlZFN1YnN0ci5zcGxpdChcIi1cIik7XHJcblxyXG4gIHJldHVybiBgJHtwYXJ0c1sxXX0gJHtwYXJ0c1swXX1gO1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlR2V0UmFuZG9tQnJlZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY2FyZDogRG9nQ2FyZCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZG9nLWNhcmRcIik7XHJcblxyXG4gIGlmICghY2FyZCkgcmV0dXJuO1xyXG5cclxuICBjb25zdCBicmVlZCA9IGF3YWl0IGZldGNoUmFuZG9tQnJlZWQoKTtcclxuICBjYXJkLnVybCA9IGJyZWVkLm1lc3NhZ2U7XHJcbiAgY2FyZC5icmVlZCA9IGdldEJyZWVkTmFtZShjYXJkLnVybCk7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaFJhbmRvbUJyZWVkID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9pbWFnZS9yYW5kb21cIik7XHJcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbkBjdXN0b21FbGVtZW50KHsgbmFtZTogXCJicmVlZC1zZWFyY2hcIiwgdGVtcGxhdGUgfSlcclxuZXhwb3J0IGNsYXNzIEJyZWVkU2VhcmNoIGV4dGVuZHMgRkFTVEVsZW1lbnQge1xyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coYEJyZWVkU2VhcmNoIDFgKTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmYXN0LWJ1dHRvblwiKTtcclxuXHJcbiAgICBpZiAoIWJ0bikgcmV0dXJuO1xyXG5cclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlR2V0UmFuZG9tQnJlZWQpO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyZmU5MjE0MjI2MzcwYzgxYWY2NlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==