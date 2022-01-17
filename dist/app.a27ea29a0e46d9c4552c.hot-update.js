"use strict";
self["webpackHotUpdatefast_dogs"]("app",{

/***/ "./node_modules/@microsoft/fast-components/dist/esm/listbox-option/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/listbox-option/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fastOption": () => (/* binding */ fastOption),
/* harmony export */   "ListboxOption": () => (/* reexport safe */ _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.ListboxOption),
/* harmony export */   "optionStyles": () => (/* reexport safe */ _listbox_option_styles__WEBPACK_IMPORTED_MODULE_2__.optionStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.template.js");
/* harmony import */ var _listbox_option_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listbox-option.styles */ "./node_modules/@microsoft/fast-components/dist/esm/listbox-option/listbox-option.styles.js");


/**
 * A function that returns a {@link @microsoft/fast-foundation#ListboxOption} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#listboxOptionTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<fast-option>`
 *
 */
const fastOption = _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.ListboxOption.compose({
    baseName: "option",
    template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.listboxOptionTemplate,
    styles: _listbox_option_styles__WEBPACK_IMPORTED_MODULE_2__.optionStyles,
});
/**
 * Base class for ListboxOption
 * @public
 */




/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/listbox-option/listbox-option.styles.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/listbox-option/listbox-option.styles.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optionStyles": () => (/* binding */ optionStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _design_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../design-tokens */ "./node_modules/@microsoft/fast-components/dist/esm/design-tokens.js");
/* harmony import */ var _styles_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/size */ "./node_modules/@microsoft/fast-components/dist/esm/styles/size.js");





/**
 * Styles for Option
 * @public
 */
const optionStyles = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)("inline-flex")} :host {
        align-items: center;
        font-family: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.bodyFont};
        border-radius: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.controlCornerRadius} * 1px);
        border: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} * 1px) solid transparent;
        box-sizing: border-box;
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRest};
        cursor: pointer;
        flex: 0 0 auto;
        fill: currentcolor;
        font-size: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.typeRampBaseFontSize};
        height: calc(${_styles_size__WEBPACK_IMPORTED_MODULE_3__.heightNumber} * 1px);
        line-height: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.typeRampBaseLineHeight};
        margin: 0 calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.designUnit} * 1px);
        outline: none;
        overflow: hidden;
        padding: 0 calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.designUnit} * 2.25px);
        user-select: none;
        white-space: nowrap;
    }

    :host(:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible}) {
        box-shadow: 0 0 0 calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} * 1px) inset ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeInner};
        border-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeOuter};
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillFocus};
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.foregroundOnAccentFocus};
    }

    :host([aria-selected="true"]) {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillRest};
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.foregroundOnAccentRest};
    }

    :host(:hover) {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillHover};
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.foregroundOnAccentHover};
    }

    :host(:active) {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillActive};
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.foregroundOnAccentActive};
    }

    :host(:not([aria-selected="true"]):hover),
    :host(:not([aria-selected="true"]):active) {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralFillHover};
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRest};
    }

    :host([disabled]) {
        cursor: ${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.disabledCursor};
        opacity: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.disabledOpacity};
    }

    :host([disabled]:hover) {
        background-color: inherit;
    }

    .content {
        grid-column-start: 2;
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
        display: flex;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        height: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.designUnit} * 4px);
        width: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.designUnit} * 4px);
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 1ch;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 1ch;
    }
`.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
                    color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.HighlightText};
                }

                :host([disabled]),
                :host([disabled]:not([aria-selected="true"]):hover) {
                    background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Canvas};
                    color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }
            `));


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.template.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.template.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listboxOptionTemplate": () => (/* binding */ listboxOptionTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _patterns_start_end__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patterns/start-end */ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");


/**
 * The template for the {@link @microsoft/fast-foundation#(ListboxOption:class)} component.
 * @public
 */
const listboxOptionTemplate = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <template
        aria-disabled="${x => x.ariaDisabled}"
        aria-posinset="${x => x.ariaPosInSet}"
        aria-selected="${x => x.ariaSelected}"
        aria-setsize="${x => x.ariaSetSize}"
        class="${x => [x.selected && "selected", x.disabled && "disabled"]
    .filter(Boolean)
    .join(" ")}"
        role="option"
    >
        ${(0,_patterns_start_end__WEBPACK_IMPORTED_MODULE_1__.startSlotTemplate)(context, definition)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${(0,_patterns_start_end__WEBPACK_IMPORTED_MODULE_1__.endSlotTemplate)(context, definition)}
    </template>
`;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_fast_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-components */ "./node_modules/@microsoft/fast-components/dist/esm/fast-design-system.js");
/* harmony import */ var _microsoft_fast_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-components */ "./node_modules/@microsoft/fast-components/dist/esm/card/index.js");
/* harmony import */ var _microsoft_fast_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-components */ "./node_modules/@microsoft/fast-components/dist/esm/button/index.js");
/* harmony import */ var _microsoft_fast_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-components */ "./node_modules/@microsoft/fast-components/dist/esm/combobox/index.js");
/* harmony import */ var _microsoft_fast_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-components */ "./node_modules/@microsoft/fast-components/dist/esm/listbox-option/index.js");
/* harmony import */ var _src_components_dog_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/components/dog-card */ "./src/components/dog-card.ts");
/* harmony import */ var _src_components_breed_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/breed-search */ "./src/components/breed-search.ts");
/* harmony import */ var _src_components_breed_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/breed-selector */ "./src/components/breed-selector.ts");




(0,_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_3__.provideFASTDesignSystem)().register((0,_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_4__.fastCard)(), (0,_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_5__.fastButton)(), (0,_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_6__.fastCombobox)(), (0,_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_7__.fastOption)());
_src_components_dog_card__WEBPACK_IMPORTED_MODULE_0__.DogCard;
_src_components_breed_search__WEBPACK_IMPORTED_MODULE_1__.BreedSearch;
_src_components_breed_selector__WEBPACK_IMPORTED_MODULE_2__.BreedSelector;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("44ca1df1ca02cbc9248f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmEyN2VhMjlhMGU0NmQ5YzQ1NTJjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQzlCO0FBQ2pFO0FBQ0EsOEJBQThCLGdEQUFnRDtBQUM5RSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxtQkFBbUIsNkVBQXFCO0FBQy9DO0FBQ0EsWUFBWTtBQUNaLFVBQVU7QUFDVixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDeUI7QUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qlk7QUFDc0U7QUFDdkQ7QUFDdVY7QUFDdFc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDTyw4Q0FBOEMsd0RBQUc7QUFDeEQsTUFBTSxtRUFBTyxpQkFBaUI7QUFDOUI7QUFDQSx1QkFBdUIsb0RBQVE7QUFDL0IsOEJBQThCLCtEQUFtQixFQUFFO0FBQ25ELHVCQUF1Qiw0REFBZ0IsRUFBRTtBQUN6QztBQUNBLGlCQUFpQixpRUFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdFQUFvQjtBQUN6Qyx1QkFBdUIsc0RBQVksRUFBRTtBQUNyQyx1QkFBdUIsa0VBQXNCO0FBQzdDLHlCQUF5QixzREFBVSxFQUFFO0FBQ3JDO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQVUsRUFBRTtBQUN0QztBQUNBO0FBQ0E7O0FBRUEsYUFBYSxvRUFBWSxDQUFDO0FBQzFCLGlDQUFpQyw0REFBZ0IsRUFBRSxlQUFlLDREQUFnQjtBQUNsRix3QkFBd0IsNERBQWdCO0FBQ3hDLHNCQUFzQiwyREFBZTtBQUNyQyxpQkFBaUIsbUVBQXVCO0FBQ3hDOztBQUVBO0FBQ0Esc0JBQXNCLDBEQUFjO0FBQ3BDLGlCQUFpQixrRUFBc0I7QUFDdkM7O0FBRUE7QUFDQSxzQkFBc0IsMkRBQWU7QUFDckMsaUJBQWlCLG1FQUF1QjtBQUN4Qzs7QUFFQTtBQUNBLHNCQUFzQiw0REFBZ0I7QUFDdEMsaUJBQWlCLG9FQUF3QjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDREQUFnQjtBQUN0QyxpQkFBaUIsaUVBQXFCO0FBQ3RDOztBQUVBO0FBQ0Esa0JBQWtCLHNFQUFjO0FBQ2hDLG1CQUFtQiwyREFBZTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixzREFBVSxFQUFFO0FBQ25DLHNCQUFzQixzREFBVSxFQUFFO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMEZBQThCLENBQUMsd0RBQUc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtGQUF1QjtBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsaUZBQXNCO0FBQ3hELDZCQUE2QixxRkFBMEI7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyw4RUFBbUI7QUFDckQsNkJBQTZCLGdGQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSCtDO0FBQzRCO0FBQzNFO0FBQ0EseUJBQXlCLHdEQUF3RDtBQUNqRjtBQUNBO0FBQ08sdURBQXVELHlEQUFJO0FBQ2xFO0FBQ0EseUJBQXlCLG9CQUFvQjtBQUM3Qyx5QkFBeUIsb0JBQW9CO0FBQzdDLHlCQUF5QixvQkFBb0I7QUFDN0Msd0JBQXdCLG1CQUFtQjtBQUMzQyxpQkFBaUI7QUFDakI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFVBQVUsc0VBQWlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0VBQWU7QUFDekI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQm9DO0FBQ2lCO0FBQ1E7QUFDSTtBQUVqRSxtRkFBdUIsRUFBRSxDQUFDLFFBQVEsQ0FDaEMsb0VBQVEsRUFBRSxFQUNWLHNFQUFVLEVBQUUsRUFDWix3RUFBWSxFQUFFLEVBQ2Qsc0VBQVUsRUFBRSxDQUNiLENBQUM7QUFFRiw2REFBTyxDQUFDO0FBQ1IscUVBQVcsQ0FBQztBQUNaLHlFQUFhLENBQUM7Ozs7Ozs7OztVQ3BCZCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtZG9ncy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtY29tcG9uZW50cy9kaXN0L2VzbS9saXN0Ym94LW9wdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWNvbXBvbmVudHMvZGlzdC9lc20vbGlzdGJveC1vcHRpb24vbGlzdGJveC1vcHRpb24uc3R5bGVzLmpzIiwid2VicGFjazovL2Zhc3QtZG9ncy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbi9kaXN0L2VzbS9saXN0Ym94LW9wdGlvbi9saXN0Ym94LW9wdGlvbi50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3Mvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3Rib3hPcHRpb24sIGxpc3Rib3hPcHRpb25UZW1wbGF0ZSBhcyB0ZW1wbGF0ZSwgfSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb25cIjtcbmltcG9ydCB7IG9wdGlvblN0eWxlcyBhcyBzdHlsZXMgfSBmcm9tIFwiLi9saXN0Ym94LW9wdGlvbi5zdHlsZXNcIjtcbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSB7QGxpbmsgQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24jTGlzdGJveE9wdGlvbn0gcmVnaXN0cmF0aW9uIGZvciBjb25maWd1cmluZyB0aGUgY29tcG9uZW50IHdpdGggYSBEZXNpZ25TeXN0ZW0uXG4gKiBJbXBsZW1lbnRzIHtAbGluayBAbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbiNsaXN0Ym94T3B0aW9uVGVtcGxhdGV9XG4gKlxuICpcbiAqIEBwdWJsaWNcbiAqIEByZW1hcmtzXG4gKiBHZW5lcmF0ZXMgSFRNTCBFbGVtZW50OiBgPGZhc3Qtb3B0aW9uPmBcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBmYXN0T3B0aW9uID0gTGlzdGJveE9wdGlvbi5jb21wb3NlKHtcbiAgICBiYXNlTmFtZTogXCJvcHRpb25cIixcbiAgICB0ZW1wbGF0ZSxcbiAgICBzdHlsZXMsXG59KTtcbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgTGlzdGJveE9wdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgeyBMaXN0Ym94T3B0aW9uIH07XG5leHBvcnQgeyBzdHlsZXMgYXMgb3B0aW9uU3R5bGVzIH07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGRpc2FibGVkQ3Vyc29yLCBkaXNwbGF5LCBmb2N1c1Zpc2libGUsIGZvcmNlZENvbG9yc1N0eWxlc2hlZXRCZWhhdmlvciwgfSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb25cIjtcbmltcG9ydCB7IFN5c3RlbUNvbG9ycyB9IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3Qtd2ViLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgYWNjZW50RmlsbEFjdGl2ZSwgYWNjZW50RmlsbEZvY3VzLCBhY2NlbnRGaWxsSG92ZXIsIGFjY2VudEZpbGxSZXN0LCBib2R5Rm9udCwgY29udHJvbENvcm5lclJhZGl1cywgZGVzaWduVW5pdCwgZGlzYWJsZWRPcGFjaXR5LCBmb2N1c1N0cm9rZUlubmVyLCBmb2N1c1N0cm9rZU91dGVyLCBmb2N1c1N0cm9rZVdpZHRoLCBmb3JlZ3JvdW5kT25BY2NlbnRBY3RpdmUsIGZvcmVncm91bmRPbkFjY2VudEZvY3VzLCBmb3JlZ3JvdW5kT25BY2NlbnRIb3ZlciwgZm9yZWdyb3VuZE9uQWNjZW50UmVzdCwgbmV1dHJhbEZpbGxIb3ZlciwgbmV1dHJhbEZvcmVncm91bmRSZXN0LCB0eXBlUmFtcEJhc2VGb250U2l6ZSwgdHlwZVJhbXBCYXNlTGluZUhlaWdodCwgfSBmcm9tIFwiLi4vZGVzaWduLXRva2Vuc1wiO1xuaW1wb3J0IHsgaGVpZ2h0TnVtYmVyIH0gZnJvbSBcIi4uL3N0eWxlcy9zaXplXCI7XG4vKipcbiAqIFN0eWxlcyBmb3IgT3B0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBvcHRpb25TdHlsZXMgPSAoY29udGV4dCwgZGVmaW5pdGlvbikgPT4gY3NzIGBcbiAgICAke2Rpc3BsYXkoXCJpbmxpbmUtZmxleFwiKX0gOmhvc3Qge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJHtib2R5Rm9udH07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGMoJHtjb250cm9sQ29ybmVyUmFkaXVzfSAqIDFweCk7XG4gICAgICAgIGJvcmRlcjogY2FsYygke2ZvY3VzU3Ryb2tlV2lkdGh9ICogMXB4KSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY29sb3I6ICR7bmV1dHJhbEZvcmVncm91bmRSZXN0fTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgZmlsbDogY3VycmVudGNvbG9yO1xuICAgICAgICBmb250LXNpemU6ICR7dHlwZVJhbXBCYXNlRm9udFNpemV9O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoJHtoZWlnaHROdW1iZXJ9ICogMXB4KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICR7dHlwZVJhbXBCYXNlTGluZUhlaWdodH07XG4gICAgICAgIG1hcmdpbjogMCBjYWxjKCR7ZGVzaWduVW5pdH0gKiAxcHgpO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiAwIGNhbGMoJHtkZXNpZ25Vbml0fSAqIDIuMjVweCk7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIDpob3N0KDoke2ZvY3VzVmlzaWJsZX0pIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgY2FsYygke2ZvY3VzU3Ryb2tlV2lkdGh9ICogMXB4KSBpbnNldCAke2ZvY3VzU3Ryb2tlSW5uZXJ9O1xuICAgICAgICBib3JkZXItY29sb3I6ICR7Zm9jdXNTdHJva2VPdXRlcn07XG4gICAgICAgIGJhY2tncm91bmQ6ICR7YWNjZW50RmlsbEZvY3VzfTtcbiAgICAgICAgY29sb3I6ICR7Zm9yZWdyb3VuZE9uQWNjZW50Rm9jdXN9O1xuICAgIH1cblxuICAgIDpob3N0KFthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke2FjY2VudEZpbGxSZXN0fTtcbiAgICAgICAgY29sb3I6ICR7Zm9yZWdyb3VuZE9uQWNjZW50UmVzdH07XG4gICAgfVxuXG4gICAgOmhvc3QoOmhvdmVyKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7YWNjZW50RmlsbEhvdmVyfTtcbiAgICAgICAgY29sb3I6ICR7Zm9yZWdyb3VuZE9uQWNjZW50SG92ZXJ9O1xuICAgIH1cblxuICAgIDpob3N0KDphY3RpdmUpIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHthY2NlbnRGaWxsQWN0aXZlfTtcbiAgICAgICAgY29sb3I6ICR7Zm9yZWdyb3VuZE9uQWNjZW50QWN0aXZlfTtcbiAgICB9XG5cbiAgICA6aG9zdCg6bm90KFthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSk6aG92ZXIpLFxuICAgIDpob3N0KDpub3QoW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdKTphY3RpdmUpIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtuZXV0cmFsRmlsbEhvdmVyfTtcbiAgICAgICAgY29sb3I6ICR7bmV1dHJhbEZvcmVncm91bmRSZXN0fTtcbiAgICB9XG5cbiAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIGN1cnNvcjogJHtkaXNhYmxlZEN1cnNvcn07XG4gICAgICAgIG9wYWNpdHk6ICR7ZGlzYWJsZWRPcGFjaXR5fTtcbiAgICB9XG5cbiAgICA6aG9zdChbZGlzYWJsZWRdOmhvdmVyKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgLnN0YXJ0LFxuICAgIC5lbmQsXG4gICAgOjpzbG90dGVkKHN2Zykge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIDo6c2xvdHRlZChzdmcpIHtcbiAgICAgICAgLyogVE9ETzogYWRhcHRpdmUgdHlwb2dyYXBoeSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L2Zhc3QvaXNzdWVzLzI0MzIgKi9cbiAgICAgICAgaGVpZ2h0OiBjYWxjKCR7ZGVzaWduVW5pdH0gKiA0cHgpO1xuICAgICAgICB3aWR0aDogY2FsYygke2Rlc2lnblVuaXR9ICogNHB4KTtcbiAgICB9XG5cbiAgICA6OnNsb3R0ZWQoW3Nsb3Q9XCJlbmRcIl0pIHtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMWNoO1xuICAgIH1cblxuICAgIDo6c2xvdHRlZChbc2xvdD1cInN0YXJ0XCJdKSB7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxY2g7XG4gICAgfVxuYC53aXRoQmVoYXZpb3JzKGZvcmNlZENvbG9yc1N0eWxlc2hlZXRCZWhhdmlvcihjc3MgYFxuICAgICAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VkLWNvbG9yLWFkanVzdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7U3lzdGVtQ29sb3JzLkJ1dHRvblRleHR9O1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBjdXJyZW50Y29sb3I7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgOmhvc3QoOm5vdChbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0pOmhvdmVyKSxcbiAgICAgICAgICAgICAgICA6aG9zdChbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtTeXN0ZW1Db2xvcnMuSGlnaGxpZ2h0fTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7U3lzdGVtQ29sb3JzLkhpZ2hsaWdodFRleHR9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDpob3N0KFtkaXNhYmxlZF0pLFxuICAgICAgICAgICAgICAgIDpob3N0KFtkaXNhYmxlZF06bm90KFthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSk6aG92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtTeXN0ZW1Db2xvcnMuQ2FudmFzfTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7U3lzdGVtQ29sb3JzLkdyYXlUZXh0fTtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogY3VycmVudGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGApKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGVuZFNsb3RUZW1wbGF0ZSwgc3RhcnRTbG90VGVtcGxhdGUgfSBmcm9tIFwiLi4vcGF0dGVybnMvc3RhcnQtZW5kXCI7XG4vKipcbiAqIFRoZSB0ZW1wbGF0ZSBmb3IgdGhlIHtAbGluayBAbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbiMoTGlzdGJveE9wdGlvbjpjbGFzcyl9IGNvbXBvbmVudC5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGxpc3Rib3hPcHRpb25UZW1wbGF0ZSA9IChjb250ZXh0LCBkZWZpbml0aW9uKSA9PiBodG1sIGBcbiAgICA8dGVtcGxhdGVcbiAgICAgICAgYXJpYS1kaXNhYmxlZD1cIiR7eCA9PiB4LmFyaWFEaXNhYmxlZH1cIlxuICAgICAgICBhcmlhLXBvc2luc2V0PVwiJHt4ID0+IHguYXJpYVBvc0luU2V0fVwiXG4gICAgICAgIGFyaWEtc2VsZWN0ZWQ9XCIke3ggPT4geC5hcmlhU2VsZWN0ZWR9XCJcbiAgICAgICAgYXJpYS1zZXRzaXplPVwiJHt4ID0+IHguYXJpYVNldFNpemV9XCJcbiAgICAgICAgY2xhc3M9XCIke3ggPT4gW3guc2VsZWN0ZWQgJiYgXCJzZWxlY3RlZFwiLCB4LmRpc2FibGVkICYmIFwiZGlzYWJsZWRcIl1cbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oXCIgXCIpfVwiXG4gICAgICAgIHJvbGU9XCJvcHRpb25cIlxuICAgID5cbiAgICAgICAgJHtzdGFydFNsb3RUZW1wbGF0ZShjb250ZXh0LCBkZWZpbml0aW9uKX1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50XCIgcGFydD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICAke2VuZFNsb3RUZW1wbGF0ZShjb250ZXh0LCBkZWZpbml0aW9uKX1cbiAgICA8L3RlbXBsYXRlPlxuYDtcbiIsImltcG9ydCB7XHJcbiAgcHJvdmlkZUZBU1REZXNpZ25TeXN0ZW0sXHJcbiAgZmFzdENhcmQsXHJcbiAgZmFzdEJ1dHRvbixcclxuICBmYXN0Q29tYm9ib3gsXHJcbiAgZmFzdE9wdGlvbixcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgRG9nQ2FyZCB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9kb2ctY2FyZFwiO1xyXG5pbXBvcnQgeyBCcmVlZFNlYXJjaCB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9icmVlZC1zZWFyY2hcIjtcclxuaW1wb3J0IHsgQnJlZWRTZWxlY3RvciB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9icmVlZC1zZWxlY3RvclwiO1xyXG5cclxucHJvdmlkZUZBU1REZXNpZ25TeXN0ZW0oKS5yZWdpc3RlcihcclxuICBmYXN0Q2FyZCgpLFxyXG4gIGZhc3RCdXR0b24oKSxcclxuICBmYXN0Q29tYm9ib3goKSxcclxuICBmYXN0T3B0aW9uKClcclxuKTtcclxuXHJcbkRvZ0NhcmQ7XHJcbkJyZWVkU2VhcmNoO1xyXG5CcmVlZFNlbGVjdG9yO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NGNhMWRmMWNhMDJjYmM5MjQ4ZlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==