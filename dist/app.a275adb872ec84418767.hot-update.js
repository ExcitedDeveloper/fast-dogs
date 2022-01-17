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
const fetchRandomBreed = () => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://dog.ceo/api/breeds/image/random");
    return yield response.json();
});
let BreedSearch = class BreedSearch extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.FASTElement {
    connectedCallback() {
        super.connectedCallback();
        const btn = this.shadowRoot.querySelector("fast-button");
        if (!btn)
            return;
        btn.addEventListener("click", this.handleGetRandomBreed);
    }
    handleGetRandomBreed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const card = this.shadowRoot.querySelector("dog-card");
            console.log(`handleGetRandomBreed 1 card = ${card}`);
            if (!card)
                return;
            console.log(`handleGetRandomBreed 2`);
            const breed = yield fetchRandomBreed();
            card.url = breed.message;
            card.breed = getBreedName(card.url);
        });
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
/******/ 	__webpack_require__.h = () => ("8e8c7cc9f35851f291b1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmEyNzVhZGI4NzJlYzg0NDE4NzY3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaUM7QUFHakMsTUFBTSxRQUFRLEdBQUcseURBQUksQ0FBYTs7Ozs7O0NBTWpDLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO0lBQ25DLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrQkFBa0IsQ0FBQztJQUVwQyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXpDLElBQUksU0FBUyxHQUFHLENBQUM7UUFBRSxPQUFPLCtCQUErQixDQUFDO0lBRTFELE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVqRCxJQUFJLFFBQVEsR0FBRyxDQUFDO1FBQUUsT0FBTyw2QkFBNkIsQ0FBQztJQUV2RCxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsQ0FBQztRQUFFLE9BQU8sMEJBQTBCLENBQUM7SUFFaEUsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRTNELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFekMsSUFBSSxPQUFPLEdBQUcsQ0FBQztRQUFFLE9BQU8sV0FBVyxDQUFDO0lBRXBDLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFckMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHLEdBQVMsRUFBRSxDQUFDO0lBQ25DLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDeEUsT0FBTyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMvQixDQUFDLEVBQUM7QUFHRixJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsZ0VBQVc7SUFDMUMsaUJBQWlCO1FBQ2YsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFMUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBRWpCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVLLG9CQUFvQjs7WUFFeEIsTUFBTSxJQUFJLEdBQW1CLElBQUksQ0FBQyxVQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRXhFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFdEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQztLQUFBO0NBQ0Y7QUF2QlksV0FBVztJQUR2QixzRUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsQ0FBQztHQUNyQyxXQUFXLENBdUJ2QjtBQXZCdUI7Ozs7Ozs7OztVQy9DeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9zcmMvY29tcG9uZW50cy9icmVlZC1zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZBU1RFbGVtZW50LFxyXG4gIGN1c3RvbUVsZW1lbnQsXHJcbiAgYXR0cixcclxuICBodG1sLFxyXG4gIGNzcyxcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgRG9nQ2FyZCB9IGZyb20gXCIuL2RvZy1jYXJkXCI7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8QnJlZWRTZWFyY2g+YFxyXG4gIDxmYXN0LWJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiPlJhbmRvbSBCcmVlZDwvZmFzdC1idXR0b24+XHJcbiAgPGRvZy1jYXJkXHJcbiAgICBicmVlZD1cIkhvdW5kIC0gQWZnaGFuXCJcclxuICAgIHVybD1cImh0dHBzOi8vaW1hZ2VzLmRvZy5jZW8vYnJlZWRzL3dvbGZob3VuZC1pcmlzaC9uMDIwOTA3MjFfMTk1NC5qcGdcIlxyXG4gID48L2RvZy1jYXJkPlxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QnJlZWROYW1lID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKCF1cmwpIHJldHVybiBgRVJST1I6IFVSTCBlbXB0eWA7XHJcblxyXG4gIGNvbnN0IGJyZWVkc1BvcyA9IHVybC5pbmRleE9mKGBicmVlZHMvYCk7XHJcblxyXG4gIGlmIChicmVlZHNQb3MgPCAwKSByZXR1cm4gYEVSUk9SOiBDb3VsZCBub3QgZmluZCBicmVlZHMvYDtcclxuXHJcbiAgY29uc3Qgc2xhc2hQb3MgPSB1cmwuaW5kZXhPZihcIi9cIiwgYnJlZWRzUG9zICsgNyk7XHJcblxyXG4gIGlmIChzbGFzaFBvcyA8IDApIHJldHVybiBgRVJST1I6IENvdWxkIG5vdCBmaW5kIHNsYXNoYDtcclxuXHJcbiAgaWYgKHNsYXNoUG9zIDwgYnJlZWRzUG9zICsgNykgcmV0dXJuIGBFUlJPUjogUG9zaXRpb25zIGludmFsaWRgO1xyXG5cclxuICBjb25zdCBicmVlZFN1YnN0ciA9IHVybC5zdWJzdHJpbmcoYnJlZWRzUG9zICsgNywgc2xhc2hQb3MpO1xyXG5cclxuICBjb25zdCBkYXNoUG9zID0gYnJlZWRTdWJzdHIuaW5kZXhPZihcIi1cIik7XHJcblxyXG4gIGlmIChkYXNoUG9zIDwgMCkgcmV0dXJuIGJyZWVkU3Vic3RyO1xyXG5cclxuICBjb25zdCBwYXJ0cyA9IGJyZWVkU3Vic3RyLnNwbGl0KFwiLVwiKTtcclxuXHJcbiAgcmV0dXJuIGAke3BhcnRzWzFdfSAke3BhcnRzWzBdfWA7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaFJhbmRvbUJyZWVkID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9pbWFnZS9yYW5kb21cIik7XHJcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbkBjdXN0b21FbGVtZW50KHsgbmFtZTogXCJicmVlZC1zZWFyY2hcIiwgdGVtcGxhdGUgfSlcclxuZXhwb3J0IGNsYXNzIEJyZWVkU2VhcmNoIGV4dGVuZHMgRkFTVEVsZW1lbnQge1xyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuXHJcbiAgICBjb25zdCBidG4gPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJmYXN0LWJ1dHRvblwiKTtcclxuXHJcbiAgICBpZiAoIWJ0bikgcmV0dXJuO1xyXG5cclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVHZXRSYW5kb21CcmVlZCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVHZXRSYW5kb21CcmVlZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2FyZDogRG9nQ2FyZCB8IG51bGwgPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJkb2ctY2FyZFwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgaGFuZGxlR2V0UmFuZG9tQnJlZWQgMSBjYXJkID0gJHtjYXJkfWApO1xyXG4gICAgaWYgKCFjYXJkKSByZXR1cm47XHJcbiAgICBjb25zb2xlLmxvZyhgaGFuZGxlR2V0UmFuZG9tQnJlZWQgMmApO1xyXG5cclxuICAgIGNvbnN0IGJyZWVkID0gYXdhaXQgZmV0Y2hSYW5kb21CcmVlZCgpO1xyXG4gICAgY2FyZC51cmwgPSBicmVlZC5tZXNzYWdlO1xyXG4gICAgY2FyZC5icmVlZCA9IGdldEJyZWVkTmFtZShjYXJkLnVybCk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhlOGM3Y2M5ZjM1ODUxZjI5MWIxXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9