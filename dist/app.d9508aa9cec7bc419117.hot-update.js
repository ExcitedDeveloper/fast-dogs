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
/******/ 	__webpack_require__.h = () => ("f2fdb067973175c052f6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmQ5NTA4YWE5Y2VjN2JjNDE5MTE3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaUM7QUFHakMsTUFBTSxRQUFRLEdBQUcseURBQUksQ0FBYTs7Ozs7O0NBTWpDLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO0lBQ25DLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrQkFBa0IsQ0FBQztJQUVwQyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXpDLElBQUksU0FBUyxHQUFHLENBQUM7UUFBRSxPQUFPLCtCQUErQixDQUFDO0lBRTFELE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVqRCxJQUFJLFFBQVEsR0FBRyxDQUFDO1FBQUUsT0FBTyw2QkFBNkIsQ0FBQztJQUV2RCxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsQ0FBQztRQUFFLE9BQU8sMEJBQTBCLENBQUM7SUFFaEUsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRTNELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFekMsSUFBSSxPQUFPLEdBQUcsQ0FBQztRQUFFLE9BQU8sV0FBVyxDQUFDO0lBRXBDLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFckMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRixNQUFNLG9CQUFvQixHQUFHLEdBQVMsRUFBRSxDQUFDO0lBQ3ZDLE1BQU0sSUFBSSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRWhFLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTztJQUVsQixNQUFNLEtBQUssR0FBRyxNQUFNLGdCQUFnQixFQUFFLENBQUM7SUFDdkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QyxDQUFDLEVBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHLEdBQVMsRUFBRSxDQUFDO0lBQ25DLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDeEUsT0FBTyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMvQixDQUFDLEVBQUM7QUFHRixJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsZ0VBQVc7SUFDMUMsaUJBQWlCO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7UUFDOUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFFakIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRjtBQVRZLFdBQVc7SUFEdkIsc0VBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLENBQUM7R0FDckMsV0FBVyxDQVN2QjtBQVR1Qjs7Ozs7Ozs7O1VDekR4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtZG9ncy8uL3NyYy9jb21wb25lbnRzL2JyZWVkLXNlYXJjaC50cyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3Mvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRkFTVEVsZW1lbnQsXHJcbiAgY3VzdG9tRWxlbWVudCxcclxuICBhdHRyLFxyXG4gIGh0bWwsXHJcbiAgY3NzLFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBEb2dDYXJkIH0gZnJvbSBcIi4vZG9nLWNhcmRcIjtcclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gaHRtbDxCcmVlZFNlYXJjaD5gXHJcbiAgPGZhc3QtYnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCI+UmFuZG9tIEJyZWVkPC9mYXN0LWJ1dHRvbj5cclxuICA8ZG9nLWNhcmRcclxuICAgIGJyZWVkPVwiSG91bmQgLSBBZmdoYW5cIlxyXG4gICAgdXJsPVwiaHR0cHM6Ly9pbWFnZXMuZG9nLmNlby9icmVlZHMvd29sZmhvdW5kLWlyaXNoL24wMjA5MDcyMV8xOTU0LmpwZ1wiXHJcbiAgPjwvZG9nLWNhcmQ+XHJcbmA7XHJcblxyXG5jb25zdCBnZXRCcmVlZE5hbWUgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICBpZiAoIXVybCkgcmV0dXJuIGBFUlJPUjogVVJMIGVtcHR5YDtcclxuXHJcbiAgY29uc3QgYnJlZWRzUG9zID0gdXJsLmluZGV4T2YoYGJyZWVkcy9gKTtcclxuXHJcbiAgaWYgKGJyZWVkc1BvcyA8IDApIHJldHVybiBgRVJST1I6IENvdWxkIG5vdCBmaW5kIGJyZWVkcy9gO1xyXG5cclxuICBjb25zdCBzbGFzaFBvcyA9IHVybC5pbmRleE9mKFwiL1wiLCBicmVlZHNQb3MgKyA3KTtcclxuXHJcbiAgaWYgKHNsYXNoUG9zIDwgMCkgcmV0dXJuIGBFUlJPUjogQ291bGQgbm90IGZpbmQgc2xhc2hgO1xyXG5cclxuICBpZiAoc2xhc2hQb3MgPCBicmVlZHNQb3MgKyA3KSByZXR1cm4gYEVSUk9SOiBQb3NpdGlvbnMgaW52YWxpZGA7XHJcblxyXG4gIGNvbnN0IGJyZWVkU3Vic3RyID0gdXJsLnN1YnN0cmluZyhicmVlZHNQb3MgKyA3LCBzbGFzaFBvcyk7XHJcblxyXG4gIGNvbnN0IGRhc2hQb3MgPSBicmVlZFN1YnN0ci5pbmRleE9mKFwiLVwiKTtcclxuXHJcbiAgaWYgKGRhc2hQb3MgPCAwKSByZXR1cm4gYnJlZWRTdWJzdHI7XHJcblxyXG4gIGNvbnN0IHBhcnRzID0gYnJlZWRTdWJzdHIuc3BsaXQoXCItXCIpO1xyXG5cclxuICByZXR1cm4gYCR7cGFydHNbMV19ICR7cGFydHNbMF19YDtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUdldFJhbmRvbUJyZWVkID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGNhcmQ6IERvZ0NhcmQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRvZy1jYXJkXCIpO1xyXG5cclxuICBpZiAoIWNhcmQpIHJldHVybjtcclxuXHJcbiAgY29uc3QgYnJlZWQgPSBhd2FpdCBmZXRjaFJhbmRvbUJyZWVkKCk7XHJcbiAgY2FyZC51cmwgPSBicmVlZC5tZXNzYWdlO1xyXG4gIGNhcmQuYnJlZWQgPSBnZXRCcmVlZE5hbWUoY2FyZC51cmwpO1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hSYW5kb21CcmVlZCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvaW1hZ2UvcmFuZG9tXCIpO1xyXG4gIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG5AY3VzdG9tRWxlbWVudCh7IG5hbWU6IFwiYnJlZWQtc2VhcmNoXCIsIHRlbXBsYXRlIH0pXHJcbmV4cG9ydCBjbGFzcyBCcmVlZFNlYXJjaCBleHRlbmRzIEZBU1RFbGVtZW50IHtcclxuICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgICAgY29uc29sZS5sb2coYEJyZWVkU2VhcmNoIDFgKVxyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZhc3QtYnV0dG9uXCIpO1xyXG5cclxuICAgIGlmICghYnRuKSByZXR1cm47XHJcblxyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVHZXRSYW5kb21CcmVlZCk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImYyZmRiMDY3OTczMTc1YzA1MmY2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9