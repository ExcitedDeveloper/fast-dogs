"use strict";
self["webpackHotUpdatefast_dogs"]("app",{

/***/ "./node_modules/@microsoft/fast-components/dist/esm/combobox/combobox.styles.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/combobox/combobox.styles.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comboboxStyles": () => (/* binding */ comboboxStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js");
/* harmony import */ var _design_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../design-tokens */ "./node_modules/@microsoft/fast-components/dist/esm/design-tokens.js");
/* harmony import */ var _select_select_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../select/select.styles */ "./node_modules/@microsoft/fast-components/dist/esm/select/select.styles.js");




/**
 * Styles for Combobox
 * @public
 */
const comboboxStyles = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    ${(0,_select_select_styles__WEBPACK_IMPORTED_MODULE_1__.selectStyles)(context, definition)}

    :host(:empty) .listbox {
        display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
        cursor: ${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_2__.disabledCursor};
        user-select: none;
    }

    .selected-value {
        -webkit-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        font-size: ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.typeRampBaseFontSize};
        line-height: ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.typeRampBaseLineHeight};
        height: calc(100% - (${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.strokeWidth} * 1px));
        margin: auto 0;
        width: 100%;
    }

    .selected-value:hover,
    .selected-value:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible},
    .selected-value:disabled,
    .selected-value:active {
        outline: none;
    }
`;


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/combobox/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/combobox/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fastCombobox": () => (/* binding */ fastCombobox),
/* harmony export */   "Combobox": () => (/* reexport safe */ _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.Combobox),
/* harmony export */   "comboboxStyles": () => (/* reexport safe */ _combobox_styles__WEBPACK_IMPORTED_MODULE_2__.comboboxStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.template.js");
/* harmony import */ var _combobox_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combobox.styles */ "./node_modules/@microsoft/fast-components/dist/esm/combobox/combobox.styles.js");


/**
 * A function that returns a {@link @microsoft/fast-foundation#Combobox} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#comboboxTemplate}
 *
 * @public
 * @remarks
 * Generates HTML Element: `<fast-combobox>`
 *
 */
const fastCombobox = _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.Combobox.compose({
    baseName: "combobox",
    template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.comboboxTemplate,
    styles: _combobox_styles__WEBPACK_IMPORTED_MODULE_2__.comboboxStyles,
    shadowOptions: {
        delegatesFocus: true,
    },
    indicator: `
        <svg
            class="select-indicator"
            part="select-indicator"
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
            />
        </svg>
    `,
});
/**
 * Base class for Combobox
 * @public
 */




/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/select/select.styles.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/select/select.styles.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectStyles": () => (/* binding */ selectStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _design_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../design-tokens */ "./node_modules/@microsoft/fast-components/dist/esm/design-tokens.js");
/* harmony import */ var _styles_elevation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/elevation */ "./node_modules/@microsoft/fast-components/dist/esm/styles/elevation.js");
/* harmony import */ var _styles_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/size */ "./node_modules/@microsoft/fast-components/dist/esm/styles/size.js");






/**
 * Styles for Select
 * @public
 */
const selectStyles = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)("inline-flex")} :host {
        --elevation: 14;
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralFillInputRest};
        border-radius: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.controlCornerRadius} * 1px);
        border: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.strokeWidth} * 1px) solid ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillRest};
        box-sizing: border-box;
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRest};
        font-family: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.bodyFont};
        height: calc(${_styles_size__WEBPACK_IMPORTED_MODULE_3__.heightNumber} * 1px);
        position: relative;
        user-select: none;
        min-width: 250px;
        outline: none;
        vertical-align: top;
    }

    .listbox {
        ${_styles_elevation__WEBPACK_IMPORTED_MODULE_4__.elevation}
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralLayerFloating};
        border: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.strokeWidth} * 1px) solid ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralStrokeRest};
        border-radius: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.controlCornerRadius} * 1px);
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        left: 0;
        max-height: calc(var(--max-height) - (${_styles_size__WEBPACK_IMPORTED_MODULE_3__.heightNumber} * 1px));
        padding: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.designUnit} * 1px) 0;
        overflow-y: auto;
        position: absolute;
        width: 100%;
        z-index: 1;
    }

    .listbox[hidden] {
        display: none;
    }

    .control {
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        font-size: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.typeRampBaseFontSize};
        font-family: inherit;
        line-height: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.typeRampBaseLineHeight};
        min-height: 100%;
        padding: 0 calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.designUnit} * 2.25px);
        width: 100%;
    }

    :host(:not([disabled]):hover) {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralFillInputHover};
        border-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillHover};
    }

    :host(:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.focusVisible}) {
        border-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeOuter};
        box-shadow: 0 0 0 calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} * 1px) ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeOuter};
    }

    :host(:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.focusVisible}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
        box-shadow: 0 0 0 calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} * 1px) inset ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeInner};
        border-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeOuter};
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillFocus};
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.foregroundOnAccentFocus};
    }

    :host([disabled]) {
        cursor: ${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__.disabledCursor};
        opacity: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.disabledOpacity};
    }

    :host([disabled]) .control {
        cursor: ${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__.disabledCursor};
        user-select: none;
    }

    :host([disabled]:hover) {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralFillStealthRest};
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRest};
        fill: currentcolor;
    }

    :host(:not([disabled])) .control:active {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralFillInputActive};
        border-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillActive};
        border-radius: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.controlCornerRadius} * 1px);
    }

    :host([open][position="above"]) .listbox {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    :host([open][position="below"]) .listbox {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    :host([open][position="above"]) .listbox {
        border-bottom: 0;
        bottom: calc(${_styles_size__WEBPACK_IMPORTED_MODULE_3__.heightNumber} * 1px);
    }

    :host([open][position="below"]) .listbox {
        border-top: 0;
        top: calc(${_styles_size__WEBPACK_IMPORTED_MODULE_3__.heightNumber} * 1px);
    }

    .selected-value {
        flex: 1 1 auto;
        font-family: inherit;
        text-align: start;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .indicator {
        flex: 0 0 auto;
        margin-inline-start: 1em;
    }

    slot[name="listbox"] {
        display: none;
        width: 100%;
    }

    :host([open]) slot[name="listbox"] {
        display: flex;
        position: absolute;
        ${_styles_elevation__WEBPACK_IMPORTED_MODULE_4__.elevation}
    }

    .end {
        margin-inline-start: auto;
    }

    .start,
    .end,
    .indicator,
    .select-indicator,
    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        fill: currentcolor;
        height: 1em;
        min-height: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.designUnit} * 4px);
        min-width: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.designUnit} * 4px);
        width: 1em;
    }

    ::slotted([role="option"]),
    ::slotted(option) {
        flex: 0 0 auto;
    }

`.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_7__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
            :host(:not([disabled]):hover),
            :host(:not([disabled]):active) {
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.Highlight};
            }

            :host(:not([disabled]):${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.focusVisible}) {
                background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.ButtonFace};
                box-shadow: 0 0 0 calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} * 1px) ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.Highlight};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.ButtonText};
                fill: currentcolor;
                forced-color-adjust: none;
            }

            :host(:not([disabled]):${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.focusVisible}) .listbox {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.ButtonFace};
            }

            :host([disabled]) {
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.GrayText};
                background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.ButtonFace};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.GrayText};
                fill: currentcolor;
                opacity: 1;
                forced-color-adjust: none;
            }

            :host([disabled]:hover) {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.ButtonFace};
            }

            :host([disabled]) .control {
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.GrayText};
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.GrayText};
            }

            :host([disabled]) .control .select-indicator {
                fill: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.GrayText};
            }

            :host(:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.focusVisible}) ::slotted([aria-selected="true"][role="option"]),
            :host(:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.focusVisible}) ::slotted(option[aria-selected="true"]),
            :host(:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.focusVisible}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.Highlight};
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.ButtonText};
                box-shadow: 0 0 0 calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} * 1px) inset ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.HighlightText};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.HighlightText};
                fill: currentcolor;
            }

            .start,
            .end,
            .indicator,
            .select-indicator,
            ::slotted(svg) {
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_8__.SystemColors.ButtonText};
                fill: currentcolor;
            }
        `));


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.form-associated.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.form-associated.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormAssociatedCombobox": () => (/* binding */ FormAssociatedCombobox)
/* harmony export */ });
/* harmony import */ var _form_associated_form_associated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-associated/form-associated */ "./node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js");
/* harmony import */ var _listbox_listbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../listbox/listbox */ "./node_modules/@microsoft/fast-foundation/dist/esm/listbox/listbox.js");


class _Combobox extends _listbox_listbox__WEBPACK_IMPORTED_MODULE_0__.Listbox {
}
/**
 * A form-associated base class for the {@link (Combobox:class)} component.
 *
 * @internal
 */
class FormAssociatedCombobox extends (0,_form_associated_form_associated__WEBPACK_IMPORTED_MODULE_1__.FormAssociated)(_Combobox) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement("input");
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Combobox": () => (/* binding */ Combobox),
/* harmony export */   "DelegatesARIACombobox": () => (/* binding */ DelegatesARIACombobox)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/strings.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/numbers.js");
/* harmony import */ var _listbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../listbox */ "./node_modules/@microsoft/fast-foundation/dist/esm/listbox/listbox.js");
/* harmony import */ var _patterns_start_end__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../patterns/start-end */ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");
/* harmony import */ var _select_select_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select/select.options */ "./node_modules/@microsoft/fast-foundation/dist/esm/select/select.options.js");
/* harmony import */ var _utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/apply-mixins */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js");
/* harmony import */ var _combobox_form_associated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combobox.form-associated */ "./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.form-associated.js");
/* harmony import */ var _combobox_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combobox.options */ "./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.options.js");









/**
 * A Combobox Custom HTML Element.
 * Implements the {@link https://w3c.github.io/aria-practices/#combobox | ARIA combobox }.
 *
 * @public
 */
class Combobox extends _combobox_form_associated__WEBPACK_IMPORTED_MODULE_0__.FormAssociatedCombobox {
    constructor() {
        super(...arguments);
        /**
         * The internal value property.
         *
         * @internal
         */
        this._value = "";
        /**
         * The collection of currently filtered options.
         *
         * @public
         */
        this.filteredOptions = [];
        /**
         * The current filter value.
         *
         * @internal
         */
        this.filter = "";
        /**
         * The initial state of the position attribute.
         *
         * @internal
         */
        this.forcedPosition = false;
        /**
         * The unique id of the internal listbox.
         *
         * @internal
         */
        this.listboxId = (0,_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.uniqueId)("listbox-");
        /**
         * The max height for the listbox when opened.
         *
         * @internal
         */
        this.maxHeight = 0;
        /**
         * The open attribute.
         *
         * @public
         * @remarks
         * HTML Attribute: open
         */
        this.open = false;
        /**
         * The current state of the calculated position of the listbox.
         *
         * @public
         */
        this.position = _select_select_options__WEBPACK_IMPORTED_MODULE_2__.SelectPosition.below;
    }
    /**
     * Reset the element to its first selectable option when its parent form is reset.
     *
     * @internal
     */
    formResetCallback() {
        super.formResetCallback();
        this.setDefaultSelectedOption();
        this.updateValue();
    }
    get isAutocompleteInline() {
        return (this.autocomplete === _combobox_options__WEBPACK_IMPORTED_MODULE_3__.ComboboxAutocomplete.inline || this.isAutocompleteBoth);
    }
    get isAutocompleteList() {
        return this.autocomplete === _combobox_options__WEBPACK_IMPORTED_MODULE_3__.ComboboxAutocomplete.list || this.isAutocompleteBoth;
    }
    get isAutocompleteBoth() {
        return this.autocomplete === _combobox_options__WEBPACK_IMPORTED_MODULE_3__.ComboboxAutocomplete.both;
    }
    maxHeightChanged() {
        if (this.listbox) {
            this.listbox.style.setProperty("--max-height", `${this.maxHeight}px`);
        }
    }
    openChanged() {
        if (this.open) {
            this.ariaControls = this.listbox.id;
            this.ariaExpanded = "true";
            this.setPositioning();
            this.focusAndScrollOptionIntoView();
            return;
        }
        this.ariaControls = "";
        this.ariaExpanded = "false";
    }
    /**
     * The list of options.
     *
     * @public
     * @remarks
     * Overrides `Listbox.options`.
     */
    get options() {
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.Observable.track(this, "options");
        return this.filteredOptions.length ? this.filteredOptions : this._options;
    }
    set options(value) {
        this._options = value;
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.Observable.notify(this, "options");
    }
    /**
     * Updates the placeholder on the proxy element.
     * @internal
     */
    placeholderChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.placeholder = this.placeholder;
        }
    }
    /**
     * The value property.
     *
     * @public
     */
    get value() {
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.Observable.track(this, "value");
        return this._value;
    }
    set value(next) {
        var _a, _b, _c;
        const prev = `${this._value}`;
        if (this.$fastController.isConnected && this.options) {
            const selectedIndex = this.options.findIndex(el => el.text.toLowerCase() === next.toLowerCase());
            const prevSelectedValue = (_a = this.options[this.selectedIndex]) === null || _a === void 0 ? void 0 : _a.text;
            const nextSelectedValue = (_b = this.options[selectedIndex]) === null || _b === void 0 ? void 0 : _b.text;
            this.selectedIndex =
                prevSelectedValue !== nextSelectedValue
                    ? selectedIndex
                    : this.selectedIndex;
            next = ((_c = this.firstSelectedOption) === null || _c === void 0 ? void 0 : _c.text) || next;
        }
        if (prev !== next) {
            this._value = next;
            super.valueChanged(prev, next);
            _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.Observable.notify(this, "value");
        }
    }
    /**
     * Handle opening and closing the listbox when the combobox is clicked.
     *
     * @param e - the mouse event
     * @internal
     */
    clickHandler(e) {
        if (this.disabled) {
            return;
        }
        if (this.open) {
            const captured = e.target.closest(`option,[role=option]`);
            if (!captured || captured.disabled) {
                return;
            }
            this.selectedOptions = [captured];
            this.control.value = captured.text;
            this.updateValue(true);
        }
        this.open = !this.open;
        if (this.open) {
            this.control.focus();
        }
        return true;
    }
    connectedCallback() {
        super.connectedCallback();
        this.forcedPosition = !!this.positionAttribute;
        if (this.value) {
            this.initialValue = this.value;
        }
        if (!this.listbox.id) {
            this.listbox.id = (0,_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.uniqueId)("listbox-");
        }
    }
    /**
     * Synchronize the `aria-disabled` property when the `disabled` property changes.
     *
     * @param prev - The previous disabled value
     * @param next - The next disabled value
     *
     * @internal
     */
    disabledChanged(prev, next) {
        if (super.disabledChanged) {
            super.disabledChanged(prev, next);
        }
        this.ariaDisabled = this.disabled ? "true" : "false";
    }
    /**
     * Filter available options by text value.
     *
     * @public
     */
    filterOptions() {
        if (!this.autocomplete || this.autocomplete === _combobox_options__WEBPACK_IMPORTED_MODULE_3__.ComboboxAutocomplete.none) {
            this.filter = "";
        }
        const filter = this.filter.toLowerCase();
        this.filteredOptions = this._options.filter(o => o.text.toLowerCase().startsWith(this.filter.toLowerCase()));
        if (this.isAutocompleteList) {
            if (!this.filteredOptions.length && !filter) {
                this.filteredOptions = this._options;
            }
            this._options.forEach(o => {
                o.hidden = !this.filteredOptions.includes(o);
            });
        }
    }
    /**
     * Focus the control and scroll the first selected option into view.
     *
     * @internal
     * @remarks
     * Overrides: `Listbox.focusAndScrollOptionIntoView`
     */
    focusAndScrollOptionIntoView() {
        if (this.contains(document.activeElement)) {
            this.control.focus();
            if (this.firstSelectedOption) {
                requestAnimationFrame(() => {
                    this.firstSelectedOption.scrollIntoView({ block: "nearest" });
                });
            }
        }
    }
    /**
     * Handle focus state when the element or its children lose focus.
     *
     * @param e - The focus event
     * @internal
     */
    focusoutHandler(e) {
        this.updateValue();
        if (!this.open) {
            return true;
        }
        const focusTarget = e.relatedTarget;
        if (this.isSameNode(focusTarget)) {
            this.focus();
            return;
        }
        if (!this.options || !this.options.includes(focusTarget)) {
            this.open = false;
        }
    }
    /**
     * Handle content changes on the control input.
     *
     * @param e - the input event
     * @internal
     */
    inputHandler(e) {
        this.filter = this.control.value;
        this.filterOptions();
        if (e.inputType === "deleteContentBackward" || !this.filter.length) {
            return true;
        }
        if (this.isAutocompleteList && !this.open) {
            this.open = true;
        }
        if (this.isAutocompleteInline && this.filteredOptions.length) {
            this.selectedOptions = [this.filteredOptions[0]];
            this.selectedIndex = this.options.indexOf(this.firstSelectedOption);
            this.setInlineSelection();
        }
        return;
    }
    /**
     * Handle keydown actions for listbox navigation.
     *
     * @param e - the keyboard event
     * @internal
     */
    keydownHandler(e) {
        const key = e.key;
        if (e.ctrlKey || e.shiftKey) {
            return true;
        }
        switch (key) {
            case "Enter": {
                this.updateValue(true);
                if (this.isAutocompleteInline) {
                    this.filter = this.value;
                }
                this.open = false;
                const controlValueLength = this.control.value.length;
                this.control.setSelectionRange(controlValueLength, controlValueLength);
                break;
            }
            case "Escape": {
                if (!this.isAutocompleteInline) {
                    this.selectedIndex = -1;
                }
                if (this.open) {
                    this.open = false;
                    break;
                }
                this.value = "";
                this.control.value = "";
                this.filter = "";
                this.filterOptions();
                break;
            }
            case "Tab": {
                this.updateValue();
                if (!this.open) {
                    return true;
                }
                e.preventDefault();
                this.open = false;
                break;
            }
            case "ArrowUp":
            case "ArrowDown": {
                this.filterOptions();
                if (!this.open) {
                    this.open = true;
                    break;
                }
                if (this.filteredOptions.length > 0) {
                    super.keydownHandler(e);
                }
                if (this.isAutocompleteInline) {
                    this.updateValue();
                    this.setInlineSelection();
                }
                break;
            }
            default: {
                return true;
            }
        }
    }
    /**
     * Handle keyup actions for value input and text field manipulations.
     *
     * @param e - the keyboard event
     * @internal
     */
    keyupHandler(e) {
        const key = e.key;
        switch (key) {
            case "ArrowLeft":
            case "ArrowRight":
            case "Backspace":
            case "Delete":
            case "Home":
            case "End": {
                this.filter = this.control.value;
                this.selectedIndex = -1;
                this.filterOptions();
                break;
            }
        }
    }
    /**
     * Ensure that the selectedIndex is within the current allowable filtered range.
     *
     * @internal
     * @remarks
     * Overrides: `Listbox.selectedIndexChanged`
     */
    selectedIndexChanged(prev, next) {
        if (this.$fastController.isConnected) {
            next = (0,_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.limit)(-1, this.options.length - 1, next);
            // we only want to call the super method when the selectedIndex is in range
            if (next !== this.selectedIndex) {
                this.selectedIndex = next;
                return;
            }
            super.selectedIndexChanged(prev, next);
        }
    }
    /**
     * Move focus to the previous selectable option.
     *
     * @internal
     * @remarks
     * Overrides `Listbox.selectPreviousOption`
     */
    selectPreviousOption() {
        if (!this.disabled && this.selectedIndex >= 0) {
            this.selectedIndex = this.selectedIndex - 1;
        }
    }
    /**
     * Set the default selected options at initialization or reset.
     *
     * @internal
     * @remarks
     * Overrides `Listbox.setDefaultSelectedOption`
     */
    setDefaultSelectedOption() {
        if (this.$fastController.isConnected && this.options) {
            const selectedIndex = this.options.findIndex(el => el.getAttribute("selected") !== null || el.selected);
            this.selectedIndex = selectedIndex;
            if (!this.dirtyValue && this.firstSelectedOption) {
                this.value = this.firstSelectedOption.text;
            }
            this.setSelectedOptions();
        }
    }
    /**
     * Focus and select the content of the control based on the first selected option.
     *
     * @param start - The index for the starting range
     * @internal
     */
    setInlineSelection() {
        if (this.firstSelectedOption) {
            this.control.value = this.firstSelectedOption.text;
            this.control.focus();
            this.control.setSelectionRange(this.filter.length, this.control.value.length, "backward");
        }
    }
    /**
     * Calculate and apply listbox positioning based on available viewport space.
     *
     * @param force - direction to force the listbox to display
     * @public
     */
    setPositioning() {
        const currentBox = this.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const availableBottom = viewportHeight - currentBox.bottom;
        this.position = this.forcedPosition
            ? this.positionAttribute
            : currentBox.top > availableBottom
                ? _select_select_options__WEBPACK_IMPORTED_MODULE_2__.SelectPosition.above
                : _select_select_options__WEBPACK_IMPORTED_MODULE_2__.SelectPosition.below;
        this.positionAttribute = this.forcedPosition
            ? this.positionAttribute
            : this.position;
        this.maxHeight =
            this.position === _select_select_options__WEBPACK_IMPORTED_MODULE_2__.SelectPosition.above ? ~~currentBox.top : ~~availableBottom;
    }
    /**
     * Ensure that the entire list of options is used when setting the selected property.
     *
     * @internal
     * @remarks
     * Overrides: `Listbox.selectedOptionsChanged`
     */
    selectedOptionsChanged(prev, next) {
        if (this.$fastController.isConnected) {
            this._options.forEach(o => {
                o.selected = next.includes(o);
            });
        }
    }
    /**
     * Synchronize the form-associated proxy and update the value property of the element.
     *
     * @param prev - the previous collection of slotted option elements
     * @param next - the next collection of slotted option elements
     *
     * @internal
     */
    slottedOptionsChanged(prev, next) {
        super.slottedOptionsChanged(prev, next);
        this.updateValue();
    }
    /**
     * @internal
     */
    updateValue(shouldEmit) {
        var _a;
        if (this.$fastController.isConnected) {
            this.value = ((_a = this.firstSelectedOption) === null || _a === void 0 ? void 0 : _a.text) || this.control.value;
        }
        if (shouldEmit) {
            this.$emit("change");
        }
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr)({ attribute: "autocomplete", mode: "fromView" })
], Combobox.prototype, "autocomplete", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], Combobox.prototype, "maxHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr)({ attribute: "open", mode: "boolean" })
], Combobox.prototype, "open", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr
], Combobox.prototype, "placeholder", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr)({ attribute: "position" })
], Combobox.prototype, "positionAttribute", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], Combobox.prototype, "position", void 0);
/**
 * Includes ARIA states and properties relating to the ARIA combobox role.
 *
 * @public
 */
class DelegatesARIACombobox {
}
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], DelegatesARIACombobox.prototype, "ariaAutoComplete", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], DelegatesARIACombobox.prototype, "ariaControls", void 0);
(0,_utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_8__.applyMixins)(DelegatesARIACombobox, _listbox__WEBPACK_IMPORTED_MODULE_9__.DelegatesARIAListbox);
(0,_utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_8__.applyMixins)(Combobox, _patterns_start_end__WEBPACK_IMPORTED_MODULE_10__.StartEnd, DelegatesARIACombobox);


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.options.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.options.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComboboxAutocomplete": () => (/* binding */ ComboboxAutocomplete)
/* harmony export */ });
/**
 * Autocomplete values for combobox.
 * @public
 */
var ComboboxAutocomplete;
(function (ComboboxAutocomplete) {
    ComboboxAutocomplete["inline"] = "inline";
    ComboboxAutocomplete["list"] = "list";
    ComboboxAutocomplete["both"] = "both";
    ComboboxAutocomplete["none"] = "none";
})(ComboboxAutocomplete || (ComboboxAutocomplete = {}));


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.template.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.template.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comboboxTemplate": () => (/* binding */ comboboxTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js");
/* harmony import */ var _listbox_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listbox/listbox */ "./node_modules/@microsoft/fast-foundation/dist/esm/listbox/listbox.js");
/* harmony import */ var _patterns_start_end__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patterns/start-end */ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");



/**
 * The template for the {@link @microsoft/fast-foundation#(Combobox:class)} component.
 * @public
 */
const comboboxTemplate = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <template
        aria-disabled="${x => x.ariaDisabled}"
        autocomplete="${x => x.autocomplete}"
        class="${x => (x.open ? "open" : "")} ${x => x.disabled ? "disabled" : ""} ${x => x.position}"
        tabindex="${x => (!x.disabled ? "0" : null)}"
        @click="${(x, c) => x.clickHandler(c.event)}"
        @focusout="${(x, c) => x.focusoutHandler(c.event)}"
        @keydown="${(x, c) => x.keydownHandler(c.event)}"
    >
        <div class="control" part="control">
            ${(0,_patterns_start_end__WEBPACK_IMPORTED_MODULE_1__.startSlotTemplate)(context, definition)}
            <slot name="control">
                <input
                    aria-activedescendant="${x => x.open ? x.ariaActiveDescendant : null}"
                    aria-autocomplete="${x => x.ariaAutoComplete}"
                    aria-controls="${x => x.ariaControls}"
                    aria-disabled="${x => x.ariaDisabled}"
                    aria-expanded="${x => x.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${x => x.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${x => x.disabled}"
                    :value="${x => x.value}"
                    @input="${(x, c) => x.inputHandler(c.event)}"
                    @keyup="${(x, c) => x.keyupHandler(c.event)}"
                    ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.ref)("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${definition.indicator || ""}
                    </slot>
                </div>
            </slot>
            ${(0,_patterns_start_end__WEBPACK_IMPORTED_MODULE_1__.endSlotTemplate)(context, definition)}
        </div>
        <div
            class="listbox"
            part="listbox"
            role="listbox"
            ?disabled="${x => x.disabled}"
            ?hidden="${x => !x.open}"
            ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.ref)("listbox")}
        >
            <slot
                ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.slotted)({
    filter: _listbox_listbox__WEBPACK_IMPORTED_MODULE_4__.Listbox.slottedOptionFilter,
    flatten: true,
    property: "slottedOptions",
})}
            ></slot>
        </div>
    </template>
`;


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isListboxOption": () => (/* binding */ isListboxOption),
/* harmony export */   "ListboxOption": () => (/* binding */ ListboxOption),
/* harmony export */   "DelegatesARIAListboxOption": () => (/* binding */ DelegatesARIAListboxOption)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/dom.js");
/* harmony import */ var _foundation_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../foundation-element */ "./node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js");
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../patterns */ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js");
/* harmony import */ var _patterns_start_end__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../patterns/start-end */ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");
/* harmony import */ var _utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/apply-mixins */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js");







/**
 * Determines if the element is a {@link (ListboxOption:class)}
 *
 * @param element - the element to test.
 * @public
 */
function isListboxOption(el) {
    return ((0,_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(el) &&
        (el.getAttribute("role") === "option" ||
            el instanceof HTMLOptionElement));
}
/**
 * An Option Custom HTML Element.
 * Implements {@link https://www.w3.org/TR/wai-aria-1.1/#option | ARIA option }.
 *
 * @public
 */
class ListboxOption extends _foundation_element__WEBPACK_IMPORTED_MODULE_1__.FoundationElement {
    constructor(text, value, defaultSelected, selected) {
        super();
        /**
         * The defaultSelected state of the option.
         * @public
         */
        this.defaultSelected = false;
        /**
         * Tracks whether the "selected" property has been changed.
         * @internal
         */
        this.dirtySelected = false;
        /**
         * The checked state of the control.
         *
         * @public
         */
        this.selected = this.defaultSelected;
        /**
         * Track whether the value has been changed from the initial value
         */
        this.dirtyValue = false;
        this.initialValue = this.initialValue || "";
        if (text) {
            this.textContent = text;
        }
        if (value) {
            this.initialValue = value;
        }
        if (defaultSelected) {
            this.defaultSelected = defaultSelected;
        }
        if (selected) {
            this.selected = selected;
        }
        this.proxy = new Option(`${this.textContent}`, this.initialValue, this.defaultSelected, this.selected);
        this.proxy.disabled = this.disabled;
    }
    defaultSelectedChanged() {
        if (!this.dirtySelected) {
            this.selected = this.defaultSelected;
            if (this.proxy instanceof HTMLOptionElement) {
                this.proxy.selected = this.defaultSelected;
            }
        }
    }
    disabledChanged(prev, next) {
        this.ariaDisabled = this.disabled ? "true" : "false";
        if (this.proxy instanceof HTMLOptionElement) {
            this.proxy.disabled = this.disabled;
        }
    }
    selectedAttributeChanged() {
        this.defaultSelected = this.selectedAttribute;
        if (this.proxy instanceof HTMLOptionElement) {
            this.proxy.defaultSelected = this.defaultSelected;
        }
    }
    selectedChanged() {
        this.ariaSelected = this.selected ? "true" : "false";
        if (!this.dirtySelected) {
            this.dirtySelected = true;
        }
        if (this.proxy instanceof HTMLOptionElement) {
            this.proxy.selected = this.selected;
        }
    }
    initialValueChanged(previous, next) {
        // If the value is clean and the component is connected to the DOM
        // then set value equal to the attribute value.
        if (!this.dirtyValue) {
            this.value = this.initialValue;
            this.dirtyValue = false;
        }
    }
    get label() {
        return this.value ? this.value : this.textContent ? this.textContent : "";
    }
    get text() {
        return this.textContent;
    }
    set value(next) {
        this._value = next;
        this.dirtyValue = true;
        if (this.proxy instanceof HTMLElement) {
            this.proxy.value = next;
        }
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.Observable.notify(this, "value");
    }
    get value() {
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.Observable.track(this, "value");
        return this._value ? this._value : this.text;
    }
    get form() {
        return this.proxy ? this.proxy.form : null;
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.observable
], ListboxOption.prototype, "defaultSelected", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr)({ mode: "boolean" })
], ListboxOption.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr)({ attribute: "selected", mode: "boolean" })
], ListboxOption.prototype, "selectedAttribute", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.observable
], ListboxOption.prototype, "selected", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr)({ attribute: "value", mode: "fromView" })
], ListboxOption.prototype, "initialValue", void 0);
/**
 * States and properties relating to the ARIA `option` role.
 *
 * @public
 */
class DelegatesARIAListboxOption {
}
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.observable
], DelegatesARIAListboxOption.prototype, "ariaPosInSet", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.observable
], DelegatesARIAListboxOption.prototype, "ariaSelected", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.observable
], DelegatesARIAListboxOption.prototype, "ariaSetSize", void 0);
(0,_utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_5__.applyMixins)(DelegatesARIAListboxOption, _patterns__WEBPACK_IMPORTED_MODULE_6__.ARIAGlobalStatesAndProperties);
(0,_utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_5__.applyMixins)(ListboxOption, _patterns_start_end__WEBPACK_IMPORTED_MODULE_7__.StartEnd, DelegatesARIAListboxOption);


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/listbox/listbox.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/listbox/listbox.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Listbox": () => (/* binding */ Listbox),
/* harmony export */   "DelegatesARIAListbox": () => (/* binding */ DelegatesARIAListbox)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/key-codes.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/strings.js");
/* harmony import */ var _foundation_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../foundation-element */ "./node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js");
/* harmony import */ var _listbox_option_listbox_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listbox-option/listbox-option */ "./node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.js");
/* harmony import */ var _patterns_aria_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../patterns/aria-global */ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js");
/* harmony import */ var _utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/apply-mixins */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js");







/**
 * A Listbox Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#listbox | ARIA listbox }.
 *
 * @public
 */
class Listbox extends _foundation_element__WEBPACK_IMPORTED_MODULE_0__.FoundationElement {
    constructor() {
        super(...arguments);
        /**
         * The internal unfiltered list of selectable options.
         *
         * @internal
         */
        this._options = [];
        /**
         * The index of the selected option.
         *
         * @public
         */
        this.selectedIndex = -1;
        /**
         * A collection of the selected options.
         *
         * @public
         */
        this.selectedOptions = [];
        /**
         * A standard `click` event creates a `focus` event before firing, so a
         * `mousedown` event is used to skip that initial focus.
         *
         * @internal
         */
        this.shouldSkipFocus = false;
        /**
         * The current typeahead buffer string.
         *
         * @internal
         */
        this.typeaheadBuffer = "";
        /**
         * Flag for the typeahead timeout expiration.
         *
         * @internal
         */
        this.typeaheadExpired = true;
        /**
         * The timeout ID for the typeahead handler.
         *
         * @internal
         */
        this.typeaheadTimeout = -1;
    }
    /**
     * The first selected option.
     *
     * @internal
     */
    get firstSelectedOption() {
        var _a;
        return (_a = this.selectedOptions[0]) !== null && _a !== void 0 ? _a : null;
    }
    /**
     * The number of options.
     *
     * @public
     */
    get length() {
        if (this.options) {
            return this.options.length;
        }
        return 0;
    }
    /**
     * The list of options.
     *
     * @public
     */
    get options() {
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.Observable.track(this, "options");
        return this._options;
    }
    set options(value) {
        this._options = value;
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.Observable.notify(this, "options");
    }
    /**
     * Flag for the typeahead timeout expiration.
     *
     * @deprecated use `Listbox.typeaheadExpired`
     * @internal
     */
    get typeAheadExpired() {
        return this.typeaheadExpired;
    }
    set typeAheadExpired(value) {
        this.typeaheadExpired = value;
    }
    /**
     * Handle click events for listbox options.
     *
     * @internal
     */
    clickHandler(e) {
        const captured = e.target.closest(`option,[role=option]`);
        if (captured && !captured.disabled) {
            this.selectedIndex = this.options.indexOf(captured);
            return true;
        }
    }
    /**
     * Focus the first selected option and scroll it into view.
     *
     * @internal
     */
    focusAndScrollOptionIntoView() {
        if (this.contains(document.activeElement) && this.firstSelectedOption) {
            this.firstSelectedOption.focus();
            requestAnimationFrame(() => {
                this.firstSelectedOption.scrollIntoView({ block: "nearest" });
            });
        }
    }
    /**
     * Handles `focusin` actions for the component. When the component receives focus,
     * the list of selected options is refreshed and the first selected option is scrolled
     * into view.
     *
     * @internal
     */
    focusinHandler(e) {
        if (!this.shouldSkipFocus && e.target === e.currentTarget) {
            this.setSelectedOptions();
            this.focusAndScrollOptionIntoView();
        }
        this.shouldSkipFocus = false;
    }
    /**
     * Moves focus to an option whose label matches characters typed by the user.
     * Consecutive keystrokes are batched into a buffer of search text used
     * to match against the set of options.  If `TYPE_AHEAD_TIMEOUT_MS` passes
     * between consecutive keystrokes, the search restarts.
     *
     * @param key - the key to be evaluated
     */
    handleTypeAhead(key) {
        if (this.typeaheadTimeout) {
            window.clearTimeout(this.typeaheadTimeout);
        }
        this.typeaheadTimeout = window.setTimeout(() => (this.typeaheadExpired = true), Listbox.TYPE_AHEAD_TIMEOUT_MS);
        if (key.length > 1) {
            return;
        }
        this.typeaheadBuffer = `${this.typeaheadExpired ? "" : this.typeaheadBuffer}${key}`;
    }
    /**
     * Handles `keydown` actions for listbox navigation and typeahead.
     *
     * @internal
     */
    keydownHandler(e) {
        if (this.disabled) {
            return true;
        }
        this.shouldSkipFocus = false;
        const key = e.key;
        switch (key) {
            // Select the first available option
            case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyHome: {
                if (!e.shiftKey) {
                    e.preventDefault();
                    this.selectFirstOption();
                }
                break;
            }
            // Select the next selectable option
            case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyArrowDown: {
                if (!e.shiftKey) {
                    e.preventDefault();
                    this.selectNextOption();
                }
                break;
            }
            // Select the previous selectable option
            case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyArrowUp: {
                if (!e.shiftKey) {
                    e.preventDefault();
                    this.selectPreviousOption();
                }
                break;
            }
            // Select the last available option
            case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyEnd: {
                e.preventDefault();
                this.selectLastOption();
                break;
            }
            case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyTab: {
                this.focusAndScrollOptionIntoView();
                return true;
            }
            case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyEnter:
            case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyEscape: {
                return true;
            }
            case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keySpace: {
                if (this.typeaheadExpired) {
                    return true;
                }
            }
            // Send key to Typeahead handler
            default: {
                if (key.length === 1) {
                    this.handleTypeAhead(`${key}`);
                }
                return true;
            }
        }
    }
    /**
     * Prevents `focusin` events from firing before `click` events when the
     * element is unfocused.
     *
     * @internal
     */
    mousedownHandler(e) {
        this.shouldSkipFocus = !this.contains(document.activeElement);
        return true;
    }
    /**
     * Updates the list of selected options when the `selectedIndex` changes.
     *
     * @param prev - the previous selected index value
     * @param next - the current selected index value
     *
     * @internal
     */
    selectedIndexChanged(prev, next) {
        this.setSelectedOptions();
    }
    /**
     * Updates the selectedness of each option when the list of selected options changes.
     *
     * @param prev - the previous list of selected options
     * @param next - the current list of selected options
     *
     * @internal
     */
    selectedOptionsChanged(prev, next) {
        if (this.$fastController.isConnected) {
            this.options.forEach(o => {
                o.selected = next.includes(o);
            });
        }
    }
    /**
     * Moves focus to the first selectable option.
     *
     * @public
     */
    selectFirstOption() {
        if (!this.disabled) {
            this.selectedIndex = 0;
        }
    }
    /**
     * Moves focus to the last selectable option.
     *
     * @internal
     */
    selectLastOption() {
        if (!this.disabled) {
            this.selectedIndex = this.options.length - 1;
        }
    }
    /**
     * Moves focus to the next selectable option.
     *
     * @internal
     */
    selectNextOption() {
        if (!this.disabled &&
            this.options &&
            this.selectedIndex < this.options.length - 1) {
            this.selectedIndex += 1;
        }
    }
    /**
     * Moves focus to the previous selectable option.
     *
     * @internal
     */
    selectPreviousOption() {
        if (!this.disabled && this.selectedIndex > 0) {
            this.selectedIndex = this.selectedIndex - 1;
        }
    }
    /**
     * Updates the selected index to match the first selected option.
     *
     * @internal
     */
    setDefaultSelectedOption() {
        if (this.options && this.$fastController.isConnected) {
            const selectedIndex = this.options.findIndex(el => el.getAttribute("selected") !== null);
            if (selectedIndex !== -1) {
                this.selectedIndex = selectedIndex;
                return;
            }
            this.selectedIndex = 0;
        }
    }
    /**
     * Sets the selected option and gives it focus.
     *
     * @public
     */
    setSelectedOptions() {
        var _a, _b, _c;
        if (this.$fastController.isConnected && this.options) {
            const selectedOption = (_a = this.options[this.selectedIndex]) !== null && _a !== void 0 ? _a : null;
            this.selectedOptions = this.options.filter(el => el.isSameNode(selectedOption));
            this.ariaActiveDescendant = (_c = (_b = this.firstSelectedOption) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : "";
            this.focusAndScrollOptionIntoView();
        }
    }
    /**
     * Updates the list of options and resets the selected option when the slotted option content changes.
     *
     * @param prev - the previous list of slotted options
     * @param next - the current list of slotted options
     *
     * @internal
     */
    slottedOptionsChanged(prev, next) {
        this.options = next.reduce((options, item) => {
            if ((0,_listbox_option_listbox_option__WEBPACK_IMPORTED_MODULE_3__.isListboxOption)(item)) {
                options.push(item);
            }
            return options;
        }, []);
        const setSize = `${this.options.length}`;
        this.options.forEach((option, index) => {
            if (!option.id) {
                option.id = (0,_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_4__.uniqueId)("option-");
            }
            option.ariaPosInSet = `${index + 1}`;
            option.ariaSetSize = setSize;
        });
        if (this.$fastController.isConnected) {
            this.setSelectedOptions();
            this.setDefaultSelectedOption();
        }
    }
    /**
     * Updates the filtered list of options when the typeahead buffer changes.
     *
     * @param prev - the previous typeahead buffer value
     * @param next - the current typeahead buffer value
     *
     * @internal
     */
    typeaheadBufferChanged(prev, next) {
        if (this.$fastController.isConnected) {
            const pattern = this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
            const re = new RegExp(`^${pattern}`, "gi");
            const filteredOptions = this.options.filter((o) => o.text.trim().match(re));
            if (filteredOptions.length) {
                const selectedIndex = this.options.indexOf(filteredOptions[0]);
                if (selectedIndex > -1) {
                    this.selectedIndex = selectedIndex;
                }
            }
            this.typeaheadExpired = false;
        }
    }
}
/**
 * A static filter to include only selectable options.
 *
 * @param n - element to filter
 * @public
 */
Listbox.slottedOptionFilter = (n) => (0,_listbox_option_listbox_option__WEBPACK_IMPORTED_MODULE_3__.isListboxOption)(n) && !n.disabled && !n.hidden;
/**
 * Typeahead timeout in milliseconds.
 *
 * @internal
 */
Listbox.TYPE_AHEAD_TIMEOUT_MS = 1000;
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr)({ mode: "boolean" })
], Listbox.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.observable
], Listbox.prototype, "selectedIndex", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.observable
], Listbox.prototype, "selectedOptions", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.observable
], Listbox.prototype, "slottedOptions", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.observable
], Listbox.prototype, "typeaheadBuffer", void 0);
/**
 * Includes ARIA states and properties relating to the ARIA listbox role
 *
 * @public
 */
class DelegatesARIAListbox {
}
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.observable
], DelegatesARIAListbox.prototype, "ariaActiveDescendant", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.observable
], DelegatesARIAListbox.prototype, "ariaDisabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.observable
], DelegatesARIAListbox.prototype, "ariaExpanded", void 0);
(0,_utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_7__.applyMixins)(DelegatesARIAListbox, _patterns_aria_global__WEBPACK_IMPORTED_MODULE_8__.ARIAGlobalStatesAndProperties);
(0,_utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_7__.applyMixins)(Listbox, DelegatesARIAListbox);


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/select/select.options.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/select/select.options.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPosition": () => (/* binding */ SelectPosition)
/* harmony export */ });
/**
 * Positioning directions for the listbox when a select is open.
 * @public
 */
var SelectPosition;
(function (SelectPosition) {
    SelectPosition["above"] = "above";
    SelectPosition["below"] = "below";
})(SelectPosition || (SelectPosition = {}));


/***/ }),

/***/ "./node_modules/@microsoft/fast-web-utilities/dist/numbers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@microsoft/fast-web-utilities/dist/numbers.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapInBounds": () => (/* binding */ wrapInBounds),
/* harmony export */   "limit": () => (/* binding */ limit)
/* harmony export */ });
/**
 * This method keeps a given value within the bounds of a min and max value. If the value
 * is larger than the max, the minimum value will be returned. If the value is smaller than the minimum,
 * the maximum will be returned. Otherwise, the value is returned un-changed.
 */
function wrapInBounds(min, max, value) {
    if (value < min) {
        return max;
    }
    else if (value > max) {
        return min;
    }
    return value;
}
/**
 * Ensures that a value is between a min and max value. If value is lower than min, min will be returned.
 * If value is greater than max, max will be returned.
 */
function limit(min, max, value) {
    return Math.min(Math.max(value, min), max);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-web-utilities/dist/strings.js":
/*!********************************************************************!*\
  !*** ./node_modules/@microsoft/fast-web-utilities/dist/strings.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniqueId": () => (/* binding */ uniqueId),
/* harmony export */   "format": () => (/* binding */ format),
/* harmony export */   "startsWith": () => (/* binding */ startsWith),
/* harmony export */   "isNullOrWhiteSpace": () => (/* binding */ isNullOrWhiteSpace),
/* harmony export */   "pascalCase": () => (/* binding */ pascalCase),
/* harmony export */   "spinalCase": () => (/* binding */ spinalCase)
/* harmony export */ });
let uniqueIdCounter = 0;
/**
 * Generates a unique ID based on incrementing a counter.
 */
function uniqueId(prefix = "") {
    return `${prefix}${uniqueIdCounter++}`;
}
/**
 * Builds a string from a format specifier and replacement parameters.
 */
function format(formatSpecifier, ...parameters) {
    return formatSpecifier.replace(/{(\d+)}/g, function (match, index) {
        if (index >= parameters.length) {
            return match;
        }
        const value = parameters[index];
        if (typeof value !== "number" && !value) {
            return "";
        }
        return value;
    });
}
/**
 * Check to see if one string starts with another
 */
function startsWith(stringToSearch, searchFor, position = 0) {
    if (!stringToSearch || !searchFor) {
        return false;
    }
    return stringToSearch.substr(position, searchFor.length) === searchFor;
}
/**
 * Matches all instances of the RegExp in the string. Operates similarly to the
 * native `String.matchAll`, which is not yet available on all supported
 * browsers. Note that the regex *must* be global.
 */
function matchAll(re, str) {
    const matches = [];
    let match;
    while ((match = re.exec(str))) {
        matches.push(match[1]);
    }
    re.lastIndex = 0;
    return matches;
}
/**
 * Determines if the specified string is undefined, null, empty, or whitespace.
 * True if the value is undefined, null, empty, or whitespace, otherwise false.
 */
function isNullOrWhiteSpace(value) {
    return !value || !value.trim();
}
const wordRe = /([A-Z]+[a-z0-9]*|[A-Z]*[a-z0-9]+)/g;
/**
 * Converts a string to Pascal Case
 */
function pascalCase(value) {
    return matchAll(wordRe, value)
        .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
        .join("");
}
/**
 * converts a string from camelCase or pascalCase to spinal-case
 * which is an lowercase dash separated naming style.
 *
 * An example of spinal case: foo-bar-bat
 */
function spinalCase(value) {
    const valueWithLowerCaseFirstLetter = `${value
        .charAt(0)
        .toLowerCase()}${value.slice(1)}`;
    return valueWithLowerCaseFirstLetter.replace(/([A-Z])/g, function (match, group1) {
        return `-${group1.toLowerCase()}`;
    });
}


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
/* harmony import */ var _src_components_dog_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/components/dog-card */ "./src/components/dog-card.ts");
/* harmony import */ var _src_components_breed_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/breed-search */ "./src/components/breed-search.ts");
/* harmony import */ var _src_components_breed_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/breed-selector */ "./src/components/breed-selector.ts");




(0,_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_3__.provideFASTDesignSystem)().register((0,_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_4__.fastCard)(), (0,_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_5__.fastButton)(), (0,_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_6__.fastCombobox)());
_src_components_dog_card__WEBPACK_IMPORTED_MODULE_0__.DogCard;
_src_components_breed_search__WEBPACK_IMPORTED_MODULE_1__.BreedSearch;
_src_components_breed_selector__WEBPACK_IMPORTED_MODULE_2__.BreedSelector;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("69c266a98cc1ac63be13")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjYyNDNhNzYwNDU0MTU5OTEzYWIwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQzZCO0FBQ21CO0FBQ3ZDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ08sZ0RBQWdELHdEQUFHO0FBQzFELE1BQU0sbUVBQVk7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHNFQUFjO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnRUFBb0I7QUFDekMsdUJBQXVCLGtFQUFzQjtBQUM3QywrQkFBK0IsdURBQVcsRUFBRTtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isb0VBQVksQ0FBQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDcUY7QUFDeEI7QUFDN0Q7QUFDQSw4QkFBOEIsMkNBQTJDO0FBQ3pFLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxxQkFBcUIsd0VBQWdCO0FBQzVDO0FBQ0EsWUFBWTtBQUNaLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNvQjtBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENVO0FBQ3NFO0FBQ3ZEO0FBQzZZO0FBQzFaO0FBQ0Y7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDTyw4Q0FBOEMsd0RBQUc7QUFDeEQsTUFBTSxtRUFBTyxpQkFBaUI7QUFDOUI7QUFDQSxzQkFBc0IsZ0VBQW9CO0FBQzFDLDhCQUE4QiwrREFBbUIsRUFBRTtBQUNuRCx1QkFBdUIsdURBQVcsRUFBRSxlQUFlLDBEQUFjO0FBQ2pFO0FBQ0EsaUJBQWlCLGlFQUFxQjtBQUN0Qyx1QkFBdUIsb0RB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvRUFBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RUFBRSxJQUFJO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0VBQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUVBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUVBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUVBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUVBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1FQUFRO0FBQ3pCLGlCQUFpQixvRUFBUztBQUMxQjtBQUNBO0FBQ0EsaUJBQWlCLG1FQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLElBQUk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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cy9AbWljcm9zb2Z0L2Zhc3QtY29tcG9uZW50cy9kaXN0L2VzbS9jb21ib2JveC9jb21ib2JveC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1jb21wb25lbnRzL2Rpc3QvZXNtL2NvbWJvYm94L2luZGV4LmpzIiwid2VicGFjazovL2Zhc3QtZG9ncy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtY29tcG9uZW50cy9kaXN0L2VzbS9zZWxlY3Qvc2VsZWN0LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24vZGlzdC9lc20vY29tYm9ib3gvY29tYm9ib3guZm9ybS1hc3NvY2lhdGVkLmpzIiwid2VicGFjazovL2Zhc3QtZG9ncy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbi9kaXN0L2VzbS9jb21ib2JveC9jb21ib2JveC5qcyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24vZGlzdC9lc20vY29tYm9ib3gvY29tYm9ib3gub3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24vZGlzdC9lc20vY29tYm9ib3gvY29tYm9ib3gudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1mb3VuZGF0aW9uL2Rpc3QvZXNtL2xpc3Rib3gtb3B0aW9uL2xpc3Rib3gtb3B0aW9uLmpzIiwid2VicGFjazovL2Zhc3QtZG9ncy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbi9kaXN0L2VzbS9saXN0Ym94L2xpc3Rib3guanMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1mb3VuZGF0aW9uL2Rpc3QvZXNtL3NlbGVjdC9zZWxlY3Qub3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LXdlYi11dGlsaXRpZXMvZGlzdC9udW1iZXJzLmpzIiwid2VicGFjazovL2Zhc3QtZG9ncy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3Qtd2ViLXV0aWxpdGllcy9kaXN0L3N0cmluZ3MuanMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGRpc2FibGVkQ3Vyc29yLCBmb2N1c1Zpc2libGUsIH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC1mb3VuZGF0aW9uXCI7XG5pbXBvcnQgeyBzdHJva2VXaWR0aCwgdHlwZVJhbXBCYXNlRm9udFNpemUsIHR5cGVSYW1wQmFzZUxpbmVIZWlnaHQsIH0gZnJvbSBcIi4uL2Rlc2lnbi10b2tlbnNcIjtcbmltcG9ydCB7IHNlbGVjdFN0eWxlcyB9IGZyb20gXCIuLi9zZWxlY3Qvc2VsZWN0LnN0eWxlc1wiO1xuLyoqXG4gKiBTdHlsZXMgZm9yIENvbWJvYm94XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBjb21ib2JveFN0eWxlcyA9IChjb250ZXh0LCBkZWZpbml0aW9uKSA9PiBjc3MgYFxuICAgICR7c2VsZWN0U3R5bGVzKGNvbnRleHQsIGRlZmluaXRpb24pfVxuXG4gICAgOmhvc3QoOmVtcHR5KSAubGlzdGJveCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkgKixcbiAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIGN1cnNvcjogJHtkaXNhYmxlZEN1cnNvcn07XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cblxuICAgIC5zZWxlY3RlZC12YWx1ZSB7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogJHt0eXBlUmFtcEJhc2VGb250U2l6ZX07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAke3R5cGVSYW1wQmFzZUxpbmVIZWlnaHR9O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICgke3N0cm9rZVdpZHRofSAqIDFweCkpO1xuICAgICAgICBtYXJnaW46IGF1dG8gMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnNlbGVjdGVkLXZhbHVlOmhvdmVyLFxuICAgIC5zZWxlY3RlZC12YWx1ZToke2ZvY3VzVmlzaWJsZX0sXG4gICAgLnNlbGVjdGVkLXZhbHVlOmRpc2FibGVkLFxuICAgIC5zZWxlY3RlZC12YWx1ZTphY3RpdmUge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbmA7XG4iLCJpbXBvcnQgeyBDb21ib2JveCwgY29tYm9ib3hUZW1wbGF0ZSBhcyB0ZW1wbGF0ZSwgfSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb25cIjtcbmltcG9ydCB7IGNvbWJvYm94U3R5bGVzIGFzIHN0eWxlcyB9IGZyb20gXCIuL2NvbWJvYm94LnN0eWxlc1wiO1xuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHtAbGluayBAbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbiNDb21ib2JveH0gcmVnaXN0cmF0aW9uIGZvciBjb25maWd1cmluZyB0aGUgY29tcG9uZW50IHdpdGggYSBEZXNpZ25TeXN0ZW0uXG4gKiBJbXBsZW1lbnRzIHtAbGluayBAbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbiNjb21ib2JveFRlbXBsYXRlfVxuICpcbiAqIEBwdWJsaWNcbiAqIEByZW1hcmtzXG4gKiBHZW5lcmF0ZXMgSFRNTCBFbGVtZW50OiBgPGZhc3QtY29tYm9ib3g+YFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IGZhc3RDb21ib2JveCA9IENvbWJvYm94LmNvbXBvc2Uoe1xuICAgIGJhc2VOYW1lOiBcImNvbWJvYm94XCIsXG4gICAgdGVtcGxhdGUsXG4gICAgc3R5bGVzLFxuICAgIHNoYWRvd09wdGlvbnM6IHtcbiAgICAgICAgZGVsZWdhdGVzRm9jdXM6IHRydWUsXG4gICAgfSxcbiAgICBpbmRpY2F0b3I6IGBcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QtaW5kaWNhdG9yXCJcbiAgICAgICAgICAgIHBhcnQ9XCJzZWxlY3QtaW5kaWNhdG9yXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTIgN1wiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTExLjg1LjY1Yy4yLjIuMi41IDAgLjdMNi40IDYuODRhLjU1LjU1IDAgMDEtLjc4IDBMLjE0IDEuMzVhLjUuNSAwIDExLjcxLS43TDYgNS44IDExLjE1LjY1Yy4yLS4yLjUtLjIuNyAwelwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICBgLFxufSk7XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIENvbWJvYm94XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCB7IENvbWJvYm94IH07XG5leHBvcnQgeyBzdHlsZXMgYXMgY29tYm9ib3hTdHlsZXMgfTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xuaW1wb3J0IHsgZGlzYWJsZWRDdXJzb3IsIGRpc3BsYXksIGZvY3VzVmlzaWJsZSwgZm9yY2VkQ29sb3JzU3R5bGVzaGVldEJlaGF2aW9yLCB9IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvblwiO1xuaW1wb3J0IHsgU3lzdGVtQ29sb3JzIH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC13ZWItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBhY2NlbnRGaWxsQWN0aXZlLCBhY2NlbnRGaWxsRm9jdXMsIGFjY2VudEZpbGxIb3ZlciwgYWNjZW50RmlsbFJlc3QsIGJvZHlGb250LCBjb250cm9sQ29ybmVyUmFkaXVzLCBkZXNpZ25Vbml0LCBkaXNhYmxlZE9wYWNpdHksIGZvY3VzU3Ryb2tlSW5uZXIsIGZvY3VzU3Ryb2tlT3V0ZXIsIGZvY3VzU3Ryb2tlV2lkdGgsIGZvcmVncm91bmRPbkFjY2VudEZvY3VzLCBuZXV0cmFsRmlsbElucHV0QWN0aXZlLCBuZXV0cmFsRmlsbElucHV0SG92ZXIsIG5ldXRyYWxGaWxsSW5wdXRSZXN0LCBuZXV0cmFsRmlsbFN0ZWFsdGhSZXN0LCBuZXV0cmFsRm9yZWdyb3VuZFJlc3QsIG5ldXRyYWxMYXllckZsb2F0aW5nLCBuZXV0cmFsU3Ryb2tlUmVzdCwgc3Ryb2tlV2lkdGgsIHR5cGVSYW1wQmFzZUZvbnRTaXplLCB0eXBlUmFtcEJhc2VMaW5lSGVpZ2h0LCB9IGZyb20gXCIuLi9kZXNpZ24tdG9rZW5zXCI7XG5pbXBvcnQgeyBlbGV2YXRpb24gfSBmcm9tIFwiLi4vc3R5bGVzL2VsZXZhdGlvblwiO1xuaW1wb3J0IHsgaGVpZ2h0TnVtYmVyIH0gZnJvbSBcIi4uL3N0eWxlcy9zaXplXCI7XG4vKipcbiAqIFN0eWxlcyBmb3IgU2VsZWN0XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZWxlY3RTdHlsZXMgPSAoY29udGV4dCwgZGVmaW5pdGlvbikgPT4gY3NzIGBcbiAgICAke2Rpc3BsYXkoXCJpbmxpbmUtZmxleFwiKX0gOmhvc3Qge1xuICAgICAgICAtLWVsZXZhdGlvbjogMTQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7bmV1dHJhbEZpbGxJbnB1dFJlc3R9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjKCR7Y29udHJvbENvcm5lclJhZGl1c30gKiAxcHgpO1xuICAgICAgICBib3JkZXI6IGNhbGMoJHtzdHJva2VXaWR0aH0gKiAxcHgpIHNvbGlkICR7YWNjZW50RmlsbFJlc3R9O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjb2xvcjogJHtuZXV0cmFsRm9yZWdyb3VuZFJlc3R9O1xuICAgICAgICBmb250LWZhbWlseTogJHtib2R5Rm9udH07XG4gICAgICAgIGhlaWdodDogY2FsYygke2hlaWdodE51bWJlcn0gKiAxcHgpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIH1cblxuICAgIC5saXN0Ym94IHtcbiAgICAgICAgJHtlbGV2YXRpb259XG4gICAgICAgIGJhY2tncm91bmQ6ICR7bmV1dHJhbExheWVyRmxvYXRpbmd9O1xuICAgICAgICBib3JkZXI6IGNhbGMoJHtzdHJva2VXaWR0aH0gKiAxcHgpIHNvbGlkICR7bmV1dHJhbFN0cm9rZVJlc3R9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjKCR7Y29udHJvbENvcm5lclJhZGl1c30gKiAxcHgpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYyh2YXIoLS1tYXgtaGVpZ2h0KSAtICgke2hlaWdodE51bWJlcn0gKiAxcHgpKTtcbiAgICAgICAgcGFkZGluZzogY2FsYygke2Rlc2lnblVuaXR9ICogMXB4KSAwO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5saXN0Ym94W2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5jb250cm9sIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6ICR7dHlwZVJhbXBCYXNlRm9udFNpemV9O1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICR7dHlwZVJhbXBCYXNlTGluZUhlaWdodH07XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgY2FsYygke2Rlc2lnblVuaXR9ICogMi4yNXB4KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgOmhvc3QoOm5vdChbZGlzYWJsZWRdKTpob3Zlcikge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke25ldXRyYWxGaWxsSW5wdXRIb3Zlcn07XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHthY2NlbnRGaWxsSG92ZXJ9O1xuICAgIH1cblxuICAgIDpob3N0KDoke2ZvY3VzVmlzaWJsZX0pIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke2ZvY3VzU3Ryb2tlT3V0ZXJ9O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCBjYWxjKCR7Zm9jdXNTdHJva2VXaWR0aH0gKiAxcHgpICR7Zm9jdXNTdHJva2VPdXRlcn07XG4gICAgfVxuXG4gICAgOmhvc3QoOiR7Zm9jdXNWaXNpYmxlfSkgOjpzbG90dGVkKFthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXVtyb2xlPVwib3B0aW9uXCJdOm5vdChbZGlzYWJsZWRdKSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCBjYWxjKCR7Zm9jdXNTdHJva2VXaWR0aH0gKiAxcHgpIGluc2V0ICR7Zm9jdXNTdHJva2VJbm5lcn07XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHtmb2N1c1N0cm9rZU91dGVyfTtcbiAgICAgICAgYmFja2dyb3VuZDogJHthY2NlbnRGaWxsRm9jdXN9O1xuICAgICAgICBjb2xvcjogJHtmb3JlZ3JvdW5kT25BY2NlbnRGb2N1c307XG4gICAgfVxuXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBjdXJzb3I6ICR7ZGlzYWJsZWRDdXJzb3J9O1xuICAgICAgICBvcGFjaXR5OiAke2Rpc2FibGVkT3BhY2l0eX07XG4gICAgfVxuXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkgLmNvbnRyb2wge1xuICAgICAgICBjdXJzb3I6ICR7ZGlzYWJsZWRDdXJzb3J9O1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG5cbiAgICA6aG9zdChbZGlzYWJsZWRdOmhvdmVyKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7bmV1dHJhbEZpbGxTdGVhbHRoUmVzdH07XG4gICAgICAgIGNvbG9yOiAke25ldXRyYWxGb3JlZ3JvdW5kUmVzdH07XG4gICAgICAgIGZpbGw6IGN1cnJlbnRjb2xvcjtcbiAgICB9XG5cbiAgICA6aG9zdCg6bm90KFtkaXNhYmxlZF0pKSAuY29udHJvbDphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke25ldXRyYWxGaWxsSW5wdXRBY3RpdmV9O1xuICAgICAgICBib3JkZXItY29sb3I6ICR7YWNjZW50RmlsbEFjdGl2ZX07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGMoJHtjb250cm9sQ29ybmVyUmFkaXVzfSAqIDFweCk7XG4gICAgfVxuXG4gICAgOmhvc3QoW29wZW5dW3Bvc2l0aW9uPVwiYWJvdmVcIl0pIC5saXN0Ym94IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgfVxuXG4gICAgOmhvc3QoW29wZW5dW3Bvc2l0aW9uPVwiYmVsb3dcIl0pIC5saXN0Ym94IHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgfVxuXG4gICAgOmhvc3QoW29wZW5dW3Bvc2l0aW9uPVwiYWJvdmVcIl0pIC5saXN0Ym94IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgYm90dG9tOiBjYWxjKCR7aGVpZ2h0TnVtYmVyfSAqIDFweCk7XG4gICAgfVxuXG4gICAgOmhvc3QoW29wZW5dW3Bvc2l0aW9uPVwiYmVsb3dcIl0pIC5saXN0Ym94IHtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgdG9wOiBjYWxjKCR7aGVpZ2h0TnVtYmVyfSAqIDFweCk7XG4gICAgfVxuXG4gICAgLnNlbGVjdGVkLXZhbHVlIHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLmluZGljYXRvciB7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxZW07XG4gICAgfVxuXG4gICAgc2xvdFtuYW1lPVwibGlzdGJveFwiXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIDpob3N0KFtvcGVuXSkgc2xvdFtuYW1lPVwibGlzdGJveFwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgJHtlbGV2YXRpb259XG4gICAgfVxuXG4gICAgLmVuZCB7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gICAgfVxuXG4gICAgLnN0YXJ0LFxuICAgIC5lbmQsXG4gICAgLmluZGljYXRvcixcbiAgICAuc2VsZWN0LWluZGljYXRvcixcbiAgICA6OnNsb3R0ZWQoc3ZnKSB7XG4gICAgICAgIC8qIFRPRE86IGFkYXB0aXZlIHR5cG9ncmFwaHkgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9mYXN0L2lzc3Vlcy8yNDMyICovXG4gICAgICAgIGZpbGw6IGN1cnJlbnRjb2xvcjtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoJHtkZXNpZ25Vbml0fSAqIDRweCk7XG4gICAgICAgIG1pbi13aWR0aDogY2FsYygke2Rlc2lnblVuaXR9ICogNHB4KTtcbiAgICAgICAgd2lkdGg6IDFlbTtcbiAgICB9XG5cbiAgICA6OnNsb3R0ZWQoW3JvbGU9XCJvcHRpb25cIl0pLFxuICAgIDo6c2xvdHRlZChvcHRpb24pIHtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgfVxuXG5gLndpdGhCZWhhdmlvcnMoZm9yY2VkQ29sb3JzU3R5bGVzaGVldEJlaGF2aW9yKGNzcyBgXG4gICAgICAgICAgICA6aG9zdCg6bm90KFtkaXNhYmxlZF0pOmhvdmVyKSxcbiAgICAgICAgICAgIDpob3N0KDpub3QoW2Rpc2FibGVkXSk6YWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke1N5c3RlbUNvbG9ycy5IaWdobGlnaHR9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA6aG9zdCg6bm90KFtkaXNhYmxlZF0pOiR7Zm9jdXNWaXNpYmxlfSkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7U3lzdGVtQ29sb3JzLkJ1dHRvbkZhY2V9O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIGNhbGMoJHtmb2N1c1N0cm9rZVdpZHRofSAqIDFweCkgJHtTeXN0ZW1Db2xvcnMuSGlnaGxpZ2h0fTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtTeXN0ZW1Db2xvcnMuQnV0dG9uVGV4dH07XG4gICAgICAgICAgICAgICAgZmlsbDogY3VycmVudGNvbG9yO1xuICAgICAgICAgICAgICAgIGZvcmNlZC1jb2xvci1hZGp1c3Q6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDpob3N0KDpub3QoW2Rpc2FibGVkXSk6JHtmb2N1c1Zpc2libGV9KSAubGlzdGJveCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtTeXN0ZW1Db2xvcnMuQnV0dG9uRmFjZX07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7U3lzdGVtQ29sb3JzLkdyYXlUZXh0fTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke1N5c3RlbUNvbG9ycy5CdXR0b25GYWNlfTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtTeXN0ZW1Db2xvcnMuR3JheVRleHR9O1xuICAgICAgICAgICAgICAgIGZpbGw6IGN1cnJlbnRjb2xvcjtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIGZvcmNlZC1jb2xvci1hZGp1c3Q6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDpob3N0KFtkaXNhYmxlZF06aG92ZXIpIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke1N5c3RlbUNvbG9ycy5CdXR0b25GYWNlfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgLmNvbnRyb2wge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke1N5c3RlbUNvbG9ycy5HcmF5VGV4dH07XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke1N5c3RlbUNvbG9ycy5HcmF5VGV4dH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDpob3N0KFtkaXNhYmxlZF0pIC5jb250cm9sIC5zZWxlY3QtaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBmaWxsOiAke1N5c3RlbUNvbG9ycy5HcmF5VGV4dH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDpob3N0KDoke2ZvY3VzVmlzaWJsZX0pIDo6c2xvdHRlZChbYXJpYS1zZWxlY3RlZD1cInRydWVcIl1bcm9sZT1cIm9wdGlvblwiXSksXG4gICAgICAgICAgICA6aG9zdCg6JHtmb2N1c1Zpc2libGV9KSA6OnNsb3R0ZWQob3B0aW9uW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdKSxcbiAgICAgICAgICAgIDpob3N0KDoke2ZvY3VzVmlzaWJsZX0pIDo6c2xvdHRlZChbYXJpYS1zZWxlY3RlZD1cInRydWVcIl1bcm9sZT1cIm9wdGlvblwiXTpub3QoW2Rpc2FibGVkXSkpIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke1N5c3RlbUNvbG9ycy5IaWdobGlnaHR9O1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtTeXN0ZW1Db2xvcnMuQnV0dG9uVGV4dH07XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgY2FsYygke2ZvY3VzU3Ryb2tlV2lkdGh9ICogMXB4KSBpbnNldCAke1N5c3RlbUNvbG9ycy5IaWdobGlnaHRUZXh0fTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtTeXN0ZW1Db2xvcnMuSGlnaGxpZ2h0VGV4dH07XG4gICAgICAgICAgICAgICAgZmlsbDogY3VycmVudGNvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3RhcnQsXG4gICAgICAgICAgICAuZW5kLFxuICAgICAgICAgICAgLmluZGljYXRvcixcbiAgICAgICAgICAgIC5zZWxlY3QtaW5kaWNhdG9yLFxuICAgICAgICAgICAgOjpzbG90dGVkKHN2Zykge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke1N5c3RlbUNvbG9ycy5CdXR0b25UZXh0fTtcbiAgICAgICAgICAgICAgICBmaWxsOiBjdXJyZW50Y29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIGApKTtcbiIsImltcG9ydCB7IEZvcm1Bc3NvY2lhdGVkIH0gZnJvbSBcIi4uL2Zvcm0tYXNzb2NpYXRlZC9mb3JtLWFzc29jaWF0ZWRcIjtcbmltcG9ydCB7IExpc3Rib3ggfSBmcm9tIFwiLi4vbGlzdGJveC9saXN0Ym94XCI7XG5jbGFzcyBfQ29tYm9ib3ggZXh0ZW5kcyBMaXN0Ym94IHtcbn1cbi8qKlxuICogQSBmb3JtLWFzc29jaWF0ZWQgYmFzZSBjbGFzcyBmb3IgdGhlIHtAbGluayAoQ29tYm9ib3g6Y2xhc3MpfSBjb21wb25lbnQuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtQXNzb2NpYXRlZENvbWJvYm94IGV4dGVuZHMgRm9ybUFzc29jaWF0ZWQoX0NvbWJvYm94KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJveHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgX19kZWNvcmF0ZSB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgYXR0ciwgT2JzZXJ2YWJsZSwgb2JzZXJ2YWJsZSB9IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xuaW1wb3J0IHsgbGltaXQsIHVuaXF1ZUlkIH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC13ZWItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBEZWxlZ2F0ZXNBUklBTGlzdGJveCB9IGZyb20gXCIuLi9saXN0Ym94XCI7XG5pbXBvcnQgeyBTdGFydEVuZCB9IGZyb20gXCIuLi9wYXR0ZXJucy9zdGFydC1lbmRcIjtcbmltcG9ydCB7IFNlbGVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uL3NlbGVjdC9zZWxlY3Qub3B0aW9uc1wiO1xuaW1wb3J0IHsgYXBwbHlNaXhpbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FwcGx5LW1peGluc1wiO1xuaW1wb3J0IHsgRm9ybUFzc29jaWF0ZWRDb21ib2JveCB9IGZyb20gXCIuL2NvbWJvYm94LmZvcm0tYXNzb2NpYXRlZFwiO1xuaW1wb3J0IHsgQ29tYm9ib3hBdXRvY29tcGxldGUgfSBmcm9tIFwiLi9jb21ib2JveC5vcHRpb25zXCI7XG4vKipcbiAqIEEgQ29tYm9ib3ggQ3VzdG9tIEhUTUwgRWxlbWVudC5cbiAqIEltcGxlbWVudHMgdGhlIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vYXJpYS1wcmFjdGljZXMvI2NvbWJvYm94IHwgQVJJQSBjb21ib2JveCB9LlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIENvbWJvYm94IGV4dGVuZHMgRm9ybUFzc29jaWF0ZWRDb21ib2JveCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW50ZXJuYWwgdmFsdWUgcHJvcGVydHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fdmFsdWUgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNvbGxlY3Rpb24gb2YgY3VycmVudGx5IGZpbHRlcmVkIG9wdGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudCBmaWx0ZXIgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5maWx0ZXIgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIHBvc2l0aW9uIGF0dHJpYnV0ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcmNlZFBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIGlkIG9mIHRoZSBpbnRlcm5hbCBsaXN0Ym94LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGlzdGJveElkID0gdW5pcXVlSWQoXCJsaXN0Ym94LVwiKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXggaGVpZ2h0IGZvciB0aGUgbGlzdGJveCB3aGVuIG9wZW5lZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1heEhlaWdodCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3BlbiBhdHRyaWJ1dGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHJlbWFya3NcbiAgICAgICAgICogSFRNTCBBdHRyaWJ1dGU6IG9wZW5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGNhbGN1bGF0ZWQgcG9zaXRpb24gb2YgdGhlIGxpc3Rib3guXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBTZWxlY3RQb3NpdGlvbi5iZWxvdztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIGVsZW1lbnQgdG8gaXRzIGZpcnN0IHNlbGVjdGFibGUgb3B0aW9uIHdoZW4gaXRzIHBhcmVudCBmb3JtIGlzIHJlc2V0LlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgZm9ybVJlc2V0Q2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmZvcm1SZXNldENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFNlbGVjdGVkT3B0aW9uKCk7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICB9XG4gICAgZ2V0IGlzQXV0b2NvbXBsZXRlSW5saW5lKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuYXV0b2NvbXBsZXRlID09PSBDb21ib2JveEF1dG9jb21wbGV0ZS5pbmxpbmUgfHwgdGhpcy5pc0F1dG9jb21wbGV0ZUJvdGgpO1xuICAgIH1cbiAgICBnZXQgaXNBdXRvY29tcGxldGVMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRvY29tcGxldGUgPT09IENvbWJvYm94QXV0b2NvbXBsZXRlLmxpc3QgfHwgdGhpcy5pc0F1dG9jb21wbGV0ZUJvdGg7XG4gICAgfVxuICAgIGdldCBpc0F1dG9jb21wbGV0ZUJvdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dG9jb21wbGV0ZSA9PT0gQ29tYm9ib3hBdXRvY29tcGxldGUuYm90aDtcbiAgICB9XG4gICAgbWF4SGVpZ2h0Q2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdGJveCkge1xuICAgICAgICAgICAgdGhpcy5saXN0Ym94LnN0eWxlLnNldFByb3BlcnR5KFwiLS1tYXgtaGVpZ2h0XCIsIGAke3RoaXMubWF4SGVpZ2h0fXB4YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb3BlbkNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuYXJpYUNvbnRyb2xzID0gdGhpcy5saXN0Ym94LmlkO1xuICAgICAgICAgICAgdGhpcy5hcmlhRXhwYW5kZWQgPSBcInRydWVcIjtcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25pbmcoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNBbmRTY3JvbGxPcHRpb25JbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXJpYUNvbnRyb2xzID0gXCJcIjtcbiAgICAgICAgdGhpcy5hcmlhRXhwYW5kZWQgPSBcImZhbHNlXCI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBPdmVycmlkZXMgYExpc3Rib3gub3B0aW9uc2AuXG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIE9ic2VydmFibGUudHJhY2sodGhpcywgXCJvcHRpb25zXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoID8gdGhpcy5maWx0ZXJlZE9wdGlvbnMgOiB0aGlzLl9vcHRpb25zO1xuICAgIH1cbiAgICBzZXQgb3B0aW9ucyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gdmFsdWU7XG4gICAgICAgIE9ic2VydmFibGUubm90aWZ5KHRoaXMsIFwib3B0aW9uc1wiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGxhY2Vob2xkZXIgb24gdGhlIHByb3h5IGVsZW1lbnQuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXJDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5wcm94eSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJveHkucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIE9ic2VydmFibGUudHJhY2sodGhpcywgXCJ2YWx1ZVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXQgdmFsdWUobmV4dCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgY29uc3QgcHJldiA9IGAke3RoaXMuX3ZhbHVlfWA7XG4gICAgICAgIGlmICh0aGlzLiRmYXN0Q29udHJvbGxlci5pc0Nvbm5lY3RlZCAmJiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLm9wdGlvbnMuZmluZEluZGV4KGVsID0+IGVsLnRleHQudG9Mb3dlckNhc2UoKSA9PT0gbmV4dC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZTZWxlY3RlZFZhbHVlID0gKF9hID0gdGhpcy5vcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50ZXh0O1xuICAgICAgICAgICAgY29uc3QgbmV4dFNlbGVjdGVkVmFsdWUgPSAoX2IgPSB0aGlzLm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50ZXh0O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID1cbiAgICAgICAgICAgICAgICBwcmV2U2VsZWN0ZWRWYWx1ZSAhPT0gbmV4dFNlbGVjdGVkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxlY3RlZEluZGV4XG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgICAgICAgICAgbmV4dCA9ICgoX2MgPSB0aGlzLmZpcnN0U2VsZWN0ZWRPcHRpb24pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50ZXh0KSB8fCBuZXh0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2ICE9PSBuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IG5leHQ7XG4gICAgICAgICAgICBzdXBlci52YWx1ZUNoYW5nZWQocHJldiwgbmV4dCk7XG4gICAgICAgICAgICBPYnNlcnZhYmxlLm5vdGlmeSh0aGlzLCBcInZhbHVlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBvcGVuaW5nIGFuZCBjbG9zaW5nIHRoZSBsaXN0Ym94IHdoZW4gdGhlIGNvbWJvYm94IGlzIGNsaWNrZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSAtIHRoZSBtb3VzZSBldmVudFxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgICAgY29uc3QgY2FwdHVyZWQgPSBlLnRhcmdldC5jbG9zZXN0KGBvcHRpb24sW3JvbGU9b3B0aW9uXWApO1xuICAgICAgICAgICAgaWYgKCFjYXB0dXJlZCB8fCBjYXB0dXJlZC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW2NhcHR1cmVkXTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC52YWx1ZSA9IGNhcHR1cmVkLnRleHQ7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5mb3JjZWRQb3NpdGlvbiA9ICEhdGhpcy5wb3NpdGlvbkF0dHJpYnV0ZTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubGlzdGJveC5pZCkge1xuICAgICAgICAgICAgdGhpcy5saXN0Ym94LmlkID0gdW5pcXVlSWQoXCJsaXN0Ym94LVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbml6ZSB0aGUgYGFyaWEtZGlzYWJsZWRgIHByb3BlcnR5IHdoZW4gdGhlIGBkaXNhYmxlZGAgcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcmV2IC0gVGhlIHByZXZpb3VzIGRpc2FibGVkIHZhbHVlXG4gICAgICogQHBhcmFtIG5leHQgLSBUaGUgbmV4dCBkaXNhYmxlZCB2YWx1ZVxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgZGlzYWJsZWRDaGFuZ2VkKHByZXYsIG5leHQpIHtcbiAgICAgICAgaWYgKHN1cGVyLmRpc2FibGVkQ2hhbmdlZCkge1xuICAgICAgICAgICAgc3VwZXIuZGlzYWJsZWRDaGFuZ2VkKHByZXYsIG5leHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXJpYURpc2FibGVkID0gdGhpcy5kaXNhYmxlZCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaWx0ZXIgYXZhaWxhYmxlIG9wdGlvbnMgYnkgdGV4dCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBmaWx0ZXJPcHRpb25zKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXV0b2NvbXBsZXRlIHx8IHRoaXMuYXV0b2NvbXBsZXRlID09PSBDb21ib2JveEF1dG9jb21wbGV0ZS5ub25lKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlciA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5maWx0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLl9vcHRpb25zLmZpbHRlcihvID0+IG8udGV4dC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGhpcy5maWx0ZXIudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICBpZiAodGhpcy5pc0F1dG9jb21wbGV0ZUxpc3QpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoICYmICFmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuX29wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLmZvckVhY2gobyA9PiB7XG4gICAgICAgICAgICAgICAgby5oaWRkZW4gPSAhdGhpcy5maWx0ZXJlZE9wdGlvbnMuaW5jbHVkZXMobyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb2N1cyB0aGUgY29udHJvbCBhbmQgc2Nyb2xsIHRoZSBmaXJzdCBzZWxlY3RlZCBvcHRpb24gaW50byB2aWV3LlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBPdmVycmlkZXM6IGBMaXN0Ym94LmZvY3VzQW5kU2Nyb2xsT3B0aW9uSW50b1ZpZXdgXG4gICAgICovXG4gICAgZm9jdXNBbmRTY3JvbGxPcHRpb25JbnRvVmlldygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5mb2N1cygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RTZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RTZWxlY3RlZE9wdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiBcIm5lYXJlc3RcIiB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgZm9jdXMgc3RhdGUgd2hlbiB0aGUgZWxlbWVudCBvciBpdHMgY2hpbGRyZW4gbG9zZSBmb2N1cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlIC0gVGhlIGZvY3VzIGV2ZW50XG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgZm9jdXNvdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgICBpZiAoIXRoaXMub3Blbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9jdXNUYXJnZXQgPSBlLnJlbGF0ZWRUYXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmlzU2FtZU5vZGUoZm9jdXNUYXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMgfHwgIXRoaXMub3B0aW9ucy5pbmNsdWRlcyhmb2N1c1RhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBjb250ZW50IGNoYW5nZXMgb24gdGhlIGNvbnRyb2wgaW5wdXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSAtIHRoZSBpbnB1dCBldmVudFxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gdGhpcy5jb250cm9sLnZhbHVlO1xuICAgICAgICB0aGlzLmZpbHRlck9wdGlvbnMoKTtcbiAgICAgICAgaWYgKGUuaW5wdXRUeXBlID09PSBcImRlbGV0ZUNvbnRlbnRCYWNrd2FyZFwiIHx8ICF0aGlzLmZpbHRlci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQXV0b2NvbXBsZXRlTGlzdCAmJiAhdGhpcy5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQXV0b2NvbXBsZXRlSW5saW5lICYmIHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbdGhpcy5maWx0ZXJlZE9wdGlvbnNbMF1dO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5vcHRpb25zLmluZGV4T2YodGhpcy5maXJzdFNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5saW5lU2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYW5kbGUga2V5ZG93biBhY3Rpb25zIGZvciBsaXN0Ym94IG5hdmlnYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSAtIHRoZSBrZXlib2FyZCBldmVudFxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGtleWRvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZS5rZXk7XG4gICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJFbnRlclwiOiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dG9jb21wbGV0ZUlubGluZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlciA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xWYWx1ZUxlbmd0aCA9IHRoaXMuY29udHJvbC52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLnNldFNlbGVjdGlvblJhbmdlKGNvbnRyb2xWYWx1ZUxlbmd0aCwgY29udHJvbFZhbHVlTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIjoge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0F1dG9jb21wbGV0ZUlubGluZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXIgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyT3B0aW9ucygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIlRhYlwiOiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmtleWRvd25IYW5kbGVyKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dG9jb21wbGV0ZUlubGluZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5saW5lU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBrZXl1cCBhY3Rpb25zIGZvciB2YWx1ZSBpbnB1dCBhbmQgdGV4dCBmaWVsZCBtYW5pcHVsYXRpb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIGUgLSB0aGUga2V5Ym9hcmQgZXZlbnRcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBrZXl1cEhhbmRsZXIoZSkge1xuICAgICAgICBjb25zdCBrZXkgPSBlLmtleTtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XG4gICAgICAgICAgICBjYXNlIFwiRGVsZXRlXCI6XG4gICAgICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICAgICAgY2FzZSBcIkVuZFwiOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXIgPSB0aGlzLmNvbnRyb2wudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5zdXJlIHRoYXQgdGhlIHNlbGVjdGVkSW5kZXggaXMgd2l0aGluIHRoZSBjdXJyZW50IGFsbG93YWJsZSBmaWx0ZXJlZCByYW5nZS5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqIEByZW1hcmtzXG4gICAgICogT3ZlcnJpZGVzOiBgTGlzdGJveC5zZWxlY3RlZEluZGV4Q2hhbmdlZGBcbiAgICAgKi9cbiAgICBzZWxlY3RlZEluZGV4Q2hhbmdlZChwcmV2LCBuZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLiRmYXN0Q29udHJvbGxlci5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgbmV4dCA9IGxpbWl0KC0xLCB0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMSwgbmV4dCk7XG4gICAgICAgICAgICAvLyB3ZSBvbmx5IHdhbnQgdG8gY2FsbCB0aGUgc3VwZXIgbWV0aG9kIHdoZW4gdGhlIHNlbGVjdGVkSW5kZXggaXMgaW4gcmFuZ2VcbiAgICAgICAgICAgIGlmIChuZXh0ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBuZXh0O1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLnNlbGVjdGVkSW5kZXhDaGFuZ2VkKHByZXYsIG5leHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1vdmUgZm9jdXMgdG8gdGhlIHByZXZpb3VzIHNlbGVjdGFibGUgb3B0aW9uLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBPdmVycmlkZXMgYExpc3Rib3guc2VsZWN0UHJldmlvdXNPcHRpb25gXG4gICAgICovXG4gICAgc2VsZWN0UHJldmlvdXNPcHRpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLnNlbGVjdGVkSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlZmF1bHQgc2VsZWN0ZWQgb3B0aW9ucyBhdCBpbml0aWFsaXphdGlvbiBvciByZXNldC5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqIEByZW1hcmtzXG4gICAgICogT3ZlcnJpZGVzIGBMaXN0Ym94LnNldERlZmF1bHRTZWxlY3RlZE9wdGlvbmBcbiAgICAgKi9cbiAgICBzZXREZWZhdWx0U2VsZWN0ZWRPcHRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLiRmYXN0Q29udHJvbGxlci5pc0Nvbm5lY3RlZCAmJiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLm9wdGlvbnMuZmluZEluZGV4KGVsID0+IGVsLmdldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIpICE9PSBudWxsIHx8IGVsLnNlbGVjdGVkKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlydHlWYWx1ZSAmJiB0aGlzLmZpcnN0U2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5maXJzdFNlbGVjdGVkT3B0aW9uLnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkT3B0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZvY3VzIGFuZCBzZWxlY3QgdGhlIGNvbnRlbnQgb2YgdGhlIGNvbnRyb2wgYmFzZWQgb24gdGhlIGZpcnN0IHNlbGVjdGVkIG9wdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGFydCAtIFRoZSBpbmRleCBmb3IgdGhlIHN0YXJ0aW5nIHJhbmdlXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgc2V0SW5saW5lU2VsZWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5maXJzdFNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wudmFsdWUgPSB0aGlzLmZpcnN0U2VsZWN0ZWRPcHRpb24udGV4dDtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5jb250cm9sLnNldFNlbGVjdGlvblJhbmdlKHRoaXMuZmlsdGVyLmxlbmd0aCwgdGhpcy5jb250cm9sLnZhbHVlLmxlbmd0aCwgXCJiYWNrd2FyZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgYW5kIGFwcGx5IGxpc3Rib3ggcG9zaXRpb25pbmcgYmFzZWQgb24gYXZhaWxhYmxlIHZpZXdwb3J0IHNwYWNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcmNlIC0gZGlyZWN0aW9uIHRvIGZvcmNlIHRoZSBsaXN0Ym94IHRvIGRpc3BsYXlcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc2V0UG9zaXRpb25pbmcoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCb3ggPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlQm90dG9tID0gdmlld3BvcnRIZWlnaHQgLSBjdXJyZW50Qm94LmJvdHRvbTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuZm9yY2VkUG9zaXRpb25cbiAgICAgICAgICAgID8gdGhpcy5wb3NpdGlvbkF0dHJpYnV0ZVxuICAgICAgICAgICAgOiBjdXJyZW50Qm94LnRvcCA+IGF2YWlsYWJsZUJvdHRvbVxuICAgICAgICAgICAgICAgID8gU2VsZWN0UG9zaXRpb24uYWJvdmVcbiAgICAgICAgICAgICAgICA6IFNlbGVjdFBvc2l0aW9uLmJlbG93O1xuICAgICAgICB0aGlzLnBvc2l0aW9uQXR0cmlidXRlID0gdGhpcy5mb3JjZWRQb3NpdGlvblxuICAgICAgICAgICAgPyB0aGlzLnBvc2l0aW9uQXR0cmlidXRlXG4gICAgICAgICAgICA6IHRoaXMucG9zaXRpb247XG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID1cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPT09IFNlbGVjdFBvc2l0aW9uLmFib3ZlID8gfn5jdXJyZW50Qm94LnRvcCA6IH5+YXZhaWxhYmxlQm90dG9tO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbnN1cmUgdGhhdCB0aGUgZW50aXJlIGxpc3Qgb2Ygb3B0aW9ucyBpcyB1c2VkIHdoZW4gc2V0dGluZyB0aGUgc2VsZWN0ZWQgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIE92ZXJyaWRlczogYExpc3Rib3guc2VsZWN0ZWRPcHRpb25zQ2hhbmdlZGBcbiAgICAgKi9cbiAgICBzZWxlY3RlZE9wdGlvbnNDaGFuZ2VkKHByZXYsIG5leHQpIHtcbiAgICAgICAgaWYgKHRoaXMuJGZhc3RDb250cm9sbGVyLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLmZvckVhY2gobyA9PiB7XG4gICAgICAgICAgICAgICAgby5zZWxlY3RlZCA9IG5leHQuaW5jbHVkZXMobyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbml6ZSB0aGUgZm9ybS1hc3NvY2lhdGVkIHByb3h5IGFuZCB1cGRhdGUgdGhlIHZhbHVlIHByb3BlcnR5IG9mIHRoZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHByZXYgLSB0aGUgcHJldmlvdXMgY29sbGVjdGlvbiBvZiBzbG90dGVkIG9wdGlvbiBlbGVtZW50c1xuICAgICAqIEBwYXJhbSBuZXh0IC0gdGhlIG5leHQgY29sbGVjdGlvbiBvZiBzbG90dGVkIG9wdGlvbiBlbGVtZW50c1xuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgc2xvdHRlZE9wdGlvbnNDaGFuZ2VkKHByZXYsIG5leHQpIHtcbiAgICAgICAgc3VwZXIuc2xvdHRlZE9wdGlvbnNDaGFuZ2VkKHByZXYsIG5leHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHVwZGF0ZVZhbHVlKHNob3VsZEVtaXQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGhpcy4kZmFzdENvbnRyb2xsZXIuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAoKF9hID0gdGhpcy5maXJzdFNlbGVjdGVkT3B0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGV4dCkgfHwgdGhpcy5jb250cm9sLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRFbWl0KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiY2hhbmdlXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuX19kZWNvcmF0ZShbXG4gICAgYXR0cih7IGF0dHJpYnV0ZTogXCJhdXRvY29tcGxldGVcIiwgbW9kZTogXCJmcm9tVmlld1wiIH0pXG5dLCBDb21ib2JveC5wcm90b3R5cGUsIFwiYXV0b2NvbXBsZXRlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBvYnNlcnZhYmxlXG5dLCBDb21ib2JveC5wcm90b3R5cGUsIFwibWF4SGVpZ2h0XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyKHsgYXR0cmlidXRlOiBcIm9wZW5cIiwgbW9kZTogXCJib29sZWFuXCIgfSlcbl0sIENvbWJvYm94LnByb3RvdHlwZSwgXCJvcGVuXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyXG5dLCBDb21ib2JveC5wcm90b3R5cGUsIFwicGxhY2Vob2xkZXJcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBhdHRyaWJ1dGU6IFwicG9zaXRpb25cIiB9KVxuXSwgQ29tYm9ib3gucHJvdG90eXBlLCBcInBvc2l0aW9uQXR0cmlidXRlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBvYnNlcnZhYmxlXG5dLCBDb21ib2JveC5wcm90b3R5cGUsIFwicG9zaXRpb25cIiwgdm9pZCAwKTtcbi8qKlxuICogSW5jbHVkZXMgQVJJQSBzdGF0ZXMgYW5kIHByb3BlcnRpZXMgcmVsYXRpbmcgdG8gdGhlIEFSSUEgY29tYm9ib3ggcm9sZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWxlZ2F0ZXNBUklBQ29tYm9ib3gge1xufVxuX19kZWNvcmF0ZShbXG4gICAgb2JzZXJ2YWJsZVxuXSwgRGVsZWdhdGVzQVJJQUNvbWJvYm94LnByb3RvdHlwZSwgXCJhcmlhQXV0b0NvbXBsZXRlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBvYnNlcnZhYmxlXG5dLCBEZWxlZ2F0ZXNBUklBQ29tYm9ib3gucHJvdG90eXBlLCBcImFyaWFDb250cm9sc1wiLCB2b2lkIDApO1xuYXBwbHlNaXhpbnMoRGVsZWdhdGVzQVJJQUNvbWJvYm94LCBEZWxlZ2F0ZXNBUklBTGlzdGJveCk7XG5hcHBseU1peGlucyhDb21ib2JveCwgU3RhcnRFbmQsIERlbGVnYXRlc0FSSUFDb21ib2JveCk7XG4iLCIvKipcbiAqIEF1dG9jb21wbGV0ZSB2YWx1ZXMgZm9yIGNvbWJvYm94LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgdmFyIENvbWJvYm94QXV0b2NvbXBsZXRlO1xuKGZ1bmN0aW9uIChDb21ib2JveEF1dG9jb21wbGV0ZSkge1xuICAgIENvbWJvYm94QXV0b2NvbXBsZXRlW1wiaW5saW5lXCJdID0gXCJpbmxpbmVcIjtcbiAgICBDb21ib2JveEF1dG9jb21wbGV0ZVtcImxpc3RcIl0gPSBcImxpc3RcIjtcbiAgICBDb21ib2JveEF1dG9jb21wbGV0ZVtcImJvdGhcIl0gPSBcImJvdGhcIjtcbiAgICBDb21ib2JveEF1dG9jb21wbGV0ZVtcIm5vbmVcIl0gPSBcIm5vbmVcIjtcbn0pKENvbWJvYm94QXV0b2NvbXBsZXRlIHx8IChDb21ib2JveEF1dG9jb21wbGV0ZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBodG1sLCByZWYsIHNsb3R0ZWQgfSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcbmltcG9ydCB7IExpc3Rib3ggfSBmcm9tIFwiLi4vbGlzdGJveC9saXN0Ym94XCI7XG5pbXBvcnQgeyBlbmRTbG90VGVtcGxhdGUsIHN0YXJ0U2xvdFRlbXBsYXRlIH0gZnJvbSBcIi4uL3BhdHRlcm5zL3N0YXJ0LWVuZFwiO1xuLyoqXG4gKiBUaGUgdGVtcGxhdGUgZm9yIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24jKENvbWJvYm94OmNsYXNzKX0gY29tcG9uZW50LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgY29tYm9ib3hUZW1wbGF0ZSA9IChjb250ZXh0LCBkZWZpbml0aW9uKSA9PiBodG1sIGBcbiAgICA8dGVtcGxhdGVcbiAgICAgICAgYXJpYS1kaXNhYmxlZD1cIiR7eCA9PiB4LmFyaWFEaXNhYmxlZH1cIlxuICAgICAgICBhdXRvY29tcGxldGU9XCIke3ggPT4geC5hdXRvY29tcGxldGV9XCJcbiAgICAgICAgY2xhc3M9XCIke3ggPT4gKHgub3BlbiA/IFwib3BlblwiIDogXCJcIil9ICR7eCA9PiB4LmRpc2FibGVkID8gXCJkaXNhYmxlZFwiIDogXCJcIn0gJHt4ID0+IHgucG9zaXRpb259XCJcbiAgICAgICAgdGFiaW5kZXg9XCIke3ggPT4gKCF4LmRpc2FibGVkID8gXCIwXCIgOiBudWxsKX1cIlxuICAgICAgICBAY2xpY2s9XCIkeyh4LCBjKSA9PiB4LmNsaWNrSGFuZGxlcihjLmV2ZW50KX1cIlxuICAgICAgICBAZm9jdXNvdXQ9XCIkeyh4LCBjKSA9PiB4LmZvY3Vzb3V0SGFuZGxlcihjLmV2ZW50KX1cIlxuICAgICAgICBAa2V5ZG93bj1cIiR7KHgsIGMpID0+IHgua2V5ZG93bkhhbmRsZXIoYy5ldmVudCl9XCJcbiAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCIgcGFydD1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICR7c3RhcnRTbG90VGVtcGxhdGUoY29udGV4dCwgZGVmaW5pdGlvbil9XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XCIke3ggPT4geC5vcGVuID8geC5hcmlhQWN0aXZlRGVzY2VuZGFudCA6IG51bGx9XCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1hdXRvY29tcGxldGU9XCIke3ggPT4geC5hcmlhQXV0b0NvbXBsZXRlfVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCIke3ggPT4geC5hcmlhQ29udHJvbHN9XCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1kaXNhYmxlZD1cIiR7eCA9PiB4LmFyaWFEaXNhYmxlZH1cIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiJHt4ID0+IHguYXJpYUV4cGFuZGVkfVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3RlZC12YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHBhcnQ9XCJzZWxlY3RlZC12YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJHt4ID0+IHgucGxhY2Vob2xkZXJ9XCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImNvbWJvYm94XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICA/ZGlzYWJsZWQ9XCIke3ggPT4geC5kaXNhYmxlZH1cIlxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCIke3ggPT4geC52YWx1ZX1cIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkeyh4LCBjKSA9PiB4LmlucHV0SGFuZGxlcihjLmV2ZW50KX1cIlxuICAgICAgICAgICAgICAgICAgICBAa2V5dXA9XCIkeyh4LCBjKSA9PiB4LmtleXVwSGFuZGxlcihjLmV2ZW50KX1cIlxuICAgICAgICAgICAgICAgICAgICAke3JlZihcImNvbnRyb2xcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCIgcGFydD1cImluZGljYXRvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaW5kaWNhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2RlZmluaXRpb24uaW5kaWNhdG9yIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICR7ZW5kU2xvdFRlbXBsYXRlKGNvbnRleHQsIGRlZmluaXRpb24pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJsaXN0Ym94XCJcbiAgICAgICAgICAgIHBhcnQ9XCJsaXN0Ym94XCJcbiAgICAgICAgICAgIHJvbGU9XCJsaXN0Ym94XCJcbiAgICAgICAgICAgID9kaXNhYmxlZD1cIiR7eCA9PiB4LmRpc2FibGVkfVwiXG4gICAgICAgICAgICA/aGlkZGVuPVwiJHt4ID0+ICF4Lm9wZW59XCJcbiAgICAgICAgICAgICR7cmVmKFwibGlzdGJveFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHNsb3RcbiAgICAgICAgICAgICAgICAke3Nsb3R0ZWQoe1xuICAgIGZpbHRlcjogTGlzdGJveC5zbG90dGVkT3B0aW9uRmlsdGVyLFxuICAgIGZsYXR0ZW46IHRydWUsXG4gICAgcHJvcGVydHk6IFwic2xvdHRlZE9wdGlvbnNcIixcbn0pfVxuICAgICAgICAgICAgPjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbmA7XG4iLCJpbXBvcnQgeyBfX2RlY29yYXRlIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBhdHRyLCBvYnNlcnZhYmxlLCBPYnNlcnZhYmxlIH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC13ZWItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBGb3VuZGF0aW9uRWxlbWVudCB9IGZyb20gXCIuLi9mb3VuZGF0aW9uLWVsZW1lbnRcIjtcbmltcG9ydCB7IEFSSUFHbG9iYWxTdGF0ZXNBbmRQcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL3BhdHRlcm5zXCI7XG5pbXBvcnQgeyBTdGFydEVuZCB9IGZyb20gXCIuLi9wYXR0ZXJucy9zdGFydC1lbmRcIjtcbmltcG9ydCB7IGFwcGx5TWl4aW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcHBseS1taXhpbnNcIjtcbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZWxlbWVudCBpcyBhIHtAbGluayAoTGlzdGJveE9wdGlvbjpjbGFzcyl9XG4gKlxuICogQHBhcmFtIGVsZW1lbnQgLSB0aGUgZWxlbWVudCB0byB0ZXN0LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMaXN0Ym94T3B0aW9uKGVsKSB7XG4gICAgcmV0dXJuIChpc0hUTUxFbGVtZW50KGVsKSAmJlxuICAgICAgICAoZWwuZ2V0QXR0cmlidXRlKFwicm9sZVwiKSA9PT0gXCJvcHRpb25cIiB8fFxuICAgICAgICAgICAgZWwgaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkpO1xufVxuLyoqXG4gKiBBbiBPcHRpb24gQ3VzdG9tIEhUTUwgRWxlbWVudC5cbiAqIEltcGxlbWVudHMge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI29wdGlvbiB8IEFSSUEgb3B0aW9uIH0uXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgTGlzdGJveE9wdGlvbiBleHRlbmRzIEZvdW5kYXRpb25FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCB2YWx1ZSwgZGVmYXVsdFNlbGVjdGVkLCBzZWxlY3RlZCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHRTZWxlY3RlZCBzdGF0ZSBvZiB0aGUgb3B0aW9uLlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJhY2tzIHdoZXRoZXIgdGhlIFwic2VsZWN0ZWRcIiBwcm9wZXJ0eSBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlydHlTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNoZWNrZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2wuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmRlZmF1bHRTZWxlY3RlZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyYWNrIHdoZXRoZXIgdGhlIHZhbHVlIGhhcyBiZWVuIGNoYW5nZWQgZnJvbSB0aGUgaW5pdGlhbCB2YWx1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXJ0eVZhbHVlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdGhpcy5pbml0aWFsVmFsdWUgfHwgXCJcIjtcbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmYXVsdFNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZCA9IGRlZmF1bHRTZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3h5ID0gbmV3IE9wdGlvbihgJHt0aGlzLnRleHRDb250ZW50fWAsIHRoaXMuaW5pdGlhbFZhbHVlLCB0aGlzLmRlZmF1bHRTZWxlY3RlZCwgdGhpcy5zZWxlY3RlZCk7XG4gICAgICAgIHRoaXMucHJveHkuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgIH1cbiAgICBkZWZhdWx0U2VsZWN0ZWRDaGFuZ2VkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlydHlTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZGVmYXVsdFNlbGVjdGVkO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJveHkgaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJveHkuc2VsZWN0ZWQgPSB0aGlzLmRlZmF1bHRTZWxlY3RlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNhYmxlZENoYW5nZWQocHJldiwgbmV4dCkge1xuICAgICAgICB0aGlzLmFyaWFEaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIjtcbiAgICAgICAgaWYgKHRoaXMucHJveHkgaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5wcm94eS5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0ZWRBdHRyaWJ1dGVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRBdHRyaWJ1dGU7XG4gICAgICAgIGlmICh0aGlzLnByb3h5IGluc3RhbmNlb2YgSFRNTE9wdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJveHkuZGVmYXVsdFNlbGVjdGVkID0gdGhpcy5kZWZhdWx0U2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0ZWRDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmFyaWFTZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIjtcbiAgICAgICAgaWYgKCF0aGlzLmRpcnR5U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlydHlTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJveHkgaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5wcm94eS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdGlhbFZhbHVlQ2hhbmdlZChwcmV2aW91cywgbmV4dCkge1xuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgY2xlYW4gYW5kIHRoZSBjb21wb25lbnQgaXMgY29ubmVjdGVkIHRvIHRoZSBET01cbiAgICAgICAgLy8gdGhlbiBzZXQgdmFsdWUgZXF1YWwgdG8gdGhlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgaWYgKCF0aGlzLmRpcnR5VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZGlydHlWYWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlIDogdGhpcy50ZXh0Q29udGVudCA/IHRoaXMudGV4dENvbnRlbnQgOiBcIlwiO1xuICAgIH1cbiAgICBnZXQgdGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIHNldCB2YWx1ZShuZXh0KSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbmV4dDtcbiAgICAgICAgdGhpcy5kaXJ0eVZhbHVlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMucHJveHkgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5wcm94eS52YWx1ZSA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgT2JzZXJ2YWJsZS5ub3RpZnkodGhpcywgXCJ2YWx1ZVwiKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICBPYnNlcnZhYmxlLnRyYWNrKHRoaXMsIFwidmFsdWVcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZSA/IHRoaXMuX3ZhbHVlIDogdGhpcy50ZXh0O1xuICAgIH1cbiAgICBnZXQgZm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJveHkgPyB0aGlzLnByb3h5LmZvcm0gOiBudWxsO1xuICAgIH1cbn1cbl9fZGVjb3JhdGUoW1xuICAgIG9ic2VydmFibGVcbl0sIExpc3Rib3hPcHRpb24ucHJvdG90eXBlLCBcImRlZmF1bHRTZWxlY3RlZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgYXR0cih7IG1vZGU6IFwiYm9vbGVhblwiIH0pXG5dLCBMaXN0Ym94T3B0aW9uLnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgYXR0cih7IGF0dHJpYnV0ZTogXCJzZWxlY3RlZFwiLCBtb2RlOiBcImJvb2xlYW5cIiB9KVxuXSwgTGlzdGJveE9wdGlvbi5wcm90b3R5cGUsIFwic2VsZWN0ZWRBdHRyaWJ1dGVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIG9ic2VydmFibGVcbl0sIExpc3Rib3hPcHRpb24ucHJvdG90eXBlLCBcInNlbGVjdGVkXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyKHsgYXR0cmlidXRlOiBcInZhbHVlXCIsIG1vZGU6IFwiZnJvbVZpZXdcIiB9KVxuXSwgTGlzdGJveE9wdGlvbi5wcm90b3R5cGUsIFwiaW5pdGlhbFZhbHVlXCIsIHZvaWQgMCk7XG4vKipcbiAqIFN0YXRlcyBhbmQgcHJvcGVydGllcyByZWxhdGluZyB0byB0aGUgQVJJQSBgb3B0aW9uYCByb2xlLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIERlbGVnYXRlc0FSSUFMaXN0Ym94T3B0aW9uIHtcbn1cbl9fZGVjb3JhdGUoW1xuICAgIG9ic2VydmFibGVcbl0sIERlbGVnYXRlc0FSSUFMaXN0Ym94T3B0aW9uLnByb3RvdHlwZSwgXCJhcmlhUG9zSW5TZXRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIG9ic2VydmFibGVcbl0sIERlbGVnYXRlc0FSSUFMaXN0Ym94T3B0aW9uLnByb3RvdHlwZSwgXCJhcmlhU2VsZWN0ZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIG9ic2VydmFibGVcbl0sIERlbGVnYXRlc0FSSUFMaXN0Ym94T3B0aW9uLnByb3RvdHlwZSwgXCJhcmlhU2V0U2l6ZVwiLCB2b2lkIDApO1xuYXBwbHlNaXhpbnMoRGVsZWdhdGVzQVJJQUxpc3Rib3hPcHRpb24sIEFSSUFHbG9iYWxTdGF0ZXNBbmRQcm9wZXJ0aWVzKTtcbmFwcGx5TWl4aW5zKExpc3Rib3hPcHRpb24sIFN0YXJ0RW5kLCBEZWxlZ2F0ZXNBUklBTGlzdGJveE9wdGlvbik7XG4iLCJpbXBvcnQgeyBfX2RlY29yYXRlIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBhdHRyLCBvYnNlcnZhYmxlLCBPYnNlcnZhYmxlIH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBrZXlBcnJvd0Rvd24sIGtleUFycm93VXAsIGtleUVuZCwga2V5RW50ZXIsIGtleUVzY2FwZSwga2V5SG9tZSwga2V5U3BhY2UsIGtleVRhYiwgdW5pcXVlSWQsIH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC13ZWItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBGb3VuZGF0aW9uRWxlbWVudCB9IGZyb20gXCIuLi9mb3VuZGF0aW9uLWVsZW1lbnRcIjtcbmltcG9ydCB7IGlzTGlzdGJveE9wdGlvbiB9IGZyb20gXCIuLi9saXN0Ym94LW9wdGlvbi9saXN0Ym94LW9wdGlvblwiO1xuaW1wb3J0IHsgQVJJQUdsb2JhbFN0YXRlc0FuZFByb3BlcnRpZXMgfSBmcm9tIFwiLi4vcGF0dGVybnMvYXJpYS1nbG9iYWxcIjtcbmltcG9ydCB7IGFwcGx5TWl4aW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcHBseS1taXhpbnNcIjtcbi8qKlxuICogQSBMaXN0Ym94IEN1c3RvbSBIVE1MIEVsZW1lbnQuXG4gKiBJbXBsZW1lbnRzIHRoZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jbGlzdGJveCB8IEFSSUEgbGlzdGJveCB9LlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3Rib3ggZXh0ZW5kcyBGb3VuZGF0aW9uRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW50ZXJuYWwgdW5maWx0ZXJlZCBsaXN0IG9mIHNlbGVjdGFibGUgb3B0aW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW5kZXggb2YgdGhlIHNlbGVjdGVkIG9wdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNvbGxlY3Rpb24gb2YgdGhlIHNlbGVjdGVkIG9wdGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHN0YW5kYXJkIGBjbGlja2AgZXZlbnQgY3JlYXRlcyBhIGBmb2N1c2AgZXZlbnQgYmVmb3JlIGZpcmluZywgc28gYVxuICAgICAgICAgKiBgbW91c2Vkb3duYCBldmVudCBpcyB1c2VkIHRvIHNraXAgdGhhdCBpbml0aWFsIGZvY3VzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvdWxkU2tpcEZvY3VzID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudCB0eXBlYWhlYWQgYnVmZmVyIHN0cmluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnR5cGVhaGVhZEJ1ZmZlciA9IFwiXCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGbGFnIGZvciB0aGUgdHlwZWFoZWFkIHRpbWVvdXQgZXhwaXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnR5cGVhaGVhZEV4cGlyZWQgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRpbWVvdXQgSUQgZm9yIHRoZSB0eXBlYWhlYWQgaGFuZGxlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnR5cGVhaGVhZFRpbWVvdXQgPSAtMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGZpcnN0IHNlbGVjdGVkIG9wdGlvbi5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGdldCBmaXJzdFNlbGVjdGVkT3B0aW9uKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLnNlbGVjdGVkT3B0aW9uc1swXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBvcHRpb25zLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBvcHRpb25zLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICBPYnNlcnZhYmxlLnRyYWNrKHRoaXMsIFwib3B0aW9uc1wiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfVxuICAgIHNldCBvcHRpb25zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcbiAgICAgICAgT2JzZXJ2YWJsZS5ub3RpZnkodGhpcywgXCJvcHRpb25zXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciB0aGUgdHlwZWFoZWFkIHRpbWVvdXQgZXhwaXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHVzZSBgTGlzdGJveC50eXBlYWhlYWRFeHBpcmVkYFxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGdldCB0eXBlQWhlYWRFeHBpcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlYWhlYWRFeHBpcmVkO1xuICAgIH1cbiAgICBzZXQgdHlwZUFoZWFkRXhwaXJlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnR5cGVhaGVhZEV4cGlyZWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNsaWNrIGV2ZW50cyBmb3IgbGlzdGJveCBvcHRpb25zLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgY2xpY2tIYW5kbGVyKGUpIHtcbiAgICAgICAgY29uc3QgY2FwdHVyZWQgPSBlLnRhcmdldC5jbG9zZXN0KGBvcHRpb24sW3JvbGU9b3B0aW9uXWApO1xuICAgICAgICBpZiAoY2FwdHVyZWQgJiYgIWNhcHR1cmVkLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLm9wdGlvbnMuaW5kZXhPZihjYXB0dXJlZCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb2N1cyB0aGUgZmlyc3Qgc2VsZWN0ZWQgb3B0aW9uIGFuZCBzY3JvbGwgaXQgaW50byB2aWV3LlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgZm9jdXNBbmRTY3JvbGxPcHRpb25JbnRvVmlldygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgJiYgdGhpcy5maXJzdFNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0U2VsZWN0ZWRPcHRpb24uZm9jdXMoKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdFNlbGVjdGVkT3B0aW9uLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwibmVhcmVzdFwiIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBgZm9jdXNpbmAgYWN0aW9ucyBmb3IgdGhlIGNvbXBvbmVudC4gV2hlbiB0aGUgY29tcG9uZW50IHJlY2VpdmVzIGZvY3VzLFxuICAgICAqIHRoZSBsaXN0IG9mIHNlbGVjdGVkIG9wdGlvbnMgaXMgcmVmcmVzaGVkIGFuZCB0aGUgZmlyc3Qgc2VsZWN0ZWQgb3B0aW9uIGlzIHNjcm9sbGVkXG4gICAgICogaW50byB2aWV3LlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgZm9jdXNpbkhhbmRsZXIoZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkU2tpcEZvY3VzICYmIGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRPcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQW5kU2Nyb2xsT3B0aW9uSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3VsZFNraXBGb2N1cyA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBmb2N1cyB0byBhbiBvcHRpb24gd2hvc2UgbGFiZWwgbWF0Y2hlcyBjaGFyYWN0ZXJzIHR5cGVkIGJ5IHRoZSB1c2VyLlxuICAgICAqIENvbnNlY3V0aXZlIGtleXN0cm9rZXMgYXJlIGJhdGNoZWQgaW50byBhIGJ1ZmZlciBvZiBzZWFyY2ggdGV4dCB1c2VkXG4gICAgICogdG8gbWF0Y2ggYWdhaW5zdCB0aGUgc2V0IG9mIG9wdGlvbnMuICBJZiBgVFlQRV9BSEVBRF9USU1FT1VUX01TYCBwYXNzZXNcbiAgICAgKiBiZXR3ZWVuIGNvbnNlY3V0aXZlIGtleXN0cm9rZXMsIHRoZSBzZWFyY2ggcmVzdGFydHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5IC0gdGhlIGtleSB0byBiZSBldmFsdWF0ZWRcbiAgICAgKi9cbiAgICBoYW5kbGVUeXBlQWhlYWQoa2V5KSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGVhaGVhZFRpbWVvdXQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50eXBlYWhlYWRUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnR5cGVhaGVhZFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiAodGhpcy50eXBlYWhlYWRFeHBpcmVkID0gdHJ1ZSksIExpc3Rib3guVFlQRV9BSEVBRF9USU1FT1VUX01TKTtcbiAgICAgICAgaWYgKGtleS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50eXBlYWhlYWRCdWZmZXIgPSBgJHt0aGlzLnR5cGVhaGVhZEV4cGlyZWQgPyBcIlwiIDogdGhpcy50eXBlYWhlYWRCdWZmZXJ9JHtrZXl9YDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBga2V5ZG93bmAgYWN0aW9ucyBmb3IgbGlzdGJveCBuYXZpZ2F0aW9uIGFuZCB0eXBlYWhlYWQuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBrZXlkb3duSGFuZGxlcihlKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3VsZFNraXBGb2N1cyA9IGZhbHNlO1xuICAgICAgICBjb25zdCBrZXkgPSBlLmtleTtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIC8vIFNlbGVjdCB0aGUgZmlyc3QgYXZhaWxhYmxlIG9wdGlvblxuICAgICAgICAgICAgY2FzZSBrZXlIb21lOiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGaXJzdE9wdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNlbGVjdCB0aGUgbmV4dCBzZWxlY3RhYmxlIG9wdGlvblxuICAgICAgICAgICAgY2FzZSBrZXlBcnJvd0Rvd246IHtcbiAgICAgICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5leHRPcHRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZWxlY3QgdGhlIHByZXZpb3VzIHNlbGVjdGFibGUgb3B0aW9uXG4gICAgICAgICAgICBjYXNlIGtleUFycm93VXA6IHtcbiAgICAgICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFByZXZpb3VzT3B0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2VsZWN0IHRoZSBsYXN0IGF2YWlsYWJsZSBvcHRpb25cbiAgICAgICAgICAgIGNhc2Uga2V5RW5kOiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0TGFzdE9wdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBrZXlUYWI6IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzQW5kU2Nyb2xsT3B0aW9uSW50b1ZpZXcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2Uga2V5RW50ZXI6XG4gICAgICAgICAgICBjYXNlIGtleUVzY2FwZToge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBrZXlTcGFjZToge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGVhaGVhZEV4cGlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2VuZCBrZXkgdG8gVHlwZWFoZWFkIGhhbmRsZXJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVR5cGVBaGVhZChgJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZXZlbnRzIGBmb2N1c2luYCBldmVudHMgZnJvbSBmaXJpbmcgYmVmb3JlIGBjbGlja2AgZXZlbnRzIHdoZW4gdGhlXG4gICAgICogZWxlbWVudCBpcyB1bmZvY3VzZWQuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBtb3VzZWRvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5zaG91bGRTa2lwRm9jdXMgPSAhdGhpcy5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGxpc3Qgb2Ygc2VsZWN0ZWQgb3B0aW9ucyB3aGVuIHRoZSBgc2VsZWN0ZWRJbmRleGAgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcmV2IC0gdGhlIHByZXZpb3VzIHNlbGVjdGVkIGluZGV4IHZhbHVlXG4gICAgICogQHBhcmFtIG5leHQgLSB0aGUgY3VycmVudCBzZWxlY3RlZCBpbmRleCB2YWx1ZVxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgc2VsZWN0ZWRJbmRleENoYW5nZWQocHJldiwgbmV4dCkge1xuICAgICAgICB0aGlzLnNldFNlbGVjdGVkT3B0aW9ucygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBzZWxlY3RlZG5lc3Mgb2YgZWFjaCBvcHRpb24gd2hlbiB0aGUgbGlzdCBvZiBzZWxlY3RlZCBvcHRpb25zIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJldiAtIHRoZSBwcmV2aW91cyBsaXN0IG9mIHNlbGVjdGVkIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gbmV4dCAtIHRoZSBjdXJyZW50IGxpc3Qgb2Ygc2VsZWN0ZWQgb3B0aW9uc1xuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgc2VsZWN0ZWRPcHRpb25zQ2hhbmdlZChwcmV2LCBuZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLiRmYXN0Q29udHJvbGxlci5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gobyA9PiB7XG4gICAgICAgICAgICAgICAgby5zZWxlY3RlZCA9IG5leHQuaW5jbHVkZXMobyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBmb2N1cyB0byB0aGUgZmlyc3Qgc2VsZWN0YWJsZSBvcHRpb24uXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc2VsZWN0Rmlyc3RPcHRpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBmb2N1cyB0byB0aGUgbGFzdCBzZWxlY3RhYmxlIG9wdGlvbi5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHNlbGVjdExhc3RPcHRpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5vcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogTW92ZXMgZm9jdXMgdG8gdGhlIG5leHQgc2VsZWN0YWJsZSBvcHRpb24uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBzZWxlY3ROZXh0T3B0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyAmJlxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4IDwgdGhpcy5vcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCArPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1vdmVzIGZvY3VzIHRvIHRoZSBwcmV2aW91cyBzZWxlY3RhYmxlIG9wdGlvbi5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHNlbGVjdFByZXZpb3VzT3B0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5zZWxlY3RlZEluZGV4ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBzZWxlY3RlZCBpbmRleCB0byBtYXRjaCB0aGUgZmlyc3Qgc2VsZWN0ZWQgb3B0aW9uLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgc2V0RGVmYXVsdFNlbGVjdGVkT3B0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMuJGZhc3RDb250cm9sbGVyLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5vcHRpb25zLmZpbmRJbmRleChlbCA9PiBlbC5nZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKSAhPT0gbnVsbCk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2VsZWN0ZWQgb3B0aW9uIGFuZCBnaXZlcyBpdCBmb2N1cy5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzZXRTZWxlY3RlZE9wdGlvbnMoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBpZiAodGhpcy4kZmFzdENvbnRyb2xsZXIuaXNDb25uZWN0ZWQgJiYgdGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IChfYSA9IHRoaXMub3B0aW9uc1t0aGlzLnNlbGVjdGVkSW5kZXhdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGVsID0+IGVsLmlzU2FtZU5vZGUoc2VsZWN0ZWRPcHRpb24pKTtcbiAgICAgICAgICAgIHRoaXMuYXJpYUFjdGl2ZURlc2NlbmRhbnQgPSAoX2MgPSAoX2IgPSB0aGlzLmZpcnN0U2VsZWN0ZWRPcHRpb24pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pZCkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogXCJcIjtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNBbmRTY3JvbGxPcHRpb25JbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGxpc3Qgb2Ygb3B0aW9ucyBhbmQgcmVzZXRzIHRoZSBzZWxlY3RlZCBvcHRpb24gd2hlbiB0aGUgc2xvdHRlZCBvcHRpb24gY29udGVudCBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHByZXYgLSB0aGUgcHJldmlvdXMgbGlzdCBvZiBzbG90dGVkIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gbmV4dCAtIHRoZSBjdXJyZW50IGxpc3Qgb2Ygc2xvdHRlZCBvcHRpb25zXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBzbG90dGVkT3B0aW9uc0NoYW5nZWQocHJldiwgbmV4dCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBuZXh0LnJlZHVjZSgob3B0aW9ucywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTGlzdGJveE9wdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIGNvbnN0IHNldFNpemUgPSBgJHt0aGlzLm9wdGlvbnMubGVuZ3RofWA7XG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5pZCA9IHVuaXF1ZUlkKFwib3B0aW9uLVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbi5hcmlhUG9zSW5TZXQgPSBgJHtpbmRleCArIDF9YDtcbiAgICAgICAgICAgIG9wdGlvbi5hcmlhU2V0U2l6ZSA9IHNldFNpemU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy4kZmFzdENvbnRyb2xsZXIuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRPcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnNldERlZmF1bHRTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGZpbHRlcmVkIGxpc3Qgb2Ygb3B0aW9ucyB3aGVuIHRoZSB0eXBlYWhlYWQgYnVmZmVyIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJldiAtIHRoZSBwcmV2aW91cyB0eXBlYWhlYWQgYnVmZmVyIHZhbHVlXG4gICAgICogQHBhcmFtIG5leHQgLSB0aGUgY3VycmVudCB0eXBlYWhlYWQgYnVmZmVyIHZhbHVlXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICB0eXBlYWhlYWRCdWZmZXJDaGFuZ2VkKHByZXYsIG5leHQpIHtcbiAgICAgICAgaWYgKHRoaXMuJGZhc3RDb250cm9sbGVyLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gdGhpcy50eXBlYWhlYWRCdWZmZXIucmVwbGFjZSgvWy4qK1xcLT9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpO1xuICAgICAgICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGBeJHtwYXR0ZXJufWAsIFwiZ2lcIik7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKChvKSA9PiBvLnRleHQudHJpbSgpLm1hdGNoKHJlKSk7XG4gICAgICAgICAgICBpZiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLm9wdGlvbnMuaW5kZXhPZihmaWx0ZXJlZE9wdGlvbnNbMF0pO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZEV4cGlyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQSBzdGF0aWMgZmlsdGVyIHRvIGluY2x1ZGUgb25seSBzZWxlY3RhYmxlIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIG4gLSBlbGVtZW50IHRvIGZpbHRlclxuICogQHB1YmxpY1xuICovXG5MaXN0Ym94LnNsb3R0ZWRPcHRpb25GaWx0ZXIgPSAobikgPT4gaXNMaXN0Ym94T3B0aW9uKG4pICYmICFuLmRpc2FibGVkICYmICFuLmhpZGRlbjtcbi8qKlxuICogVHlwZWFoZWFkIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5MaXN0Ym94LlRZUEVfQUhFQURfVElNRU9VVF9NUyA9IDEwMDA7XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyKHsgbW9kZTogXCJib29sZWFuXCIgfSlcbl0sIExpc3Rib3gucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBvYnNlcnZhYmxlXG5dLCBMaXN0Ym94LnByb3RvdHlwZSwgXCJzZWxlY3RlZEluZGV4XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBvYnNlcnZhYmxlXG5dLCBMaXN0Ym94LnByb3RvdHlwZSwgXCJzZWxlY3RlZE9wdGlvbnNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIG9ic2VydmFibGVcbl0sIExpc3Rib3gucHJvdG90eXBlLCBcInNsb3R0ZWRPcHRpb25zXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBvYnNlcnZhYmxlXG5dLCBMaXN0Ym94LnByb3RvdHlwZSwgXCJ0eXBlYWhlYWRCdWZmZXJcIiwgdm9pZCAwKTtcbi8qKlxuICogSW5jbHVkZXMgQVJJQSBzdGF0ZXMgYW5kIHByb3BlcnRpZXMgcmVsYXRpbmcgdG8gdGhlIEFSSUEgbGlzdGJveCByb2xlXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgRGVsZWdhdGVzQVJJQUxpc3Rib3gge1xufVxuX19kZWNvcmF0ZShbXG4gICAgb2JzZXJ2YWJsZVxuXSwgRGVsZWdhdGVzQVJJQUxpc3Rib3gucHJvdG90eXBlLCBcImFyaWFBY3RpdmVEZXNjZW5kYW50XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBvYnNlcnZhYmxlXG5dLCBEZWxlZ2F0ZXNBUklBTGlzdGJveC5wcm90b3R5cGUsIFwiYXJpYURpc2FibGVkXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBvYnNlcnZhYmxlXG5dLCBEZWxlZ2F0ZXNBUklBTGlzdGJveC5wcm90b3R5cGUsIFwiYXJpYUV4cGFuZGVkXCIsIHZvaWQgMCk7XG5hcHBseU1peGlucyhEZWxlZ2F0ZXNBUklBTGlzdGJveCwgQVJJQUdsb2JhbFN0YXRlc0FuZFByb3BlcnRpZXMpO1xuYXBwbHlNaXhpbnMoTGlzdGJveCwgRGVsZWdhdGVzQVJJQUxpc3Rib3gpO1xuIiwiLyoqXG4gKiBQb3NpdGlvbmluZyBkaXJlY3Rpb25zIGZvciB0aGUgbGlzdGJveCB3aGVuIGEgc2VsZWN0IGlzIG9wZW4uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCB2YXIgU2VsZWN0UG9zaXRpb247XG4oZnVuY3Rpb24gKFNlbGVjdFBvc2l0aW9uKSB7XG4gICAgU2VsZWN0UG9zaXRpb25bXCJhYm92ZVwiXSA9IFwiYWJvdmVcIjtcbiAgICBTZWxlY3RQb3NpdGlvbltcImJlbG93XCJdID0gXCJiZWxvd1wiO1xufSkoU2VsZWN0UG9zaXRpb24gfHwgKFNlbGVjdFBvc2l0aW9uID0ge30pKTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2Qga2VlcHMgYSBnaXZlbiB2YWx1ZSB3aXRoaW4gdGhlIGJvdW5kcyBvZiBhIG1pbiBhbmQgbWF4IHZhbHVlLiBJZiB0aGUgdmFsdWVcbiAqIGlzIGxhcmdlciB0aGFuIHRoZSBtYXgsIHRoZSBtaW5pbXVtIHZhbHVlIHdpbGwgYmUgcmV0dXJuZWQuIElmIHRoZSB2YWx1ZSBpcyBzbWFsbGVyIHRoYW4gdGhlIG1pbmltdW0sXG4gKiB0aGUgbWF4aW11bSB3aWxsIGJlIHJldHVybmVkLiBPdGhlcndpc2UsIHRoZSB2YWx1ZSBpcyByZXR1cm5lZCB1bi1jaGFuZ2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcEluQm91bmRzKG1pbiwgbWF4LCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA8IG1pbikge1xuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZSA+IG1heCkge1xuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEVuc3VyZXMgdGhhdCBhIHZhbHVlIGlzIGJldHdlZW4gYSBtaW4gYW5kIG1heCB2YWx1ZS4gSWYgdmFsdWUgaXMgbG93ZXIgdGhhbiBtaW4sIG1pbiB3aWxsIGJlIHJldHVybmVkLlxuICogSWYgdmFsdWUgaXMgZ3JlYXRlciB0aGFuIG1heCwgbWF4IHdpbGwgYmUgcmV0dXJuZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW1pdChtaW4sIG1heCwgdmFsdWUpIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCk7XG59XG4iLCJsZXQgdW5pcXVlSWRDb3VudGVyID0gMDtcbi8qKlxuICogR2VuZXJhdGVzIGEgdW5pcXVlIElEIGJhc2VkIG9uIGluY3JlbWVudGluZyBhIGNvdW50ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVJZChwcmVmaXggPSBcIlwiKSB7XG4gICAgcmV0dXJuIGAke3ByZWZpeH0ke3VuaXF1ZUlkQ291bnRlcisrfWA7XG59XG4vKipcbiAqIEJ1aWxkcyBhIHN0cmluZyBmcm9tIGEgZm9ybWF0IHNwZWNpZmllciBhbmQgcmVwbGFjZW1lbnQgcGFyYW1ldGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChmb3JtYXRTcGVjaWZpZXIsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICByZXR1cm4gZm9ybWF0U3BlY2lmaWVyLnJlcGxhY2UoL3soXFxkKyl9L2csIGZ1bmN0aW9uIChtYXRjaCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID49IHBhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJhbWV0ZXJzW2luZGV4XTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIiAmJiAhdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcbn1cbi8qKlxuICogQ2hlY2sgdG8gc2VlIGlmIG9uZSBzdHJpbmcgc3RhcnRzIHdpdGggYW5vdGhlclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRzV2l0aChzdHJpbmdUb1NlYXJjaCwgc2VhcmNoRm9yLCBwb3NpdGlvbiA9IDApIHtcbiAgICBpZiAoIXN0cmluZ1RvU2VhcmNoIHx8ICFzZWFyY2hGb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nVG9TZWFyY2guc3Vic3RyKHBvc2l0aW9uLCBzZWFyY2hGb3IubGVuZ3RoKSA9PT0gc2VhcmNoRm9yO1xufVxuLyoqXG4gKiBNYXRjaGVzIGFsbCBpbnN0YW5jZXMgb2YgdGhlIFJlZ0V4cCBpbiB0aGUgc3RyaW5nLiBPcGVyYXRlcyBzaW1pbGFybHkgdG8gdGhlXG4gKiBuYXRpdmUgYFN0cmluZy5tYXRjaEFsbGAsIHdoaWNoIGlzIG5vdCB5ZXQgYXZhaWxhYmxlIG9uIGFsbCBzdXBwb3J0ZWRcbiAqIGJyb3dzZXJzLiBOb3RlIHRoYXQgdGhlIHJlZ2V4ICptdXN0KiBiZSBnbG9iYWwuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoQWxsKHJlLCBzdHIpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gW107XG4gICAgbGV0IG1hdGNoO1xuICAgIHdoaWxlICgobWF0Y2ggPSByZS5leGVjKHN0cikpKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaChtYXRjaFsxXSk7XG4gICAgfVxuICAgIHJlLmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIG1hdGNoZXM7XG59XG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIHNwZWNpZmllZCBzdHJpbmcgaXMgdW5kZWZpbmVkLCBudWxsLCBlbXB0eSwgb3Igd2hpdGVzcGFjZS5cbiAqIFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgbnVsbCwgZW1wdHksIG9yIHdoaXRlc3BhY2UsIG90aGVyd2lzZSBmYWxzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yV2hpdGVTcGFjZSh2YWx1ZSkge1xuICAgIHJldHVybiAhdmFsdWUgfHwgIXZhbHVlLnRyaW0oKTtcbn1cbmNvbnN0IHdvcmRSZSA9IC8oW0EtWl0rW2EtejAtOV0qfFtBLVpdKlthLXowLTldKykvZztcbi8qKlxuICogQ29udmVydHMgYSBzdHJpbmcgdG8gUGFzY2FsIENhc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhc2NhbENhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gbWF0Y2hBbGwod29yZFJlLCB2YWx1ZSlcbiAgICAgICAgLm1hcCgod29yZCkgPT4gYCR7d29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3dvcmQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKX1gKVxuICAgICAgICAuam9pbihcIlwiKTtcbn1cbi8qKlxuICogY29udmVydHMgYSBzdHJpbmcgZnJvbSBjYW1lbENhc2Ugb3IgcGFzY2FsQ2FzZSB0byBzcGluYWwtY2FzZVxuICogd2hpY2ggaXMgYW4gbG93ZXJjYXNlIGRhc2ggc2VwYXJhdGVkIG5hbWluZyBzdHlsZS5cbiAqXG4gKiBBbiBleGFtcGxlIG9mIHNwaW5hbCBjYXNlOiBmb28tYmFyLWJhdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BpbmFsQ2FzZSh2YWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlV2l0aExvd2VyQ2FzZUZpcnN0TGV0dGVyID0gYCR7dmFsdWVcbiAgICAgICAgLmNoYXJBdCgwKVxuICAgICAgICAudG9Mb3dlckNhc2UoKX0ke3ZhbHVlLnNsaWNlKDEpfWA7XG4gICAgcmV0dXJuIHZhbHVlV2l0aExvd2VyQ2FzZUZpcnN0TGV0dGVyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKG1hdGNoLCBncm91cDEpIHtcbiAgICAgICAgcmV0dXJuIGAtJHtncm91cDEudG9Mb3dlckNhc2UoKX1gO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHtcclxuICBwcm92aWRlRkFTVERlc2lnblN5c3RlbSxcclxuICBmYXN0Q2FyZCxcclxuICBmYXN0QnV0dG9uLFxyXG4gIGZhc3RDb21ib2JveFxyXG59IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBEb2dDYXJkIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2RvZy1jYXJkXCI7XHJcbmltcG9ydCB7IEJyZWVkU2VhcmNoIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2JyZWVkLXNlYXJjaFwiO1xyXG5pbXBvcnQgeyBCcmVlZFNlbGVjdG9yIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2JyZWVkLXNlbGVjdG9yXCI7XHJcblxyXG5wcm92aWRlRkFTVERlc2lnblN5c3RlbSgpLnJlZ2lzdGVyKGZhc3RDYXJkKCksIGZhc3RCdXR0b24oKSwgZmFzdENvbWJvYm94KCkpO1xyXG5cclxuRG9nQ2FyZDtcclxuQnJlZWRTZWFyY2g7XHJcbkJyZWVkU2VsZWN0b3I7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjljMjY2YTk4Y2MxYWM2M2JlMTNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=