"use strict";
self["webpackHotUpdatefast_dogs"]("app",{

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/when.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/when.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "when": () => (/* binding */ when)
/* harmony export */ });
/**
 * A directive that enables basic conditional rendering in a template.
 * @param binding - The condition to test for rendering.
 * @param templateOrTemplateBinding - The template or a binding that gets
 * the template to render when the condition is true.
 * @public
 */
function when(binding, templateOrTemplateBinding) {
    const getTemplate = typeof templateOrTemplateBinding === "function"
        ? templateOrTemplateBinding
        : () => templateOrTemplateBinding;
    return (source, context) => binding(source, context) ? getTemplate(source, context) : null;
}


/***/ }),

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

  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.when)((x) => !x.ready, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` Loading... `)}
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
/******/ 	__webpack_require__.h = () => ("ee51c55b33c4180ee88d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmM5NTM5ZmEwOGYyMDNmMWRhZmU0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKaUM7QUFHakMsTUFBTSxRQUFRLEdBQUcseURBQUksQ0FBYTs7O0lBRzlCLDZEQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSx5REFBSSxDQUFhLGNBQWMsQ0FBQztJQUN0RCw2REFBSSxDQUNKLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNkLHlEQUFJLENBQWE7Ozs7O0tBS2hCLENBQ0Y7Q0FDRixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtJQUNuQyxJQUFJLENBQUMsR0FBRztRQUFFLE9BQU8sa0JBQWtCLENBQUM7SUFFcEMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV6QyxJQUFJLFNBQVMsR0FBRyxDQUFDO1FBQUUsT0FBTywrQkFBK0IsQ0FBQztJQUUxRCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFakQsSUFBSSxRQUFRLEdBQUcsQ0FBQztRQUFFLE9BQU8sNkJBQTZCLENBQUM7SUFFdkQsSUFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUM7UUFBRSxPQUFPLDBCQUEwQixDQUFDO0lBRWhFLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUUzRCxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXpDLElBQUksT0FBTyxHQUFHLENBQUM7UUFBRSxPQUFPLFdBQVcsQ0FBQztJQUVwQyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXJDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxnQkFBZ0IsR0FBRyxHQUFTLEVBQUUsQ0FBQztJQUNuQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ3hFLE9BQU8sTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0IsQ0FBQyxFQUFDO0FBR0YsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBWSxTQUFRLGdFQUFXO0lBQTVDOztRQUNjLFVBQUssR0FBWSxLQUFLLENBQUM7SUFxQnJDLENBQUM7SUFuQkMsaUJBQWlCO1FBQ2YsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFMUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBRWpCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFSyxvQkFBb0I7O1lBQ3hCLE1BQU0sSUFBSSxHQUFtQixJQUFJLENBQUMsVUFBVyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV4RSxJQUFJLENBQUMsSUFBSTtnQkFBRSxPQUFPO1lBRWxCLE1BQU0sS0FBSyxHQUFHLE1BQU0sZ0JBQWdCLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtDQUNGO0FBckJhO0lBQVgsK0RBQVU7MENBQXdCO0FBRHhCLFdBQVc7SUFEdkIsc0VBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLENBQUM7R0FDckMsV0FBVyxDQXNCdkI7QUF0QnVCOzs7Ozs7Ozs7VUN4RHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdC1kb2dzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3RlbXBsYXRpbmcvd2hlbi5qcyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9zcmMvY29tcG9uZW50cy9icmVlZC1zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgZW5hYmxlcyBiYXNpYyBjb25kaXRpb25hbCByZW5kZXJpbmcgaW4gYSB0ZW1wbGF0ZS5cbiAqIEBwYXJhbSBiaW5kaW5nIC0gVGhlIGNvbmRpdGlvbiB0byB0ZXN0IGZvciByZW5kZXJpbmcuXG4gKiBAcGFyYW0gdGVtcGxhdGVPclRlbXBsYXRlQmluZGluZyAtIFRoZSB0ZW1wbGF0ZSBvciBhIGJpbmRpbmcgdGhhdCBnZXRzXG4gKiB0aGUgdGVtcGxhdGUgdG8gcmVuZGVyIHdoZW4gdGhlIGNvbmRpdGlvbiBpcyB0cnVlLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gd2hlbihiaW5kaW5nLCB0ZW1wbGF0ZU9yVGVtcGxhdGVCaW5kaW5nKSB7XG4gICAgY29uc3QgZ2V0VGVtcGxhdGUgPSB0eXBlb2YgdGVtcGxhdGVPclRlbXBsYXRlQmluZGluZyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gdGVtcGxhdGVPclRlbXBsYXRlQmluZGluZ1xuICAgICAgICA6ICgpID0+IHRlbXBsYXRlT3JUZW1wbGF0ZUJpbmRpbmc7XG4gICAgcmV0dXJuIChzb3VyY2UsIGNvbnRleHQpID0+IGJpbmRpbmcoc291cmNlLCBjb250ZXh0KSA/IGdldFRlbXBsYXRlKHNvdXJjZSwgY29udGV4dCkgOiBudWxsO1xufVxuIiwiaW1wb3J0IHtcclxuICBGQVNURWxlbWVudCxcclxuICBjdXN0b21FbGVtZW50LFxyXG4gIGF0dHIsXHJcbiAgaHRtbCxcclxuICBjc3MsXHJcbiAgb2JzZXJ2YWJsZSxcclxuICB3aGVuLFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBEb2dDYXJkIH0gZnJvbSBcIi4vZG9nLWNhcmRcIjtcclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gaHRtbDxCcmVlZFNlYXJjaD5gXHJcbiAgPGZhc3QtYnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCI+UmFuZG9tIEJyZWVkPC9mYXN0LWJ1dHRvbj5cclxuXHJcbiAgJHt3aGVuKCh4KSA9PiAheC5yZWFkeSwgaHRtbDxCcmVlZFNlYXJjaD5gIExvYWRpbmcuLi4gYCl9XHJcbiAgJHt3aGVuKFxyXG4gICAgKHgpID0+IHgucmVhZHksXHJcbiAgICBodG1sPEJyZWVkU2VhcmNoPmBcclxuICAgICAgPGRvZy1jYXJkXHJcbiAgICAgICAgYnJlZWQ9XCJIb3VuZCAtIEFmZ2hhblwiXHJcbiAgICAgICAgdXJsPVwiaHR0cHM6Ly9pbWFnZXMuZG9nLmNlby9icmVlZHMvd29sZmhvdW5kLWlyaXNoL24wMjA5MDcyMV8xOTU0LmpwZ1wiXHJcbiAgICAgID48L2RvZy1jYXJkPlxyXG4gICAgYFxyXG4gICl9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRCcmVlZE5hbWUgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICBpZiAoIXVybCkgcmV0dXJuIGBFUlJPUjogVVJMIGVtcHR5YDtcclxuXHJcbiAgY29uc3QgYnJlZWRzUG9zID0gdXJsLmluZGV4T2YoYGJyZWVkcy9gKTtcclxuXHJcbiAgaWYgKGJyZWVkc1BvcyA8IDApIHJldHVybiBgRVJST1I6IENvdWxkIG5vdCBmaW5kIGJyZWVkcy9gO1xyXG5cclxuICBjb25zdCBzbGFzaFBvcyA9IHVybC5pbmRleE9mKFwiL1wiLCBicmVlZHNQb3MgKyA3KTtcclxuXHJcbiAgaWYgKHNsYXNoUG9zIDwgMCkgcmV0dXJuIGBFUlJPUjogQ291bGQgbm90IGZpbmQgc2xhc2hgO1xyXG5cclxuICBpZiAoc2xhc2hQb3MgPCBicmVlZHNQb3MgKyA3KSByZXR1cm4gYEVSUk9SOiBQb3NpdGlvbnMgaW52YWxpZGA7XHJcblxyXG4gIGNvbnN0IGJyZWVkU3Vic3RyID0gdXJsLnN1YnN0cmluZyhicmVlZHNQb3MgKyA3LCBzbGFzaFBvcyk7XHJcblxyXG4gIGNvbnN0IGRhc2hQb3MgPSBicmVlZFN1YnN0ci5pbmRleE9mKFwiLVwiKTtcclxuXHJcbiAgaWYgKGRhc2hQb3MgPCAwKSByZXR1cm4gYnJlZWRTdWJzdHI7XHJcblxyXG4gIGNvbnN0IHBhcnRzID0gYnJlZWRTdWJzdHIuc3BsaXQoXCItXCIpO1xyXG5cclxuICByZXR1cm4gYCR7cGFydHNbMV19ICR7cGFydHNbMF19YDtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoUmFuZG9tQnJlZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2ltYWdlL3JhbmRvbVwiKTtcclxuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoeyBuYW1lOiBcImJyZWVkLXNlYXJjaFwiLCB0ZW1wbGF0ZSB9KVxyXG5leHBvcnQgY2xhc3MgQnJlZWRTZWFyY2ggZXh0ZW5kcyBGQVNURWxlbWVudCB7XHJcbiAgQG9ic2VydmFibGUgcmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgIGNvbnN0IGJ0biA9IHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImZhc3QtYnV0dG9uXCIpO1xyXG5cclxuICAgIGlmICghYnRuKSByZXR1cm47XHJcblxyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUdldFJhbmRvbUJyZWVkLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlR2V0UmFuZG9tQnJlZWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBjYXJkOiBEb2dDYXJkIHwgbnVsbCA9IHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImRvZy1jYXJkXCIpO1xyXG5cclxuICAgIGlmICghY2FyZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGJyZWVkID0gYXdhaXQgZmV0Y2hSYW5kb21CcmVlZCgpO1xyXG4gICAgY2FyZC51cmwgPSBicmVlZC5tZXNzYWdlO1xyXG4gICAgY2FyZC5icmVlZCA9IGdldEJyZWVkTmFtZShjYXJkLnVybCk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVlNTFjNTViMzNjNDE4MGVlODhkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9