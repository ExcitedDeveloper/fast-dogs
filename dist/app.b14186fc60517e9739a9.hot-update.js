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
        super.connectedCallback();
        const btn = document.querySelector("fast-button");
        console.log(`connectedCallback 1`);
        if (!btn)
            return;
        console.log(`connectedCallback 2`);
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
/******/ 	__webpack_require__.h = () => ("6afa6520adf12678949f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmIxNDE4NmZjNjA1MTdlOTczOWE5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaUM7QUFHakMsTUFBTSxRQUFRLEdBQUcseURBQUksQ0FBYTs7Ozs7O0NBTWpDLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO0lBQ25DLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrQkFBa0IsQ0FBQztJQUVwQyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXpDLElBQUksU0FBUyxHQUFHLENBQUM7UUFBRSxPQUFPLCtCQUErQixDQUFDO0lBRTFELE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVqRCxJQUFJLFFBQVEsR0FBRyxDQUFDO1FBQUUsT0FBTyw2QkFBNkIsQ0FBQztJQUV2RCxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsQ0FBQztRQUFFLE9BQU8sMEJBQTBCLENBQUM7SUFFaEUsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRTNELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFekMsSUFBSSxPQUFPLEdBQUcsQ0FBQztRQUFFLE9BQU8sV0FBVyxDQUFDO0lBRXBDLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFckMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRixNQUFNLG9CQUFvQixHQUFHLEdBQVMsRUFBRSxDQUFDO0lBQ3ZDLE1BQU0sSUFBSSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRWhFLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTztJQUVsQixNQUFNLEtBQUssR0FBRyxNQUFNLGdCQUFnQixFQUFFLENBQUM7SUFDdkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QyxDQUFDLEVBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHLEdBQVMsRUFBRSxDQUFDO0lBQ25DLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDeEUsT0FBTyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMvQixDQUFDLEVBQUM7QUFHRixJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsZ0VBQVc7SUFDMUMsaUJBQWlCO1FBQ2YsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFMUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVsRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1FBRWxDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0Y7QUFaWSxXQUFXO0lBRHZCLHNFQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxDQUFDO0dBQ3JDLFdBQVcsQ0FZdkI7QUFadUI7Ozs7Ozs7OztVQ3pEeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9zcmMvY29tcG9uZW50cy9icmVlZC1zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZBU1RFbGVtZW50LFxyXG4gIGN1c3RvbUVsZW1lbnQsXHJcbiAgYXR0cixcclxuICBodG1sLFxyXG4gIGNzcyxcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgRG9nQ2FyZCB9IGZyb20gXCIuL2RvZy1jYXJkXCI7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8QnJlZWRTZWFyY2g+YFxyXG4gIDxmYXN0LWJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiPlJhbmRvbSBCcmVlZDwvZmFzdC1idXR0b24+XHJcbiAgPGRvZy1jYXJkXHJcbiAgICBicmVlZD1cIkhvdW5kIC0gQWZnaGFuXCJcclxuICAgIHVybD1cImh0dHBzOi8vaW1hZ2VzLmRvZy5jZW8vYnJlZWRzL3dvbGZob3VuZC1pcmlzaC9uMDIwOTA3MjFfMTk1NC5qcGdcIlxyXG4gID48L2RvZy1jYXJkPlxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QnJlZWROYW1lID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKCF1cmwpIHJldHVybiBgRVJST1I6IFVSTCBlbXB0eWA7XHJcblxyXG4gIGNvbnN0IGJyZWVkc1BvcyA9IHVybC5pbmRleE9mKGBicmVlZHMvYCk7XHJcblxyXG4gIGlmIChicmVlZHNQb3MgPCAwKSByZXR1cm4gYEVSUk9SOiBDb3VsZCBub3QgZmluZCBicmVlZHMvYDtcclxuXHJcbiAgY29uc3Qgc2xhc2hQb3MgPSB1cmwuaW5kZXhPZihcIi9cIiwgYnJlZWRzUG9zICsgNyk7XHJcblxyXG4gIGlmIChzbGFzaFBvcyA8IDApIHJldHVybiBgRVJST1I6IENvdWxkIG5vdCBmaW5kIHNsYXNoYDtcclxuXHJcbiAgaWYgKHNsYXNoUG9zIDwgYnJlZWRzUG9zICsgNykgcmV0dXJuIGBFUlJPUjogUG9zaXRpb25zIGludmFsaWRgO1xyXG5cclxuICBjb25zdCBicmVlZFN1YnN0ciA9IHVybC5zdWJzdHJpbmcoYnJlZWRzUG9zICsgNywgc2xhc2hQb3MpO1xyXG5cclxuICBjb25zdCBkYXNoUG9zID0gYnJlZWRTdWJzdHIuaW5kZXhPZihcIi1cIik7XHJcblxyXG4gIGlmIChkYXNoUG9zIDwgMCkgcmV0dXJuIGJyZWVkU3Vic3RyO1xyXG5cclxuICBjb25zdCBwYXJ0cyA9IGJyZWVkU3Vic3RyLnNwbGl0KFwiLVwiKTtcclxuXHJcbiAgcmV0dXJuIGAke3BhcnRzWzFdfSAke3BhcnRzWzBdfWA7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVHZXRSYW5kb21CcmVlZCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjYXJkOiBEb2dDYXJkIHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkb2ctY2FyZFwiKTtcclxuXHJcbiAgaWYgKCFjYXJkKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IGJyZWVkID0gYXdhaXQgZmV0Y2hSYW5kb21CcmVlZCgpO1xyXG4gIGNhcmQudXJsID0gYnJlZWQubWVzc2FnZTtcclxuICBjYXJkLmJyZWVkID0gZ2V0QnJlZWROYW1lKGNhcmQudXJsKTtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoUmFuZG9tQnJlZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2ltYWdlL3JhbmRvbVwiKTtcclxuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoeyBuYW1lOiBcImJyZWVkLXNlYXJjaFwiLCB0ZW1wbGF0ZSB9KVxyXG5leHBvcnQgY2xhc3MgQnJlZWRTZWFyY2ggZXh0ZW5kcyBGQVNURWxlbWVudCB7XHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmYXN0LWJ1dHRvblwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgY29ubmVjdGVkQ2FsbGJhY2sgMWApXHJcbiAgICBpZiAoIWJ0bikgcmV0dXJuO1xyXG4gICAgY29uc29sZS5sb2coYGNvbm5lY3RlZENhbGxiYWNrIDJgKVxyXG5cclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlR2V0UmFuZG9tQnJlZWQpO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2YWZhNjUyMGFkZjEyNjc4OTQ5ZlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==