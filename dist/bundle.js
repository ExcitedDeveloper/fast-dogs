/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@microsoft/fast-colors/dist/color-blending.js":
/*!********************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/color-blending.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saturateViaLCH": () => (/* binding */ saturateViaLCH),
/* harmony export */   "desaturateViaLCH": () => (/* binding */ desaturateViaLCH),
/* harmony export */   "darkenViaLAB": () => (/* binding */ darkenViaLAB),
/* harmony export */   "lightenViaLAB": () => (/* binding */ lightenViaLAB),
/* harmony export */   "blendBurnChannel": () => (/* binding */ blendBurnChannel),
/* harmony export */   "blendBurn": () => (/* binding */ blendBurn),
/* harmony export */   "blendColor": () => (/* binding */ blendColor),
/* harmony export */   "blendDarkenChannel": () => (/* binding */ blendDarkenChannel),
/* harmony export */   "blendDarken": () => (/* binding */ blendDarken),
/* harmony export */   "blendDodgeChannel": () => (/* binding */ blendDodgeChannel),
/* harmony export */   "blendDodge": () => (/* binding */ blendDodge),
/* harmony export */   "blendLightenChannel": () => (/* binding */ blendLightenChannel),
/* harmony export */   "blendLighten": () => (/* binding */ blendLighten),
/* harmony export */   "blendMultiplyChannel": () => (/* binding */ blendMultiplyChannel),
/* harmony export */   "blendMultiply": () => (/* binding */ blendMultiply),
/* harmony export */   "blendOverlayChannel": () => (/* binding */ blendOverlayChannel),
/* harmony export */   "blendOverlay": () => (/* binding */ blendOverlay),
/* harmony export */   "blendScreenChannel": () => (/* binding */ blendScreenChannel),
/* harmony export */   "blendScreen": () => (/* binding */ blendScreen),
/* harmony export */   "ColorBlendMode": () => (/* binding */ ColorBlendMode),
/* harmony export */   "blend": () => (/* binding */ blend),
/* harmony export */   "computeAlphaBlend": () => (/* binding */ computeAlphaBlend)
/* harmony export */ });
/* harmony import */ var _color_converters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-converters */ "./node_modules/@microsoft/fast-colors/dist/color-converters.js");
/* harmony import */ var _color_hsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-hsl */ "./node_modules/@microsoft/fast-colors/dist/color-hsl.js");
/* harmony import */ var _color_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-lab */ "./node_modules/@microsoft/fast-colors/dist/color-lab.js");
/* harmony import */ var _color_lch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-lch */ "./node_modules/@microsoft/fast-colors/dist/color-lch.js");
/* harmony import */ var _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-rgba-64 */ "./node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math-utilities */ "./node_modules/@microsoft/fast-colors/dist/math-utilities.js");






/**
 * Saturate a color using LCH color space
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function saturateViaLCH(input, saturation, saturationConstant = 18) {
    const lch = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToLCH)(input);
    let sat = lch.c + saturation * saturationConstant;
    if (sat < 0) {
        sat = 0;
    }
    return (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.lchToRGB)(new _color_lch__WEBPACK_IMPORTED_MODULE_1__.ColorLCH(lch.l, sat, lch.h));
}
/**
 * De-saturate a color using LCH color space
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function desaturateViaLCH(input, saturation, saturationConstant = 18) {
    return saturateViaLCH(input, -1 * saturation, saturationConstant);
}
/**
 * Darken a color using LAB color space
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function darkenViaLAB(input, amount, darkenConstant = 18) {
    const lab = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToLAB)(input);
    const darkened = lab.l - amount * darkenConstant;
    return (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.labToRGB)(new _color_lab__WEBPACK_IMPORTED_MODULE_2__.ColorLAB(darkened, lab.a, lab.b));
}
/**
 * Lighten a color using LAB color space
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function lightenViaLAB(input, amount, darkenConstant = 18) {
    return darkenViaLAB(input, -1 * amount, darkenConstant);
}
/**
 * @public
 */
function blendBurnChannel(bottom, top) {
    if (top === 0.0) {
        // Despite the discontinuity, other sources seem to use 0.0 here instead of 1
        return 0.0;
    }
    return 1.0 - (1.0 - bottom) / top;
}
/**
 * Blends two colors with the burn mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendBurn(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendBurnChannel(bottom.r, top.r), blendBurnChannel(bottom.g, top.g), blendBurnChannel(bottom.b, top.b), 1);
}
/**
 * Blends two colors
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendColor(bottom, top) {
    const bottomHSL = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToHSL)(bottom);
    const topHSL = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToHSL)(top);
    if (topHSL.s === 0) {
        return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(bottomHSL.l, bottomHSL.l, bottomHSL.l, 1);
    }
    return (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.hslToRGB)(new _color_hsl__WEBPACK_IMPORTED_MODULE_4__.ColorHSL(topHSL.h, topHSL.s, bottomHSL.l));
}
/**
 * @public
 */
function blendDarkenChannel(bottom, top) {
    return Math.min(bottom, top);
}
/**
 * Blends two colors with the darken mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendDarken(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendDarkenChannel(bottom.r, top.r), blendDarkenChannel(bottom.g, top.g), blendDarkenChannel(bottom.b, top.b), 1);
}
/**
 * @public
 */
function blendDodgeChannel(bottom, top) {
    if (top >= 1.0) {
        return 1.0;
    }
    const retVal = bottom / (1.0 - top);
    if (retVal >= 1.0) {
        return 1.0;
    }
    return retVal;
}
/**
 * Blends two colors with the dodge mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendDodge(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendDodgeChannel(bottom.r, top.r), blendDodgeChannel(bottom.g, top.g), blendDodgeChannel(bottom.b, top.b), 1);
}
/**
 * @public
 */
function blendLightenChannel(bottom, top) {
    return Math.max(bottom, top);
}
/**
 * Blends two colors with the lighten mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendLighten(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendLightenChannel(bottom.r, top.r), blendLightenChannel(bottom.g, top.g), blendLightenChannel(bottom.b, top.b), 1);
}
/**
 * @public
 */
function blendMultiplyChannel(bottom, top) {
    return bottom * top;
}
/**
 * Blends two colors with the multiply mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendMultiply(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendMultiplyChannel(bottom.r, top.r), blendMultiplyChannel(bottom.g, top.g), blendMultiplyChannel(bottom.b, top.b), 1);
}
/**
 * @public
 */
function blendOverlayChannel(bottom, top) {
    if (bottom < 0.5) {
        return (0,_math_utilities__WEBPACK_IMPORTED_MODULE_5__.clamp)(2.0 * top * bottom, 0, 1);
    }
    return (0,_math_utilities__WEBPACK_IMPORTED_MODULE_5__.clamp)(1.0 - 2.0 * (1.0 - top) * (1.0 - bottom), 0, 1);
}
/**
 * Blends two colors with the overlay mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendOverlay(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendOverlayChannel(bottom.r, top.r), blendOverlayChannel(bottom.g, top.g), blendOverlayChannel(bottom.b, top.b), 1);
}
/**
 * @public
 */
function blendScreenChannel(bottom, top) {
    return 1.0 - (1.0 - top) * (1.0 - bottom);
}
/**
 * Blends two colors with the screen mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendScreen(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendScreenChannel(bottom.r, top.r), blendScreenChannel(bottom.g, top.g), blendScreenChannel(bottom.b, top.b), 1);
}
/**
 * Color blend modes.
 * @public
 */
var ColorBlendMode;
(function (ColorBlendMode) {
    ColorBlendMode[ColorBlendMode["Burn"] = 0] = "Burn";
    ColorBlendMode[ColorBlendMode["Color"] = 1] = "Color";
    ColorBlendMode[ColorBlendMode["Darken"] = 2] = "Darken";
    ColorBlendMode[ColorBlendMode["Dodge"] = 3] = "Dodge";
    ColorBlendMode[ColorBlendMode["Lighten"] = 4] = "Lighten";
    ColorBlendMode[ColorBlendMode["Multiply"] = 5] = "Multiply";
    ColorBlendMode[ColorBlendMode["Overlay"] = 6] = "Overlay";
    ColorBlendMode[ColorBlendMode["Screen"] = 7] = "Screen";
})(ColorBlendMode || (ColorBlendMode = {}));
/**
 * Blend two colors.
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blend(mode, bottom, top) {
    switch (mode) {
        case ColorBlendMode.Burn:
            return blendBurn(bottom, top);
        case ColorBlendMode.Color:
            return blendColor(bottom, top);
        case ColorBlendMode.Darken:
            return blendDarken(bottom, top);
        case ColorBlendMode.Dodge:
            return blendDodge(bottom, top);
        case ColorBlendMode.Lighten:
            return blendLighten(bottom, top);
        case ColorBlendMode.Multiply:
            return blendMultiply(bottom, top);
        case ColorBlendMode.Overlay:
            return blendOverlay(bottom, top);
        case ColorBlendMode.Screen:
            return blendScreen(bottom, top);
        default:
            throw new Error("Unknown blend mode");
    }
}
/**
 * Alpha channel of bottom is ignored
 * The returned color always has an alpha channel of 1
 * Different programs (eg: paint.net, photoshop) will give different answers than this occasionally but within +/- 1/255 in each channel. Just depends on the details of how they round off decimals
 *
 * @public
 */
function computeAlphaBlend(bottom, top) {
    if (top.a >= 1) {
        return top;
    }
    else if (top.a <= 0) {
        return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(bottom.r, bottom.g, bottom.b, 1);
    }
    const r = top.a * top.r + (1 - top.a) * bottom.r;
    const g = top.a * top.g + (1 - top.a) * bottom.g;
    const b = top.a * top.b + (1 - top.a) * bottom.b;
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(r, g, b, 1);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/color-converters.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/color-converters.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgbToLinearLuminance": () => (/* binding */ rgbToLinearLuminance),
/* harmony export */   "rgbToRelativeLuminance": () => (/* binding */ rgbToRelativeLuminance),
/* harmony export */   "contrastRatio": () => (/* binding */ contrastRatio),
/* harmony export */   "calculateOverlayColor": () => (/* binding */ calculateOverlayColor),
/* harmony export */   "rgbToHSL": () => (/* binding */ rgbToHSL),
/* harmony export */   "hslToRGB": () => (/* binding */ hslToRGB),
/* harmony export */   "rgbToHSV": () => (/* binding */ rgbToHSV),
/* harmony export */   "hsvToRGB": () => (/* binding */ hsvToRGB),
/* harmony export */   "lchToLAB": () => (/* binding */ lchToLAB),
/* harmony export */   "labToLCH": () => (/* binding */ labToLCH),
/* harmony export */   "labToXYZ": () => (/* binding */ labToXYZ),
/* harmony export */   "xyzToLAB": () => (/* binding */ xyzToLAB),
/* harmony export */   "rgbToXYZ": () => (/* binding */ rgbToXYZ),
/* harmony export */   "xyzToRGB": () => (/* binding */ xyzToRGB),
/* harmony export */   "rgbToLAB": () => (/* binding */ rgbToLAB),
/* harmony export */   "labToRGB": () => (/* binding */ labToRGB),
/* harmony export */   "rgbToLCH": () => (/* binding */ rgbToLCH),
/* harmony export */   "lchToRGB": () => (/* binding */ lchToRGB),
/* harmony export */   "temperatureToRGB": () => (/* binding */ temperatureToRGB),
/* harmony export */   "rgbToTemperature": () => (/* binding */ rgbToTemperature)
/* harmony export */ });
/* harmony import */ var _color_hsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-hsl */ "./node_modules/@microsoft/fast-colors/dist/color-hsl.js");
/* harmony import */ var _color_hsv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-hsv */ "./node_modules/@microsoft/fast-colors/dist/color-hsv.js");
/* harmony import */ var _color_lab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-lab */ "./node_modules/@microsoft/fast-colors/dist/color-lab.js");
/* harmony import */ var _color_lch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-lch */ "./node_modules/@microsoft/fast-colors/dist/color-lch.js");
/* harmony import */ var _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-rgba-64 */ "./node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _color_xyz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color-xyz */ "./node_modules/@microsoft/fast-colors/dist/color-xyz.js");
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math-utilities */ "./node_modules/@microsoft/fast-colors/dist/math-utilities.js");







// All hue values are in degrees rather than radians or normalized
// All conversions use the D65 2 degree white point for XYZ
// Info on conversions and constants used can be found in the following:
// https://en.wikipedia.org/wiki/CIELAB_color_space
// https://en.wikipedia.org/wiki/Illuminant_D65
// https://ninedegreesbelow.com/photography/xyz-rgb.html
// http://user.engineering.uiowa.edu/~aip/Misc/ColorFAQ.html
// https://web.stanford.edu/~sujason/ColorBalancing/adaptation.html
// http://brucelindbloom.com/index.html
/**
 * Get the luminance of a color in the linear RGB space.
 * This is not the same as the relative luminance in the sRGB space for WCAG contrast calculations. Use rgbToRelativeLuminance instead.
 * @param rgb - The input color
 *
 * @public
 */
function rgbToLinearLuminance(rgb) {
    return rgb.r * 0.2126 + rgb.g * 0.7152 + rgb.b * 0.0722;
}
/**
 * Get the relative luminance of a color.
 * Adjusts the color to sRGB space, which is necessary for the WCAG contrast spec.
 * The alpha channel of the input is ignored.
 * @param rgb - The input color
 *
 * @public
 */
function rgbToRelativeLuminance(rgb) {
    function luminanceHelper(i) {
        if (i <= 0.03928) {
            return i / 12.92;
        }
        return Math.pow((i + 0.055) / 1.055, 2.4);
    }
    return rgbToLinearLuminance(new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(luminanceHelper(rgb.r), luminanceHelper(rgb.g), luminanceHelper(rgb.b), 1));
}
const calculateContrastRatio = (a, b) => (a + 0.05) / (b + 0.05);
/**
 * Calculate the contrast ratio between two colors. Uses the formula described by {@link https://www.w3.org/TR/WCAG20-TECHS/G17.html | WCAG 2.0}.
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function contrastRatio(a, b) {
    const luminanceA = rgbToRelativeLuminance(a);
    const luminanceB = rgbToRelativeLuminance(b);
    return luminanceA > luminanceB
        ? calculateContrastRatio(luminanceA, luminanceB)
        : calculateContrastRatio(luminanceB, luminanceA);
}
/**
 * Calculate an overlay color that uses rgba (rgb + alpha) that matches the appareance of a given solid color when placed on the same background
 * @param rgbMatch - The solid color the overlay should match in appearance when placed over the rgbBackground
 * @param rgbBackground - The background on which the overlay rests
 * @param rgbOverlay - The rgb color of the overlay. Typically this is either pure white or pure black. This color will be used in the returned output
 * @returns The rgba (rgb + alpha) color of the overlay
 *
 * @public
 */
function calculateOverlayColor(rgbMatch, rgbBackground, rgbOverlay) {
    const rChannel = (rgbMatch.r - rgbBackground.r) / (rgbOverlay.r - rgbBackground.r);
    const gChannel = (rgbMatch.g - rgbBackground.g) / (rgbOverlay.g - rgbBackground.g);
    const bChannel = (rgbMatch.b - rgbBackground.b) / (rgbOverlay.b - rgbBackground.b);
    const alpha = (rChannel + gChannel + bChannel) / 3;
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(rgbOverlay.r, rgbOverlay.g, rgbOverlay.b, alpha);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorRGBA64} to a {@link @microsoft/fast-colors#ColorHSL}
 * @param rgb - the rgb color to convert
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function rgbToHSL(rgb) {
    const max = Math.max(rgb.r, rgb.g, rgb.b);
    const min = Math.min(rgb.r, rgb.g, rgb.b);
    const delta = max - min;
    let hue = 0;
    if (delta !== 0) {
        if (max === rgb.r) {
            hue = 60 * (((rgb.g - rgb.b) / delta) % 6);
        }
        else if (max === rgb.g) {
            hue = 60 * ((rgb.b - rgb.r) / delta + 2);
        }
        else {
            hue = 60 * ((rgb.r - rgb.g) / delta + 4);
        }
    }
    if (hue < 0) {
        hue += 360;
    }
    const lum = (max + min) / 2;
    let sat = 0;
    if (delta !== 0) {
        sat = delta / (1 - Math.abs(2 * lum - 1));
    }
    return new _color_hsl__WEBPACK_IMPORTED_MODULE_1__.ColorHSL(hue, sat, lum);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorHSL} to a {@link @microsoft/fast-colors#ColorRGBA64}
 * @param hsl - the hsl color to convert
 * @param alpha - the alpha value
 *
 * @public
 */
function hslToRGB(hsl, alpha = 1) {
    const c = (1 - Math.abs(2 * hsl.l - 1)) * hsl.s;
    const x = c * (1 - Math.abs(((hsl.h / 60) % 2) - 1));
    const m = hsl.l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;
    if (hsl.h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (hsl.h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (hsl.h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (hsl.h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (hsl.h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (hsl.h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(r + m, g + m, b + m, alpha);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorRGBA64} to a {@link @microsoft/fast-colors#ColorHSV}
 * @param rgb - the rgb color to convert
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function rgbToHSV(rgb) {
    const max = Math.max(rgb.r, rgb.g, rgb.b);
    const min = Math.min(rgb.r, rgb.g, rgb.b);
    const delta = max - min;
    let hue = 0;
    if (delta !== 0) {
        if (max === rgb.r) {
            hue = 60 * (((rgb.g - rgb.b) / delta) % 6);
        }
        else if (max === rgb.g) {
            hue = 60 * ((rgb.b - rgb.r) / delta + 2);
        }
        else {
            hue = 60 * ((rgb.r - rgb.g) / delta + 4);
        }
    }
    if (hue < 0) {
        hue += 360;
    }
    let sat = 0;
    if (max !== 0) {
        sat = delta / max;
    }
    return new _color_hsv__WEBPACK_IMPORTED_MODULE_2__.ColorHSV(hue, sat, max);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorHSV} to a {@link @microsoft/fast-colors#ColorRGBA64}
 * @param hsv - the hsv color to convert
 * @param alpha - the alpha value
 *
 * @public
 */
function hsvToRGB(hsv, alpha = 1) {
    const c = hsv.s * hsv.v;
    const x = c * (1 - Math.abs(((hsv.h / 60) % 2) - 1));
    const m = hsv.v - c;
    let r = 0;
    let g = 0;
    let b = 0;
    if (hsv.h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (hsv.h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (hsv.h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (hsv.h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (hsv.h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (hsv.h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(r + m, g + m, b + m, alpha);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorLCH} to a {@link @microsoft/fast-colors#ColorLAB}
 * @param lch - the lch color to convert
 *
 * @public
 */
function lchToLAB(lch) {
    let a = 0;
    let b = 0;
    if (lch.h !== 0) {
        a = Math.cos((0,_math_utilities__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(lch.h)) * lch.c;
        b = Math.sin((0,_math_utilities__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(lch.h)) * lch.c;
    }
    return new _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB(lch.l, a, b);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorLAB} to a {@link @microsoft/fast-colors#ColorLCH}
 * @param lab - the lab color to convert
 *
 * @remarks
 * The discontinuity in the C parameter at 0 means that floating point errors will often result in values near 0 giving unpredictable results.
 * EG: 0.0000001 gives a very different result than -0.0000001
 * In cases where both a and b are very near zero this function will return an LCH color with an H of 0
 * More info about the atan2 function: {@link https://en.wikipedia.org/wiki/Atan2}
 * @public
 */
function labToLCH(lab) {
    let h = 0;
    // Because of the discontuity at 0 if a number is very close to 0 - often due to floating point errors - then
    // it gives unexpected results. EG: 0.000000000001 gives a different result than 0. So just avoid any number
    // that has both a and b very close to zero and lump it in with the h = 0 case.
    if (Math.abs(lab.b) > 0.001 || Math.abs(lab.a) > 0.001) {
        h = (0,_math_utilities__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees)(Math.atan2(lab.b, lab.a));
    }
    if (h < 0) {
        h += 360;
    }
    const c = Math.sqrt(lab.a * lab.a + lab.b * lab.b);
    return new _color_lch__WEBPACK_IMPORTED_MODULE_5__.ColorLCH(lab.l, c, h);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorLAB} to a {@link @microsoft/fast-colors#ColorXYZ}
 * @param lab - the lab color to convert
 *
 * @public
 */
function labToXYZ(lab) {
    const fy = (lab.l + 16) / 116;
    const fx = fy + lab.a / 500;
    const fz = fy - lab.b / 200;
    const xcubed = Math.pow(fx, 3);
    const ycubed = Math.pow(fy, 3);
    const zcubed = Math.pow(fz, 3);
    let x = 0;
    if (xcubed > _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.epsilon) {
        x = xcubed;
    }
    else {
        x = (116 * fx - 16) / _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.kappa;
    }
    let y = 0;
    if (lab.l > _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.epsilon * _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.kappa) {
        y = ycubed;
    }
    else {
        y = lab.l / _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.kappa;
    }
    let z = 0;
    if (zcubed > _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.epsilon) {
        z = zcubed;
    }
    else {
        z = (116 * fz - 16) / _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.kappa;
    }
    x = _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ.whitePoint.x * x;
    y = _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ.whitePoint.y * y;
    z = _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ.whitePoint.z * z;
    return new _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ(x, y, z);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorXYZ} to a {@link @microsoft/fast-colors#ColorLAB}
 * @param xyz - the xyz color to convert
 *
 * @public
 */
function xyzToLAB(xyz) {
    function xyzToLABHelper(i) {
        if (i > _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.epsilon) {
            return Math.pow(i, 1 / 3);
        }
        return (_color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.kappa * i + 16) / 116;
    }
    const x = xyzToLABHelper(xyz.x / _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ.whitePoint.x);
    const y = xyzToLABHelper(xyz.y / _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ.whitePoint.y);
    const z = xyzToLABHelper(xyz.z / _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ.whitePoint.z);
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return new _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB(l, a, b);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorRGBA64} to a {@link @microsoft/fast-colors#ColorXYZ}
 * @param rgb - the rgb color to convert
 *
 * @remarks
 * The alpha channel of the input is ignored
 * @public
 */
function rgbToXYZ(rgb) {
    function rgbToXYZHelper(i) {
        if (i <= 0.04045) {
            return i / 12.92;
        }
        return Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const r = rgbToXYZHelper(rgb.r);
    const g = rgbToXYZHelper(rgb.g);
    const b = rgbToXYZHelper(rgb.b);
    const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
    const y = r * 0.2126729 + g * 0.7151522 + b * 0.072175;
    const z = r * 0.0193339 + g * 0.119192 + b * 0.9503041;
    return new _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ(x, y, z);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorXYZ} to a {@link @microsoft/fast-colors#ColorRGBA64}
 * @param xyz - the xyz color to convert
 * @param alpha - the alpha value
 *
 * @remarks
 * Note that the xyz color space is significantly larger than sRGB. As such, this can return colors rgb values greater than 1 or less than 0
 * @public
 */
function xyzToRGB(xyz, alpha = 1) {
    function xyzToRGBHelper(i) {
        if (i <= 0.0031308) {
            return i * 12.92;
        }
        return 1.055 * Math.pow(i, 1 / 2.4) - 0.055;
    }
    const r = xyzToRGBHelper(xyz.x * 3.2404542 - xyz.y * 1.5371385 - xyz.z * 0.4985314);
    const g = xyzToRGBHelper(xyz.x * -0.969266 + xyz.y * 1.8760108 + xyz.z * 0.041556);
    const b = xyzToRGBHelper(xyz.x * 0.0556434 - xyz.y * 0.2040259 + xyz.z * 1.0572252);
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(r, g, b, alpha);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorRGBA64} to a {@link @microsoft/fast-colors#ColorLAB}
 * @param rgb - the rgb color to convert
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function rgbToLAB(rgb) {
    return xyzToLAB(rgbToXYZ(rgb));
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorLAB} to a {@link @microsoft/fast-colors#ColorRGBA64}
 * @param lab - the LAB color to convert
 * @param alpha - the alpha value
 *
 * @remarks
 * Note that the xyz color space (which the conversion from LAB uses) is significantly larger than sRGB. As such, this can return colors rgb values greater than 1 or less than 0
 *
 * @public
 */
function labToRGB(lab, alpha = 1) {
    return xyzToRGB(labToXYZ(lab), alpha);
}
/**
 * Convert a {@link @microsoft/fast-colors#ColorRGBA64} to a {@link @microsoft/fast-colors#ColorLCH}
 *
 * @param rgb - the rgb color to convert
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function rgbToLCH(rgb) {
    return labToLCH(rgbToLAB(rgb));
}
/**
 * Convert a {@link @microsoft/fast-colors#ColorLCH} to a {@link @microsoft/fast-colors#ColorRGBA64}
 * @param lch - the LCH color to convert
 * @param alpha - the alpha value
 *
 * @public
 */
function lchToRGB(lch, alpha = 1) {
    return labToRGB(lchToLAB(lch), alpha);
}
/**
 * Converts a color temperature to a {@link @microsoft/fast-colors#ColorRGBA64}
 * @param tempKelvin - the temperature to convert
 * @param alpha - the alpha value
 *
 * @public
 */
function temperatureToRGB(tempKelvin, alpha = 1) {
    // The constants I could find assumed a decimal range of [0,255] for each channel. Just going to put a /255.0 at the end
    let r = 0;
    let g = 0;
    let b = 0;
    if (tempKelvin <= 1000) {
        tempKelvin = 1000;
    }
    else if (tempKelvin >= 40000) {
        tempKelvin = 40000;
    }
    if (tempKelvin < 6600.0) {
        r = 255.0;
        g = tempKelvin / 100.0 - 2.0;
        g =
            -155.25485562709179 -
                0.44596950469579133 * g +
                104.49216199393888 * Math.log(g);
    }
    else {
        r = tempKelvin / 100.0 - 55.0;
        r = 351.97690566805693 + 0.114206453784165 * r - 40.25366309332127 * Math.log(r);
        g = tempKelvin / 100.0 - 50.0;
        g = 325.4494125711974 + 0.07943456536662342 * g - 28.0852963507957 * Math.log(g);
    }
    if (tempKelvin >= 6600.0) {
        b = 255.0;
    }
    else if (tempKelvin < 2000.0) {
        b = 0.0;
    }
    else {
        b = tempKelvin / 100.0 - 10;
        b =
            -254.76935184120902 +
                0.8274096064007395 * b +
                115.67994401066147 * Math.log(b);
    }
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(r / 255, g / 255, b / 255, alpha);
}
/**
 * Convert a rgb color to a color temperature
 * @param rgb - the color to convert
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function rgbToTemperature(rgb) {
    let t = 0;
    let min = 1000;
    let max = 40000;
    while (max - min > 0.4) {
        t = (max + min) / 2.0;
        const testColor = temperatureToRGB(t);
        if (testColor.b / testColor.r >= rgb.b / rgb.r) {
            max = t;
        }
        else {
            min = t;
        }
    }
    return Math.round(t);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/color-hsl.js":
/*!***************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/color-hsl.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorHSL": () => (/* binding */ ColorHSL)
/* harmony export */ });
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utilities */ "./node_modules/@microsoft/fast-colors/dist/math-utilities.js");

/**
 * This uses Hue values in "degree" format. So expect a range of [0,360]. Some other implementations instead uses radians or a normalized Hue with range [0,1]. Be aware of this when checking values or using other libraries.
 *
 * @public
 */
class ColorHSL {
    constructor(hue, sat, lum) {
        this.h = hue;
        this.s = sat;
        this.l = lum;
    }
    /**
     * Construct a {@link ColorHSL} from a config object.
     */
    static fromObject(data) {
        if (data && !isNaN(data.h) && !isNaN(data.s) && !isNaN(data.l)) {
            return new ColorHSL(data.h, data.s, data.l);
        }
        return null;
    }
    /**
     * Determines if a color is equal to another
     * @param rhs - the value to compare
     */
    equalValue(rhs) {
        return this.h === rhs.h && this.s === rhs.s && this.l === rhs.l;
    }
    /**
     * Returns a new {@link ColorHSL} rounded to the provided precision
     * @param precision - the precision to round to
     */
    roundToPrecision(precision) {
        return new ColorHSL((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.h, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.s, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.l, precision));
    }
    /**
     * Returns the {@link ColorHSL} formatted as an object.
     */
    toObject() {
        return { h: this.h, s: this.s, l: this.l };
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/color-hsv.js":
/*!***************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/color-hsv.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorHSV": () => (/* binding */ ColorHSV)
/* harmony export */ });
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utilities */ "./node_modules/@microsoft/fast-colors/dist/math-utilities.js");

/**
 * This uses Hue values in "degree" format. So expect a range of [0,360]. Some other implementations instead uses radians or a normalized Hue with range [0,1]. Be aware of this when checking values or using other libraries.
 *
 * @public
 */
class ColorHSV {
    constructor(hue, sat, val) {
        this.h = hue;
        this.s = sat;
        this.v = val;
    }
    /**
     * Construct a {@link ColorHSV} from a config object.
     */
    static fromObject(data) {
        if (data && !isNaN(data.h) && !isNaN(data.s) && !isNaN(data.v)) {
            return new ColorHSV(data.h, data.s, data.v);
        }
        return null;
    }
    /**
     * Determines if a color is equal to another
     * @param rhs - the value to compare
     */
    equalValue(rhs) {
        return this.h === rhs.h && this.s === rhs.s && this.v === rhs.v;
    }
    /**
     * Returns a new {@link ColorHSV} rounded to the provided precision
     * @param precision - the precision to round to
     */
    roundToPrecision(precision) {
        return new ColorHSV((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.h, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.s, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.v, precision));
    }
    /**
     * Returns the {@link ColorHSV} formatted as an object.
     */
    toObject() {
        return { h: this.h, s: this.s, v: this.v };
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/color-interpolation.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/color-interpolation.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interpolateRGB": () => (/* binding */ interpolateRGB),
/* harmony export */   "interpolateHSL": () => (/* binding */ interpolateHSL),
/* harmony export */   "interpolateHSV": () => (/* binding */ interpolateHSV),
/* harmony export */   "interpolateXYZ": () => (/* binding */ interpolateXYZ),
/* harmony export */   "interpolateLAB": () => (/* binding */ interpolateLAB),
/* harmony export */   "interpolateLCH": () => (/* binding */ interpolateLCH),
/* harmony export */   "ColorInterpolationSpace": () => (/* binding */ ColorInterpolationSpace),
/* harmony export */   "interpolateByColorSpace": () => (/* binding */ interpolateByColorSpace)
/* harmony export */ });
/* harmony import */ var _color_converters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./color-converters */ "./node_modules/@microsoft/fast-colors/dist/color-converters.js");
/* harmony import */ var _color_hsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-hsl */ "./node_modules/@microsoft/fast-colors/dist/color-hsl.js");
/* harmony import */ var _color_hsv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-hsv */ "./node_modules/@microsoft/fast-colors/dist/color-hsv.js");
/* harmony import */ var _color_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-lab */ "./node_modules/@microsoft/fast-colors/dist/color-lab.js");
/* harmony import */ var _color_lch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color-lch */ "./node_modules/@microsoft/fast-colors/dist/color-lch.js");
/* harmony import */ var _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-rgba-64 */ "./node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _color_xyz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-xyz */ "./node_modules/@microsoft/fast-colors/dist/color-xyz.js");
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math-utilities */ "./node_modules/@microsoft/fast-colors/dist/math-utilities.js");








/**
 * Interpolate by RGB color space
 *
 * @public
 */
function interpolateRGB(position, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.r, right.r), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.g, right.g), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.b, right.b), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.a, right.a));
}
/**
 * Interpolate by HSL color space
 *
 * @public
 */
function interpolateHSL(position, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    return new _color_hsl__WEBPACK_IMPORTED_MODULE_2__.ColorHSL((0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerpAnglesInDegrees)(position, left.h, right.h), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.s, right.s), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.l, right.l));
}
/**
 * Interpolate by HSV color space
 *
 * @public
 */
function interpolateHSV(position, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    return new _color_hsv__WEBPACK_IMPORTED_MODULE_3__.ColorHSV((0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerpAnglesInDegrees)(position, left.h, right.h), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.s, right.s), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.v, right.v));
}
/**
 * Interpolate by XYZ color space
 *
 * @public
 */
function interpolateXYZ(position, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    return new _color_xyz__WEBPACK_IMPORTED_MODULE_4__.ColorXYZ((0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.x, right.x), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.y, right.y), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.z, right.z));
}
/**
 * Interpolate by LAB color space
 *
 * @public
 */
function interpolateLAB(position, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    return new _color_lab__WEBPACK_IMPORTED_MODULE_5__.ColorLAB((0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.l, right.l), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.a, right.a), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.b, right.b));
}
/**
 * Interpolate by LCH color space
 *
 * @public
 */
function interpolateLCH(position, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    return new _color_lch__WEBPACK_IMPORTED_MODULE_6__.ColorLCH((0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.l, right.l), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.c, right.c), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerpAnglesInDegrees)(position, left.h, right.h));
}
/**
 * Color interpolation spaces
 *
 * @public
 */
var ColorInterpolationSpace;
(function (ColorInterpolationSpace) {
    ColorInterpolationSpace[ColorInterpolationSpace["RGB"] = 0] = "RGB";
    ColorInterpolationSpace[ColorInterpolationSpace["HSL"] = 1] = "HSL";
    ColorInterpolationSpace[ColorInterpolationSpace["HSV"] = 2] = "HSV";
    ColorInterpolationSpace[ColorInterpolationSpace["XYZ"] = 3] = "XYZ";
    ColorInterpolationSpace[ColorInterpolationSpace["LAB"] = 4] = "LAB";
    ColorInterpolationSpace[ColorInterpolationSpace["LCH"] = 5] = "LCH";
})(ColorInterpolationSpace || (ColorInterpolationSpace = {}));
/**
 * Interpolate by color space
 *
 * @public
 */
function interpolateByColorSpace(position, space, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    switch (space) {
        case ColorInterpolationSpace.HSL:
            return (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.hslToRGB)(interpolateHSL(position, (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToHSL)(left), (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToHSL)(right)));
        case ColorInterpolationSpace.HSV:
            return (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.hsvToRGB)(interpolateHSV(position, (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToHSV)(left), (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToHSV)(right)));
        case ColorInterpolationSpace.XYZ:
            return (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.xyzToRGB)(interpolateXYZ(position, (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToXYZ)(left), (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToXYZ)(right)));
        case ColorInterpolationSpace.LAB:
            return (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.labToRGB)(interpolateLAB(position, (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToLAB)(left), (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToLAB)(right)));
        case ColorInterpolationSpace.LCH:
            return (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.lchToRGB)(interpolateLCH(position, (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToLCH)(left), (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToLCH)(right)));
        default:
            return interpolateRGB(position, left, right);
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/color-lab.js":
/*!***************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/color-lab.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorLAB": () => (/* binding */ ColorLAB)
/* harmony export */ });
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utilities */ "./node_modules/@microsoft/fast-colors/dist/math-utilities.js");

/**
 * {@link https://en.wikipedia.org/wiki/CIELAB_color_space | CIELAB color space}
 * This implementation uses the D65 constants for 2 degrees. That determines the constants used for the pure white point of the XYZ space of 0.95047, 1.0, 1.08883.
 * {@link https://en.wikipedia.org/wiki/Illuminant_D65}
 * These constants determine how the XYZ, LCH and LAB colors convert to/from RGB.
 *
 * @public
 */
class ColorLAB {
    constructor(l, a, b) {
        this.l = l;
        this.a = a;
        this.b = b;
    }
    /**
     * Construct a {@link ColorLAB} from a config object.
     */
    static fromObject(data) {
        if (data && !isNaN(data.l) && !isNaN(data.a) && !isNaN(data.b)) {
            return new ColorLAB(data.l, data.a, data.b);
        }
        return null;
    }
    /**
     * Determines if a color is equal to another
     * @param rhs - the value to compare
     */
    equalValue(rhs) {
        return this.l === rhs.l && this.a === rhs.a && this.b === rhs.b;
    }
    /**
     * Returns a new {@link ColorLAB} rounded to the provided precision
     * @param precision - the precision to round to
     */
    roundToPrecision(precision) {
        return new ColorLAB((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.l, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.a, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.b, precision));
    }
    /**
     * Returns the {@link ColorLAB} formatted as an object.
     */
    toObject() {
        return { l: this.l, a: this.a, b: this.b };
    }
}
ColorLAB.epsilon = 216 / 24389;
ColorLAB.kappa = 24389 / 27;


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/color-lch.js":
/*!***************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/color-lch.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorLCH": () => (/* binding */ ColorLCH)
/* harmony export */ });
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utilities */ "./node_modules/@microsoft/fast-colors/dist/math-utilities.js");

/**
 *
 * {@link https://en.wikipedia.org/wiki/CIELAB_color_space | CIELCH color space}
 *
 * This is a cylindrical representation of the CIELAB space useful for saturation operations
 * This uses Hue values in "degree" format. So expect a range of [0,360]. Some other implementations instead uses radians or a normalized Hue with range [0,1]. Be aware of this when checking values or using other libraries.
 * This implementation uses the D65 constants for 2 degrees. That determines the constants used for the pure white point of the XYZ space of 0.95047, 1.0, 1.08883.
 * {@link https://en.wikipedia.org/wiki/Illuminant_D65}
 * These constants determine how the XYZ, LCH and LAB colors convert to/from RGB.
 *
 * @public
 */
class ColorLCH {
    constructor(l, c, h) {
        this.l = l;
        this.c = c;
        this.h = h;
    }
    /**
     * Construct a {@link ColorLCH} from a config object.
     * @param data - the config object
     */
    static fromObject(data) {
        if (data && !isNaN(data.l) && !isNaN(data.c) && !isNaN(data.h)) {
            return new ColorLCH(data.l, data.c, data.h);
        }
        return null;
    }
    /**
     * Determines if one color is equal to another.
     * @param rhs - the color to compare
     */
    equalValue(rhs) {
        return this.l === rhs.l && this.c === rhs.c && this.h === rhs.h;
    }
    /**
     * Returns a new {@link ColorLCH} rounded to the provided precision
     * @param precision - the precision to round to
     */
    roundToPrecision(precision) {
        return new ColorLCH((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.l, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.c, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.h, precision));
    }
    /**
     * Converts the {@link ColorLCH} to a config object.
     */
    toObject() {
        return { l: this.l, c: this.c, h: this.h };
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/color-palette.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/color-palette.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPalette": () => (/* binding */ ColorPalette),
/* harmony export */   "matchLightnessIndex": () => (/* binding */ matchLightnessIndex),
/* harmony export */   "generateOffCenterPalette": () => (/* binding */ generateOffCenterPalette),
/* harmony export */   "rescale": () => (/* binding */ rescale),
/* harmony export */   "defaultCenteredRescaleConfig": () => (/* binding */ defaultCenteredRescaleConfig),
/* harmony export */   "centeredRescale": () => (/* binding */ centeredRescale),
/* harmony export */   "generateScaledPalettes": () => (/* binding */ generateScaledPalettes)
/* harmony export */ });
/* harmony import */ var _color_blending__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-blending */ "./node_modules/@microsoft/fast-colors/dist/color-blending.js");
/* harmony import */ var _color_converters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-converters */ "./node_modules/@microsoft/fast-colors/dist/color-converters.js");
/* harmony import */ var _color_interpolation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-interpolation */ "./node_modules/@microsoft/fast-colors/dist/color-interpolation.js");
/* harmony import */ var _color_rgba_64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-rgba-64 */ "./node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _color_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-scale */ "./node_modules/@microsoft/fast-colors/dist/color-scale.js");
/* harmony import */ var _parse_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse-color */ "./node_modules/@microsoft/fast-colors/dist/parse-color.js");






/**
 * Generates a color palette
 * @public
 */
class ColorPalette {
    constructor(config) {
        this.config = Object.assign({}, ColorPalette.defaultPaletteConfig, config);
        this.palette = [];
        this.updatePaletteColors();
    }
    updatePaletteGenerationValues(newConfig) {
        let changed = false;
        for (const key in newConfig) {
            if (this.config[key]) {
                if (this.config[key].equalValue) {
                    if (!this.config[key].equalValue(newConfig[key])) {
                        this.config[key] = newConfig[key];
                        changed = true;
                    }
                }
                else {
                    if (newConfig[key] !== this.config[key]) {
                        this.config[key] = newConfig[key];
                        changed = true;
                    }
                }
            }
        }
        if (changed) {
            this.updatePaletteColors();
        }
        return changed;
    }
    updatePaletteColors() {
        const scale = this.generatePaletteColorScale();
        for (let i = 0; i < this.config.steps; i++) {
            this.palette[i] = scale.getColor(i / (this.config.steps - 1), this.config.interpolationMode);
        }
    }
    generatePaletteColorScale() {
        // Even when config.baseScalePosition is specified, using 0.5 for the baseColor
        // in the baseScale gives better results. Otherwise very off-center palettes
        // tend to go completely grey at the end furthest from the specified base color.
        const baseColorHSL = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToHSL)(this.config.baseColor);
        const baseScale = new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale([
            { position: 0, color: this.config.scaleColorLight },
            { position: 0.5, color: this.config.baseColor },
            { position: 1, color: this.config.scaleColorDark },
        ]);
        const trimmedScale = baseScale.trim(this.config.clipLight, 1 - this.config.clipDark);
        const trimmedLight = trimmedScale.getColor(0);
        const trimmedDark = trimmedScale.getColor(1);
        let adjustedLight = trimmedLight;
        let adjustedDark = trimmedDark;
        if (baseColorHSL.s >= this.config.saturationAdjustmentCutoff) {
            adjustedLight = (0,_color_blending__WEBPACK_IMPORTED_MODULE_2__.saturateViaLCH)(adjustedLight, this.config.saturationLight);
            adjustedDark = (0,_color_blending__WEBPACK_IMPORTED_MODULE_2__.saturateViaLCH)(adjustedDark, this.config.saturationDark);
        }
        if (this.config.multiplyLight !== 0) {
            const multiply = (0,_color_blending__WEBPACK_IMPORTED_MODULE_2__.blendMultiply)(this.config.baseColor, adjustedLight);
            adjustedLight = (0,_color_interpolation__WEBPACK_IMPORTED_MODULE_3__.interpolateByColorSpace)(this.config.multiplyLight, this.config.interpolationMode, adjustedLight, multiply);
        }
        if (this.config.multiplyDark !== 0) {
            const multiply = (0,_color_blending__WEBPACK_IMPORTED_MODULE_2__.blendMultiply)(this.config.baseColor, adjustedDark);
            adjustedDark = (0,_color_interpolation__WEBPACK_IMPORTED_MODULE_3__.interpolateByColorSpace)(this.config.multiplyDark, this.config.interpolationMode, adjustedDark, multiply);
        }
        if (this.config.overlayLight !== 0) {
            const overlay = (0,_color_blending__WEBPACK_IMPORTED_MODULE_2__.blendOverlay)(this.config.baseColor, adjustedLight);
            adjustedLight = (0,_color_interpolation__WEBPACK_IMPORTED_MODULE_3__.interpolateByColorSpace)(this.config.overlayLight, this.config.interpolationMode, adjustedLight, overlay);
        }
        if (this.config.overlayDark !== 0) {
            const overlay = (0,_color_blending__WEBPACK_IMPORTED_MODULE_2__.blendOverlay)(this.config.baseColor, adjustedDark);
            adjustedDark = (0,_color_interpolation__WEBPACK_IMPORTED_MODULE_3__.interpolateByColorSpace)(this.config.overlayDark, this.config.interpolationMode, adjustedDark, overlay);
        }
        if (this.config.baseScalePosition) {
            if (this.config.baseScalePosition <= 0) {
                return new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale([
                    { position: 0, color: this.config.baseColor },
                    { position: 1, color: adjustedDark.clamp() },
                ]);
            }
            else if (this.config.baseScalePosition >= 1) {
                return new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale([
                    { position: 0, color: adjustedLight.clamp() },
                    { position: 1, color: this.config.baseColor },
                ]);
            }
            return new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale([
                { position: 0, color: adjustedLight.clamp() },
                {
                    position: this.config.baseScalePosition,
                    color: this.config.baseColor,
                },
                { position: 1, color: adjustedDark.clamp() },
            ]);
        }
        return new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale([
            { position: 0, color: adjustedLight.clamp() },
            { position: 0.5, color: this.config.baseColor },
            { position: 1, color: adjustedDark.clamp() },
        ]);
    }
}
ColorPalette.defaultPaletteConfig = {
    baseColor: (0,_parse_color__WEBPACK_IMPORTED_MODULE_4__.parseColorHexRGB)("#808080"),
    steps: 11,
    interpolationMode: _color_interpolation__WEBPACK_IMPORTED_MODULE_3__.ColorInterpolationSpace.RGB,
    scaleColorLight: new _color_rgba_64__WEBPACK_IMPORTED_MODULE_5__.ColorRGBA64(1, 1, 1, 1),
    scaleColorDark: new _color_rgba_64__WEBPACK_IMPORTED_MODULE_5__.ColorRGBA64(0, 0, 0, 1),
    clipLight: 0.185,
    clipDark: 0.16,
    saturationAdjustmentCutoff: 0.05,
    saturationLight: 0.35,
    saturationDark: 1.25,
    overlayLight: 0,
    overlayDark: 0.25,
    multiplyLight: 0,
    multiplyDark: 0,
    baseScalePosition: 0.5,
};
ColorPalette.greyscalePaletteConfig = {
    baseColor: (0,_parse_color__WEBPACK_IMPORTED_MODULE_4__.parseColorHexRGB)("#808080"),
    steps: 11,
    interpolationMode: _color_interpolation__WEBPACK_IMPORTED_MODULE_3__.ColorInterpolationSpace.RGB,
    scaleColorLight: new _color_rgba_64__WEBPACK_IMPORTED_MODULE_5__.ColorRGBA64(1, 1, 1, 1),
    scaleColorDark: new _color_rgba_64__WEBPACK_IMPORTED_MODULE_5__.ColorRGBA64(0, 0, 0, 1),
    clipLight: 0,
    clipDark: 0,
    saturationAdjustmentCutoff: 0,
    saturationLight: 0,
    saturationDark: 0,
    overlayLight: 0,
    overlayDark: 0,
    multiplyLight: 0,
    multiplyDark: 0,
    baseScalePosition: 0.5,
};
/**
 * Takes the input color and compares it to each color in the reference array to find the index with the closest Lightness value in HSL color space
 * @public
 */
function matchLightnessIndex(input, reference) {
    const hsl = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToHSL)(input);
    let bestFitValue = Number.MAX_VALUE;
    let bestFitIndex = 0;
    for (let i = 0; i < reference.length; i++) {
        const ihsl = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToHSL)(reference[i]);
        const fitValue = Math.abs(ihsl.l - hsl.l);
        if (fitValue < bestFitValue) {
            bestFitValue = fitValue;
            bestFitIndex = i;
        }
    }
    return bestFitIndex;
}
/**
 * Generates a greyscale palette using greyscaleConfig. The Lightness (in HSL) of the input color is then compared to the greyscale palette to determine how far off center the input color should be placed. The output palette is then generated with outputSteps number of steps using colorConfig.
 * @public
 */
function generateOffCenterPalette(input, outputSteps, greyscaleConfig = ColorPalette.greyscalePaletteConfig, colorConfig = ColorPalette.defaultPaletteConfig) {
    const greyscale = new ColorPalette(Object.assign(Object.assign({}, greyscaleConfig), { steps: outputSteps }));
    const scaleIndex = matchLightnessIndex(input, greyscale.palette);
    return new ColorPalette(Object.assign(Object.assign({}, colorConfig), { steps: outputSteps, baseColor: input, baseScalePosition: scaleIndex / (outputSteps - 1) }));
}
/**
 * Take the input array of colors and extrapolates them to a larger palette of size targetSize. If preserveInputColors is false the input colors are evenly distributed into the output. Otherwise, the positions of the input colors are adjusted from a perfectly even distribution in order to ensure that the exact color values appearing in the input array also appear in the output array. The larger targetSize is compared to input.length the smaller those adjustments will be.
 *
 * @public
 */
function rescale(input, targetSize, preserveInputColors) {
    if (input.length <= 1 || targetSize <= 1) {
        throw new Error("The input array and targetSize must both be greater than 1");
    }
    if (preserveInputColors && targetSize <= input.length) {
        throw new Error("If preserveInputColors is true then targetSize must be greater than the length of the input array");
    }
    const stops = new Array(input.length);
    if (preserveInputColors) {
        for (let i = 0; i < input.length; i++) {
            const p = i / (input.length - 1);
            let bestFitValue = 2;
            let bestFitIndex = 0;
            for (let j = 0; j < targetSize; j++) {
                const fitValue = Math.abs(j / (targetSize - 1) - p);
                if (fitValue < bestFitValue) {
                    bestFitValue = fitValue;
                    bestFitIndex = j;
                }
                if (fitValue === 0) {
                    break;
                }
            }
            stops[i] = {
                color: input[i],
                position: bestFitIndex / (targetSize - 1),
            };
        }
    }
    else {
        for (let i = 0; i < stops.length; i++) {
            stops[i] = { color: input[i], position: i / (input.length - 1) };
        }
    }
    const scale = new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale(stops);
    const retVal = new Array(targetSize);
    for (let i = 0; i < targetSize; i++) {
        retVal[i] = scale.getColor(i / (targetSize - 1));
    }
    return retVal;
}
/**
 * @public
 */
const defaultCenteredRescaleConfig = {
    targetSize: 63,
    spacing: 4,
    scaleColorLight: ColorPalette.defaultPaletteConfig.scaleColorLight,
    scaleColorDark: ColorPalette.defaultPaletteConfig.scaleColorDark,
};
/**
 * Takes an input array of colors and extrapolates them to a larger palette. The mapping first takes the input array and extrapolates between each color so that they are separated by spacing-1 slots. Then it adds to either end enough new colors to make up the desired targetSize. All output color slots between the defined stops are interpolated.
 * @example
 * For an input array with length 5, a targetSize of 17 and spacing of 3 the output would be:
 *  0: scaleColorLight
 *  1:
 *  2: input 0
 *  3:
 *  4:
 *  5: input 1
 *  6:
 *  7:
 *  8: input 2
 *  9:
 * 10:
 * 11: input 3
 * 12:
 * 13:
 * 14: input 4
 * 15:
 * 16: scaleColorDark
 *
 * @public
 */
function centeredRescale(input, config = defaultCenteredRescaleConfig) {
    if (input.length === 0) {
        return [];
    }
    const offset = Math.floor((config.targetSize - ((input.length - 1) * config.spacing + 1)) / 2);
    if (offset < 0) {
        throw new Error("(targetSize - ((input.length - 1) * spacing + 1)) / 2 must be >= 0");
    }
    const stops = new Array(input.length + 2);
    stops[0] = { position: 0, color: config.scaleColorLight };
    stops[stops.length - 1] = {
        position: 1,
        color: config.scaleColorDark,
    };
    for (let i = 0; i < input.length; i++) {
        stops[i + 1] = {
            color: input[i],
            position: (i * config.spacing + offset) / (config.targetSize - 1),
        };
    }
    const scale = new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale(stops);
    const retVal = new Array(config.targetSize);
    for (let i = 0; i < config.targetSize; i++) {
        retVal[i] = scale.getColor(i / (config.targetSize - 1));
    }
    return retVal;
}
/**
 * Generates two palettes of length shortPaletteLength and longPaletteLength from a base color. The base color is compared to the default greyscale palette to determine where it should be placed. The short palette is then fed into centeredRescale to create the long palette. The colors in the short palette are always contained within the long.
 * @public
 */
function generateScaledPalettes(input, shortPaletteLength = 11, config = defaultCenteredRescaleConfig) {
    const shortPalette = generateOffCenterPalette(input, shortPaletteLength);
    const longPalette = centeredRescale(shortPalette.palette, config);
    return { short: shortPalette.palette, long: longPalette };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/color-rgba-64.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/color-rgba-64.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorRGBA64": () => (/* binding */ ColorRGBA64)
/* harmony export */ });
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utilities */ "./node_modules/@microsoft/fast-colors/dist/math-utilities.js");

/**
 * A RGBA color with 64 bit channels.
 *
 * @example
 * ```ts
 * new ColorRGBA64(1, 0, 0, 1) // red
 * ```
 * @public
 */
class ColorRGBA64 {
    /**
     *
     * @param red - the red value
     * @param green - the green value
     * @param blue - the blue value
     * @param alpha - the alpha value
     */
    constructor(red, green, blue, alpha) {
        this.r = red;
        this.g = green;
        this.b = blue;
        this.a = typeof alpha === "number" && !isNaN(alpha) ? alpha : 1;
    }
    /**
     * Construct a {@link ColorRGBA64} from a {@link ColorRGBA64Config}
     * @param data - the config object
     */
    static fromObject(data) {
        return data && !isNaN(data.r) && !isNaN(data.g) && !isNaN(data.b)
            ? new ColorRGBA64(data.r, data.g, data.b, data.a)
            : null;
    }
    /**
     * Determines if one color is equal to another.
     * @param rhs - the color to compare
     */
    equalValue(rhs) {
        return (this.r === rhs.r && this.g === rhs.g && this.b === rhs.b && this.a === rhs.a);
    }
    /**
     * Returns the color formatted as a string; #RRGGBB
     */
    toStringHexRGB() {
        return "#" + [this.r, this.g, this.b].map(this.formatHexValue).join("");
    }
    /**
     * Returns the color formatted as a string; #RRGGBBAA
     */
    toStringHexRGBA() {
        return this.toStringHexRGB() + this.formatHexValue(this.a);
    }
    /**
     * Returns the color formatted as a string; #AARRGGBB
     */
    toStringHexARGB() {
        return "#" + [this.a, this.r, this.g, this.b].map(this.formatHexValue).join("");
    }
    /**
     * Returns the color formatted as a string; "rgb(0xRR, 0xGG, 0xBB)"
     */
    toStringWebRGB() {
        return `rgb(${Math.round((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(this.r, 0.0, 255.0))},${Math.round((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(this.g, 0.0, 255.0))},${Math.round((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(this.b, 0.0, 255.0))})`;
    }
    /**
     * Returns the color formatted as a string; "rgba(0xRR, 0xGG, 0xBB, a)"
     * @remarks
     * Note that this follows the convention of putting alpha in the range [0.0,1.0] while the other three channels are [0,255]
     */
    toStringWebRGBA() {
        return `rgba(${Math.round((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(this.r, 0.0, 255.0))},${Math.round((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(this.g, 0.0, 255.0))},${Math.round((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(this.b, 0.0, 255.0))},${(0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.a, 0, 1)})`;
    }
    /**
     * Returns a new {@link ColorRGBA64} rounded to the provided precision
     * @param precision - the precision to round to
     */
    roundToPrecision(precision) {
        return new ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.r, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.g, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.b, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.a, precision));
    }
    /**
     * Returns a new {@link ColorRGBA64} with channel values clamped between 0 and 1.
     */
    clamp() {
        return new ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.r, 0, 1), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.g, 0, 1), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.b, 0, 1), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.a, 0, 1));
    }
    /**
     * Converts the {@link ColorRGBA64} to a {@link ColorRGBA64Config}.
     */
    toObject() {
        return { r: this.r, g: this.g, b: this.b, a: this.a };
    }
    formatHexValue(value) {
        return (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.getHexStringForByte)((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(value, 0.0, 255.0));
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/color-scale.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/color-scale.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorScale": () => (/* binding */ ColorScale)
/* harmony export */ });
/* harmony import */ var _color_converters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-converters */ "./node_modules/@microsoft/fast-colors/dist/color-converters.js");
/* harmony import */ var _color_interpolation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-interpolation */ "./node_modules/@microsoft/fast-colors/dist/color-interpolation.js");


/**
 * A color scale created from linear stops
 * @public
 */
class ColorScale {
    constructor(stops) {
        if (stops == null || stops.length === 0) {
            throw new Error("The stops argument must be non-empty");
        }
        else {
            this.stops = this.sortColorScaleStops(stops);
        }
    }
    static createBalancedColorScale(colors) {
        if (colors == null || colors.length === 0) {
            throw new Error("The colors argument must be non-empty");
        }
        const stops = new Array(colors.length);
        for (let i = 0; i < colors.length; i++) {
            // Special case first and last in order to avoid floating point jaggies
            if (i === 0) {
                stops[i] = { color: colors[i], position: 0 };
            }
            else if (i === colors.length - 1) {
                stops[i] = { color: colors[i], position: 1 };
            }
            else {
                stops[i] = {
                    color: colors[i],
                    position: i * (1 / (colors.length - 1)),
                };
            }
        }
        return new ColorScale(stops);
    }
    getColor(position, interpolationMode = _color_interpolation__WEBPACK_IMPORTED_MODULE_0__.ColorInterpolationSpace.RGB) {
        if (this.stops.length === 1) {
            return this.stops[0].color;
        }
        else if (position <= 0) {
            return this.stops[0].color;
        }
        else if (position >= 1) {
            return this.stops[this.stops.length - 1].color;
        }
        let lowerIndex = 0;
        for (let i = 0; i < this.stops.length; i++) {
            if (this.stops[i].position <= position) {
                lowerIndex = i;
            }
        }
        let upperIndex = lowerIndex + 1;
        if (upperIndex >= this.stops.length) {
            upperIndex = this.stops.length - 1;
        }
        const scalePosition = (position - this.stops[lowerIndex].position) *
            (1.0 / (this.stops[upperIndex].position - this.stops[lowerIndex].position));
        return (0,_color_interpolation__WEBPACK_IMPORTED_MODULE_0__.interpolateByColorSpace)(scalePosition, interpolationMode, this.stops[lowerIndex].color, this.stops[upperIndex].color);
    }
    trim(lowerBound, upperBound, interpolationMode = _color_interpolation__WEBPACK_IMPORTED_MODULE_0__.ColorInterpolationSpace.RGB) {
        if (lowerBound < 0 || upperBound > 1 || upperBound < lowerBound) {
            throw new Error("Invalid bounds");
        }
        if (lowerBound === upperBound) {
            return new ColorScale([
                { color: this.getColor(lowerBound, interpolationMode), position: 0 },
            ]);
        }
        const containedStops = [];
        for (let i = 0; i < this.stops.length; i++) {
            if (this.stops[i].position >= lowerBound &&
                this.stops[i].position <= upperBound) {
                containedStops.push(this.stops[i]);
            }
        }
        if (containedStops.length === 0) {
            return new ColorScale([
                { color: this.getColor(lowerBound), position: lowerBound },
                { color: this.getColor(upperBound), position: upperBound },
            ]);
        }
        if (containedStops[0].position !== lowerBound) {
            containedStops.unshift({
                color: this.getColor(lowerBound),
                position: lowerBound,
            });
        }
        if (containedStops[containedStops.length - 1].position !== upperBound) {
            containedStops.push({
                color: this.getColor(upperBound),
                position: upperBound,
            });
        }
        const range = upperBound - lowerBound;
        const finalStops = new Array(containedStops.length);
        for (let i = 0; i < containedStops.length; i++) {
            finalStops[i] = {
                color: containedStops[i].color,
                position: (containedStops[i].position - lowerBound) / range,
            };
        }
        return new ColorScale(finalStops);
    }
    findNextColor(position, contrast, searchDown = false, interpolationMode = _color_interpolation__WEBPACK_IMPORTED_MODULE_0__.ColorInterpolationSpace.RGB, contrastErrorMargin = 0.005, maxSearchIterations = 32) {
        if (isNaN(position) || position <= 0) {
            position = 0;
        }
        else if (position >= 1) {
            position = 1;
        }
        const startingColor = this.getColor(position, interpolationMode);
        const finalPosition = searchDown ? 0 : 1;
        const finalColor = this.getColor(finalPosition, interpolationMode);
        const finalContrast = (0,_color_converters__WEBPACK_IMPORTED_MODULE_1__.contrastRatio)(startingColor, finalColor);
        if (finalContrast <= contrast) {
            return finalPosition;
        }
        let testRangeMin = searchDown ? 0 : position;
        let testRangeMax = searchDown ? position : 0;
        let mid = finalPosition;
        let iterations = 0;
        while (iterations <= maxSearchIterations) {
            mid = Math.abs(testRangeMax - testRangeMin) / 2 + testRangeMin;
            const midColor = this.getColor(mid, interpolationMode);
            const midContrast = (0,_color_converters__WEBPACK_IMPORTED_MODULE_1__.contrastRatio)(startingColor, midColor);
            if (Math.abs(midContrast - contrast) <= contrastErrorMargin) {
                return mid;
            }
            else if (midContrast > contrast) {
                if (searchDown) {
                    testRangeMin = mid;
                }
                else {
                    testRangeMax = mid;
                }
            }
            else {
                if (searchDown) {
                    testRangeMax = mid;
                }
                else {
                    testRangeMin = mid;
                }
            }
            iterations++;
        }
        return mid;
    }
    clone() {
        const newStops = new Array(this.stops.length);
        for (let i = 0; i < newStops.length; i++) {
            newStops[i] = {
                color: this.stops[i].color,
                position: this.stops[i].position,
            };
        }
        return new ColorScale(newStops);
    }
    sortColorScaleStops(stops) {
        return stops.sort((a, b) => {
            const A = a.position;
            const B = b.position;
            if (A < B) {
                return -1;
            }
            else if (A > B) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/color-xyz.js":
/*!***************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/color-xyz.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorXYZ": () => (/* binding */ ColorXYZ)
/* harmony export */ });
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utilities */ "./node_modules/@microsoft/fast-colors/dist/math-utilities.js");

/**
 * {@link https://en.wikipedia.org/wiki/CIE_1931_color_space | XYZ color space}
 *
 * This implementation uses the D65 constants for 2 degrees. That determines the constants used for the pure white point of the XYZ space of 0.95047, 1.0, 1.08883.
 * {@link https://en.wikipedia.org/wiki/Illuminant_D65}
 * These constants determine how the XYZ, LCH and LAB colors convert to/from RGB.
 *
 * @public
 */
class ColorXYZ {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /**
     * Construct a {@link ColorXYZ} from a config object.
     */
    static fromObject(data) {
        if (data && !isNaN(data.x) && !isNaN(data.y) && !isNaN(data.z)) {
            return new ColorXYZ(data.x, data.y, data.z);
        }
        return null;
    }
    /**
     * Determines if a color is equal to another
     * @param rhs - the value to compare
     */
    equalValue(rhs) {
        return this.x === rhs.x && this.y === rhs.y && this.z === rhs.z;
    }
    /**
     * Returns a new {@link ColorXYZ} rounded to the provided precision
     * @param precision - the precision to round to
     */
    roundToPrecision(precision) {
        return new ColorXYZ((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.x, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.y, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.z, precision));
    }
    /**
     * Returns the {@link ColorXYZ} formatted as an object.
     */
    toObject() {
        return { x: this.x, y: this.y, z: this.z };
    }
}
/**
 * D65 2 degree white point
 */
ColorXYZ.whitePoint = new ColorXYZ(0.95047, 1.0, 1.08883);


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/component-state-color-palette.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/component-state-color-palette.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentStateColorPalette": () => (/* binding */ ComponentStateColorPalette)
/* harmony export */ });
/* harmony import */ var _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-rgba-64 */ "./node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _color_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-palette */ "./node_modules/@microsoft/fast-colors/dist/color-palette.js");
/* harmony import */ var _color_converters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-converters */ "./node_modules/@microsoft/fast-colors/dist/color-converters.js");
/* harmony import */ var _color_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-scale */ "./node_modules/@microsoft/fast-colors/dist/color-scale.js");
/* harmony import */ var _color_hsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-hsl */ "./node_modules/@microsoft/fast-colors/dist/color-hsl.js");
/* harmony import */ var _color_interpolation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-interpolation */ "./node_modules/@microsoft/fast-colors/dist/color-interpolation.js");
/* harmony import */ var _parse_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parse-color */ "./node_modules/@microsoft/fast-colors/dist/parse-color.js");







/**
 * Creates a color palette for UI components
 * @public
 */
class ComponentStateColorPalette {
    constructor(config) {
        this.palette = [];
        this.config = Object.assign({}, ComponentStateColorPalette.defaultPaletteConfig, config);
        this.regenPalettes();
    }
    regenPalettes() {
        let steps = this.config.steps;
        if (isNaN(steps) || steps < 3) {
            steps = 3;
        }
        // This palette is tuned to go as dark as differences between the levels can be perceived according to tests
        // on numerous monitors in different conditions. Stay linear from white until this first cutoff.
        const darkLum = 0.14;
        // In the dark compression, this is the last luminance value before full black.
        const darkestLum = 0.06;
        // The Color for the luminance value above, placed on the ramp at it's normal position, so darker colors after
        // it can be compressed.
        const darkLumColor = new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(darkLum, darkLum, darkLum, 1);
        // The number of steps in the ramp that has been tuned for default use. This coincides with the size of the
        // default ramp, but the palette could be generated with fewer steps to increase final contrast. This number
        // should however stay the same.
        const stepsForLuminanceRamp = 94;
        // Create the reference, dark-compressed, grey palette, like:
        // F------------------------------------------------------------------------------------[dark]------[darkest]0
        //                                                                                      |--compressed area--|
        const r = new _color_palette__WEBPACK_IMPORTED_MODULE_1__.ColorPalette(Object.assign(Object.assign({}, _color_palette__WEBPACK_IMPORTED_MODULE_1__.ColorPalette.greyscalePaletteConfig), { baseColor: darkLumColor, baseScalePosition: ((1 - darkLum) * 100) / stepsForLuminanceRamp, steps }));
        const referencePalette = r.palette;
        // Find the requested base color on the adjusted luminance reference ramp.
        // There is no _right_ way to desaturate a color, and both methods we've tested have value, so average them out.
        const baseColorLum1 = (0,_color_converters__WEBPACK_IMPORTED_MODULE_2__.rgbToLinearLuminance)(this.config.baseColor);
        const baseColorLum2 = (0,_color_converters__WEBPACK_IMPORTED_MODULE_2__.rgbToHSL)(this.config.baseColor).l;
        const baseColorLum = (baseColorLum1 + baseColorLum2) / 2;
        const baseColorRefIndex = this.matchRelativeLuminanceIndex(baseColorLum, referencePalette);
        const baseColorPercent = baseColorRefIndex / (steps - 1);
        // Find the luminance location for the dark cutoff.
        const darkRefIndex = this.matchRelativeLuminanceIndex(darkLum, referencePalette);
        const darkPercent = darkRefIndex / (steps - 1);
        // Issue https://github.com/microsoft/fast/issues/1904
        // Creating a color from H, S, and a known L value is not the inverse of getting the relative
        // luminace as above. Need to derive a relative luminance version of the color to better match on the dark end.
        // Find the dark cutoff and darkest variations of the requested base color.
        const baseColorHSL = (0,_color_converters__WEBPACK_IMPORTED_MODULE_2__.rgbToHSL)(this.config.baseColor);
        const darkBaseColor = (0,_color_converters__WEBPACK_IMPORTED_MODULE_2__.hslToRGB)(_color_hsl__WEBPACK_IMPORTED_MODULE_3__.ColorHSL.fromObject({
            h: baseColorHSL.h,
            s: baseColorHSL.s,
            l: darkLum,
        }));
        const darkestBaseColor = (0,_color_converters__WEBPACK_IMPORTED_MODULE_2__.hslToRGB)(_color_hsl__WEBPACK_IMPORTED_MODULE_3__.ColorHSL.fromObject({
            h: baseColorHSL.h,
            s: baseColorHSL.s,
            l: darkestLum,
        }));
        // Create the gradient stops, including the base color and anchor colors for the dark end compression.
        const fullColorScaleStops = new Array(5);
        fullColorScaleStops[0] = {
            position: 0,
            color: new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(1, 1, 1, 1),
        };
        fullColorScaleStops[1] = {
            position: baseColorPercent,
            color: this.config.baseColor,
        };
        fullColorScaleStops[2] = {
            position: darkPercent,
            color: darkBaseColor,
        };
        fullColorScaleStops[3] = {
            position: 0.99,
            color: darkestBaseColor,
        };
        fullColorScaleStops[4] = {
            position: 1,
            color: new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(0, 0, 0, 1),
        };
        const scale = new _color_scale__WEBPACK_IMPORTED_MODULE_4__.ColorScale(fullColorScaleStops);
        // Create the palette.
        this.palette = new Array(steps);
        for (let i = 0; i < steps; i++) {
            const c = scale.getColor(i / (steps - 1), _color_interpolation__WEBPACK_IMPORTED_MODULE_5__.ColorInterpolationSpace.RGB);
            this.palette[i] = c;
        }
    }
    matchRelativeLuminanceIndex(input, reference) {
        let bestFitValue = Number.MAX_VALUE;
        let bestFitIndex = 0;
        let i = 0;
        const referenceLength = reference.length;
        for (; i < referenceLength; i++) {
            const fitValue = Math.abs((0,_color_converters__WEBPACK_IMPORTED_MODULE_2__.rgbToLinearLuminance)(reference[i]) - input);
            if (fitValue < bestFitValue) {
                bestFitValue = fitValue;
                bestFitIndex = i;
            }
        }
        return bestFitIndex;
    }
}
ComponentStateColorPalette.defaultPaletteConfig = {
    baseColor: (0,_parse_color__WEBPACK_IMPORTED_MODULE_6__.parseColorHexRGB)("#808080"),
    steps: 94,
};


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/math-utilities.js":
/*!********************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/math-utilities.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "denormalize": () => (/* binding */ denormalize),
/* harmony export */   "degreesToRadians": () => (/* binding */ degreesToRadians),
/* harmony export */   "radiansToDegrees": () => (/* binding */ radiansToDegrees),
/* harmony export */   "getHexStringForByte": () => (/* binding */ getHexStringForByte),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "lerpAnglesInDegrees": () => (/* binding */ lerpAnglesInDegrees),
/* harmony export */   "lerpAnglesInRadians": () => (/* binding */ lerpAnglesInRadians),
/* harmony export */   "roundToPrecisionSmall": () => (/* binding */ roundToPrecisionSmall)
/* harmony export */ });
/**
 * Ensures that an input number does not exceed a max value and is not less than a min value.
 * @param i - the number to clamp
 * @param min - the maximum (inclusive) value
 * @param max - the minimum (inclusive) value
 * @public
 */
function clamp(i, min, max) {
    if (isNaN(i) || i <= min) {
        return min;
    }
    else if (i >= max) {
        return max;
    }
    return i;
}
/**
 * Scales an input to a number between 0 and 1
 * @param i - a number between min and max
 * @param min - the max value
 * @param max - the min value
 * @public
 */
function normalize(i, min, max) {
    if (isNaN(i) || i <= min) {
        return 0.0;
    }
    else if (i >= max) {
        return 1.0;
    }
    return i / (max - min);
}
/**
 * Scales a number between 0 and 1
 * @param i - the number to denormalize
 * @param min - the min value
 * @param max - the max value
 * @public
 */
function denormalize(i, min, max) {
    if (isNaN(i)) {
        return min;
    }
    return min + i * (max - min);
}
/**
 * Converts degrees to radians.
 * @param i - degrees
 * @public
 */
function degreesToRadians(i) {
    return i * (Math.PI / 180.0);
}
/**
 * Converts radians to degrees.
 * @param i - radians
 * @public
 */
function radiansToDegrees(i) {
    return i * (180.0 / Math.PI);
}
/**
 * Converts a number between 0 and 255 to a hex string.
 * @param i - the number to convert to a hex string
 * @public
 */
function getHexStringForByte(i) {
    const s = Math.round(clamp(i, 0.0, 255.0)).toString(16);
    if (s.length === 1) {
        return "0" + s;
    }
    return s;
}
/**
 * Linearly interpolate
 * @public
 */
function lerp(i, min, max) {
    if (isNaN(i) || i <= 0.0) {
        return min;
    }
    else if (i >= 1.0) {
        return max;
    }
    return min + i * (max - min);
}
/**
 * Linearly interpolate angles in degrees
 * @public
 */
function lerpAnglesInDegrees(i, min, max) {
    if (i <= 0.0) {
        return min % 360.0;
    }
    else if (i >= 1.0) {
        return max % 360.0;
    }
    const a = (min - max + 360.0) % 360.0;
    const b = (max - min + 360.0) % 360.0;
    if (a <= b) {
        return (min - a * i + 360.0) % 360.0;
    }
    return (min + a * i + 360.0) % 360.0;
}
const TwoPI = Math.PI * 2;
/**
 * Linearly interpolate angles in radians
 * @public
 */
function lerpAnglesInRadians(i, min, max) {
    if (isNaN(i) || i <= 0.0) {
        return min % TwoPI;
    }
    else if (i >= 1.0) {
        return max % TwoPI;
    }
    const a = (min - max + TwoPI) % TwoPI;
    const b = (max - min + TwoPI) % TwoPI;
    if (a <= b) {
        return (min - a * i + TwoPI) % TwoPI;
    }
    return (min + a * i + TwoPI) % TwoPI;
}
/**
 *
 * Will return infinity if i*10^(precision) overflows number
 * note that floating point rounding rules come into play here
 * so values that end up rounding on a .5 round to the nearest
 * even not always up so 2.5 rounds to 2
 * @param i - the number to round
 * @param precision - the precision to round to
 *
 * @public
 */
function roundToPrecisionSmall(i, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(i * factor) / factor;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/named-colors.js":
/*!******************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/named-colors.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "namedColorsConfigs": () => (/* binding */ namedColorsConfigs)
/* harmony export */ });
const namedColorsConfigs = {
    aliceblue: {
        r: 0.941176,
        g: 0.972549,
        b: 1,
    },
    antiquewhite: {
        r: 0.980392,
        g: 0.921569,
        b: 0.843137,
    },
    aqua: {
        r: 0,
        g: 1,
        b: 1,
    },
    aquamarine: {
        r: 0.498039,
        g: 1,
        b: 0.831373,
    },
    azure: {
        r: 0.941176,
        g: 1,
        b: 1,
    },
    beige: {
        r: 0.960784,
        g: 0.960784,
        b: 0.862745,
    },
    bisque: {
        r: 1,
        g: 0.894118,
        b: 0.768627,
    },
    black: {
        r: 0,
        g: 0,
        b: 0,
    },
    blanchedalmond: {
        r: 1,
        g: 0.921569,
        b: 0.803922,
    },
    blue: {
        r: 0,
        g: 0,
        b: 1,
    },
    blueviolet: {
        r: 0.541176,
        g: 0.168627,
        b: 0.886275,
    },
    brown: {
        r: 0.647059,
        g: 0.164706,
        b: 0.164706,
    },
    burlywood: {
        r: 0.870588,
        g: 0.721569,
        b: 0.529412,
    },
    cadetblue: {
        r: 0.372549,
        g: 0.619608,
        b: 0.627451,
    },
    chartreuse: {
        r: 0.498039,
        g: 1,
        b: 0,
    },
    chocolate: {
        r: 0.823529,
        g: 0.411765,
        b: 0.117647,
    },
    coral: {
        r: 1,
        g: 0.498039,
        b: 0.313725,
    },
    cornflowerblue: {
        r: 0.392157,
        g: 0.584314,
        b: 0.929412,
    },
    cornsilk: {
        r: 1,
        g: 0.972549,
        b: 0.862745,
    },
    crimson: {
        r: 0.862745,
        g: 0.078431,
        b: 0.235294,
    },
    cyan: {
        r: 0,
        g: 1,
        b: 1,
    },
    darkblue: {
        r: 0,
        g: 0,
        b: 0.545098,
    },
    darkcyan: {
        r: 0,
        g: 0.545098,
        b: 0.545098,
    },
    darkgoldenrod: {
        r: 0.721569,
        g: 0.52549,
        b: 0.043137,
    },
    darkgray: {
        r: 0.662745,
        g: 0.662745,
        b: 0.662745,
    },
    darkgreen: {
        r: 0,
        g: 0.392157,
        b: 0,
    },
    darkgrey: {
        r: 0.662745,
        g: 0.662745,
        b: 0.662745,
    },
    darkkhaki: {
        r: 0.741176,
        g: 0.717647,
        b: 0.419608,
    },
    darkmagenta: {
        r: 0.545098,
        g: 0,
        b: 0.545098,
    },
    darkolivegreen: {
        r: 0.333333,
        g: 0.419608,
        b: 0.184314,
    },
    darkorange: {
        r: 1,
        g: 0.54902,
        b: 0,
    },
    darkorchid: {
        r: 0.6,
        g: 0.196078,
        b: 0.8,
    },
    darkred: {
        r: 0.545098,
        g: 0,
        b: 0,
    },
    darksalmon: {
        r: 0.913725,
        g: 0.588235,
        b: 0.478431,
    },
    darkseagreen: {
        r: 0.560784,
        g: 0.737255,
        b: 0.560784,
    },
    darkslateblue: {
        r: 0.282353,
        g: 0.239216,
        b: 0.545098,
    },
    darkslategray: {
        r: 0.184314,
        g: 0.309804,
        b: 0.309804,
    },
    darkslategrey: {
        r: 0.184314,
        g: 0.309804,
        b: 0.309804,
    },
    darkturquoise: {
        r: 0,
        g: 0.807843,
        b: 0.819608,
    },
    darkviolet: {
        r: 0.580392,
        g: 0,
        b: 0.827451,
    },
    deeppink: {
        r: 1,
        g: 0.078431,
        b: 0.576471,
    },
    deepskyblue: {
        r: 0,
        g: 0.74902,
        b: 1,
    },
    dimgray: {
        r: 0.411765,
        g: 0.411765,
        b: 0.411765,
    },
    dimgrey: {
        r: 0.411765,
        g: 0.411765,
        b: 0.411765,
    },
    dodgerblue: {
        r: 0.117647,
        g: 0.564706,
        b: 1,
    },
    firebrick: {
        r: 0.698039,
        g: 0.133333,
        b: 0.133333,
    },
    floralwhite: {
        r: 1,
        g: 0.980392,
        b: 0.941176,
    },
    forestgreen: {
        r: 0.133333,
        g: 0.545098,
        b: 0.133333,
    },
    fuchsia: {
        r: 1,
        g: 0,
        b: 1,
    },
    gainsboro: {
        r: 0.862745,
        g: 0.862745,
        b: 0.862745,
    },
    ghostwhite: {
        r: 0.972549,
        g: 0.972549,
        b: 1,
    },
    gold: {
        r: 1,
        g: 0.843137,
        b: 0,
    },
    goldenrod: {
        r: 0.854902,
        g: 0.647059,
        b: 0.12549,
    },
    gray: {
        r: 0.501961,
        g: 0.501961,
        b: 0.501961,
    },
    green: {
        r: 0,
        g: 0.501961,
        b: 0,
    },
    greenyellow: {
        r: 0.678431,
        g: 1,
        b: 0.184314,
    },
    grey: {
        r: 0.501961,
        g: 0.501961,
        b: 0.501961,
    },
    honeydew: {
        r: 0.941176,
        g: 1,
        b: 0.941176,
    },
    hotpink: {
        r: 1,
        g: 0.411765,
        b: 0.705882,
    },
    indianred: {
        r: 0.803922,
        g: 0.360784,
        b: 0.360784,
    },
    indigo: {
        r: 0.294118,
        g: 0,
        b: 0.509804,
    },
    ivory: {
        r: 1,
        g: 1,
        b: 0.941176,
    },
    khaki: {
        r: 0.941176,
        g: 0.901961,
        b: 0.54902,
    },
    lavender: {
        r: 0.901961,
        g: 0.901961,
        b: 0.980392,
    },
    lavenderblush: {
        r: 1,
        g: 0.941176,
        b: 0.960784,
    },
    lawngreen: {
        r: 0.486275,
        g: 0.988235,
        b: 0,
    },
    lemonchiffon: {
        r: 1,
        g: 0.980392,
        b: 0.803922,
    },
    lightblue: {
        r: 0.678431,
        g: 0.847059,
        b: 0.901961,
    },
    lightcoral: {
        r: 0.941176,
        g: 0.501961,
        b: 0.501961,
    },
    lightcyan: {
        r: 0.878431,
        g: 1,
        b: 1,
    },
    lightgoldenrodyellow: {
        r: 0.980392,
        g: 0.980392,
        b: 0.823529,
    },
    lightgray: {
        r: 0.827451,
        g: 0.827451,
        b: 0.827451,
    },
    lightgreen: {
        r: 0.564706,
        g: 0.933333,
        b: 0.564706,
    },
    lightgrey: {
        r: 0.827451,
        g: 0.827451,
        b: 0.827451,
    },
    lightpink: {
        r: 1,
        g: 0.713725,
        b: 0.756863,
    },
    lightsalmon: {
        r: 1,
        g: 0.627451,
        b: 0.478431,
    },
    lightseagreen: {
        r: 0.12549,
        g: 0.698039,
        b: 0.666667,
    },
    lightskyblue: {
        r: 0.529412,
        g: 0.807843,
        b: 0.980392,
    },
    lightslategray: {
        r: 0.466667,
        g: 0.533333,
        b: 0.6,
    },
    lightslategrey: {
        r: 0.466667,
        g: 0.533333,
        b: 0.6,
    },
    lightsteelblue: {
        r: 0.690196,
        g: 0.768627,
        b: 0.870588,
    },
    lightyellow: {
        r: 1,
        g: 1,
        b: 0.878431,
    },
    lime: {
        r: 0,
        g: 1,
        b: 0,
    },
    limegreen: {
        r: 0.196078,
        g: 0.803922,
        b: 0.196078,
    },
    linen: {
        r: 0.980392,
        g: 0.941176,
        b: 0.901961,
    },
    magenta: {
        r: 1,
        g: 0,
        b: 1,
    },
    maroon: {
        r: 0.501961,
        g: 0,
        b: 0,
    },
    mediumaquamarine: {
        r: 0.4,
        g: 0.803922,
        b: 0.666667,
    },
    mediumblue: {
        r: 0,
        g: 0,
        b: 0.803922,
    },
    mediumorchid: {
        r: 0.729412,
        g: 0.333333,
        b: 0.827451,
    },
    mediumpurple: {
        r: 0.576471,
        g: 0.439216,
        b: 0.858824,
    },
    mediumseagreen: {
        r: 0.235294,
        g: 0.701961,
        b: 0.443137,
    },
    mediumslateblue: {
        r: 0.482353,
        g: 0.407843,
        b: 0.933333,
    },
    mediumspringgreen: {
        r: 0,
        g: 0.980392,
        b: 0.603922,
    },
    mediumturquoise: {
        r: 0.282353,
        g: 0.819608,
        b: 0.8,
    },
    mediumvioletred: {
        r: 0.780392,
        g: 0.082353,
        b: 0.521569,
    },
    midnightblue: {
        r: 0.098039,
        g: 0.098039,
        b: 0.439216,
    },
    mintcream: {
        r: 0.960784,
        g: 1,
        b: 0.980392,
    },
    mistyrose: {
        r: 1,
        g: 0.894118,
        b: 0.882353,
    },
    moccasin: {
        r: 1,
        g: 0.894118,
        b: 0.709804,
    },
    navajowhite: {
        r: 1,
        g: 0.870588,
        b: 0.678431,
    },
    navy: {
        r: 0,
        g: 0,
        b: 0.501961,
    },
    oldlace: {
        r: 0.992157,
        g: 0.960784,
        b: 0.901961,
    },
    olive: {
        r: 0.501961,
        g: 0.501961,
        b: 0,
    },
    olivedrab: {
        r: 0.419608,
        g: 0.556863,
        b: 0.137255,
    },
    orange: {
        r: 1,
        g: 0.647059,
        b: 0,
    },
    orangered: {
        r: 1,
        g: 0.270588,
        b: 0,
    },
    orchid: {
        r: 0.854902,
        g: 0.439216,
        b: 0.839216,
    },
    palegoldenrod: {
        r: 0.933333,
        g: 0.909804,
        b: 0.666667,
    },
    palegreen: {
        r: 0.596078,
        g: 0.984314,
        b: 0.596078,
    },
    paleturquoise: {
        r: 0.686275,
        g: 0.933333,
        b: 0.933333,
    },
    palevioletred: {
        r: 0.858824,
        g: 0.439216,
        b: 0.576471,
    },
    papayawhip: {
        r: 1,
        g: 0.937255,
        b: 0.835294,
    },
    peachpuff: {
        r: 1,
        g: 0.854902,
        b: 0.72549,
    },
    peru: {
        r: 0.803922,
        g: 0.521569,
        b: 0.247059,
    },
    pink: {
        r: 1,
        g: 0.752941,
        b: 0.796078,
    },
    plum: {
        r: 0.866667,
        g: 0.627451,
        b: 0.866667,
    },
    powderblue: {
        r: 0.690196,
        g: 0.878431,
        b: 0.901961,
    },
    purple: {
        r: 0.501961,
        g: 0,
        b: 0.501961,
    },
    red: {
        r: 1,
        g: 0,
        b: 0,
    },
    rosybrown: {
        r: 0.737255,
        g: 0.560784,
        b: 0.560784,
    },
    royalblue: {
        r: 0.254902,
        g: 0.411765,
        b: 0.882353,
    },
    saddlebrown: {
        r: 0.545098,
        g: 0.270588,
        b: 0.07451,
    },
    salmon: {
        r: 0.980392,
        g: 0.501961,
        b: 0.447059,
    },
    sandybrown: {
        r: 0.956863,
        g: 0.643137,
        b: 0.376471,
    },
    seagreen: {
        r: 0.180392,
        g: 0.545098,
        b: 0.341176,
    },
    seashell: {
        r: 1,
        g: 0.960784,
        b: 0.933333,
    },
    sienna: {
        r: 0.627451,
        g: 0.321569,
        b: 0.176471,
    },
    silver: {
        r: 0.752941,
        g: 0.752941,
        b: 0.752941,
    },
    skyblue: {
        r: 0.529412,
        g: 0.807843,
        b: 0.921569,
    },
    slateblue: {
        r: 0.415686,
        g: 0.352941,
        b: 0.803922,
    },
    slategray: {
        r: 0.439216,
        g: 0.501961,
        b: 0.564706,
    },
    slategrey: {
        r: 0.439216,
        g: 0.501961,
        b: 0.564706,
    },
    snow: {
        r: 1,
        g: 0.980392,
        b: 0.980392,
    },
    springgreen: {
        r: 0,
        g: 1,
        b: 0.498039,
    },
    steelblue: {
        r: 0.27451,
        g: 0.509804,
        b: 0.705882,
    },
    tan: {
        r: 0.823529,
        g: 0.705882,
        b: 0.54902,
    },
    teal: {
        r: 0,
        g: 0.501961,
        b: 0.501961,
    },
    thistle: {
        r: 0.847059,
        g: 0.74902,
        b: 0.847059,
    },
    tomato: {
        r: 1,
        g: 0.388235,
        b: 0.278431,
    },
    transparent: {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
    },
    turquoise: {
        r: 0.25098,
        g: 0.878431,
        b: 0.815686,
    },
    violet: {
        r: 0.933333,
        g: 0.509804,
        b: 0.933333,
    },
    wheat: {
        r: 0.960784,
        g: 0.870588,
        b: 0.701961,
    },
    white: {
        r: 1,
        g: 1,
        b: 1,
    },
    whitesmoke: {
        r: 0.960784,
        g: 0.960784,
        b: 0.960784,
    },
    yellow: {
        r: 1,
        g: 1,
        b: 0,
    },
    yellowgreen: {
        r: 0.603922,
        g: 0.803922,
        b: 0.196078,
    },
};


/***/ }),

/***/ "./node_modules/@microsoft/fast-colors/dist/parse-color.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/fast-colors/dist/parse-color.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isColorStringHexRGB": () => (/* binding */ isColorStringHexRGB),
/* harmony export */   "isColorStringHexARGB": () => (/* binding */ isColorStringHexARGB),
/* harmony export */   "isColorStringHexRGBA": () => (/* binding */ isColorStringHexRGBA),
/* harmony export */   "isColorStringWebRGB": () => (/* binding */ isColorStringWebRGB),
/* harmony export */   "isColorStringWebRGBA": () => (/* binding */ isColorStringWebRGBA),
/* harmony export */   "isColorNamed": () => (/* binding */ isColorNamed),
/* harmony export */   "parseColorHexRGB": () => (/* binding */ parseColorHexRGB),
/* harmony export */   "parseColorHexARGB": () => (/* binding */ parseColorHexARGB),
/* harmony export */   "parseColorHexRGBA": () => (/* binding */ parseColorHexRGBA),
/* harmony export */   "parseColorWebRGB": () => (/* binding */ parseColorWebRGB),
/* harmony export */   "parseColorWebRGBA": () => (/* binding */ parseColorWebRGBA),
/* harmony export */   "parseColorNamed": () => (/* binding */ parseColorNamed),
/* harmony export */   "parseColor": () => (/* binding */ parseColor)
/* harmony export */ });
/* harmony import */ var _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-rgba-64 */ "./node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math-utilities */ "./node_modules/@microsoft/fast-colors/dist/math-utilities.js");
/* harmony import */ var _named_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./named-colors */ "./node_modules/@microsoft/fast-colors/dist/named-colors.js");



// Matches rgb(R, G, B) where R, G, and B are integers [0 - 255]
const webRGBRegex = /^rgb\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){2}(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*)\)$/i;
// Matches rgb(R, G, B, A) where R, G, and B are integers [0 - 255] and A is [0-1] floating
const webRGBARegex = /^rgba\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){3}(?:0|1|0?\.\d*)\s*)\)$/i;
// Matches #RGB and #RRGGBB, where R, G, and B are [0-9] or [A-F]
const hexRGBRegex = /^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;
// Matches #RGB and #RRGGBBAA, where R, G, B, and A are [0-9] or [A-F]
const hexRGBARegex = /^#((?:[0-9a-f]{8}|[0-9a-f]{4}))$/i;
/**
 * Test if a color matches #RRGGBB or #RGB
 * @public
 */
function isColorStringHexRGB(raw) {
    return hexRGBRegex.test(raw);
}
/**
 * Test if a color matches #AARRGGBB or #ARGB
 * @public
 */
function isColorStringHexARGB(raw) {
    return hexRGBARegex.test(raw);
}
/**
 * Test if a color matches #RRGGBBAA or #RGBA
 * @public
 */
function isColorStringHexRGBA(raw) {
    return isColorStringHexARGB(raw); // No way to differentiate these two formats, so just use the same test
}
/**
 * Test if a color matches rgb(rr, gg, bb)
 * @public
 */
function isColorStringWebRGB(raw) {
    return webRGBRegex.test(raw);
}
/**
 * Test if a color matches rgba(rr, gg, bb, aa)
 *
 * @public
 */
function isColorStringWebRGBA(raw) {
    return webRGBARegex.test(raw);
}
/**
 * Tests whether a color is in {@link @microsoft/fast-colors#NamedColors}.
 * @param raw - the color name to test
 * @public
 */
function isColorNamed(raw) {
    return _named_colors__WEBPACK_IMPORTED_MODULE_0__.namedColorsConfigs.hasOwnProperty(raw);
}
/**
 * Converts a hexadecimal color string to a {@link @microsoft/fast-colors#ColorRGBA64}.
 * @param raw - a color string in the form of "#RRGGBB" or "#RGB"
 * @example
 * ```ts
 * parseColorHexRGBA("#FF0000");
 * parseColorHexRGBA("#F00");
 * ```
 * @public
 */
function parseColorHexRGB(raw) {
    const result = hexRGBRegex.exec(raw);
    if (result === null) {
        return null;
    }
    let digits = result[1];
    if (digits.length === 3) {
        const r = digits.charAt(0);
        const g = digits.charAt(1);
        const b = digits.charAt(2);
        digits = r.concat(r, g, g, b, b);
    }
    const rawInt = parseInt(digits, 16);
    if (isNaN(rawInt)) {
        return null;
    }
    // Note the use of >>> rather than >> as we want JS to manipulate these as unsigned numbers
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0xff0000) >>> 16, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0x00ff00) >>> 8, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(rawInt & 0x0000ff, 0, 255), 1);
}
/**
 * Converts a hexadecimal color string to a {@link @microsoft/fast-colors#ColorRGBA64}.
 * @param raw - a color string in the form of "#AARRGGBB" or "#ARGB"
 * @example
 * ```ts
 * parseColorHexRGBA("#AAFF0000");
 * parseColorHexRGBA("#AF00");
 * ```
 * @public
 */
function parseColorHexARGB(raw) {
    const result = hexRGBARegex.exec(raw);
    if (result === null) {
        return null;
    }
    let digits = result[1];
    if (digits.length === 4) {
        const a = digits.charAt(0);
        const r = digits.charAt(1);
        const g = digits.charAt(2);
        const b = digits.charAt(3);
        digits = a.concat(a, r, r, g, g, b, b);
    }
    const rawInt = parseInt(digits, 16);
    if (isNaN(rawInt)) {
        return null;
    }
    // Note the use of >>> rather than >> as we want JS to manipulate these as unsigned numbers
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0x00ff0000) >>> 16, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0x0000ff00) >>> 8, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(rawInt & 0x000000ff, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0xff000000) >>> 24, 0, 255));
}
/**
 * Converts a hexadecimal color string to a {@link @microsoft/fast-colors#ColorRGBA64}.
 * @param raw - a color string in the form of "#RRGGBBAA" or "#RGBA"
 * @example
 * ```ts
 * parseColorHexRGBA("#FF0000AA");
 * parseColorHexRGBA("#F00A");
 * ```
 * @public
 */
function parseColorHexRGBA(raw) {
    const result = hexRGBARegex.exec(raw);
    if (result === null) {
        return null;
    }
    let digits = result[1];
    if (digits.length === 4) {
        const r = digits.charAt(0);
        const g = digits.charAt(1);
        const b = digits.charAt(2);
        const a = digits.charAt(3);
        digits = r.concat(r, g, g, b, b, a, a);
    }
    const rawInt = parseInt(digits, 16);
    if (isNaN(rawInt)) {
        return null;
    }
    // Note the use of >>> rather than >> as we want JS to manipulate these as unsigned numbers
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0xff000000) >>> 24, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0x00ff0000) >>> 16, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0x0000ff00) >>> 8, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(rawInt & 0x000000ff, 0, 255));
}
/**
 * Converts a rgb color string to a {@link @microsoft/fast-colors#ColorRGBA64}.
 * @param raw - a color string format "rgba(RR,GG,BB)" where RR,GG,BB are [0,255]
 * @example
 * ```ts
 * parseColorWebRGB("rgba(255, 0, 0");
 * ```
 * @public
 */
function parseColorWebRGB(raw) {
    const result = webRGBRegex.exec(raw);
    if (result === null) {
        return null;
    }
    const split = result[1].split(",");
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(Number(split[0]), 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(Number(split[1]), 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(Number(split[2]), 0, 255), 1);
}
/**
 * Converts a rgba color string to a {@link @microsoft/fast-colors#ColorRGBA64}.
 * @param raw - a color string format "rgba(RR,GG,BB,a)" where RR,GG,BB are [0,255] and a is [0,1]
 * @example
 * ```ts
 * parseColorWebRGBA("rgba(255, 0, 0, 1");
 * ```
 * @public
 */
function parseColorWebRGBA(raw) {
    const result = webRGBARegex.exec(raw);
    if (result === null) {
        return null;
    }
    const split = result[1].split(",");
    if (split.length === 4) {
        return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(Number(split[0]), 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(Number(split[1]), 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(Number(split[2]), 0, 255), Number(split[3]));
    }
    return null;
}
/**
 * Converts a named color to a {@link @microsoft/fast-colors#ColorRGBA64}.
 * @param raw - a {@link https://www.w3schools.com/colors/colors_names.asp | CSS color name}.
 * @example
 * ```ts
 * parseColorNamed("red");
 * ```
 * @public
 */
function parseColorNamed(raw) {
    // const rawLower: typeof raw =  raw.toLowerCase() : raw.toString();
    const config = _named_colors__WEBPACK_IMPORTED_MODULE_0__.namedColorsConfigs[raw.toLowerCase()];
    return config
        ? new _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64(config.r, config.g, config.b, config.hasOwnProperty("a") ? config.a : void 0)
        : null;
}
/**
 *
  Expects any of the following and attempts to determine which is being used
 * #RRGGBB, #AARRGGBB, rgb(RR,GG,BB) rgba(RR,GG,BB,a),
 * or any of the {@link https://www.w3schools.com/colors/colors_names.asp | CSS color names}.
 * @param raw - the color string to parse
 * @public
 */
function parseColor(raw) {
    const rawLower = raw.toLowerCase();
    return isColorStringHexRGB(rawLower)
        ? parseColorHexRGB(rawLower)
        : isColorStringHexRGBA(rawLower)
            ? parseColorHexARGB(rawLower)
            : isColorStringWebRGB(rawLower)
                ? parseColorWebRGB(rawLower)
                : isColorStringWebRGBA(rawLower)
                    ? parseColorWebRGBA(rawLower)
                    : isColorNamed(rawLower)
                        ? parseColorNamed(rawLower)
                        : null;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/button/button.styles.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/button/button.styles.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonStyles": () => (/* binding */ buttonStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _design_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../design-tokens */ "./node_modules/@microsoft/fast-components/dist/esm/design-tokens.js");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index */ "./node_modules/@microsoft/fast-components/dist/esm/styles/patterns/button.js");
/* harmony import */ var _utilities_behaviors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/behaviors */ "./node_modules/@microsoft/fast-components/dist/esm/utilities/behaviors.js");






/**
 * Styles for Button
 * @public
 */
const buttonStyles = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active) {
            opacity: ${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.disabledOpacity};
            background-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.neutralFillRest};
            cursor: ${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_2__.disabledCursor};
        }

        ${_styles_index__WEBPACK_IMPORTED_MODULE_3__.BaseButtonStyles}
    `.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
                :host([disabled]),
                :host([disabled]) .control,
                :host([disabled]:hover),
                :host([disabled]:active) {
                    forced-color-adjust: none;
                    background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.ButtonFace};
                    border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.GrayText};
                    color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.GrayText};
                    cursor: ${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_2__.disabledCursor};
                    opacity: 1;
                }
            `), (0,_utilities_behaviors__WEBPACK_IMPORTED_MODULE_6__.appearanceBehavior)("accent", _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
                :host([appearance="accent"][disabled]),
                :host([appearance="accent"][disabled]:hover),
                :host([appearance="accent"][disabled]:active) {
                    background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.accentFillRest};
                }

                ${_styles_index__WEBPACK_IMPORTED_MODULE_3__.AccentButtonStyles}
            `.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
                        :host([appearance="accent"][disabled]) .control,
                        :host([appearance="accent"][disabled]) .control:hover {
                            background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.ButtonFace};
                            border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.GrayText};
                            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.GrayText};
                        }
                    `))), (0,_utilities_behaviors__WEBPACK_IMPORTED_MODULE_6__.appearanceBehavior)("lightweight", _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
                :host([appearance="lightweight"][disabled]:hover),
                :host([appearance="lightweight"][disabled]:active) {
                    background-color: transparent;
                    color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.accentForegroundRest};
                }

                :host([appearance="lightweight"][disabled]) .content::before,
                :host([appearance="lightweight"][disabled]:hover) .content::before,
                :host([appearance="lightweight"][disabled]:active) .content::before {
                    background: transparent;
                }

                ${_styles_index__WEBPACK_IMPORTED_MODULE_3__.LightweightButtonStyles}
            `.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
                        :host([appearance="lightweight"].disabled) .control {
                            forced-color-adjust: none;
                            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.GrayText};
                        }

                        :host([appearance="lightweight"].disabled)
                            .control:hover
                            .content::before {
                            background: none;
                        }
                    `))), (0,_utilities_behaviors__WEBPACK_IMPORTED_MODULE_6__.appearanceBehavior)("outline", _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
                :host([appearance="outline"][disabled]),
                :host([appearance="outline"][disabled]:hover),
                :host([appearance="outline"][disabled]:active) {
                    background: transparent;
                    border-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.accentFillRest};
                }

                ${_styles_index__WEBPACK_IMPORTED_MODULE_3__.OutlineButtonStyles}
            `.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
                        :host([appearance="outline"][disabled]) .control {
                            border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.GrayText};
                        }
                    `))), (0,_utilities_behaviors__WEBPACK_IMPORTED_MODULE_6__.appearanceBehavior)("stealth", _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
                :host([appearance="stealth"][disabled]),
                :host([appearance="stealth"][disabled]:hover),
                :host([appearance="stealth"][disabled]:active) {
                    background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.neutralFillStealthRest};
                }

                ${_styles_index__WEBPACK_IMPORTED_MODULE_3__.StealthButtonStyles}
            `.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
                        :host([appearance="stealth"][disabled]) {
                            background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.ButtonFace};
                        }

                        :host([appearance="stealth"][disabled]) .control {
                            background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.ButtonFace};
                            border-color: transparent;
                            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.GrayText};
                        }
                    `))));


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/button/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/button/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "fastButton": () => (/* binding */ fastButton),
/* harmony export */   "buttonStyles": () => (/* reexport safe */ _button_styles__WEBPACK_IMPORTED_MODULE_4__.buttonStyles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/button/button.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/button/button.template.js");
/* harmony import */ var _button_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.styles */ "./node_modules/@microsoft/fast-components/dist/esm/button/button.styles.js");




/**
 * @internal
 */
class Button extends _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.Button {
    connectedCallback() {
        super.connectedCallback();
        if (!this.appearance) {
            this.appearance = "neutral";
        }
    }
    /**
     * Applies 'icon-only' class when there is only an SVG in the default slot
     *
     * @public
     * @remarks
     */
    defaultSlottedContentChanged(oldValue, newValue) {
        const slottedElements = this.defaultSlottedContent.filter(x => x.nodeType === Node.ELEMENT_NODE);
        if (slottedElements.length === 1 && slottedElements[0] instanceof SVGElement) {
            this.control.classList.add("icon-only");
        }
        else {
            this.control.classList.remove("icon-only");
        }
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "appearance", void 0);
/**
 * A function that returns a {@link @microsoft/fast-foundation#Button} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#buttonTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<fast-button>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
const fastButton = Button.compose({
    baseName: "button",
    baseClass: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.Button,
    template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.buttonTemplate,
    styles: _button_styles__WEBPACK_IMPORTED_MODULE_4__.buttonStyles,
    shadowOptions: {
        delegatesFocus: true,
    },
});



/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/card/card.styles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/card/card.styles.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardStyles": () => (/* binding */ cardStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _design_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../design-tokens */ "./node_modules/@microsoft/fast-components/dist/esm/design-tokens.js");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index */ "./node_modules/@microsoft/fast-components/dist/esm/styles/elevation.js");





/**
 * Styles for Card
 * @public
 */
const cardStyles = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
        ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)("block")} :host {
            --elevation: 4;
            display: block;
            contain: content;
            height: var(--card-height, 100%);
            width: var(--card-width, 100%);
            box-sizing: border-box;
            background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.fillColor};
            border-radius: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.controlCornerRadius} * 1px);
            ${_styles_index__WEBPACK_IMPORTED_MODULE_3__.elevation}
        }
    `.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
                :host {
                    forced-color-adjust: none;
                    background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.Canvas};
                    box-shadow: 0 0 0 1px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.CanvasText};
                }
            `));


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/card/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/card/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card),
/* harmony export */   "fastCard": () => (/* binding */ fastCard),
/* harmony export */   "cardStyles": () => (/* reexport safe */ _card_styles__WEBPACK_IMPORTED_MODULE_4__.cardStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/card/card.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-parent.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/card/card.template.js");
/* harmony import */ var _design_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../design-tokens */ "./node_modules/@microsoft/fast-components/dist/esm/design-tokens.js");
/* harmony import */ var _card_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.styles */ "./node_modules/@microsoft/fast-components/dist/esm/card/card.styles.js");



/**
 * @internal
 */
class Card extends _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.Card {
    connectedCallback() {
        super.connectedCallback();
        const parent = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.composedParent)(this);
        if (parent) {
            _design_tokens__WEBPACK_IMPORTED_MODULE_2__.fillColor.setValueFor(this, (target) => _design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralFillLayerRecipe.getValueFor(target)
                .evaluate(target, _design_tokens__WEBPACK_IMPORTED_MODULE_2__.fillColor.getValueFor(parent)));
        }
    }
}
/**
 * A function that returns a {@link @microsoft/fast-foundation#Card} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#cardTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<fast-card>`
 */
const fastCard = Card.compose({
    baseName: "card",
    baseClass: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.Card,
    template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.cardTemplate,
    styles: _card_styles__WEBPACK_IMPORTED_MODULE_4__.cardStyles,
});



/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/palette.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/palette.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaletteRGB": () => (/* binding */ PaletteRGB)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-colors */ "./node_modules/@microsoft/fast-colors/dist/math-utilities.js");
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-colors */ "./node_modules/@microsoft/fast-colors/dist/component-state-color-palette.js");
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-colors */ "./node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-colors */ "./node_modules/@microsoft/fast-colors/dist/parse-color.js");
/* harmony import */ var _swatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swatch */ "./node_modules/@microsoft/fast-components/dist/esm/color/swatch.js");
/* harmony import */ var _utilities_binary_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/binary-search */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/binary-search.js");
/* harmony import */ var _utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/direction-by-is-dark */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/direction-by-is-dark.js");
/* harmony import */ var _utilities_relative_luminance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/relative-luminance */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/relative-luminance.js");





function create(rOrSource, g, b) {
    if (typeof rOrSource === "number") {
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
        return PaletteRGB.from(_swatch__WEBPACK_IMPORTED_MODULE_0__.SwatchRGB.create(rOrSource, g, b));
    }
    else {
        return PaletteRGB.from(rOrSource);
    }
}
function from(source) {
    return (0,_swatch__WEBPACK_IMPORTED_MODULE_0__.isSwatchRGB)(source)
        ? PaletteRGBImpl.from(source)
        : PaletteRGBImpl.from(_swatch__WEBPACK_IMPORTED_MODULE_0__.SwatchRGB.create(source.r, source.g, source.b));
}
/** @public */
const PaletteRGB = Object.freeze({
    create,
    from,
});
/**
 * A {@link Palette} representing RGB swatch values.
 * @public
 */
class PaletteRGBImpl {
    /**
     *
     * @param source - The source color for the palette
     * @param swatches - All swatches in the palette
     */
    constructor(source, swatches) {
        this.closestIndexCache = new Map();
        this.source = source;
        this.swatches = swatches;
        this.reversedSwatches = Object.freeze([...this.swatches].reverse());
        this.lastIndex = this.swatches.length - 1;
    }
    /**
     * {@inheritdoc Palette.colorContrast}
     */
    colorContrast(reference, contrastTarget, initialSearchIndex, direction) {
        if (initialSearchIndex === undefined) {
            initialSearchIndex = this.closestIndexOf(reference);
        }
        let source = this.swatches;
        const endSearchIndex = this.lastIndex;
        let startSearchIndex = initialSearchIndex;
        if (direction === undefined) {
            direction = (0,_utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_1__.directionByIsDark)(reference);
        }
        const condition = (value) => (0,_utilities_relative_luminance__WEBPACK_IMPORTED_MODULE_2__.contrast)(reference, value) >= contrastTarget;
        if (direction === -1) {
            source = this.reversedSwatches;
            startSearchIndex = endSearchIndex - startSearchIndex;
        }
        return (0,_utilities_binary_search__WEBPACK_IMPORTED_MODULE_3__.binarySearch)(source, condition, startSearchIndex, endSearchIndex);
    }
    /**
     * {@inheritdoc Palette.get}
     */
    get(index) {
        return this.swatches[index] || this.swatches[(0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__.clamp)(index, 0, this.lastIndex)];
    }
    /**
     * {@inheritdoc Palette.closestIndexOf}
     */
    closestIndexOf(reference) {
        if (this.closestIndexCache.has(reference.relativeLuminance)) {
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            return this.closestIndexCache.get(reference.relativeLuminance);
        }
        let index = this.swatches.indexOf(reference);
        if (index !== -1) {
            this.closestIndexCache.set(reference.relativeLuminance, index);
            return index;
        }
        const closest = this.swatches.reduce((previous, next) => Math.abs(next.relativeLuminance - reference.relativeLuminance) <
            Math.abs(previous.relativeLuminance - reference.relativeLuminance)
            ? next
            : previous);
        index = this.swatches.indexOf(closest);
        this.closestIndexCache.set(reference.relativeLuminance, index);
        return index;
    }
    /**
     * Create a color palette from a provided swatch
     * @param source - The source swatch to create a palette from
     * @returns
     */
    static from(source) {
        return new PaletteRGBImpl(source, Object.freeze(new _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_5__.ComponentStateColorPalette({
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            baseColor: _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_6__.ColorRGBA64.fromObject(source),
        }).palette.map(x => {
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            const _x = (0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_7__.parseColorHexRGB)(x.toStringHexRGB());
            return _swatch__WEBPACK_IMPORTED_MODULE_0__.SwatchRGB.create(_x.r, _x.g, _x.b);
        })));
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/accent-fill.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/accent-fill.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accentFill": () => (/* binding */ accentFill)
/* harmony export */ });
/**
 * @internal
 */
function accentFill(palette, neutralPalette, reference, hoverDelta, activeDelta, focusDelta, neutralFillRestDelta, neutralFillHoverDelta, neutralFillActiveDelta) {
    const accent = palette.source;
    const referenceIndex = neutralPalette.closestIndexOf(reference);
    const swapThreshold = Math.max(neutralFillRestDelta, neutralFillHoverDelta, neutralFillActiveDelta);
    const direction = referenceIndex >= swapThreshold ? -1 : 1;
    const accentIndex = palette.closestIndexOf(accent);
    const hoverIndex = accentIndex;
    const restIndex = hoverIndex + direction * -1 * hoverDelta;
    const activeIndex = restIndex + direction * activeDelta;
    const focusIndex = restIndex + direction * focusDelta;
    return {
        rest: palette.get(restIndex),
        hover: palette.get(hoverIndex),
        active: palette.get(activeIndex),
        focus: palette.get(focusIndex),
    };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/accent-foreground.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/accent-foreground.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accentForeground": () => (/* binding */ accentForeground)
/* harmony export */ });
/* harmony import */ var _utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/direction-by-is-dark */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/direction-by-is-dark.js");

/**
 * @internal
 */
function accentForeground(palette, reference, contrastTarget, restDelta, hoverDelta, activeDelta, focusDelta) {
    const accent = palette.source;
    const accentIndex = palette.closestIndexOf(accent);
    const direction = (0,_utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_0__.directionByIsDark)(reference);
    const startIndex = accentIndex +
        (direction === 1
            ? Math.min(restDelta, hoverDelta)
            : Math.max(direction * restDelta, direction * hoverDelta));
    const accessibleSwatch = palette.colorContrast(reference, contrastTarget, startIndex, direction);
    const accessibleIndex1 = palette.closestIndexOf(accessibleSwatch);
    const accessibleIndex2 = accessibleIndex1 + direction * Math.abs(restDelta - hoverDelta);
    const indexOneIsRestState = direction === 1
        ? restDelta < hoverDelta
        : direction * restDelta > direction * hoverDelta;
    let restIndex;
    let hoverIndex;
    if (indexOneIsRestState) {
        restIndex = accessibleIndex1;
        hoverIndex = accessibleIndex2;
    }
    else {
        restIndex = accessibleIndex2;
        hoverIndex = accessibleIndex1;
    }
    return {
        rest: palette.get(restIndex),
        hover: palette.get(hoverIndex),
        active: palette.get(restIndex + direction * activeDelta),
        focus: palette.get(restIndex + direction * focusDelta),
    };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/focus-stroke.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/focus-stroke.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusStrokeOuter": () => (/* binding */ focusStrokeOuter),
/* harmony export */   "focusStrokeInner": () => (/* binding */ focusStrokeInner)
/* harmony export */ });
/* harmony import */ var _utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/direction-by-is-dark */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/direction-by-is-dark.js");

/** @internal */
function focusStrokeOuter(palette, reference) {
    return palette.colorContrast(reference, 3.5);
}
/** @internal */
function focusStrokeInner(palette, reference, focusColor) {
    return palette.colorContrast(focusColor, 3.5, palette.closestIndexOf(palette.source), ((0,_utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_0__.directionByIsDark)(reference) * -1));
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/foreground-on-accent.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/foreground-on-accent.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "foregroundOnAccent": () => (/* binding */ foregroundOnAccent)
/* harmony export */ });
/* harmony import */ var _utilities_color_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/color-constants */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/color-constants.js");

/**
 * @internal
 */
function foregroundOnAccent(reference, contrastTarget) {
    return reference.contrast(_utilities_color_constants__WEBPACK_IMPORTED_MODULE_0__.white) >= contrastTarget ? _utilities_color_constants__WEBPACK_IMPORTED_MODULE_0__.white : _utilities_color_constants__WEBPACK_IMPORTED_MODULE_0__.black;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-contrast.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-contrast.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralFillContrast": () => (/* binding */ neutralFillContrast)
/* harmony export */ });
/* harmony import */ var _utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/direction-by-is-dark */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/direction-by-is-dark.js");

/**
 * @internal
 */
function neutralFillContrast(palette, reference, restDelta, hoverDelta, activeDelta, focusDelta) {
    const direction = (0,_utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_0__.directionByIsDark)(reference);
    const accessibleIndex = palette.closestIndexOf(palette.colorContrast(reference, 4.5));
    const accessibleIndex2 = accessibleIndex + direction * Math.abs(restDelta - hoverDelta);
    const indexOneIsRest = direction === 1
        ? restDelta < hoverDelta
        : direction * restDelta > direction * hoverDelta;
    let restIndex;
    let hoverIndex;
    if (indexOneIsRest) {
        restIndex = accessibleIndex;
        hoverIndex = accessibleIndex2;
    }
    else {
        restIndex = accessibleIndex2;
        hoverIndex = accessibleIndex;
    }
    return {
        rest: palette.get(restIndex),
        hover: palette.get(hoverIndex),
        active: palette.get(restIndex + direction * activeDelta),
        focus: palette.get(restIndex + direction * focusDelta),
    };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-input.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-input.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralFillInput": () => (/* binding */ neutralFillInput)
/* harmony export */ });
/* harmony import */ var _utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/direction-by-is-dark */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/direction-by-is-dark.js");

/**
 * @internal
 */
function neutralFillInput(palette, reference, restDelta, hoverDelta, activeDelta, focusDelta) {
    const direction = (0,_utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_0__.directionByIsDark)(reference);
    const referenceIndex = palette.closestIndexOf(reference);
    return {
        rest: palette.get(referenceIndex - direction * restDelta),
        hover: palette.get(referenceIndex - direction * hoverDelta),
        active: palette.get(referenceIndex - direction * activeDelta),
        focus: palette.get(referenceIndex - direction * focusDelta),
    };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-layer.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-layer.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralFillLayer": () => (/* binding */ neutralFillLayer)
/* harmony export */ });
/**
 * @internal
 */
function neutralFillLayer(palette, reference, delta) {
    const referenceIndex = palette.closestIndexOf(reference);
    return palette.get(referenceIndex - (referenceIndex < delta ? delta * -1 : delta));
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-stealth.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-stealth.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralFillStealth": () => (/* binding */ neutralFillStealth)
/* harmony export */ });
/**
 * @internal
 */
function neutralFillStealth(palette, reference, restDelta, hoverDelta, activeDelta, focusDelta, fillRestDelta, fillHoverDelta, fillActiveDelta, fillFocusDelta) {
    const swapThreshold = Math.max(restDelta, hoverDelta, activeDelta, focusDelta, fillRestDelta, fillHoverDelta, fillActiveDelta, fillFocusDelta);
    const referenceIndex = palette.closestIndexOf(reference);
    const direction = referenceIndex >= swapThreshold ? -1 : 1;
    return {
        rest: palette.get(referenceIndex + direction * restDelta),
        hover: palette.get(referenceIndex + direction * hoverDelta),
        active: palette.get(referenceIndex + direction * activeDelta),
        focus: palette.get(referenceIndex + direction * focusDelta),
    };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralFill": () => (/* binding */ neutralFill)
/* harmony export */ });
/**
 *
 * @param palette - The palette to operate on
 * @param reference - The reference color to calculate a color for
 * @param delta - The offset from the reference's location
 * @param threshold - Determines if a lighter or darker color than the reference will be picked.
 * @returns
 *
 * @internal
 */
function neutralFill(palette, reference, restDelta, hoverDelta, activeDelta, focusDelta) {
    const referenceIndex = palette.closestIndexOf(reference);
    const threshold = Math.max(restDelta, hoverDelta, activeDelta, focusDelta);
    const direction = referenceIndex >= threshold ? -1 : 1;
    return {
        rest: palette.get(referenceIndex + direction * restDelta),
        hover: palette.get(referenceIndex + direction * hoverDelta),
        active: palette.get(referenceIndex + direction * activeDelta),
        focus: palette.get(referenceIndex + direction * focusDelta),
    };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-foreground-hint.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-foreground-hint.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralForegroundHint": () => (/* binding */ neutralForegroundHint)
/* harmony export */ });
/**
 * The neutralForegroundHint color recipe
 * @param palette - The palette to operate on
 * @param reference - The reference color
 *
 * @internal
 */
function neutralForegroundHint(palette, reference) {
    return palette.colorContrast(reference, 4.5);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-foreground.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-foreground.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralForeground": () => (/* binding */ neutralForeground)
/* harmony export */ });
/**
 * @internal
 */
function neutralForeground(palette, reference) {
    return palette.colorContrast(reference, 14);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-1.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-1.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralLayer1": () => (/* binding */ neutralLayer1)
/* harmony export */ });
/* harmony import */ var _utilities_base_layer_luminance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/base-layer-luminance */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/base-layer-luminance.js");

function neutralLayer1(palette, baseLayerLuminance) {
    return palette.get(palette.closestIndexOf((0,_utilities_base_layer_luminance__WEBPACK_IMPORTED_MODULE_0__.baseLayerLuminanceSwatch)(baseLayerLuminance)));
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-2.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-2.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralLayer2Index": () => (/* binding */ neutralLayer2Index),
/* harmony export */   "neutralLayer2": () => (/* binding */ neutralLayer2)
/* harmony export */ });
/* harmony import */ var _utilities_base_layer_luminance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/base-layer-luminance */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/base-layer-luminance.js");

/**
 * @internal
 */
function neutralLayer2Index(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta) {
    return Math.max(palette.closestIndexOf((0,_utilities_base_layer_luminance__WEBPACK_IMPORTED_MODULE_0__.baseLayerLuminanceSwatch)(luminance)) + layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta);
}
/**
 * @internal
 */
function neutralLayer2(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta) {
    return palette.get(neutralLayer2Index(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta));
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-3.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-3.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralLayer3": () => (/* binding */ neutralLayer3)
/* harmony export */ });
/* harmony import */ var _neutral_layer_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neutral-layer-2 */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-2.js");

/**
 * @internal
 */
function neutralLayer3(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta) {
    return palette.get((0,_neutral_layer_2__WEBPACK_IMPORTED_MODULE_0__.neutralLayer2Index)(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta) + layerDelta);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-4.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-4.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralLayer4": () => (/* binding */ neutralLayer4)
/* harmony export */ });
/* harmony import */ var _neutral_layer_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neutral-layer-2 */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-2.js");

/**
 * @internal
 */
function neutralLayer4(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta) {
    return palette.get((0,_neutral_layer_2__WEBPACK_IMPORTED_MODULE_0__.neutralLayer2Index)(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta) +
        layerDelta * 2);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-card-container.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-card-container.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralLayerCardContainer": () => (/* binding */ neutralLayerCardContainer)
/* harmony export */ });
/* harmony import */ var _utilities_base_layer_luminance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/base-layer-luminance */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/base-layer-luminance.js");

/**
 * @internal
 */
function neutralLayerCardContainer(palette, relativeLuminance, layerDelta) {
    return palette.get(palette.closestIndexOf((0,_utilities_base_layer_luminance__WEBPACK_IMPORTED_MODULE_0__.baseLayerLuminanceSwatch)(relativeLuminance)) + layerDelta);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-floating.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-floating.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralLayerFloating": () => (/* binding */ neutralLayerFloating)
/* harmony export */ });
/* harmony import */ var _utilities_base_layer_luminance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/base-layer-luminance */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/base-layer-luminance.js");

/**
 * @internal
 */
function neutralLayerFloating(palette, relativeLuminance, layerDelta) {
    const cardIndex = palette.closestIndexOf((0,_utilities_base_layer_luminance__WEBPACK_IMPORTED_MODULE_0__.baseLayerLuminanceSwatch)(relativeLuminance)) - layerDelta;
    return palette.get(cardIndex - layerDelta);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-stroke-divider.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-stroke-divider.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralStrokeDivider": () => (/* binding */ neutralStrokeDivider)
/* harmony export */ });
/* harmony import */ var _utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/direction-by-is-dark */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/direction-by-is-dark.js");

/**
 * The neutralStrokeDivider color recipe
 * @param palette - The palette to operate on
 * @param reference - The reference color
 * @param delta - The offset from the reference
 *
 * @internal
 */
function neutralStrokeDivider(palette, reference, delta) {
    return palette.get(palette.closestIndexOf(reference) + (0,_utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_0__.directionByIsDark)(reference) * delta);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-stroke.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-stroke.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralStroke": () => (/* binding */ neutralStroke)
/* harmony export */ });
/* harmony import */ var _utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/direction-by-is-dark */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/direction-by-is-dark.js");

/**
 * @internal
 */
function neutralStroke(palette, reference, restDelta, hoverDelta, activeDelta, focusDelta) {
    const referenceIndex = palette.closestIndexOf(reference);
    const direction = (0,_utilities_direction_by_is_dark__WEBPACK_IMPORTED_MODULE_0__.directionByIsDark)(reference);
    const restIndex = referenceIndex + direction * restDelta;
    const hoverIndex = restIndex + direction * (hoverDelta - restDelta);
    const activeIndex = restIndex + direction * (activeDelta - restDelta);
    const focusIndex = restIndex + direction * (focusDelta - restDelta);
    return {
        rest: palette.get(restIndex),
        hover: palette.get(hoverIndex),
        active: palette.get(activeIndex),
        focus: palette.get(focusIndex),
    };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/swatch.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/swatch.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwatchRGB": () => (/* binding */ SwatchRGB),
/* harmony export */   "isSwatchRGB": () => (/* binding */ isSwatchRGB)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-colors */ "./node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-colors */ "./node_modules/@microsoft/fast-colors/dist/color-converters.js");
/* harmony import */ var _utilities_relative_luminance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/relative-luminance */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/relative-luminance.js");


/** @public */
const SwatchRGB = Object.freeze({
    create(r, g, b) {
        return new SwatchRGBImpl(r, g, b);
    },
    from(obj) {
        return new SwatchRGBImpl(obj.r, obj.g, obj.b);
    },
});
/**
 * Runtime test for an objects conformance with the SwatchRGB interface.
 * @internal
 */
function isSwatchRGB(value) {
    const test = {
        r: 0,
        g: 0,
        b: 0,
        toColorString: () => "",
        contrast: () => 0,
        relativeLuminance: 0,
    };
    for (const key in test) {
        if (typeof test[key] !== typeof value[key]) {
            return false;
        }
    }
    return true;
}
/**
 * A RGB implementation of {@link Swatch}
 * @internal
 */
class SwatchRGBImpl extends _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64 {
    /**
     *
     * @param red - Red channel expressed as a number between 0 and 1
     * @param green - Green channel expressed as a number between 0 and 1
     * @param blue - Blue channel expressed as a number between 0 and 1
     */
    constructor(red, green, blue) {
        super(red, green, blue, 1);
        this.toColorString = this.toStringHexRGB;
        this.contrast = _utilities_relative_luminance__WEBPACK_IMPORTED_MODULE_1__.contrast.bind(null, this);
        this.createCSS = this.toColorString;
        this.relativeLuminance = (0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_2__.rgbToRelativeLuminance)(this);
    }
    static fromObject(obj) {
        return new SwatchRGBImpl(obj.r, obj.g, obj.b);
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/base-layer-luminance.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/utilities/base-layer-luminance.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseLayerLuminanceSwatch": () => (/* binding */ baseLayerLuminanceSwatch),
/* harmony export */   "StandardLuminance": () => (/* binding */ StandardLuminance)
/* harmony export */ });
/* harmony import */ var _swatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../swatch */ "./node_modules/@microsoft/fast-components/dist/esm/color/swatch.js");

function baseLayerLuminanceSwatch(luminance) {
    return _swatch__WEBPACK_IMPORTED_MODULE_0__.SwatchRGB.create(luminance, luminance, luminance);
}
/**
 * Recommended values for light and dark mode for {@link @microsoft/fast-components#baseLayerLuminance}.
 *
 * @public
 */
var StandardLuminance;
(function (StandardLuminance) {
    StandardLuminance[StandardLuminance["LightMode"] = 1] = "LightMode";
    StandardLuminance[StandardLuminance["DarkMode"] = 0.23] = "DarkMode";
})(StandardLuminance || (StandardLuminance = {}));


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/binary-search.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/utilities/binary-search.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "binarySearch": () => (/* binding */ binarySearch)
/* harmony export */ });
/**
 * @internal
 */
function binarySearch(valuesToSearch, searchCondition, startIndex = 0, endIndex = valuesToSearch.length - 1) {
    if (endIndex === startIndex) {
        return valuesToSearch[startIndex];
    }
    const middleIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
    // Check to see if this passes on the item in the center of the array
    // if it does check the previous values
    return searchCondition(valuesToSearch[middleIndex])
        ? binarySearch(valuesToSearch, searchCondition, startIndex, middleIndex // include this index because it passed the search condition
        )
        : binarySearch(valuesToSearch, searchCondition, middleIndex + 1, // exclude this index because it failed the search condition
        endIndex);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/color-constants.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/utilities/color-constants.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "white": () => (/* binding */ white),
/* harmony export */   "black": () => (/* binding */ black),
/* harmony export */   "middleGrey": () => (/* binding */ middleGrey),
/* harmony export */   "accentBase": () => (/* binding */ accentBase)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-colors */ "./node_modules/@microsoft/fast-colors/dist/parse-color.js");
/* harmony import */ var _swatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../swatch */ "./node_modules/@microsoft/fast-components/dist/esm/color/swatch.js");


/**
 * @internal
 */
const white = _swatch__WEBPACK_IMPORTED_MODULE_0__.SwatchRGB.create(1, 1, 1);
/**
 * @internal
 */
const black = _swatch__WEBPACK_IMPORTED_MODULE_0__.SwatchRGB.create(0, 0, 0);
/**
 * @internal
 */
const middleGrey = _swatch__WEBPACK_IMPORTED_MODULE_0__.SwatchRGB.create(0.5, 0.5, 0.5);
/**
 * @internal
 */
/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
const base = (0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_1__.parseColorHexRGB)("#DA1A5F");
const accentBase = _swatch__WEBPACK_IMPORTED_MODULE_0__.SwatchRGB.create(base.r, base.g, base.b);


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/direction-by-is-dark.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/utilities/direction-by-is-dark.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "directionByIsDark": () => (/* binding */ directionByIsDark)
/* harmony export */ });
/* harmony import */ var _is_dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-dark */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/is-dark.js");

/**
 * @internal
 */
function directionByIsDark(color) {
    return (0,_is_dark__WEBPACK_IMPORTED_MODULE_0__.isDark)(color) ? -1 : 1;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/is-dark.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/utilities/is-dark.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDark": () => (/* binding */ isDark)
/* harmony export */ });
/*
 * A color is in "dark" if there is more contrast between #000000 and a reference
 * color than #FFFFFF and the reference color. That threshold can be expressed as a relative luminance
 * using the contrast formula as (1 + 0.5) / (R + 0.05) === (R + 0.05) / (0 + 0.05),
 * which reduces to the following, where 'R' is the relative luminance of the reference color
 */
const target = (-0.1 + Math.sqrt(0.21)) / 2;
/**
 * Determines if a color should be considered Dark Mode
 * @param color - The color to check to mode of
 * @returns boolean
 *
 * @public
 */
function isDark(color) {
    return color.relativeLuminance <= target;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/relative-luminance.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/color/utilities/relative-luminance.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contrast": () => (/* binding */ contrast)
/* harmony export */ });
/**
 * @internal
 */
function contrast(a, b) {
    const L1 = a.relativeLuminance > b.relativeLuminance ? a : b;
    const L2 = a.relativeLuminance > b.relativeLuminance ? b : a;
    return (L1.relativeLuminance + 0.05) / (L2.relativeLuminance + 0.05);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/combobox/combobox.styles.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/combobox/combobox.styles.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/@microsoft/fast-components/dist/esm/design-tokens.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/design-tokens.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bodyFont": () => (/* binding */ bodyFont),
/* harmony export */   "baseHeightMultiplier": () => (/* binding */ baseHeightMultiplier),
/* harmony export */   "baseHorizontalSpacingMultiplier": () => (/* binding */ baseHorizontalSpacingMultiplier),
/* harmony export */   "baseLayerLuminance": () => (/* binding */ baseLayerLuminance),
/* harmony export */   "controlCornerRadius": () => (/* binding */ controlCornerRadius),
/* harmony export */   "density": () => (/* binding */ density),
/* harmony export */   "designUnit": () => (/* binding */ designUnit),
/* harmony export */   "direction": () => (/* binding */ direction),
/* harmony export */   "disabledOpacity": () => (/* binding */ disabledOpacity),
/* harmony export */   "strokeWidth": () => (/* binding */ strokeWidth),
/* harmony export */   "focusStrokeWidth": () => (/* binding */ focusStrokeWidth),
/* harmony export */   "typeRampBaseFontSize": () => (/* binding */ typeRampBaseFontSize),
/* harmony export */   "typeRampBaseLineHeight": () => (/* binding */ typeRampBaseLineHeight),
/* harmony export */   "typeRampMinus1FontSize": () => (/* binding */ typeRampMinus1FontSize),
/* harmony export */   "typeRampMinus1LineHeight": () => (/* binding */ typeRampMinus1LineHeight),
/* harmony export */   "typeRampMinus2FontSize": () => (/* binding */ typeRampMinus2FontSize),
/* harmony export */   "typeRampMinus2LineHeight": () => (/* binding */ typeRampMinus2LineHeight),
/* harmony export */   "typeRampPlus1FontSize": () => (/* binding */ typeRampPlus1FontSize),
/* harmony export */   "typeRampPlus1LineHeight": () => (/* binding */ typeRampPlus1LineHeight),
/* harmony export */   "typeRampPlus2FontSize": () => (/* binding */ typeRampPlus2FontSize),
/* harmony export */   "typeRampPlus2LineHeight": () => (/* binding */ typeRampPlus2LineHeight),
/* harmony export */   "typeRampPlus3FontSize": () => (/* binding */ typeRampPlus3FontSize),
/* harmony export */   "typeRampPlus3LineHeight": () => (/* binding */ typeRampPlus3LineHeight),
/* harmony export */   "typeRampPlus4FontSize": () => (/* binding */ typeRampPlus4FontSize),
/* harmony export */   "typeRampPlus4LineHeight": () => (/* binding */ typeRampPlus4LineHeight),
/* harmony export */   "typeRampPlus5FontSize": () => (/* binding */ typeRampPlus5FontSize),
/* harmony export */   "typeRampPlus5LineHeight": () => (/* binding */ typeRampPlus5LineHeight),
/* harmony export */   "typeRampPlus6FontSize": () => (/* binding */ typeRampPlus6FontSize),
/* harmony export */   "typeRampPlus6LineHeight": () => (/* binding */ typeRampPlus6LineHeight),
/* harmony export */   "accentFillRestDelta": () => (/* binding */ accentFillRestDelta),
/* harmony export */   "accentFillHoverDelta": () => (/* binding */ accentFillHoverDelta),
/* harmony export */   "accentFillActiveDelta": () => (/* binding */ accentFillActiveDelta),
/* harmony export */   "accentFillFocusDelta": () => (/* binding */ accentFillFocusDelta),
/* harmony export */   "accentForegroundRestDelta": () => (/* binding */ accentForegroundRestDelta),
/* harmony export */   "accentForegroundHoverDelta": () => (/* binding */ accentForegroundHoverDelta),
/* harmony export */   "accentForegroundActiveDelta": () => (/* binding */ accentForegroundActiveDelta),
/* harmony export */   "accentForegroundFocusDelta": () => (/* binding */ accentForegroundFocusDelta),
/* harmony export */   "neutralFillRestDelta": () => (/* binding */ neutralFillRestDelta),
/* harmony export */   "neutralFillHoverDelta": () => (/* binding */ neutralFillHoverDelta),
/* harmony export */   "neutralFillActiveDelta": () => (/* binding */ neutralFillActiveDelta),
/* harmony export */   "neutralFillFocusDelta": () => (/* binding */ neutralFillFocusDelta),
/* harmony export */   "neutralFillInputRestDelta": () => (/* binding */ neutralFillInputRestDelta),
/* harmony export */   "neutralFillInputHoverDelta": () => (/* binding */ neutralFillInputHoverDelta),
/* harmony export */   "neutralFillInputActiveDelta": () => (/* binding */ neutralFillInputActiveDelta),
/* harmony export */   "neutralFillInputFocusDelta": () => (/* binding */ neutralFillInputFocusDelta),
/* harmony export */   "neutralFillStealthRestDelta": () => (/* binding */ neutralFillStealthRestDelta),
/* harmony export */   "neutralFillStealthHoverDelta": () => (/* binding */ neutralFillStealthHoverDelta),
/* harmony export */   "neutralFillStealthActiveDelta": () => (/* binding */ neutralFillStealthActiveDelta),
/* harmony export */   "neutralFillStealthFocusDelta": () => (/* binding */ neutralFillStealthFocusDelta),
/* harmony export */   "neutralFillStrongRestDelta": () => (/* binding */ neutralFillStrongRestDelta),
/* harmony export */   "neutralFillStrongHoverDelta": () => (/* binding */ neutralFillStrongHoverDelta),
/* harmony export */   "neutralFillStrongActiveDelta": () => (/* binding */ neutralFillStrongActiveDelta),
/* harmony export */   "neutralFillStrongFocusDelta": () => (/* binding */ neutralFillStrongFocusDelta),
/* harmony export */   "neutralFillLayerRestDelta": () => (/* binding */ neutralFillLayerRestDelta),
/* harmony export */   "neutralStrokeRestDelta": () => (/* binding */ neutralStrokeRestDelta),
/* harmony export */   "neutralStrokeHoverDelta": () => (/* binding */ neutralStrokeHoverDelta),
/* harmony export */   "neutralStrokeActiveDelta": () => (/* binding */ neutralStrokeActiveDelta),
/* harmony export */   "neutralStrokeFocusDelta": () => (/* binding */ neutralStrokeFocusDelta),
/* harmony export */   "neutralStrokeDividerRestDelta": () => (/* binding */ neutralStrokeDividerRestDelta),
/* harmony export */   "neutralPalette": () => (/* binding */ neutralPalette),
/* harmony export */   "accentPalette": () => (/* binding */ accentPalette),
/* harmony export */   "neutralLayerCardContainerRecipe": () => (/* binding */ neutralLayerCardContainerRecipe),
/* harmony export */   "neutralLayerCardContainer": () => (/* binding */ neutralLayerCardContainer),
/* harmony export */   "neutralLayerFloatingRecipe": () => (/* binding */ neutralLayerFloatingRecipe),
/* harmony export */   "neutralLayerFloating": () => (/* binding */ neutralLayerFloating),
/* harmony export */   "neutralLayer1Recipe": () => (/* binding */ neutralLayer1Recipe),
/* harmony export */   "neutralLayer1": () => (/* binding */ neutralLayer1),
/* harmony export */   "neutralLayer2Recipe": () => (/* binding */ neutralLayer2Recipe),
/* harmony export */   "neutralLayer2": () => (/* binding */ neutralLayer2),
/* harmony export */   "neutralLayer3Recipe": () => (/* binding */ neutralLayer3Recipe),
/* harmony export */   "neutralLayer3": () => (/* binding */ neutralLayer3),
/* harmony export */   "neutralLayer4Recipe": () => (/* binding */ neutralLayer4Recipe),
/* harmony export */   "neutralLayer4": () => (/* binding */ neutralLayer4),
/* harmony export */   "fillColor": () => (/* binding */ fillColor),
/* harmony export */   "accentFillRecipe": () => (/* binding */ accentFillRecipe),
/* harmony export */   "accentFillRest": () => (/* binding */ accentFillRest),
/* harmony export */   "accentFillHover": () => (/* binding */ accentFillHover),
/* harmony export */   "accentFillActive": () => (/* binding */ accentFillActive),
/* harmony export */   "accentFillFocus": () => (/* binding */ accentFillFocus),
/* harmony export */   "foregroundOnAccentRecipe": () => (/* binding */ foregroundOnAccentRecipe),
/* harmony export */   "foregroundOnAccentRest": () => (/* binding */ foregroundOnAccentRest),
/* harmony export */   "foregroundOnAccentHover": () => (/* binding */ foregroundOnAccentHover),
/* harmony export */   "foregroundOnAccentActive": () => (/* binding */ foregroundOnAccentActive),
/* harmony export */   "foregroundOnAccentFocus": () => (/* binding */ foregroundOnAccentFocus),
/* harmony export */   "foregroundOnAccentLargeRecipe": () => (/* binding */ foregroundOnAccentLargeRecipe),
/* harmony export */   "foregroundOnAccentRestLarge": () => (/* binding */ foregroundOnAccentRestLarge),
/* harmony export */   "foregroundOnAccentHoverLarge": () => (/* binding */ foregroundOnAccentHoverLarge),
/* harmony export */   "foregroundOnAccentActiveLarge": () => (/* binding */ foregroundOnAccentActiveLarge),
/* harmony export */   "foregroundOnAccentFocusLarge": () => (/* binding */ foregroundOnAccentFocusLarge),
/* harmony export */   "accentForegroundRecipe": () => (/* binding */ accentForegroundRecipe),
/* harmony export */   "accentForegroundRest": () => (/* binding */ accentForegroundRest),
/* harmony export */   "accentForegroundHover": () => (/* binding */ accentForegroundHover),
/* harmony export */   "accentForegroundActive": () => (/* binding */ accentForegroundActive),
/* harmony export */   "accentForegroundFocus": () => (/* binding */ accentForegroundFocus),
/* harmony export */   "neutralFillRecipe": () => (/* binding */ neutralFillRecipe),
/* harmony export */   "neutralFillRest": () => (/* binding */ neutralFillRest),
/* harmony export */   "neutralFillHover": () => (/* binding */ neutralFillHover),
/* harmony export */   "neutralFillActive": () => (/* binding */ neutralFillActive),
/* harmony export */   "neutralFillFocus": () => (/* binding */ neutralFillFocus),
/* harmony export */   "neutralFillInputRecipe": () => (/* binding */ neutralFillInputRecipe),
/* harmony export */   "neutralFillInputRest": () => (/* binding */ neutralFillInputRest),
/* harmony export */   "neutralFillInputHover": () => (/* binding */ neutralFillInputHover),
/* harmony export */   "neutralFillInputActive": () => (/* binding */ neutralFillInputActive),
/* harmony export */   "neutralFillInputFocus": () => (/* binding */ neutralFillInputFocus),
/* harmony export */   "neutralFillStealthRecipe": () => (/* binding */ neutralFillStealthRecipe),
/* harmony export */   "neutralFillStealthRest": () => (/* binding */ neutralFillStealthRest),
/* harmony export */   "neutralFillStealthHover": () => (/* binding */ neutralFillStealthHover),
/* harmony export */   "neutralFillStealthActive": () => (/* binding */ neutralFillStealthActive),
/* harmony export */   "neutralFillStealthFocus": () => (/* binding */ neutralFillStealthFocus),
/* harmony export */   "neutralFillStrongRecipe": () => (/* binding */ neutralFillStrongRecipe),
/* harmony export */   "neutralFillStrongRest": () => (/* binding */ neutralFillStrongRest),
/* harmony export */   "neutralFillStrongHover": () => (/* binding */ neutralFillStrongHover),
/* harmony export */   "neutralFillStrongActive": () => (/* binding */ neutralFillStrongActive),
/* harmony export */   "neutralFillStrongFocus": () => (/* binding */ neutralFillStrongFocus),
/* harmony export */   "neutralFillLayerRecipe": () => (/* binding */ neutralFillLayerRecipe),
/* harmony export */   "neutralFillLayerRest": () => (/* binding */ neutralFillLayerRest),
/* harmony export */   "focusStrokeOuterRecipe": () => (/* binding */ focusStrokeOuterRecipe),
/* harmony export */   "focusStrokeOuter": () => (/* binding */ focusStrokeOuter),
/* harmony export */   "focusStrokeInnerRecipe": () => (/* binding */ focusStrokeInnerRecipe),
/* harmony export */   "focusStrokeInner": () => (/* binding */ focusStrokeInner),
/* harmony export */   "neutralForegroundHintRecipe": () => (/* binding */ neutralForegroundHintRecipe),
/* harmony export */   "neutralForegroundHint": () => (/* binding */ neutralForegroundHint),
/* harmony export */   "neutralForegroundRecipe": () => (/* binding */ neutralForegroundRecipe),
/* harmony export */   "neutralForegroundRest": () => (/* binding */ neutralForegroundRest),
/* harmony export */   "neutralStrokeRecipe": () => (/* binding */ neutralStrokeRecipe),
/* harmony export */   "neutralStrokeRest": () => (/* binding */ neutralStrokeRest),
/* harmony export */   "neutralStrokeHover": () => (/* binding */ neutralStrokeHover),
/* harmony export */   "neutralStrokeActive": () => (/* binding */ neutralStrokeActive),
/* harmony export */   "neutralStrokeFocus": () => (/* binding */ neutralStrokeFocus),
/* harmony export */   "neutralStrokeDividerRecipe": () => (/* binding */ neutralStrokeDividerRecipe),
/* harmony export */   "neutralStrokeDividerRest": () => (/* binding */ neutralStrokeDividerRest)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/design-token/design-token.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/localization.js");
/* harmony import */ var _color_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color/palette */ "./node_modules/@microsoft/fast-components/dist/esm/color/palette.js");
/* harmony import */ var _color_recipes_accent_fill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./color/recipes/accent-fill */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/accent-fill.js");
/* harmony import */ var _color_recipes_accent_foreground__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./color/recipes/accent-foreground */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/accent-foreground.js");
/* harmony import */ var _color_recipes_foreground_on_accent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./color/recipes/foreground-on-accent */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/foreground-on-accent.js");
/* harmony import */ var _color_recipes_neutral_fill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./color/recipes/neutral-fill */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill.js");
/* harmony import */ var _color_recipes_neutral_fill_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./color/recipes/neutral-fill-input */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-input.js");
/* harmony import */ var _color_recipes_neutral_fill_layer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./color/recipes/neutral-fill-layer */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-layer.js");
/* harmony import */ var _color_recipes_neutral_fill_stealth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./color/recipes/neutral-fill-stealth */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-stealth.js");
/* harmony import */ var _color_recipes_neutral_fill_contrast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./color/recipes/neutral-fill-contrast */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-contrast.js");
/* harmony import */ var _color_recipes_focus_stroke__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./color/recipes/focus-stroke */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/focus-stroke.js");
/* harmony import */ var _color_recipes_neutral_foreground__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./color/recipes/neutral-foreground */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-foreground.js");
/* harmony import */ var _color_recipes_neutral_foreground_hint__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./color/recipes/neutral-foreground-hint */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-foreground-hint.js");
/* harmony import */ var _color_recipes_neutral_layer_card_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color/recipes/neutral-layer-card-container */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-card-container.js");
/* harmony import */ var _color_recipes_neutral_layer_floating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color/recipes/neutral-layer-floating */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-floating.js");
/* harmony import */ var _color_recipes_neutral_layer_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./color/recipes/neutral-layer-1 */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-1.js");
/* harmony import */ var _color_recipes_neutral_layer_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./color/recipes/neutral-layer-2 */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-2.js");
/* harmony import */ var _color_recipes_neutral_layer_3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./color/recipes/neutral-layer-3 */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-3.js");
/* harmony import */ var _color_recipes_neutral_layer_4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./color/recipes/neutral-layer-4 */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-4.js");
/* harmony import */ var _color_recipes_neutral_stroke__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./color/recipes/neutral-stroke */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-stroke.js");
/* harmony import */ var _color_recipes_neutral_stroke_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./color/recipes/neutral-stroke-divider */ "./node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-stroke-divider.js");
/* harmony import */ var _color_utilities_base_layer_luminance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color/utilities/base-layer-luminance */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/base-layer-luminance.js");
/* harmony import */ var _color_utilities_color_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color/utilities/color-constants */ "./node_modules/@microsoft/fast-components/dist/esm/color/utilities/color-constants.js");
























const { create } = _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.DesignToken;
// General tokens
/** @public */
const bodyFont = create("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif');
/** @public */
const baseHeightMultiplier = create("base-height-multiplier").withDefault(10);
/** @public */
const baseHorizontalSpacingMultiplier = create("base-horizontal-spacing-multiplier").withDefault(3);
/** @public */
const baseLayerLuminance = create("base-layer-luminance").withDefault(_color_utilities_base_layer_luminance__WEBPACK_IMPORTED_MODULE_1__.StandardLuminance.DarkMode);
/** @public */
const controlCornerRadius = create("control-corner-radius").withDefault(4);
/** @public */
const density = create("density").withDefault(0);
/** @public */
const designUnit = create("design-unit").withDefault(4);
/** @public */
const direction = create("direction").withDefault(_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Direction.ltr);
/** @public */
const disabledOpacity = create("disabled-opacity").withDefault(0.3);
/** @public */
const strokeWidth = create("stroke-width").withDefault(1);
/** @public */
const focusStrokeWidth = create("focus-stroke-width").withDefault(2);
// Typography values
/** @public */
const typeRampBaseFontSize = create("type-ramp-base-font-size").withDefault("14px");
/** @public */
const typeRampBaseLineHeight = create("type-ramp-base-line-height").withDefault("20px");
/** @public */
const typeRampMinus1FontSize = create("type-ramp-minus-1-font-size").withDefault("12px");
/** @public */
const typeRampMinus1LineHeight = create("type-ramp-minus-1-line-height").withDefault("16px");
/** @public */
const typeRampMinus2FontSize = create("type-ramp-minus-2-font-size").withDefault("10px");
/** @public */
const typeRampMinus2LineHeight = create("type-ramp-minus-2-line-height").withDefault("16px");
/** @public */
const typeRampPlus1FontSize = create("type-ramp-plus-1-font-size").withDefault("16px");
/** @public */
const typeRampPlus1LineHeight = create("type-ramp-plus-1-line-height").withDefault("24px");
/** @public */
const typeRampPlus2FontSize = create("type-ramp-plus-2-font-size").withDefault("20px");
/** @public */
const typeRampPlus2LineHeight = create("type-ramp-plus-2-line-height").withDefault("28px");
/** @public */
const typeRampPlus3FontSize = create("type-ramp-plus-3-font-size").withDefault("28px");
/** @public */
const typeRampPlus3LineHeight = create("type-ramp-plus-3-line-height").withDefault("36px");
/** @public */
const typeRampPlus4FontSize = create("type-ramp-plus-4-font-size").withDefault("34px");
/** @public */
const typeRampPlus4LineHeight = create("type-ramp-plus-4-line-height").withDefault("44px");
/** @public */
const typeRampPlus5FontSize = create("type-ramp-plus-5-font-size").withDefault("46px");
/** @public */
const typeRampPlus5LineHeight = create("type-ramp-plus-5-line-height").withDefault("56px");
/** @public */
const typeRampPlus6FontSize = create("type-ramp-plus-6-font-size").withDefault("60px");
/** @public */
const typeRampPlus6LineHeight = create("type-ramp-plus-6-line-height").withDefault("72px");
// Color recipe values
/** @public */
const accentFillRestDelta = create("accent-fill-rest-delta").withDefault(0);
/** @public */
const accentFillHoverDelta = create("accent-fill-hover-delta").withDefault(4);
/** @public */
const accentFillActiveDelta = create("accent-fill-active-delta").withDefault(-5);
/** @public */
const accentFillFocusDelta = create("accent-fill-focus-delta").withDefault(0);
/** @public */
const accentForegroundRestDelta = create("accent-foreground-rest-delta").withDefault(0);
/** @public */
const accentForegroundHoverDelta = create("accent-foreground-hover-delta").withDefault(6);
/** @public */
const accentForegroundActiveDelta = create("accent-foreground-active-delta").withDefault(-4);
/** @public */
const accentForegroundFocusDelta = create("accent-foreground-focus-delta").withDefault(0);
/** @public */
const neutralFillRestDelta = create("neutral-fill-rest-delta").withDefault(7);
/** @public */
const neutralFillHoverDelta = create("neutral-fill-hover-delta").withDefault(10);
/** @public */
const neutralFillActiveDelta = create("neutral-fill-active-delta").withDefault(5);
/** @public */
const neutralFillFocusDelta = create("neutral-fill-focus-delta").withDefault(0);
/** @public */
const neutralFillInputRestDelta = create("neutral-fill-input-rest-delta").withDefault(0);
/** @public */
const neutralFillInputHoverDelta = create("neutral-fill-input-hover-delta").withDefault(0);
/** @public */
const neutralFillInputActiveDelta = create("neutral-fill-input-active-delta").withDefault(0);
/** @public */
const neutralFillInputFocusDelta = create("neutral-fill-input-focus-delta").withDefault(0);
/** @public */
const neutralFillStealthRestDelta = create("neutral-fill-stealth-rest-delta").withDefault(0);
/** @public */
const neutralFillStealthHoverDelta = create("neutral-fill-stealth-hover-delta").withDefault(5);
/** @public */
const neutralFillStealthActiveDelta = create("neutral-fill-stealth-active-delta").withDefault(3);
/** @public */
const neutralFillStealthFocusDelta = create("neutral-fill-stealth-focus-delta").withDefault(0);
/** @public */
const neutralFillStrongRestDelta = create("neutral-fill-strong-rest-delta").withDefault(0);
/** @public */
const neutralFillStrongHoverDelta = create("neutral-fill-strong-hover-delta").withDefault(8);
/** @public */
const neutralFillStrongActiveDelta = create("neutral-fill-strong-active-delta").withDefault(-5);
/** @public */
const neutralFillStrongFocusDelta = create("neutral-fill-strong-focus-delta").withDefault(0);
/** @public */
const neutralFillLayerRestDelta = create("neutral-fill-layer-rest-delta").withDefault(3);
/** @public */
const neutralStrokeRestDelta = create("neutral-stroke-rest-delta").withDefault(25);
/** @public */
const neutralStrokeHoverDelta = create("neutral-stroke-hover-delta").withDefault(40);
/** @public */
const neutralStrokeActiveDelta = create("neutral-stroke-active-delta").withDefault(16);
/** @public */
const neutralStrokeFocusDelta = create("neutral-stroke-focus-delta").withDefault(25);
/** @public */
const neutralStrokeDividerRestDelta = create("neutral-stroke-divider-rest-delta").withDefault(8);
// Color recipes
/** @public */
const neutralPalette = create({
    name: "neutral-palette",
    cssCustomPropertyName: null,
}).withDefault(_color_palette__WEBPACK_IMPORTED_MODULE_3__.PaletteRGB.create(_color_utilities_color_constants__WEBPACK_IMPORTED_MODULE_4__.middleGrey));
/** @public */
const accentPalette = create({
    name: "accent-palette",
    cssCustomPropertyName: null,
}).withDefault(_color_palette__WEBPACK_IMPORTED_MODULE_3__.PaletteRGB.create(_color_utilities_color_constants__WEBPACK_IMPORTED_MODULE_4__.accentBase));
// Neutral Layer Card Container
/** @public */
const neutralLayerCardContainerRecipe = create({
    name: "neutral-layer-card-container-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element) => (0,_color_recipes_neutral_layer_card_container__WEBPACK_IMPORTED_MODULE_5__.neutralLayerCardContainer)(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element)),
});
/** @public */
const neutralLayerCardContainer = create("neutral-layer-card-container").withDefault((element) => neutralLayerCardContainerRecipe.getValueFor(element).evaluate(element));
// Neutral Layer Floating
/** @public */
const neutralLayerFloatingRecipe = create({
    name: "neutral-layer-floating-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element) => (0,_color_recipes_neutral_layer_floating__WEBPACK_IMPORTED_MODULE_6__.neutralLayerFloating)(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element)),
});
/** @public */
const neutralLayerFloating = create("neutral-layer-floating").withDefault((element) => neutralLayerFloatingRecipe.getValueFor(element).evaluate(element));
// Neutral Layer 1
/** @public */
const neutralLayer1Recipe = create({
    name: "neutral-layer-1-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element) => (0,_color_recipes_neutral_layer_1__WEBPACK_IMPORTED_MODULE_7__.neutralLayer1)(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element)),
});
/** @public */
const neutralLayer1 = create("neutral-layer-1").withDefault((element) => neutralLayer1Recipe.getValueFor(element).evaluate(element));
// Neutral Layer 2
/** @public */
const neutralLayer2Recipe = create({
    name: "neutral-layer-2-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element) => (0,_color_recipes_neutral_layer_2__WEBPACK_IMPORTED_MODULE_8__.neutralLayer2)(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element), neutralFillRestDelta.getValueFor(element), neutralFillHoverDelta.getValueFor(element), neutralFillActiveDelta.getValueFor(element)),
});
/** @public */
const neutralLayer2 = create("neutral-layer-2").withDefault((element) => neutralLayer2Recipe.getValueFor(element).evaluate(element));
// Neutral Layer 3
/** @public */
const neutralLayer3Recipe = create({
    name: "neutral-layer-3-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element) => (0,_color_recipes_neutral_layer_3__WEBPACK_IMPORTED_MODULE_9__.neutralLayer3)(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element), neutralFillRestDelta.getValueFor(element), neutralFillHoverDelta.getValueFor(element), neutralFillActiveDelta.getValueFor(element)),
});
/** @public */
const neutralLayer3 = create("neutral-layer-3").withDefault((element) => neutralLayer3Recipe.getValueFor(element).evaluate(element));
// Neutral Layer 4
/** @public */
const neutralLayer4Recipe = create({
    name: "neutral-layer-4-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element) => (0,_color_recipes_neutral_layer_4__WEBPACK_IMPORTED_MODULE_10__.neutralLayer4)(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element), neutralFillRestDelta.getValueFor(element), neutralFillHoverDelta.getValueFor(element), neutralFillActiveDelta.getValueFor(element)),
});
/** @public */
const neutralLayer4 = create("neutral-layer-4").withDefault((element) => neutralLayer4Recipe.getValueFor(element).evaluate(element));
/** @public */
const fillColor = create("fill-color").withDefault(element => neutralLayer1.getValueFor(element));
var ContrastTarget;
(function (ContrastTarget) {
    ContrastTarget[ContrastTarget["normal"] = 4.5] = "normal";
    ContrastTarget[ContrastTarget["large"] = 7] = "large";
})(ContrastTarget || (ContrastTarget = {}));
// Accent Fill
/** @public */
const accentFillRecipe = create({
    name: "accent-fill-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element, reference) => (0,_color_recipes_accent_fill__WEBPACK_IMPORTED_MODULE_11__.accentFill)(accentPalette.getValueFor(element), neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), accentFillHoverDelta.getValueFor(element), accentFillActiveDelta.getValueFor(element), accentFillFocusDelta.getValueFor(element), neutralFillRestDelta.getValueFor(element), neutralFillHoverDelta.getValueFor(element), neutralFillActiveDelta.getValueFor(element)),
});
/** @public */
const accentFillRest = create("accent-fill-rest").withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).rest;
});
/** @public */
const accentFillHover = create("accent-fill-hover").withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).hover;
});
/** @public */
const accentFillActive = create("accent-fill-active").withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).active;
});
/** @public */
const accentFillFocus = create("accent-fill-focus").withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).focus;
});
// Foreground On Accent
const foregroundOnAccentByContrast = (contrast) => (element, reference) => {
    return (0,_color_recipes_foreground_on_accent__WEBPACK_IMPORTED_MODULE_12__.foregroundOnAccent)(reference || accentFillRest.getValueFor(element), contrast);
};
/** @public */
const foregroundOnAccentRecipe = create({
    name: "foreground-on-accent-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element, reference) => foregroundOnAccentByContrast(ContrastTarget.normal)(element, reference),
});
/** @public */
const foregroundOnAccentRest = create("foreground-on-accent-rest").withDefault((element) => foregroundOnAccentRecipe
    .getValueFor(element)
    .evaluate(element, accentFillRest.getValueFor(element)));
/** @public */
const foregroundOnAccentHover = create("foreground-on-accent-hover").withDefault((element) => foregroundOnAccentRecipe
    .getValueFor(element)
    .evaluate(element, accentFillHover.getValueFor(element)));
/** @public */
const foregroundOnAccentActive = create("foreground-on-accent-active").withDefault((element) => foregroundOnAccentRecipe
    .getValueFor(element)
    .evaluate(element, accentFillActive.getValueFor(element)));
/** @public */
const foregroundOnAccentFocus = create("foreground-on-accent-focus").withDefault((element) => foregroundOnAccentRecipe
    .getValueFor(element)
    .evaluate(element, accentFillFocus.getValueFor(element)));
/** @public */
const foregroundOnAccentLargeRecipe = create({
    name: "foreground-on-accent-large-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element, reference) => foregroundOnAccentByContrast(ContrastTarget.large)(element, reference),
});
/** @public */
const foregroundOnAccentRestLarge = create("foreground-on-accent-rest-large").withDefault((element) => foregroundOnAccentLargeRecipe
    .getValueFor(element)
    .evaluate(element, accentFillRest.getValueFor(element)));
/** @public */
const foregroundOnAccentHoverLarge = create("foreground-on-accent-hover-large").withDefault((element) => foregroundOnAccentLargeRecipe
    .getValueFor(element)
    .evaluate(element, accentFillHover.getValueFor(element)));
/** @public */
const foregroundOnAccentActiveLarge = create("foreground-on-accent-active-large").withDefault((element) => foregroundOnAccentLargeRecipe
    .getValueFor(element)
    .evaluate(element, accentFillActive.getValueFor(element)));
/** @public */
const foregroundOnAccentFocusLarge = create("foreground-on-accent-focus-large").withDefault((element) => foregroundOnAccentLargeRecipe
    .getValueFor(element)
    .evaluate(element, accentFillFocus.getValueFor(element)));
// Accent Foreground
const accentForegroundByContrast = (contrast) => (element, reference) => (0,_color_recipes_accent_foreground__WEBPACK_IMPORTED_MODULE_13__.accentForeground)(accentPalette.getValueFor(element), reference || fillColor.getValueFor(element), contrast, accentForegroundRestDelta.getValueFor(element), accentForegroundHoverDelta.getValueFor(element), accentForegroundActiveDelta.getValueFor(element), accentForegroundFocusDelta.getValueFor(element));
/** @public */
const accentForegroundRecipe = create({
    name: "accent-foreground-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element, reference) => accentForegroundByContrast(ContrastTarget.normal)(element, reference),
});
/** @public */
const accentForegroundRest = create("accent-foreground-rest").withDefault((element) => accentForegroundRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
const accentForegroundHover = create("accent-foreground-hover").withDefault((element) => accentForegroundRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
const accentForegroundActive = create("accent-foreground-active").withDefault((element) => accentForegroundRecipe.getValueFor(element).evaluate(element).active);
/** @public */
const accentForegroundFocus = create("accent-foreground-focus").withDefault((element) => accentForegroundRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Fill
/** @public */
const neutralFillRecipe = create({
    name: "neutral-fill-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element, reference) => (0,_color_recipes_neutral_fill__WEBPACK_IMPORTED_MODULE_14__.neutralFill)(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillRestDelta.getValueFor(element), neutralFillHoverDelta.getValueFor(element), neutralFillActiveDelta.getValueFor(element), neutralFillFocusDelta.getValueFor(element)),
});
/** @public */
const neutralFillRest = create("neutral-fill-rest").withDefault((element) => neutralFillRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
const neutralFillHover = create("neutral-fill-hover").withDefault((element) => neutralFillRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
const neutralFillActive = create("neutral-fill-active").withDefault((element) => neutralFillRecipe.getValueFor(element).evaluate(element).active);
/** @public */
const neutralFillFocus = create("neutral-fill-focus").withDefault((element) => neutralFillRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Fill Input
/** @public */
const neutralFillInputRecipe = create({
    name: "neutral-fill-input-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element, reference) => (0,_color_recipes_neutral_fill_input__WEBPACK_IMPORTED_MODULE_15__.neutralFillInput)(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillInputRestDelta.getValueFor(element), neutralFillInputHoverDelta.getValueFor(element), neutralFillInputActiveDelta.getValueFor(element), neutralFillInputFocusDelta.getValueFor(element)),
});
/** @public */
const neutralFillInputRest = create("neutral-fill-input-rest").withDefault((element) => neutralFillInputRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
const neutralFillInputHover = create("neutral-fill-input-hover").withDefault((element) => neutralFillInputRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
const neutralFillInputActive = create("neutral-fill-input-active").withDefault((element) => neutralFillInputRecipe.getValueFor(element).evaluate(element).active);
/** @public */
const neutralFillInputFocus = create("neutral-fill-input-focus").withDefault((element) => neutralFillInputRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Fill Stealth
/** @public */
const neutralFillStealthRecipe = create({
    name: "neutral-fill-stealth-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element, reference) => (0,_color_recipes_neutral_fill_stealth__WEBPACK_IMPORTED_MODULE_16__.neutralFillStealth)(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillStealthRestDelta.getValueFor(element), neutralFillStealthHoverDelta.getValueFor(element), neutralFillStealthActiveDelta.getValueFor(element), neutralFillStealthFocusDelta.getValueFor(element), neutralFillRestDelta.getValueFor(element), neutralFillHoverDelta.getValueFor(element), neutralFillActiveDelta.getValueFor(element), neutralFillFocusDelta.getValueFor(element)),
});
/** @public */
const neutralFillStealthRest = create("neutral-fill-stealth-rest").withDefault((element) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
const neutralFillStealthHover = create("neutral-fill-stealth-hover").withDefault((element) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
const neutralFillStealthActive = create("neutral-fill-stealth-active").withDefault((element) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).active);
/** @public */
const neutralFillStealthFocus = create("neutral-fill-stealth-focus").withDefault((element) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Fill Strong
/** @public */
const neutralFillStrongRecipe = create({
    name: "neutral-fill-strong-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element, reference) => (0,_color_recipes_neutral_fill_contrast__WEBPACK_IMPORTED_MODULE_17__.neutralFillContrast)(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillStrongRestDelta.getValueFor(element), neutralFillStrongHoverDelta.getValueFor(element), neutralFillStrongActiveDelta.getValueFor(element), neutralFillStrongFocusDelta.getValueFor(element)),
});
/** @public */
const neutralFillStrongRest = create("neutral-fill-strong-rest").withDefault((element) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
const neutralFillStrongHover = create("neutral-fill-strong-hover").withDefault((element) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
const neutralFillStrongActive = create("neutral-fill-strong-active").withDefault((element) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).active);
/** @public */
const neutralFillStrongFocus = create("neutral-fill-strong-focus").withDefault((element) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Fill Layer
/** @public */
const neutralFillLayerRecipe = create({
    name: "neutral-fill-layer-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element, reference) => (0,_color_recipes_neutral_fill_layer__WEBPACK_IMPORTED_MODULE_18__.neutralFillLayer)(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element)),
});
/** @public */
const neutralFillLayerRest = create("neutral-fill-layer-rest").withDefault((element) => neutralFillLayerRecipe.getValueFor(element).evaluate(element));
// Focus Stroke Outer
/** @public */
const focusStrokeOuterRecipe = create({
    name: "focus-stroke-outer-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element) => (0,_color_recipes_focus_stroke__WEBPACK_IMPORTED_MODULE_19__.focusStrokeOuter)(neutralPalette.getValueFor(element), fillColor.getValueFor(element)),
});
/** @public */
const focusStrokeOuter = create("focus-stroke-outer").withDefault((element) => focusStrokeOuterRecipe.getValueFor(element).evaluate(element));
// Focus Stroke Inner
/** @public */
const focusStrokeInnerRecipe = create({
    name: "focus-stroke-inner-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element) => (0,_color_recipes_focus_stroke__WEBPACK_IMPORTED_MODULE_19__.focusStrokeInner)(accentPalette.getValueFor(element), fillColor.getValueFor(element), focusStrokeOuter.getValueFor(element)),
});
/** @public */
const focusStrokeInner = create("focus-stroke-inner").withDefault((element) => focusStrokeInnerRecipe.getValueFor(element).evaluate(element));
// Neutral Foreground Hint
/** @public */
const neutralForegroundHintRecipe = create({
    name: "neutral-foreground-hint-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element) => (0,_color_recipes_neutral_foreground_hint__WEBPACK_IMPORTED_MODULE_20__.neutralForegroundHint)(neutralPalette.getValueFor(element), fillColor.getValueFor(element)),
});
/** @public */
const neutralForegroundHint = create("neutral-foreground-hint").withDefault((element) => neutralForegroundHintRecipe.getValueFor(element).evaluate(element));
// Neutral Foreground
/** @public */
const neutralForegroundRecipe = create({
    name: "neutral-foreground-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element) => (0,_color_recipes_neutral_foreground__WEBPACK_IMPORTED_MODULE_21__.neutralForeground)(neutralPalette.getValueFor(element), fillColor.getValueFor(element)),
});
/** @public */
const neutralForegroundRest = create("neutral-foreground-rest").withDefault((element) => neutralForegroundRecipe.getValueFor(element).evaluate(element));
// Neutral Stroke
/** @public */
const neutralStrokeRecipe = create({
    name: "neutral-stroke-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element) => {
        return (0,_color_recipes_neutral_stroke__WEBPACK_IMPORTED_MODULE_22__.neutralStroke)(neutralPalette.getValueFor(element), fillColor.getValueFor(element), neutralStrokeRestDelta.getValueFor(element), neutralStrokeHoverDelta.getValueFor(element), neutralStrokeActiveDelta.getValueFor(element), neutralStrokeFocusDelta.getValueFor(element));
    },
});
/** @public */
const neutralStrokeRest = create("neutral-stroke-rest").withDefault((element) => neutralStrokeRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
const neutralStrokeHover = create("neutral-stroke-hover").withDefault((element) => neutralStrokeRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
const neutralStrokeActive = create("neutral-stroke-active").withDefault((element) => neutralStrokeRecipe.getValueFor(element).evaluate(element).active);
/** @public */
const neutralStrokeFocus = create("neutral-stroke-focus").withDefault((element) => neutralStrokeRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Stroke Divider
/** @public */
const neutralStrokeDividerRecipe = create({
    name: "neutral-stroke-divider-recipe",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element, reference) => (0,_color_recipes_neutral_stroke_divider__WEBPACK_IMPORTED_MODULE_23__.neutralStrokeDivider)(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralStrokeDividerRestDelta.getValueFor(element)),
});
/** @public */
const neutralStrokeDividerRest = create("neutral-stroke-divider-rest").withDefault(element => neutralStrokeDividerRecipe.getValueFor(element).evaluate(element));


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/fast-design-system.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/fast-design-system.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "provideFASTDesignSystem": () => (/* binding */ provideFASTDesignSystem)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/design-system/design-system.js");

/**
 * Provides a design system for the specified element either by returning one that was
 * already created for that element or creating one.
 * @param element - The element to root the design system at. By default, this is the body.
 * @returns A FAST Design System
 * @public
 */
function provideFASTDesignSystem(element) {
    return _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.DesignSystem.getOrCreate(element).withPrefix("fast");
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/listbox-option/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/listbox-option/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/@microsoft/fast-components/dist/esm/select/select.styles.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/select/select.styles.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/@microsoft/fast-components/dist/esm/styles/elevation.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/styles/elevation.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ambientShadow": () => (/* binding */ ambientShadow),
/* harmony export */   "directionalShadow": () => (/* binding */ directionalShadow),
/* harmony export */   "elevation": () => (/* binding */ elevation)
/* harmony export */ });
/**
 * Define shadow algorithms.
 *
 * TODO: The --background-luminance will need to be derived from JavaScript. For now
 * this is hard-coded to a 1, the relative luminance of pure white.
 * https://github.com/microsoft/fast/issues/2778
 *
 * @internal
 */
const ambientShadow = "0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1))))";
/**
 * @internal
 */
const directionalShadow = "0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))))";
/**
 * Applies the box-shadow CSS rule set to the elevation formula.
 * Control this formula with the --elevation CSS Custom Property
 * by setting --elevation to a number.
 */
const elevation = `box-shadow: ${ambientShadow}, ${directionalShadow};`;


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/styles/patterns/button.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/styles/patterns/button.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseButtonStyles": () => (/* binding */ BaseButtonStyles),
/* harmony export */   "AccentButtonStyles": () => (/* binding */ AccentButtonStyles),
/* harmony export */   "HypertextStyles": () => (/* binding */ HypertextStyles),
/* harmony export */   "LightweightButtonStyles": () => (/* binding */ LightweightButtonStyles),
/* harmony export */   "OutlineButtonStyles": () => (/* binding */ OutlineButtonStyles),
/* harmony export */   "StealthButtonStyles": () => (/* binding */ StealthButtonStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../size */ "./node_modules/@microsoft/fast-components/dist/esm/styles/size.js");
/* harmony import */ var _design_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../design-tokens */ "./node_modules/@microsoft/fast-components/dist/esm/design-tokens.js");





/**
 * @internal
 */
const BaseButtonStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)("inline-flex")} :host {
        font-family: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.bodyFont};
        outline: none;
        font-size: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.typeRampBaseFontSize};
        line-height: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.typeRampBaseLineHeight};
        height: calc(${_size__WEBPACK_IMPORTED_MODULE_3__.heightNumber} * 1px);
        min-width: calc(${_size__WEBPACK_IMPORTED_MODULE_3__.heightNumber} * 1px);
        background-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralFillRest};
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRest};
        border-radius: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.controlCornerRadius} * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 calc((10 + (${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.designUnit} * 2 * ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.density})) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.strokeWidth} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralFillHover};
    }

    :host(:active) {
        background-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralFillActive};
    }

    .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
        border-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeOuter};
        box-shadow: 0 0 0 calc((${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} - ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.strokeWidth}) * 1px) ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeOuter} inset;
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    .start,
    .end {
        display: flex;
    }

    .control.icon-only {
        padding: 0;
        line-height: 0;
    }

    ::slotted(svg) {
        ${
/* Glyph size and margin-left is temporary -
replace when adaptive typography is figured out */ ""} width: 16px;
        height: 16px;
        pointer-events: none;
    }

    .start {
        margin-inline-end: 11px;
    }

    .end {
        margin-inline-start: 11px;
    }
`.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
            :host .control {
              background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonFace};
              border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonText};
              color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonText};
              fill: currentColor;
            }
    
            :host(:hover) .control {
              forced-color-adjust: none;
              background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
              color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.HighlightText};
            }

            .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
              forced-color-adjust: none;
              background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
              border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonText};
              box-shadow: 0 0 0 calc((${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} - ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.strokeWidth}) * 1px) ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonText} inset;
              color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.HighlightText};
            }

            .control:hover,
            :host([appearance="outline"]) .control:hover {
              border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonText};
            }

            :host([href]) .control {
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
            }

            :host([href]) .control:hover,
            :host([href]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible}{
              forced-color-adjust: none;
              background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonFace};
              border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
              box-shadow: 0 0 0 1px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText} inset;
              color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
              fill: currentColor;
            }
        `));
/**
 * @internal
 */
const AccentButtonStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    :host([appearance="accent"]) {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillRest};
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.foregroundOnAccentRest};
    }

    :host([appearance="accent"]:hover) {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillHover};
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.foregroundOnAccentHover};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillActive};
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.foregroundOnAccentActive};
    }

    :host([appearance="accent"]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
        box-shadow: 0 0 0 calc((${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} - ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.strokeWidth}) * 1px) ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeOuter} inset,
            0 0 0 calc((${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} + ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.strokeWidth}) * 1px) ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeInner} inset;
    }
`.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.HighlightText};
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
            }

            :host([appearance="accent"]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
                box-shadow: 0 0 0 calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} * 1px) ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control{
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonFace};
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
                box-shadow: none;
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
                fill: currentColor;
            }

            :host([appearance="accent"][href]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
                box-shadow: 0 0 0 calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} * 1px) ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.HighlightText} inset;
            }
        `));
/**
 * @internal
 */
const HypertextStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    :host([appearance="hypertext"]) {
        font-size: inherit;
        line-height: inherit;
        height: auto;
        min-width: 0;
        background: transparent;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }

    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentForegroundRest};
        border-bottom: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.strokeWidth} * 1px) solid ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentForegroundRest};
    }

    :host([appearance="hypertext"]:hover),
    :host([appearance="hypertext"]) .control:hover {
        background: transparent;
        border-bottom-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentForegroundHover};
    }

    :host([appearance="hypertext"]:active),
    :host([appearance="hypertext"]) .control:active {
        background: transparent;
        border-bottom-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentForegroundActive};
    }

    :host([appearance="hypertext"]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
        border-bottom: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} * 1px) solid ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeOuter};
        margin-bottom: calc(calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.strokeWidth} - ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth}) * 1px);
    }
`.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
            :host([appearance="hypertext"]:hover) {
                background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonFace};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonText};
            }
            :host([appearance="hypertext"][href]) .control:hover,
            :host([appearance="hypertext"][href]) .control:active,
            :host([appearance="hypertext"][href]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
                border-bottom-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
                box-shadow: none;
            }
        `));
/**
 * @internal
 */
const LightweightButtonStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentForegroundRest};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        background: transparent;
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentForegroundHover};
    }

    :host([appearance="lightweight"]:active) {
        background: transparent;
        color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentForegroundActive};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.strokeWidth} * 1px);
        position: absolute;
        top: calc(1em + 4px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentForegroundHover};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentForegroundActive};
    }

    :host([appearance="lightweight"]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} .content::before {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRest};
        height: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} * 1px);
    }
`.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
            :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
                forced-color-adjust: none;
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonFace};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} .content::before {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonFace};
                box-shadow: none;
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} .content::before {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
            }
        `));
/**
 * @internal
 */
const OutlineButtonStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillRest};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillHover};
    }

    :host([appearance="outline"]:active) {
        border-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.accentFillActive};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
        box-shadow: 0 0 0 calc((${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} - ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.strokeWidth}) * 1px) ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeOuter} inset;
        border-color: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeOuter};
    }
`.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
            :host([appearance="outline"]) .control {
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonText};
            }
            :host([appearance="outline"]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
              forced-color-adjust: none;
              background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
              border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonText};
              box-shadow: 0 0 0 calc((${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.focusStrokeWidth} - ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.strokeWidth}) * 1px) ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonText} inset;
              color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.HighlightText};
              fill: currentColor;
            }
            :host([appearance="outline"][href]) .control {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonFace};
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
                fill: currentColor;
            }
            :host([appearance="outline"][href]) .control:hover,
            :host([appearance="outline"][href]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
              forced-color-adjust: none;
              border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
              box-shadow: 0 0 0 1px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText} inset;
            }
        `));
/**
 * @internal
 */
const StealthButtonStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    :host([appearance="stealth"]) {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralFillStealthRest};
    }

    :host([appearance="stealth"]:hover) {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralFillStealthHover};
    }

    :host([appearance="stealth"]:active) {
        background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralFillStealthActive};
    }
`.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonFace};
                border-color: transparent;
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible}) .control {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
                box-shadow: 0 0 0 1px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
            }

            :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible}) .control {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible}) .control {
                forced-color-adjust: none;
                box-shadow: 0 0 0 1px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.LinkText};
            }
        `));


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/styles/size.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/styles/size.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "heightNumber": () => (/* binding */ heightNumber)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _design_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../design-tokens */ "./node_modules/@microsoft/fast-components/dist/esm/design-tokens.js");


/**
 * A formula to retrieve the control height.
 * Use this as the value of any CSS property that
 * accepts a pixel size.
 */
const heightNumber = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.cssPartial `(${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.baseHeightMultiplier} + ${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.density}) * ${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.designUnit}`;


/***/ }),

/***/ "./node_modules/@microsoft/fast-components/dist/esm/utilities/behaviors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-components/dist/esm/utilities/behaviors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appearanceBehavior": () => (/* binding */ appearanceBehavior)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/property-stylesheet-behavior.js");

/**
 * Behavior that will conditionally apply a stylesheet based on the elements
 * appearance property
 *
 * @param value - The value of the appearance property
 * @param styles - The styles to be applied when condition matches
 *
 * @public
 */
function appearanceBehavior(value, styles) {
    return new _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.PropertyStyleSheetBehavior("appearance", value, styles);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "booleanConverter": () => (/* binding */ booleanConverter),
/* harmony export */   "nullableNumberConverter": () => (/* binding */ nullableNumberConverter),
/* harmony export */   "AttributeDefinition": () => (/* binding */ AttributeDefinition),
/* harmony export */   "attr": () => (/* binding */ attr)
/* harmony export */ });
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");


/**
 * A {@link ValueConverter} that converts to and from `boolean` values.
 * @remarks
 * Used automatically when the `boolean` {@link AttributeMode} is selected.
 * @public
 */
const booleanConverter = {
    toView(value) {
        return value ? "true" : "false";
    },
    fromView(value) {
        if (value === null ||
            value === void 0 ||
            value === "false" ||
            value === false ||
            value === 0) {
            return false;
        }
        return true;
    },
};
/**
 * A {@link ValueConverter} that converts to and from `number` values.
 * @remarks
 * This converter allows for nullable numbers, returning `null` if the
 * input was `null`, `undefined`, or `NaN`.
 * @public
 */
const nullableNumberConverter = {
    toView(value) {
        if (value === null || value === undefined) {
            return null;
        }
        const number = value * 1;
        return isNaN(number) ? null : number.toString();
    },
    fromView(value) {
        if (value === null || value === undefined) {
            return null;
        }
        const number = value * 1;
        return isNaN(number) ? null : number;
    },
};
/**
 * An implementation of {@link Accessor} that supports reactivity,
 * change callbacks, attribute reflection, and type conversion for
 * custom elements.
 * @public
 */
class AttributeDefinition {
    /**
     * Creates an instance of AttributeDefinition.
     * @param Owner - The class constructor that owns this attribute.
     * @param name - The name of the property associated with the attribute.
     * @param attribute - The name of the attribute in HTML.
     * @param mode - The {@link AttributeMode} that describes the behavior of this attribute.
     * @param converter - A {@link ValueConverter} that integrates with the property getter/setter
     * to convert values to and from a DOM string.
     */
    constructor(Owner, name, attribute = name.toLowerCase(), mode = "reflect", converter) {
        this.guards = new Set();
        this.Owner = Owner;
        this.name = name;
        this.attribute = attribute;
        this.mode = mode;
        this.converter = converter;
        this.fieldName = `_${name}`;
        this.callbackName = `${name}Changed`;
        this.hasCallback = this.callbackName in Owner.prototype;
        if (mode === "boolean" && converter === void 0) {
            this.converter = booleanConverter;
        }
    }
    /**
     * Sets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     * @param value - The value to set the attribute/property to.
     */
    setValue(source, newValue) {
        const oldValue = source[this.fieldName];
        const converter = this.converter;
        if (converter !== void 0) {
            newValue = converter.fromView(newValue);
        }
        if (oldValue !== newValue) {
            source[this.fieldName] = newValue;
            this.tryReflectToAttribute(source);
            if (this.hasCallback) {
                source[this.callbackName](oldValue, newValue);
            }
            source.$fastController.notify(this.name);
        }
    }
    /**
     * Gets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     */
    getValue(source) {
        _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.track(source, this.name);
        return source[this.fieldName];
    }
    /** @internal */
    onAttributeChangedCallback(element, value) {
        if (this.guards.has(element)) {
            return;
        }
        this.guards.add(element);
        this.setValue(element, value);
        this.guards.delete(element);
    }
    tryReflectToAttribute(element) {
        const mode = this.mode;
        const guards = this.guards;
        if (guards.has(element) || mode === "fromView") {
            return;
        }
        _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => {
            guards.add(element);
            const latestValue = element[this.fieldName];
            switch (mode) {
                case "reflect":
                    const converter = this.converter;
                    _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.setAttribute(element, this.attribute, converter !== void 0 ? converter.toView(latestValue) : latestValue);
                    break;
                case "boolean":
                    _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.setBooleanAttribute(element, this.attribute, latestValue);
                    break;
            }
            guards.delete(element);
        });
    }
    /**
     * Collects all attribute definitions associated with the owner.
     * @param Owner - The class constructor to collect attribute for.
     * @param attributeLists - Any existing attributes to collect and merge with those associated with the owner.
     * @internal
     */
    static collect(Owner, ...attributeLists) {
        const attributes = [];
        attributeLists.push(Owner.attributes);
        for (let i = 0, ii = attributeLists.length; i < ii; ++i) {
            const list = attributeLists[i];
            if (list === void 0) {
                continue;
            }
            for (let j = 0, jj = list.length; j < jj; ++j) {
                const config = list[j];
                if (typeof config === "string") {
                    attributes.push(new AttributeDefinition(Owner, config));
                }
                else {
                    attributes.push(new AttributeDefinition(Owner, config.property, config.attribute, config.mode, config.converter));
                }
            }
        }
        return attributes;
    }
}
function attr(configOrTarget, prop) {
    let config;
    function decorator($target, $prop) {
        if (arguments.length > 1) {
            // Non invocation:
            // - @attr
            // Invocation with or w/o opts:
            // - @attr()
            // - @attr({...opts})
            config.property = $prop;
        }
        const attributes = $target.constructor.attributes ||
            ($target.constructor.attributes = []);
        attributes.push(config);
    }
    if (arguments.length > 1) {
        // Non invocation:
        // - @attr
        config = {};
        decorator(configOrTarget, prop);
        return;
    }
    // Invocation with or w/o opts:
    // - @attr()
    // - @attr({...opts})
    config = configOrTarget === void 0 ? {} : configOrTarget;
    return decorator;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/components/controller.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/components/controller.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _observation_notifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/notifier */ "./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js");
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observation/observable */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _fast_definitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fast-definitions */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js");




const shadowRoots = new WeakMap();
const defaultEventOptions = {
    bubbles: true,
    composed: true,
    cancelable: true,
};
function getShadowRoot(element) {
    return element.shadowRoot || shadowRoots.get(element) || null;
}
/**
 * Controls the lifecycle and rendering of a `FASTElement`.
 * @public
 */
class Controller extends _observation_notifier__WEBPACK_IMPORTED_MODULE_0__.PropertyChangeNotifier {
    /**
     * Creates a Controller to control the specified element.
     * @param element - The element to be controlled by this controller.
     * @param definition - The element definition metadata that instructs this
     * controller in how to handle rendering and other platform integrations.
     * @internal
     */
    constructor(element, definition) {
        super(element);
        this.boundObservables = null;
        this.behaviors = null;
        this.needsInitialization = true;
        this._template = null;
        this._styles = null;
        this._isConnected = false;
        /**
         * This allows Observable.getNotifier(...) to return the Controller
         * when the notifier for the Controller itself is being requested. The
         * result is that the Observable system does not need to create a separate
         * instance of Notifier for observables on the Controller. The component and
         * the controller will now share the same notifier, removing one-object construct
         * per web component instance.
         */
        this.$fastController = this;
        /**
         * The view associated with the custom element.
         * @remarks
         * If `null` then the element is managing its own rendering.
         */
        this.view = null;
        this.element = element;
        this.definition = definition;
        const shadowOptions = definition.shadowOptions;
        if (shadowOptions !== void 0) {
            const shadowRoot = element.attachShadow(shadowOptions);
            if (shadowOptions.mode === "closed") {
                shadowRoots.set(element, shadowRoot);
            }
        }
        // Capture any observable values that were set by the binding engine before
        // the browser upgraded the element. Then delete the property since it will
        // shadow the getter/setter that is required to make the observable operate.
        // Later, in the connect callback, we'll re-apply the values.
        const accessors = _observation_observable__WEBPACK_IMPORTED_MODULE_1__.Observable.getAccessors(element);
        if (accessors.length > 0) {
            const boundObservables = (this.boundObservables = Object.create(null));
            for (let i = 0, ii = accessors.length; i < ii; ++i) {
                const propertyName = accessors[i].name;
                const value = element[propertyName];
                if (value !== void 0) {
                    delete element[propertyName];
                    boundObservables[propertyName] = value;
                }
            }
        }
    }
    /**
     * Indicates whether or not the custom element has been
     * connected to the document.
     */
    get isConnected() {
        _observation_observable__WEBPACK_IMPORTED_MODULE_1__.Observable.track(this, "isConnected");
        return this._isConnected;
    }
    setIsConnected(value) {
        this._isConnected = value;
        _observation_observable__WEBPACK_IMPORTED_MODULE_1__.Observable.notify(this, "isConnected");
    }
    /**
     * Gets/sets the template used to render the component.
     * @remarks
     * This value can only be accurately read after connect but can be set at any time.
     */
    get template() {
        return this._template;
    }
    set template(value) {
        if (this._template === value) {
            return;
        }
        this._template = value;
        if (!this.needsInitialization) {
            this.renderTemplate(value);
        }
    }
    /**
     * Gets/sets the primary styles used for the component.
     * @remarks
     * This value can only be accurately read after connect but can be set at any time.
     */
    get styles() {
        return this._styles;
    }
    set styles(value) {
        if (this._styles === value) {
            return;
        }
        if (this._styles !== null) {
            this.removeStyles(this._styles);
        }
        this._styles = value;
        if (!this.needsInitialization && value !== null) {
            this.addStyles(value);
        }
    }
    /**
     * Adds styles to this element. Providing an HTMLStyleElement will attach the element instance to the shadowRoot.
     * @param styles - The styles to add.
     */
    addStyles(styles) {
        const target = getShadowRoot(this.element) ||
            this.element.getRootNode();
        if (styles instanceof HTMLStyleElement) {
            target.append(styles);
        }
        else if (!styles.isAttachedTo(target)) {
            const sourceBehaviors = styles.behaviors;
            styles.addStylesTo(target);
            if (sourceBehaviors !== null) {
                this.addBehaviors(sourceBehaviors);
            }
        }
    }
    /**
     * Removes styles from this element. Providing an HTMLStyleElement will detach the element instance from the shadowRoot.
     * @param styles - the styles to remove.
     */
    removeStyles(styles) {
        const target = getShadowRoot(this.element) ||
            this.element.getRootNode();
        if (styles instanceof HTMLStyleElement) {
            target.removeChild(styles);
        }
        else if (styles.isAttachedTo(target)) {
            const sourceBehaviors = styles.behaviors;
            styles.removeStylesFrom(target);
            if (sourceBehaviors !== null) {
                this.removeBehaviors(sourceBehaviors);
            }
        }
    }
    /**
     * Adds behaviors to this element.
     * @param behaviors - The behaviors to add.
     */
    addBehaviors(behaviors) {
        const targetBehaviors = this.behaviors || (this.behaviors = new Map());
        const length = behaviors.length;
        const behaviorsToBind = [];
        for (let i = 0; i < length; ++i) {
            const behavior = behaviors[i];
            if (targetBehaviors.has(behavior)) {
                targetBehaviors.set(behavior, targetBehaviors.get(behavior) + 1);
            }
            else {
                targetBehaviors.set(behavior, 1);
                behaviorsToBind.push(behavior);
            }
        }
        if (this._isConnected) {
            const element = this.element;
            for (let i = 0; i < behaviorsToBind.length; ++i) {
                behaviorsToBind[i].bind(element, _observation_observable__WEBPACK_IMPORTED_MODULE_1__.defaultExecutionContext);
            }
        }
    }
    /**
     * Removes behaviors from this element.
     * @param behaviors - The behaviors to remove.
     * @param force - Forces unbinding of behaviors.
     */
    removeBehaviors(behaviors, force = false) {
        const targetBehaviors = this.behaviors;
        if (targetBehaviors === null) {
            return;
        }
        const length = behaviors.length;
        const behaviorsToUnbind = [];
        for (let i = 0; i < length; ++i) {
            const behavior = behaviors[i];
            if (targetBehaviors.has(behavior)) {
                const count = targetBehaviors.get(behavior) - 1;
                count === 0 || force
                    ? targetBehaviors.delete(behavior) && behaviorsToUnbind.push(behavior)
                    : targetBehaviors.set(behavior, count);
            }
        }
        if (this._isConnected) {
            const element = this.element;
            for (let i = 0; i < behaviorsToUnbind.length; ++i) {
                behaviorsToUnbind[i].unbind(element);
            }
        }
    }
    /**
     * Runs connected lifecycle behavior on the associated element.
     */
    onConnectedCallback() {
        if (this._isConnected) {
            return;
        }
        const element = this.element;
        if (this.needsInitialization) {
            this.finishInitialization();
        }
        else if (this.view !== null) {
            this.view.bind(element, _observation_observable__WEBPACK_IMPORTED_MODULE_1__.defaultExecutionContext);
        }
        const behaviors = this.behaviors;
        if (behaviors !== null) {
            for (const [behavior] of behaviors) {
                behavior.bind(element, _observation_observable__WEBPACK_IMPORTED_MODULE_1__.defaultExecutionContext);
            }
        }
        this.setIsConnected(true);
    }
    /**
     * Runs disconnected lifecycle behavior on the associated element.
     */
    onDisconnectedCallback() {
        if (!this._isConnected) {
            return;
        }
        this.setIsConnected(false);
        const view = this.view;
        if (view !== null) {
            view.unbind();
        }
        const behaviors = this.behaviors;
        if (behaviors !== null) {
            const element = this.element;
            for (const [behavior] of behaviors) {
                behavior.unbind(element);
            }
        }
    }
    /**
     * Runs the attribute changed callback for the associated element.
     * @param name - The name of the attribute that changed.
     * @param oldValue - The previous value of the attribute.
     * @param newValue - The new value of the attribute.
     */
    onAttributeChangedCallback(name, oldValue, newValue) {
        const attrDef = this.definition.attributeLookup[name];
        if (attrDef !== void 0) {
            attrDef.onAttributeChangedCallback(this.element, newValue);
        }
    }
    /**
     * Emits a custom HTML event.
     * @param type - The type name of the event.
     * @param detail - The event detail object to send with the event.
     * @param options - The event options. By default bubbles and composed.
     * @remarks
     * Only emits events if connected.
     */
    emit(type, detail, options) {
        if (this._isConnected) {
            return this.element.dispatchEvent(new CustomEvent(type, Object.assign(Object.assign({ detail }, defaultEventOptions), options)));
        }
        return false;
    }
    finishInitialization() {
        const element = this.element;
        const boundObservables = this.boundObservables;
        // If we have any observables that were bound, re-apply their values.
        if (boundObservables !== null) {
            const propertyNames = Object.keys(boundObservables);
            for (let i = 0, ii = propertyNames.length; i < ii; ++i) {
                const propertyName = propertyNames[i];
                element[propertyName] = boundObservables[propertyName];
            }
            this.boundObservables = null;
        }
        const definition = this.definition;
        // 1. Template overrides take top precedence.
        if (this._template === null) {
            if (this.element.resolveTemplate) {
                // 2. Allow for element instance overrides next.
                this._template = this.element.resolveTemplate();
            }
            else if (definition.template) {
                // 3. Default to the static definition.
                this._template = definition.template || null;
            }
        }
        // If we have a template after the above process, render it.
        // If there's no template, then the element author has opted into
        // custom rendering and they will managed the shadow root's content themselves.
        if (this._template !== null) {
            this.renderTemplate(this._template);
        }
        // 1. Styles overrides take top precedence.
        if (this._styles === null) {
            if (this.element.resolveStyles) {
                // 2. Allow for element instance overrides next.
                this._styles = this.element.resolveStyles();
            }
            else if (definition.styles) {
                // 3. Default to the static definition.
                this._styles = definition.styles || null;
            }
        }
        // If we have styles after the above process, add them.
        if (this._styles !== null) {
            this.addStyles(this._styles);
        }
        this.needsInitialization = false;
    }
    renderTemplate(template) {
        const element = this.element;
        // When getting the host to render to, we start by looking
        // up the shadow root. If there isn't one, then that means
        // we're doing a Light DOM render to the element's direct children.
        const host = getShadowRoot(element) || element;
        if (this.view !== null) {
            // If there's already a view, we need to unbind and remove through dispose.
            this.view.dispose();
            this.view = null;
        }
        else if (!this.needsInitialization) {
            // If there was previous custom rendering, we need to clear out the host.
            _dom__WEBPACK_IMPORTED_MODULE_2__.DOM.removeChildNodes(host);
        }
        if (template) {
            // If a new template was provided, render it.
            this.view = template.render(element, host, element);
        }
    }
    /**
     * Locates or creates a controller for the specified element.
     * @param element - The element to return the controller for.
     * @remarks
     * The specified element must have a {@link FASTElementDefinition}
     * registered either through the use of the {@link customElement}
     * decorator or a call to `FASTElement.define`.
     */
    static forCustomElement(element) {
        const controller = element.$fastController;
        if (controller !== void 0) {
            return controller;
        }
        const definition = _fast_definitions__WEBPACK_IMPORTED_MODULE_3__.FASTElementDefinition.forType(element.constructor);
        if (definition === void 0) {
            throw new Error("Missing FASTElement definition.");
        }
        return (element.$fastController = new Controller(element, definition));
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FASTElementDefinition": () => (/* binding */ FASTElementDefinition)
/* harmony export */ });
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observation/observable */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _styles_element_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/element-styles */ "./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");



const defaultShadowOptions = { mode: "open" };
const defaultElementOptions = {};
const fastDefinitions = new Map();
/**
 * Defines metadata for a FASTElement.
 * @public
 */
class FASTElementDefinition {
    /**
     * Creates an instance of FASTElementDefinition.
     * @param type - The type this definition is being created for.
     * @param nameOrConfig - The name of the element to define or a config object
     * that describes the element to define.
     */
    constructor(type, nameOrConfig = type.definition) {
        if (typeof nameOrConfig === "string") {
            nameOrConfig = { name: nameOrConfig };
        }
        this.type = type;
        this.name = nameOrConfig.name;
        this.template = nameOrConfig.template;
        const attributes = _attributes__WEBPACK_IMPORTED_MODULE_0__.AttributeDefinition.collect(type, nameOrConfig.attributes);
        const observedAttributes = new Array(attributes.length);
        const propertyLookup = {};
        const attributeLookup = {};
        for (let i = 0, ii = attributes.length; i < ii; ++i) {
            const current = attributes[i];
            observedAttributes[i] = current.attribute;
            propertyLookup[current.name] = current;
            attributeLookup[current.attribute] = current;
        }
        this.attributes = attributes;
        this.observedAttributes = observedAttributes;
        this.propertyLookup = propertyLookup;
        this.attributeLookup = attributeLookup;
        this.shadowOptions =
            nameOrConfig.shadowOptions === void 0
                ? defaultShadowOptions
                : nameOrConfig.shadowOptions === null
                    ? void 0
                    : Object.assign(Object.assign({}, defaultShadowOptions), nameOrConfig.shadowOptions);
        this.elementOptions =
            nameOrConfig.elementOptions === void 0
                ? defaultElementOptions
                : Object.assign(Object.assign({}, defaultElementOptions), nameOrConfig.elementOptions);
        this.styles =
            nameOrConfig.styles === void 0
                ? void 0
                : Array.isArray(nameOrConfig.styles)
                    ? _styles_element_styles__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create(nameOrConfig.styles)
                    : nameOrConfig.styles instanceof _styles_element_styles__WEBPACK_IMPORTED_MODULE_1__.ElementStyles
                        ? nameOrConfig.styles
                        : _styles_element_styles__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create([nameOrConfig.styles]);
    }
    /**
     * Defines a custom element based on this definition.
     * @param registry - The element registry to define the element in.
     */
    define(registry = customElements) {
        const type = this.type;
        if (!this.isDefined) {
            const attributes = this.attributes;
            const proto = type.prototype;
            for (let i = 0, ii = attributes.length; i < ii; ++i) {
                _observation_observable__WEBPACK_IMPORTED_MODULE_2__.Observable.defineProperty(proto, attributes[i]);
            }
            Reflect.defineProperty(type, "observedAttributes", {
                value: this.observedAttributes,
                enumerable: true,
            });
            fastDefinitions.set(type, this);
            this.isDefined = true;
        }
        if (!registry.get(this.name)) {
            registry.define(this.name, type, this.elementOptions);
        }
        return this;
    }
    /**
     * Gets the element definition associated with the specified type.
     * @param type - The custom element type to retrieve the definition for.
     */
    static forType(type) {
        return fastDefinitions.get(type);
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FASTElement": () => (/* binding */ FASTElement),
/* harmony export */   "customElement": () => (/* binding */ customElement)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./node_modules/@microsoft/fast-element/dist/esm/components/controller.js");
/* harmony import */ var _fast_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fast-definitions */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js");


/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
function createFASTElement(BaseType) {
    return class extends BaseType {
        constructor() {
            /* eslint-disable-next-line */
            super();
            _controller__WEBPACK_IMPORTED_MODULE_0__.Controller.forCustomElement(this);
        }
        $emit(type, detail, options) {
            return this.$fastController.emit(type, detail, options);
        }
        connectedCallback() {
            this.$fastController.onConnectedCallback();
        }
        disconnectedCallback() {
            this.$fastController.onDisconnectedCallback();
        }
        attributeChangedCallback(name, oldValue, newValue) {
            this.$fastController.onAttributeChangedCallback(name, oldValue, newValue);
        }
    };
}
/**
 * A minimal base class for FASTElements that also provides
 * static helpers for working with FASTElements.
 * @public
 */
const FASTElement = Object.assign(createFASTElement(HTMLElement), {
    /**
     * Creates a new FASTElement base class inherited from the
     * provided base type.
     * @param BaseType - The base element type to inherit from.
     */
    from(BaseType) {
        return createFASTElement(BaseType);
    },
    /**
     * Defines a platform custom element based on the provided type and definition.
     * @param type - The custom element type to define.
     * @param nameOrDef - The name of the element to define or a definition object
     * that describes the element to define.
     */
    define(type, nameOrDef) {
        return new _fast_definitions__WEBPACK_IMPORTED_MODULE_1__.FASTElementDefinition(type, nameOrDef).define().type;
    },
});
/**
 * Decorator: Defines a platform custom element based on `FASTElement`.
 * @param nameOrDef - The name of the element to define or a definition object
 * that describes the element to define.
 * @public
 */
function customElement(nameOrDef) {
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
    return function (type) {
        new _fast_definitions__WEBPACK_IMPORTED_MODULE_1__.FASTElementDefinition(type, nameOrDef).define();
    };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/dom.js":
/*!**************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/dom.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_interpolationStart": () => (/* binding */ _interpolationStart),
/* harmony export */   "_interpolationEnd": () => (/* binding */ _interpolationEnd),
/* harmony export */   "DOM": () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");

const updateQueue = [];
/* eslint-disable */
const fastHTMLPolicy = _platform__WEBPACK_IMPORTED_MODULE_0__.$global.trustedTypes.createPolicy("fast-html", {
    createHTML: html => html,
});
/* eslint-enable */
let htmlPolicy = fastHTMLPolicy;
// We use a queue so we can ensure errors are thrown in order.
const pendingErrors = [];
function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}
function tryRunTask(task) {
    try {
        task.call();
    }
    catch (error) {
        pendingErrors.push(error);
        setTimeout(throwFirstError, 0);
    }
}
const marker = `fast-${Math.random().toString(36).substring(2, 8)}`;
/** @internal */
const _interpolationStart = `${marker}{`;
/** @internal */
const _interpolationEnd = `}${marker}`;
/**
 * Common DOM APIs.
 * @public
 */
const DOM = Object.freeze({
    /**
     * Indicates whether the DOM supports the adoptedStyleSheets feature.
     */
    supportsAdoptedStyleSheets: Array.isArray(document.adoptedStyleSheets) &&
        "replace" in CSSStyleSheet.prototype,
    /**
     * Sets the HTML trusted types policy used by the templating engine.
     * @param policy - The policy to set for HTML.
     * @remarks
     * This API can only be called once, for security reasons. It should be
     * called by the application developer at the start of their program.
     */
    setHTMLPolicy(policy) {
        if (htmlPolicy !== fastHTMLPolicy) {
            throw new Error("The HTML policy can only be set once.");
        }
        htmlPolicy = policy;
    },
    /**
     * Turns a string into trusted HTML using the configured trusted types policy.
     * @param html - The string to turn into trusted HTML.
     * @remarks
     * Used internally by the template engine when creating templates
     * and setting innerHTML.
     */
    createHTML(html) {
        return htmlPolicy.createHTML(html);
    },
    /**
     * Determines if the provided node is a template marker used by the runtime.
     * @param node - The node to test.
     */
    isMarker(node) {
        return node && node.nodeType === 8 && node.data.startsWith(marker);
    },
    /**
     * Given a marker node, extract the {@link HTMLDirective} index from the placeholder.
     * @param node - The marker node to extract the index from.
     */
    extractDirectiveIndexFromMarker(node) {
        return parseInt(node.data.replace(`${marker}:`, ""));
    },
    /**
     * Creates a placeholder string suitable for marking out a location *within*
     * an attribute value or HTML content.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by binding directives.
     */
    createInterpolationPlaceholder(index) {
        return `${_interpolationStart}${index}${_interpolationEnd}`;
    },
    /**
     * Creates a placeholder that manifests itself as an attribute on an
     * element.
     * @param attributeName - The name of the custom attribute.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by attribute directives such as `ref`, `slotted`, and `children`.
     */
    createCustomAttributePlaceholder(attributeName, index) {
        return `${attributeName}="${this.createInterpolationPlaceholder(index)}"`;
    },
    /**
     * Creates a placeholder that manifests itself as a marker within the DOM structure.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by structural directives such as `repeat`.
     */
    createBlockPlaceholder(index) {
        return `<!--${marker}:${index}-->`;
    },
    /**
     * Schedules DOM update work in the next async batch.
     * @param callable - The callable function or object to queue.
     */
    queueUpdate(callable) {
        if (updateQueue.length < 1) {
            window.requestAnimationFrame(DOM.processUpdates);
        }
        updateQueue.push(callable);
    },
    /**
     * Immediately processes all work previously scheduled
     * through queueUpdate.
     * @remarks
     * This also forces nextUpdate promises
     * to resolve.
     */
    processUpdates() {
        const capacity = 1024;
        let index = 0;
        while (index < updateQueue.length) {
            tryRunTask(updateQueue[index]);
            index++;
            // Prevent leaking memory for long chains of recursive calls to `DOM.queueUpdate`.
            // If we call `DOM.queueUpdate` within a task scheduled by `DOM.queueUpdate`, the queue will
            // grow, but to avoid an O(n) walk for every task we execute, we don't
            // shift tasks off the queue after they have been executed.
            // Instead, we periodically shift 1024 tasks off the queue.
            if (index > capacity) {
                // Manually shift all values starting at the index back to the
                // beginning of the queue.
                for (let scan = 0, newLength = updateQueue.length - index; scan < newLength; scan++) {
                    updateQueue[scan] = updateQueue[scan + index];
                }
                updateQueue.length -= index;
                index = 0;
            }
        }
        updateQueue.length = 0;
    },
    /**
     * Resolves with the next DOM update.
     */
    nextUpdate() {
        return new Promise((resolve) => {
            DOM.queueUpdate(resolve);
        });
    },
    /**
     * Sets an attribute value on an element.
     * @param element - The element to set the attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is `null` or `undefined`, the attribute is removed, otherwise
     * it is set to the provided value using the standard `setAttribute` API.
     */
    setAttribute(element, attributeName, value) {
        if (value === null || value === undefined) {
            element.removeAttribute(attributeName);
        }
        else {
            element.setAttribute(attributeName, value);
        }
    },
    /**
     * Sets a boolean attribute value.
     * @param element - The element to set the boolean attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is true, the attribute is added; otherwise it is removed.
     */
    setBooleanAttribute(element, attributeName, value) {
        value
            ? element.setAttribute(attributeName, "")
            : element.removeAttribute(attributeName);
    },
    /**
     * Removes all the child nodes of the provided parent node.
     * @param parent - The node to remove the children from.
     */
    removeChildNodes(parent) {
        for (let child = parent.firstChild; child !== null; child = parent.firstChild) {
            parent.removeChild(child);
        }
    },
    /**
     * Creates a TreeWalker configured to walk a template fragment.
     * @param fragment - The fragment to walk.
     */
    createTemplateWalker(fragment) {
        return document.createTreeWalker(fragment, 133, // element, text, comment
        null, false);
    },
});


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/observation/array-change-records.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/observation/array-change-records.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newSplice": () => (/* binding */ newSplice),
/* harmony export */   "calcSplices": () => (/* binding */ calcSplices),
/* harmony export */   "projectArraySplices": () => (/* binding */ projectArraySplices)
/* harmony export */ });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");

/** @internal */
function newSplice(index, removed, addedCount) {
    return {
        index: index,
        removed: removed,
        addedCount: addedCount,
    };
}
const EDIT_LEAVE = 0;
const EDIT_UPDATE = 1;
const EDIT_ADD = 2;
const EDIT_DELETE = 3;
// Note: This function is *based* on the computation of the Levenshtein
// "edit" distance. The one change is that "updates" are treated as two
// edits - not one. With Array splices, an update is really a delete
// followed by an add. By retaining this, we optimize for "keeping" the
// maximum array items in the original array. For example:
//
//   'xxxx123' -> '123yyyy'
//
// With 1-edit updates, the shortest path would be just to update all seven
// characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
// leaves the substring '123' intact.
function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    // "Deletion" columns
    const rowCount = oldEnd - oldStart + 1;
    const columnCount = currentEnd - currentStart + 1;
    const distances = new Array(rowCount);
    let north;
    let west;
    // "Addition" rows. Initialize null column.
    for (let i = 0; i < rowCount; ++i) {
        distances[i] = new Array(columnCount);
        distances[i][0] = i;
    }
    // Initialize null row
    for (let j = 0; j < columnCount; ++j) {
        distances[0][j] = j;
    }
    for (let i = 1; i < rowCount; ++i) {
        for (let j = 1; j < columnCount; ++j) {
            if (current[currentStart + j - 1] === old[oldStart + i - 1]) {
                distances[i][j] = distances[i - 1][j - 1];
            }
            else {
                north = distances[i - 1][j] + 1;
                west = distances[i][j - 1] + 1;
                distances[i][j] = north < west ? north : west;
            }
        }
    }
    return distances;
}
// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function spliceOperationsFromEditDistances(distances) {
    let i = distances.length - 1;
    let j = distances[0].length - 1;
    let current = distances[i][j];
    const edits = [];
    while (i > 0 || j > 0) {
        if (i === 0) {
            edits.push(EDIT_ADD);
            j--;
            continue;
        }
        if (j === 0) {
            edits.push(EDIT_DELETE);
            i--;
            continue;
        }
        const northWest = distances[i - 1][j - 1];
        const west = distances[i - 1][j];
        const north = distances[i][j - 1];
        let min;
        if (west < north) {
            min = west < northWest ? west : northWest;
        }
        else {
            min = north < northWest ? north : northWest;
        }
        if (min === northWest) {
            if (northWest === current) {
                edits.push(EDIT_LEAVE);
            }
            else {
                edits.push(EDIT_UPDATE);
                current = northWest;
            }
            i--;
            j--;
        }
        else if (min === west) {
            edits.push(EDIT_DELETE);
            i--;
            current = west;
        }
        else {
            edits.push(EDIT_ADD);
            j--;
            current = north;
        }
    }
    edits.reverse();
    return edits;
}
function sharedPrefix(current, old, searchLength) {
    for (let i = 0; i < searchLength; ++i) {
        if (current[i] !== old[i]) {
            return i;
        }
    }
    return searchLength;
}
function sharedSuffix(current, old, searchLength) {
    let index1 = current.length;
    let index2 = old.length;
    let count = 0;
    while (count < searchLength && current[--index1] === old[--index2]) {
        count++;
    }
    return count;
}
function intersect(start1, end1, start2, end2) {
    // Disjoint
    if (end1 < start2 || end2 < start1) {
        return -1;
    }
    // Adjacent
    if (end1 === start2 || end2 === start1) {
        return 0;
    }
    // Non-zero intersect, span1 first
    if (start1 < start2) {
        if (end1 < end2) {
            return end1 - start2; // Overlap
        }
        return end2 - start2; // Contained
    }
    // Non-zero intersect, span2 first
    if (end2 < end1) {
        return end2 - start1; // Overlap
    }
    return end1 - start1; // Contained
}
/**
 * Splice Projection functions:
 *
 * A splice map is a representation of how a previous array of items
 * was transformed into a new array of items. Conceptually it is a list of
 * tuples of
 *
 *   <index, removed, addedCount>
 *
 * which are kept in ascending index order of. The tuple represents that at
 * the |index|, |removed| sequence of items were removed, and counting forward
 * from |index|, |addedCount| items were added.
 */
/**
 * @internal
 * @remarks
 * Lacking individual splice mutation information, the minimal set of
 * splices can be synthesized given the previous state and final state of an
 * array. The basic approach is to calculate the edit distance matrix and
 * choose the shortest path through it.
 *
 * Complexity: O(l * p)
 *   l: The length of the current array
 *   p: The length of the old array
 */
function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    let prefixCount = 0;
    let suffixCount = 0;
    const minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
    if (currentStart === 0 && oldStart === 0) {
        prefixCount = sharedPrefix(current, old, minLength);
    }
    if (currentEnd === current.length && oldEnd === old.length) {
        suffixCount = sharedSuffix(current, old, minLength - prefixCount);
    }
    currentStart += prefixCount;
    oldStart += prefixCount;
    currentEnd -= suffixCount;
    oldEnd -= suffixCount;
    if (currentEnd - currentStart === 0 && oldEnd - oldStart === 0) {
        return _platform__WEBPACK_IMPORTED_MODULE_0__.emptyArray;
    }
    if (currentStart === currentEnd) {
        const splice = newSplice(currentStart, [], 0);
        while (oldStart < oldEnd) {
            splice.removed.push(old[oldStart++]);
        }
        return [splice];
    }
    else if (oldStart === oldEnd) {
        return [newSplice(currentStart, [], currentEnd - currentStart)];
    }
    const ops = spliceOperationsFromEditDistances(calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
    const splices = [];
    let splice = void 0;
    let index = currentStart;
    let oldIndex = oldStart;
    for (let i = 0; i < ops.length; ++i) {
        switch (ops[i]) {
            case EDIT_LEAVE:
                if (splice !== void 0) {
                    splices.push(splice);
                    splice = void 0;
                }
                index++;
                oldIndex++;
                break;
            case EDIT_UPDATE:
                if (splice === void 0) {
                    splice = newSplice(index, [], 0);
                }
                splice.addedCount++;
                index++;
                splice.removed.push(old[oldIndex]);
                oldIndex++;
                break;
            case EDIT_ADD:
                if (splice === void 0) {
                    splice = newSplice(index, [], 0);
                }
                splice.addedCount++;
                index++;
                break;
            case EDIT_DELETE:
                if (splice === void 0) {
                    splice = newSplice(index, [], 0);
                }
                splice.removed.push(old[oldIndex]);
                oldIndex++;
                break;
            // no default
        }
    }
    if (splice !== void 0) {
        splices.push(splice);
    }
    return splices;
}
const $push = Array.prototype.push;
function mergeSplice(splices, index, removed, addedCount) {
    const splice = newSplice(index, removed, addedCount);
    let inserted = false;
    let insertionOffset = 0;
    for (let i = 0; i < splices.length; i++) {
        const current = splices[i];
        current.index += insertionOffset;
        if (inserted) {
            continue;
        }
        const intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);
        if (intersectCount >= 0) {
            // Merge the two splices
            splices.splice(i, 1);
            i--;
            insertionOffset -= current.addedCount - current.removed.length;
            splice.addedCount += current.addedCount - intersectCount;
            const deleteCount = splice.removed.length + current.removed.length - intersectCount;
            if (!splice.addedCount && !deleteCount) {
                // merged splice is a noop. discard.
                inserted = true;
            }
            else {
                let currentRemoved = current.removed;
                if (splice.index < current.index) {
                    // some prefix of splice.removed is prepended to current.removed.
                    const prepend = splice.removed.slice(0, current.index - splice.index);
                    $push.apply(prepend, currentRemoved);
                    currentRemoved = prepend;
                }
                if (splice.index + splice.removed.length >
                    current.index + current.addedCount) {
                    // some suffix of splice.removed is appended to current.removed.
                    const append = splice.removed.slice(current.index + current.addedCount - splice.index);
                    $push.apply(currentRemoved, append);
                }
                splice.removed = currentRemoved;
                if (current.index < splice.index) {
                    splice.index = current.index;
                }
            }
        }
        else if (splice.index < current.index) {
            // Insert splice here.
            inserted = true;
            splices.splice(i, 0, splice);
            i++;
            const offset = splice.addedCount - splice.removed.length;
            current.index += offset;
            insertionOffset += offset;
        }
    }
    if (!inserted) {
        splices.push(splice);
    }
}
function createInitialSplices(changeRecords) {
    const splices = [];
    for (let i = 0, ii = changeRecords.length; i < ii; i++) {
        const record = changeRecords[i];
        mergeSplice(splices, record.index, record.removed, record.addedCount);
    }
    return splices;
}
/** @internal */
function projectArraySplices(array, changeRecords) {
    let splices = [];
    const initialSplices = createInitialSplices(changeRecords);
    for (let i = 0, ii = initialSplices.length; i < ii; ++i) {
        const splice = initialSplices[i];
        if (splice.addedCount === 1 && splice.removed.length === 1) {
            if (splice.removed[0] !== array[splice.index]) {
                splices.push(splice);
            }
            continue;
        }
        splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
    }
    return splices;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/observation/array-observer.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/observation/array-observer.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableArrayObservation": () => (/* binding */ enableArrayObservation)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _array_change_records__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array-change-records */ "./node_modules/@microsoft/fast-element/dist/esm/observation/array-change-records.js");
/* harmony import */ var _notifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifier */ "./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js");
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observable */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");




let arrayObservationEnabled = false;
function adjustIndex(changeRecord, array) {
    let index = changeRecord.index;
    const arrayLength = array.length;
    if (index > arrayLength) {
        index = arrayLength - changeRecord.addedCount;
    }
    else if (index < 0) {
        index =
            arrayLength + changeRecord.removed.length + index - changeRecord.addedCount;
    }
    if (index < 0) {
        index = 0;
    }
    changeRecord.index = index;
    return changeRecord;
}
class ArrayObserver extends _notifier__WEBPACK_IMPORTED_MODULE_0__.SubscriberSet {
    constructor(source) {
        super(source);
        this.oldCollection = void 0;
        this.splices = void 0;
        this.needsQueue = true;
        this.call = this.flush;
        source.$fastController = this;
    }
    addSplice(splice) {
        if (this.splices === void 0) {
            this.splices = [splice];
        }
        else {
            this.splices.push(splice);
        }
        if (this.needsQueue) {
            this.needsQueue = false;
            _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(this);
        }
    }
    reset(oldCollection) {
        this.oldCollection = oldCollection;
        if (this.needsQueue) {
            this.needsQueue = false;
            _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(this);
        }
    }
    flush() {
        const splices = this.splices;
        const oldCollection = this.oldCollection;
        if (splices === void 0 && oldCollection === void 0) {
            return;
        }
        this.needsQueue = true;
        this.splices = void 0;
        this.oldCollection = void 0;
        const finalSplices = oldCollection === void 0
            ? (0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.projectArraySplices)(this.source, splices)
            : (0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.calcSplices)(this.source, 0, this.source.length, oldCollection, 0, oldCollection.length);
        this.notify(finalSplices);
    }
}
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Enables the array observation mechanism.
 * @remarks
 * Array observation is enabled automatically when using the
 * {@link RepeatDirective}, so calling this API manually is
 * not typically necessary.
 * @public
 */
function enableArrayObservation() {
    if (arrayObservationEnabled) {
        return;
    }
    arrayObservationEnabled = true;
    _observable__WEBPACK_IMPORTED_MODULE_3__.Observable.setArrayObserverFactory((collection) => {
        return new ArrayObserver(collection);
    });
    const arrayProto = Array.prototype;
    const pop = arrayProto.pop;
    const push = arrayProto.push;
    const reverse = arrayProto.reverse;
    const shift = arrayProto.shift;
    const sort = arrayProto.sort;
    const splice = arrayProto.splice;
    const unshift = arrayProto.unshift;
    arrayProto.pop = function () {
        const notEmpty = this.length > 0;
        const methodCallResult = pop.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0 && notEmpty) {
            o.addSplice((0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.newSplice)(this.length, [methodCallResult], 0));
        }
        return methodCallResult;
    };
    arrayProto.push = function () {
        const methodCallResult = push.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0) {
            o.addSplice(adjustIndex((0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.newSplice)(this.length - arguments.length, [], arguments.length), this));
        }
        return methodCallResult;
    };
    arrayProto.reverse = function () {
        let oldArray;
        const o = this.$fastController;
        if (o !== void 0) {
            o.flush();
            oldArray = this.slice();
        }
        const methodCallResult = reverse.apply(this, arguments);
        if (o !== void 0) {
            o.reset(oldArray);
        }
        return methodCallResult;
    };
    arrayProto.shift = function () {
        const notEmpty = this.length > 0;
        const methodCallResult = shift.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0 && notEmpty) {
            o.addSplice((0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.newSplice)(0, [methodCallResult], 0));
        }
        return methodCallResult;
    };
    arrayProto.sort = function () {
        let oldArray;
        const o = this.$fastController;
        if (o !== void 0) {
            o.flush();
            oldArray = this.slice();
        }
        const methodCallResult = sort.apply(this, arguments);
        if (o !== void 0) {
            o.reset(oldArray);
        }
        return methodCallResult;
    };
    arrayProto.splice = function () {
        const methodCallResult = splice.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0) {
            o.addSplice(adjustIndex((0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.newSplice)(+arguments[0], methodCallResult, arguments.length > 2 ? arguments.length - 2 : 0), this));
        }
        return methodCallResult;
    };
    arrayProto.unshift = function () {
        const methodCallResult = unshift.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0) {
            o.addSplice(adjustIndex((0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.newSplice)(0, [], arguments.length), this));
        }
        return methodCallResult;
    };
}
/* eslint-enable prefer-rest-params */
/* eslint-enable @typescript-eslint/explicit-function-return-type */


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriberSet": () => (/* binding */ SubscriberSet),
/* harmony export */   "PropertyChangeNotifier": () => (/* binding */ PropertyChangeNotifier)
/* harmony export */ });
function spilloverSubscribe(subscriber) {
    const spillover = this.spillover;
    const index = spillover.indexOf(subscriber);
    if (index === -1) {
        spillover.push(subscriber);
    }
}
function spilloverUnsubscribe(subscriber) {
    const spillover = this.spillover;
    const index = spillover.indexOf(subscriber);
    if (index !== -1) {
        spillover.splice(index, 1);
    }
}
function spilloverNotifySubscribers(args) {
    const spillover = this.spillover;
    const source = this.source;
    for (let i = 0, ii = spillover.length; i < ii; ++i) {
        spillover[i].handleChange(source, args);
    }
}
function spilloverHas(subscriber) {
    return this.spillover.indexOf(subscriber) !== -1;
}
/**
 * An implementation of {@link Notifier} that efficiently keeps track of
 * subscribers interested in a specific change notification on an
 * observable source.
 *
 * @remarks
 * This set is optimized for the most common scenario of 1 or 2 subscribers.
 * With this in mind, it can store a subscriber in an internal field, allowing it to avoid Array#push operations.
 * If the set ever exceeds two subscribers, it upgrades to an array automatically.
 * @public
 */
class SubscriberSet {
    /**
     * Creates an instance of SubscriberSet for the specified source.
     * @param source - The object source that subscribers will receive notifications from.
     * @param initialSubscriber - An initial subscriber to changes.
     */
    constructor(source, initialSubscriber) {
        this.sub1 = void 0;
        this.sub2 = void 0;
        this.spillover = void 0;
        this.source = source;
        this.sub1 = initialSubscriber;
    }
    /**
     * Checks whether the provided subscriber has been added to this set.
     * @param subscriber - The subscriber to test for inclusion in this set.
     */
    has(subscriber) {
        return this.sub1 === subscriber || this.sub2 === subscriber;
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     */
    subscribe(subscriber) {
        if (this.has(subscriber)) {
            return;
        }
        if (this.sub1 === void 0) {
            this.sub1 = subscriber;
            return;
        }
        if (this.sub2 === void 0) {
            this.sub2 = subscriber;
            return;
        }
        this.spillover = [this.sub1, this.sub2, subscriber];
        this.subscribe = spilloverSubscribe;
        this.unsubscribe = spilloverUnsubscribe;
        this.notify = spilloverNotifySubscribers;
        this.has = spilloverHas;
        this.sub1 = void 0;
        this.sub2 = void 0;
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     */
    unsubscribe(subscriber) {
        if (this.sub1 === subscriber) {
            this.sub1 = void 0;
        }
        else if (this.sub2 === subscriber) {
            this.sub2 = void 0;
        }
    }
    /**
     * Notifies all subscribers.
     * @param args - Data passed along to subscribers during notification.
     */
    notify(args) {
        const sub1 = this.sub1;
        const sub2 = this.sub2;
        const source = this.source;
        if (sub1 !== void 0) {
            sub1.handleChange(source, args);
        }
        if (sub2 !== void 0) {
            sub2.handleChange(source, args);
        }
    }
}
/**
 * An implementation of Notifier that allows subscribers to be notified
 * of individual property changes on an object.
 * @public
 */
class PropertyChangeNotifier {
    /**
     * Creates an instance of PropertyChangeNotifier for the specified source.
     * @param source - The object source that subscribers will receive notifications from.
     */
    constructor(source) {
        this.subscribers = {};
        this.sourceSubscribers = null;
        this.source = source;
    }
    /**
     * Notifies all subscribers, based on the specified property.
     * @param propertyName - The property name, passed along to subscribers during notification.
     */
    notify(propertyName) {
        var _a;
        const subscribers = this.subscribers[propertyName];
        if (subscribers !== void 0) {
            subscribers.notify(propertyName);
        }
        (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.notify(propertyName);
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     * @param propertyToWatch - The name of the property that the subscriber is interested in watching for changes.
     */
    subscribe(subscriber, propertyToWatch) {
        var _a;
        if (propertyToWatch) {
            let subscribers = this.subscribers[propertyToWatch];
            if (subscribers === void 0) {
                this.subscribers[propertyToWatch] = subscribers = new SubscriberSet(this.source);
            }
            subscribers.subscribe(subscriber);
        }
        else {
            this.sourceSubscribers = (_a = this.sourceSubscribers) !== null && _a !== void 0 ? _a : new SubscriberSet(this.source);
            this.sourceSubscribers.subscribe(subscriber);
        }
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     * @param propertyToUnwatch - The name of the property that the subscriber is no longer interested in watching.
     */
    unsubscribe(subscriber, propertyToUnwatch) {
        var _a;
        if (propertyToUnwatch) {
            const subscribers = this.subscribers[propertyToUnwatch];
            if (subscribers !== void 0) {
                subscribers.unsubscribe(subscriber);
            }
        }
        else {
            (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.unsubscribe(subscriber);
        }
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable),
/* harmony export */   "observable": () => (/* binding */ observable),
/* harmony export */   "volatile": () => (/* binding */ volatile),
/* harmony export */   "setCurrentEvent": () => (/* binding */ setCurrentEvent),
/* harmony export */   "ExecutionContext": () => (/* binding */ ExecutionContext),
/* harmony export */   "defaultExecutionContext": () => (/* binding */ defaultExecutionContext)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _notifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifier */ "./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js");


const volatileRegex = /(:|&&|\|\||if)/;
const notifierLookup = new WeakMap();
const accessorLookup = new WeakMap();
let watcher = void 0;
let createArrayObserver = (array) => {
    throw new Error("Must call enableArrayObservation before observing arrays.");
};
class DefaultObservableAccessor {
    constructor(name) {
        this.name = name;
        this.field = `_${name}`;
        this.callback = `${name}Changed`;
    }
    getValue(source) {
        if (watcher !== void 0) {
            watcher.watch(source, this.name);
        }
        return source[this.field];
    }
    setValue(source, newValue) {
        const field = this.field;
        const oldValue = source[field];
        if (oldValue !== newValue) {
            source[field] = newValue;
            const callback = source[this.callback];
            if (typeof callback === "function") {
                callback.call(source, oldValue, newValue);
            }
            /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
            getNotifier(source).notify(this.name);
        }
    }
}
/**
 * Common Observable APIs.
 * @public
 */
const Observable = Object.freeze({
    /**
     * @internal
     * @param factory - The factory used to create array observers.
     */
    setArrayObserverFactory(factory) {
        createArrayObserver = factory;
    },
    /**
     * Gets a notifier for an object or Array.
     * @param source - The object or Array to get the notifier for.
     */
    getNotifier(source) {
        let found = source.$fastController || notifierLookup.get(source);
        if (found === void 0) {
            if (Array.isArray(source)) {
                found = createArrayObserver(source);
            }
            else {
                notifierLookup.set(source, (found = new _notifier__WEBPACK_IMPORTED_MODULE_0__.PropertyChangeNotifier(source)));
            }
        }
        return found;
    },
    /**
     * Records a property change for a source object.
     * @param source - The object to record the change against.
     * @param propertyName - The property to track as changed.
     */
    track(source, propertyName) {
        if (watcher !== void 0) {
            watcher.watch(source, propertyName);
        }
    },
    /**
     * Notifies watchers that the currently executing property getter or function is volatile
     * with respect to its observable dependencies.
     */
    trackVolatile() {
        if (watcher !== void 0) {
            watcher.needsRefresh = true;
        }
    },
    /**
     * Notifies subscribers of a source object of changes.
     * @param source - the object to notify of changes.
     * @param args - The change args to pass to subscribers.
     */
    notify(source, args) {
        /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
        getNotifier(source).notify(args);
    },
    /**
     * Defines an observable property on an object or prototype.
     * @param target - The target object to define the observable on.
     * @param nameOrAccessor - The name of the property to define as observable;
     * or a custom accessor that specifies the property name and accessor implementation.
     */
    defineProperty(target, nameOrAccessor) {
        if (typeof nameOrAccessor === "string") {
            nameOrAccessor = new DefaultObservableAccessor(nameOrAccessor);
        }
        this.getAccessors(target).push(nameOrAccessor);
        Reflect.defineProperty(target, nameOrAccessor.name, {
            enumerable: true,
            get: function () {
                return nameOrAccessor.getValue(this);
            },
            set: function (newValue) {
                nameOrAccessor.setValue(this, newValue);
            },
        });
    },
    /**
     * Finds all the observable accessors defined on the target,
     * including its prototype chain.
     * @param target - The target object to search for accessor on.
     */
    getAccessors(target) {
        let accessors = accessorLookup.get(target);
        if (accessors === void 0) {
            let currentTarget = Reflect.getPrototypeOf(target);
            while (accessors === void 0 && currentTarget !== null) {
                accessors = accessorLookup.get(currentTarget);
                currentTarget = Reflect.getPrototypeOf(currentTarget);
            }
            if (accessors === void 0) {
                accessors = [];
            }
            else {
                accessors = accessors.slice(0);
            }
            accessorLookup.set(target, accessors);
        }
        return accessors;
    },
    /**
     * Creates a {@link BindingObserver} that can watch the
     * provided {@link Binding} for changes.
     * @param binding - The binding to observe.
     * @param initialSubscriber - An initial subscriber to changes in the binding value.
     * @param isVolatileBinding - Indicates whether the binding's dependency list must be re-evaluated on every value evaluation.
     */
    binding(binding, initialSubscriber, isVolatileBinding = this.isVolatileBinding(binding)) {
        /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
        return new BindingObserverImplementation(binding, initialSubscriber, isVolatileBinding);
    },
    /**
     * Determines whether a binding expression is volatile and needs to have its dependency list re-evaluated
     * on every evaluation of the value.
     * @param binding - The binding to inspect.
     */
    isVolatileBinding(binding) {
        return volatileRegex.test(binding.toString());
    },
});
const getNotifier = Observable.getNotifier;
const trackVolatile = Observable.trackVolatile;
const queueUpdate = _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate;
/**
 * Decorator: Defines an observable property on the target.
 * @param target - The target to define the observable on.
 * @param nameOrAccessor - The property name or accessor to define the observable as.
 * @public
 */
function observable(target, nameOrAccessor) {
    Observable.defineProperty(target, nameOrAccessor);
}
/**
 * Decorator: Marks a property getter as having volatile observable dependencies.
 * @param target - The target that the property is defined on.
 * @param name - The property name.
 * @param name - The existing descriptor.
 * @public
 */
function volatile(target, name, descriptor) {
    return Object.assign({}, descriptor, {
        get: function () {
            trackVolatile();
            return descriptor.get.apply(this);
        },
    });
}
let currentEvent = null;
/**
 * @param event - The event to set as current for the context.
 * @internal
 */
function setCurrentEvent(event) {
    currentEvent = event;
}
/**
 * Provides additional contextual information available to behaviors and expressions.
 * @public
 */
class ExecutionContext {
    constructor() {
        /**
         * The index of the current item within a repeat context.
         */
        this.index = 0;
        /**
         * The length of the current collection within a repeat context.
         */
        this.length = 0;
        /**
         * The parent data object within a repeat context.
         */
        this.parent = null;
        /**
         * The parent execution context when in nested context scenarios.
         */
        this.parentContext = null;
    }
    /**
     * The current event within an event handler.
     */
    get event() {
        return currentEvent;
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an even index.
     */
    get isEven() {
        return this.index % 2 === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an odd index.
     */
    get isOdd() {
        return this.index % 2 !== 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the first item in the collection.
     */
    get isFirst() {
        return this.index === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is somewhere in the middle of the collection.
     */
    get isInMiddle() {
        return !this.isFirst && !this.isLast;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the last item in the collection.
     */
    get isLast() {
        return this.index === this.length - 1;
    }
}
Observable.defineProperty(ExecutionContext.prototype, "index");
Observable.defineProperty(ExecutionContext.prototype, "length");
/**
 * The default execution context used in binding expressions.
 * @public
 */
const defaultExecutionContext = Object.seal(new ExecutionContext());
class BindingObserverImplementation extends _notifier__WEBPACK_IMPORTED_MODULE_0__.SubscriberSet {
    constructor(binding, initialSubscriber, isVolatileBinding = false) {
        super(binding, initialSubscriber);
        this.binding = binding;
        this.isVolatileBinding = isVolatileBinding;
        this.needsRefresh = true;
        this.needsQueue = true;
        this.first = this;
        this.last = null;
        this.propertySource = void 0;
        this.propertyName = void 0;
        this.notifier = void 0;
        this.next = void 0;
    }
    observe(source, context) {
        if (this.needsRefresh && this.last !== null) {
            this.disconnect();
        }
        const previousWatcher = watcher;
        watcher = this.needsRefresh ? this : void 0;
        this.needsRefresh = this.isVolatileBinding;
        const result = this.binding(source, context);
        watcher = previousWatcher;
        return result;
    }
    disconnect() {
        if (this.last !== null) {
            let current = this.first;
            while (current !== void 0) {
                current.notifier.unsubscribe(this, current.propertyName);
                current = current.next;
            }
            this.last = null;
            this.needsRefresh = this.needsQueue = true;
        }
    }
    /** @internal */
    watch(propertySource, propertyName) {
        const prev = this.last;
        const notifier = getNotifier(propertySource);
        const current = prev === null ? this.first : {};
        current.propertySource = propertySource;
        current.propertyName = propertyName;
        current.notifier = notifier;
        notifier.subscribe(this, propertyName);
        if (prev !== null) {
            if (!this.needsRefresh) {
                // Declaring the variable prior to assignment below circumvents
                // a bug in Angular's optimization process causing infinite recursion
                // of this watch() method. Details https://github.com/microsoft/fast/issues/4969
                let prevValue;
                watcher = void 0;
                /* eslint-disable-next-line */
                prevValue = prev.propertySource[prev.propertyName];
                watcher = this;
                if (propertySource === prevValue) {
                    this.needsRefresh = true;
                }
            }
            prev.next = current;
        }
        this.last = current;
    }
    /** @internal */
    handleChange() {
        if (this.needsQueue) {
            this.needsQueue = false;
            queueUpdate(this);
        }
    }
    /** @internal */
    call() {
        if (this.last !== null) {
            this.needsQueue = true;
            this.notify(this);
        }
    }
    records() {
        let next = this.first;
        return {
            next: () => {
                const current = next;
                if (current === undefined) {
                    return { value: void 0, done: true };
                }
                else {
                    next = next.next;
                    return {
                        value: current,
                        done: false,
                    };
                }
            },
            [Symbol.iterator]: function () {
                return this;
            },
        };
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/platform.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/platform.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$global": () => (/* binding */ $global),
/* harmony export */   "emptyArray": () => (/* binding */ emptyArray)
/* harmony export */ });
/**
 * A reference to globalThis, with support
 * for browsers that don't yet support the spec.
 * @public
 */
const $global = (function () {
    if (typeof globalThis !== "undefined") {
        // We're running in a modern environment.
        return globalThis;
    }
    if (typeof __webpack_require__.g !== "undefined") {
        // We're running in NodeJS
        return __webpack_require__.g;
    }
    if (typeof self !== "undefined") {
        // We're running in a worker.
        return self;
    }
    if (typeof window !== "undefined") {
        // We're running in the browser's main thread.
        return window;
    }
    try {
        // Hopefully we never get here...
        // Not all environments allow eval and Function. Use only as a last resort:
        // eslint-disable-next-line no-new-func
        return new Function("return this")();
    }
    catch (_a) {
        // If all fails, give up and create an object.
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return {};
    }
})();
// API-only Polyfill for trustedTypes
if ($global.trustedTypes === void 0) {
    $global.trustedTypes = { createPolicy: (n, r) => r };
}
/**
 * A readonly, empty array.
 * @remarks
 * Typically returned by APIs that return arrays when there are
 * no actual items to return.
 * @internal
 */
const emptyArray = Object.freeze([]);


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSDirective": () => (/* binding */ CSSDirective)
/* harmony export */ });
/**
 * Directive for use in {@link css}.
 *
 * @public
 */
class CSSDirective {
    /**
     * Creates a CSS fragment to interpolate into the CSS document.
     * @returns - the string to interpolate into CSS
     */
    createCSS() {
        return "";
    }
    /**
     * Creates a behavior to bind to the host element.
     * @returns - the behavior to bind to the host element, or undefined.
     */
    createBehavior() {
        return undefined;
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/styles/css.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "cssPartial": () => (/* binding */ cssPartial)
/* harmony export */ });
/* harmony import */ var _css_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-directive */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js");
/* harmony import */ var _element_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-styles */ "./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js");


function collectStyles(strings, values) {
    const styles = [];
    let cssString = "";
    const behaviors = [];
    for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
        cssString += strings[i];
        let value = values[i];
        if (value instanceof _css_directive__WEBPACK_IMPORTED_MODULE_0__.CSSDirective) {
            const behavior = value.createBehavior();
            value = value.createCSS();
            if (behavior) {
                behaviors.push(behavior);
            }
        }
        if (value instanceof _element_styles__WEBPACK_IMPORTED_MODULE_1__.ElementStyles || value instanceof CSSStyleSheet) {
            if (cssString.trim() !== "") {
                styles.push(cssString);
                cssString = "";
            }
            styles.push(value);
        }
        else {
            cssString += value;
        }
    }
    cssString += strings[strings.length - 1];
    if (cssString.trim() !== "") {
        styles.push(cssString);
    }
    return {
        styles,
        behaviors,
    };
}
/**
 * Transforms a template literal string into styles.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @remarks
 * The css helper supports interpolation of strings and ElementStyle instances.
 * @public
 */
function css(strings, ...values) {
    const { styles, behaviors } = collectStyles(strings, values);
    const elementStyles = _element_styles__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create(styles);
    if (behaviors.length) {
        elementStyles.withBehaviors(...behaviors);
    }
    return elementStyles;
}
class CSSPartial extends _css_directive__WEBPACK_IMPORTED_MODULE_0__.CSSDirective {
    constructor(styles, behaviors) {
        super();
        this.behaviors = behaviors;
        this.css = "";
        const stylesheets = styles.reduce((accumulated, current) => {
            if (typeof current === "string") {
                this.css += current;
            }
            else {
                accumulated.push(current);
            }
            return accumulated;
        }, []);
        if (stylesheets.length) {
            this.styles = _element_styles__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create(stylesheets);
        }
    }
    createBehavior() {
        return this;
    }
    createCSS() {
        return this.css;
    }
    bind(el) {
        if (this.styles) {
            el.$fastController.addStyles(this.styles);
        }
        if (this.behaviors.length) {
            el.$fastController.addBehaviors(this.behaviors);
        }
    }
    unbind(el) {
        if (this.styles) {
            el.$fastController.removeStyles(this.styles);
        }
        if (this.behaviors.length) {
            el.$fastController.removeBehaviors(this.behaviors);
        }
    }
}
/**
 * Transforms a template literal string into partial CSS.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @public
 */
function cssPartial(strings, ...values) {
    const { styles, behaviors } = collectStyles(strings, values);
    return new CSSPartial(styles, behaviors);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementStyles": () => (/* binding */ ElementStyles),
/* harmony export */   "AdoptedStyleSheetsStyles": () => (/* binding */ AdoptedStyleSheetsStyles),
/* harmony export */   "StyleElementStyles": () => (/* binding */ StyleElementStyles)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");

/**
 * Represents styles that can be applied to a custom element.
 * @public
 */
class ElementStyles {
    constructor() {
        this.targets = new WeakSet();
        /** @internal */
        this.behaviors = null;
    }
    /** @internal */
    addStylesTo(target) {
        this.targets.add(target);
    }
    /** @internal */
    removeStylesFrom(target) {
        this.targets.delete(target);
    }
    /** @internal */
    isAttachedTo(target) {
        return this.targets.has(target);
    }
    /**
     * Associates behaviors with this set of styles.
     * @param behaviors - The behaviors to associate.
     */
    withBehaviors(...behaviors) {
        this.behaviors =
            this.behaviors === null ? behaviors : this.behaviors.concat(behaviors);
        return this;
    }
}
/**
 * Create ElementStyles from ComposableStyles.
 */
ElementStyles.create = (() => {
    if (_dom__WEBPACK_IMPORTED_MODULE_0__.DOM.supportsAdoptedStyleSheets) {
        const styleSheetCache = new Map();
        return (styles) => 
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        new AdoptedStyleSheetsStyles(styles, styleSheetCache);
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return (styles) => new StyleElementStyles(styles);
})();
function reduceStyles(styles) {
    return styles
        .map((x) => x instanceof ElementStyles ? reduceStyles(x.styles) : [x])
        .reduce((prev, curr) => prev.concat(curr), []);
}
function reduceBehaviors(styles) {
    return styles
        .map((x) => (x instanceof ElementStyles ? x.behaviors : null))
        .reduce((prev, curr) => {
        if (curr === null) {
            return prev;
        }
        if (prev === null) {
            prev = [];
        }
        return prev.concat(curr);
    }, null);
}
/**
 * https://wicg.github.io/construct-stylesheets/
 * https://developers.google.com/web/updates/2019/02/constructable-stylesheets
 *
 * @internal
 */
class AdoptedStyleSheetsStyles extends ElementStyles {
    constructor(styles, styleSheetCache) {
        super();
        this.styles = styles;
        this.styleSheetCache = styleSheetCache;
        this._styleSheets = void 0;
        this.behaviors = reduceBehaviors(styles);
    }
    get styleSheets() {
        if (this._styleSheets === void 0) {
            const styles = this.styles;
            const styleSheetCache = this.styleSheetCache;
            this._styleSheets = reduceStyles(styles).map((x) => {
                if (x instanceof CSSStyleSheet) {
                    return x;
                }
                let sheet = styleSheetCache.get(x);
                if (sheet === void 0) {
                    sheet = new CSSStyleSheet();
                    sheet.replaceSync(x);
                    styleSheetCache.set(x, sheet);
                }
                return sheet;
            });
        }
        return this._styleSheets;
    }
    addStylesTo(target) {
        target.adoptedStyleSheets = [...target.adoptedStyleSheets, ...this.styleSheets];
        super.addStylesTo(target);
    }
    removeStylesFrom(target) {
        const sourceSheets = this.styleSheets;
        target.adoptedStyleSheets = target.adoptedStyleSheets.filter((x) => sourceSheets.indexOf(x) === -1);
        super.removeStylesFrom(target);
    }
}
let styleClassId = 0;
function getNextStyleClass() {
    return `fast-style-class-${++styleClassId}`;
}
/**
 * @internal
 */
class StyleElementStyles extends ElementStyles {
    constructor(styles) {
        super();
        this.styles = styles;
        this.behaviors = null;
        this.behaviors = reduceBehaviors(styles);
        this.styleSheets = reduceStyles(styles);
        this.styleClass = getNextStyleClass();
    }
    addStylesTo(target) {
        const styleSheets = this.styleSheets;
        const styleClass = this.styleClass;
        target = this.normalizeTarget(target);
        for (let i = 0; i < styleSheets.length; i++) {
            const element = document.createElement("style");
            element.innerHTML = styleSheets[i];
            element.className = styleClass;
            target.append(element);
        }
        super.addStylesTo(target);
    }
    removeStylesFrom(target) {
        target = this.normalizeTarget(target);
        const styles = target.querySelectorAll(`.${this.styleClass}`);
        for (let i = 0, ii = styles.length; i < ii; ++i) {
            target.removeChild(styles[i]);
        }
        super.removeStylesFrom(target);
    }
    isAttachedTo(target) {
        return super.isAttachedTo(this.normalizeTarget(target));
    }
    normalizeTarget(target) {
        return target === document ? document.body : target;
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/binding.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/binding.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLBindingDirective": () => (/* binding */ HTMLBindingDirective),
/* harmony export */   "BindingBehavior": () => (/* binding */ BindingBehavior)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _html_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-directive */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");



function normalBind(source, context) {
    this.source = source;
    this.context = context;
    if (this.bindingObserver === null) {
        this.bindingObserver = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.binding(this.binding, this, this.isBindingVolatile);
    }
    this.updateTarget(this.bindingObserver.observe(source, context));
}
function triggerBind(source, context) {
    this.source = source;
    this.context = context;
    this.target.addEventListener(this.targetName, this);
}
function normalUnbind() {
    this.bindingObserver.disconnect();
    this.source = null;
    this.context = null;
}
function contentUnbind() {
    this.bindingObserver.disconnect();
    this.source = null;
    this.context = null;
    const view = this.target.$fastView;
    if (view !== void 0 && view.isComposed) {
        view.unbind();
        view.needsBindOnly = true;
    }
}
function triggerUnbind() {
    this.target.removeEventListener(this.targetName, this);
    this.source = null;
    this.context = null;
}
function updateAttributeTarget(value) {
    _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.setAttribute(this.target, this.targetName, value);
}
function updateBooleanAttributeTarget(value) {
    _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.setBooleanAttribute(this.target, this.targetName, value);
}
function updateContentTarget(value) {
    // If there's no actual value, then this equates to the
    // empty string for the purposes of content bindings.
    if (value === null || value === undefined) {
        value = "";
    }
    // If the value has a "create" method, then it's a template-like.
    if (value.create) {
        this.target.textContent = "";
        let view = this.target.$fastView;
        // If there's no previous view that we might be able to
        // reuse then create a new view from the template.
        if (view === void 0) {
            view = value.create();
        }
        else {
            // If there is a previous view, but it wasn't created
            // from the same template as the new value, then we
            // need to remove the old view if it's still in the DOM
            // and create a new view from the template.
            if (this.target.$fastTemplate !== value) {
                if (view.isComposed) {
                    view.remove();
                    view.unbind();
                }
                view = value.create();
            }
        }
        // It's possible that the value is the same as the previous template
        // and that there's actually no need to compose it.
        if (!view.isComposed) {
            view.isComposed = true;
            view.bind(this.source, this.context);
            view.insertBefore(this.target);
            this.target.$fastView = view;
            this.target.$fastTemplate = value;
        }
        else if (view.needsBindOnly) {
            view.needsBindOnly = false;
            view.bind(this.source, this.context);
        }
    }
    else {
        const view = this.target.$fastView;
        // If there is a view and it's currently composed into
        // the DOM, then we need to remove it.
        if (view !== void 0 && view.isComposed) {
            view.isComposed = false;
            view.remove();
            if (view.needsBindOnly) {
                view.needsBindOnly = false;
            }
            else {
                view.unbind();
            }
        }
        this.target.textContent = value;
    }
}
function updatePropertyTarget(value) {
    this.target[this.targetName] = value;
}
function updateClassTarget(value) {
    const classVersions = this.classVersions || Object.create(null);
    const target = this.target;
    let version = this.version || 0;
    // Add the classes, tracking the version at which they were added.
    if (value !== null && value !== undefined && value.length) {
        const names = value.split(/\s+/);
        for (let i = 0, ii = names.length; i < ii; ++i) {
            const currentName = names[i];
            if (currentName === "") {
                continue;
            }
            classVersions[currentName] = version;
            target.classList.add(currentName);
        }
    }
    this.classVersions = classVersions;
    this.version = version + 1;
    // If this is the first call to add classes, there's no need to remove old ones.
    if (version === 0) {
        return;
    }
    // Remove classes from the previous version.
    version -= 1;
    for (const name in classVersions) {
        if (classVersions[name] === version) {
            target.classList.remove(name);
        }
    }
}
/**
 * A directive that configures data binding to element content and attributes.
 * @public
 */
class HTMLBindingDirective extends _html_directive__WEBPACK_IMPORTED_MODULE_2__.TargetedHTMLDirective {
    /**
     * Creates an instance of BindingDirective.
     * @param binding - A binding that returns the data used to update the DOM.
     */
    constructor(binding) {
        super();
        this.binding = binding;
        this.bind = normalBind;
        this.unbind = normalUnbind;
        this.updateTarget = updateAttributeTarget;
        this.isBindingVolatile = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.isVolatileBinding(this.binding);
    }
    /**
     * Gets/sets the name of the attribute or property that this
     * binding is targeting.
     */
    get targetName() {
        return this.originalTargetName;
    }
    set targetName(value) {
        this.originalTargetName = value;
        if (value === void 0) {
            return;
        }
        switch (value[0]) {
            case ":":
                this.cleanedTargetName = value.substr(1);
                this.updateTarget = updatePropertyTarget;
                if (this.cleanedTargetName === "innerHTML") {
                    const binding = this.binding;
                    this.binding = (s, c) => _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.createHTML(binding(s, c));
                }
                break;
            case "?":
                this.cleanedTargetName = value.substr(1);
                this.updateTarget = updateBooleanAttributeTarget;
                break;
            case "@":
                this.cleanedTargetName = value.substr(1);
                this.bind = triggerBind;
                this.unbind = triggerUnbind;
                break;
            default:
                this.cleanedTargetName = value;
                if (value === "class") {
                    this.updateTarget = updateClassTarget;
                }
                break;
        }
    }
    /**
     * Makes this binding target the content of an element rather than
     * a particular attribute or property.
     */
    targetAtContent() {
        this.updateTarget = updateContentTarget;
        this.unbind = contentUnbind;
    }
    /**
     * Creates the runtime BindingBehavior instance based on the configuration
     * information stored in the BindingDirective.
     * @param target - The target node that the binding behavior should attach to.
     */
    createBehavior(target) {
        /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
        return new BindingBehavior(target, this.binding, this.isBindingVolatile, this.bind, this.unbind, this.updateTarget, this.cleanedTargetName);
    }
}
/**
 * A behavior that updates content and attributes based on a configured
 * BindingDirective.
 * @public
 */
class BindingBehavior {
    /**
     * Creates an instance of BindingBehavior.
     * @param target - The target of the data updates.
     * @param binding - The binding that returns the latest value for an update.
     * @param isBindingVolatile - Indicates whether the binding has volatile dependencies.
     * @param bind - The operation to perform during binding.
     * @param unbind - The operation to perform during unbinding.
     * @param updateTarget - The operation to perform when updating.
     * @param targetName - The name of the target attribute or property to update.
     */
    constructor(target, binding, isBindingVolatile, bind, unbind, updateTarget, targetName) {
        /** @internal */
        this.source = null;
        /** @internal */
        this.context = null;
        /** @internal */
        this.bindingObserver = null;
        this.target = target;
        this.binding = binding;
        this.isBindingVolatile = isBindingVolatile;
        this.bind = bind;
        this.unbind = unbind;
        this.updateTarget = updateTarget;
        this.targetName = targetName;
    }
    /** @internal */
    handleChange() {
        this.updateTarget(this.bindingObserver.observe(this.source, this.context));
    }
    /** @internal */
    handleEvent(event) {
        (0,_observation_observable__WEBPACK_IMPORTED_MODULE_0__.setCurrentEvent)(event);
        const result = this.binding(this.source, this.context);
        (0,_observation_observable__WEBPACK_IMPORTED_MODULE_0__.setCurrentEvent)(null);
        if (result !== true) {
            event.preventDefault();
        }
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compileTemplate": () => (/* binding */ compileTemplate)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding */ "./node_modules/@microsoft/fast-element/dist/esm/templating/binding.js");


let sharedContext = null;
class CompilationContext {
    addFactory(factory) {
        factory.targetIndex = this.targetIndex;
        this.behaviorFactories.push(factory);
    }
    captureContentBinding(directive) {
        directive.targetAtContent();
        this.addFactory(directive);
    }
    reset() {
        this.behaviorFactories = [];
        this.targetIndex = -1;
    }
    release() {
        sharedContext = this;
    }
    static borrow(directives) {
        const shareable = sharedContext || new CompilationContext();
        shareable.directives = directives;
        shareable.reset();
        sharedContext = null;
        return shareable;
    }
}
function createAggregateBinding(parts) {
    if (parts.length === 1) {
        return parts[0];
    }
    let targetName;
    const partCount = parts.length;
    const finalParts = parts.map((x) => {
        if (typeof x === "string") {
            return () => x;
        }
        targetName = x.targetName || targetName;
        return x.binding;
    });
    const binding = (scope, context) => {
        let output = "";
        for (let i = 0; i < partCount; ++i) {
            output += finalParts[i](scope, context);
        }
        return output;
    };
    const directive = new _binding__WEBPACK_IMPORTED_MODULE_0__.HTMLBindingDirective(binding);
    directive.targetName = targetName;
    return directive;
}
const interpolationEndLength = _dom__WEBPACK_IMPORTED_MODULE_1__._interpolationEnd.length;
function parseContent(context, value) {
    const valueParts = value.split(_dom__WEBPACK_IMPORTED_MODULE_1__._interpolationStart);
    if (valueParts.length === 1) {
        return null;
    }
    const bindingParts = [];
    for (let i = 0, ii = valueParts.length; i < ii; ++i) {
        const current = valueParts[i];
        const index = current.indexOf(_dom__WEBPACK_IMPORTED_MODULE_1__._interpolationEnd);
        let literal;
        if (index === -1) {
            literal = current;
        }
        else {
            const directiveIndex = parseInt(current.substring(0, index));
            bindingParts.push(context.directives[directiveIndex]);
            literal = current.substring(index + interpolationEndLength);
        }
        if (literal !== "") {
            bindingParts.push(literal);
        }
    }
    return bindingParts;
}
function compileAttributes(context, node, includeBasicValues = false) {
    const attributes = node.attributes;
    for (let i = 0, ii = attributes.length; i < ii; ++i) {
        const attr = attributes[i];
        const attrValue = attr.value;
        const parseResult = parseContent(context, attrValue);
        let result = null;
        if (parseResult === null) {
            if (includeBasicValues) {
                result = new _binding__WEBPACK_IMPORTED_MODULE_0__.HTMLBindingDirective(() => attrValue);
                result.targetName = attr.name;
            }
        }
        else {
            result = createAggregateBinding(parseResult);
        }
        if (result !== null) {
            node.removeAttributeNode(attr);
            i--;
            ii--;
            context.addFactory(result);
        }
    }
}
function compileContent(context, node, walker) {
    const parseResult = parseContent(context, node.textContent);
    if (parseResult !== null) {
        let lastNode = node;
        for (let i = 0, ii = parseResult.length; i < ii; ++i) {
            const currentPart = parseResult[i];
            const currentNode = i === 0
                ? node
                : lastNode.parentNode.insertBefore(document.createTextNode(""), lastNode.nextSibling);
            if (typeof currentPart === "string") {
                currentNode.textContent = currentPart;
            }
            else {
                currentNode.textContent = " ";
                context.captureContentBinding(currentPart);
            }
            lastNode = currentNode;
            context.targetIndex++;
            if (currentNode !== node) {
                walker.nextNode();
            }
        }
        context.targetIndex--;
    }
}
/**
 * Compiles a template and associated directives into a raw compilation
 * result which include a cloneable DocumentFragment and factories capable
 * of attaching runtime behavior to nodes within the fragment.
 * @param template - The template to compile.
 * @param directives - The directives referenced by the template.
 * @remarks
 * The template that is provided for compilation is altered in-place
 * and cannot be compiled again. If the original template must be preserved,
 * it is recommended that you clone the original and pass the clone to this API.
 * @public
 */
function compileTemplate(template, directives) {
    const fragment = template.content;
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1111864
    document.adoptNode(fragment);
    const context = CompilationContext.borrow(directives);
    compileAttributes(context, template, true);
    const hostBehaviorFactories = context.behaviorFactories;
    context.reset();
    const walker = _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.createTemplateWalker(fragment);
    let node;
    while ((node = walker.nextNode())) {
        context.targetIndex++;
        switch (node.nodeType) {
            case 1: // element node
                compileAttributes(context, node);
                break;
            case 3: // text node
                compileContent(context, node, walker);
                break;
            case 8: // comment
                if (_dom__WEBPACK_IMPORTED_MODULE_1__.DOM.isMarker(node)) {
                    context.addFactory(directives[_dom__WEBPACK_IMPORTED_MODULE_1__.DOM.extractDirectiveIndexFromMarker(node)]);
                }
        }
    }
    let targetOffset = 0;
    if (
    // If the first node in a fragment is a marker, that means it's an unstable first node,
    // because something like a when, repeat, etc. could add nodes before the marker.
    // To mitigate this, we insert a stable first node. However, if we insert a node,
    // that will alter the result of the TreeWalker. So, we also need to offset the target index.
    _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.isMarker(fragment.firstChild) ||
        // Or if there is only one node and a directive, it means the template's content
        // is *only* the directive. In that case, HTMLView.dispose() misses any nodes inserted by
        // the directive. Inserting a new node ensures proper disposal of nodes added by the directive.
        (fragment.childNodes.length === 1 && directives.length)) {
        fragment.insertBefore(document.createComment(""), fragment.firstChild);
        targetOffset = -1;
    }
    const viewBehaviorFactories = context.behaviorFactories;
    context.release();
    return {
        fragment,
        viewBehaviorFactories,
        hostBehaviorFactories,
        targetOffset,
    };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLDirective": () => (/* binding */ HTMLDirective),
/* harmony export */   "TargetedHTMLDirective": () => (/* binding */ TargetedHTMLDirective),
/* harmony export */   "AttachedBehaviorHTMLDirective": () => (/* binding */ AttachedBehaviorHTMLDirective)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");

/**
 * Instructs the template engine to apply behavior to a node.
 * @public
 */
class HTMLDirective {
    constructor() {
        /**
         * The index of the DOM node to which the created behavior will apply.
         */
        this.targetIndex = 0;
    }
}
/**
 * A {@link HTMLDirective} that targets a named attribute or property on a node.
 * @public
 */
class TargetedHTMLDirective extends HTMLDirective {
    constructor() {
        super(...arguments);
        /**
         * Creates a placeholder string based on the directive's index within the template.
         * @param index - The index of the directive within the template.
         */
        this.createPlaceholder = _dom__WEBPACK_IMPORTED_MODULE_0__.DOM.createInterpolationPlaceholder;
    }
}
/**
 * A directive that attaches special behavior to an element via a custom attribute.
 * @public
 */
class AttachedBehaviorHTMLDirective extends HTMLDirective {
    /**
     *
     * @param name - The name of the behavior; used as a custom attribute on the element.
     * @param behavior - The behavior to instantiate and attach to the element.
     * @param options - Options to pass to the behavior during creation.
     */
    constructor(name, behavior, options) {
        super();
        this.name = name;
        this.behavior = behavior;
        this.options = options;
    }
    /**
     * Creates a placeholder string based on the directive's index within the template.
     * @param index - The index of the directive within the template.
     * @remarks
     * Creates a custom attribute placeholder.
     */
    createPlaceholder(index) {
        return _dom__WEBPACK_IMPORTED_MODULE_0__.DOM.createCustomAttributePlaceholder(this.name, index);
    }
    /**
     * Creates a behavior for the provided target node.
     * @param target - The node instance to create the behavior for.
     * @remarks
     * Creates an instance of the `behavior` type this directive was constructed with
     * and passes the target and options to that `behavior`'s constructor.
     */
    createBehavior(target) {
        return new this.behavior(target, this.options);
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elements": () => (/* binding */ elements),
/* harmony export */   "NodeObservationBehavior": () => (/* binding */ NodeObservationBehavior)
/* harmony export */ });
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");


/**
 * Creates a function that can be used to filter a Node array, selecting only elements.
 * @param selector - An optional selector to restrict the filter to.
 * @public
 */
function elements(selector) {
    if (selector) {
        return function (value, index, array) {
            return value.nodeType === 1 && value.matches(selector);
        };
    }
    return function (value, index, array) {
        return value.nodeType === 1;
    };
}
/**
 * A base class for node observation.
 * @internal
 */
class NodeObservationBehavior {
    /**
     * Creates an instance of NodeObservationBehavior.
     * @param target - The target to assign the nodes property on.
     * @param options - The options to use in configuring node observation.
     */
    constructor(target, options) {
        this.target = target;
        this.options = options;
        this.source = null;
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     */
    bind(source) {
        const name = this.options.property;
        this.shouldUpdate = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.getAccessors(source).some((x) => x.name === name);
        this.source = source;
        this.updateTarget(this.computeNodes());
        if (this.shouldUpdate) {
            this.observe();
        }
    }
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     */
    unbind() {
        this.updateTarget(_platform__WEBPACK_IMPORTED_MODULE_1__.emptyArray);
        this.source = null;
        if (this.shouldUpdate) {
            this.disconnect();
        }
    }
    /** @internal */
    handleEvent() {
        this.updateTarget(this.computeNodes());
    }
    computeNodes() {
        let nodes = this.getNodes();
        if (this.options.filter !== void 0) {
            nodes = nodes.filter(this.options.filter);
        }
        return nodes;
    }
    updateTarget(value) {
        this.source[this.options.property] = value;
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefBehavior": () => (/* binding */ RefBehavior),
/* harmony export */   "ref": () => (/* binding */ ref)
/* harmony export */ });
/* harmony import */ var _html_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-directive */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");

/**
 * The runtime behavior for template references.
 * @public
 */
class RefBehavior {
    /**
     * Creates an instance of RefBehavior.
     * @param target - The element to reference.
     * @param propertyName - The name of the property to assign the reference to.
     */
    constructor(target, propertyName) {
        this.target = target;
        this.propertyName = propertyName;
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     */
    bind(source) {
        source[this.propertyName] = this.target;
    }
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     */
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    unbind() { }
}
/**
 * A directive that observes the updates a property with a reference to the element.
 * @param propertyName - The name of the property to assign the reference to.
 * @public
 */
function ref(propertyName) {
    return new _html_directive__WEBPACK_IMPORTED_MODULE_0__.AttachedBehaviorHTMLDirective("fast-ref", RefBehavior, propertyName);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/repeat.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/repeat.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeatBehavior": () => (/* binding */ RepeatBehavior),
/* harmony export */   "RepeatDirective": () => (/* binding */ RepeatDirective),
/* harmony export */   "repeat": () => (/* binding */ repeat)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _observation_array_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observation/array-observer */ "./node_modules/@microsoft/fast-element/dist/esm/observation/array-observer.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");
/* harmony import */ var _html_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-directive */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./node_modules/@microsoft/fast-element/dist/esm/templating/view.js");






const defaultRepeatOptions = Object.freeze({
    positioning: false,
});
function bindWithoutPositioning(view, items, index, context) {
    view.bind(items[index], context);
}
function bindWithPositioning(view, items, index, context) {
    const childContext = Object.create(context);
    childContext.index = index;
    childContext.length = items.length;
    view.bind(items[index], childContext);
}
/**
 * A behavior that renders a template for each item in an array.
 * @public
 */
class RepeatBehavior {
    /**
     * Creates an instance of RepeatBehavior.
     * @param location - The location in the DOM to render the repeat.
     * @param itemsBinding - The array to render.
     * @param isItemsBindingVolatile - Indicates whether the items binding has volatile dependencies.
     * @param templateBinding - The template to render for each item.
     * @param isTemplateBindingVolatile - Indicates whether the template binding has volatile dependencies.
     * @param options - Options used to turn on special repeat features.
     */
    constructor(location, itemsBinding, isItemsBindingVolatile, templateBinding, isTemplateBindingVolatile, options) {
        this.location = location;
        this.itemsBinding = itemsBinding;
        this.templateBinding = templateBinding;
        this.options = options;
        this.source = null;
        this.views = [];
        this.items = null;
        this.itemsObserver = null;
        this.originalContext = void 0;
        this.childContext = void 0;
        this.bindView = bindWithoutPositioning;
        this.itemsBindingObserver = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.binding(itemsBinding, this, isItemsBindingVolatile);
        this.templateBindingObserver = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.binding(templateBinding, this, isTemplateBindingVolatile);
        if (options.positioning) {
            this.bindView = bindWithPositioning;
        }
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     */
    bind(source, context) {
        this.source = source;
        this.originalContext = context;
        this.childContext = Object.create(context);
        this.childContext.parent = source;
        this.childContext.parentContext = this.originalContext;
        this.items = this.itemsBindingObserver.observe(source, this.originalContext);
        this.template = this.templateBindingObserver.observe(source, this.originalContext);
        this.observeItems(true);
        this.refreshAllViews();
    }
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     */
    unbind() {
        this.source = null;
        this.items = null;
        if (this.itemsObserver !== null) {
            this.itemsObserver.unsubscribe(this);
        }
        this.unbindAllViews();
        this.itemsBindingObserver.disconnect();
        this.templateBindingObserver.disconnect();
    }
    /** @internal */
    handleChange(source, args) {
        if (source === this.itemsBinding) {
            this.items = this.itemsBindingObserver.observe(this.source, this.originalContext);
            this.observeItems();
            this.refreshAllViews();
        }
        else if (source === this.templateBinding) {
            this.template = this.templateBindingObserver.observe(this.source, this.originalContext);
            this.refreshAllViews(true);
        }
        else {
            this.updateViews(args);
        }
    }
    observeItems(force = false) {
        if (!this.items) {
            this.items = _platform__WEBPACK_IMPORTED_MODULE_1__.emptyArray;
            return;
        }
        const oldObserver = this.itemsObserver;
        const newObserver = (this.itemsObserver = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.getNotifier(this.items));
        const hasNewObserver = oldObserver !== newObserver;
        if (hasNewObserver && oldObserver !== null) {
            oldObserver.unsubscribe(this);
        }
        if (hasNewObserver || force) {
            newObserver.subscribe(this);
        }
    }
    updateViews(splices) {
        const childContext = this.childContext;
        const views = this.views;
        const totalRemoved = [];
        const bindView = this.bindView;
        let removeDelta = 0;
        for (let i = 0, ii = splices.length; i < ii; ++i) {
            const splice = splices[i];
            const removed = splice.removed;
            totalRemoved.push(...views.splice(splice.index + removeDelta, removed.length));
            removeDelta -= splice.addedCount;
        }
        const items = this.items;
        const template = this.template;
        for (let i = 0, ii = splices.length; i < ii; ++i) {
            const splice = splices[i];
            let addIndex = splice.index;
            const end = addIndex + splice.addedCount;
            for (; addIndex < end; ++addIndex) {
                const neighbor = views[addIndex];
                const location = neighbor ? neighbor.firstChild : this.location;
                const view = totalRemoved.length > 0 ? totalRemoved.shift() : template.create();
                views.splice(addIndex, 0, view);
                bindView(view, items, addIndex, childContext);
                view.insertBefore(location);
            }
        }
        for (let i = 0, ii = totalRemoved.length; i < ii; ++i) {
            totalRemoved[i].dispose();
        }
        if (this.options.positioning) {
            for (let i = 0, ii = views.length; i < ii; ++i) {
                const currentContext = views[i].context;
                currentContext.length = ii;
                currentContext.index = i;
            }
        }
    }
    refreshAllViews(templateChanged = false) {
        const items = this.items;
        const childContext = this.childContext;
        const template = this.template;
        const location = this.location;
        const bindView = this.bindView;
        let itemsLength = items.length;
        let views = this.views;
        let viewsLength = views.length;
        if (itemsLength === 0 || templateChanged) {
            // all views need to be removed
            _view__WEBPACK_IMPORTED_MODULE_2__.HTMLView.disposeContiguousBatch(views);
            viewsLength = 0;
        }
        if (viewsLength === 0) {
            // all views need to be created
            this.views = views = new Array(itemsLength);
            for (let i = 0; i < itemsLength; ++i) {
                const view = template.create();
                bindView(view, items, i, childContext);
                views[i] = view;
                view.insertBefore(location);
            }
        }
        else {
            // attempt to reuse existing views with new data
            let i = 0;
            for (; i < itemsLength; ++i) {
                if (i < viewsLength) {
                    const view = views[i];
                    bindView(view, items, i, childContext);
                }
                else {
                    const view = template.create();
                    bindView(view, items, i, childContext);
                    views.push(view);
                    view.insertBefore(location);
                }
            }
            const removed = views.splice(i, viewsLength - i);
            for (i = 0, itemsLength = removed.length; i < itemsLength; ++i) {
                removed[i].dispose();
            }
        }
    }
    unbindAllViews() {
        const views = this.views;
        for (let i = 0, ii = views.length; i < ii; ++i) {
            views[i].unbind();
        }
    }
}
/**
 * A directive that configures list rendering.
 * @public
 */
class RepeatDirective extends _html_directive__WEBPACK_IMPORTED_MODULE_3__.HTMLDirective {
    /**
     * Creates an instance of RepeatDirective.
     * @param itemsBinding - The binding that provides the array to render.
     * @param templateBinding - The template binding used to obtain a template to render for each item in the array.
     * @param options - Options used to turn on special repeat features.
     */
    constructor(itemsBinding, templateBinding, options) {
        super();
        this.itemsBinding = itemsBinding;
        this.templateBinding = templateBinding;
        this.options = options;
        /**
         * Creates a placeholder string based on the directive's index within the template.
         * @param index - The index of the directive within the template.
         */
        this.createPlaceholder = _dom__WEBPACK_IMPORTED_MODULE_4__.DOM.createBlockPlaceholder;
        (0,_observation_array_observer__WEBPACK_IMPORTED_MODULE_5__.enableArrayObservation)();
        this.isItemsBindingVolatile = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.isVolatileBinding(itemsBinding);
        this.isTemplateBindingVolatile = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.isVolatileBinding(templateBinding);
    }
    /**
     * Creates a behavior for the provided target node.
     * @param target - The node instance to create the behavior for.
     */
    createBehavior(target) {
        return new RepeatBehavior(target, this.itemsBinding, this.isItemsBindingVolatile, this.templateBinding, this.isTemplateBindingVolatile, this.options);
    }
}
/**
 * A directive that enables list rendering.
 * @param itemsBinding - The array to render.
 * @param templateOrTemplateBinding - The template or a template binding used obtain a template
 * to render for each item in the array.
 * @param options - Options used to turn on special repeat features.
 * @public
 */
function repeat(itemsBinding, templateOrTemplateBinding, options = defaultRepeatOptions) {
    const templateBinding = typeof templateOrTemplateBinding === "function"
        ? templateOrTemplateBinding
        : () => templateOrTemplateBinding;
    return new RepeatDirective(itemsBinding, templateBinding, options);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlottedBehavior": () => (/* binding */ SlottedBehavior),
/* harmony export */   "slotted": () => (/* binding */ slotted)
/* harmony export */ });
/* harmony import */ var _html_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-directive */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");
/* harmony import */ var _node_observation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-observation */ "./node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js");


/**
 * The runtime behavior for slotted node observation.
 * @public
 */
class SlottedBehavior extends _node_observation__WEBPACK_IMPORTED_MODULE_0__.NodeObservationBehavior {
    /**
     * Creates an instance of SlottedBehavior.
     * @param target - The slot element target to observe.
     * @param options - The options to use when observing the slot.
     */
    constructor(target, options) {
        super(target, options);
    }
    /**
     * Begins observation of the nodes.
     */
    observe() {
        this.target.addEventListener("slotchange", this);
    }
    /**
     * Disconnects observation of the nodes.
     */
    disconnect() {
        this.target.removeEventListener("slotchange", this);
    }
    /**
     * Retrieves the nodes that should be assigned to the target.
     */
    getNodes() {
        return this.target.assignedNodes(this.options);
    }
}
/**
 * A directive that observes the `assignedNodes()` of a slot and updates a property
 * whenever they change.
 * @param propertyOrOptions - The options used to configure slotted node observation.
 * @public
 */
function slotted(propertyOrOptions) {
    if (typeof propertyOrOptions === "string") {
        propertyOrOptions = { property: propertyOrOptions };
    }
    return new _html_directive__WEBPACK_IMPORTED_MODULE_1__.AttachedBehaviorHTMLDirective("fast-slotted", SlottedBehavior, propertyOrOptions);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/template.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTemplate": () => (/* binding */ ViewTemplate),
/* harmony export */   "html": () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observation/observable */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compiler */ "./node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./node_modules/@microsoft/fast-element/dist/esm/templating/view.js");
/* harmony import */ var _html_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html-directive */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binding */ "./node_modules/@microsoft/fast-element/dist/esm/templating/binding.js");






/**
 * A template capable of creating HTMLView instances or rendering directly to DOM.
 * @public
 */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
class ViewTemplate {
    /**
     * Creates an instance of ViewTemplate.
     * @param html - The html representing what this template will instantiate, including placeholders for directives.
     * @param directives - The directives that will be connected to placeholders in the html.
     */
    constructor(html, directives) {
        this.behaviorCount = 0;
        this.hasHostBehaviors = false;
        this.fragment = null;
        this.targetOffset = 0;
        this.viewBehaviorFactories = null;
        this.hostBehaviorFactories = null;
        this.html = html;
        this.directives = directives;
    }
    /**
     * Creates an HTMLView instance based on this template definition.
     * @param hostBindingTarget - The element that host behaviors will be bound to.
     */
    create(hostBindingTarget) {
        if (this.fragment === null) {
            let template;
            const html = this.html;
            if (typeof html === "string") {
                template = document.createElement("template");
                template.innerHTML = _dom__WEBPACK_IMPORTED_MODULE_0__.DOM.createHTML(html);
                const fec = template.content.firstElementChild;
                if (fec !== null && fec.tagName === "TEMPLATE") {
                    template = fec;
                }
            }
            else {
                template = html;
            }
            const result = (0,_compiler__WEBPACK_IMPORTED_MODULE_1__.compileTemplate)(template, this.directives);
            this.fragment = result.fragment;
            this.viewBehaviorFactories = result.viewBehaviorFactories;
            this.hostBehaviorFactories = result.hostBehaviorFactories;
            this.targetOffset = result.targetOffset;
            this.behaviorCount =
                this.viewBehaviorFactories.length + this.hostBehaviorFactories.length;
            this.hasHostBehaviors = this.hostBehaviorFactories.length > 0;
        }
        const fragment = this.fragment.cloneNode(true);
        const viewFactories = this.viewBehaviorFactories;
        const behaviors = new Array(this.behaviorCount);
        const walker = _dom__WEBPACK_IMPORTED_MODULE_0__.DOM.createTemplateWalker(fragment);
        let behaviorIndex = 0;
        let targetIndex = this.targetOffset;
        let node = walker.nextNode();
        for (let ii = viewFactories.length; behaviorIndex < ii; ++behaviorIndex) {
            const factory = viewFactories[behaviorIndex];
            const factoryIndex = factory.targetIndex;
            while (node !== null) {
                if (targetIndex === factoryIndex) {
                    behaviors[behaviorIndex] = factory.createBehavior(node);
                    break;
                }
                else {
                    node = walker.nextNode();
                    targetIndex++;
                }
            }
        }
        if (this.hasHostBehaviors) {
            const hostFactories = this.hostBehaviorFactories;
            for (let i = 0, ii = hostFactories.length; i < ii; ++i, ++behaviorIndex) {
                behaviors[behaviorIndex] = hostFactories[i].createBehavior(hostBindingTarget);
            }
        }
        return new _view__WEBPACK_IMPORTED_MODULE_2__.HTMLView(fragment, behaviors);
    }
    /**
     * Creates an HTMLView from this template, binds it to the source, and then appends it to the host.
     * @param source - The data source to bind the template to.
     * @param host - The Element where the template will be rendered.
     * @param hostBindingTarget - An HTML element to target the host bindings at if different from the
     * host that the template is being attached to.
     */
    render(source, host, hostBindingTarget) {
        if (typeof host === "string") {
            host = document.getElementById(host);
        }
        if (hostBindingTarget === void 0) {
            hostBindingTarget = host;
        }
        const view = this.create(hostBindingTarget);
        view.bind(source, _observation_observable__WEBPACK_IMPORTED_MODULE_3__.defaultExecutionContext);
        view.appendTo(host);
        return view;
    }
}
// Much thanks to LitHTML for working this out!
const lastAttributeNameRegex = 
/* eslint-disable-next-line no-control-regex */
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * Transforms a template literal string into a renderable ViewTemplate.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @remarks
 * The html helper supports interpolation of strings, numbers, binding expressions,
 * other template instances, and Directive instances.
 * @public
 */
function html(strings, ...values) {
    const directives = [];
    let html = "";
    for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
        const currentString = strings[i];
        let value = values[i];
        html += currentString;
        if (value instanceof ViewTemplate) {
            const template = value;
            value = () => template;
        }
        if (typeof value === "function") {
            value = new _binding__WEBPACK_IMPORTED_MODULE_4__.HTMLBindingDirective(value);
        }
        if (value instanceof _html_directive__WEBPACK_IMPORTED_MODULE_5__.TargetedHTMLDirective) {
            const match = lastAttributeNameRegex.exec(currentString);
            if (match !== null) {
                value.targetName = match[2];
            }
        }
        if (value instanceof _html_directive__WEBPACK_IMPORTED_MODULE_5__.HTMLDirective) {
            // Since not all values are directives, we can't use i
            // as the index for the placeholder. Instead, we need to
            // use directives.length to get the next index.
            html += value.createPlaceholder(directives.length);
            directives.push(value);
        }
        else {
            html += value;
        }
    }
    html += strings[strings.length - 1];
    return new ViewTemplate(html, directives);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/view.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/view.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLView": () => (/* binding */ HTMLView)
/* harmony export */ });
// A singleton Range instance used to efficiently remove ranges of DOM nodes.
// See the implementation of HTMLView below for further details.
const range = document.createRange();
/**
 * The standard View implementation, which also implements ElementView and SyntheticView.
 * @public
 */
class HTMLView {
    /**
     * Constructs an instance of HTMLView.
     * @param fragment - The html fragment that contains the nodes for this view.
     * @param behaviors - The behaviors to be applied to this view.
     */
    constructor(fragment, behaviors) {
        this.fragment = fragment;
        this.behaviors = behaviors;
        /**
         * The data that the view is bound to.
         */
        this.source = null;
        /**
         * The execution context the view is running within.
         */
        this.context = null;
        this.firstChild = fragment.firstChild;
        this.lastChild = fragment.lastChild;
    }
    /**
     * Appends the view's DOM nodes to the referenced node.
     * @param node - The parent node to append the view's DOM nodes to.
     */
    appendTo(node) {
        node.appendChild(this.fragment);
    }
    /**
     * Inserts the view's DOM nodes before the referenced node.
     * @param node - The node to insert the view's DOM before.
     */
    insertBefore(node) {
        if (this.fragment.hasChildNodes()) {
            node.parentNode.insertBefore(this.fragment, node);
        }
        else {
            const parentNode = node.parentNode;
            const end = this.lastChild;
            let current = this.firstChild;
            let next;
            while (current !== end) {
                next = current.nextSibling;
                parentNode.insertBefore(current, node);
                current = next;
            }
            parentNode.insertBefore(end, node);
        }
    }
    /**
     * Removes the view's DOM nodes.
     * The nodes are not disposed and the view can later be re-inserted.
     */
    remove() {
        const fragment = this.fragment;
        const end = this.lastChild;
        let current = this.firstChild;
        let next;
        while (current !== end) {
            next = current.nextSibling;
            fragment.appendChild(current);
            current = next;
        }
        fragment.appendChild(end);
    }
    /**
     * Removes the view and unbinds its behaviors, disposing of DOM nodes afterward.
     * Once a view has been disposed, it cannot be inserted or bound again.
     */
    dispose() {
        const parent = this.firstChild.parentNode;
        const end = this.lastChild;
        let current = this.firstChild;
        let next;
        while (current !== end) {
            next = current.nextSibling;
            parent.removeChild(current);
            current = next;
        }
        parent.removeChild(end);
        const behaviors = this.behaviors;
        const oldSource = this.source;
        for (let i = 0, ii = behaviors.length; i < ii; ++i) {
            behaviors[i].unbind(oldSource);
        }
    }
    /**
     * Binds a view's behaviors to its binding source.
     * @param source - The binding source for the view's binding behaviors.
     * @param context - The execution context to run the behaviors within.
     */
    bind(source, context) {
        const behaviors = this.behaviors;
        if (this.source === source) {
            return;
        }
        else if (this.source !== null) {
            const oldSource = this.source;
            this.source = source;
            this.context = context;
            for (let i = 0, ii = behaviors.length; i < ii; ++i) {
                const current = behaviors[i];
                current.unbind(oldSource);
                current.bind(source, context);
            }
        }
        else {
            this.source = source;
            this.context = context;
            for (let i = 0, ii = behaviors.length; i < ii; ++i) {
                behaviors[i].bind(source, context);
            }
        }
    }
    /**
     * Unbinds a view's behaviors from its binding source.
     */
    unbind() {
        if (this.source === null) {
            return;
        }
        const behaviors = this.behaviors;
        const oldSource = this.source;
        for (let i = 0, ii = behaviors.length; i < ii; ++i) {
            behaviors[i].unbind(oldSource);
        }
        this.source = null;
    }
    /**
     * Efficiently disposes of a contiguous range of synthetic view instances.
     * @param views - A contiguous range of views to be disposed.
     */
    static disposeContiguousBatch(views) {
        if (views.length === 0) {
            return;
        }
        range.setStartBefore(views[0].firstChild);
        range.setEndAfter(views[views.length - 1].lastChild);
        range.deleteContents();
        for (let i = 0, ii = views.length; i < ii; ++i) {
            const view = views[i];
            const behaviors = view.behaviors;
            const oldSource = view.source;
            for (let j = 0, jj = behaviors.length; j < jj; ++j) {
                behaviors[j].unbind(oldSource);
            }
        }
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/when.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/when.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/button/button.form-associated.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/button/button.form-associated.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormAssociatedButton": () => (/* binding */ FormAssociatedButton)
/* harmony export */ });
/* harmony import */ var _form_associated_form_associated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-associated/form-associated */ "./node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js");
/* harmony import */ var _foundation_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../foundation-element */ "./node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js");


class _Button extends _foundation_element__WEBPACK_IMPORTED_MODULE_0__.FoundationElement {
}
/**
 * A form-associated base class for the {@link @microsoft/fast-foundation#(Button:class)} component.
 *
 * @internal
 */
class FormAssociatedButton extends (0,_form_associated_form_associated__WEBPACK_IMPORTED_MODULE_1__.FormAssociated)(_Button) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement("input");
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/button/button.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/button/button.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "DelegatesARIAButton": () => (/* binding */ DelegatesARIAButton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _patterns_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../patterns/index */ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js");
/* harmony import */ var _patterns_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../patterns/index */ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");
/* harmony import */ var _utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/apply-mixins */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js");
/* harmony import */ var _button_form_associated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.form-associated */ "./node_modules/@microsoft/fast-foundation/dist/esm/button/button.form-associated.js");





/**
 * A Button Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element }.
 *
 * @public
 */
class Button extends _button_form_associated__WEBPACK_IMPORTED_MODULE_0__.FormAssociatedButton {
    constructor() {
        super(...arguments);
        /**
         * Prevent events to propagate if disabled and has no slotted content wrapped in HTML elements
         * @internal
         */
        this.handleClick = (e) => {
            var _a;
            if (this.disabled && ((_a = this.defaultSlottedContent) === null || _a === void 0 ? void 0 : _a.length) <= 1) {
                e.stopPropagation();
            }
        };
        /**
         * Submits the parent form
         */
        this.handleSubmission = () => {
            if (!this.form) {
                return;
            }
            const attached = this.proxy.isConnected;
            if (!attached) {
                this.attachProxy();
            }
            // Browser support for requestSubmit is not comprehensive
            // so click the proxy if it isn't supported
            typeof this.form.requestSubmit === "function"
                ? this.form.requestSubmit(this.proxy)
                : this.proxy.click();
            if (!attached) {
                this.detachProxy();
            }
        };
        /**
         * Resets the parent form
         */
        this.handleFormReset = () => {
            var _a;
            (_a = this.form) === null || _a === void 0 ? void 0 : _a.reset();
        };
        /**
         * Overrides the focus call for where delegatesFocus is unsupported.
         * This check works for Chrome, Edge Chromium, FireFox, and Safari
         * Relevant PR on the Firefox browser: https://phabricator.services.mozilla.com/D123858
         */
        this.handleUnsupportedDelegatesFocus = () => {
            var _a;
            // Check to see if delegatesFocus is supported
            if (window.ShadowRoot &&
                !window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus") && ((_a = this.$fastController.definition.shadowOptions) === null || _a === void 0 ? void 0 : _a.delegatesFocus)) {
                this.focus = () => {
                    this.control.focus();
                };
            }
        };
    }
    formactionChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formAction = this.formaction;
        }
    }
    formenctypeChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formEnctype = this.formenctype;
        }
    }
    formmethodChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formMethod = this.formmethod;
        }
    }
    formnovalidateChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formNoValidate = this.formnovalidate;
        }
    }
    formtargetChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formTarget = this.formtarget;
        }
    }
    typeChanged(previous, next) {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.type = this.type;
        }
        next === "submit" && this.addEventListener("click", this.handleSubmission);
        previous === "submit" && this.removeEventListener("click", this.handleSubmission);
        next === "reset" && this.addEventListener("click", this.handleFormReset);
        previous === "reset" && this.removeEventListener("click", this.handleFormReset);
    }
    /**
     * @internal
     */
    connectedCallback() {
        var _a;
        super.connectedCallback();
        this.proxy.setAttribute("type", this.type);
        this.handleUnsupportedDelegatesFocus();
        const elements = Array.from((_a = this.control) === null || _a === void 0 ? void 0 : _a.children);
        if (elements) {
            elements.forEach((span) => {
                span.addEventListener("click", this.handleClick);
            });
        }
    }
    /**
     * @internal
     */
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        const elements = Array.from((_a = this.control) === null || _a === void 0 ? void 0 : _a.children);
        if (elements) {
            elements.forEach((span) => {
                span.removeEventListener("click", this.handleClick);
            });
        }
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ mode: "boolean" })
], Button.prototype, "autofocus", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ attribute: "form" })
], Button.prototype, "formId", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "formaction", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "formenctype", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "formmethod", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ mode: "boolean" })
], Button.prototype, "formnovalidate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "formtarget", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.observable
], Button.prototype, "defaultSlottedContent", void 0);
/**
 * Includes ARIA states and properties relating to the ARIA button role
 *
 * @public
 */
class DelegatesARIAButton {
}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ attribute: "aria-expanded", mode: "fromView" })
], DelegatesARIAButton.prototype, "ariaExpanded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ attribute: "aria-pressed", mode: "fromView" })
], DelegatesARIAButton.prototype, "ariaPressed", void 0);
(0,_utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_4__.applyMixins)(DelegatesARIAButton, _patterns_index__WEBPACK_IMPORTED_MODULE_5__.ARIAGlobalStatesAndProperties);
(0,_utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_4__.applyMixins)(Button, _patterns_index__WEBPACK_IMPORTED_MODULE_6__.StartEnd, DelegatesARIAButton);


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/button/button.template.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/button/button.template.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonTemplate": () => (/* binding */ buttonTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js");
/* harmony import */ var _patterns_start_end__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../patterns/start-end */ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");


/**
 * The template for the {@link @microsoft/fast-foundation#(Button:class)} component.
 * @public
 */
const buttonTemplate = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <button
        class="control"
        part="control"
        ?autofocus="${x => x.autofocus}"
        ?disabled="${x => x.disabled}"
        form="${x => x.formId}"
        formaction="${x => x.formaction}"
        formenctype="${x => x.formenctype}"
        formmethod="${x => x.formmethod}"
        formnovalidate="${x => x.formnovalidate}"
        formtarget="${x => x.formtarget}"
        name="${x => x.name}"
        type="${x => x.type}"
        value="${x => x.value}"
        aria-atomic="${x => x.ariaAtomic}"
        aria-busy="${x => x.ariaBusy}"
        aria-controls="${x => x.ariaControls}"
        aria-current="${x => x.ariaCurrent}"
        aria-describedby="${x => x.ariaDescribedby}"
        aria-details="${x => x.ariaDetails}"
        aria-disabled="${x => x.ariaDisabled}"
        aria-errormessage="${x => x.ariaErrormessage}"
        aria-expanded="${x => x.ariaExpanded}"
        aria-flowto="${x => x.ariaFlowto}"
        aria-haspopup="${x => x.ariaHaspopup}"
        aria-hidden="${x => x.ariaHidden}"
        aria-invalid="${x => x.ariaInvalid}"
        aria-keyshortcuts="${x => x.ariaKeyshortcuts}"
        aria-label="${x => x.ariaLabel}"
        aria-labelledby="${x => x.ariaLabelledby}"
        aria-live="${x => x.ariaLive}"
        aria-owns="${x => x.ariaOwns}"
        aria-pressed="${x => x.ariaPressed}"
        aria-relevant="${x => x.ariaRelevant}"
        aria-roledescription="${x => x.ariaRoledescription}"
        ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("control")}
    >
        ${(0,_patterns_start_end__WEBPACK_IMPORTED_MODULE_2__.startSlotTemplate)(context, definition)}
        <span class="content" part="content">
            <slot ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.slotted)("defaultSlottedContent")}></slot>
        </span>
        ${(0,_patterns_start_end__WEBPACK_IMPORTED_MODULE_2__.endSlotTemplate)(context, definition)}
    </button>
`;


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/card/card.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/card/card.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _foundation_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../foundation-element */ "./node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js");

/**
 * An Card Custom HTML Element.
 *
 * @public
 */
class Card extends _foundation_element__WEBPACK_IMPORTED_MODULE_0__.FoundationElement {
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/card/card.template.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/card/card.template.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardTemplate": () => (/* binding */ cardTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");

/**
 * The template for the {@link @microsoft/fast-foundation#Card} component.
 * @public
 */
const cardTemplate = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <slot></slot>
`;


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.form-associated.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.form-associated.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/design-system/component-presentation.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/design-system/component-presentation.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentPresentation": () => (/* binding */ ComponentPresentation),
/* harmony export */   "DefaultComponentPresentation": () => (/* binding */ DefaultComponentPresentation)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js");
/* harmony import */ var _di_di__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../di/di */ "./node_modules/@microsoft/fast-foundation/dist/esm/di/di.js");


function presentationKeyFromTag(tagName) {
    return `${tagName.toLowerCase()}:presentation`;
}
const presentationRegistry = new Map();
/**
 * An API gateway to component presentation features.
 * @public
 */
const ComponentPresentation = Object.freeze({
    /**
     * Defines a component presentation for an element.
     * @param tagName - The element name to define the presentation for.
     * @param presentation - The presentation that will be applied to matching elements.
     * @param container - The dependency injection container to register the configuration in.
     * @public
     */
    define(tagName, presentation, container) {
        const key = presentationKeyFromTag(tagName);
        const existing = presentationRegistry.get(key);
        if (existing === void 0) {
            presentationRegistry.set(key, presentation);
        }
        else {
            // false indicates that we have more than one presentation
            // registered for a tagName and we must resolve through DI
            presentationRegistry.set(key, false);
        }
        container.register(_di_di__WEBPACK_IMPORTED_MODULE_0__.Registration.instance(key, presentation));
    },
    /**
     * Finds a component presentation for the specified element name,
     * searching the DOM hierarchy starting from the provided element.
     * @param tagName - The name of the element to locate the presentation for.
     * @param element - The element to begin the search from.
     * @returns The component presentation or null if none is found.
     * @public
     */
    forTag(tagName, element) {
        const key = presentationKeyFromTag(tagName);
        const existing = presentationRegistry.get(key);
        if (existing === false) {
            const container = _di_di__WEBPACK_IMPORTED_MODULE_0__.DI.findResponsibleContainer(element);
            return container.get(key);
        }
        return existing || null;
    },
});
/**
 * The default implementation of ComponentPresentation, used by FoundationElement.
 * @public
 */
class DefaultComponentPresentation {
    /**
     * Creates an instance of DefaultComponentPresentation.
     * @param template - The template to apply to the element.
     * @param styles - The styles to apply to the element.
     * @public
     */
    constructor(template, styles) {
        this.template = template || null;
        this.styles =
            styles === void 0
                ? null
                : Array.isArray(styles)
                    ? _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create(styles)
                    : styles instanceof _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ElementStyles
                        ? styles
                        : _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create([styles]);
    }
    /**
     * Applies the presentation details to the specified element.
     * @param element - The element to apply the presentation details to.
     * @public
     */
    applyTo(element) {
        const controller = element.$fastController;
        if (controller.template === null) {
            controller.template = this.template;
        }
        if (controller.styles === null) {
            controller.styles = this.styles;
        }
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/design-system/design-system.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/design-system/design-system.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementDisambiguation": () => (/* binding */ ElementDisambiguation),
/* harmony export */   "DesignSystem": () => (/* binding */ DesignSystem)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js");
/* harmony import */ var _foundation_element_foundation_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../foundation-element/foundation-element */ "./node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js");
/* harmony import */ var _di_di__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../di/di */ "./node_modules/@microsoft/fast-foundation/dist/esm/di/di.js");
/* harmony import */ var _design_token_design_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../design-token/design-token */ "./node_modules/@microsoft/fast-foundation/dist/esm/design-token/design-token.js");
/* harmony import */ var _component_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-presentation */ "./node_modules/@microsoft/fast-foundation/dist/esm/design-system/component-presentation.js");





/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * Indicates what to do with an ambiguous (duplicate) element.
 * @public
 */
const ElementDisambiguation = Object.freeze({
    /**
     * Skip defining the element but still call the provided callback passed
     * to DesignSystemRegistrationContext.tryDefineElement
     */
    definitionCallbackOnly: null,
    /**
     * Ignore the duplicate element entirely.
     */
    ignoreDuplicate: Symbol(),
});
const elementTypesByTag = new Map();
const elementTagsByType = new Map();
let rootDesignSystem = null;
const designSystemKey = _di_di__WEBPACK_IMPORTED_MODULE_0__.DI.createInterface(x => x.cachedCallback(handler => {
    if (rootDesignSystem === null) {
        rootDesignSystem = new DefaultDesignSystem(null, handler);
    }
    return rootDesignSystem;
}));
/**
 * An API gateway to design system features.
 * @public
 */
const DesignSystem = Object.freeze({
    /**
     * Returns the HTML element name that the type is defined as.
     * @param type - The type to lookup.
     * @public
     */
    tagFor(type) {
        return elementTagsByType.get(type);
    },
    /**
     * Searches the DOM hierarchy for the design system that is responsible
     * for the provided element.
     * @param element - The element to locate the design system for.
     * @returns The located design system.
     * @public
     */
    responsibleFor(element) {
        const owned = element.$$designSystem$$;
        if (owned) {
            return owned;
        }
        const container = _di_di__WEBPACK_IMPORTED_MODULE_0__.DI.findResponsibleContainer(element);
        return container.get(designSystemKey);
    },
    /**
     * Gets the DesignSystem if one is explicitly defined on the provided element;
     * otherwise creates a design system defined directly on the element.
     * @param element - The element to get or create a design system for.
     * @returns The design system.
     * @public
     */
    getOrCreate(node) {
        if (!node) {
            if (rootDesignSystem === null) {
                rootDesignSystem = _di_di__WEBPACK_IMPORTED_MODULE_0__.DI.getOrCreateDOMContainer().get(designSystemKey);
            }
            return rootDesignSystem;
        }
        const owned = node.$$designSystem$$;
        if (owned) {
            return owned;
        }
        const container = _di_di__WEBPACK_IMPORTED_MODULE_0__.DI.getOrCreateDOMContainer(node);
        if (container.has(designSystemKey, false)) {
            return container.get(designSystemKey);
        }
        else {
            const system = new DefaultDesignSystem(node, container);
            container.register(_di_di__WEBPACK_IMPORTED_MODULE_0__.Registration.instance(designSystemKey, system));
            return system;
        }
    },
});
function extractTryDefineElementParams(params, elementDefinitionType, elementDefinitionCallback) {
    if (typeof params === "string") {
        return {
            name: params,
            type: elementDefinitionType,
            callback: elementDefinitionCallback,
        };
    }
    else {
        return params;
    }
}
class DefaultDesignSystem {
    constructor(owner, container) {
        this.owner = owner;
        this.container = container;
        this.designTokensInitialized = false;
        this.prefix = "fast";
        this.shadowRootMode = undefined;
        this.disambiguate = () => ElementDisambiguation.definitionCallbackOnly;
        if (owner !== null) {
            owner.$$designSystem$$ = this;
        }
    }
    withPrefix(prefix) {
        this.prefix = prefix;
        return this;
    }
    withShadowRootMode(mode) {
        this.shadowRootMode = mode;
        return this;
    }
    withElementDisambiguation(callback) {
        this.disambiguate = callback;
        return this;
    }
    withDesignTokenRoot(root) {
        this.designTokenRoot = root;
        return this;
    }
    register(...registrations) {
        const container = this.container;
        const elementDefinitionEntries = [];
        const disambiguate = this.disambiguate;
        const shadowRootMode = this.shadowRootMode;
        const context = {
            elementPrefix: this.prefix,
            tryDefineElement(params, elementDefinitionType, elementDefinitionCallback) {
                const extractedParams = extractTryDefineElementParams(params, elementDefinitionType, elementDefinitionCallback);
                const { name, callback, baseClass } = extractedParams;
                let { type } = extractedParams;
                let elementName = name;
                let typeFoundByName = elementTypesByTag.get(elementName);
                let needsDefine = true;
                while (typeFoundByName) {
                    const result = disambiguate(elementName, type, typeFoundByName);
                    switch (result) {
                        case ElementDisambiguation.ignoreDuplicate:
                            return;
                        case ElementDisambiguation.definitionCallbackOnly:
                            needsDefine = false;
                            typeFoundByName = void 0;
                            break;
                        default:
                            elementName = result;
                            typeFoundByName = elementTypesByTag.get(elementName);
                            break;
                    }
                }
                if (needsDefine) {
                    if (elementTagsByType.has(type) || type === _foundation_element_foundation_element__WEBPACK_IMPORTED_MODULE_1__.FoundationElement) {
                        type = class extends type {
                        };
                    }
                    elementTypesByTag.set(elementName, type);
                    elementTagsByType.set(type, elementName);
                    if (baseClass) {
                        elementTagsByType.set(baseClass, elementName);
                    }
                }
                elementDefinitionEntries.push(new ElementDefinitionEntry(container, elementName, type, shadowRootMode, callback, needsDefine));
            },
        };
        if (!this.designTokensInitialized) {
            this.designTokensInitialized = true;
            if (this.designTokenRoot !== null) {
                _design_token_design_token__WEBPACK_IMPORTED_MODULE_2__.DesignToken.registerRoot(this.designTokenRoot);
            }
        }
        container.registerWithContext(context, ...registrations);
        for (const entry of elementDefinitionEntries) {
            entry.callback(entry);
            if (entry.willDefine && entry.definition !== null) {
                entry.definition.define();
            }
        }
        return this;
    }
}
class ElementDefinitionEntry {
    constructor(container, name, type, shadowRootMode, callback, willDefine) {
        this.container = container;
        this.name = name;
        this.type = type;
        this.shadowRootMode = shadowRootMode;
        this.callback = callback;
        this.willDefine = willDefine;
        this.definition = null;
    }
    definePresentation(presentation) {
        _component_presentation__WEBPACK_IMPORTED_MODULE_3__.ComponentPresentation.define(this.name, presentation, this.container);
    }
    defineElement(definition) {
        this.definition = new _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.FASTElementDefinition(this.type, Object.assign(Object.assign({}, definition), { name: this.name }));
    }
    tagFor(type) {
        return DesignSystem.tagFor(type);
    }
}
/* eslint-enable @typescript-eslint/no-non-null-assertion */


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/design-token/custom-property-manager.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/design-token/custom-property-manager.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultElement": () => (/* binding */ defaultElement),
/* harmony export */   "RootStyleSheetTarget": () => (/* binding */ RootStyleSheetTarget),
/* harmony export */   "PropertyTargetManager": () => (/* binding */ PropertyTargetManager)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");


const defaultElement = document.createElement("div");
function isFastElement(element) {
    return element instanceof _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.FASTElement;
}
class QueuedStyleSheetTarget {
    setProperty(name, value) {
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => this.target.setProperty(name, value));
    }
    removeProperty(name) {
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => this.target.removeProperty(name));
    }
}
/**
 * Handles setting properties for a FASTElement using Constructable Stylesheets
 */
class ConstructableStyleSheetTarget extends QueuedStyleSheetTarget {
    constructor(source) {
        super();
        const sheet = new CSSStyleSheet();
        this.target = sheet.cssRules[sheet.insertRule(":host{}")].style;
        source.$fastController.addStyles(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.ElementStyles.create([sheet]));
    }
}
class DocumentStyleSheetTarget extends QueuedStyleSheetTarget {
    constructor() {
        super();
        const sheet = new CSSStyleSheet();
        this.target = sheet.cssRules[sheet.insertRule(":root{}")].style;
        document.adoptedStyleSheets = [
            ...document.adoptedStyleSheets,
            sheet,
        ];
    }
}
class HeadStyleElementStyleSheetTarget extends QueuedStyleSheetTarget {
    constructor() {
        super();
        this.style = document.createElement("style");
        document.head.appendChild(this.style);
        const { sheet } = this.style;
        // Because the HTMLStyleElement has been appended,
        // there shouldn't exist a case where `sheet` is null,
        // but if-check it just in case.
        if (sheet) {
            // https://github.com/jsdom/jsdom uses https://github.com/NV/CSSOM for it's CSSOM implementation,
            // which implements the DOM Level 2 spec for CSSStyleSheet where insertRule() requires an index argument.
            const index = sheet.insertRule(":root{}", sheet.cssRules.length);
            this.target = sheet.cssRules[index].style;
        }
    }
}
/**
 * Handles setting properties for a FASTElement using an HTMLStyleElement
 */
class StyleElementStyleSheetTarget {
    constructor(target) {
        this.store = new Map();
        this.target = null;
        const controller = target.$fastController;
        this.style = document.createElement("style");
        controller.addStyles(this.style);
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.Observable.getNotifier(controller).subscribe(this, "isConnected");
        this.handleChange(controller, "isConnected");
    }
    targetChanged() {
        if (this.target !== null) {
            for (const [key, value] of this.store.entries()) {
                this.target.setProperty(key, value);
            }
        }
    }
    setProperty(name, value) {
        this.store.set(name, value);
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => {
            if (this.target !== null) {
                this.target.setProperty(name, value);
            }
        });
    }
    removeProperty(name) {
        this.store.delete(name);
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => {
            if (this.target !== null) {
                this.target.removeProperty(name);
            }
        });
    }
    handleChange(source, key) {
        // HTMLStyleElement.sheet is null if the element isn't connected to the DOM,
        // so this method reacts to changes in DOM connection for the element hosting
        // the HTMLStyleElement.
        //
        // All rules applied via the CSSOM also get cleared when the element disconnects,
        // so we need to add a new rule each time and populate it with the stored properties
        const { sheet } = this.style;
        if (sheet) {
            // Safari will throw if we try to use the return result of insertRule()
            // to index the rule inline, so store as a const prior to indexing.
            // https://github.com/jsdom/jsdom uses https://github.com/NV/CSSOM for it's CSSOM implementation,
            // which implements the DOM Level 2 spec for CSSStyleSheet where insertRule() requires an index argument.
            const index = sheet.insertRule(":host{}", sheet.cssRules.length);
            this.target = sheet.cssRules[index].style;
        }
        else {
            this.target = null;
        }
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.observable
], StyleElementStyleSheetTarget.prototype, "target", void 0);
/**
 * Handles setting properties for a normal HTMLElement
 */
class ElementStyleSheetTarget {
    constructor(source) {
        this.target = source.style;
    }
    setProperty(name, value) {
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => this.target.setProperty(name, value));
    }
    removeProperty(name) {
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => this.target.removeProperty(name));
    }
}
/**
 * Controls emission for default values. This control is capable
 * of emitting to multiple {@link PropertyTarget | PropertyTargets},
 * and only emits if it has at least one root.
 *
 * @internal
 */
class RootStyleSheetTarget {
    setProperty(name, value) {
        RootStyleSheetTarget.properties[name] = value;
        for (const target of RootStyleSheetTarget.roots.values()) {
            PropertyTargetManager.getOrCreate(RootStyleSheetTarget.normalizeRoot(target)).setProperty(name, value);
        }
    }
    removeProperty(name) {
        delete RootStyleSheetTarget.properties[name];
        for (const target of RootStyleSheetTarget.roots.values()) {
            PropertyTargetManager.getOrCreate(RootStyleSheetTarget.normalizeRoot(target)).removeProperty(name);
        }
    }
    static registerRoot(root) {
        const { roots } = RootStyleSheetTarget;
        if (!roots.has(root)) {
            roots.add(root);
            const target = PropertyTargetManager.getOrCreate(this.normalizeRoot(root));
            for (const key in RootStyleSheetTarget.properties) {
                target.setProperty(key, RootStyleSheetTarget.properties[key]);
            }
        }
    }
    static unregisterRoot(root) {
        const { roots } = RootStyleSheetTarget;
        if (roots.has(root)) {
            roots.delete(root);
            const target = PropertyTargetManager.getOrCreate(RootStyleSheetTarget.normalizeRoot(root));
            for (const key in RootStyleSheetTarget.properties) {
                target.removeProperty(key);
            }
        }
    }
    /**
     * Returns the document when provided the default element,
     * otherwise is a no-op
     * @param root - the root to normalize
     */
    static normalizeRoot(root) {
        return root === defaultElement ? document : root;
    }
}
RootStyleSheetTarget.roots = new Set();
RootStyleSheetTarget.properties = {};
// Caches PropertyTarget instances
const propertyTargetCache = new WeakMap();
// Use Constructable StyleSheets for FAST elements when supported, otherwise use
// HTMLStyleElement instances
const propertyTargetCtor = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.supportsAdoptedStyleSheets
    ? ConstructableStyleSheetTarget
    : StyleElementStyleSheetTarget;
/**
 * Manages creation and caching of PropertyTarget instances.
 *
 * @internal
 */
const PropertyTargetManager = Object.freeze({
    getOrCreate(source) {
        if (propertyTargetCache.has(source)) {
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            return propertyTargetCache.get(source);
        }
        let target;
        if (source === defaultElement) {
            target = new RootStyleSheetTarget();
        }
        else if (source instanceof Document) {
            target = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.supportsAdoptedStyleSheets
                ? new DocumentStyleSheetTarget()
                : new HeadStyleElementStyleSheetTarget();
        }
        else if (isFastElement(source)) {
            target = new propertyTargetCtor(source);
        }
        else {
            target = new ElementStyleSheetTarget(source);
        }
        propertyTargetCache.set(source, target);
        return target;
    },
});


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/design-token/design-token.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/design-token/design-token.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignToken": () => (/* binding */ DesignToken)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-parent.js");
/* harmony import */ var _utilities_composed_contains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/composed-contains */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-contains.js");
/* harmony import */ var _custom_property_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-property-manager */ "./node_modules/@microsoft/fast-foundation/dist/esm/design-token/custom-property-manager.js");






/**
 * Implementation of {@link (DesignToken:interface)}
 */
class DesignTokenImpl extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.CSSDirective {
    constructor(configuration) {
        super();
        this.subscribers = new WeakMap();
        this._appliedTo = new Set();
        this.name = configuration.name;
        if (configuration.cssCustomPropertyName !== null) {
            this.cssCustomProperty = `--${configuration.cssCustomPropertyName}`;
            this.cssVar = `var(${this.cssCustomProperty})`;
        }
        this.id = DesignTokenImpl.uniqueId();
        DesignTokenImpl.tokensById.set(this.id, this);
    }
    get appliedTo() {
        return [...this._appliedTo];
    }
    static from(nameOrConfig) {
        return new DesignTokenImpl({
            name: typeof nameOrConfig === "string" ? nameOrConfig : nameOrConfig.name,
            cssCustomPropertyName: typeof nameOrConfig === "string"
                ? nameOrConfig
                : nameOrConfig.cssCustomPropertyName === void 0
                    ? nameOrConfig.name
                    : nameOrConfig.cssCustomPropertyName,
        });
    }
    static isCSSDesignToken(token) {
        return typeof token.cssCustomProperty === "string";
    }
    static isDerivedDesignTokenValue(value) {
        return typeof value === "function";
    }
    /**
     * Gets a token by ID. Returns undefined if the token was not found.
     * @param id - The ID of the token
     * @returns
     */
    static getTokenById(id) {
        return DesignTokenImpl.tokensById.get(id);
    }
    getOrCreateSubscriberSet(target = this) {
        return (this.subscribers.get(target) ||
            (this.subscribers.set(target, new Set()) && this.subscribers.get(target)));
    }
    createCSS() {
        return this.cssVar || "";
    }
    getValueFor(element) {
        const value = DesignTokenNode.getOrCreate(element).get(this);
        if (value !== undefined) {
            return value;
        }
        throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${element} or an ancestor of ${element}.`);
    }
    setValueFor(element, value) {
        this._appliedTo.add(element);
        if (value instanceof DesignTokenImpl) {
            value = this.alias(value);
        }
        DesignTokenNode.getOrCreate(element).set(this, value);
        return this;
    }
    deleteValueFor(element) {
        this._appliedTo.delete(element);
        if (DesignTokenNode.existsFor(element)) {
            DesignTokenNode.getOrCreate(element).delete(this);
        }
        return this;
    }
    withDefault(value) {
        this.setValueFor(_custom_property_manager__WEBPACK_IMPORTED_MODULE_1__.defaultElement, value);
        return this;
    }
    subscribe(subscriber, target) {
        const subscriberSet = this.getOrCreateSubscriberSet(target);
        if (target && !DesignTokenNode.existsFor(target)) {
            DesignTokenNode.getOrCreate(target);
        }
        if (!subscriberSet.has(subscriber)) {
            subscriberSet.add(subscriber);
        }
    }
    unsubscribe(subscriber, target) {
        const list = this.subscribers.get(target || this);
        if (list && list.has(subscriber)) {
            list.delete(subscriber);
        }
    }
    /**
     * Notifies subscribers that the value for an element has changed.
     * @param element - The element to emit a notification for
     */
    notify(element) {
        const record = Object.freeze({ token: this, target: element });
        if (this.subscribers.has(this)) {
            this.subscribers.get(this).forEach(sub => sub.handleChange(record));
        }
        if (this.subscribers.has(element)) {
            this.subscribers.get(element).forEach(sub => sub.handleChange(record));
        }
    }
    /**
     * Alias the token to the provided token.
     * @param token - the token to alias to
     */
    alias(token) {
        return ((target) => token.getValueFor(target));
    }
}
DesignTokenImpl.uniqueId = (() => {
    let id = 0;
    return () => {
        id++;
        return id.toString(16);
    };
})();
/**
 * Token storage by token ID
 */
DesignTokenImpl.tokensById = new Map();
class CustomPropertyReflector {
    startReflection(token, target) {
        token.subscribe(this, target);
        this.handleChange({ token, target });
    }
    stopReflection(token, target) {
        token.unsubscribe(this, target);
        this.remove(token, target);
    }
    handleChange(record) {
        const { token, target } = record;
        this.add(token, target);
    }
    add(token, target) {
        _custom_property_manager__WEBPACK_IMPORTED_MODULE_1__.PropertyTargetManager.getOrCreate(target).setProperty(token.cssCustomProperty, this.resolveCSSValue(DesignTokenNode.getOrCreate(target).get(token)));
    }
    remove(token, target) {
        _custom_property_manager__WEBPACK_IMPORTED_MODULE_1__.PropertyTargetManager.getOrCreate(target).removeProperty(token.cssCustomProperty);
    }
    resolveCSSValue(value) {
        return value && typeof value.createCSS === "function" ? value.createCSS() : value;
    }
}
/**
 * A light wrapper around BindingObserver to handle value caching and
 * token notification
 */
class DesignTokenBindingObserver {
    constructor(source, token, node) {
        this.source = source;
        this.token = token;
        this.node = node;
        this.dependencies = new Set();
        this.observer = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.Observable.binding(source, this, false);
        // This is a little bit hacky because it's using internal APIs of BindingObserverImpl.
        // BindingObserverImpl queues updates to batch it's notifications which doesn't work for this
        // scenario because the DesignToken.getValueFor API is not async. Without this, using DesignToken.getValueFor()
        // after DesignToken.setValueFor() when setting a dependency of the value being retrieved can return a stale
        // value. Assigning .handleChange to .call forces immediate invocation of this classes handleChange() method,
        // allowing resolution of values synchronously.
        // TODO: https://github.com/microsoft/fast/issues/5110
        this.observer.handleChange = this.observer.call;
        this.handleChange();
    }
    disconnect() {
        this.observer.disconnect();
    }
    /**
     * @internal
     */
    handleChange() {
        this.node.store.set(this.token, this.observer.observe(this.node.target, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.defaultExecutionContext));
    }
}
/**
 * Stores resolved token/value pairs and notifies on changes
 */
class Store {
    constructor() {
        this.values = new Map();
    }
    set(token, value) {
        if (this.values.get(token) !== value) {
            this.values.set(token, value);
            _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.Observable.getNotifier(this).notify(token.id);
        }
    }
    get(token) {
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.Observable.track(this, token.id);
        return this.values.get(token);
    }
    delete(token) {
        this.values.delete(token);
    }
    all() {
        return this.values.entries();
    }
}
const nodeCache = new WeakMap();
const childToParent = new WeakMap();
/**
 * A node responsible for setting and getting token values,
 * emitting values to CSS custom properties, and maintaining
 * inheritance structures.
 */
class DesignTokenNode {
    constructor(target) {
        this.target = target;
        /**
         * Stores all resolved token values for a node
         */
        this.store = new Store();
        /**
         * All children assigned to the node
         */
        this.children = [];
        /**
         * All values explicitly assigned to the node in their raw form
         */
        this.assignedValues = new Map();
        /**
         * Tokens currently being reflected to CSS custom properties
         */
        this.reflecting = new Set();
        /**
         * Binding observers for assigned and inherited derived values.
         */
        this.bindingObservers = new Map();
        /**
         * Emits notifications to token when token values
         * change the DesignTokenNode
         */
        this.tokenValueChangeHandler = {
            handleChange: (source, arg) => {
                const token = DesignTokenImpl.getTokenById(arg);
                if (token) {
                    // Notify any token subscribers
                    token.notify(this.target);
                    if (DesignTokenImpl.isCSSDesignToken(token)) {
                        const parent = this.parent;
                        const reflecting = this.isReflecting(token);
                        if (parent) {
                            const parentValue = parent.get(token);
                            const sourceValue = source.get(token);
                            if (parentValue !== sourceValue && !reflecting) {
                                this.reflectToCSS(token);
                            }
                            else if (parentValue === sourceValue && reflecting) {
                                this.stopReflectToCSS(token);
                            }
                        }
                        else if (!reflecting) {
                            this.reflectToCSS(token);
                        }
                    }
                }
            },
        };
        nodeCache.set(target, this);
        // Map store change notifications to token change notifications
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.Observable.getNotifier(this.store).subscribe(this.tokenValueChangeHandler);
        if (target instanceof _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.FASTElement) {
            target.$fastController.addBehaviors([this]);
        }
        else if (target.isConnected) {
            this.bind();
        }
    }
    /**
     * Returns a DesignTokenNode for an element.
     * Creates a new instance if one does not already exist for a node,
     * otherwise returns the cached instance
     *
     * @param target - The HTML element to retrieve a DesignTokenNode for
     */
    static getOrCreate(target) {
        return nodeCache.get(target) || new DesignTokenNode(target);
    }
    /**
     * Determines if a DesignTokenNode has been created for a target
     * @param target - The element to test
     */
    static existsFor(target) {
        return nodeCache.has(target);
    }
    /**
     * Searches for and return the nearest parent DesignTokenNode.
     * Null is returned if no node is found or the node provided is for a default element.
     */
    static findParent(node) {
        if (!(_custom_property_manager__WEBPACK_IMPORTED_MODULE_1__.defaultElement === node.target)) {
            let parent = (0,_utilities__WEBPACK_IMPORTED_MODULE_4__.composedParent)(node.target);
            while (parent !== null) {
                if (nodeCache.has(parent)) {
                    return nodeCache.get(parent);
                }
                parent = (0,_utilities__WEBPACK_IMPORTED_MODULE_4__.composedParent)(parent);
            }
            return DesignTokenNode.getOrCreate(_custom_property_manager__WEBPACK_IMPORTED_MODULE_1__.defaultElement);
        }
        return null;
    }
    /**
     * Finds the closest node with a value explicitly assigned for a token, otherwise null.
     * @param token - The token to look for
     * @param start - The node to start looking for value assignment
     * @returns
     */
    static findClosestAssignedNode(token, start) {
        let current = start;
        do {
            if (current.has(token)) {
                return current;
            }
            current = current.parent
                ? current.parent
                : current.target !== _custom_property_manager__WEBPACK_IMPORTED_MODULE_1__.defaultElement
                    ? DesignTokenNode.getOrCreate(_custom_property_manager__WEBPACK_IMPORTED_MODULE_1__.defaultElement)
                    : null;
        } while (current !== null);
        return null;
    }
    /**
     * The parent DesignTokenNode, or null.
     */
    get parent() {
        return childToParent.get(this) || null;
    }
    /**
     * Checks if a token has been assigned an explicit value the node.
     * @param token - the token to check.
     */
    has(token) {
        return this.assignedValues.has(token);
    }
    /**
     * Gets the value of a token for a node
     * @param token - The token to retrieve the value for
     * @returns
     */
    get(token) {
        const value = this.store.get(token);
        if (value !== undefined) {
            return value;
        }
        const raw = this.getRaw(token);
        if (raw !== undefined) {
            this.hydrate(token, raw);
            return this.get(token);
        }
    }
    /**
     * Retrieves the raw assigned value of a token from the nearest assigned node.
     * @param token - The token to retrieve a raw value for
     * @returns
     */
    getRaw(token) {
        var _a;
        if (this.assignedValues.has(token)) {
            return this.assignedValues.get(token);
        }
        return (_a = DesignTokenNode.findClosestAssignedNode(token, this)) === null || _a === void 0 ? void 0 : _a.getRaw(token);
    }
    /**
     * Sets a token to a value for a node
     * @param token - The token to set
     * @param value - The value to set the token to
     */
    set(token, value) {
        if (DesignTokenImpl.isDerivedDesignTokenValue(this.assignedValues.get(token))) {
            this.tearDownBindingObserver(token);
        }
        this.assignedValues.set(token, value);
        if (DesignTokenImpl.isDerivedDesignTokenValue(value)) {
            this.setupBindingObserver(token, value);
        }
        else {
            this.store.set(token, value);
        }
    }
    /**
     * Deletes a token value for the node.
     * @param token - The token to delete the value for
     */
    delete(token) {
        this.assignedValues.delete(token);
        this.tearDownBindingObserver(token);
        const upstream = this.getRaw(token);
        if (upstream) {
            this.hydrate(token, upstream);
        }
        else {
            this.store.delete(token);
        }
    }
    /**
     * Invoked when the DesignTokenNode.target is attached to the document
     */
    bind() {
        const parent = DesignTokenNode.findParent(this);
        if (parent) {
            parent.appendChild(this);
        }
        for (const key of this.assignedValues.keys()) {
            key.notify(this.target);
        }
    }
    /**
     * Invoked when the DesignTokenNode.target is detached from the document
     */
    unbind() {
        if (this.parent) {
            const parent = childToParent.get(this);
            parent.removeChild(this);
        }
    }
    /**
     * Appends a child to a parent DesignTokenNode.
     * @param child - The child to append to the node
     */
    appendChild(child) {
        if (child.parent) {
            childToParent.get(child).removeChild(child);
        }
        const reParent = this.children.filter(x => child.contains(x));
        childToParent.set(child, this);
        this.children.push(child);
        reParent.forEach(x => child.appendChild(x));
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.Observable.getNotifier(this.store).subscribe(child);
        // How can we not notify *every* subscriber?
        for (const [token, value] of this.store.all()) {
            child.hydrate(token, this.bindingObservers.has(token) ? this.getRaw(token) : value);
        }
    }
    /**
     * Removes a child from a node.
     * @param child - The child to remove.
     */
    removeChild(child) {
        const childIndex = this.children.indexOf(child);
        if (childIndex !== -1) {
            this.children.splice(childIndex, 1);
        }
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.Observable.getNotifier(this.store).unsubscribe(child);
        return child.parent === this ? childToParent.delete(child) : false;
    }
    /**
     * Tests whether a provided node is contained by
     * the calling node.
     * @param test - The node to test
     */
    contains(test) {
        return (0,_utilities_composed_contains__WEBPACK_IMPORTED_MODULE_5__.composedContains)(this.target, test.target);
    }
    /**
     * Instructs the node to reflect a design token for the provided token.
     * @param token - The design token to reflect
     */
    reflectToCSS(token) {
        if (!this.isReflecting(token)) {
            this.reflecting.add(token);
            DesignTokenNode.cssCustomPropertyReflector.startReflection(token, this.target);
        }
    }
    /**
     * Stops reflecting a DesignToken to CSS
     * @param token - The design token to stop reflecting
     */
    stopReflectToCSS(token) {
        if (this.isReflecting(token)) {
            this.reflecting.delete(token);
            DesignTokenNode.cssCustomPropertyReflector.stopReflection(token, this.target);
        }
    }
    /**
     * Determines if a token is being reflected to CSS for a node.
     * @param token - The token to check for reflection
     * @returns
     */
    isReflecting(token) {
        return this.reflecting.has(token);
    }
    /**
     * Handle changes to upstream tokens
     * @param source - The parent DesignTokenNode
     * @param property - The token ID that changed
     */
    handleChange(source, property) {
        const token = DesignTokenImpl.getTokenById(property);
        if (!token) {
            return;
        }
        this.hydrate(token, this.getRaw(token));
    }
    /**
     * Hydrates a token with a DesignTokenValue, making retrieval available.
     * @param token - The token to hydrate
     * @param value - The value to hydrate
     */
    hydrate(token, value) {
        if (!this.has(token)) {
            const observer = this.bindingObservers.get(token);
            if (DesignTokenImpl.isDerivedDesignTokenValue(value)) {
                if (observer) {
                    // If the binding source doesn't match, we need
                    // to update the binding
                    if (observer.source !== value) {
                        this.tearDownBindingObserver(token);
                        this.setupBindingObserver(token, value);
                    }
                }
                else {
                    this.setupBindingObserver(token, value);
                }
            }
            else {
                if (observer) {
                    this.tearDownBindingObserver(token);
                }
                this.store.set(token, value);
            }
        }
    }
    /**
     * Sets up a binding observer for a derived token value that notifies token
     * subscribers on change.
     *
     * @param token - The token to notify when the binding updates
     * @param source - The binding source
     */
    setupBindingObserver(token, source) {
        const binding = new DesignTokenBindingObserver(source, token, this);
        this.bindingObservers.set(token, binding);
        return binding;
    }
    /**
     * Tear down a binding observer for a token.
     */
    tearDownBindingObserver(token) {
        if (this.bindingObservers.has(token)) {
            this.bindingObservers.get(token).disconnect();
            this.bindingObservers.delete(token);
            return true;
        }
        return false;
    }
}
/**
 * Responsible for reflecting tokens to CSS custom properties
 */
DesignTokenNode.cssCustomPropertyReflector = new CustomPropertyReflector();
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.observable
], DesignTokenNode.prototype, "children", void 0);
function create(nameOrConfig) {
    return DesignTokenImpl.from(nameOrConfig);
}
/* eslint-enable @typescript-eslint/no-unused-vars */
/**
 * Factory object for creating {@link (DesignToken:interface)} instances.
 * @public
 */
const DesignToken = Object.freeze({
    create,
    /**
     * Informs DesignToken that an HTMLElement for which tokens have
     * been set has been connected to the document.
     *
     * The browser does not provide a reliable mechanism to observe an HTMLElement's connectedness
     * in all scenarios, so invoking this method manually is necessary when:
     *
     * 1. Token values are set for an HTMLElement.
     * 2. The HTMLElement does not inherit from FASTElement.
     * 3. The HTMLElement is not connected to the document when token values are set.
     *
     * @param element - The element to notify
     * @returns - true if notification was successful, otherwise false.
     */
    notifyConnection(element) {
        if (!element.isConnected || !DesignTokenNode.existsFor(element)) {
            return false;
        }
        DesignTokenNode.getOrCreate(element).bind();
        return true;
    },
    /**
     * Informs DesignToken that an HTMLElement for which tokens have
     * been set has been disconnected to the document.
     *
     * The browser does not provide a reliable mechanism to observe an HTMLElement's connectedness
     * in all scenarios, so invoking this method manually is necessary when:
     *
     * 1. Token values are set for an HTMLElement.
     * 2. The HTMLElement does not inherit from FASTElement.
     *
     * @param element - The element to notify
     * @returns - true if notification was successful, otherwise false.
     */
    notifyDisconnection(element) {
        if (element.isConnected || !DesignTokenNode.existsFor(element)) {
            return false;
        }
        DesignTokenNode.getOrCreate(element).unbind();
        return true;
    },
    /**
     * Registers and element or document as a DesignToken root.
     * {@link CSSDesignToken | CSSDesignTokens} with default values assigned via
     * {@link (DesignToken:interface).withDefault} will emit CSS custom properties to all
     * registered roots.
     * @param target - The root to register
     */
    registerRoot(target = _custom_property_manager__WEBPACK_IMPORTED_MODULE_1__.defaultElement) {
        _custom_property_manager__WEBPACK_IMPORTED_MODULE_1__.RootStyleSheetTarget.registerRoot(target);
    },
    /**
     * Unregister an element or document as a DesignToken root.
     * @param target - The root to deregister
     */
    unregisterRoot(target = _custom_property_manager__WEBPACK_IMPORTED_MODULE_1__.defaultElement) {
        _custom_property_manager__WEBPACK_IMPORTED_MODULE_1__.RootStyleSheetTarget.unregisterRoot(target);
    },
});
/* eslint-enable @typescript-eslint/no-non-null-assertion */


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/di/di.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/di/di.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResolverBuilder": () => (/* binding */ ResolverBuilder),
/* harmony export */   "DefaultResolver": () => (/* binding */ DefaultResolver),
/* harmony export */   "ContainerConfiguration": () => (/* binding */ ContainerConfiguration),
/* harmony export */   "DI": () => (/* binding */ DI),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "ServiceLocator": () => (/* binding */ ServiceLocator),
/* harmony export */   "inject": () => (/* binding */ inject),
/* harmony export */   "transient": () => (/* binding */ transient),
/* harmony export */   "singleton": () => (/* binding */ singleton),
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "lazy": () => (/* binding */ lazy),
/* harmony export */   "optional": () => (/* binding */ optional),
/* harmony export */   "ignore": () => (/* binding */ ignore),
/* harmony export */   "newInstanceForScope": () => (/* binding */ newInstanceForScope),
/* harmony export */   "newInstanceOf": () => (/* binding */ newInstanceOf),
/* harmony export */   "ResolverImpl": () => (/* binding */ ResolverImpl),
/* harmony export */   "FactoryImpl": () => (/* binding */ FactoryImpl),
/* harmony export */   "ContainerImpl": () => (/* binding */ ContainerImpl),
/* harmony export */   "Registration": () => (/* binding */ Registration),
/* harmony export */   "validateKey": () => (/* binding */ validateKey)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");
/**
 * Big thanks to https://github.com/fkleuver and the https://github.com/aurelia/aurelia project
 * for the bulk of this code and many of the associated tests.
 */

// Tiny polyfill for TypeScript's Reflect metadata API.
const metadataByTarget = new Map();
if (!("metadata" in Reflect)) {
    Reflect.metadata = function (key, value) {
        return function (target) {
            Reflect.defineMetadata(key, value, target);
        };
    };
    Reflect.defineMetadata = function (key, value, target) {
        let metadata = metadataByTarget.get(target);
        if (metadata === void 0) {
            metadataByTarget.set(target, (metadata = new Map()));
        }
        metadata.set(key, value);
    };
    Reflect.getOwnMetadata = function (key, target) {
        const metadata = metadataByTarget.get(target);
        if (metadata !== void 0) {
            return metadata.get(key);
        }
        return void 0;
    };
}
/**
 * A utility class used that constructs and registers resolvers for a dependency
 * injection container. Supports a standard set of object lifetimes.
 * @public
 */
class ResolverBuilder {
    /**
     *
     * @param container - The container to create resolvers for.
     * @param key - The key to register resolvers under.
     */
    constructor(container, key) {
        this.container = container;
        this.key = key;
    }
    /**
     * Creates a resolver for an existing object instance.
     * @param value - The instance to resolve.
     * @returns The resolver.
     */
    instance(value) {
        return this.registerResolver(0 /* instance */, value);
    }
    /**
     * Creates a resolver that enforces a singleton lifetime.
     * @param value - The type to create and cache the singleton for.
     * @returns The resolver.
     */
    singleton(value) {
        return this.registerResolver(1 /* singleton */, value);
    }
    /**
     * Creates a resolver that creates a new instance for every dependency request.
     * @param value - The type to create instances of.
     * @returns - The resolver.
     */
    transient(value) {
        return this.registerResolver(2 /* transient */, value);
    }
    /**
     * Creates a resolver that invokes a callback function for every dependency resolution
     * request, allowing custom logic to return the dependency.
     * @param value - The callback to call during resolution.
     * @returns The resolver.
     */
    callback(value) {
        return this.registerResolver(3 /* callback */, value);
    }
    /**
     * Creates a resolver that invokes a callback function the first time that a dependency
     * resolution is requested. The returned value is then cached and provided for all
     * subsequent requests.
     * @param value - The callback to call during the first resolution.
     * @returns The resolver.
     */
    cachedCallback(value) {
        return this.registerResolver(3 /* callback */, cacheCallbackResult(value));
    }
    /**
     * Aliases the current key to a different key.
     * @param destinationKey - The key to point the alias to.
     * @returns The resolver.
     */
    aliasTo(destinationKey) {
        return this.registerResolver(5 /* alias */, destinationKey);
    }
    registerResolver(strategy, state) {
        const { container, key } = this;
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
        this.container = this.key = (void 0);
        return container.registerResolver(key, new ResolverImpl(key, strategy, state));
    }
}
function cloneArrayWithPossibleProps(source) {
    const clone = source.slice();
    const keys = Object.keys(source);
    const len = keys.length;
    let key;
    for (let i = 0; i < len; ++i) {
        key = keys[i];
        if (!isArrayIndex(key)) {
            clone[key] = source[key];
        }
    }
    return clone;
}
/**
 * A set of default resolvers useful in configuring a container.
 * @public
 */
const DefaultResolver = Object.freeze({
    /**
     * Disables auto-registration and throws for all un-registered dependencies.
     * @param key - The key to create the resolver for.
     */
    none(key) {
        throw Error(`${key.toString()} not registered, did you forget to add @singleton()?`);
    },
    /**
     * Provides default singleton resolution behavior during auto-registration.
     * @param key - The key to create the resolver for.
     * @returns The resolver.
     */
    singleton(key) {
        return new ResolverImpl(key, 1 /* singleton */, key);
    },
    /**
     * Provides default transient resolution behavior during auto-registration.
     * @param key - The key to create the resolver for.
     * @returns The resolver.
     */
    transient(key) {
        return new ResolverImpl(key, 2 /* transient */, key);
    },
});
/**
 * Configuration for a dependency injection container.
 * @public
 */
const ContainerConfiguration = Object.freeze({
    /**
     * The default configuration used when creating a DOM-disconnected container.
     * @remarks
     * The default creates a root container, with no parent container. It does not handle
     * owner requests and it uses singleton resolution behavior for auto-registration.
     */
    default: Object.freeze({
        parentLocator: () => null,
        responsibleForOwnerRequests: false,
        defaultResolver: DefaultResolver.singleton,
    }),
});
const dependencyLookup = new Map();
function getParamTypes(key) {
    return (Type) => {
        return Reflect.getOwnMetadata(key, Type);
    };
}
let rootDOMContainer = null;
/**
 * The gateway to dependency injection APIs.
 * @public
 */
const DI = Object.freeze({
    /**
     * Creates a new dependency injection container.
     * @param config - The configuration for the container.
     * @returns A newly created dependency injection container.
     */
    createContainer(config) {
        return new ContainerImpl(null, Object.assign({}, ContainerConfiguration.default, config));
    },
    /**
     * Finds the dependency injection container responsible for providing dependencies
     * to the specified node.
     * @param node - The node to find the responsible container for.
     * @returns The container responsible for providing dependencies to the node.
     * @remarks
     * This will be the same as the parent container if the specified node
     * does not itself host a container configured with responsibleForOwnerRequests.
     */
    findResponsibleContainer(node) {
        const owned = node.$$container$$;
        if (owned && owned.responsibleForOwnerRequests) {
            return owned;
        }
        return DI.findParentContainer(node);
    },
    /**
     * Find the dependency injection container up the DOM tree from this node.
     * @param node - The node to find the parent container for.
     * @returns The parent container of this node.
     * @remarks
     * This will be the same as the responsible container if the specified node
     * does not itself host a container configured with responsibleForOwnerRequests.
     */
    findParentContainer(node) {
        const event = new CustomEvent(DILocateParentEventType, {
            bubbles: true,
            composed: true,
            cancelable: true,
            detail: { container: void 0 },
        });
        node.dispatchEvent(event);
        return event.detail.container || DI.getOrCreateDOMContainer();
    },
    /**
     * Returns a dependency injection container if one is explicitly owned by the specified
     * node. If one is not owned, then a new container is created and assigned to the node.
     * @param node - The node to find or create the container for.
     * @param config - The configuration for the container if one needs to be created.
     * @returns The located or created container.
     * @remarks
     * This API does not search for a responsible or parent container. It looks only for a container
     * directly defined on the specified node and creates one at that location if one does not
     * already exist.
     */
    getOrCreateDOMContainer(node, config) {
        if (!node) {
            return (rootDOMContainer ||
                (rootDOMContainer = new ContainerImpl(null, Object.assign({}, ContainerConfiguration.default, config, {
                    parentLocator: () => null,
                }))));
        }
        return (node.$$container$$ ||
            new ContainerImpl(node, Object.assign({}, ContainerConfiguration.default, config, {
                parentLocator: DI.findParentContainer,
            })));
    },
    /**
     * Gets the "design:paramtypes" metadata for the specified type.
     * @param Type - The type to get the metadata for.
     * @returns The metadata array or undefined if no metadata is found.
     */
    getDesignParamtypes: getParamTypes("design:paramtypes"),
    /**
     * Gets the "di:paramtypes" metadata for the specified type.
     * @param Type - The type to get the metadata for.
     * @returns The metadata array or undefined if no metadata is found.
     */
    getAnnotationParamtypes: getParamTypes("di:paramtypes"),
    /**
     *
     * @param Type - Gets the "di:paramtypes" metadata for the specified type. If none is found,
     * an empty metadata array is created and added.
     * @returns The metadata array.
     */
    getOrCreateAnnotationParamTypes(Type) {
        let annotationParamtypes = this.getAnnotationParamtypes(Type);
        if (annotationParamtypes === void 0) {
            Reflect.defineMetadata("di:paramtypes", (annotationParamtypes = []), Type);
        }
        return annotationParamtypes;
    },
    /**
     * Gets the dependency keys representing what is needed to instantiate the specified type.
     * @param Type - The type to get the dependencies for.
     * @returns An array of dependency keys.
     */
    getDependencies(Type) {
        // Note: Every detail of this getDependencies method is pretty deliberate at the moment, and probably not yet 100% tested from every possible angle,
        // so be careful with making changes here as it can have a huge impact on complex end user apps.
        // Preferably, only make changes to the dependency resolution process via a RFC.
        let dependencies = dependencyLookup.get(Type);
        if (dependencies === void 0) {
            // Type.length is the number of constructor parameters. If this is 0, it could mean the class has an empty constructor
            // but it could also mean the class has no constructor at all (in which case it inherits the constructor from the prototype).
            // Non-zero constructor length + no paramtypes means emitDecoratorMetadata is off, or the class has no decorator.
            // We're not doing anything with the above right now, but it's good to keep in mind for any future issues.
            const inject = Type.inject;
            if (inject === void 0) {
                // design:paramtypes is set by tsc when emitDecoratorMetadata is enabled.
                const designParamtypes = DI.getDesignParamtypes(Type);
                // di:paramtypes is set by the parameter decorator from DI.createInterface or by @inject
                const annotationParamtypes = DI.getAnnotationParamtypes(Type);
                if (designParamtypes === void 0) {
                    if (annotationParamtypes === void 0) {
                        // Only go up the prototype if neither static inject nor any of the paramtypes is defined, as
                        // there is no sound way to merge a type's deps with its prototype's deps
                        const Proto = Object.getPrototypeOf(Type);
                        if (typeof Proto === "function" && Proto !== Function.prototype) {
                            dependencies = cloneArrayWithPossibleProps(DI.getDependencies(Proto));
                        }
                        else {
                            dependencies = [];
                        }
                    }
                    else {
                        // No design:paramtypes so just use the di:paramtypes
                        dependencies = cloneArrayWithPossibleProps(annotationParamtypes);
                    }
                }
                else if (annotationParamtypes === void 0) {
                    // No di:paramtypes so just use the design:paramtypes
                    dependencies = cloneArrayWithPossibleProps(designParamtypes);
                }
                else {
                    // We've got both, so merge them (in case of conflict on same index, di:paramtypes take precedence)
                    dependencies = cloneArrayWithPossibleProps(designParamtypes);
                    let len = annotationParamtypes.length;
                    let auAnnotationParamtype;
                    for (let i = 0; i < len; ++i) {
                        auAnnotationParamtype = annotationParamtypes[i];
                        if (auAnnotationParamtype !== void 0) {
                            dependencies[i] = auAnnotationParamtype;
                        }
                    }
                    const keys = Object.keys(annotationParamtypes);
                    len = keys.length;
                    let key;
                    for (let i = 0; i < len; ++i) {
                        key = keys[i];
                        if (!isArrayIndex(key)) {
                            dependencies[key] = annotationParamtypes[key];
                        }
                    }
                }
            }
            else {
                // Ignore paramtypes if we have static inject
                dependencies = cloneArrayWithPossibleProps(inject);
            }
            dependencyLookup.set(Type, dependencies);
        }
        return dependencies;
    },
    /**
     * Defines a property on a web component class. The value of this property will
     * be resolved from the dependency injection container responsible for the element
     * instance, based on where it is connected in the DOM.
     * @param target - The target to define the property on.
     * @param propertyName - The name of the property to define.
     * @param key - The dependency injection key.
     * @param respectConnection - Indicates whether or not to update the property value if the
     * hosting component is disconnected and then re-connected at a different location in the DOM.
     * @remarks
     * The respectConnection option is only applicable to elements that descend from FASTElement.
     */
    defineProperty(target, propertyName, key, respectConnection = false) {
        const diPropertyKey = `$di_${propertyName}`;
        Reflect.defineProperty(target, propertyName, {
            get: function () {
                let value = this[diPropertyKey];
                if (value === void 0) {
                    const container = this instanceof HTMLElement
                        ? DI.findResponsibleContainer(this)
                        : DI.getOrCreateDOMContainer();
                    value = container.get(key);
                    this[diPropertyKey] = value;
                    if (respectConnection && this instanceof _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.FASTElement) {
                        const notifier = this.$fastController;
                        const handleChange = () => {
                            const newContainer = DI.findResponsibleContainer(this);
                            const newValue = newContainer.get(key);
                            const oldValue = this[diPropertyKey];
                            if (newValue !== oldValue) {
                                this[diPropertyKey] = value;
                                notifier.notify(propertyName);
                            }
                        };
                        notifier.subscribe({ handleChange }, "isConnected");
                    }
                }
                return value;
            },
        });
    },
    /**
     * Creates a dependency injection key.
     * @param nameConfigOrCallback - A friendly name for the key or a lambda that configures a
     * default resolution for the dependency.
     * @param configuror - If a friendly name was provided for the first parameter, then an optional
     * lambda that configures a default resolution for the dependency can be provided second.
     * @returns The created key.
     * @remarks
     * The created key can be used as a property decorator or constructor parameter decorator,
     * in addition to its standard use in an inject array or through direct container APIs.
     */
    createInterface(nameConfigOrCallback, configuror) {
        const configure = typeof nameConfigOrCallback === "function"
            ? nameConfigOrCallback
            : configuror;
        const friendlyName = typeof nameConfigOrCallback === "string"
            ? nameConfigOrCallback
            : nameConfigOrCallback && "friendlyName" in nameConfigOrCallback
                ? nameConfigOrCallback.friendlyName || defaultFriendlyName
                : defaultFriendlyName;
        const respectConnection = typeof nameConfigOrCallback === "string"
            ? false
            : nameConfigOrCallback && "respectConnection" in nameConfigOrCallback
                ? nameConfigOrCallback.respectConnection || false
                : false;
        const Interface = function (target, property, index) {
            if (target == null || new.target !== undefined) {
                throw new Error(`No registration for interface: '${Interface.friendlyName}'`);
            }
            if (property) {
                DI.defineProperty(target, property, Interface, respectConnection);
            }
            else {
                const annotationParamtypes = DI.getOrCreateAnnotationParamTypes(target);
                annotationParamtypes[index] = Interface;
            }
        };
        Interface.$isInterface = true;
        Interface.friendlyName = friendlyName == null ? "(anonymous)" : friendlyName;
        if (configure != null) {
            Interface.register = function (container, key) {
                return configure(new ResolverBuilder(container, key !== null && key !== void 0 ? key : Interface));
            };
        }
        Interface.toString = function toString() {
            return `InterfaceSymbol<${Interface.friendlyName}>`;
        };
        return Interface;
    },
    /**
     * A decorator that specifies what to inject into its target.
     * @param dependencies - The dependencies to inject.
     * @returns The decorator to be applied to the target class.
     * @remarks
     * The decorator can be used to decorate a class, listing all of the classes dependencies.
     * Or it can be used to decorate a constructor paramter, indicating what to inject for that
     * parameter.
     * Or it can be used for a web component property, indicating what that property should resolve to.
     */
    inject(...dependencies) {
        return function (target, key, descriptor) {
            if (typeof descriptor === "number") {
                // It's a parameter decorator.
                const annotationParamtypes = DI.getOrCreateAnnotationParamTypes(target);
                const dep = dependencies[0];
                if (dep !== void 0) {
                    annotationParamtypes[descriptor] = dep;
                }
            }
            else if (key) {
                DI.defineProperty(target, key, dependencies[0]);
            }
            else {
                const annotationParamtypes = descriptor
                    ? DI.getOrCreateAnnotationParamTypes(descriptor.value)
                    : DI.getOrCreateAnnotationParamTypes(target);
                let dep;
                for (let i = 0; i < dependencies.length; ++i) {
                    dep = dependencies[i];
                    if (dep !== void 0) {
                        annotationParamtypes[i] = dep;
                    }
                }
            }
        };
    },
    /**
     * Registers the `target` class as a transient dependency; each time the dependency is resolved
     * a new instance will be created.
     *
     * @param target - The class / constructor function to register as transient.
     * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
     *
     * @example
     * On an existing class
     * ```ts
     * class Foo { }
     * DI.transient(Foo);
     * ```
     *
     * @example
     * Inline declaration
     *
     * ```ts
     * const Foo = DI.transient(class { });
     * // Foo is now strongly typed with register
     * Foo.register(container);
     * ```
     *
     * @public
     */
    transient(target) {
        target.register = function register(container) {
            const registration = Registration.transient(target, target);
            return registration.register(container);
        };
        target.registerInRequestor = false;
        return target;
    },
    /**
     * Registers the `target` class as a singleton dependency; the class will only be created once. Each
     * consecutive time the dependency is resolved, the same instance will be returned.
     *
     * @param target - The class / constructor function to register as a singleton.
     * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
     * @example
     * On an existing class
     * ```ts
     * class Foo { }
     * DI.singleton(Foo);
     * ```
     *
     * @example
     * Inline declaration
     * ```ts
     * const Foo = DI.singleton(class { });
     * // Foo is now strongly typed with register
     * Foo.register(container);
     * ```
     *
     * @public
     */
    singleton(target, options = defaultSingletonOptions) {
        target.register = function register(container) {
            const registration = Registration.singleton(target, target);
            return registration.register(container);
        };
        target.registerInRequestor = options.scoped;
        return target;
    },
});
/**
 * The interface key that resolves the dependency injection container itself.
 * @public
 */
const Container = DI.createInterface("Container");
/**
 * The interface key that resolves the service locator itself.
 * @public
 */
const ServiceLocator = Container;
function createResolver(getter) {
    return function (key) {
        const resolver = function (target, property, descriptor) {
            DI.inject(resolver)(target, property, descriptor);
        };
        resolver.$isResolver = true;
        resolver.resolve = function (handler, requestor) {
            return getter(key, handler, requestor);
        };
        return resolver;
    };
}
/**
 * A decorator that specifies what to inject into its target.
 * @param dependencies - The dependencies to inject.
 * @returns The decorator to be applied to the target class.
 * @remarks
 * The decorator can be used to decorate a class, listing all of the classes dependencies.
 * Or it can be used to decorate a constructor paramter, indicating what to inject for that
 * parameter.
 * Or it can be used for a web component property, indicating what that property should resolve to.
 *
 * @public
 */
const inject = DI.inject;
function transientDecorator(target) {
    return DI.transient(target);
}
function transient(target) {
    return target == null ? transientDecorator : transientDecorator(target);
}
const defaultSingletonOptions = { scoped: false };
function singletonDecorator(target) {
    return DI.singleton(target);
}
/**
 * @public
 */
function singleton(targetOrOptions) {
    if (typeof targetOrOptions === "function") {
        return DI.singleton(targetOrOptions);
    }
    return function ($target) {
        return DI.singleton($target, targetOrOptions);
    };
}
function createAllResolver(getter) {
    return function (key, searchAncestors) {
        searchAncestors = !!searchAncestors;
        const resolver = function (target, property, descriptor) {
            DI.inject(resolver)(target, property, descriptor);
        };
        resolver.$isResolver = true;
        resolver.resolve = function (handler, requestor) {
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            return getter(key, handler, requestor, searchAncestors);
        };
        return resolver;
    };
}
/**
 * A decorator and DI resolver that will resolve an array of all dependencies
 * registered with the specified key.
 * @param key - The key to resolve all dependencies for.
 * @param searchAncestors - [optional] Indicates whether to search ancestor containers.
 * @public
 */
const all = createAllResolver((key, handler, requestor, searchAncestors) => requestor.getAll(key, searchAncestors));
/**
 * A decorator that lazily injects a dependency depending on whether the `Key` is present at the time of function call.
 *
 * @example
 * You need to make your argument a function that returns the type, for example
 * ```ts
 * class Foo {
 *   constructor( @lazy('random') public random: () => number )
 * }
 * const foo = container.get(Foo); // instanceof Foo
 * foo.random(); // throws
 * ```
 * would throw an exception because you haven't registered `'random'` before calling the method.
 * @example
 * This, would give you a new 'Math.random()' number each time.
 * ```ts
 * class Foo {
 *   constructor( @lazy('random') public random: () => random )
 * }
 * container.register(Registration.callback('random', Math.random ));
 * container.get(Foo).random(); // some random number
 * container.get(Foo).random(); // another random number
 * ```
 *
 * `@lazy` does not manage the lifecycle of the underlying key. If you want a singleton, you have to register as a
 * `singleton`, `transient` would also behave as you would expect, providing you a new instance each time.
 *
 * @param key - The key to lazily resolve.
 * see {@link DI.createInterface} on interactions with interfaces
 *
 * @public
 */
const lazy = createResolver((key, handler, requestor) => {
    return () => requestor.get(key);
});
/**
 * A decorator that allows you to optionally inject a dependency depending on whether the [[`Key`]] is present, for example:
 * @example
 * ```ts
 * class Foo {
 *   constructor( @inject('mystring') public str: string = 'somestring' )
 * }
 * container.get(Foo); // throws
 * ```
 * would fail
 *
 * @example
 * ```ts
 * class Foo {
 *   constructor( @optional('mystring') public str: string = 'somestring' )
 * }
 * container.get(Foo).str // somestring
 * ```
 * if you use it without a default it will inject `undefined`, so remember to mark your input type as
 * possibly `undefined`!
 *
 * @param key - The key to optionally resolve.
 * see {@link DI.createInterface} on interactions with interfaces
 *
 * @public
 */
const optional = createResolver((key, handler, requestor) => {
    if (requestor.has(key, true)) {
        return requestor.get(key);
    }
    else {
        return undefined;
    }
});
/**
 * A decorator that tells the container not to try to inject a dependency.
 *
 * @public
 */
function ignore(target, property, descriptor) {
    DI.inject(ignore)(target, property, descriptor);
}
// Hack: casting below used to prevent TS from generate a namespace which can't be commented
// and results in documentation validation errors.
ignore.$isResolver = true;
ignore.resolve = () => undefined;
/**
 * A decorator that indicates that a new instance should be injected scoped to the
 * container that requested the instance.
 * @param key - The dependency key for the new instance.
 * @remarks
 * This creates a resolver with an instance strategy pointing to the new instance, effectively
 * making this a singleton, scoped to the container or DOM's subtree.
 *
 * @public
 */
const newInstanceForScope = createResolver((key, handler, requestor) => {
    const instance = createNewInstance(key, handler);
    const resolver = new ResolverImpl(key, 0 /* instance */, instance);
    requestor.registerResolver(key, resolver);
    return instance;
});
/**
 * A decorator that indicates that a new instance should be injected.
 * @param key - The dependency key for the new instance.
 * @remarks
 * The instance is not internally cached with a resolver as newInstanceForScope does.
 *
 * @public
 */
const newInstanceOf = createResolver((key, handler, _requestor) => createNewInstance(key, handler));
function createNewInstance(key, handler) {
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    return handler.getFactory(key).construct(handler);
}
/** @internal */
class ResolverImpl {
    constructor(key, strategy, state) {
        this.key = key;
        this.strategy = strategy;
        this.state = state;
        this.resolving = false;
    }
    get $isResolver() {
        return true;
    }
    register(container) {
        return container.registerResolver(this.key, this);
    }
    resolve(handler, requestor) {
        switch (this.strategy) {
            case 0 /* instance */:
                return this.state;
            case 1 /* singleton */: {
                if (this.resolving) {
                    throw new Error(`Cyclic dependency found: ${this.state.name}`);
                }
                this.resolving = true;
                this.state = handler
                    .getFactory(this.state)
                    .construct(requestor);
                this.strategy = 0 /* instance */;
                this.resolving = false;
                return this.state;
            }
            case 2 /* transient */: {
                // Always create transients from the requesting container
                const factory = handler.getFactory(this.state);
                if (factory === null) {
                    throw new Error(`Resolver for ${String(this.key)} returned a null factory`);
                }
                return factory.construct(requestor);
            }
            case 3 /* callback */:
                return this.state(handler, requestor, this);
            case 4 /* array */:
                return this.state[0].resolve(handler, requestor);
            case 5 /* alias */:
                return requestor.get(this.state);
            default:
                throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`);
        }
    }
    getFactory(container) {
        var _a, _b, _c;
        switch (this.strategy) {
            case 1 /* singleton */:
            case 2 /* transient */:
                return container.getFactory(this.state);
            case 5 /* alias */:
                return (_c = (_b = (_a = container.getResolver(this.state)) === null || _a === void 0 ? void 0 : _a.getFactory) === null || _b === void 0 ? void 0 : _b.call(_a, container)) !== null && _c !== void 0 ? _c : null;
            default:
                return null;
        }
    }
}
function containerGetKey(d) {
    return this.get(d);
}
function transformInstance(inst, transform) {
    return transform(inst);
}
/** @internal */
class FactoryImpl {
    constructor(Type, dependencies) {
        this.Type = Type;
        this.dependencies = dependencies;
        this.transformers = null;
    }
    construct(container, dynamicDependencies) {
        let instance;
        if (dynamicDependencies === void 0) {
            instance = new this.Type(...this.dependencies.map(containerGetKey, container));
        }
        else {
            instance = new this.Type(...this.dependencies.map(containerGetKey, container), ...dynamicDependencies);
        }
        if (this.transformers == null) {
            return instance;
        }
        return this.transformers.reduce(transformInstance, instance);
    }
    registerTransformer(transformer) {
        (this.transformers || (this.transformers = [])).push(transformer);
    }
}
const containerResolver = {
    $isResolver: true,
    resolve(handler, requestor) {
        return requestor;
    },
};
function isRegistry(obj) {
    return typeof obj.register === "function";
}
function isSelfRegistry(obj) {
    return isRegistry(obj) && typeof obj.registerInRequestor === "boolean";
}
function isRegisterInRequester(obj) {
    return isSelfRegistry(obj) && obj.registerInRequestor;
}
function isClass(obj) {
    return obj.prototype !== void 0;
}
const InstrinsicTypeNames = new Set([
    "Array",
    "ArrayBuffer",
    "Boolean",
    "DataView",
    "Date",
    "Error",
    "EvalError",
    "Float32Array",
    "Float64Array",
    "Function",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Map",
    "Number",
    "Object",
    "Promise",
    "RangeError",
    "ReferenceError",
    "RegExp",
    "Set",
    "SharedArrayBuffer",
    "String",
    "SyntaxError",
    "TypeError",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "URIError",
    "WeakMap",
    "WeakSet",
]);
const DILocateParentEventType = "__DI_LOCATE_PARENT__";
const factories = new Map();
/**
 * @internal
 */
class ContainerImpl {
    constructor(owner, config) {
        this.owner = owner;
        this.config = config;
        this._parent = void 0;
        this.registerDepth = 0;
        this.context = null;
        if (owner !== null) {
            owner.$$container$$ = this;
        }
        this.resolvers = new Map();
        this.resolvers.set(Container, containerResolver);
        if (owner instanceof Node) {
            owner.addEventListener(DILocateParentEventType, (e) => {
                if (e.composedPath()[0] !== this.owner) {
                    e.detail.container = this;
                    e.stopImmediatePropagation();
                }
            });
        }
    }
    get parent() {
        if (this._parent === void 0) {
            this._parent = this.config.parentLocator(this.owner);
        }
        return this._parent;
    }
    get depth() {
        return this.parent === null ? 0 : this.parent.depth + 1;
    }
    get responsibleForOwnerRequests() {
        return this.config.responsibleForOwnerRequests;
    }
    registerWithContext(context, ...params) {
        this.context = context;
        this.register(...params);
        this.context = null;
        return this;
    }
    register(...params) {
        if (++this.registerDepth === 100) {
            throw new Error("Unable to autoregister dependency");
            // Most likely cause is trying to register a plain object that does not have a
            // register method and is not a class constructor
        }
        let current;
        let keys;
        let value;
        let j;
        let jj;
        const context = this.context;
        for (let i = 0, ii = params.length; i < ii; ++i) {
            current = params[i];
            if (!isObject(current)) {
                continue;
            }
            if (isRegistry(current)) {
                current.register(this, context);
            }
            else if (isClass(current)) {
                Registration.singleton(current, current).register(this);
            }
            else {
                keys = Object.keys(current);
                j = 0;
                jj = keys.length;
                for (; j < jj; ++j) {
                    value = current[keys[j]];
                    if (!isObject(value)) {
                        continue;
                    }
                    // note: we could remove this if-branch and call this.register directly
                    // - the extra check is just a perf tweak to create fewer unnecessary arrays by the spread operator
                    if (isRegistry(value)) {
                        value.register(this, context);
                    }
                    else {
                        this.register(value);
                    }
                }
            }
        }
        --this.registerDepth;
        return this;
    }
    registerResolver(key, resolver) {
        validateKey(key);
        const resolvers = this.resolvers;
        const result = resolvers.get(key);
        if (result == null) {
            resolvers.set(key, resolver);
        }
        else if (result instanceof ResolverImpl &&
            result.strategy === 4 /* array */) {
            result.state.push(resolver);
        }
        else {
            resolvers.set(key, new ResolverImpl(key, 4 /* array */, [result, resolver]));
        }
        return resolver;
    }
    registerTransformer(key, transformer) {
        const resolver = this.getResolver(key);
        if (resolver == null) {
            return false;
        }
        if (resolver.getFactory) {
            const factory = resolver.getFactory(this);
            if (factory == null) {
                return false;
            }
            // This type cast is a bit of a hacky one, necessary due to the duplicity of IResolverLike.
            // Problem is that that interface's type arg can be of type Key, but the getFactory method only works on
            // type Constructable. So the return type of that optional method has this additional constraint, which
            // seems to confuse the type checker.
            factory.registerTransformer(transformer);
            return true;
        }
        return false;
    }
    getResolver(key, autoRegister = true) {
        validateKey(key);
        if (key.resolve !== void 0) {
            return key;
        }
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */
        let current = this;
        let resolver;
        while (current != null) {
            resolver = current.resolvers.get(key);
            if (resolver == null) {
                if (current.parent == null) {
                    const handler = isRegisterInRequester(key)
                        ? this
                        : current;
                    return autoRegister ? this.jitRegister(key, handler) : null;
                }
                current = current.parent;
            }
            else {
                return resolver;
            }
        }
        return null;
    }
    has(key, searchAncestors = false) {
        return this.resolvers.has(key)
            ? true
            : searchAncestors && this.parent != null
                ? this.parent.has(key, true)
                : false;
    }
    get(key) {
        validateKey(key);
        if (key.$isResolver) {
            return key.resolve(this, this);
        }
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */
        let current = this;
        let resolver;
        while (current != null) {
            resolver = current.resolvers.get(key);
            if (resolver == null) {
                if (current.parent == null) {
                    const handler = isRegisterInRequester(key)
                        ? this
                        : current;
                    resolver = this.jitRegister(key, handler);
                    return resolver.resolve(current, this);
                }
                current = current.parent;
            }
            else {
                return resolver.resolve(current, this);
            }
        }
        throw new Error(`Unable to resolve key: ${key}`);
    }
    getAll(key, searchAncestors = false) {
        validateKey(key);
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */
        const requestor = this;
        let current = requestor;
        let resolver;
        if (searchAncestors) {
            let resolutions = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.emptyArray;
            while (current != null) {
                resolver = current.resolvers.get(key);
                if (resolver != null) {
                    resolutions = resolutions.concat(
                    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
                    buildAllResponse(resolver, current, requestor));
                }
                current = current.parent;
            }
            return resolutions;
        }
        else {
            while (current != null) {
                resolver = current.resolvers.get(key);
                if (resolver == null) {
                    current = current.parent;
                    if (current == null) {
                        return _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.emptyArray;
                    }
                }
                else {
                    return buildAllResponse(resolver, current, requestor);
                }
            }
        }
        return _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.emptyArray;
    }
    getFactory(Type) {
        let factory = factories.get(Type);
        if (factory === void 0) {
            if (isNativeFunction(Type)) {
                throw new Error(`${Type.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);
            }
            factories.set(Type, (factory = new FactoryImpl(Type, DI.getDependencies(Type))));
        }
        return factory;
    }
    registerFactory(key, factory) {
        factories.set(key, factory);
    }
    createChild(config) {
        return new ContainerImpl(null, Object.assign({}, this.config, config, { parentLocator: () => this }));
    }
    jitRegister(keyAsValue, handler) {
        if (typeof keyAsValue !== "function") {
            throw new Error(`Attempted to jitRegister something that is not a constructor: '${keyAsValue}'. Did you forget to register this dependency?`);
        }
        if (InstrinsicTypeNames.has(keyAsValue.name)) {
            throw new Error(`Attempted to jitRegister an intrinsic type: ${keyAsValue.name}. Did you forget to add @inject(Key)`);
        }
        if (isRegistry(keyAsValue)) {
            const registrationResolver = keyAsValue.register(handler);
            if (!(registrationResolver instanceof Object) ||
                registrationResolver.resolve == null) {
                const newResolver = handler.resolvers.get(keyAsValue);
                if (newResolver != void 0) {
                    return newResolver;
                }
                throw new Error("A valid resolver was not returned from the static register method");
            }
            return registrationResolver;
        }
        else if (keyAsValue.$isInterface) {
            throw new Error(`Attempted to jitRegister an interface: ${keyAsValue.friendlyName}`);
        }
        else {
            const resolver = this.config.defaultResolver(keyAsValue, handler);
            handler.resolvers.set(keyAsValue, resolver);
            return resolver;
        }
    }
}
const cache = new WeakMap();
function cacheCallbackResult(fun) {
    return function (handler, requestor, resolver) {
        if (cache.has(resolver)) {
            return cache.get(resolver);
        }
        const t = fun(handler, requestor, resolver);
        cache.set(resolver, t);
        return t;
    };
}
/**
 * You can use the resulting Registration of any of the factory methods
 * to register with the container.
 *
 * @example
 * ```
 * class Foo {}
 * const container = DI.createContainer();
 * container.register(Registration.instance(Foo, new Foo()));
 * container.get(Foo);
 * ```
 *
 * @public
 */
const Registration = Object.freeze({
    /**
     * Allows you to pass an instance.
     * Every time you request this {@link Key} you will get this instance back.
     *
     * @example
     * ```
     * Registration.instance(Foo, new Foo()));
     * ```
     *
     * @param key - The key to register the instance under.
     * @param value - The instance to return when the key is requested.
     */
    instance(key, value) {
        return new ResolverImpl(key, 0 /* instance */, value);
    },
    /**
     * Creates an instance from the class.
     * Every time you request this {@link Key} you will get the same one back.
     *
     * @example
     * ```
     * Registration.singleton(Foo, Foo);
     * ```
     *
     * @param key - The key to register the singleton under.
     * @param value - The class to instantiate as a singleton when first requested.
     */
    singleton(key, value) {
        return new ResolverImpl(key, 1 /* singleton */, value);
    },
    /**
     * Creates an instance from a class.
     * Every time you request this {@link Key} you will get a new instance.
     *
     * @example
     * ```
     * Registration.instance(Foo, Foo);
     * ```
     *
     * @param key - The key to register the instance type under.
     * @param value - The class to instantiate each time the key is requested.
     */
    transient(key, value) {
        return new ResolverImpl(key, 2 /* transient */, value);
    },
    /**
     * Delegates to a callback function to provide the dependency.
     * Every time you request this {@link Key} the callback will be invoked to provide
     * the dependency.
     *
     * @example
     * ```
     * Registration.callback(Foo, () => new Foo());
     * Registration.callback(Bar, (c: Container) => new Bar(c.get(Foo)));
     * ```
     *
     * @param key - The key to register the callback for.
     * @param callback - The function that is expected to return the dependency.
     */
    callback(key, callback) {
        return new ResolverImpl(key, 3 /* callback */, callback);
    },
    /**
     * Delegates to a callback function to provide the dependency and then caches the
     * dependency for future requests.
     *
     * @example
     * ```
     * Registration.cachedCallback(Foo, () => new Foo());
     * Registration.cachedCallback(Bar, (c: Container) => new Bar(c.get(Foo)));
     * ```
     *
     * @param key - The key to register the callback for.
     * @param callback - The function that is expected to return the dependency.
     * @remarks
     * If you pass the same Registration to another container, the same cached value will be used.
     * Should all references to the resolver returned be removed, the cache will expire.
     */
    cachedCallback(key, callback) {
        return new ResolverImpl(key, 3 /* callback */, cacheCallbackResult(callback));
    },
    /**
     * Creates an alternate {@link Key} to retrieve an instance by.
     *
     * @example
     * ```
     * Register.singleton(Foo, Foo)
     * Register.aliasTo(Foo, MyFoos);
     *
     * container.getAll(MyFoos) // contains an instance of Foo
     * ```
     *
     * @param originalKey - The original key that has been registered.
     * @param aliasKey - The alias to the original key.
     */
    aliasTo(originalKey, aliasKey) {
        return new ResolverImpl(aliasKey, 5 /* alias */, originalKey);
    },
});
/** @internal */
function validateKey(key) {
    if (key === null || key === void 0) {
        throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?");
    }
}
function buildAllResponse(resolver, handler, requestor) {
    if (resolver instanceof ResolverImpl &&
        resolver.strategy === 4 /* array */) {
        const state = resolver.state;
        let i = state.length;
        const results = new Array(i);
        while (i--) {
            results[i] = state[i].resolve(handler, requestor);
        }
        return results;
    }
    return [resolver.resolve(handler, requestor)];
}
const defaultFriendlyName = "(anonymous)";
function isObject(value) {
    return (typeof value === "object" && value !== null) || typeof value === "function";
}
/**
 * Determine whether the value is a native function.
 *
 * @param fn - The function to check.
 * @returns `true` is the function is a native function, otherwise `false`
 */
const isNativeFunction = (function () {
    const lookup = new WeakMap();
    let isNative = false;
    let sourceText = "";
    let i = 0;
    return function (fn) {
        isNative = lookup.get(fn);
        if (isNative === void 0) {
            sourceText = fn.toString();
            i = sourceText.length;
            // http://www.ecma-international.org/ecma-262/#prod-NativeFunction
            isNative =
                // 29 is the length of 'function () { [native code] }' which is the smallest length of a native function string
                i >= 29 &&
                    // 100 seems to be a safe upper bound of the max length of a native function. In Chrome and FF it's 56, in Edge it's 61.
                    i <= 100 &&
                    // This whole heuristic *could* be tricked by a comment. Do we need to care about that?
                    sourceText.charCodeAt(i - 1) === 0x7d && // }
                    // TODO: the spec is a little vague about the precise constraints, so we do need to test this across various browsers to make sure just one whitespace is a safe assumption.
                    sourceText.charCodeAt(i - 2) <= 0x20 && // whitespace
                    sourceText.charCodeAt(i - 3) === 0x5d && // ]
                    sourceText.charCodeAt(i - 4) === 0x65 && // e
                    sourceText.charCodeAt(i - 5) === 0x64 && // d
                    sourceText.charCodeAt(i - 6) === 0x6f && // o
                    sourceText.charCodeAt(i - 7) === 0x63 && // c
                    sourceText.charCodeAt(i - 8) === 0x20 && //
                    sourceText.charCodeAt(i - 9) === 0x65 && // e
                    sourceText.charCodeAt(i - 10) === 0x76 && // v
                    sourceText.charCodeAt(i - 11) === 0x69 && // i
                    sourceText.charCodeAt(i - 12) === 0x74 && // t
                    sourceText.charCodeAt(i - 13) === 0x61 && // a
                    sourceText.charCodeAt(i - 14) === 0x6e && // n
                    sourceText.charCodeAt(i - 15) === 0x58; // [
            lookup.set(fn, isNative);
        }
        return isNative;
    };
})();
const isNumericLookup = {};
function isArrayIndex(value) {
    switch (typeof value) {
        case "number":
            return value >= 0 && (value | 0) === value;
        case "string": {
            const result = isNumericLookup[value];
            if (result !== void 0) {
                return result;
            }
            const length = value.length;
            if (length === 0) {
                return (isNumericLookup[value] = false);
            }
            let ch = 0;
            for (let i = 0; i < length; ++i) {
                ch = value.charCodeAt(i);
                if ((i === 0 && ch === 0x30 && length > 1) /* must not start with 0 */ ||
                    ch < 0x30 /* 0 */ ||
                    ch > 0x39 /* 9 */) {
                    return (isNumericLookup[value] = false);
                }
            }
            return (isNumericLookup[value] = true);
        }
        default:
            return false;
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportsElementInternals": () => (/* binding */ supportsElementInternals),
/* harmony export */   "FormAssociated": () => (/* binding */ FormAssociated),
/* harmony export */   "CheckableFormAssociated": () => (/* binding */ CheckableFormAssociated)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/key-codes.js");


const proxySlotName = "form-associated-proxy";
const ElementInternalsKey = "ElementInternals";
/**
 * @alpha
 */
const supportsElementInternals = ElementInternalsKey in window &&
    "setFormValue" in window[ElementInternalsKey].prototype;
const InternalsMap = new Map();
/**
 * Base function for providing Custom Element Form Association.
 *
 * @alpha
 */
function FormAssociated(BaseCtor) {
    const C = class extends BaseCtor {
        constructor(...args) {
            super(...args);
            /**
             * Track whether the value has been changed from the initial value
             */
            this.dirtyValue = false;
            /**
             * Sets the element's disabled state. A disabled element will not be included during form submission.
             *
             * @remarks
             * HTML Attribute: disabled
             */
            this.disabled = false;
            /**
             * These are events that are still fired by the proxy
             * element based on user / programmatic interaction.
             *
             * The proxy implementation should be transparent to
             * the app author, so block these events from emitting.
             */
            this.proxyEventsToBlock = ["change", "click"];
            this.proxyInitialized = false;
            this.required = false;
            this.initialValue = this.initialValue || "";
            if (!this.elementInternals) {
                // When elementInternals is not supported, formResetCallback is
                // bound to an event listener, so ensure the handler's `this`
                // context is correct.
                this.formResetCallback = this.formResetCallback.bind(this);
            }
        }
        /**
         * Must evaluate to true to enable elementInternals.
         * Feature detects API support and resolve respectively
         *
         * @internal
         */
        static get formAssociated() {
            return supportsElementInternals;
        }
        /**
         * Returns the validity state of the element
         *
         * @alpha
         */
        get validity() {
            return this.elementInternals
                ? this.elementInternals.validity
                : this.proxy.validity;
        }
        /**
         * Retrieve a reference to the associated form.
         * Returns null if not associated to any form.
         *
         * @alpha
         */
        get form() {
            return this.elementInternals ? this.elementInternals.form : this.proxy.form;
        }
        /**
         * Retrieve the localized validation message,
         * or custom validation message if set.
         *
         * @alpha
         */
        get validationMessage() {
            return this.elementInternals
                ? this.elementInternals.validationMessage
                : this.proxy.validationMessage;
        }
        /**
         * Whether the element will be validated when the
         * form is submitted
         */
        get willValidate() {
            return this.elementInternals
                ? this.elementInternals.willValidate
                : this.proxy.willValidate;
        }
        /**
         * A reference to all associated label elements
         */
        get labels() {
            if (this.elementInternals) {
                return Object.freeze(Array.from(this.elementInternals.labels));
            }
            else if (this.proxy instanceof HTMLElement &&
                this.proxy.ownerDocument &&
                this.id) {
                // Labels associated by wrapping the element: <label><custom-element></custom-element></label>
                const parentLabels = this.proxy.labels;
                // Labels associated using the `for` attribute
                const forLabels = Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`));
                const labels = parentLabels
                    ? forLabels.concat(Array.from(parentLabels))
                    : forLabels;
                return Object.freeze(labels);
            }
            else {
                return _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.emptyArray;
            }
        }
        /**
         * Invoked when the `value` property changes
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `valueChanged` method
         * They must be sure to invoke `super.valueChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        valueChanged(previous, next) {
            this.dirtyValue = true;
            if (this.proxy instanceof HTMLElement) {
                this.proxy.value = this.value;
            }
            this.currentValue = this.value;
            this.setFormValue(this.value);
            this.validate();
        }
        currentValueChanged() {
            this.value = this.currentValue;
        }
        /**
         * Invoked when the `initialValue` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `initialValueChanged` method
         * They must be sure to invoke `super.initialValueChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        initialValueChanged(previous, next) {
            // If the value is clean and the component is connected to the DOM
            // then set value equal to the attribute value.
            if (!this.dirtyValue) {
                this.value = this.initialValue;
                this.dirtyValue = false;
            }
        }
        /**
         * Invoked when the `disabled` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `disabledChanged` method
         * They must be sure to invoke `super.disabledChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        disabledChanged(previous, next) {
            if (this.proxy instanceof HTMLElement) {
                this.proxy.disabled = this.disabled;
            }
            _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => this.classList.toggle("disabled", this.disabled));
        }
        /**
         * Invoked when the `name` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `nameChanged` method
         * They must be sure to invoke `super.nameChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        nameChanged(previous, next) {
            if (this.proxy instanceof HTMLElement) {
                this.proxy.name = this.name;
            }
        }
        /**
         * Invoked when the `required` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `requiredChanged` method
         * They must be sure to invoke `super.requiredChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        requiredChanged(prev, next) {
            if (this.proxy instanceof HTMLElement) {
                this.proxy.required = this.required;
            }
            _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => this.classList.toggle("required", this.required));
            this.validate();
        }
        /**
         * The element internals object. Will only exist
         * in browsers supporting the attachInternals API
         */
        get elementInternals() {
            if (!supportsElementInternals) {
                return null;
            }
            let internals = InternalsMap.get(this);
            if (!internals) {
                internals = this.attachInternals();
                InternalsMap.set(this, internals);
            }
            return internals;
        }
        /**
         * @internal
         */
        connectedCallback() {
            super.connectedCallback();
            this.addEventListener("keypress", this._keypressHandler);
            if (!this.value) {
                this.value = this.initialValue;
                this.dirtyValue = false;
            }
            if (!this.elementInternals) {
                this.attachProxy();
                if (this.form) {
                    this.form.addEventListener("reset", this.formResetCallback);
                }
            }
        }
        /**
         * @internal
         */
        disconnectedCallback() {
            this.proxyEventsToBlock.forEach(name => this.proxy.removeEventListener(name, this.stopPropagation));
            if (!this.elementInternals && this.form) {
                this.form.removeEventListener("reset", this.formResetCallback);
            }
        }
        /**
         * Return the current validity of the element.
         */
        checkValidity() {
            return this.elementInternals
                ? this.elementInternals.checkValidity()
                : this.proxy.checkValidity();
        }
        /**
         * Return the current validity of the element.
         * If false, fires an invalid event at the element.
         */
        reportValidity() {
            return this.elementInternals
                ? this.elementInternals.reportValidity()
                : this.proxy.reportValidity();
        }
        /**
         * Set the validity of the control. In cases when the elementInternals object is not
         * available (and the proxy element is used to report validity), this function will
         * do nothing unless a message is provided, at which point the setCustomValidity method
         * of the proxy element will be invoked with the provided message.
         * @param flags - Validity flags
         * @param message - Optional message to supply
         * @param anchor - Optional element used by UA to display an interactive validation UI
         */
        setValidity(flags, message, anchor) {
            if (this.elementInternals) {
                this.elementInternals.setValidity(flags, message, anchor);
            }
            else if (typeof message === "string") {
                this.proxy.setCustomValidity(message);
            }
        }
        /**
         * Invoked when a connected component's form or fieldset has its disabled
         * state changed.
         * @param disabled - the disabled value of the form / fieldset
         */
        formDisabledCallback(disabled) {
            this.disabled = disabled;
        }
        formResetCallback() {
            this.value = this.initialValue;
            this.dirtyValue = false;
        }
        /**
         * Attach the proxy element to the DOM
         */
        attachProxy() {
            var _a;
            if (!this.proxyInitialized) {
                this.proxyInitialized = true;
                this.proxy.style.display = "none";
                this.proxyEventsToBlock.forEach(name => this.proxy.addEventListener(name, this.stopPropagation));
                // These are typically mapped to the proxy during
                // property change callbacks, but during initialization
                // on the initial call of the callback, the proxy is
                // still undefined. We should find a better way to address this.
                this.proxy.disabled = this.disabled;
                this.proxy.required = this.required;
                if (typeof this.name === "string") {
                    this.proxy.name = this.name;
                }
                if (typeof this.value === "string") {
                    this.proxy.value = this.value;
                }
                this.proxy.setAttribute("slot", proxySlotName);
                this.proxySlot = document.createElement("slot");
                this.proxySlot.setAttribute("name", proxySlotName);
            }
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.proxySlot);
            this.appendChild(this.proxy);
        }
        /**
         * Detach the proxy element from the DOM
         */
        detachProxy() {
            var _a;
            this.removeChild(this.proxy);
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.removeChild(this.proxySlot);
        }
        /**
         * Sets the validity of the custom element. By default this uses the proxy element to determine
         * validity, but this can be extended or replaced in implementation.
         */
        validate() {
            if (this.proxy instanceof HTMLElement) {
                this.setValidity(this.proxy.validity, this.proxy.validationMessage);
            }
        }
        /**
         * Associates the provided value (and optional state) with the parent form.
         * @param value - The value to set
         * @param state - The state object provided to during session restores and when autofilling.
         */
        setFormValue(value, state) {
            if (this.elementInternals) {
                this.elementInternals.setFormValue(value, state || value);
            }
        }
        _keypressHandler(e) {
            switch (e.key) {
                case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyEnter:
                    if (this.form instanceof HTMLFormElement) {
                        // Implicit submission
                        const defaultButton = this.form.querySelector("[type=submit]");
                        defaultButton === null || defaultButton === void 0 ? void 0 : defaultButton.click();
                    }
                    break;
            }
        }
        /**
         * Used to stop propagation of proxy element events
         * @param e - Event object
         */
        stopPropagation(e) {
            e.stopPropagation();
        }
    };
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ mode: "boolean" })(C.prototype, "disabled");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ mode: "fromView", attribute: "value" })(C.prototype, "initialValue");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ attribute: "current-value" })(C.prototype, "currentValue");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)(C.prototype, "name");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ mode: "boolean" })(C.prototype, "required");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable)(C.prototype, "value");
    return C;
}
/**
 * @alpha
 */
function CheckableFormAssociated(BaseCtor) {
    class C extends FormAssociated(BaseCtor) {
    }
    class D extends C {
        constructor(...args) {
            super(args);
            /**
             * Tracks whether the "checked" property has been changed.
             * This is necessary to provide consistent behavior with
             * normal input checkboxes
             */
            this.dirtyChecked = false;
            /**
             * Provides the default checkedness of the input element
             * Passed down to proxy
             *
             * @public
             * @remarks
             * HTML Attribute: checked
             */
            this.checkedAttribute = false;
            /**
             * The checked state of the control.
             *
             * @public
             */
            this.checked = false;
            // Re-initialize dirtyChecked because initialization of other values
            // causes it to become true
            this.dirtyChecked = false;
        }
        checkedAttributeChanged() {
            this.defaultChecked = this.checkedAttribute;
        }
        /**
         * @internal
         */
        defaultCheckedChanged() {
            if (!this.dirtyChecked) {
                // Setting this.checked will cause us to enter a dirty state,
                // but if we are clean when defaultChecked is changed, we want to stay
                // in a clean state, so reset this.dirtyChecked
                this.checked = this.defaultChecked;
                this.dirtyChecked = false;
            }
        }
        checkedChanged(prev, next) {
            if (!this.dirtyChecked) {
                this.dirtyChecked = true;
            }
            this.currentChecked = this.checked;
            this.updateForm();
            if (this.proxy instanceof HTMLInputElement) {
                this.proxy.checked = this.checked;
            }
            if (prev !== undefined) {
                this.$emit("change");
            }
            this.validate();
        }
        currentCheckedChanged(prev, next) {
            this.checked = this.currentChecked;
        }
        updateForm() {
            const value = this.checked ? this.value : null;
            this.setFormValue(value, value);
        }
        connectedCallback() {
            super.connectedCallback();
            this.updateForm();
        }
        formResetCallback() {
            super.formResetCallback();
            this.checked = !!this.checkedAttribute;
            this.dirtyChecked = false;
        }
    }
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ attribute: "checked", mode: "boolean" })(D.prototype, "checkedAttribute");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ attribute: "current-checked", converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.booleanConverter })(D.prototype, "currentChecked");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable)(D.prototype, "defaultChecked");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable)(D.prototype, "checked");
    return D;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoundationElement": () => (/* binding */ FoundationElement),
/* harmony export */   "FoundationElementRegistry": () => (/* binding */ FoundationElementRegistry)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _design_system_component_presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../design-system/component-presentation */ "./node_modules/@microsoft/fast-foundation/dist/esm/design-system/component-presentation.js");



/**
 * Defines a foundation element class that:
 * 1. Connects the element to its ComponentPresentation
 * 2. Allows resolving the element template from the instance or ComponentPresentation
 * 3. Allows resolving the element styles from the instance or ComponentPresentation
 *
 * @public
 */
class FoundationElement extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.FASTElement {
    constructor() {
        super(...arguments);
        this._presentation = void 0;
    }
    /**
     * A property which resolves the ComponentPresentation instance
     * for the current component.
     * @public
     */
    get $presentation() {
        if (this._presentation === void 0) {
            this._presentation = _design_system_component_presentation__WEBPACK_IMPORTED_MODULE_1__.ComponentPresentation.forTag(this.tagName, this);
        }
        return this._presentation;
    }
    templateChanged() {
        if (this.template !== undefined) {
            this.$fastController.template = this.template;
        }
    }
    stylesChanged() {
        if (this.styles !== undefined) {
            this.$fastController.styles = this.styles;
        }
    }
    /**
     * The connected callback for this FASTElement.
     * @remarks
     * This method is invoked by the platform whenever this FoundationElement
     * becomes connected to the document.
     * @public
     */
    connectedCallback() {
        if (this.$presentation !== null) {
            this.$presentation.applyTo(this);
        }
        super.connectedCallback();
    }
    /**
     * Defines an element registry function with a set of element definition defaults.
     * @param elementDefinition - The definition of the element to create the registry
     * function for.
     * @public
     */
    static compose(elementDefinition) {
        return (overrideDefinition = {}) => new FoundationElementRegistry(this === FoundationElement
            ? class extends FoundationElement {
            }
            : this, elementDefinition, overrideDefinition);
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.observable
], FoundationElement.prototype, "template", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.observable
], FoundationElement.prototype, "styles", void 0);
function resolveOption(option, context, definition) {
    if (typeof option === "function") {
        return option(context, definition);
    }
    return option;
}
/**
 * Registry capable of defining presentation properties for a DOM Container hierarchy.
 *
 * @internal
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
class FoundationElementRegistry {
    constructor(type, elementDefinition, overrideDefinition) {
        this.type = type;
        this.elementDefinition = elementDefinition;
        this.overrideDefinition = overrideDefinition;
        this.definition = Object.assign(Object.assign({}, this.elementDefinition), this.overrideDefinition);
    }
    register(container, context) {
        const definition = this.definition;
        const overrideDefinition = this.overrideDefinition;
        const prefix = definition.prefix || context.elementPrefix;
        const name = `${prefix}-${definition.baseName}`;
        context.tryDefineElement({
            name,
            type: this.type,
            baseClass: this.elementDefinition.baseClass,
            callback: x => {
                const presentation = new _design_system_component_presentation__WEBPACK_IMPORTED_MODULE_1__.DefaultComponentPresentation(resolveOption(definition.template, x, definition), resolveOption(definition.styles, x, definition));
                x.definePresentation(presentation);
                let shadowOptions = resolveOption(definition.shadowOptions, x, definition);
                if (x.shadowRootMode) {
                    // If the design system has overridden the shadow root mode, we need special handling.
                    if (shadowOptions) {
                        // If there are shadow options present in the definition, then
                        // either the component itself has specified an option or the
                        // registry function has overridden it.
                        if (!overrideDefinition.shadowOptions) {
                            // There were shadow options provided by the component and not overridden by
                            // the registry.
                            shadowOptions.mode = x.shadowRootMode;
                        }
                    }
                    else if (shadowOptions !== null) {
                        // If the component author did not provide shadow options,
                        // and did not null them out (light dom opt-in) then they
                        // were relying on the FASTElement default. So, if the
                        // design system provides a mode, we need to create the options
                        // to override the default.
                        shadowOptions = { mode: x.shadowRootMode };
                    }
                }
                x.defineElement({
                    elementOptions: resolveOption(definition.elementOptions, x, definition),
                    shadowOptions,
                    attributes: resolveOption(definition.attributes, x, definition),
                });
            },
        });
    }
}
/* eslint-enable @typescript-eslint/no-unused-vars */


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.template.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.template.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/listbox/listbox.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/listbox/listbox.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARIAGlobalStatesAndProperties": () => (/* binding */ ARIAGlobalStatesAndProperties)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");


/**
 * Some states and properties are applicable to all host language elements regardless of whether a role is applied.
 * The following global states and properties are supported by all roles and by all base markup elements.
 * {@link https://www.w3.org/TR/wai-aria-1.1/#global_states}
 *
 * This is intended to be used as a mixin. Be sure you extend FASTElement.
 *
 * @public
 */
class ARIAGlobalStatesAndProperties {
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-atomic", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaAtomic", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-busy", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaBusy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-controls", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaControls", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-current", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaCurrent", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-describedby", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDescribedby", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-details", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDetails", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-disabled", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDisabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-errormessage", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaErrormessage", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-flowto", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaFlowto", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-haspopup", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaHaspopup", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-hidden", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaHidden", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-invalid", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaInvalid", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-keyshortcuts", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaKeyshortcuts", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-label", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLabel", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-labelledby", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLabelledby", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-live", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLive", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-owns", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaOwns", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-relevant", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaRelevant", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-roledescription", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaRoledescription", void 0);


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartEnd": () => (/* binding */ StartEnd),
/* harmony export */   "endSlotTemplate": () => (/* binding */ endSlotTemplate),
/* harmony export */   "startSlotTemplate": () => (/* binding */ startSlotTemplate),
/* harmony export */   "endTemplate": () => (/* binding */ endTemplate),
/* harmony export */   "startTemplate": () => (/* binding */ startTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js");

/**
 * A mixin class implementing start and end elements.
 * These are generally used to decorate text elements with icons or other visual indicators.
 * @public
 */
class StartEnd {
    handleStartContentChange() {
        this.startContainer.classList.toggle("start", this.start.assignedNodes().length > 0);
    }
    handleEndContentChange() {
        this.endContainer.classList.toggle("end", this.end.assignedNodes().length > 0);
    }
}
/**
 * The template for the end element.
 * For use with {@link StartEnd}
 *
 * @public
 */
const endSlotTemplate = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <span
        part="end"
        ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("endContainer")}
        class=${x => (definition.end ? "end" : void 0)}
    >
        <slot name="end" ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("end")} @slotchange="${x => x.handleEndContentChange()}">
            ${definition.end || ""}
        </slot>
    </span>
`;
/**
 * The template for the start element.
 * For use with {@link StartEnd}
 *
 * @public
 */
const startSlotTemplate = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <span
        part="start"
        ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("startContainer")}
        class="${x => (definition.start ? "start" : void 0)}"
    >
        <slot
            name="start"
            ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("start")}
            @slotchange="${x => x.handleStartContentChange()}"
        >
            ${definition.start || ""}
        </slot>
    </span>
`;
/**
 * The template for the end element.
 * For use with {@link StartEnd}
 *
 * @public
 * @deprecated - use endSlotTemplate
 */
const endTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <span part="end" ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("endContainer")}>
        <slot
            name="end"
            ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("end")}
            @slotchange="${x => x.handleEndContentChange()}"
        ></slot>
    </span>
`;
/**
 * The template for the start element.
 * For use with {@link StartEnd}
 *
 * @public
 * @deprecated - use startSlotTemplate
 */
const startTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <span part="start" ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("startContainer")}>
        <slot
            name="start"
            ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("start")}
            @slotchange="${x => x.handleStartContentChange()}"
        ></slot>
    </span>
`;


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/select/select.options.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/select/select.options.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyMixins": () => (/* binding */ applyMixins)
/* harmony export */ });
/**
 * Apply mixins to a constructor.
 * Sourced from {@link https://www.typescriptlang.org/docs/handbook/mixins.html | TypeScript Documentation }.
 * @public
 */
function applyMixins(derivedCtor, ...baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== "constructor") {
                Object.defineProperty(derivedCtor.prototype, name, 
                /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
            }
        });
        if (baseCtor.attributes) {
            const existing = derivedCtor.attributes || [];
            derivedCtor.attributes = existing.concat(baseCtor.attributes);
        }
    });
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-contains.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-contains.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composedContains": () => (/* binding */ composedContains)
/* harmony export */ });
/* harmony import */ var _composed_parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composed-parent */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-parent.js");

/**
 * Determines if the reference element contains the test element in a "composed" DOM tree that
 * ignores shadow DOM boundaries.
 *
 * Returns true of the test element is a descendent of the reference, or exist in
 * a shadow DOM that is a logical descendent of the reference. Otherwise returns false.
 * @param reference - The element to test for containment against.
 * @param test - The element being tested for containment.
 *
 * @public
 */
function composedContains(reference, test) {
    let current = test;
    while (current !== null) {
        if (current === reference) {
            return true;
        }
        current = (0,_composed_parent__WEBPACK_IMPORTED_MODULE_0__.composedParent)(current);
    }
    return false;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-parent.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-parent.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composedParent": () => (/* binding */ composedParent)
/* harmony export */ });
/**
 * Retrieves the "composed parent" element of a node, ignoring DOM tree boundaries.
 * When the parent of a node is a shadow-root, it will return the host
 * element of the shadow root. Otherwise it will return the parent node or null if
 * no parent node exists.
 * @param element - The element for which to retrieve the composed parent
 *
 * @public
 */
function composedParent(element) {
    const parentNode = element.parentElement;
    if (parentNode) {
        return parentNode;
    }
    else {
        const rootNode = element.getRootNode();
        if (rootNode.host instanceof HTMLElement) {
            // this is shadow-root
            return rootNode.host;
        }
    }
    return null;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchMediaBehavior": () => (/* binding */ MatchMediaBehavior),
/* harmony export */   "MatchMediaStyleSheetBehavior": () => (/* binding */ MatchMediaStyleSheetBehavior),
/* harmony export */   "forcedColorsStylesheetBehavior": () => (/* binding */ forcedColorsStylesheetBehavior),
/* harmony export */   "darkModeStylesheetBehavior": () => (/* binding */ darkModeStylesheetBehavior),
/* harmony export */   "lightModeStylesheetBehavior": () => (/* binding */ lightModeStylesheetBehavior)
/* harmony export */ });
/**
 * An abstract behavior to react to media queries. Implementations should implement
 * the `constructListener` method to perform some action based on media query changes.
 *
 * @public
 */
class MatchMediaBehavior {
    /**
     *
     * @param query - The media query to operate from.
     */
    constructor(query) {
        /**
         * The behavior needs to operate on element instances but elements might share a behavior instance.
         * To ensure proper attachment / detachment per instance, we construct a listener for
         * each bind invocation and cache the listeners by element reference.
         */
        this.listenerCache = new WeakMap();
        this.query = query;
    }
    /**
     * Binds the behavior to the element.
     * @param source - The element for which the behavior is bound.
     */
    bind(source) {
        const { query } = this;
        const listener = this.constructListener(source);
        // Invoke immediately to add if the query currently matches
        listener.bind(query)();
        query.addListener(listener);
        this.listenerCache.set(source, listener);
    }
    /**
     * Unbinds the behavior from the element.
     * @param source - The element for which the behavior is unbinding.
     */
    unbind(source) {
        const listener = this.listenerCache.get(source);
        if (listener) {
            this.query.removeListener(listener);
            this.listenerCache.delete(source);
        }
    }
}
/**
 * A behavior to add or remove a stylesheet from an element based on a media query. The behavior ensures that
 * styles are applied while the a query matches the environment and that styles are not applied if the query does
 * not match the environment.
 *
 * @public
 */
class MatchMediaStyleSheetBehavior extends MatchMediaBehavior {
    /**
     * Constructs a {@link MatchMediaStyleSheetBehavior} instance.
     * @param query - The media query to operate from.
     * @param styles - The styles to coordinate with the query.
     */
    constructor(query, styles) {
        super(query);
        this.styles = styles;
    }
    /**
     * Defines a function to construct {@link MatchMediaStyleSheetBehavior | MatchMediaStyleSheetBehaviors} for
     * a provided query.
     * @param query - The media query to operate from.
     *
     * @public
     * @example
     *
     * ```ts
     * import { css } from "@microsoft/fast-element";
     * import { MatchMediaStyleSheetBehavior } from "@microsoft/fast-foundation";
     *
     * const landscapeBehavior = MatchMediaStyleSheetBehavior.with(
     *   window.matchMedia("(orientation: landscape)")
     * );
     * const styles = css`
     *   :host {
     *     width: 200px;
     *     height: 400px;
     *   }
     * `
     * .withBehaviors(landscapeBehavior(css`
     *   :host {
     *     width: 400px;
     *     height: 200px;
     *   }
     * `))
     * ```
     */
    static with(query) {
        return (styles) => {
            return new MatchMediaStyleSheetBehavior(query, styles);
        };
    }
    /**
     * Constructs a match-media listener for a provided element.
     * @param source - the element for which to attach or detach styles.
     * @internal
     */
    constructListener(source) {
        let attached = false;
        const styles = this.styles;
        return function listener() {
            const { matches } = this;
            if (matches && !attached) {
                source.$fastController.addStyles(styles);
                attached = matches;
            }
            else if (!matches && attached) {
                source.$fastController.removeStyles(styles);
                attached = matches;
            }
        };
    }
    /**
     * Unbinds the behavior from the element.
     * @param source - The element for which the behavior is unbinding.
     * @internal
     */
    unbind(source) {
        super.unbind(source);
        source.$fastController.removeStyles(this.styles);
    }
}
/**
 * This can be used to construct a behavior to apply a forced-colors only stylesheet.
 * @public
 */
const forcedColorsStylesheetBehavior = MatchMediaStyleSheetBehavior.with(window.matchMedia("(forced-colors)"));
/**
 * This can be used to construct a behavior to apply a prefers color scheme: dark only stylesheet.
 * @public
 */
const darkModeStylesheetBehavior = MatchMediaStyleSheetBehavior.with(window.matchMedia("(prefers-color-scheme: dark)"));
/**
 * This can be used to construct a behavior to apply a prefers color scheme: light only stylesheet.
 * @public
 */
const lightModeStylesheetBehavior = MatchMediaStyleSheetBehavior.with(window.matchMedia("(prefers-color-scheme: light)"));


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/property-stylesheet-behavior.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/utilities/property-stylesheet-behavior.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyStyleSheetBehavior": () => (/* binding */ PropertyStyleSheetBehavior)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");

/**
 * A behavior to add or remove a stylesheet from an element based on a property. The behavior ensures that
 * styles are applied while the property matches and that styles are not applied if the property does
 * not match.
 *
 * @public
 */
class PropertyStyleSheetBehavior {
    /**
     * Constructs a {@link PropertyStyleSheetBehavior} instance.
     * @param propertyName - The property name to operate from.
     * @param value - The property value to operate from.
     * @param styles - The styles to coordinate with the property.
     */
    constructor(propertyName, value, styles) {
        this.propertyName = propertyName;
        this.value = value;
        this.styles = styles;
    }
    /**
     * Binds the behavior to the element.
     * @param elementInstance - The element for which the property is applied.
     */
    bind(elementInstance) {
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.Observable.getNotifier(elementInstance).subscribe(this, this.propertyName);
        this.handleChange(elementInstance, this.propertyName);
    }
    /**
     * Unbinds the behavior from the element.
     * @param source - The element for which the behavior is unbinding.
     * @internal
     */
    unbind(source) {
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.Observable.getNotifier(source).unsubscribe(this, this.propertyName);
        source.$fastController.removeStyles(this.styles);
    }
    /**
     * Change event for the provided element.
     * @param source - the element for which to attach or detach styles.
     * @internal
     */
    handleChange(source, key) {
        if (source[key] === this.value) {
            source.$fastController.addStyles(this.styles);
        }
        else {
            source.$fastController.removeStyles(this.styles);
        }
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disabledCursor": () => (/* binding */ disabledCursor)
/* harmony export */ });
/**
 * The CSS value for disabled cursors.
 * @public
 */
const disabledCursor = "not-allowed";


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hidden": () => (/* binding */ hidden),
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
/**
 * A CSS fragment to set `display: none;` when the host is hidden using the [hidden] attribute.
 * @public
 */
const hidden = `:host([hidden]){display:none}`;
/**
 * Applies a CSS display property.
 * Also adds CSS rules to not display the element when the [hidden] attribute is applied to the element.
 * @param display - The CSS display property value
 * @public
 */
function display(displayValue) {
    return `${hidden}:host{display:${displayValue}}`;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusVisible": () => (/* binding */ focusVisible)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/dom.js");

/**
 * The string representing the focus selector to be used. Value
 * will be "focus-visible" when https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo
 * is supported and "focus" when it is not.
 *
 * @public
 */
const focusVisible = (0,_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.canUseFocusVisible)() ? "focus-visible" : "focus";


/***/ }),

/***/ "./node_modules/@microsoft/fast-web-utilities/dist/dom.js":
/*!****************************************************************!*\
  !*** ./node_modules/@microsoft/fast-web-utilities/dist/dom.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isHTMLElement": () => (/* binding */ isHTMLElement),
/* harmony export */   "getDisplayedNodes": () => (/* binding */ getDisplayedNodes),
/* harmony export */   "getKeyCode": () => (/* binding */ getKeyCode),
/* harmony export */   "canUseFocusVisible": () => (/* binding */ canUseFocusVisible),
/* harmony export */   "canUseCssGrid": () => (/* binding */ canUseCssGrid),
/* harmony export */   "canUseForcedColors": () => (/* binding */ canUseForcedColors),
/* harmony export */   "resetDocumentCache": () => (/* binding */ resetDocumentCache),
/* harmony export */   "canUsedForcedColors": () => (/* binding */ canUsedForcedColors)
/* harmony export */ });
/* harmony import */ var exenv_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exenv-es6 */ "./node_modules/exenv-es6/dist/can-use-dom.js");

/**
 * A test that ensures that all arguments are HTML Elements
 */
function isHTMLElement(...args) {
    return args.every((arg) => arg instanceof HTMLElement);
}
/**
 * Returns all displayed elements inside of a root node that match a provided selector
 */
function getDisplayedNodes(rootNode, selector) {
    if (!rootNode || !selector || !isHTMLElement(rootNode)) {
        return;
    }
    const nodes = Array.from(rootNode.querySelectorAll(selector));
    // offsetParent will be null if the element isn't currently displayed,
    // so this will allow us to operate only on visible nodes
    return nodes.filter((node) => node.offsetParent !== null);
}
/**
 * Gets the numeric key code associated with a keyboard event. This method is for use with DOM level 3 events
 * that still use the deprecated keyCode property.
 */
function getKeyCode(event) {
    return event === null ? null : event.which || event.keyCode || event.charCode;
}
/**
 * Returns the nonce used in the page, if any.
 *
 * Based on https://github.com/cssinjs/jss/blob/master/packages/jss/src/DomRenderer.js
 */
function getNonce() {
    const node = document.querySelector('meta[property="csp-nonce"]');
    if (node) {
        return node.getAttribute("content");
    }
    else {
        return null;
    }
}
/**
 * Test if the document supports :focus-visible
 */
let _canUseFocusVisible;
function canUseFocusVisible() {
    if (typeof _canUseFocusVisible === "boolean") {
        return _canUseFocusVisible;
    }
    if (!(0,exenv_es6__WEBPACK_IMPORTED_MODULE_0__.canUseDOM)()) {
        _canUseFocusVisible = false;
        return _canUseFocusVisible;
    }
    // Check to see if the document supports the focus-visible element
    const styleElement = document.createElement("style");
    // If nonces are present on the page, use it when creating the style element
    // to test focus-visible support.
    const styleNonce = getNonce();
    if (styleNonce !== null) {
        styleElement.setAttribute("nonce", styleNonce);
    }
    document.head.appendChild(styleElement);
    try {
        styleElement.sheet.insertRule("foo:focus-visible {color:inherit}", 0);
        _canUseFocusVisible = true;
    }
    catch (e) {
        _canUseFocusVisible = false;
    }
    finally {
        document.head.removeChild(styleElement);
    }
    return _canUseFocusVisible;
}
let _canUseCssGrid;
function canUseCssGrid() {
    if (typeof _canUseCssGrid === "boolean") {
        return _canUseCssGrid;
    }
    try {
        _canUseCssGrid = CSS.supports("display", "grid");
    }
    catch (_a) {
        _canUseCssGrid = false;
    }
    return _canUseCssGrid;
}
function canUseForcedColors() {
    return ((0,exenv_es6__WEBPACK_IMPORTED_MODULE_0__.canUseDOM)() &&
        (window.matchMedia("(forced-colors: none)").matches ||
            window.matchMedia("(forced-colors: active)").matches));
}
function resetDocumentCache() {
    _canUseCssGrid = undefined;
    _canUseFocusVisible = undefined;
}
/**
 * @deprecated Use 'canUseForcedColors' instead
 */
const canUsedForcedColors = canUseForcedColors;


/***/ }),

/***/ "./node_modules/@microsoft/fast-web-utilities/dist/key-codes.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@microsoft/fast-web-utilities/dist/key-codes.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyCodes": () => (/* binding */ KeyCodes),
/* harmony export */   "keyCodeAlt": () => (/* binding */ keyCodeAlt),
/* harmony export */   "keyCodeArrowDown": () => (/* binding */ keyCodeArrowDown),
/* harmony export */   "keyCodeArrowLeft": () => (/* binding */ keyCodeArrowLeft),
/* harmony export */   "keyCodeArrowRight": () => (/* binding */ keyCodeArrowRight),
/* harmony export */   "keyCodeArrowUp": () => (/* binding */ keyCodeArrowUp),
/* harmony export */   "keyCodeBack": () => (/* binding */ keyCodeBack),
/* harmony export */   "keyCodeBackSlash": () => (/* binding */ keyCodeBackSlash),
/* harmony export */   "keyCodeBreak": () => (/* binding */ keyCodeBreak),
/* harmony export */   "keyCodeCapsLock": () => (/* binding */ keyCodeCapsLock),
/* harmony export */   "keyCodeCloseBracket": () => (/* binding */ keyCodeCloseBracket),
/* harmony export */   "keyCodeColon": () => (/* binding */ keyCodeColon),
/* harmony export */   "keyCodeColon2": () => (/* binding */ keyCodeColon2),
/* harmony export */   "keyCodeComma": () => (/* binding */ keyCodeComma),
/* harmony export */   "keyCodeCtrl": () => (/* binding */ keyCodeCtrl),
/* harmony export */   "keyCodeDelete": () => (/* binding */ keyCodeDelete),
/* harmony export */   "keyCodeEnd": () => (/* binding */ keyCodeEnd),
/* harmony export */   "keyCodeEnter": () => (/* binding */ keyCodeEnter),
/* harmony export */   "keyCodeEquals": () => (/* binding */ keyCodeEquals),
/* harmony export */   "keyCodeEquals2": () => (/* binding */ keyCodeEquals2),
/* harmony export */   "keyCodeEquals3": () => (/* binding */ keyCodeEquals3),
/* harmony export */   "keyCodeEscape": () => (/* binding */ keyCodeEscape),
/* harmony export */   "keyCodeForwardSlash": () => (/* binding */ keyCodeForwardSlash),
/* harmony export */   "keyCodeFunction1": () => (/* binding */ keyCodeFunction1),
/* harmony export */   "keyCodeFunction10": () => (/* binding */ keyCodeFunction10),
/* harmony export */   "keyCodeFunction11": () => (/* binding */ keyCodeFunction11),
/* harmony export */   "keyCodeFunction12": () => (/* binding */ keyCodeFunction12),
/* harmony export */   "keyCodeFunction2": () => (/* binding */ keyCodeFunction2),
/* harmony export */   "keyCodeFunction3": () => (/* binding */ keyCodeFunction3),
/* harmony export */   "keyCodeFunction4": () => (/* binding */ keyCodeFunction4),
/* harmony export */   "keyCodeFunction5": () => (/* binding */ keyCodeFunction5),
/* harmony export */   "keyCodeFunction6": () => (/* binding */ keyCodeFunction6),
/* harmony export */   "keyCodeFunction7": () => (/* binding */ keyCodeFunction7),
/* harmony export */   "keyCodeFunction8": () => (/* binding */ keyCodeFunction8),
/* harmony export */   "keyCodeFunction9": () => (/* binding */ keyCodeFunction9),
/* harmony export */   "keyCodeHome": () => (/* binding */ keyCodeHome),
/* harmony export */   "keyCodeInsert": () => (/* binding */ keyCodeInsert),
/* harmony export */   "keyCodeMenu": () => (/* binding */ keyCodeMenu),
/* harmony export */   "keyCodeMinus": () => (/* binding */ keyCodeMinus),
/* harmony export */   "keyCodeMinus2": () => (/* binding */ keyCodeMinus2),
/* harmony export */   "keyCodeNumLock": () => (/* binding */ keyCodeNumLock),
/* harmony export */   "keyCodeNumPad0": () => (/* binding */ keyCodeNumPad0),
/* harmony export */   "keyCodeNumPad1": () => (/* binding */ keyCodeNumPad1),
/* harmony export */   "keyCodeNumPad2": () => (/* binding */ keyCodeNumPad2),
/* harmony export */   "keyCodeNumPad3": () => (/* binding */ keyCodeNumPad3),
/* harmony export */   "keyCodeNumPad4": () => (/* binding */ keyCodeNumPad4),
/* harmony export */   "keyCodeNumPad5": () => (/* binding */ keyCodeNumPad5),
/* harmony export */   "keyCodeNumPad6": () => (/* binding */ keyCodeNumPad6),
/* harmony export */   "keyCodeNumPad7": () => (/* binding */ keyCodeNumPad7),
/* harmony export */   "keyCodeNumPad8": () => (/* binding */ keyCodeNumPad8),
/* harmony export */   "keyCodeNumPad9": () => (/* binding */ keyCodeNumPad9),
/* harmony export */   "keyCodeNumPadDivide": () => (/* binding */ keyCodeNumPadDivide),
/* harmony export */   "keyCodeNumPadDot": () => (/* binding */ keyCodeNumPadDot),
/* harmony export */   "keyCodeNumPadMinus": () => (/* binding */ keyCodeNumPadMinus),
/* harmony export */   "keyCodeNumPadMultiply": () => (/* binding */ keyCodeNumPadMultiply),
/* harmony export */   "keyCodeNumPadPlus": () => (/* binding */ keyCodeNumPadPlus),
/* harmony export */   "keyCodeOpenBracket": () => (/* binding */ keyCodeOpenBracket),
/* harmony export */   "keyCodePageDown": () => (/* binding */ keyCodePageDown),
/* harmony export */   "keyCodePageUp": () => (/* binding */ keyCodePageUp),
/* harmony export */   "keyCodePeriod": () => (/* binding */ keyCodePeriod),
/* harmony export */   "keyCodePrint": () => (/* binding */ keyCodePrint),
/* harmony export */   "keyCodeQuote": () => (/* binding */ keyCodeQuote),
/* harmony export */   "keyCodeScrollLock": () => (/* binding */ keyCodeScrollLock),
/* harmony export */   "keyCodeShift": () => (/* binding */ keyCodeShift),
/* harmony export */   "keyCodeSpace": () => (/* binding */ keyCodeSpace),
/* harmony export */   "keyCodeTab": () => (/* binding */ keyCodeTab),
/* harmony export */   "keyCodeTilde": () => (/* binding */ keyCodeTilde),
/* harmony export */   "keyCodeWindowsLeft": () => (/* binding */ keyCodeWindowsLeft),
/* harmony export */   "keyCodeWindowsOpera": () => (/* binding */ keyCodeWindowsOpera),
/* harmony export */   "keyCodeWindowsRight": () => (/* binding */ keyCodeWindowsRight),
/* harmony export */   "keyArrowDown": () => (/* binding */ keyArrowDown),
/* harmony export */   "keyArrowLeft": () => (/* binding */ keyArrowLeft),
/* harmony export */   "keyArrowRight": () => (/* binding */ keyArrowRight),
/* harmony export */   "keyArrowUp": () => (/* binding */ keyArrowUp),
/* harmony export */   "keyEnter": () => (/* binding */ keyEnter),
/* harmony export */   "keyEscape": () => (/* binding */ keyEscape),
/* harmony export */   "keyHome": () => (/* binding */ keyHome),
/* harmony export */   "keyEnd": () => (/* binding */ keyEnd),
/* harmony export */   "keyFunction2": () => (/* binding */ keyFunction2),
/* harmony export */   "keyPageDown": () => (/* binding */ keyPageDown),
/* harmony export */   "keyPageUp": () => (/* binding */ keyPageUp),
/* harmony export */   "keySpace": () => (/* binding */ keySpace),
/* harmony export */   "keyTab": () => (/* binding */ keyTab),
/* harmony export */   "keyBackspace": () => (/* binding */ keyBackspace),
/* harmony export */   "keyDelete": () => (/* binding */ keyDelete),
/* harmony export */   "ArrowKeys": () => (/* binding */ ArrowKeys)
/* harmony export */ });
/**
 * Key Code values
 * @deprecated - KeyCodes are deprecated, use individual string key exports
 */
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["alt"] = 18] = "alt";
    KeyCodes[KeyCodes["arrowDown"] = 40] = "arrowDown";
    KeyCodes[KeyCodes["arrowLeft"] = 37] = "arrowLeft";
    KeyCodes[KeyCodes["arrowRight"] = 39] = "arrowRight";
    KeyCodes[KeyCodes["arrowUp"] = 38] = "arrowUp";
    KeyCodes[KeyCodes["back"] = 8] = "back";
    KeyCodes[KeyCodes["backSlash"] = 220] = "backSlash";
    KeyCodes[KeyCodes["break"] = 19] = "break";
    KeyCodes[KeyCodes["capsLock"] = 20] = "capsLock";
    KeyCodes[KeyCodes["closeBracket"] = 221] = "closeBracket";
    KeyCodes[KeyCodes["colon"] = 186] = "colon";
    KeyCodes[KeyCodes["colon2"] = 59] = "colon2";
    KeyCodes[KeyCodes["comma"] = 188] = "comma";
    KeyCodes[KeyCodes["ctrl"] = 17] = "ctrl";
    KeyCodes[KeyCodes["delete"] = 46] = "delete";
    KeyCodes[KeyCodes["end"] = 35] = "end";
    KeyCodes[KeyCodes["enter"] = 13] = "enter";
    KeyCodes[KeyCodes["equals"] = 187] = "equals";
    KeyCodes[KeyCodes["equals2"] = 61] = "equals2";
    KeyCodes[KeyCodes["equals3"] = 107] = "equals3";
    KeyCodes[KeyCodes["escape"] = 27] = "escape";
    KeyCodes[KeyCodes["forwardSlash"] = 191] = "forwardSlash";
    KeyCodes[KeyCodes["function1"] = 112] = "function1";
    KeyCodes[KeyCodes["function10"] = 121] = "function10";
    KeyCodes[KeyCodes["function11"] = 122] = "function11";
    KeyCodes[KeyCodes["function12"] = 123] = "function12";
    KeyCodes[KeyCodes["function2"] = 113] = "function2";
    KeyCodes[KeyCodes["function3"] = 114] = "function3";
    KeyCodes[KeyCodes["function4"] = 115] = "function4";
    KeyCodes[KeyCodes["function5"] = 116] = "function5";
    KeyCodes[KeyCodes["function6"] = 117] = "function6";
    KeyCodes[KeyCodes["function7"] = 118] = "function7";
    KeyCodes[KeyCodes["function8"] = 119] = "function8";
    KeyCodes[KeyCodes["function9"] = 120] = "function9";
    KeyCodes[KeyCodes["home"] = 36] = "home";
    KeyCodes[KeyCodes["insert"] = 45] = "insert";
    KeyCodes[KeyCodes["menu"] = 93] = "menu";
    KeyCodes[KeyCodes["minus"] = 189] = "minus";
    KeyCodes[KeyCodes["minus2"] = 109] = "minus2";
    KeyCodes[KeyCodes["numLock"] = 144] = "numLock";
    KeyCodes[KeyCodes["numPad0"] = 96] = "numPad0";
    KeyCodes[KeyCodes["numPad1"] = 97] = "numPad1";
    KeyCodes[KeyCodes["numPad2"] = 98] = "numPad2";
    KeyCodes[KeyCodes["numPad3"] = 99] = "numPad3";
    KeyCodes[KeyCodes["numPad4"] = 100] = "numPad4";
    KeyCodes[KeyCodes["numPad5"] = 101] = "numPad5";
    KeyCodes[KeyCodes["numPad6"] = 102] = "numPad6";
    KeyCodes[KeyCodes["numPad7"] = 103] = "numPad7";
    KeyCodes[KeyCodes["numPad8"] = 104] = "numPad8";
    KeyCodes[KeyCodes["numPad9"] = 105] = "numPad9";
    KeyCodes[KeyCodes["numPadDivide"] = 111] = "numPadDivide";
    KeyCodes[KeyCodes["numPadDot"] = 110] = "numPadDot";
    KeyCodes[KeyCodes["numPadMinus"] = 109] = "numPadMinus";
    KeyCodes[KeyCodes["numPadMultiply"] = 106] = "numPadMultiply";
    KeyCodes[KeyCodes["numPadPlus"] = 107] = "numPadPlus";
    KeyCodes[KeyCodes["openBracket"] = 219] = "openBracket";
    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
    KeyCodes[KeyCodes["period"] = 190] = "period";
    KeyCodes[KeyCodes["print"] = 44] = "print";
    KeyCodes[KeyCodes["quote"] = 222] = "quote";
    KeyCodes[KeyCodes["scrollLock"] = 145] = "scrollLock";
    KeyCodes[KeyCodes["shift"] = 16] = "shift";
    KeyCodes[KeyCodes["space"] = 32] = "space";
    KeyCodes[KeyCodes["tab"] = 9] = "tab";
    KeyCodes[KeyCodes["tilde"] = 192] = "tilde";
    KeyCodes[KeyCodes["windowsLeft"] = 91] = "windowsLeft";
    KeyCodes[KeyCodes["windowsOpera"] = 219] = "windowsOpera";
    KeyCodes[KeyCodes["windowsRight"] = 92] = "windowsRight";
})(KeyCodes || (KeyCodes = {}));
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeAlt = 18;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeArrowDown = 40;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeArrowLeft = 37;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeArrowRight = 39;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeArrowUp = 38;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeBack = 8;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeBackSlash = 220;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeBreak = 19;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeCapsLock = 20;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeCloseBracket = 221;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeColon = 186;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeColon2 = 59; // Opera and Firefox
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeComma = 188;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeCtrl = 17;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeDelete = 46;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeEnd = 35;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeEnter = 13;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeEquals = 187;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeEquals2 = 61; // Opera
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeEquals3 = 107; // Firefox
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeEscape = 27;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeForwardSlash = 191;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction1 = 112;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction10 = 121;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction11 = 122;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction12 = 123;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction2 = 113;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction3 = 114;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction4 = 115;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction5 = 116;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction6 = 117;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction7 = 118;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction8 = 119;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeFunction9 = 120;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeHome = 36;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeInsert = 45;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeMenu = 93;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeMinus = 189;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeMinus2 = 109; // Opera and Firefox
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumLock = 144;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad0 = 96;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad1 = 97;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad2 = 98;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad3 = 99;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad4 = 100;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad5 = 101;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad6 = 102;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad7 = 103;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad8 = 104;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPad9 = 105;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPadDivide = 111;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPadDot = 110;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPadMinus = 109;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPadMultiply = 106;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeNumPadPlus = 107;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeOpenBracket = 219;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodePageDown = 34;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodePageUp = 33;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodePeriod = 190;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodePrint = 44;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeQuote = 222;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeScrollLock = 145;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeShift = 16;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeSpace = 32;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeTab = 9;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeTilde = 192;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeWindowsLeft = 91;
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeWindowsOpera = 219; // Opera
/**
 * @deprecated - KeyCodes are deprecated, use string key exports
 */
const keyCodeWindowsRight = 92;
/**
 * String values for use with KeyboardEvent.key
 */
const keyArrowDown = "ArrowDown";
const keyArrowLeft = "ArrowLeft";
const keyArrowRight = "ArrowRight";
const keyArrowUp = "ArrowUp";
const keyEnter = "Enter";
const keyEscape = "Escape";
const keyHome = "Home";
const keyEnd = "End";
const keyFunction2 = "F2";
const keyPageDown = "PageDown";
const keyPageUp = "PageUp";
const keySpace = " ";
const keyTab = "Tab";
const keyBackspace = "Backspace";
const keyDelete = "Delete";
const ArrowKeys = {
    ArrowDown: keyArrowDown,
    ArrowLeft: keyArrowLeft,
    ArrowRight: keyArrowRight,
    ArrowUp: keyArrowUp,
};


/***/ }),

/***/ "./node_modules/@microsoft/fast-web-utilities/dist/localization.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-web-utilities/dist/localization.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Direction": () => (/* binding */ Direction)
/* harmony export */ });
/**
 * Expose ltr and rtl strings
 */
var Direction;
(function (Direction) {
    Direction["ltr"] = "ltr";
    Direction["rtl"] = "rtl";
})(Direction || (Direction = {}));


/***/ }),

/***/ "./node_modules/@microsoft/fast-web-utilities/dist/numbers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@microsoft/fast-web-utilities/dist/numbers.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/@microsoft/fast-web-utilities/dist/system-colors.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-web-utilities/dist/system-colors.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemColors": () => (/* binding */ SystemColors)
/* harmony export */ });
/**
 * Define system colors for use in CSS stylesheets.
 *
 * https://drafts.csswg.org/css-color/#css-system-colors
 */
var SystemColors;
(function (SystemColors) {
    SystemColors["Canvas"] = "Canvas";
    SystemColors["CanvasText"] = "CanvasText";
    SystemColors["LinkText"] = "LinkText";
    SystemColors["VisitedText"] = "VisitedText";
    SystemColors["ActiveText"] = "ActiveText";
    SystemColors["ButtonFace"] = "ButtonFace";
    SystemColors["ButtonText"] = "ButtonText";
    SystemColors["Field"] = "Field";
    SystemColors["FieldText"] = "FieldText";
    SystemColors["Highlight"] = "Highlight";
    SystemColors["HighlightText"] = "HighlightText";
    SystemColors["GrayText"] = "GrayText";
})(SystemColors || (SystemColors = {}));


/***/ }),

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/exenv-es6/dist/can-use-dom.js":
/*!****************************************************!*\
  !*** ./node_modules/exenv-es6/dist/can-use-dom.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canUseDOM": () => (/* binding */ canUseDOM)
/* harmony export */ });
/**
 * Checks if the DOM is available to access and use
 */
function canUseDOM() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}


/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var named_references_1 = __webpack_require__(/*! ./named-references */ "./node_modules/html-entities/lib/named-references.js");
var numeric_unicode_map_1 = __webpack_require__(/*! ./numeric-unicode-map */ "./node_modules/html-entities/lib/numeric-unicode-map.js");
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), { all: named_references_1.namedReferences.html5 });
var encodeRegExps = {
    specialChars: /[<>'"&]/g,
    nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
};
var defaultEncodeOptions = {
    mode: 'specialChars',
    level: 'all',
    numeric: 'decimal'
};
/** Encodes all the necessary (specified by `level`) characters in the text */
function encode(text, _a) {
    var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? 'specialChars' : _c, _d = _b.numeric, numeric = _d === void 0 ? 'decimal' : _d, _e = _b.level, level = _e === void 0 ? 'all' : _e;
    if (!text) {
        return '';
    }
    var encodeRegExp = encodeRegExps[mode];
    var references = allNamedReferences[level].characters;
    var isHex = numeric === 'hexadecimal';
    encodeRegExp.lastIndex = 0;
    var _b = encodeRegExp.exec(text);
    var _c;
    if (_b) {
        _c = '';
        var _d = 0;
        do {
            if (_d !== _b.index) {
                _c += text.substring(_d, _b.index);
            }
            var _e = _b[0];
            var result_1 = references[_e];
            if (!result_1) {
                var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
                result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';
            }
            _c += result_1;
            _d = _b.index + _e.length;
        } while ((_b = encodeRegExp.exec(text)));
        if (_d !== text.length) {
            _c += text.substring(_d);
        }
    }
    else {
        _c =
            text;
    }
    return _c;
}
exports.encode = encode;
var defaultDecodeOptions = {
    scope: 'body',
    level: 'all'
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
    xml: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.xml
    },
    html4: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html4
    },
    html5: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html5
    }
};
var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
var defaultDecodeEntityOptions = {
    level: 'all'
};
/** Decodes a single entity */
function decodeEntity(entity, _a) {
    var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? 'all' : _b;
    if (!entity) {
        return '';
    }
    var _b = entity;
    var decodeEntityLastChar_1 = entity[entity.length - 1];
    if (false) {}
    else if (false) {}
    else {
        var decodeResultByReference_1 = allNamedReferences[level].entities[entity];
        if (decodeResultByReference_1) {
            _b = decodeResultByReference_1;
        }
        else if (entity[0] === '&' && entity[1] === '#') {
            var decodeSecondChar_1 = entity[2];
            var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X'
                ? parseInt(entity.substr(3), 16)
                : parseInt(entity.substr(2));
            _b =
                decodeCode_1 >= 0x10ffff
                    ? outOfBoundsChar
                    : decodeCode_1 > 65535
                        ? surrogate_pairs_1.fromCodePoint(decodeCode_1)
                        : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
        }
    }
    return _b;
}
exports.decodeEntity = decodeEntity;
/** Decodes all entities in the text */
function decode(text, _a) {
    var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a, decodeCode_1 = decodeSecondChar_1.level, level = decodeCode_1 === void 0 ? 'all' : decodeCode_1, _b = decodeSecondChar_1.scope, scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;
    if (!text) {
        return '';
    }
    var decodeRegExp = decodeRegExps[level][scope];
    var references = allNamedReferences[level].entities;
    var isAttribute = scope === 'attribute';
    var isStrict = scope === 'strict';
    decodeRegExp.lastIndex = 0;
    var replaceMatch_1 = decodeRegExp.exec(text);
    var replaceResult_1;
    if (replaceMatch_1) {
        replaceResult_1 = '';
        var replaceLastIndex_1 = 0;
        do {
            if (replaceLastIndex_1 !== replaceMatch_1.index) {
                replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
            }
            var replaceInput_1 = replaceMatch_1[0];
            var decodeResult_1 = replaceInput_1;
            var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];
            if (isAttribute
                && decodeEntityLastChar_2 === '=') {
                decodeResult_1 = replaceInput_1;
            }
            else if (isStrict
                && decodeEntityLastChar_2 !== ';') {
                decodeResult_1 = replaceInput_1;
            }
            else {
                var decodeResultByReference_2 = references[replaceInput_1];
                if (decodeResultByReference_2) {
                    decodeResult_1 = decodeResultByReference_2;
                }
                else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {
                    var decodeSecondChar_2 = replaceInput_1[2];
                    var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X'
                        ? parseInt(replaceInput_1.substr(3), 16)
                        : parseInt(replaceInput_1.substr(2));
                    decodeResult_1 =
                        decodeCode_2 >= 0x10ffff
                            ? outOfBoundsChar
                            : decodeCode_2 > 65535
                                ? surrogate_pairs_1.fromCodePoint(decodeCode_2)
                                : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
                }
            }
            replaceResult_1 += decodeResult_1;
            replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
        } while ((replaceMatch_1 = decodeRegExp.exec(text)));
        if (replaceLastIndex_1 !== text.length) {
            replaceResult_1 += text.substring(replaceLastIndex_1);
        }
    }
    else {
        replaceResult_1 =
            text;
    }
    return replaceResult_1;
}
exports.decode = decode;


/***/ }),

/***/ "./node_modules/html-entities/lib/named-references.js":
/*!************************************************************!*\
  !*** ./node_modules/html-entities/lib/named-references.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.bodyRegExps={xml:/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html4:/&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html5:/&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g};exports.namedReferences={xml:{entities:{"&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&amp;":"&"},characters:{"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","&":"&amp;"}},html4:{entities:{"&apos;":"'","&nbsp":" ","&nbsp;":" ","&iexcl":"¡","&iexcl;":"¡","&cent":"¢","&cent;":"¢","&pound":"£","&pound;":"£","&curren":"¤","&curren;":"¤","&yen":"¥","&yen;":"¥","&brvbar":"¦","&brvbar;":"¦","&sect":"§","&sect;":"§","&uml":"¨","&uml;":"¨","&copy":"©","&copy;":"©","&ordf":"ª","&ordf;":"ª","&laquo":"«","&laquo;":"«","&not":"¬","&not;":"¬","&shy":"­","&shy;":"­","&reg":"®","&reg;":"®","&macr":"¯","&macr;":"¯","&deg":"°","&deg;":"°","&plusmn":"±","&plusmn;":"±","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&acute":"´","&acute;":"´","&micro":"µ","&micro;":"µ","&para":"¶","&para;":"¶","&middot":"·","&middot;":"·","&cedil":"¸","&cedil;":"¸","&sup1":"¹","&sup1;":"¹","&ordm":"º","&ordm;":"º","&raquo":"»","&raquo;":"»","&frac14":"¼","&frac14;":"¼","&frac12":"½","&frac12;":"½","&frac34":"¾","&frac34;":"¾","&iquest":"¿","&iquest;":"¿","&Agrave":"À","&Agrave;":"À","&Aacute":"Á","&Aacute;":"Á","&Acirc":"Â","&Acirc;":"Â","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Aring":"Å","&Aring;":"Å","&AElig":"Æ","&AElig;":"Æ","&Ccedil":"Ç","&Ccedil;":"Ç","&Egrave":"È","&Egrave;":"È","&Eacute":"É","&Eacute;":"É","&Ecirc":"Ê","&Ecirc;":"Ê","&Euml":"Ë","&Euml;":"Ë","&Igrave":"Ì","&Igrave;":"Ì","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Iuml":"Ï","&Iuml;":"Ï","&ETH":"Ð","&ETH;":"Ð","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Ograve":"Ò","&Ograve;":"Ò","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Otilde":"Õ","&Otilde;":"Õ","&Ouml":"Ö","&Ouml;":"Ö","&times":"×","&times;":"×","&Oslash":"Ø","&Oslash;":"Ø","&Ugrave":"Ù","&Ugrave;":"Ù","&Uacute":"Ú","&Uacute;":"Ú","&Ucirc":"Û","&Ucirc;":"Û","&Uuml":"Ü","&Uuml;":"Ü","&Yacute":"Ý","&Yacute;":"Ý","&THORN":"Þ","&THORN;":"Þ","&szlig":"ß","&szlig;":"ß","&agrave":"à","&agrave;":"à","&aacute":"á","&aacute;":"á","&acirc":"â","&acirc;":"â","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&aring":"å","&aring;":"å","&aelig":"æ","&aelig;":"æ","&ccedil":"ç","&ccedil;":"ç","&egrave":"è","&egrave;":"è","&eacute":"é","&eacute;":"é","&ecirc":"ê","&ecirc;":"ê","&euml":"ë","&euml;":"ë","&igrave":"ì","&igrave;":"ì","&iacute":"í","&iacute;":"í","&icirc":"î","&icirc;":"î","&iuml":"ï","&iuml;":"ï","&eth":"ð","&eth;":"ð","&ntilde":"ñ","&ntilde;":"ñ","&ograve":"ò","&ograve;":"ò","&oacute":"ó","&oacute;":"ó","&ocirc":"ô","&ocirc;":"ô","&otilde":"õ","&otilde;":"õ","&ouml":"ö","&ouml;":"ö","&divide":"÷","&divide;":"÷","&oslash":"ø","&oslash;":"ø","&ugrave":"ù","&ugrave;":"ù","&uacute":"ú","&uacute;":"ú","&ucirc":"û","&ucirc;":"û","&uuml":"ü","&uuml;":"ü","&yacute":"ý","&yacute;":"ý","&thorn":"þ","&thorn;":"þ","&yuml":"ÿ","&yuml;":"ÿ","&quot":'"',"&quot;":'"',"&amp":"&","&amp;":"&","&lt":"<","&lt;":"<","&gt":">","&gt;":">","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&permil;":"‰","&lsaquo;":"‹","&rsaquo;":"›","&euro;":"€","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&bull;":"•","&hellip;":"…","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&trade;":"™","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},characters:{"'":"&apos;"," ":"&nbsp;","¡":"&iexcl;","¢":"&cent;","£":"&pound;","¤":"&curren;","¥":"&yen;","¦":"&brvbar;","§":"&sect;","¨":"&uml;","©":"&copy;","ª":"&ordf;","«":"&laquo;","¬":"&not;","­":"&shy;","®":"&reg;","¯":"&macr;","°":"&deg;","±":"&plusmn;","²":"&sup2;","³":"&sup3;","´":"&acute;","µ":"&micro;","¶":"&para;","·":"&middot;","¸":"&cedil;","¹":"&sup1;","º":"&ordm;","»":"&raquo;","¼":"&frac14;","½":"&frac12;","¾":"&frac34;","¿":"&iquest;","À":"&Agrave;","Á":"&Aacute;","Â":"&Acirc;","Ã":"&Atilde;","Ä":"&Auml;","Å":"&Aring;","Æ":"&AElig;","Ç":"&Ccedil;","È":"&Egrave;","É":"&Eacute;","Ê":"&Ecirc;","Ë":"&Euml;","Ì":"&Igrave;","Í":"&Iacute;","Î":"&Icirc;","Ï":"&Iuml;","Ð":"&ETH;","Ñ":"&Ntilde;","Ò":"&Ograve;","Ó":"&Oacute;","Ô":"&Ocirc;","Õ":"&Otilde;","Ö":"&Ouml;","×":"&times;","Ø":"&Oslash;","Ù":"&Ugrave;","Ú":"&Uacute;","Û":"&Ucirc;","Ü":"&Uuml;","Ý":"&Yacute;","Þ":"&THORN;","ß":"&szlig;","à":"&agrave;","á":"&aacute;","â":"&acirc;","ã":"&atilde;","ä":"&auml;","å":"&aring;","æ":"&aelig;","ç":"&ccedil;","è":"&egrave;","é":"&eacute;","ê":"&ecirc;","ë":"&euml;","ì":"&igrave;","í":"&iacute;","î":"&icirc;","ï":"&iuml;","ð":"&eth;","ñ":"&ntilde;","ò":"&ograve;","ó":"&oacute;","ô":"&ocirc;","õ":"&otilde;","ö":"&ouml;","÷":"&divide;","ø":"&oslash;","ù":"&ugrave;","ú":"&uacute;","û":"&ucirc;","ü":"&uuml;","ý":"&yacute;","þ":"&thorn;","ÿ":"&yuml;",'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;","Œ":"&OElig;","œ":"&oelig;","Š":"&Scaron;","š":"&scaron;","Ÿ":"&Yuml;","ˆ":"&circ;","˜":"&tilde;"," ":"&ensp;"," ":"&emsp;"," ":"&thinsp;","‌":"&zwnj;","‍":"&zwj;","‎":"&lrm;","‏":"&rlm;","–":"&ndash;","—":"&mdash;","‘":"&lsquo;","’":"&rsquo;","‚":"&sbquo;","“":"&ldquo;","”":"&rdquo;","„":"&bdquo;","†":"&dagger;","‡":"&Dagger;","‰":"&permil;","‹":"&lsaquo;","›":"&rsaquo;","€":"&euro;","ƒ":"&fnof;","Α":"&Alpha;","Β":"&Beta;","Γ":"&Gamma;","Δ":"&Delta;","Ε":"&Epsilon;","Ζ":"&Zeta;","Η":"&Eta;","Θ":"&Theta;","Ι":"&Iota;","Κ":"&Kappa;","Λ":"&Lambda;","Μ":"&Mu;","Ν":"&Nu;","Ξ":"&Xi;","Ο":"&Omicron;","Π":"&Pi;","Ρ":"&Rho;","Σ":"&Sigma;","Τ":"&Tau;","Υ":"&Upsilon;","Φ":"&Phi;","Χ":"&Chi;","Ψ":"&Psi;","Ω":"&Omega;","α":"&alpha;","β":"&beta;","γ":"&gamma;","δ":"&delta;","ε":"&epsilon;","ζ":"&zeta;","η":"&eta;","θ":"&theta;","ι":"&iota;","κ":"&kappa;","λ":"&lambda;","μ":"&mu;","ν":"&nu;","ξ":"&xi;","ο":"&omicron;","π":"&pi;","ρ":"&rho;","ς":"&sigmaf;","σ":"&sigma;","τ":"&tau;","υ":"&upsilon;","φ":"&phi;","χ":"&chi;","ψ":"&psi;","ω":"&omega;","ϑ":"&thetasym;","ϒ":"&upsih;","ϖ":"&piv;","•":"&bull;","…":"&hellip;","′":"&prime;","″":"&Prime;","‾":"&oline;","⁄":"&frasl;","℘":"&weierp;","ℑ":"&image;","ℜ":"&real;","™":"&trade;","ℵ":"&alefsym;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","⇐":"&lArr;","⇑":"&uArr;","⇒":"&rArr;","⇓":"&dArr;","⇔":"&hArr;","∀":"&forall;","∂":"&part;","∃":"&exist;","∅":"&empty;","∇":"&nabla;","∈":"&isin;","∉":"&notin;","∋":"&ni;","∏":"&prod;","∑":"&sum;","−":"&minus;","∗":"&lowast;","√":"&radic;","∝":"&prop;","∞":"&infin;","∠":"&ang;","∧":"&and;","∨":"&or;","∩":"&cap;","∪":"&cup;","∫":"&int;","∴":"&there4;","∼":"&sim;","≅":"&cong;","≈":"&asymp;","≠":"&ne;","≡":"&equiv;","≤":"&le;","≥":"&ge;","⊂":"&sub;","⊃":"&sup;","⊄":"&nsub;","⊆":"&sube;","⊇":"&supe;","⊕":"&oplus;","⊗":"&otimes;","⊥":"&perp;","⋅":"&sdot;","⌈":"&lceil;","⌉":"&rceil;","⌊":"&lfloor;","⌋":"&rfloor;","〈":"&lang;","〉":"&rang;","◊":"&loz;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;"}},html5:{entities:{"&AElig":"Æ","&AElig;":"Æ","&AMP":"&","&AMP;":"&","&Aacute":"Á","&Aacute;":"Á","&Abreve;":"Ă","&Acirc":"Â","&Acirc;":"Â","&Acy;":"А","&Afr;":"𝔄","&Agrave":"À","&Agrave;":"À","&Alpha;":"Α","&Amacr;":"Ā","&And;":"⩓","&Aogon;":"Ą","&Aopf;":"𝔸","&ApplyFunction;":"⁡","&Aring":"Å","&Aring;":"Å","&Ascr;":"𝒜","&Assign;":"≔","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Backslash;":"∖","&Barv;":"⫧","&Barwed;":"⌆","&Bcy;":"Б","&Because;":"∵","&Bernoullis;":"ℬ","&Beta;":"Β","&Bfr;":"𝔅","&Bopf;":"𝔹","&Breve;":"˘","&Bscr;":"ℬ","&Bumpeq;":"≎","&CHcy;":"Ч","&COPY":"©","&COPY;":"©","&Cacute;":"Ć","&Cap;":"⋒","&CapitalDifferentialD;":"ⅅ","&Cayleys;":"ℭ","&Ccaron;":"Č","&Ccedil":"Ç","&Ccedil;":"Ç","&Ccirc;":"Ĉ","&Cconint;":"∰","&Cdot;":"Ċ","&Cedilla;":"¸","&CenterDot;":"·","&Cfr;":"ℭ","&Chi;":"Χ","&CircleDot;":"⊙","&CircleMinus;":"⊖","&CirclePlus;":"⊕","&CircleTimes;":"⊗","&ClockwiseContourIntegral;":"∲","&CloseCurlyDoubleQuote;":"”","&CloseCurlyQuote;":"’","&Colon;":"∷","&Colone;":"⩴","&Congruent;":"≡","&Conint;":"∯","&ContourIntegral;":"∮","&Copf;":"ℂ","&Coproduct;":"∐","&CounterClockwiseContourIntegral;":"∳","&Cross;":"⨯","&Cscr;":"𝒞","&Cup;":"⋓","&CupCap;":"≍","&DD;":"ⅅ","&DDotrahd;":"⤑","&DJcy;":"Ђ","&DScy;":"Ѕ","&DZcy;":"Џ","&Dagger;":"‡","&Darr;":"↡","&Dashv;":"⫤","&Dcaron;":"Ď","&Dcy;":"Д","&Del;":"∇","&Delta;":"Δ","&Dfr;":"𝔇","&DiacriticalAcute;":"´","&DiacriticalDot;":"˙","&DiacriticalDoubleAcute;":"˝","&DiacriticalGrave;":"`","&DiacriticalTilde;":"˜","&Diamond;":"⋄","&DifferentialD;":"ⅆ","&Dopf;":"𝔻","&Dot;":"¨","&DotDot;":"⃜","&DotEqual;":"≐","&DoubleContourIntegral;":"∯","&DoubleDot;":"¨","&DoubleDownArrow;":"⇓","&DoubleLeftArrow;":"⇐","&DoubleLeftRightArrow;":"⇔","&DoubleLeftTee;":"⫤","&DoubleLongLeftArrow;":"⟸","&DoubleLongLeftRightArrow;":"⟺","&DoubleLongRightArrow;":"⟹","&DoubleRightArrow;":"⇒","&DoubleRightTee;":"⊨","&DoubleUpArrow;":"⇑","&DoubleUpDownArrow;":"⇕","&DoubleVerticalBar;":"∥","&DownArrow;":"↓","&DownArrowBar;":"⤓","&DownArrowUpArrow;":"⇵","&DownBreve;":"̑","&DownLeftRightVector;":"⥐","&DownLeftTeeVector;":"⥞","&DownLeftVector;":"↽","&DownLeftVectorBar;":"⥖","&DownRightTeeVector;":"⥟","&DownRightVector;":"⇁","&DownRightVectorBar;":"⥗","&DownTee;":"⊤","&DownTeeArrow;":"↧","&Downarrow;":"⇓","&Dscr;":"𝒟","&Dstrok;":"Đ","&ENG;":"Ŋ","&ETH":"Ð","&ETH;":"Ð","&Eacute":"É","&Eacute;":"É","&Ecaron;":"Ě","&Ecirc":"Ê","&Ecirc;":"Ê","&Ecy;":"Э","&Edot;":"Ė","&Efr;":"𝔈","&Egrave":"È","&Egrave;":"È","&Element;":"∈","&Emacr;":"Ē","&EmptySmallSquare;":"◻","&EmptyVerySmallSquare;":"▫","&Eogon;":"Ę","&Eopf;":"𝔼","&Epsilon;":"Ε","&Equal;":"⩵","&EqualTilde;":"≂","&Equilibrium;":"⇌","&Escr;":"ℰ","&Esim;":"⩳","&Eta;":"Η","&Euml":"Ë","&Euml;":"Ë","&Exists;":"∃","&ExponentialE;":"ⅇ","&Fcy;":"Ф","&Ffr;":"𝔉","&FilledSmallSquare;":"◼","&FilledVerySmallSquare;":"▪","&Fopf;":"𝔽","&ForAll;":"∀","&Fouriertrf;":"ℱ","&Fscr;":"ℱ","&GJcy;":"Ѓ","&GT":">","&GT;":">","&Gamma;":"Γ","&Gammad;":"Ϝ","&Gbreve;":"Ğ","&Gcedil;":"Ģ","&Gcirc;":"Ĝ","&Gcy;":"Г","&Gdot;":"Ġ","&Gfr;":"𝔊","&Gg;":"⋙","&Gopf;":"𝔾","&GreaterEqual;":"≥","&GreaterEqualLess;":"⋛","&GreaterFullEqual;":"≧","&GreaterGreater;":"⪢","&GreaterLess;":"≷","&GreaterSlantEqual;":"⩾","&GreaterTilde;":"≳","&Gscr;":"𝒢","&Gt;":"≫","&HARDcy;":"Ъ","&Hacek;":"ˇ","&Hat;":"^","&Hcirc;":"Ĥ","&Hfr;":"ℌ","&HilbertSpace;":"ℋ","&Hopf;":"ℍ","&HorizontalLine;":"─","&Hscr;":"ℋ","&Hstrok;":"Ħ","&HumpDownHump;":"≎","&HumpEqual;":"≏","&IEcy;":"Е","&IJlig;":"Ĳ","&IOcy;":"Ё","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Icy;":"И","&Idot;":"İ","&Ifr;":"ℑ","&Igrave":"Ì","&Igrave;":"Ì","&Im;":"ℑ","&Imacr;":"Ī","&ImaginaryI;":"ⅈ","&Implies;":"⇒","&Int;":"∬","&Integral;":"∫","&Intersection;":"⋂","&InvisibleComma;":"⁣","&InvisibleTimes;":"⁢","&Iogon;":"Į","&Iopf;":"𝕀","&Iota;":"Ι","&Iscr;":"ℐ","&Itilde;":"Ĩ","&Iukcy;":"І","&Iuml":"Ï","&Iuml;":"Ï","&Jcirc;":"Ĵ","&Jcy;":"Й","&Jfr;":"𝔍","&Jopf;":"𝕁","&Jscr;":"𝒥","&Jsercy;":"Ј","&Jukcy;":"Є","&KHcy;":"Х","&KJcy;":"Ќ","&Kappa;":"Κ","&Kcedil;":"Ķ","&Kcy;":"К","&Kfr;":"𝔎","&Kopf;":"𝕂","&Kscr;":"𝒦","&LJcy;":"Љ","&LT":"<","&LT;":"<","&Lacute;":"Ĺ","&Lambda;":"Λ","&Lang;":"⟪","&Laplacetrf;":"ℒ","&Larr;":"↞","&Lcaron;":"Ľ","&Lcedil;":"Ļ","&Lcy;":"Л","&LeftAngleBracket;":"⟨","&LeftArrow;":"←","&LeftArrowBar;":"⇤","&LeftArrowRightArrow;":"⇆","&LeftCeiling;":"⌈","&LeftDoubleBracket;":"⟦","&LeftDownTeeVector;":"⥡","&LeftDownVector;":"⇃","&LeftDownVectorBar;":"⥙","&LeftFloor;":"⌊","&LeftRightArrow;":"↔","&LeftRightVector;":"⥎","&LeftTee;":"⊣","&LeftTeeArrow;":"↤","&LeftTeeVector;":"⥚","&LeftTriangle;":"⊲","&LeftTriangleBar;":"⧏","&LeftTriangleEqual;":"⊴","&LeftUpDownVector;":"⥑","&LeftUpTeeVector;":"⥠","&LeftUpVector;":"↿","&LeftUpVectorBar;":"⥘","&LeftVector;":"↼","&LeftVectorBar;":"⥒","&Leftarrow;":"⇐","&Leftrightarrow;":"⇔","&LessEqualGreater;":"⋚","&LessFullEqual;":"≦","&LessGreater;":"≶","&LessLess;":"⪡","&LessSlantEqual;":"⩽","&LessTilde;":"≲","&Lfr;":"𝔏","&Ll;":"⋘","&Lleftarrow;":"⇚","&Lmidot;":"Ŀ","&LongLeftArrow;":"⟵","&LongLeftRightArrow;":"⟷","&LongRightArrow;":"⟶","&Longleftarrow;":"⟸","&Longleftrightarrow;":"⟺","&Longrightarrow;":"⟹","&Lopf;":"𝕃","&LowerLeftArrow;":"↙","&LowerRightArrow;":"↘","&Lscr;":"ℒ","&Lsh;":"↰","&Lstrok;":"Ł","&Lt;":"≪","&Map;":"⤅","&Mcy;":"М","&MediumSpace;":" ","&Mellintrf;":"ℳ","&Mfr;":"𝔐","&MinusPlus;":"∓","&Mopf;":"𝕄","&Mscr;":"ℳ","&Mu;":"Μ","&NJcy;":"Њ","&Nacute;":"Ń","&Ncaron;":"Ň","&Ncedil;":"Ņ","&Ncy;":"Н","&NegativeMediumSpace;":"​","&NegativeThickSpace;":"​","&NegativeThinSpace;":"​","&NegativeVeryThinSpace;":"​","&NestedGreaterGreater;":"≫","&NestedLessLess;":"≪","&NewLine;":"\n","&Nfr;":"𝔑","&NoBreak;":"⁠","&NonBreakingSpace;":" ","&Nopf;":"ℕ","&Not;":"⫬","&NotCongruent;":"≢","&NotCupCap;":"≭","&NotDoubleVerticalBar;":"∦","&NotElement;":"∉","&NotEqual;":"≠","&NotEqualTilde;":"≂̸","&NotExists;":"∄","&NotGreater;":"≯","&NotGreaterEqual;":"≱","&NotGreaterFullEqual;":"≧̸","&NotGreaterGreater;":"≫̸","&NotGreaterLess;":"≹","&NotGreaterSlantEqual;":"⩾̸","&NotGreaterTilde;":"≵","&NotHumpDownHump;":"≎̸","&NotHumpEqual;":"≏̸","&NotLeftTriangle;":"⋪","&NotLeftTriangleBar;":"⧏̸","&NotLeftTriangleEqual;":"⋬","&NotLess;":"≮","&NotLessEqual;":"≰","&NotLessGreater;":"≸","&NotLessLess;":"≪̸","&NotLessSlantEqual;":"⩽̸","&NotLessTilde;":"≴","&NotNestedGreaterGreater;":"⪢̸","&NotNestedLessLess;":"⪡̸","&NotPrecedes;":"⊀","&NotPrecedesEqual;":"⪯̸","&NotPrecedesSlantEqual;":"⋠","&NotReverseElement;":"∌","&NotRightTriangle;":"⋫","&NotRightTriangleBar;":"⧐̸","&NotRightTriangleEqual;":"⋭","&NotSquareSubset;":"⊏̸","&NotSquareSubsetEqual;":"⋢","&NotSquareSuperset;":"⊐̸","&NotSquareSupersetEqual;":"⋣","&NotSubset;":"⊂⃒","&NotSubsetEqual;":"⊈","&NotSucceeds;":"⊁","&NotSucceedsEqual;":"⪰̸","&NotSucceedsSlantEqual;":"⋡","&NotSucceedsTilde;":"≿̸","&NotSuperset;":"⊃⃒","&NotSupersetEqual;":"⊉","&NotTilde;":"≁","&NotTildeEqual;":"≄","&NotTildeFullEqual;":"≇","&NotTildeTilde;":"≉","&NotVerticalBar;":"∤","&Nscr;":"𝒩","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Nu;":"Ν","&OElig;":"Œ","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Ocy;":"О","&Odblac;":"Ő","&Ofr;":"𝔒","&Ograve":"Ò","&Ograve;":"Ò","&Omacr;":"Ō","&Omega;":"Ω","&Omicron;":"Ο","&Oopf;":"𝕆","&OpenCurlyDoubleQuote;":"“","&OpenCurlyQuote;":"‘","&Or;":"⩔","&Oscr;":"𝒪","&Oslash":"Ø","&Oslash;":"Ø","&Otilde":"Õ","&Otilde;":"Õ","&Otimes;":"⨷","&Ouml":"Ö","&Ouml;":"Ö","&OverBar;":"‾","&OverBrace;":"⏞","&OverBracket;":"⎴","&OverParenthesis;":"⏜","&PartialD;":"∂","&Pcy;":"П","&Pfr;":"𝔓","&Phi;":"Φ","&Pi;":"Π","&PlusMinus;":"±","&Poincareplane;":"ℌ","&Popf;":"ℙ","&Pr;":"⪻","&Precedes;":"≺","&PrecedesEqual;":"⪯","&PrecedesSlantEqual;":"≼","&PrecedesTilde;":"≾","&Prime;":"″","&Product;":"∏","&Proportion;":"∷","&Proportional;":"∝","&Pscr;":"𝒫","&Psi;":"Ψ","&QUOT":'"',"&QUOT;":'"',"&Qfr;":"𝔔","&Qopf;":"ℚ","&Qscr;":"𝒬","&RBarr;":"⤐","&REG":"®","&REG;":"®","&Racute;":"Ŕ","&Rang;":"⟫","&Rarr;":"↠","&Rarrtl;":"⤖","&Rcaron;":"Ř","&Rcedil;":"Ŗ","&Rcy;":"Р","&Re;":"ℜ","&ReverseElement;":"∋","&ReverseEquilibrium;":"⇋","&ReverseUpEquilibrium;":"⥯","&Rfr;":"ℜ","&Rho;":"Ρ","&RightAngleBracket;":"⟩","&RightArrow;":"→","&RightArrowBar;":"⇥","&RightArrowLeftArrow;":"⇄","&RightCeiling;":"⌉","&RightDoubleBracket;":"⟧","&RightDownTeeVector;":"⥝","&RightDownVector;":"⇂","&RightDownVectorBar;":"⥕","&RightFloor;":"⌋","&RightTee;":"⊢","&RightTeeArrow;":"↦","&RightTeeVector;":"⥛","&RightTriangle;":"⊳","&RightTriangleBar;":"⧐","&RightTriangleEqual;":"⊵","&RightUpDownVector;":"⥏","&RightUpTeeVector;":"⥜","&RightUpVector;":"↾","&RightUpVectorBar;":"⥔","&RightVector;":"⇀","&RightVectorBar;":"⥓","&Rightarrow;":"⇒","&Ropf;":"ℝ","&RoundImplies;":"⥰","&Rrightarrow;":"⇛","&Rscr;":"ℛ","&Rsh;":"↱","&RuleDelayed;":"⧴","&SHCHcy;":"Щ","&SHcy;":"Ш","&SOFTcy;":"Ь","&Sacute;":"Ś","&Sc;":"⪼","&Scaron;":"Š","&Scedil;":"Ş","&Scirc;":"Ŝ","&Scy;":"С","&Sfr;":"𝔖","&ShortDownArrow;":"↓","&ShortLeftArrow;":"←","&ShortRightArrow;":"→","&ShortUpArrow;":"↑","&Sigma;":"Σ","&SmallCircle;":"∘","&Sopf;":"𝕊","&Sqrt;":"√","&Square;":"□","&SquareIntersection;":"⊓","&SquareSubset;":"⊏","&SquareSubsetEqual;":"⊑","&SquareSuperset;":"⊐","&SquareSupersetEqual;":"⊒","&SquareUnion;":"⊔","&Sscr;":"𝒮","&Star;":"⋆","&Sub;":"⋐","&Subset;":"⋐","&SubsetEqual;":"⊆","&Succeeds;":"≻","&SucceedsEqual;":"⪰","&SucceedsSlantEqual;":"≽","&SucceedsTilde;":"≿","&SuchThat;":"∋","&Sum;":"∑","&Sup;":"⋑","&Superset;":"⊃","&SupersetEqual;":"⊇","&Supset;":"⋑","&THORN":"Þ","&THORN;":"Þ","&TRADE;":"™","&TSHcy;":"Ћ","&TScy;":"Ц","&Tab;":"\t","&Tau;":"Τ","&Tcaron;":"Ť","&Tcedil;":"Ţ","&Tcy;":"Т","&Tfr;":"𝔗","&Therefore;":"∴","&Theta;":"Θ","&ThickSpace;":"  ","&ThinSpace;":" ","&Tilde;":"∼","&TildeEqual;":"≃","&TildeFullEqual;":"≅","&TildeTilde;":"≈","&Topf;":"𝕋","&TripleDot;":"⃛","&Tscr;":"𝒯","&Tstrok;":"Ŧ","&Uacute":"Ú","&Uacute;":"Ú","&Uarr;":"↟","&Uarrocir;":"⥉","&Ubrcy;":"Ў","&Ubreve;":"Ŭ","&Ucirc":"Û","&Ucirc;":"Û","&Ucy;":"У","&Udblac;":"Ű","&Ufr;":"𝔘","&Ugrave":"Ù","&Ugrave;":"Ù","&Umacr;":"Ū","&UnderBar;":"_","&UnderBrace;":"⏟","&UnderBracket;":"⎵","&UnderParenthesis;":"⏝","&Union;":"⋃","&UnionPlus;":"⊎","&Uogon;":"Ų","&Uopf;":"𝕌","&UpArrow;":"↑","&UpArrowBar;":"⤒","&UpArrowDownArrow;":"⇅","&UpDownArrow;":"↕","&UpEquilibrium;":"⥮","&UpTee;":"⊥","&UpTeeArrow;":"↥","&Uparrow;":"⇑","&Updownarrow;":"⇕","&UpperLeftArrow;":"↖","&UpperRightArrow;":"↗","&Upsi;":"ϒ","&Upsilon;":"Υ","&Uring;":"Ů","&Uscr;":"𝒰","&Utilde;":"Ũ","&Uuml":"Ü","&Uuml;":"Ü","&VDash;":"⊫","&Vbar;":"⫫","&Vcy;":"В","&Vdash;":"⊩","&Vdashl;":"⫦","&Vee;":"⋁","&Verbar;":"‖","&Vert;":"‖","&VerticalBar;":"∣","&VerticalLine;":"|","&VerticalSeparator;":"❘","&VerticalTilde;":"≀","&VeryThinSpace;":" ","&Vfr;":"𝔙","&Vopf;":"𝕍","&Vscr;":"𝒱","&Vvdash;":"⊪","&Wcirc;":"Ŵ","&Wedge;":"⋀","&Wfr;":"𝔚","&Wopf;":"𝕎","&Wscr;":"𝒲","&Xfr;":"𝔛","&Xi;":"Ξ","&Xopf;":"𝕏","&Xscr;":"𝒳","&YAcy;":"Я","&YIcy;":"Ї","&YUcy;":"Ю","&Yacute":"Ý","&Yacute;":"Ý","&Ycirc;":"Ŷ","&Ycy;":"Ы","&Yfr;":"𝔜","&Yopf;":"𝕐","&Yscr;":"𝒴","&Yuml;":"Ÿ","&ZHcy;":"Ж","&Zacute;":"Ź","&Zcaron;":"Ž","&Zcy;":"З","&Zdot;":"Ż","&ZeroWidthSpace;":"​","&Zeta;":"Ζ","&Zfr;":"ℨ","&Zopf;":"ℤ","&Zscr;":"𝒵","&aacute":"á","&aacute;":"á","&abreve;":"ă","&ac;":"∾","&acE;":"∾̳","&acd;":"∿","&acirc":"â","&acirc;":"â","&acute":"´","&acute;":"´","&acy;":"а","&aelig":"æ","&aelig;":"æ","&af;":"⁡","&afr;":"𝔞","&agrave":"à","&agrave;":"à","&alefsym;":"ℵ","&aleph;":"ℵ","&alpha;":"α","&amacr;":"ā","&amalg;":"⨿","&amp":"&","&amp;":"&","&and;":"∧","&andand;":"⩕","&andd;":"⩜","&andslope;":"⩘","&andv;":"⩚","&ang;":"∠","&ange;":"⦤","&angle;":"∠","&angmsd;":"∡","&angmsdaa;":"⦨","&angmsdab;":"⦩","&angmsdac;":"⦪","&angmsdad;":"⦫","&angmsdae;":"⦬","&angmsdaf;":"⦭","&angmsdag;":"⦮","&angmsdah;":"⦯","&angrt;":"∟","&angrtvb;":"⊾","&angrtvbd;":"⦝","&angsph;":"∢","&angst;":"Å","&angzarr;":"⍼","&aogon;":"ą","&aopf;":"𝕒","&ap;":"≈","&apE;":"⩰","&apacir;":"⩯","&ape;":"≊","&apid;":"≋","&apos;":"'","&approx;":"≈","&approxeq;":"≊","&aring":"å","&aring;":"å","&ascr;":"𝒶","&ast;":"*","&asymp;":"≈","&asympeq;":"≍","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&awconint;":"∳","&awint;":"⨑","&bNot;":"⫭","&backcong;":"≌","&backepsilon;":"϶","&backprime;":"‵","&backsim;":"∽","&backsimeq;":"⋍","&barvee;":"⊽","&barwed;":"⌅","&barwedge;":"⌅","&bbrk;":"⎵","&bbrktbrk;":"⎶","&bcong;":"≌","&bcy;":"б","&bdquo;":"„","&becaus;":"∵","&because;":"∵","&bemptyv;":"⦰","&bepsi;":"϶","&bernou;":"ℬ","&beta;":"β","&beth;":"ℶ","&between;":"≬","&bfr;":"𝔟","&bigcap;":"⋂","&bigcirc;":"◯","&bigcup;":"⋃","&bigodot;":"⨀","&bigoplus;":"⨁","&bigotimes;":"⨂","&bigsqcup;":"⨆","&bigstar;":"★","&bigtriangledown;":"▽","&bigtriangleup;":"△","&biguplus;":"⨄","&bigvee;":"⋁","&bigwedge;":"⋀","&bkarow;":"⤍","&blacklozenge;":"⧫","&blacksquare;":"▪","&blacktriangle;":"▴","&blacktriangledown;":"▾","&blacktriangleleft;":"◂","&blacktriangleright;":"▸","&blank;":"␣","&blk12;":"▒","&blk14;":"░","&blk34;":"▓","&block;":"█","&bne;":"=⃥","&bnequiv;":"≡⃥","&bnot;":"⌐","&bopf;":"𝕓","&bot;":"⊥","&bottom;":"⊥","&bowtie;":"⋈","&boxDL;":"╗","&boxDR;":"╔","&boxDl;":"╖","&boxDr;":"╓","&boxH;":"═","&boxHD;":"╦","&boxHU;":"╩","&boxHd;":"╤","&boxHu;":"╧","&boxUL;":"╝","&boxUR;":"╚","&boxUl;":"╜","&boxUr;":"╙","&boxV;":"║","&boxVH;":"╬","&boxVL;":"╣","&boxVR;":"╠","&boxVh;":"╫","&boxVl;":"╢","&boxVr;":"╟","&boxbox;":"⧉","&boxdL;":"╕","&boxdR;":"╒","&boxdl;":"┐","&boxdr;":"┌","&boxh;":"─","&boxhD;":"╥","&boxhU;":"╨","&boxhd;":"┬","&boxhu;":"┴","&boxminus;":"⊟","&boxplus;":"⊞","&boxtimes;":"⊠","&boxuL;":"╛","&boxuR;":"╘","&boxul;":"┘","&boxur;":"└","&boxv;":"│","&boxvH;":"╪","&boxvL;":"╡","&boxvR;":"╞","&boxvh;":"┼","&boxvl;":"┤","&boxvr;":"├","&bprime;":"‵","&breve;":"˘","&brvbar":"¦","&brvbar;":"¦","&bscr;":"𝒷","&bsemi;":"⁏","&bsim;":"∽","&bsime;":"⋍","&bsol;":"\\","&bsolb;":"⧅","&bsolhsub;":"⟈","&bull;":"•","&bullet;":"•","&bump;":"≎","&bumpE;":"⪮","&bumpe;":"≏","&bumpeq;":"≏","&cacute;":"ć","&cap;":"∩","&capand;":"⩄","&capbrcup;":"⩉","&capcap;":"⩋","&capcup;":"⩇","&capdot;":"⩀","&caps;":"∩︀","&caret;":"⁁","&caron;":"ˇ","&ccaps;":"⩍","&ccaron;":"č","&ccedil":"ç","&ccedil;":"ç","&ccirc;":"ĉ","&ccups;":"⩌","&ccupssm;":"⩐","&cdot;":"ċ","&cedil":"¸","&cedil;":"¸","&cemptyv;":"⦲","&cent":"¢","&cent;":"¢","&centerdot;":"·","&cfr;":"𝔠","&chcy;":"ч","&check;":"✓","&checkmark;":"✓","&chi;":"χ","&cir;":"○","&cirE;":"⧃","&circ;":"ˆ","&circeq;":"≗","&circlearrowleft;":"↺","&circlearrowright;":"↻","&circledR;":"®","&circledS;":"Ⓢ","&circledast;":"⊛","&circledcirc;":"⊚","&circleddash;":"⊝","&cire;":"≗","&cirfnint;":"⨐","&cirmid;":"⫯","&cirscir;":"⧂","&clubs;":"♣","&clubsuit;":"♣","&colon;":":","&colone;":"≔","&coloneq;":"≔","&comma;":",","&commat;":"@","&comp;":"∁","&compfn;":"∘","&complement;":"∁","&complexes;":"ℂ","&cong;":"≅","&congdot;":"⩭","&conint;":"∮","&copf;":"𝕔","&coprod;":"∐","&copy":"©","&copy;":"©","&copysr;":"℗","&crarr;":"↵","&cross;":"✗","&cscr;":"𝒸","&csub;":"⫏","&csube;":"⫑","&csup;":"⫐","&csupe;":"⫒","&ctdot;":"⋯","&cudarrl;":"⤸","&cudarrr;":"⤵","&cuepr;":"⋞","&cuesc;":"⋟","&cularr;":"↶","&cularrp;":"⤽","&cup;":"∪","&cupbrcap;":"⩈","&cupcap;":"⩆","&cupcup;":"⩊","&cupdot;":"⊍","&cupor;":"⩅","&cups;":"∪︀","&curarr;":"↷","&curarrm;":"⤼","&curlyeqprec;":"⋞","&curlyeqsucc;":"⋟","&curlyvee;":"⋎","&curlywedge;":"⋏","&curren":"¤","&curren;":"¤","&curvearrowleft;":"↶","&curvearrowright;":"↷","&cuvee;":"⋎","&cuwed;":"⋏","&cwconint;":"∲","&cwint;":"∱","&cylcty;":"⌭","&dArr;":"⇓","&dHar;":"⥥","&dagger;":"†","&daleth;":"ℸ","&darr;":"↓","&dash;":"‐","&dashv;":"⊣","&dbkarow;":"⤏","&dblac;":"˝","&dcaron;":"ď","&dcy;":"д","&dd;":"ⅆ","&ddagger;":"‡","&ddarr;":"⇊","&ddotseq;":"⩷","&deg":"°","&deg;":"°","&delta;":"δ","&demptyv;":"⦱","&dfisht;":"⥿","&dfr;":"𝔡","&dharl;":"⇃","&dharr;":"⇂","&diam;":"⋄","&diamond;":"⋄","&diamondsuit;":"♦","&diams;":"♦","&die;":"¨","&digamma;":"ϝ","&disin;":"⋲","&div;":"÷","&divide":"÷","&divide;":"÷","&divideontimes;":"⋇","&divonx;":"⋇","&djcy;":"ђ","&dlcorn;":"⌞","&dlcrop;":"⌍","&dollar;":"$","&dopf;":"𝕕","&dot;":"˙","&doteq;":"≐","&doteqdot;":"≑","&dotminus;":"∸","&dotplus;":"∔","&dotsquare;":"⊡","&doublebarwedge;":"⌆","&downarrow;":"↓","&downdownarrows;":"⇊","&downharpoonleft;":"⇃","&downharpoonright;":"⇂","&drbkarow;":"⤐","&drcorn;":"⌟","&drcrop;":"⌌","&dscr;":"𝒹","&dscy;":"ѕ","&dsol;":"⧶","&dstrok;":"đ","&dtdot;":"⋱","&dtri;":"▿","&dtrif;":"▾","&duarr;":"⇵","&duhar;":"⥯","&dwangle;":"⦦","&dzcy;":"џ","&dzigrarr;":"⟿","&eDDot;":"⩷","&eDot;":"≑","&eacute":"é","&eacute;":"é","&easter;":"⩮","&ecaron;":"ě","&ecir;":"≖","&ecirc":"ê","&ecirc;":"ê","&ecolon;":"≕","&ecy;":"э","&edot;":"ė","&ee;":"ⅇ","&efDot;":"≒","&efr;":"𝔢","&eg;":"⪚","&egrave":"è","&egrave;":"è","&egs;":"⪖","&egsdot;":"⪘","&el;":"⪙","&elinters;":"⏧","&ell;":"ℓ","&els;":"⪕","&elsdot;":"⪗","&emacr;":"ē","&empty;":"∅","&emptyset;":"∅","&emptyv;":"∅","&emsp13;":" ","&emsp14;":" ","&emsp;":" ","&eng;":"ŋ","&ensp;":" ","&eogon;":"ę","&eopf;":"𝕖","&epar;":"⋕","&eparsl;":"⧣","&eplus;":"⩱","&epsi;":"ε","&epsilon;":"ε","&epsiv;":"ϵ","&eqcirc;":"≖","&eqcolon;":"≕","&eqsim;":"≂","&eqslantgtr;":"⪖","&eqslantless;":"⪕","&equals;":"=","&equest;":"≟","&equiv;":"≡","&equivDD;":"⩸","&eqvparsl;":"⧥","&erDot;":"≓","&erarr;":"⥱","&escr;":"ℯ","&esdot;":"≐","&esim;":"≂","&eta;":"η","&eth":"ð","&eth;":"ð","&euml":"ë","&euml;":"ë","&euro;":"€","&excl;":"!","&exist;":"∃","&expectation;":"ℰ","&exponentiale;":"ⅇ","&fallingdotseq;":"≒","&fcy;":"ф","&female;":"♀","&ffilig;":"ﬃ","&fflig;":"ﬀ","&ffllig;":"ﬄ","&ffr;":"𝔣","&filig;":"ﬁ","&fjlig;":"fj","&flat;":"♭","&fllig;":"ﬂ","&fltns;":"▱","&fnof;":"ƒ","&fopf;":"𝕗","&forall;":"∀","&fork;":"⋔","&forkv;":"⫙","&fpartint;":"⨍","&frac12":"½","&frac12;":"½","&frac13;":"⅓","&frac14":"¼","&frac14;":"¼","&frac15;":"⅕","&frac16;":"⅙","&frac18;":"⅛","&frac23;":"⅔","&frac25;":"⅖","&frac34":"¾","&frac34;":"¾","&frac35;":"⅗","&frac38;":"⅜","&frac45;":"⅘","&frac56;":"⅚","&frac58;":"⅝","&frac78;":"⅞","&frasl;":"⁄","&frown;":"⌢","&fscr;":"𝒻","&gE;":"≧","&gEl;":"⪌","&gacute;":"ǵ","&gamma;":"γ","&gammad;":"ϝ","&gap;":"⪆","&gbreve;":"ğ","&gcirc;":"ĝ","&gcy;":"г","&gdot;":"ġ","&ge;":"≥","&gel;":"⋛","&geq;":"≥","&geqq;":"≧","&geqslant;":"⩾","&ges;":"⩾","&gescc;":"⪩","&gesdot;":"⪀","&gesdoto;":"⪂","&gesdotol;":"⪄","&gesl;":"⋛︀","&gesles;":"⪔","&gfr;":"𝔤","&gg;":"≫","&ggg;":"⋙","&gimel;":"ℷ","&gjcy;":"ѓ","&gl;":"≷","&glE;":"⪒","&gla;":"⪥","&glj;":"⪤","&gnE;":"≩","&gnap;":"⪊","&gnapprox;":"⪊","&gne;":"⪈","&gneq;":"⪈","&gneqq;":"≩","&gnsim;":"⋧","&gopf;":"𝕘","&grave;":"`","&gscr;":"ℊ","&gsim;":"≳","&gsime;":"⪎","&gsiml;":"⪐","&gt":">","&gt;":">","&gtcc;":"⪧","&gtcir;":"⩺","&gtdot;":"⋗","&gtlPar;":"⦕","&gtquest;":"⩼","&gtrapprox;":"⪆","&gtrarr;":"⥸","&gtrdot;":"⋗","&gtreqless;":"⋛","&gtreqqless;":"⪌","&gtrless;":"≷","&gtrsim;":"≳","&gvertneqq;":"≩︀","&gvnE;":"≩︀","&hArr;":"⇔","&hairsp;":" ","&half;":"½","&hamilt;":"ℋ","&hardcy;":"ъ","&harr;":"↔","&harrcir;":"⥈","&harrw;":"↭","&hbar;":"ℏ","&hcirc;":"ĥ","&hearts;":"♥","&heartsuit;":"♥","&hellip;":"…","&hercon;":"⊹","&hfr;":"𝔥","&hksearow;":"⤥","&hkswarow;":"⤦","&hoarr;":"⇿","&homtht;":"∻","&hookleftarrow;":"↩","&hookrightarrow;":"↪","&hopf;":"𝕙","&horbar;":"―","&hscr;":"𝒽","&hslash;":"ℏ","&hstrok;":"ħ","&hybull;":"⁃","&hyphen;":"‐","&iacute":"í","&iacute;":"í","&ic;":"⁣","&icirc":"î","&icirc;":"î","&icy;":"и","&iecy;":"е","&iexcl":"¡","&iexcl;":"¡","&iff;":"⇔","&ifr;":"𝔦","&igrave":"ì","&igrave;":"ì","&ii;":"ⅈ","&iiiint;":"⨌","&iiint;":"∭","&iinfin;":"⧜","&iiota;":"℩","&ijlig;":"ĳ","&imacr;":"ī","&image;":"ℑ","&imagline;":"ℐ","&imagpart;":"ℑ","&imath;":"ı","&imof;":"⊷","&imped;":"Ƶ","&in;":"∈","&incare;":"℅","&infin;":"∞","&infintie;":"⧝","&inodot;":"ı","&int;":"∫","&intcal;":"⊺","&integers;":"ℤ","&intercal;":"⊺","&intlarhk;":"⨗","&intprod;":"⨼","&iocy;":"ё","&iogon;":"į","&iopf;":"𝕚","&iota;":"ι","&iprod;":"⨼","&iquest":"¿","&iquest;":"¿","&iscr;":"𝒾","&isin;":"∈","&isinE;":"⋹","&isindot;":"⋵","&isins;":"⋴","&isinsv;":"⋳","&isinv;":"∈","&it;":"⁢","&itilde;":"ĩ","&iukcy;":"і","&iuml":"ï","&iuml;":"ï","&jcirc;":"ĵ","&jcy;":"й","&jfr;":"𝔧","&jmath;":"ȷ","&jopf;":"𝕛","&jscr;":"𝒿","&jsercy;":"ј","&jukcy;":"є","&kappa;":"κ","&kappav;":"ϰ","&kcedil;":"ķ","&kcy;":"к","&kfr;":"𝔨","&kgreen;":"ĸ","&khcy;":"х","&kjcy;":"ќ","&kopf;":"𝕜","&kscr;":"𝓀","&lAarr;":"⇚","&lArr;":"⇐","&lAtail;":"⤛","&lBarr;":"⤎","&lE;":"≦","&lEg;":"⪋","&lHar;":"⥢","&lacute;":"ĺ","&laemptyv;":"⦴","&lagran;":"ℒ","&lambda;":"λ","&lang;":"⟨","&langd;":"⦑","&langle;":"⟨","&lap;":"⪅","&laquo":"«","&laquo;":"«","&larr;":"←","&larrb;":"⇤","&larrbfs;":"⤟","&larrfs;":"⤝","&larrhk;":"↩","&larrlp;":"↫","&larrpl;":"⤹","&larrsim;":"⥳","&larrtl;":"↢","&lat;":"⪫","&latail;":"⤙","&late;":"⪭","&lates;":"⪭︀","&lbarr;":"⤌","&lbbrk;":"❲","&lbrace;":"{","&lbrack;":"[","&lbrke;":"⦋","&lbrksld;":"⦏","&lbrkslu;":"⦍","&lcaron;":"ľ","&lcedil;":"ļ","&lceil;":"⌈","&lcub;":"{","&lcy;":"л","&ldca;":"⤶","&ldquo;":"“","&ldquor;":"„","&ldrdhar;":"⥧","&ldrushar;":"⥋","&ldsh;":"↲","&le;":"≤","&leftarrow;":"←","&leftarrowtail;":"↢","&leftharpoondown;":"↽","&leftharpoonup;":"↼","&leftleftarrows;":"⇇","&leftrightarrow;":"↔","&leftrightarrows;":"⇆","&leftrightharpoons;":"⇋","&leftrightsquigarrow;":"↭","&leftthreetimes;":"⋋","&leg;":"⋚","&leq;":"≤","&leqq;":"≦","&leqslant;":"⩽","&les;":"⩽","&lescc;":"⪨","&lesdot;":"⩿","&lesdoto;":"⪁","&lesdotor;":"⪃","&lesg;":"⋚︀","&lesges;":"⪓","&lessapprox;":"⪅","&lessdot;":"⋖","&lesseqgtr;":"⋚","&lesseqqgtr;":"⪋","&lessgtr;":"≶","&lesssim;":"≲","&lfisht;":"⥼","&lfloor;":"⌊","&lfr;":"𝔩","&lg;":"≶","&lgE;":"⪑","&lhard;":"↽","&lharu;":"↼","&lharul;":"⥪","&lhblk;":"▄","&ljcy;":"љ","&ll;":"≪","&llarr;":"⇇","&llcorner;":"⌞","&llhard;":"⥫","&lltri;":"◺","&lmidot;":"ŀ","&lmoust;":"⎰","&lmoustache;":"⎰","&lnE;":"≨","&lnap;":"⪉","&lnapprox;":"⪉","&lne;":"⪇","&lneq;":"⪇","&lneqq;":"≨","&lnsim;":"⋦","&loang;":"⟬","&loarr;":"⇽","&lobrk;":"⟦","&longleftarrow;":"⟵","&longleftrightarrow;":"⟷","&longmapsto;":"⟼","&longrightarrow;":"⟶","&looparrowleft;":"↫","&looparrowright;":"↬","&lopar;":"⦅","&lopf;":"𝕝","&loplus;":"⨭","&lotimes;":"⨴","&lowast;":"∗","&lowbar;":"_","&loz;":"◊","&lozenge;":"◊","&lozf;":"⧫","&lpar;":"(","&lparlt;":"⦓","&lrarr;":"⇆","&lrcorner;":"⌟","&lrhar;":"⇋","&lrhard;":"⥭","&lrm;":"‎","&lrtri;":"⊿","&lsaquo;":"‹","&lscr;":"𝓁","&lsh;":"↰","&lsim;":"≲","&lsime;":"⪍","&lsimg;":"⪏","&lsqb;":"[","&lsquo;":"‘","&lsquor;":"‚","&lstrok;":"ł","&lt":"<","&lt;":"<","&ltcc;":"⪦","&ltcir;":"⩹","&ltdot;":"⋖","&lthree;":"⋋","&ltimes;":"⋉","&ltlarr;":"⥶","&ltquest;":"⩻","&ltrPar;":"⦖","&ltri;":"◃","&ltrie;":"⊴","&ltrif;":"◂","&lurdshar;":"⥊","&luruhar;":"⥦","&lvertneqq;":"≨︀","&lvnE;":"≨︀","&mDDot;":"∺","&macr":"¯","&macr;":"¯","&male;":"♂","&malt;":"✠","&maltese;":"✠","&map;":"↦","&mapsto;":"↦","&mapstodown;":"↧","&mapstoleft;":"↤","&mapstoup;":"↥","&marker;":"▮","&mcomma;":"⨩","&mcy;":"м","&mdash;":"—","&measuredangle;":"∡","&mfr;":"𝔪","&mho;":"℧","&micro":"µ","&micro;":"µ","&mid;":"∣","&midast;":"*","&midcir;":"⫰","&middot":"·","&middot;":"·","&minus;":"−","&minusb;":"⊟","&minusd;":"∸","&minusdu;":"⨪","&mlcp;":"⫛","&mldr;":"…","&mnplus;":"∓","&models;":"⊧","&mopf;":"𝕞","&mp;":"∓","&mscr;":"𝓂","&mstpos;":"∾","&mu;":"μ","&multimap;":"⊸","&mumap;":"⊸","&nGg;":"⋙̸","&nGt;":"≫⃒","&nGtv;":"≫̸","&nLeftarrow;":"⇍","&nLeftrightarrow;":"⇎","&nLl;":"⋘̸","&nLt;":"≪⃒","&nLtv;":"≪̸","&nRightarrow;":"⇏","&nVDash;":"⊯","&nVdash;":"⊮","&nabla;":"∇","&nacute;":"ń","&nang;":"∠⃒","&nap;":"≉","&napE;":"⩰̸","&napid;":"≋̸","&napos;":"ŉ","&napprox;":"≉","&natur;":"♮","&natural;":"♮","&naturals;":"ℕ","&nbsp":" ","&nbsp;":" ","&nbump;":"≎̸","&nbumpe;":"≏̸","&ncap;":"⩃","&ncaron;":"ň","&ncedil;":"ņ","&ncong;":"≇","&ncongdot;":"⩭̸","&ncup;":"⩂","&ncy;":"н","&ndash;":"–","&ne;":"≠","&neArr;":"⇗","&nearhk;":"⤤","&nearr;":"↗","&nearrow;":"↗","&nedot;":"≐̸","&nequiv;":"≢","&nesear;":"⤨","&nesim;":"≂̸","&nexist;":"∄","&nexists;":"∄","&nfr;":"𝔫","&ngE;":"≧̸","&nge;":"≱","&ngeq;":"≱","&ngeqq;":"≧̸","&ngeqslant;":"⩾̸","&nges;":"⩾̸","&ngsim;":"≵","&ngt;":"≯","&ngtr;":"≯","&nhArr;":"⇎","&nharr;":"↮","&nhpar;":"⫲","&ni;":"∋","&nis;":"⋼","&nisd;":"⋺","&niv;":"∋","&njcy;":"њ","&nlArr;":"⇍","&nlE;":"≦̸","&nlarr;":"↚","&nldr;":"‥","&nle;":"≰","&nleftarrow;":"↚","&nleftrightarrow;":"↮","&nleq;":"≰","&nleqq;":"≦̸","&nleqslant;":"⩽̸","&nles;":"⩽̸","&nless;":"≮","&nlsim;":"≴","&nlt;":"≮","&nltri;":"⋪","&nltrie;":"⋬","&nmid;":"∤","&nopf;":"𝕟","&not":"¬","&not;":"¬","&notin;":"∉","&notinE;":"⋹̸","&notindot;":"⋵̸","&notinva;":"∉","&notinvb;":"⋷","&notinvc;":"⋶","&notni;":"∌","&notniva;":"∌","&notnivb;":"⋾","&notnivc;":"⋽","&npar;":"∦","&nparallel;":"∦","&nparsl;":"⫽⃥","&npart;":"∂̸","&npolint;":"⨔","&npr;":"⊀","&nprcue;":"⋠","&npre;":"⪯̸","&nprec;":"⊀","&npreceq;":"⪯̸","&nrArr;":"⇏","&nrarr;":"↛","&nrarrc;":"⤳̸","&nrarrw;":"↝̸","&nrightarrow;":"↛","&nrtri;":"⋫","&nrtrie;":"⋭","&nsc;":"⊁","&nsccue;":"⋡","&nsce;":"⪰̸","&nscr;":"𝓃","&nshortmid;":"∤","&nshortparallel;":"∦","&nsim;":"≁","&nsime;":"≄","&nsimeq;":"≄","&nsmid;":"∤","&nspar;":"∦","&nsqsube;":"⋢","&nsqsupe;":"⋣","&nsub;":"⊄","&nsubE;":"⫅̸","&nsube;":"⊈","&nsubset;":"⊂⃒","&nsubseteq;":"⊈","&nsubseteqq;":"⫅̸","&nsucc;":"⊁","&nsucceq;":"⪰̸","&nsup;":"⊅","&nsupE;":"⫆̸","&nsupe;":"⊉","&nsupset;":"⊃⃒","&nsupseteq;":"⊉","&nsupseteqq;":"⫆̸","&ntgl;":"≹","&ntilde":"ñ","&ntilde;":"ñ","&ntlg;":"≸","&ntriangleleft;":"⋪","&ntrianglelefteq;":"⋬","&ntriangleright;":"⋫","&ntrianglerighteq;":"⋭","&nu;":"ν","&num;":"#","&numero;":"№","&numsp;":" ","&nvDash;":"⊭","&nvHarr;":"⤄","&nvap;":"≍⃒","&nvdash;":"⊬","&nvge;":"≥⃒","&nvgt;":">⃒","&nvinfin;":"⧞","&nvlArr;":"⤂","&nvle;":"≤⃒","&nvlt;":"<⃒","&nvltrie;":"⊴⃒","&nvrArr;":"⤃","&nvrtrie;":"⊵⃒","&nvsim;":"∼⃒","&nwArr;":"⇖","&nwarhk;":"⤣","&nwarr;":"↖","&nwarrow;":"↖","&nwnear;":"⤧","&oS;":"Ⓢ","&oacute":"ó","&oacute;":"ó","&oast;":"⊛","&ocir;":"⊚","&ocirc":"ô","&ocirc;":"ô","&ocy;":"о","&odash;":"⊝","&odblac;":"ő","&odiv;":"⨸","&odot;":"⊙","&odsold;":"⦼","&oelig;":"œ","&ofcir;":"⦿","&ofr;":"𝔬","&ogon;":"˛","&ograve":"ò","&ograve;":"ò","&ogt;":"⧁","&ohbar;":"⦵","&ohm;":"Ω","&oint;":"∮","&olarr;":"↺","&olcir;":"⦾","&olcross;":"⦻","&oline;":"‾","&olt;":"⧀","&omacr;":"ō","&omega;":"ω","&omicron;":"ο","&omid;":"⦶","&ominus;":"⊖","&oopf;":"𝕠","&opar;":"⦷","&operp;":"⦹","&oplus;":"⊕","&or;":"∨","&orarr;":"↻","&ord;":"⩝","&order;":"ℴ","&orderof;":"ℴ","&ordf":"ª","&ordf;":"ª","&ordm":"º","&ordm;":"º","&origof;":"⊶","&oror;":"⩖","&orslope;":"⩗","&orv;":"⩛","&oscr;":"ℴ","&oslash":"ø","&oslash;":"ø","&osol;":"⊘","&otilde":"õ","&otilde;":"õ","&otimes;":"⊗","&otimesas;":"⨶","&ouml":"ö","&ouml;":"ö","&ovbar;":"⌽","&par;":"∥","&para":"¶","&para;":"¶","&parallel;":"∥","&parsim;":"⫳","&parsl;":"⫽","&part;":"∂","&pcy;":"п","&percnt;":"%","&period;":".","&permil;":"‰","&perp;":"⊥","&pertenk;":"‱","&pfr;":"𝔭","&phi;":"φ","&phiv;":"ϕ","&phmmat;":"ℳ","&phone;":"☎","&pi;":"π","&pitchfork;":"⋔","&piv;":"ϖ","&planck;":"ℏ","&planckh;":"ℎ","&plankv;":"ℏ","&plus;":"+","&plusacir;":"⨣","&plusb;":"⊞","&pluscir;":"⨢","&plusdo;":"∔","&plusdu;":"⨥","&pluse;":"⩲","&plusmn":"±","&plusmn;":"±","&plussim;":"⨦","&plustwo;":"⨧","&pm;":"±","&pointint;":"⨕","&popf;":"𝕡","&pound":"£","&pound;":"£","&pr;":"≺","&prE;":"⪳","&prap;":"⪷","&prcue;":"≼","&pre;":"⪯","&prec;":"≺","&precapprox;":"⪷","&preccurlyeq;":"≼","&preceq;":"⪯","&precnapprox;":"⪹","&precneqq;":"⪵","&precnsim;":"⋨","&precsim;":"≾","&prime;":"′","&primes;":"ℙ","&prnE;":"⪵","&prnap;":"⪹","&prnsim;":"⋨","&prod;":"∏","&profalar;":"⌮","&profline;":"⌒","&profsurf;":"⌓","&prop;":"∝","&propto;":"∝","&prsim;":"≾","&prurel;":"⊰","&pscr;":"𝓅","&psi;":"ψ","&puncsp;":" ","&qfr;":"𝔮","&qint;":"⨌","&qopf;":"𝕢","&qprime;":"⁗","&qscr;":"𝓆","&quaternions;":"ℍ","&quatint;":"⨖","&quest;":"?","&questeq;":"≟","&quot":'"',"&quot;":'"',"&rAarr;":"⇛","&rArr;":"⇒","&rAtail;":"⤜","&rBarr;":"⤏","&rHar;":"⥤","&race;":"∽̱","&racute;":"ŕ","&radic;":"√","&raemptyv;":"⦳","&rang;":"⟩","&rangd;":"⦒","&range;":"⦥","&rangle;":"⟩","&raquo":"»","&raquo;":"»","&rarr;":"→","&rarrap;":"⥵","&rarrb;":"⇥","&rarrbfs;":"⤠","&rarrc;":"⤳","&rarrfs;":"⤞","&rarrhk;":"↪","&rarrlp;":"↬","&rarrpl;":"⥅","&rarrsim;":"⥴","&rarrtl;":"↣","&rarrw;":"↝","&ratail;":"⤚","&ratio;":"∶","&rationals;":"ℚ","&rbarr;":"⤍","&rbbrk;":"❳","&rbrace;":"}","&rbrack;":"]","&rbrke;":"⦌","&rbrksld;":"⦎","&rbrkslu;":"⦐","&rcaron;":"ř","&rcedil;":"ŗ","&rceil;":"⌉","&rcub;":"}","&rcy;":"р","&rdca;":"⤷","&rdldhar;":"⥩","&rdquo;":"”","&rdquor;":"”","&rdsh;":"↳","&real;":"ℜ","&realine;":"ℛ","&realpart;":"ℜ","&reals;":"ℝ","&rect;":"▭","&reg":"®","&reg;":"®","&rfisht;":"⥽","&rfloor;":"⌋","&rfr;":"𝔯","&rhard;":"⇁","&rharu;":"⇀","&rharul;":"⥬","&rho;":"ρ","&rhov;":"ϱ","&rightarrow;":"→","&rightarrowtail;":"↣","&rightharpoondown;":"⇁","&rightharpoonup;":"⇀","&rightleftarrows;":"⇄","&rightleftharpoons;":"⇌","&rightrightarrows;":"⇉","&rightsquigarrow;":"↝","&rightthreetimes;":"⋌","&ring;":"˚","&risingdotseq;":"≓","&rlarr;":"⇄","&rlhar;":"⇌","&rlm;":"‏","&rmoust;":"⎱","&rmoustache;":"⎱","&rnmid;":"⫮","&roang;":"⟭","&roarr;":"⇾","&robrk;":"⟧","&ropar;":"⦆","&ropf;":"𝕣","&roplus;":"⨮","&rotimes;":"⨵","&rpar;":")","&rpargt;":"⦔","&rppolint;":"⨒","&rrarr;":"⇉","&rsaquo;":"›","&rscr;":"𝓇","&rsh;":"↱","&rsqb;":"]","&rsquo;":"’","&rsquor;":"’","&rthree;":"⋌","&rtimes;":"⋊","&rtri;":"▹","&rtrie;":"⊵","&rtrif;":"▸","&rtriltri;":"⧎","&ruluhar;":"⥨","&rx;":"℞","&sacute;":"ś","&sbquo;":"‚","&sc;":"≻","&scE;":"⪴","&scap;":"⪸","&scaron;":"š","&sccue;":"≽","&sce;":"⪰","&scedil;":"ş","&scirc;":"ŝ","&scnE;":"⪶","&scnap;":"⪺","&scnsim;":"⋩","&scpolint;":"⨓","&scsim;":"≿","&scy;":"с","&sdot;":"⋅","&sdotb;":"⊡","&sdote;":"⩦","&seArr;":"⇘","&searhk;":"⤥","&searr;":"↘","&searrow;":"↘","&sect":"§","&sect;":"§","&semi;":";","&seswar;":"⤩","&setminus;":"∖","&setmn;":"∖","&sext;":"✶","&sfr;":"𝔰","&sfrown;":"⌢","&sharp;":"♯","&shchcy;":"щ","&shcy;":"ш","&shortmid;":"∣","&shortparallel;":"∥","&shy":"­","&shy;":"­","&sigma;":"σ","&sigmaf;":"ς","&sigmav;":"ς","&sim;":"∼","&simdot;":"⩪","&sime;":"≃","&simeq;":"≃","&simg;":"⪞","&simgE;":"⪠","&siml;":"⪝","&simlE;":"⪟","&simne;":"≆","&simplus;":"⨤","&simrarr;":"⥲","&slarr;":"←","&smallsetminus;":"∖","&smashp;":"⨳","&smeparsl;":"⧤","&smid;":"∣","&smile;":"⌣","&smt;":"⪪","&smte;":"⪬","&smtes;":"⪬︀","&softcy;":"ь","&sol;":"/","&solb;":"⧄","&solbar;":"⌿","&sopf;":"𝕤","&spades;":"♠","&spadesuit;":"♠","&spar;":"∥","&sqcap;":"⊓","&sqcaps;":"⊓︀","&sqcup;":"⊔","&sqcups;":"⊔︀","&sqsub;":"⊏","&sqsube;":"⊑","&sqsubset;":"⊏","&sqsubseteq;":"⊑","&sqsup;":"⊐","&sqsupe;":"⊒","&sqsupset;":"⊐","&sqsupseteq;":"⊒","&squ;":"□","&square;":"□","&squarf;":"▪","&squf;":"▪","&srarr;":"→","&sscr;":"𝓈","&ssetmn;":"∖","&ssmile;":"⌣","&sstarf;":"⋆","&star;":"☆","&starf;":"★","&straightepsilon;":"ϵ","&straightphi;":"ϕ","&strns;":"¯","&sub;":"⊂","&subE;":"⫅","&subdot;":"⪽","&sube;":"⊆","&subedot;":"⫃","&submult;":"⫁","&subnE;":"⫋","&subne;":"⊊","&subplus;":"⪿","&subrarr;":"⥹","&subset;":"⊂","&subseteq;":"⊆","&subseteqq;":"⫅","&subsetneq;":"⊊","&subsetneqq;":"⫋","&subsim;":"⫇","&subsub;":"⫕","&subsup;":"⫓","&succ;":"≻","&succapprox;":"⪸","&succcurlyeq;":"≽","&succeq;":"⪰","&succnapprox;":"⪺","&succneqq;":"⪶","&succnsim;":"⋩","&succsim;":"≿","&sum;":"∑","&sung;":"♪","&sup1":"¹","&sup1;":"¹","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&sup;":"⊃","&supE;":"⫆","&supdot;":"⪾","&supdsub;":"⫘","&supe;":"⊇","&supedot;":"⫄","&suphsol;":"⟉","&suphsub;":"⫗","&suplarr;":"⥻","&supmult;":"⫂","&supnE;":"⫌","&supne;":"⊋","&supplus;":"⫀","&supset;":"⊃","&supseteq;":"⊇","&supseteqq;":"⫆","&supsetneq;":"⊋","&supsetneqq;":"⫌","&supsim;":"⫈","&supsub;":"⫔","&supsup;":"⫖","&swArr;":"⇙","&swarhk;":"⤦","&swarr;":"↙","&swarrow;":"↙","&swnwar;":"⤪","&szlig":"ß","&szlig;":"ß","&target;":"⌖","&tau;":"τ","&tbrk;":"⎴","&tcaron;":"ť","&tcedil;":"ţ","&tcy;":"т","&tdot;":"⃛","&telrec;":"⌕","&tfr;":"𝔱","&there4;":"∴","&therefore;":"∴","&theta;":"θ","&thetasym;":"ϑ","&thetav;":"ϑ","&thickapprox;":"≈","&thicksim;":"∼","&thinsp;":" ","&thkap;":"≈","&thksim;":"∼","&thorn":"þ","&thorn;":"þ","&tilde;":"˜","&times":"×","&times;":"×","&timesb;":"⊠","&timesbar;":"⨱","&timesd;":"⨰","&tint;":"∭","&toea;":"⤨","&top;":"⊤","&topbot;":"⌶","&topcir;":"⫱","&topf;":"𝕥","&topfork;":"⫚","&tosa;":"⤩","&tprime;":"‴","&trade;":"™","&triangle;":"▵","&triangledown;":"▿","&triangleleft;":"◃","&trianglelefteq;":"⊴","&triangleq;":"≜","&triangleright;":"▹","&trianglerighteq;":"⊵","&tridot;":"◬","&trie;":"≜","&triminus;":"⨺","&triplus;":"⨹","&trisb;":"⧍","&tritime;":"⨻","&trpezium;":"⏢","&tscr;":"𝓉","&tscy;":"ц","&tshcy;":"ћ","&tstrok;":"ŧ","&twixt;":"≬","&twoheadleftarrow;":"↞","&twoheadrightarrow;":"↠","&uArr;":"⇑","&uHar;":"⥣","&uacute":"ú","&uacute;":"ú","&uarr;":"↑","&ubrcy;":"ў","&ubreve;":"ŭ","&ucirc":"û","&ucirc;":"û","&ucy;":"у","&udarr;":"⇅","&udblac;":"ű","&udhar;":"⥮","&ufisht;":"⥾","&ufr;":"𝔲","&ugrave":"ù","&ugrave;":"ù","&uharl;":"↿","&uharr;":"↾","&uhblk;":"▀","&ulcorn;":"⌜","&ulcorner;":"⌜","&ulcrop;":"⌏","&ultri;":"◸","&umacr;":"ū","&uml":"¨","&uml;":"¨","&uogon;":"ų","&uopf;":"𝕦","&uparrow;":"↑","&updownarrow;":"↕","&upharpoonleft;":"↿","&upharpoonright;":"↾","&uplus;":"⊎","&upsi;":"υ","&upsih;":"ϒ","&upsilon;":"υ","&upuparrows;":"⇈","&urcorn;":"⌝","&urcorner;":"⌝","&urcrop;":"⌎","&uring;":"ů","&urtri;":"◹","&uscr;":"𝓊","&utdot;":"⋰","&utilde;":"ũ","&utri;":"▵","&utrif;":"▴","&uuarr;":"⇈","&uuml":"ü","&uuml;":"ü","&uwangle;":"⦧","&vArr;":"⇕","&vBar;":"⫨","&vBarv;":"⫩","&vDash;":"⊨","&vangrt;":"⦜","&varepsilon;":"ϵ","&varkappa;":"ϰ","&varnothing;":"∅","&varphi;":"ϕ","&varpi;":"ϖ","&varpropto;":"∝","&varr;":"↕","&varrho;":"ϱ","&varsigma;":"ς","&varsubsetneq;":"⊊︀","&varsubsetneqq;":"⫋︀","&varsupsetneq;":"⊋︀","&varsupsetneqq;":"⫌︀","&vartheta;":"ϑ","&vartriangleleft;":"⊲","&vartriangleright;":"⊳","&vcy;":"в","&vdash;":"⊢","&vee;":"∨","&veebar;":"⊻","&veeeq;":"≚","&vellip;":"⋮","&verbar;":"|","&vert;":"|","&vfr;":"𝔳","&vltri;":"⊲","&vnsub;":"⊂⃒","&vnsup;":"⊃⃒","&vopf;":"𝕧","&vprop;":"∝","&vrtri;":"⊳","&vscr;":"𝓋","&vsubnE;":"⫋︀","&vsubne;":"⊊︀","&vsupnE;":"⫌︀","&vsupne;":"⊋︀","&vzigzag;":"⦚","&wcirc;":"ŵ","&wedbar;":"⩟","&wedge;":"∧","&wedgeq;":"≙","&weierp;":"℘","&wfr;":"𝔴","&wopf;":"𝕨","&wp;":"℘","&wr;":"≀","&wreath;":"≀","&wscr;":"𝓌","&xcap;":"⋂","&xcirc;":"◯","&xcup;":"⋃","&xdtri;":"▽","&xfr;":"𝔵","&xhArr;":"⟺","&xharr;":"⟷","&xi;":"ξ","&xlArr;":"⟸","&xlarr;":"⟵","&xmap;":"⟼","&xnis;":"⋻","&xodot;":"⨀","&xopf;":"𝕩","&xoplus;":"⨁","&xotime;":"⨂","&xrArr;":"⟹","&xrarr;":"⟶","&xscr;":"𝓍","&xsqcup;":"⨆","&xuplus;":"⨄","&xutri;":"△","&xvee;":"⋁","&xwedge;":"⋀","&yacute":"ý","&yacute;":"ý","&yacy;":"я","&ycirc;":"ŷ","&ycy;":"ы","&yen":"¥","&yen;":"¥","&yfr;":"𝔶","&yicy;":"ї","&yopf;":"𝕪","&yscr;":"𝓎","&yucy;":"ю","&yuml":"ÿ","&yuml;":"ÿ","&zacute;":"ź","&zcaron;":"ž","&zcy;":"з","&zdot;":"ż","&zeetrf;":"ℨ","&zeta;":"ζ","&zfr;":"𝔷","&zhcy;":"ж","&zigrarr;":"⇝","&zopf;":"𝕫","&zscr;":"𝓏","&zwj;":"‍","&zwnj;":"‌"},characters:{"Æ":"&AElig;","&":"&amp;","Á":"&Aacute;","Ă":"&Abreve;","Â":"&Acirc;","А":"&Acy;","𝔄":"&Afr;","À":"&Agrave;","Α":"&Alpha;","Ā":"&Amacr;","⩓":"&And;","Ą":"&Aogon;","𝔸":"&Aopf;","⁡":"&af;","Å":"&angst;","𝒜":"&Ascr;","≔":"&coloneq;","Ã":"&Atilde;","Ä":"&Auml;","∖":"&ssetmn;","⫧":"&Barv;","⌆":"&doublebarwedge;","Б":"&Bcy;","∵":"&because;","ℬ":"&bernou;","Β":"&Beta;","𝔅":"&Bfr;","𝔹":"&Bopf;","˘":"&breve;","≎":"&bump;","Ч":"&CHcy;","©":"&copy;","Ć":"&Cacute;","⋒":"&Cap;","ⅅ":"&DD;","ℭ":"&Cfr;","Č":"&Ccaron;","Ç":"&Ccedil;","Ĉ":"&Ccirc;","∰":"&Cconint;","Ċ":"&Cdot;","¸":"&cedil;","·":"&middot;","Χ":"&Chi;","⊙":"&odot;","⊖":"&ominus;","⊕":"&oplus;","⊗":"&otimes;","∲":"&cwconint;","”":"&rdquor;","’":"&rsquor;","∷":"&Proportion;","⩴":"&Colone;","≡":"&equiv;","∯":"&DoubleContourIntegral;","∮":"&oint;","ℂ":"&complexes;","∐":"&coprod;","∳":"&awconint;","⨯":"&Cross;","𝒞":"&Cscr;","⋓":"&Cup;","≍":"&asympeq;","⤑":"&DDotrahd;","Ђ":"&DJcy;","Ѕ":"&DScy;","Џ":"&DZcy;","‡":"&ddagger;","↡":"&Darr;","⫤":"&DoubleLeftTee;","Ď":"&Dcaron;","Д":"&Dcy;","∇":"&nabla;","Δ":"&Delta;","𝔇":"&Dfr;","´":"&acute;","˙":"&dot;","˝":"&dblac;","`":"&grave;","˜":"&tilde;","⋄":"&diamond;","ⅆ":"&dd;","𝔻":"&Dopf;","¨":"&uml;","⃜":"&DotDot;","≐":"&esdot;","⇓":"&dArr;","⇐":"&lArr;","⇔":"&iff;","⟸":"&xlArr;","⟺":"&xhArr;","⟹":"&xrArr;","⇒":"&rArr;","⊨":"&vDash;","⇑":"&uArr;","⇕":"&vArr;","∥":"&spar;","↓":"&downarrow;","⤓":"&DownArrowBar;","⇵":"&duarr;","̑":"&DownBreve;","⥐":"&DownLeftRightVector;","⥞":"&DownLeftTeeVector;","↽":"&lhard;","⥖":"&DownLeftVectorBar;","⥟":"&DownRightTeeVector;","⇁":"&rightharpoondown;","⥗":"&DownRightVectorBar;","⊤":"&top;","↧":"&mapstodown;","𝒟":"&Dscr;","Đ":"&Dstrok;","Ŋ":"&ENG;","Ð":"&ETH;","É":"&Eacute;","Ě":"&Ecaron;","Ê":"&Ecirc;","Э":"&Ecy;","Ė":"&Edot;","𝔈":"&Efr;","È":"&Egrave;","∈":"&isinv;","Ē":"&Emacr;","◻":"&EmptySmallSquare;","▫":"&EmptyVerySmallSquare;","Ę":"&Eogon;","𝔼":"&Eopf;","Ε":"&Epsilon;","⩵":"&Equal;","≂":"&esim;","⇌":"&rlhar;","ℰ":"&expectation;","⩳":"&Esim;","Η":"&Eta;","Ë":"&Euml;","∃":"&exist;","ⅇ":"&exponentiale;","Ф":"&Fcy;","𝔉":"&Ffr;","◼":"&FilledSmallSquare;","▪":"&squf;","𝔽":"&Fopf;","∀":"&forall;","ℱ":"&Fscr;","Ѓ":"&GJcy;",">":"&gt;","Γ":"&Gamma;","Ϝ":"&Gammad;","Ğ":"&Gbreve;","Ģ":"&Gcedil;","Ĝ":"&Gcirc;","Г":"&Gcy;","Ġ":"&Gdot;","𝔊":"&Gfr;","⋙":"&ggg;","𝔾":"&Gopf;","≥":"&geq;","⋛":"&gtreqless;","≧":"&geqq;","⪢":"&GreaterGreater;","≷":"&gtrless;","⩾":"&ges;","≳":"&gtrsim;","𝒢":"&Gscr;","≫":"&gg;","Ъ":"&HARDcy;","ˇ":"&caron;","^":"&Hat;","Ĥ":"&Hcirc;","ℌ":"&Poincareplane;","ℋ":"&hamilt;","ℍ":"&quaternions;","─":"&boxh;","Ħ":"&Hstrok;","≏":"&bumpeq;","Е":"&IEcy;","Ĳ":"&IJlig;","Ё":"&IOcy;","Í":"&Iacute;","Î":"&Icirc;","И":"&Icy;","İ":"&Idot;","ℑ":"&imagpart;","Ì":"&Igrave;","Ī":"&Imacr;","ⅈ":"&ii;","∬":"&Int;","∫":"&int;","⋂":"&xcap;","⁣":"&ic;","⁢":"&it;","Į":"&Iogon;","𝕀":"&Iopf;","Ι":"&Iota;","ℐ":"&imagline;","Ĩ":"&Itilde;","І":"&Iukcy;","Ï":"&Iuml;","Ĵ":"&Jcirc;","Й":"&Jcy;","𝔍":"&Jfr;","𝕁":"&Jopf;","𝒥":"&Jscr;","Ј":"&Jsercy;","Є":"&Jukcy;","Х":"&KHcy;","Ќ":"&KJcy;","Κ":"&Kappa;","Ķ":"&Kcedil;","К":"&Kcy;","𝔎":"&Kfr;","𝕂":"&Kopf;","𝒦":"&Kscr;","Љ":"&LJcy;","<":"&lt;","Ĺ":"&Lacute;","Λ":"&Lambda;","⟪":"&Lang;","ℒ":"&lagran;","↞":"&twoheadleftarrow;","Ľ":"&Lcaron;","Ļ":"&Lcedil;","Л":"&Lcy;","⟨":"&langle;","←":"&slarr;","⇤":"&larrb;","⇆":"&lrarr;","⌈":"&lceil;","⟦":"&lobrk;","⥡":"&LeftDownTeeVector;","⇃":"&downharpoonleft;","⥙":"&LeftDownVectorBar;","⌊":"&lfloor;","↔":"&leftrightarrow;","⥎":"&LeftRightVector;","⊣":"&dashv;","↤":"&mapstoleft;","⥚":"&LeftTeeVector;","⊲":"&vltri;","⧏":"&LeftTriangleBar;","⊴":"&trianglelefteq;","⥑":"&LeftUpDownVector;","⥠":"&LeftUpTeeVector;","↿":"&upharpoonleft;","⥘":"&LeftUpVectorBar;","↼":"&lharu;","⥒":"&LeftVectorBar;","⋚":"&lesseqgtr;","≦":"&leqq;","≶":"&lg;","⪡":"&LessLess;","⩽":"&les;","≲":"&lsim;","𝔏":"&Lfr;","⋘":"&Ll;","⇚":"&lAarr;","Ŀ":"&Lmidot;","⟵":"&xlarr;","⟷":"&xharr;","⟶":"&xrarr;","𝕃":"&Lopf;","↙":"&swarrow;","↘":"&searrow;","↰":"&lsh;","Ł":"&Lstrok;","≪":"&ll;","⤅":"&Map;","М":"&Mcy;"," ":"&MediumSpace;","ℳ":"&phmmat;","𝔐":"&Mfr;","∓":"&mp;","𝕄":"&Mopf;","Μ":"&Mu;","Њ":"&NJcy;","Ń":"&Nacute;","Ň":"&Ncaron;","Ņ":"&Ncedil;","Н":"&Ncy;","​":"&ZeroWidthSpace;","\n":"&NewLine;","𝔑":"&Nfr;","⁠":"&NoBreak;"," ":"&nbsp;","ℕ":"&naturals;","⫬":"&Not;","≢":"&nequiv;","≭":"&NotCupCap;","∦":"&nspar;","∉":"&notinva;","≠":"&ne;","≂̸":"&nesim;","∄":"&nexists;","≯":"&ngtr;","≱":"&ngeq;","≧̸":"&ngeqq;","≫̸":"&nGtv;","≹":"&ntgl;","⩾̸":"&nges;","≵":"&ngsim;","≎̸":"&nbump;","≏̸":"&nbumpe;","⋪":"&ntriangleleft;","⧏̸":"&NotLeftTriangleBar;","⋬":"&ntrianglelefteq;","≮":"&nlt;","≰":"&nleq;","≸":"&ntlg;","≪̸":"&nLtv;","⩽̸":"&nles;","≴":"&nlsim;","⪢̸":"&NotNestedGreaterGreater;","⪡̸":"&NotNestedLessLess;","⊀":"&nprec;","⪯̸":"&npreceq;","⋠":"&nprcue;","∌":"&notniva;","⋫":"&ntriangleright;","⧐̸":"&NotRightTriangleBar;","⋭":"&ntrianglerighteq;","⊏̸":"&NotSquareSubset;","⋢":"&nsqsube;","⊐̸":"&NotSquareSuperset;","⋣":"&nsqsupe;","⊂⃒":"&vnsub;","⊈":"&nsubseteq;","⊁":"&nsucc;","⪰̸":"&nsucceq;","⋡":"&nsccue;","≿̸":"&NotSucceedsTilde;","⊃⃒":"&vnsup;","⊉":"&nsupseteq;","≁":"&nsim;","≄":"&nsimeq;","≇":"&ncong;","≉":"&napprox;","∤":"&nsmid;","𝒩":"&Nscr;","Ñ":"&Ntilde;","Ν":"&Nu;","Œ":"&OElig;","Ó":"&Oacute;","Ô":"&Ocirc;","О":"&Ocy;","Ő":"&Odblac;","𝔒":"&Ofr;","Ò":"&Ograve;","Ō":"&Omacr;","Ω":"&ohm;","Ο":"&Omicron;","𝕆":"&Oopf;","“":"&ldquo;","‘":"&lsquo;","⩔":"&Or;","𝒪":"&Oscr;","Ø":"&Oslash;","Õ":"&Otilde;","⨷":"&Otimes;","Ö":"&Ouml;","‾":"&oline;","⏞":"&OverBrace;","⎴":"&tbrk;","⏜":"&OverParenthesis;","∂":"&part;","П":"&Pcy;","𝔓":"&Pfr;","Φ":"&Phi;","Π":"&Pi;","±":"&pm;","ℙ":"&primes;","⪻":"&Pr;","≺":"&prec;","⪯":"&preceq;","≼":"&preccurlyeq;","≾":"&prsim;","″":"&Prime;","∏":"&prod;","∝":"&vprop;","𝒫":"&Pscr;","Ψ":"&Psi;",'"':"&quot;","𝔔":"&Qfr;","ℚ":"&rationals;","𝒬":"&Qscr;","⤐":"&drbkarow;","®":"&reg;","Ŕ":"&Racute;","⟫":"&Rang;","↠":"&twoheadrightarrow;","⤖":"&Rarrtl;","Ř":"&Rcaron;","Ŗ":"&Rcedil;","Р":"&Rcy;","ℜ":"&realpart;","∋":"&niv;","⇋":"&lrhar;","⥯":"&duhar;","Ρ":"&Rho;","⟩":"&rangle;","→":"&srarr;","⇥":"&rarrb;","⇄":"&rlarr;","⌉":"&rceil;","⟧":"&robrk;","⥝":"&RightDownTeeVector;","⇂":"&downharpoonright;","⥕":"&RightDownVectorBar;","⌋":"&rfloor;","⊢":"&vdash;","↦":"&mapsto;","⥛":"&RightTeeVector;","⊳":"&vrtri;","⧐":"&RightTriangleBar;","⊵":"&trianglerighteq;","⥏":"&RightUpDownVector;","⥜":"&RightUpTeeVector;","↾":"&upharpoonright;","⥔":"&RightUpVectorBar;","⇀":"&rightharpoonup;","⥓":"&RightVectorBar;","ℝ":"&reals;","⥰":"&RoundImplies;","⇛":"&rAarr;","ℛ":"&realine;","↱":"&rsh;","⧴":"&RuleDelayed;","Щ":"&SHCHcy;","Ш":"&SHcy;","Ь":"&SOFTcy;","Ś":"&Sacute;","⪼":"&Sc;","Š":"&Scaron;","Ş":"&Scedil;","Ŝ":"&Scirc;","С":"&Scy;","𝔖":"&Sfr;","↑":"&uparrow;","Σ":"&Sigma;","∘":"&compfn;","𝕊":"&Sopf;","√":"&radic;","□":"&square;","⊓":"&sqcap;","⊏":"&sqsubset;","⊑":"&sqsubseteq;","⊐":"&sqsupset;","⊒":"&sqsupseteq;","⊔":"&sqcup;","𝒮":"&Sscr;","⋆":"&sstarf;","⋐":"&Subset;","⊆":"&subseteq;","≻":"&succ;","⪰":"&succeq;","≽":"&succcurlyeq;","≿":"&succsim;","∑":"&sum;","⋑":"&Supset;","⊃":"&supset;","⊇":"&supseteq;","Þ":"&THORN;","™":"&trade;","Ћ":"&TSHcy;","Ц":"&TScy;","\t":"&Tab;","Τ":"&Tau;","Ť":"&Tcaron;","Ţ":"&Tcedil;","Т":"&Tcy;","𝔗":"&Tfr;","∴":"&therefore;","Θ":"&Theta;","  ":"&ThickSpace;"," ":"&thinsp;","∼":"&thksim;","≃":"&simeq;","≅":"&cong;","≈":"&thkap;","𝕋":"&Topf;","⃛":"&tdot;","𝒯":"&Tscr;","Ŧ":"&Tstrok;","Ú":"&Uacute;","↟":"&Uarr;","⥉":"&Uarrocir;","Ў":"&Ubrcy;","Ŭ":"&Ubreve;","Û":"&Ucirc;","У":"&Ucy;","Ű":"&Udblac;","𝔘":"&Ufr;","Ù":"&Ugrave;","Ū":"&Umacr;",_:"&lowbar;","⏟":"&UnderBrace;","⎵":"&bbrk;","⏝":"&UnderParenthesis;","⋃":"&xcup;","⊎":"&uplus;","Ų":"&Uogon;","𝕌":"&Uopf;","⤒":"&UpArrowBar;","⇅":"&udarr;","↕":"&varr;","⥮":"&udhar;","⊥":"&perp;","↥":"&mapstoup;","↖":"&nwarrow;","↗":"&nearrow;","ϒ":"&upsih;","Υ":"&Upsilon;","Ů":"&Uring;","𝒰":"&Uscr;","Ũ":"&Utilde;","Ü":"&Uuml;","⊫":"&VDash;","⫫":"&Vbar;","В":"&Vcy;","⊩":"&Vdash;","⫦":"&Vdashl;","⋁":"&xvee;","‖":"&Vert;","∣":"&smid;","|":"&vert;","❘":"&VerticalSeparator;","≀":"&wreath;"," ":"&hairsp;","𝔙":"&Vfr;","𝕍":"&Vopf;","𝒱":"&Vscr;","⊪":"&Vvdash;","Ŵ":"&Wcirc;","⋀":"&xwedge;","𝔚":"&Wfr;","𝕎":"&Wopf;","𝒲":"&Wscr;","𝔛":"&Xfr;","Ξ":"&Xi;","𝕏":"&Xopf;","𝒳":"&Xscr;","Я":"&YAcy;","Ї":"&YIcy;","Ю":"&YUcy;","Ý":"&Yacute;","Ŷ":"&Ycirc;","Ы":"&Ycy;","𝔜":"&Yfr;","𝕐":"&Yopf;","𝒴":"&Yscr;","Ÿ":"&Yuml;","Ж":"&ZHcy;","Ź":"&Zacute;","Ž":"&Zcaron;","З":"&Zcy;","Ż":"&Zdot;","Ζ":"&Zeta;","ℨ":"&zeetrf;","ℤ":"&integers;","𝒵":"&Zscr;","á":"&aacute;","ă":"&abreve;","∾":"&mstpos;","∾̳":"&acE;","∿":"&acd;","â":"&acirc;","а":"&acy;","æ":"&aelig;","𝔞":"&afr;","à":"&agrave;","ℵ":"&aleph;","α":"&alpha;","ā":"&amacr;","⨿":"&amalg;","∧":"&wedge;","⩕":"&andand;","⩜":"&andd;","⩘":"&andslope;","⩚":"&andv;","∠":"&angle;","⦤":"&ange;","∡":"&measuredangle;","⦨":"&angmsdaa;","⦩":"&angmsdab;","⦪":"&angmsdac;","⦫":"&angmsdad;","⦬":"&angmsdae;","⦭":"&angmsdaf;","⦮":"&angmsdag;","⦯":"&angmsdah;","∟":"&angrt;","⊾":"&angrtvb;","⦝":"&angrtvbd;","∢":"&angsph;","⍼":"&angzarr;","ą":"&aogon;","𝕒":"&aopf;","⩰":"&apE;","⩯":"&apacir;","≊":"&approxeq;","≋":"&apid;","'":"&apos;","å":"&aring;","𝒶":"&ascr;","*":"&midast;","ã":"&atilde;","ä":"&auml;","⨑":"&awint;","⫭":"&bNot;","≌":"&bcong;","϶":"&bepsi;","‵":"&bprime;","∽":"&bsim;","⋍":"&bsime;","⊽":"&barvee;","⌅":"&barwedge;","⎶":"&bbrktbrk;","б":"&bcy;","„":"&ldquor;","⦰":"&bemptyv;","β":"&beta;","ℶ":"&beth;","≬":"&twixt;","𝔟":"&bfr;","◯":"&xcirc;","⨀":"&xodot;","⨁":"&xoplus;","⨂":"&xotime;","⨆":"&xsqcup;","★":"&starf;","▽":"&xdtri;","△":"&xutri;","⨄":"&xuplus;","⤍":"&rbarr;","⧫":"&lozf;","▴":"&utrif;","▾":"&dtrif;","◂":"&ltrif;","▸":"&rtrif;","␣":"&blank;","▒":"&blk12;","░":"&blk14;","▓":"&blk34;","█":"&block;","=⃥":"&bne;","≡⃥":"&bnequiv;","⌐":"&bnot;","𝕓":"&bopf;","⋈":"&bowtie;","╗":"&boxDL;","╔":"&boxDR;","╖":"&boxDl;","╓":"&boxDr;","═":"&boxH;","╦":"&boxHD;","╩":"&boxHU;","╤":"&boxHd;","╧":"&boxHu;","╝":"&boxUL;","╚":"&boxUR;","╜":"&boxUl;","╙":"&boxUr;","║":"&boxV;","╬":"&boxVH;","╣":"&boxVL;","╠":"&boxVR;","╫":"&boxVh;","╢":"&boxVl;","╟":"&boxVr;","⧉":"&boxbox;","╕":"&boxdL;","╒":"&boxdR;","┐":"&boxdl;","┌":"&boxdr;","╥":"&boxhD;","╨":"&boxhU;","┬":"&boxhd;","┴":"&boxhu;","⊟":"&minusb;","⊞":"&plusb;","⊠":"&timesb;","╛":"&boxuL;","╘":"&boxuR;","┘":"&boxul;","└":"&boxur;","│":"&boxv;","╪":"&boxvH;","╡":"&boxvL;","╞":"&boxvR;","┼":"&boxvh;","┤":"&boxvl;","├":"&boxvr;","¦":"&brvbar;","𝒷":"&bscr;","⁏":"&bsemi;","\\":"&bsol;","⧅":"&bsolb;","⟈":"&bsolhsub;","•":"&bullet;","⪮":"&bumpE;","ć":"&cacute;","∩":"&cap;","⩄":"&capand;","⩉":"&capbrcup;","⩋":"&capcap;","⩇":"&capcup;","⩀":"&capdot;","∩︀":"&caps;","⁁":"&caret;","⩍":"&ccaps;","č":"&ccaron;","ç":"&ccedil;","ĉ":"&ccirc;","⩌":"&ccups;","⩐":"&ccupssm;","ċ":"&cdot;","⦲":"&cemptyv;","¢":"&cent;","𝔠":"&cfr;","ч":"&chcy;","✓":"&checkmark;","χ":"&chi;","○":"&cir;","⧃":"&cirE;","ˆ":"&circ;","≗":"&cire;","↺":"&olarr;","↻":"&orarr;","Ⓢ":"&oS;","⊛":"&oast;","⊚":"&ocir;","⊝":"&odash;","⨐":"&cirfnint;","⫯":"&cirmid;","⧂":"&cirscir;","♣":"&clubsuit;",":":"&colon;",",":"&comma;","@":"&commat;","∁":"&complement;","⩭":"&congdot;","𝕔":"&copf;","℗":"&copysr;","↵":"&crarr;","✗":"&cross;","𝒸":"&cscr;","⫏":"&csub;","⫑":"&csube;","⫐":"&csup;","⫒":"&csupe;","⋯":"&ctdot;","⤸":"&cudarrl;","⤵":"&cudarrr;","⋞":"&curlyeqprec;","⋟":"&curlyeqsucc;","↶":"&curvearrowleft;","⤽":"&cularrp;","∪":"&cup;","⩈":"&cupbrcap;","⩆":"&cupcap;","⩊":"&cupcup;","⊍":"&cupdot;","⩅":"&cupor;","∪︀":"&cups;","↷":"&curvearrowright;","⤼":"&curarrm;","⋎":"&cuvee;","⋏":"&cuwed;","¤":"&curren;","∱":"&cwint;","⌭":"&cylcty;","⥥":"&dHar;","†":"&dagger;","ℸ":"&daleth;","‐":"&hyphen;","⤏":"&rBarr;","ď":"&dcaron;","д":"&dcy;","⇊":"&downdownarrows;","⩷":"&eDDot;","°":"&deg;","δ":"&delta;","⦱":"&demptyv;","⥿":"&dfisht;","𝔡":"&dfr;","♦":"&diams;","ϝ":"&gammad;","⋲":"&disin;","÷":"&divide;","⋇":"&divonx;","ђ":"&djcy;","⌞":"&llcorner;","⌍":"&dlcrop;",$:"&dollar;","𝕕":"&dopf;","≑":"&eDot;","∸":"&minusd;","∔":"&plusdo;","⊡":"&sdotb;","⌟":"&lrcorner;","⌌":"&drcrop;","𝒹":"&dscr;","ѕ":"&dscy;","⧶":"&dsol;","đ":"&dstrok;","⋱":"&dtdot;","▿":"&triangledown;","⦦":"&dwangle;","џ":"&dzcy;","⟿":"&dzigrarr;","é":"&eacute;","⩮":"&easter;","ě":"&ecaron;","≖":"&eqcirc;","ê":"&ecirc;","≕":"&eqcolon;","э":"&ecy;","ė":"&edot;","≒":"&fallingdotseq;","𝔢":"&efr;","⪚":"&eg;","è":"&egrave;","⪖":"&eqslantgtr;","⪘":"&egsdot;","⪙":"&el;","⏧":"&elinters;","ℓ":"&ell;","⪕":"&eqslantless;","⪗":"&elsdot;","ē":"&emacr;","∅":"&varnothing;"," ":"&emsp13;"," ":"&emsp14;"," ":"&emsp;","ŋ":"&eng;"," ":"&ensp;","ę":"&eogon;","𝕖":"&eopf;","⋕":"&epar;","⧣":"&eparsl;","⩱":"&eplus;","ε":"&epsilon;","ϵ":"&varepsilon;","=":"&equals;","≟":"&questeq;","⩸":"&equivDD;","⧥":"&eqvparsl;","≓":"&risingdotseq;","⥱":"&erarr;","ℯ":"&escr;","η":"&eta;","ð":"&eth;","ë":"&euml;","€":"&euro;","!":"&excl;","ф":"&fcy;","♀":"&female;","ﬃ":"&ffilig;","ﬀ":"&fflig;","ﬄ":"&ffllig;","𝔣":"&ffr;","ﬁ":"&filig;",fj:"&fjlig;","♭":"&flat;","ﬂ":"&fllig;","▱":"&fltns;","ƒ":"&fnof;","𝕗":"&fopf;","⋔":"&pitchfork;","⫙":"&forkv;","⨍":"&fpartint;","½":"&half;","⅓":"&frac13;","¼":"&frac14;","⅕":"&frac15;","⅙":"&frac16;","⅛":"&frac18;","⅔":"&frac23;","⅖":"&frac25;","¾":"&frac34;","⅗":"&frac35;","⅜":"&frac38;","⅘":"&frac45;","⅚":"&frac56;","⅝":"&frac58;","⅞":"&frac78;","⁄":"&frasl;","⌢":"&sfrown;","𝒻":"&fscr;","⪌":"&gtreqqless;","ǵ":"&gacute;","γ":"&gamma;","⪆":"&gtrapprox;","ğ":"&gbreve;","ĝ":"&gcirc;","г":"&gcy;","ġ":"&gdot;","⪩":"&gescc;","⪀":"&gesdot;","⪂":"&gesdoto;","⪄":"&gesdotol;","⋛︀":"&gesl;","⪔":"&gesles;","𝔤":"&gfr;","ℷ":"&gimel;","ѓ":"&gjcy;","⪒":"&glE;","⪥":"&gla;","⪤":"&glj;","≩":"&gneqq;","⪊":"&gnapprox;","⪈":"&gneq;","⋧":"&gnsim;","𝕘":"&gopf;","ℊ":"&gscr;","⪎":"&gsime;","⪐":"&gsiml;","⪧":"&gtcc;","⩺":"&gtcir;","⋗":"&gtrdot;","⦕":"&gtlPar;","⩼":"&gtquest;","⥸":"&gtrarr;","≩︀":"&gvnE;","ъ":"&hardcy;","⥈":"&harrcir;","↭":"&leftrightsquigarrow;","ℏ":"&plankv;","ĥ":"&hcirc;","♥":"&heartsuit;","…":"&mldr;","⊹":"&hercon;","𝔥":"&hfr;","⤥":"&searhk;","⤦":"&swarhk;","⇿":"&hoarr;","∻":"&homtht;","↩":"&larrhk;","↪":"&rarrhk;","𝕙":"&hopf;","―":"&horbar;","𝒽":"&hscr;","ħ":"&hstrok;","⁃":"&hybull;","í":"&iacute;","î":"&icirc;","и":"&icy;","е":"&iecy;","¡":"&iexcl;","𝔦":"&ifr;","ì":"&igrave;","⨌":"&qint;","∭":"&tint;","⧜":"&iinfin;","℩":"&iiota;","ĳ":"&ijlig;","ī":"&imacr;","ı":"&inodot;","⊷":"&imof;","Ƶ":"&imped;","℅":"&incare;","∞":"&infin;","⧝":"&infintie;","⊺":"&intercal;","⨗":"&intlarhk;","⨼":"&iprod;","ё":"&iocy;","į":"&iogon;","𝕚":"&iopf;","ι":"&iota;","¿":"&iquest;","𝒾":"&iscr;","⋹":"&isinE;","⋵":"&isindot;","⋴":"&isins;","⋳":"&isinsv;","ĩ":"&itilde;","і":"&iukcy;","ï":"&iuml;","ĵ":"&jcirc;","й":"&jcy;","𝔧":"&jfr;","ȷ":"&jmath;","𝕛":"&jopf;","𝒿":"&jscr;","ј":"&jsercy;","є":"&jukcy;","κ":"&kappa;","ϰ":"&varkappa;","ķ":"&kcedil;","к":"&kcy;","𝔨":"&kfr;","ĸ":"&kgreen;","х":"&khcy;","ќ":"&kjcy;","𝕜":"&kopf;","𝓀":"&kscr;","⤛":"&lAtail;","⤎":"&lBarr;","⪋":"&lesseqqgtr;","⥢":"&lHar;","ĺ":"&lacute;","⦴":"&laemptyv;","λ":"&lambda;","⦑":"&langd;","⪅":"&lessapprox;","«":"&laquo;","⤟":"&larrbfs;","⤝":"&larrfs;","↫":"&looparrowleft;","⤹":"&larrpl;","⥳":"&larrsim;","↢":"&leftarrowtail;","⪫":"&lat;","⤙":"&latail;","⪭":"&late;","⪭︀":"&lates;","⤌":"&lbarr;","❲":"&lbbrk;","{":"&lcub;","[":"&lsqb;","⦋":"&lbrke;","⦏":"&lbrksld;","⦍":"&lbrkslu;","ľ":"&lcaron;","ļ":"&lcedil;","л":"&lcy;","⤶":"&ldca;","⥧":"&ldrdhar;","⥋":"&ldrushar;","↲":"&ldsh;","≤":"&leq;","⇇":"&llarr;","⋋":"&lthree;","⪨":"&lescc;","⩿":"&lesdot;","⪁":"&lesdoto;","⪃":"&lesdotor;","⋚︀":"&lesg;","⪓":"&lesges;","⋖":"&ltdot;","⥼":"&lfisht;","𝔩":"&lfr;","⪑":"&lgE;","⥪":"&lharul;","▄":"&lhblk;","љ":"&ljcy;","⥫":"&llhard;","◺":"&lltri;","ŀ":"&lmidot;","⎰":"&lmoustache;","≨":"&lneqq;","⪉":"&lnapprox;","⪇":"&lneq;","⋦":"&lnsim;","⟬":"&loang;","⇽":"&loarr;","⟼":"&xmap;","↬":"&rarrlp;","⦅":"&lopar;","𝕝":"&lopf;","⨭":"&loplus;","⨴":"&lotimes;","∗":"&lowast;","◊":"&lozenge;","(":"&lpar;","⦓":"&lparlt;","⥭":"&lrhard;","‎":"&lrm;","⊿":"&lrtri;","‹":"&lsaquo;","𝓁":"&lscr;","⪍":"&lsime;","⪏":"&lsimg;","‚":"&sbquo;","ł":"&lstrok;","⪦":"&ltcc;","⩹":"&ltcir;","⋉":"&ltimes;","⥶":"&ltlarr;","⩻":"&ltquest;","⦖":"&ltrPar;","◃":"&triangleleft;","⥊":"&lurdshar;","⥦":"&luruhar;","≨︀":"&lvnE;","∺":"&mDDot;","¯":"&strns;","♂":"&male;","✠":"&maltese;","▮":"&marker;","⨩":"&mcomma;","м":"&mcy;","—":"&mdash;","𝔪":"&mfr;","℧":"&mho;","µ":"&micro;","⫰":"&midcir;","−":"&minus;","⨪":"&minusdu;","⫛":"&mlcp;","⊧":"&models;","𝕞":"&mopf;","𝓂":"&mscr;","μ":"&mu;","⊸":"&mumap;","⋙̸":"&nGg;","≫⃒":"&nGt;","⇍":"&nlArr;","⇎":"&nhArr;","⋘̸":"&nLl;","≪⃒":"&nLt;","⇏":"&nrArr;","⊯":"&nVDash;","⊮":"&nVdash;","ń":"&nacute;","∠⃒":"&nang;","⩰̸":"&napE;","≋̸":"&napid;","ŉ":"&napos;","♮":"&natural;","⩃":"&ncap;","ň":"&ncaron;","ņ":"&ncedil;","⩭̸":"&ncongdot;","⩂":"&ncup;","н":"&ncy;","–":"&ndash;","⇗":"&neArr;","⤤":"&nearhk;","≐̸":"&nedot;","⤨":"&toea;","𝔫":"&nfr;","↮":"&nleftrightarrow;","⫲":"&nhpar;","⋼":"&nis;","⋺":"&nisd;","њ":"&njcy;","≦̸":"&nleqq;","↚":"&nleftarrow;","‥":"&nldr;","𝕟":"&nopf;","¬":"&not;","⋹̸":"&notinE;","⋵̸":"&notindot;","⋷":"&notinvb;","⋶":"&notinvc;","⋾":"&notnivb;","⋽":"&notnivc;","⫽⃥":"&nparsl;","∂̸":"&npart;","⨔":"&npolint;","↛":"&nrightarrow;","⤳̸":"&nrarrc;","↝̸":"&nrarrw;","𝓃":"&nscr;","⊄":"&nsub;","⫅̸":"&nsubseteqq;","⊅":"&nsup;","⫆̸":"&nsupseteqq;","ñ":"&ntilde;","ν":"&nu;","#":"&num;","№":"&numero;"," ":"&numsp;","⊭":"&nvDash;","⤄":"&nvHarr;","≍⃒":"&nvap;","⊬":"&nvdash;","≥⃒":"&nvge;",">⃒":"&nvgt;","⧞":"&nvinfin;","⤂":"&nvlArr;","≤⃒":"&nvle;","<⃒":"&nvlt;","⊴⃒":"&nvltrie;","⤃":"&nvrArr;","⊵⃒":"&nvrtrie;","∼⃒":"&nvsim;","⇖":"&nwArr;","⤣":"&nwarhk;","⤧":"&nwnear;","ó":"&oacute;","ô":"&ocirc;","о":"&ocy;","ő":"&odblac;","⨸":"&odiv;","⦼":"&odsold;","œ":"&oelig;","⦿":"&ofcir;","𝔬":"&ofr;","˛":"&ogon;","ò":"&ograve;","⧁":"&ogt;","⦵":"&ohbar;","⦾":"&olcir;","⦻":"&olcross;","⧀":"&olt;","ō":"&omacr;","ω":"&omega;","ο":"&omicron;","⦶":"&omid;","𝕠":"&oopf;","⦷":"&opar;","⦹":"&operp;","∨":"&vee;","⩝":"&ord;","ℴ":"&oscr;","ª":"&ordf;","º":"&ordm;","⊶":"&origof;","⩖":"&oror;","⩗":"&orslope;","⩛":"&orv;","ø":"&oslash;","⊘":"&osol;","õ":"&otilde;","⨶":"&otimesas;","ö":"&ouml;","⌽":"&ovbar;","¶":"&para;","⫳":"&parsim;","⫽":"&parsl;","п":"&pcy;","%":"&percnt;",".":"&period;","‰":"&permil;","‱":"&pertenk;","𝔭":"&pfr;","φ":"&phi;","ϕ":"&varphi;","☎":"&phone;","π":"&pi;","ϖ":"&varpi;","ℎ":"&planckh;","+":"&plus;","⨣":"&plusacir;","⨢":"&pluscir;","⨥":"&plusdu;","⩲":"&pluse;","⨦":"&plussim;","⨧":"&plustwo;","⨕":"&pointint;","𝕡":"&popf;","£":"&pound;","⪳":"&prE;","⪷":"&precapprox;","⪹":"&prnap;","⪵":"&prnE;","⋨":"&prnsim;","′":"&prime;","⌮":"&profalar;","⌒":"&profline;","⌓":"&profsurf;","⊰":"&prurel;","𝓅":"&pscr;","ψ":"&psi;"," ":"&puncsp;","𝔮":"&qfr;","𝕢":"&qopf;","⁗":"&qprime;","𝓆":"&qscr;","⨖":"&quatint;","?":"&quest;","⤜":"&rAtail;","⥤":"&rHar;","∽̱":"&race;","ŕ":"&racute;","⦳":"&raemptyv;","⦒":"&rangd;","⦥":"&range;","»":"&raquo;","⥵":"&rarrap;","⤠":"&rarrbfs;","⤳":"&rarrc;","⤞":"&rarrfs;","⥅":"&rarrpl;","⥴":"&rarrsim;","↣":"&rightarrowtail;","↝":"&rightsquigarrow;","⤚":"&ratail;","∶":"&ratio;","❳":"&rbbrk;","}":"&rcub;","]":"&rsqb;","⦌":"&rbrke;","⦎":"&rbrksld;","⦐":"&rbrkslu;","ř":"&rcaron;","ŗ":"&rcedil;","р":"&rcy;","⤷":"&rdca;","⥩":"&rdldhar;","↳":"&rdsh;","▭":"&rect;","⥽":"&rfisht;","𝔯":"&rfr;","⥬":"&rharul;","ρ":"&rho;","ϱ":"&varrho;","⇉":"&rrarr;","⋌":"&rthree;","˚":"&ring;","‏":"&rlm;","⎱":"&rmoustache;","⫮":"&rnmid;","⟭":"&roang;","⇾":"&roarr;","⦆":"&ropar;","𝕣":"&ropf;","⨮":"&roplus;","⨵":"&rotimes;",")":"&rpar;","⦔":"&rpargt;","⨒":"&rppolint;","›":"&rsaquo;","𝓇":"&rscr;","⋊":"&rtimes;","▹":"&triangleright;","⧎":"&rtriltri;","⥨":"&ruluhar;","℞":"&rx;","ś":"&sacute;","⪴":"&scE;","⪸":"&succapprox;","š":"&scaron;","ş":"&scedil;","ŝ":"&scirc;","⪶":"&succneqq;","⪺":"&succnapprox;","⋩":"&succnsim;","⨓":"&scpolint;","с":"&scy;","⋅":"&sdot;","⩦":"&sdote;","⇘":"&seArr;","§":"&sect;",";":"&semi;","⤩":"&tosa;","✶":"&sext;","𝔰":"&sfr;","♯":"&sharp;","щ":"&shchcy;","ш":"&shcy;","­":"&shy;","σ":"&sigma;","ς":"&varsigma;","⩪":"&simdot;","⪞":"&simg;","⪠":"&simgE;","⪝":"&siml;","⪟":"&simlE;","≆":"&simne;","⨤":"&simplus;","⥲":"&simrarr;","⨳":"&smashp;","⧤":"&smeparsl;","⌣":"&ssmile;","⪪":"&smt;","⪬":"&smte;","⪬︀":"&smtes;","ь":"&softcy;","/":"&sol;","⧄":"&solb;","⌿":"&solbar;","𝕤":"&sopf;","♠":"&spadesuit;","⊓︀":"&sqcaps;","⊔︀":"&sqcups;","𝓈":"&sscr;","☆":"&star;","⊂":"&subset;","⫅":"&subseteqq;","⪽":"&subdot;","⫃":"&subedot;","⫁":"&submult;","⫋":"&subsetneqq;","⊊":"&subsetneq;","⪿":"&subplus;","⥹":"&subrarr;","⫇":"&subsim;","⫕":"&subsub;","⫓":"&subsup;","♪":"&sung;","¹":"&sup1;","²":"&sup2;","³":"&sup3;","⫆":"&supseteqq;","⪾":"&supdot;","⫘":"&supdsub;","⫄":"&supedot;","⟉":"&suphsol;","⫗":"&suphsub;","⥻":"&suplarr;","⫂":"&supmult;","⫌":"&supsetneqq;","⊋":"&supsetneq;","⫀":"&supplus;","⫈":"&supsim;","⫔":"&supsub;","⫖":"&supsup;","⇙":"&swArr;","⤪":"&swnwar;","ß":"&szlig;","⌖":"&target;","τ":"&tau;","ť":"&tcaron;","ţ":"&tcedil;","т":"&tcy;","⌕":"&telrec;","𝔱":"&tfr;","θ":"&theta;","ϑ":"&vartheta;","þ":"&thorn;","×":"&times;","⨱":"&timesbar;","⨰":"&timesd;","⌶":"&topbot;","⫱":"&topcir;","𝕥":"&topf;","⫚":"&topfork;","‴":"&tprime;","▵":"&utri;","≜":"&trie;","◬":"&tridot;","⨺":"&triminus;","⨹":"&triplus;","⧍":"&trisb;","⨻":"&tritime;","⏢":"&trpezium;","𝓉":"&tscr;","ц":"&tscy;","ћ":"&tshcy;","ŧ":"&tstrok;","⥣":"&uHar;","ú":"&uacute;","ў":"&ubrcy;","ŭ":"&ubreve;","û":"&ucirc;","у":"&ucy;","ű":"&udblac;","⥾":"&ufisht;","𝔲":"&ufr;","ù":"&ugrave;","▀":"&uhblk;","⌜":"&ulcorner;","⌏":"&ulcrop;","◸":"&ultri;","ū":"&umacr;","ų":"&uogon;","𝕦":"&uopf;","υ":"&upsilon;","⇈":"&uuarr;","⌝":"&urcorner;","⌎":"&urcrop;","ů":"&uring;","◹":"&urtri;","𝓊":"&uscr;","⋰":"&utdot;","ũ":"&utilde;","ü":"&uuml;","⦧":"&uwangle;","⫨":"&vBar;","⫩":"&vBarv;","⦜":"&vangrt;","⊊︀":"&vsubne;","⫋︀":"&vsubnE;","⊋︀":"&vsupne;","⫌︀":"&vsupnE;","в":"&vcy;","⊻":"&veebar;","≚":"&veeeq;","⋮":"&vellip;","𝔳":"&vfr;","𝕧":"&vopf;","𝓋":"&vscr;","⦚":"&vzigzag;","ŵ":"&wcirc;","⩟":"&wedbar;","≙":"&wedgeq;","℘":"&wp;","𝔴":"&wfr;","𝕨":"&wopf;","𝓌":"&wscr;","𝔵":"&xfr;","ξ":"&xi;","⋻":"&xnis;","𝕩":"&xopf;","𝓍":"&xscr;","ý":"&yacute;","я":"&yacy;","ŷ":"&ycirc;","ы":"&ycy;","¥":"&yen;","𝔶":"&yfr;","ї":"&yicy;","𝕪":"&yopf;","𝓎":"&yscr;","ю":"&yucy;","ÿ":"&yuml;","ź":"&zacute;","ž":"&zcaron;","з":"&zcy;","ż":"&zdot;","ζ":"&zeta;","𝔷":"&zfr;","ж":"&zhcy;","⇝":"&zigrarr;","𝕫":"&zopf;","𝓏":"&zscr;","‍":"&zwj;","‌":"&zwnj;"}}};

/***/ }),

/***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.numericUnicodeMap={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376};

/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.fromCodePoint=String.fromCodePoint||function(astralCodePoint){return String.fromCharCode(Math.floor((astralCodePoint-65536)/1024)+55296,(astralCodePoint-65536)%1024+56320)};exports.getCodePoint=String.prototype.codePointAt?function(input,position){return input.codePointAt(position)}:function(input,position){return(input.charCodeAt(position)-55296)*1024+input.charCodeAt(position+1)-56320+65536};exports.highSurrogateFrom=55296;exports.highSurrogateTo=56319;

/***/ }),

/***/ "./src/components/breed-search.ts":
/*!****************************************!*\
  !*** ./src/components/breed-search.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



/***/ }),

/***/ "./src/components/breed-selector.ts":
/*!******************************************!*\
  !*** ./src/components/breed-selector.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreedSelector": () => (/* binding */ BreedSelector)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/repeat.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/when.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
  <div class="breed-selector">
    <fast-combobox
      autocomplete="both"
      :value="${(x) => x.selectedBreed}"
      @change="${(x, c) => x.handleBreedChange(c.event)}"
    >
      ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.repeat)((x) => x.breeds, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <fast-option>${(x) => x}</fast-option> `)}
    </fast-combobox>

    ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.when)((x) => x.subBreeds.length > 0, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
        <fast-combobox
          autocomplete="both"
          @change="${(x, c) => x.handleSubBreedChange(c.event)}"
        >
          ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.repeat)((x) => x.subBreeds, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <fast-option>${(x) => x}</fast-option> `)}
        </fast-combobox>
      `)}
    ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.when)((x) => x.selectedSubBreed.length > 0 ||
    (x.subBreeds.length <= 0 && x.selectedBreed.length > 0), _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <fast-button id="addBreed">Add Breed</fast-button> `)}
  </div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.css `
  .breed-selector {
    display: flex;
    gap: 0.5em;
  }
`;
const capitalize = (words) => {
    return words
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" ");
};
const getSubBreeds = (breedsData, currBreed) => {
    return breedsData.message[currBreed.toLowerCase()];
};
let BreedSelector = class BreedSelector extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.FASTElement {
    constructor() {
        super(...arguments);
        this.breeds = [];
        this.subBreeds = [];
        this.selectedBreed = "";
        this.selectedSubBreed = "";
        this.selectedBreedUrl = "";
        this.allBreedsData = {};
    }
    connectedCallback() {
        super.connectedCallback();
        this.fetchAllBreeds();
        this.addBreedBtn = this.shadowRoot.querySelector(".add-breed");
        if (this.addBreedBtn)
            console.log(`found add breed button`);
    }
    callAddBreed() {
        console.log(`callAddBreed url = ${this.selectedBreedUrl}`);
        this.handleAddBreed(this.selectedBreedUrl);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "handleaddbreed") {
            console.log(`handleAddBreed changed`);
            if (!this.addBreedBtn)
                return;
            console.log(`addEventListener`);
            this.addBreedBtn.addEventListener("click", this.callAddBreed.bind(this));
        }
    }
    handleAddBreedChanged() {
        console.log(`handleAddBreed changed; handleAddBreed = ${this.handleAddBreed}`);
    }
    handleBreedChange(event) {
        this.selectedBreed = event.target.value;
        this.selectedSubBreed = "";
        this.subBreeds = getSubBreeds(this.allBreedsData, this.selectedBreed).map((breed) => capitalize(breed));
        if (this.subBreeds.length <= 0) {
            if (this.selectedBreed.length <= 0) {
                this.selectedBreedUrl = "";
            }
            else {
                this.fetchBreedUrl();
            }
        }
    }
    handleSubBreedChange(event) {
        this.selectedSubBreed = event.target.value;
        console.log(`selectedSubBreed = ${this.selectedSubBreed}`);
    }
    fetchAllBreeds() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch("https://dog.ceo/api/breeds/list/all");
            this.allBreedsData = yield response.json();
            this.breeds = Object.keys(this.allBreedsData.message).map((key) => capitalize(key));
        });
    }
    // all breed = https://dog.ceo/api/breed/hound/images
    // all sub breeds = https://dog.ceo/api/breed/hound/afghan/images
    fetchBreedUrl() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let response;
            if (this.selectedSubBreed.length <= 0) {
                response = yield fetch(`https://dog.ceo/api/breed/${this.selectedBreed.toLowerCase()}/images`);
            }
            else {
                response = yield fetch(`https://dog.ceo/api/breed/${this.selectedBreed.toLowerCase()}/${this.selectedSubBreed.toLowerCase()}/images`);
            }
            const json = yield response.json();
            this.selectedBreedUrl =
                json.message[Math.floor(Math.random() * json.message.length) + 1];
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr
], BreedSelector.prototype, "handleAddBreed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], BreedSelector.prototype, "breeds", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], BreedSelector.prototype, "subBreeds", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], BreedSelector.prototype, "selectedBreed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], BreedSelector.prototype, "selectedSubBreed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], BreedSelector.prototype, "selectedBreedUrl", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], BreedSelector.prototype, "callHandleAddBreed", void 0);
BreedSelector = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.customElement)({ name: "breed-selector", template, styles })
], BreedSelector);



/***/ }),

/***/ "./src/components/dog-card.ts":
/*!************************************!*\
  !*** ./src/components/dog-card.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DogCard": () => (/* binding */ DogCard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
  <div class="dog-card">
    <span class="dog-breed">${(x) => x.breed}</span>
    <img src="${(x) => x.url}" class="dog-img" alt="dog image" />
  </div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.css `
  .dog-card {
    border: 1px solid black;
    width: 400px;
    height: 400px;
    overflow: hidden;
    padding: 0.5em;
    margin-top: 1em;
  }

  .dog-breed {
    font-size: 1.5em;
    text-transform: capitalize;
  }

  .dog-img {
    width: 100%;
    max-height: 350px;
    object-fit: contain;
    padding-top: 1em;
  }
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
let DogCard = class DogCard extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.FASTElement {
    connectedCallback() {
        super.connectedCallback();
        this.breed = getBreedName(this.url);
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], DogCard.prototype, "breed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.attr
], DogCard.prototype, "url", void 0);
DogCard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.customElement)({ name: "dog-card", template, styles })
], DogCard);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebSocketClient)
/* harmony export */ });
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var WebSocketClient = /*#__PURE__*/function () {
  /**
   * @param {string} url
   */
  function WebSocketClient(url) {
    _classCallCheck(this, WebSocketClient);

    this.client = new WebSocket(url);

    this.client.onerror = function (error) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);
    };
  }
  /**
   * @param {(...args: any[]) => void} f
   */


  _createClass(WebSocketClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.client.onopen = f;
    }
    /**
     * @param {(...args: any[]) => void} f
     */

  }, {
    key: "onClose",
    value: function onClose(f) {
      this.client.onclose = f;
    } // call f with the message string as the first argument

    /**
     * @param {(...args: any[]) => void} f
     */

  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.client.onmessage = function (e) {
        f(e.data);
      };
    }
  }]);

  return WebSocketClient;
}();



/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&reconnect=10":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&reconnect=10 ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __resourceQuery = "?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&reconnect=10";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ "./node_modules/webpack/hot/log.js");
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/strip-ansi/index.js */ "./node_modules/webpack-dev-server/client/modules/strip-ansi/index.js");
/* harmony import */ var _modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parseURL.js */ "./node_modules/webpack-dev-server/client/utils/parseURL.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ "./node_modules/webpack-dev-server/client/socket.js");
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/webpack-dev-server/client/overlay.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/sendMessage.js */ "./node_modules/webpack-dev-server/client/utils/sendMessage.js");
/* harmony import */ var _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/reloadApp.js */ "./node_modules/webpack-dev-server/client/utils/reloadApp.js");
/* harmony import */ var _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/createSocketURL.js */ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js");
/* global __resourceQuery, __webpack_hash__ */
/// <reference types="webpack/module" />









/**
 * @typedef {Object} Options
 * @property {boolean} hot
 * @property {boolean} liveReload
 * @property {boolean} progress
 * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay
 * @property {string} [logging]
 * @property {number} [reconnect]
 */

/**
 * @typedef {Object} Status
 * @property {boolean} isUnloading
 * @property {string} currentHash
 * @property {string} [previousHash]
 */

/**
 * @type {Status}
 */

var status = {
  isUnloading: false,
  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement
  // eslint-disable-next-line camelcase
  currentHash:  true ? __webpack_require__.h() : 0
};
/** @type {Options} */

var options = {
  hot: false,
  liveReload: false,
  progress: false,
  overlay: false
};
var parsedResourceQuery = (0,_utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__["default"])(__resourceQuery);

if (parsedResourceQuery.hot === "true") {
  options.hot = true;
  _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Hot Module Replacement enabled.");
}

if (parsedResourceQuery["live-reload"] === "true") {
  options.liveReload = true;
  _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Live Reloading enabled.");
}

if (parsedResourceQuery.logging) {
  options.logging = parsedResourceQuery.logging;
}

if (typeof parsedResourceQuery.reconnect !== "undefined") {
  options.reconnect = Number(parsedResourceQuery.reconnect);
}
/**
 * @param {string} level
 */


function setAllLogLevel(level) {
  // This is needed because the HMR logger operate separately from dev server logger
  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === "verbose" || level === "log" ? "info" : level);
  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);
}

if (options.logging) {
  setAllLogLevel(options.logging);
}

self.addEventListener("beforeunload", function () {
  status.isUnloading = true;
});
var onSocketMessage = {
  hot: function hot() {
    if (parsedResourceQuery.hot === "false") {
      return;
    }

    options.hot = true;
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Hot Module Replacement enabled.");
  },
  liveReload: function liveReload() {
    if (parsedResourceQuery["live-reload"] === "false") {
      return;
    }

    options.liveReload = true;
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Live Reloading enabled.");
  },
  invalid: function invalid() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Invalid");
  },

  /**
   * @param {string} hash
   */
  hash: function hash(_hash) {
    status.previousHash = status.currentHash;
    status.currentHash = _hash;
  },
  logging: setAllLogLevel,

  /**
   * @param {boolean} value
   */
  overlay: function overlay(value) {
    if (typeof document === "undefined") {
      return;
    }

    options.overlay = value;
  },

  /**
   * @param {number} value
   */
  reconnect: function reconnect(value) {
    if (parsedResourceQuery.reconnect === "false") {
      return;
    }

    options.reconnect = value;
  },

  /**
   * @param {boolean} value
   */
  progress: function progress(value) {
    options.progress = value;
  },

  /**
   * @param {{ pluginName?: string, percent: number, msg: string }} data
   */
  "progress-update": function progressUpdate(data) {
    if (options.progress) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Progress", data);
  },
  "still-ok": function stillOk() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Nothing changed.");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("StillOk");
  },
  ok: function ok() {
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Ok");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },
  // TODO: remove in v5 in favor of 'static-changed'

  /**
   * @param {string} file
   */
  "content-changed": function contentChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },

  /**
   * @param {string} file
   */
  "static-changed": function staticChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },

  /**
   * @param {Error[]} warnings
   * @param {any} params
   */
  warnings: function warnings(_warnings, params) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn("Warnings while compiling.");

    var printableWarnings = _warnings.map(function (error) {
      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("warning", error),
          header = _formatProblem.header,
          body = _formatProblem.body;

      return "".concat(header, "\n").concat(_modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1___default()(body));
    });

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Warnings", printableWarnings);

    for (var i = 0; i < printableWarnings.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(printableWarnings[i]);
    }

    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;

    if (needShowOverlayForWarnings) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)("warning", _warnings);
    }

    if (params && params.preventReloading) {
      return;
    }

    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },

  /**
   * @param {Error[]} errors
   */
  errors: function errors(_errors) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Errors while compiling. Reload prevented.");

    var printableErrors = _errors.map(function (error) {
      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("error", error),
          header = _formatProblem2.header,
          body = _formatProblem2.body;

      return "".concat(header, "\n").concat(_modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1___default()(body));
    });

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Errors", printableErrors);

    for (var i = 0; i < printableErrors.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(printableErrors[i]);
    }

    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;

    if (needShowOverlayForErrors) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)("error", _errors);
    }
  },

  /**
   * @param {Error} error
   */
  error: function error(_error) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);
  },
  close: function close() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Disconnected!");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Close");
  }
};
var socketURL = (0,_utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__["default"])(parsedResourceQuery);
(0,_socket_js__WEBPACK_IMPORTED_MODULE_3__["default"])(socketURL, onSocketMessage, options.reconnect);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client-src/modules/logger/SyncBailHookFake.js":
/*!*******************************************************!*\
  !*** ./client-src/modules/logger/SyncBailHookFake.js ***!
  \*******************************************************/
/***/ (function(module) {


/**
 * Client stub for tapable SyncBailHook
 */

module.exports = function clientTapableSyncBailHook() {
  return {
    call: function call() {}
  };
};

/***/ }),

/***/ "./node_modules/webpack/lib/logging/Logger.js":
/*!****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/Logger.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var LogType = Object.freeze({
  error:
  /** @type {"error"} */
  "error",
  // message, c style arguments
  warn:
  /** @type {"warn"} */
  "warn",
  // message, c style arguments
  info:
  /** @type {"info"} */
  "info",
  // message, c style arguments
  log:
  /** @type {"log"} */
  "log",
  // message, c style arguments
  debug:
  /** @type {"debug"} */
  "debug",
  // message, c style arguments
  trace:
  /** @type {"trace"} */
  "trace",
  // no arguments
  group:
  /** @type {"group"} */
  "group",
  // [label]
  groupCollapsed:
  /** @type {"groupCollapsed"} */
  "groupCollapsed",
  // [label]
  groupEnd:
  /** @type {"groupEnd"} */
  "groupEnd",
  // [label]
  profile:
  /** @type {"profile"} */
  "profile",
  // [profileName]
  profileEnd:
  /** @type {"profileEnd"} */
  "profileEnd",
  // [profileName]
  time:
  /** @type {"time"} */
  "time",
  // name, time as [seconds, nanoseconds]
  clear:
  /** @type {"clear"} */
  "clear",
  // no arguments
  status:
  /** @type {"status"} */
  "status" // message, arguments

});
exports.LogType = LogType;
/** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */

var LOG_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger raw log method");
var TIMERS_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger times");
var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger aggregated times");

var WebpackLogger = /*#__PURE__*/function () {
  /**
   * @param {function(LogTypeEnum, any[]=): void} log log function
   * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger
   */
  function WebpackLogger(log, getChildLogger) {
    _classCallCheck(this, WebpackLogger);

    this[LOG_SYMBOL] = log;
    this.getChildLogger = getChildLogger;
  }

  _createClass(WebpackLogger, [{
    key: "error",
    value: function error() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this[LOG_SYMBOL](LogType.error, args);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this[LOG_SYMBOL](LogType.warn, args);
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this[LOG_SYMBOL](LogType.info, args);
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this[LOG_SYMBOL](LogType.log, args);
    }
  }, {
    key: "debug",
    value: function debug() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      this[LOG_SYMBOL](LogType.debug, args);
    }
  }, {
    key: "assert",
    value: function assert(assertion) {
      if (!assertion) {
        for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          args[_key6 - 1] = arguments[_key6];
        }

        this[LOG_SYMBOL](LogType.error, args);
      }
    }
  }, {
    key: "trace",
    value: function trace() {
      this[LOG_SYMBOL](LogType.trace, ["Trace"]);
    }
  }, {
    key: "clear",
    value: function clear() {
      this[LOG_SYMBOL](LogType.clear);
    }
  }, {
    key: "status",
    value: function status() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      this[LOG_SYMBOL](LogType.status, args);
    }
  }, {
    key: "group",
    value: function group() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      this[LOG_SYMBOL](LogType.group, args);
    }
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      this[LOG_SYMBOL](LogType.groupCollapsed, args);
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }

      this[LOG_SYMBOL](LogType.groupEnd, args);
    }
  }, {
    key: "profile",
    value: function profile(label) {
      this[LOG_SYMBOL](LogType.profile, [label]);
    }
  }, {
    key: "profileEnd",
    value: function profileEnd(label) {
      this[LOG_SYMBOL](LogType.profileEnd, [label]);
    }
  }, {
    key: "time",
    value: function time(label) {
      this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
      this[TIMERS_SYMBOL].set(label, process.hrtime());
    }
  }, {
    key: "timeLog",
    value: function timeLog(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeLog()"));
      }

      var time = process.hrtime(prev);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }, {
    key: "timeEnd",
    value: function timeEnd(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeEnd()"));
      }

      var time = process.hrtime(prev);
      this[TIMERS_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }, {
    key: "timeAggregate",
    value: function timeAggregate(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeAggregate()"));
      }

      var time = process.hrtime(prev);
      this[TIMERS_SYMBOL].delete(label);
      this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();
      var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);

      if (current !== undefined) {
        if (time[1] + current[1] > 1e9) {
          time[0] += current[0] + 1;
          time[1] = time[1] - 1e9 + current[1];
        } else {
          time[0] += current[0];
          time[1] += current[1];
        }
      }

      this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
    }
  }, {
    key: "timeAggregateEnd",
    value: function timeAggregateEnd(label) {
      if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;
      var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
      if (time === undefined) return;
      this[TIMERS_AGGREGATES_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }]);

  return WebpackLogger;
}();

exports.Logger = WebpackLogger;

/***/ }),

/***/ "./node_modules/webpack/lib/logging/createConsoleLogger.js":
/*!*****************************************************************!*\
  !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_10785__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var _require = __nested_webpack_require_10785__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
    LogType = _require.LogType;
/** @typedef {import("../../declarations/WebpackOptions").FilterItemTypes} FilterItemTypes */

/** @typedef {import("../../declarations/WebpackOptions").FilterTypes} FilterTypes */

/** @typedef {import("./Logger").LogTypeEnum} LogTypeEnum */

/** @typedef {function(string): boolean} FilterFunction */

/**
 * @typedef {Object} LoggerConsole
 * @property {function(): void} clear
 * @property {function(): void} trace
 * @property {(...args: any[]) => void} info
 * @property {(...args: any[]) => void} log
 * @property {(...args: any[]) => void} warn
 * @property {(...args: any[]) => void} error
 * @property {(...args: any[]) => void=} debug
 * @property {(...args: any[]) => void=} group
 * @property {(...args: any[]) => void=} groupCollapsed
 * @property {(...args: any[]) => void=} groupEnd
 * @property {(...args: any[]) => void=} status
 * @property {(...args: any[]) => void=} profile
 * @property {(...args: any[]) => void=} profileEnd
 * @property {(...args: any[]) => void=} logTime
 */

/**
 * @typedef {Object} LoggerOptions
 * @property {false|true|"none"|"error"|"warn"|"info"|"log"|"verbose"} level loglevel
 * @property {FilterTypes|boolean} debug filter for debug logging
 * @property {LoggerConsole} console the console to log to
 */

/**
 * @param {FilterItemTypes} item an input item
 * @returns {FilterFunction} filter function
 */


var filterToFunction = function filterToFunction(item) {
  if (typeof item === "string") {
    var regExp = new RegExp("[\\\\/]".concat(item.replace( // eslint-disable-next-line no-useless-escape
    /[-[\]{}()*+?.\\^$|]/g, "\\$&"), "([\\\\/]|$|!|\\?)"));
    return function (ident) {
      return regExp.test(ident);
    };
  }

  if (item && typeof item === "object" && typeof item.test === "function") {
    return function (ident) {
      return item.test(ident);
    };
  }

  if (typeof item === "function") {
    return item;
  }

  if (typeof item === "boolean") {
    return function () {
      return item;
    };
  }
};
/**
 * @enum {number}
 */


var LogLevel = {
  none: 6,
  false: 6,
  error: 5,
  warn: 4,
  info: 3,
  log: 2,
  true: 2,
  verbose: 1
};
/**
 * @param {LoggerOptions} options options object
 * @returns {function(string, LogTypeEnum, any[]): void} logging function
 */

module.exports = function (_ref) {
  var _ref$level = _ref.level,
      level = _ref$level === void 0 ? "info" : _ref$level,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug,
      console = _ref.console;
  var debugFilters = typeof debug === "boolean" ? [function () {
    return debug;
  }] :
  /** @type {FilterItemTypes[]} */
  [].concat(debug).map(filterToFunction);
  /** @type {number} */

  var loglevel = LogLevel["".concat(level)] || 0;
  /**
   * @param {string} name name of the logger
   * @param {LogTypeEnum} type type of the log entry
   * @param {any[]} args arguments of the log entry
   * @returns {void}
   */

  var logger = function logger(name, type, args) {
    var labeledArgs = function labeledArgs() {
      if (Array.isArray(args)) {
        if (args.length > 0 && typeof args[0] === "string") {
          return ["[".concat(name, "] ").concat(args[0])].concat(_toConsumableArray(args.slice(1)));
        } else {
          return ["[".concat(name, "]")].concat(_toConsumableArray(args));
        }
      } else {
        return [];
      }
    };

    var debug = debugFilters.some(function (f) {
      return f(name);
    });

    switch (type) {
      case LogType.debug:
        if (!debug) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

        if (typeof console.debug === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.debug.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }

        break;

      case LogType.log:
        if (!debug && loglevel > LogLevel.log) return;
        console.log.apply(console, _toConsumableArray(labeledArgs()));
        break;

      case LogType.info:
        if (!debug && loglevel > LogLevel.info) return;
        console.info.apply(console, _toConsumableArray(labeledArgs()));
        break;

      case LogType.warn:
        if (!debug && loglevel > LogLevel.warn) return;
        console.warn.apply(console, _toConsumableArray(labeledArgs()));
        break;

      case LogType.error:
        if (!debug && loglevel > LogLevel.error) return;
        console.error.apply(console, _toConsumableArray(labeledArgs()));
        break;

      case LogType.trace:
        if (!debug) return;
        console.trace();
        break;

      case LogType.groupCollapsed:
        if (!debug && loglevel > LogLevel.log) return;

        if (!debug && loglevel > LogLevel.verbose) {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          if (typeof console.groupCollapsed === "function") {
            // eslint-disable-next-line node/no-unsupported-features/node-builtins
            console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));
          } else {
            console.log.apply(console, _toConsumableArray(labeledArgs()));
          }

          break;
        }

      // falls through

      case LogType.group:
        if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

        if (typeof console.group === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.group.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }

        break;

      case LogType.groupEnd:
        if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

        if (typeof console.groupEnd === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.groupEnd();
        }

        break;

      case LogType.time:
        {
          if (!debug && loglevel > LogLevel.log) return;
          var ms = args[1] * 1000 + args[2] / 1000000;
          var msg = "[".concat(name, "] ").concat(args[0], ": ").concat(ms, " ms");

          if (typeof console.logTime === "function") {
            console.logTime(msg);
          } else {
            console.log(msg);
          }

          break;
        }

      case LogType.profile:
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        if (typeof console.profile === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.profile.apply(console, _toConsumableArray(labeledArgs()));
        }

        break;

      case LogType.profileEnd:
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        if (typeof console.profileEnd === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));
        }

        break;

      case LogType.clear:
        if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

        if (typeof console.clear === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.clear();
        }

        break;

      case LogType.status:
        if (!debug && loglevel > LogLevel.info) return;

        if (typeof console.status === "function") {
          if (args.length === 0) {
            console.status();
          } else {
            console.status.apply(console, _toConsumableArray(labeledArgs()));
          }
        } else {
          if (args.length !== 0) {
            console.info.apply(console, _toConsumableArray(labeledArgs()));
          }
        }

        break;

      default:
        throw new Error("Unexpected LogType ".concat(type));
    }
  };

  return logger;
};

/***/ }),

/***/ "./node_modules/webpack/lib/logging/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/runtime.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_20872__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var SyncBailHook = __nested_webpack_require_20872__(/*! tapable/lib/SyncBailHook */ "./client-src/modules/logger/SyncBailHookFake.js");

var _require = __nested_webpack_require_20872__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
    Logger = _require.Logger;

var createConsoleLogger = __nested_webpack_require_20872__(/*! ./createConsoleLogger */ "./node_modules/webpack/lib/logging/createConsoleLogger.js");
/** @type {createConsoleLogger.LoggerOptions} */


var currentDefaultLoggerOptions = {
  level: "info",
  debug: false,
  console: console
};
var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
/**
 * @param {string} name name of the logger
 * @returns {Logger} a logger
 */

exports.getLogger = function (name) {
  return new Logger(function (type, args) {
    if (exports.hooks.log.call(name, type, args) === undefined) {
      currentDefaultLogger(name, type, args);
    }
  }, function (childName) {
    return exports.getLogger("".concat(name, "/").concat(childName));
  });
};
/**
 * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
 * @returns {void}
 */


exports.configureDefaultLogger = function (options) {
  _extends(currentDefaultLoggerOptions, options);

  currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
};

exports.hooks = {
  log: new SyncBailHook(["origin", "type", "args"])
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_22988__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_22988__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_22988__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_22988__.o(definition, key) && !__nested_webpack_require_22988__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_22988__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_22988__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************************!*\
  !*** ./client-src/modules/logger/index.js ***!
  \********************************************/
__nested_webpack_require_22988__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_22988__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport default export from named module */ webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__; }
/* harmony export */ });
/* harmony import */ var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_22988__(/*! webpack/lib/logging/runtime.js */ "./node_modules/webpack/lib/logging/runtime.js");

}();
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/strip-ansi/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/strip-ansi/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/strip-ansi/index.js":
/*!******************************************!*\
  !*** ./node_modules/strip-ansi/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_368__) {

__nested_webpack_require_368__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_368__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ stripAnsi; }
/* harmony export */ });
/* harmony import */ var ansi_regex__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_368__(/*! ansi-regex */ "./node_modules/strip-ansi/node_modules/ansi-regex/index.js");

function stripAnsi(string) {
  if (typeof string !== 'string') {
    throw new TypeError("Expected a `string`, got `".concat(typeof string, "`"));
  }

  return string.replace((0,ansi_regex__WEBPACK_IMPORTED_MODULE_0__["default"])(), '');
}

/***/ }),

/***/ "./node_modules/strip-ansi/node_modules/ansi-regex/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/strip-ansi/node_modules/ansi-regex/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_1387__) {

__nested_webpack_require_1387__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_1387__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ansiRegex; }
/* harmony export */ });
function ansiRegex() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$onlyFirst = _ref.onlyFirst,
      onlyFirst = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;

  var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
  return new RegExp(pattern, onlyFirst ? undefined : 'g');
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_2352__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_2352__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_2352__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_2352__.o(definition, key) && !__nested_webpack_require_2352__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_2352__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_2352__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************************************!*\
  !*** ./client-src/modules/strip-ansi/index.js ***!
  \************************************************/
__nested_webpack_require_2352__.r(__webpack_exports__);
/* harmony import */ var strip_ansi__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2352__(/*! strip-ansi */ "./node_modules/strip-ansi/index.js");

/* harmony default export */ __webpack_exports__["default"] = (strip_ansi__WEBPACK_IMPORTED_MODULE_0__["default"]);
}();
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatProblem": () => (/* binding */ formatProblem),
/* harmony export */   "show": () => (/* binding */ show),
/* harmony export */   "hide": () => (/* binding */ hide)
/* harmony export */ });
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ "./node_modules/ansi-html-community/index.js");
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js");
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_1__);
// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).


var colors = {
  reset: ["transparent", "transparent"],
  black: "181818",
  red: "E36049",
  green: "B3CB74",
  yellow: "FFD080",
  blue: "7CAFC2",
  magenta: "7FACCA",
  cyan: "C3C2EF",
  lightgrey: "EBE7E3",
  darkgrey: "6D7891"
};
/** @type {HTMLIFrameElement | null | undefined} */

var iframeContainerElement;
/** @type {HTMLDivElement | null | undefined} */

var containerElement;
/** @type {Array<(element: HTMLDivElement) => void>} */

var onLoadQueue = [];
ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);

function createContainer() {
  iframeContainerElement = document.createElement("iframe");
  iframeContainerElement.id = "webpack-dev-server-client-overlay";
  iframeContainerElement.src = "about:blank";
  iframeContainerElement.style.position = "fixed";
  iframeContainerElement.style.left = 0;
  iframeContainerElement.style.top = 0;
  iframeContainerElement.style.right = 0;
  iframeContainerElement.style.bottom = 0;
  iframeContainerElement.style.width = "100vw";
  iframeContainerElement.style.height = "100vh";
  iframeContainerElement.style.border = "none";
  iframeContainerElement.style.zIndex = 9999999999;

  iframeContainerElement.onload = function () {
    containerElement =
    /** @type {Document} */

    /** @type {HTMLIFrameElement} */
    iframeContainerElement.contentDocument.createElement("div");
    containerElement.id = "webpack-dev-server-client-overlay-div";
    containerElement.style.position = "fixed";
    containerElement.style.boxSizing = "border-box";
    containerElement.style.left = 0;
    containerElement.style.top = 0;
    containerElement.style.right = 0;
    containerElement.style.bottom = 0;
    containerElement.style.width = "100vw";
    containerElement.style.height = "100vh";
    containerElement.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    containerElement.style.color = "#E8E8E8";
    containerElement.style.fontFamily = "Menlo, Consolas, monospace";
    containerElement.style.fontSize = "large";
    containerElement.style.padding = "2rem";
    containerElement.style.lineHeight = "1.2";
    containerElement.style.whiteSpace = "pre-wrap";
    containerElement.style.overflow = "auto";
    var headerElement = document.createElement("span");
    headerElement.innerText = "Compiled with problems:";
    var closeButtonElement = document.createElement("button");
    closeButtonElement.innerText = "X";
    closeButtonElement.style.background = "transparent";
    closeButtonElement.style.border = "none";
    closeButtonElement.style.fontSize = "20px";
    closeButtonElement.style.fontWeight = "bold";
    closeButtonElement.style.color = "white";
    closeButtonElement.style.cursor = "pointer";
    closeButtonElement.style.cssFloat = "right"; // @ts-ignore

    closeButtonElement.style.styleFloat = "right";
    closeButtonElement.addEventListener("click", function () {
      hide();
    });
    containerElement.appendChild(headerElement);
    containerElement.appendChild(closeButtonElement);
    containerElement.appendChild(document.createElement("br"));
    containerElement.appendChild(document.createElement("br"));
    /** @type {Document} */

    /** @type {HTMLIFrameElement} */
    iframeContainerElement.contentDocument.body.appendChild(containerElement);
    onLoadQueue.forEach(function (onLoad) {
      onLoad(
      /** @type {HTMLDivElement} */
      containerElement);
    });
    onLoadQueue = [];
    /** @type {HTMLIFrameElement} */

    iframeContainerElement.onload = null;
  };

  document.body.appendChild(iframeContainerElement);
}
/**
 * @param {(element: HTMLDivElement) => void} callback
 */


function ensureOverlayExists(callback) {
  if (containerElement) {
    // Everything is ready, call the callback right away.
    callback(containerElement);
    return;
  }

  onLoadQueue.push(callback);

  if (iframeContainerElement) {
    return;
  }

  createContainer();
} // Successful compilation.


function hide() {
  if (!iframeContainerElement) {
    return;
  } // Clean up and reset internal state.


  document.body.removeChild(iframeContainerElement);
  iframeContainerElement = null;
  containerElement = null;
}
/**
 * @param {string} type
 * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string }} item
 * @returns {{ header: string, body: string }}
 */


function formatProblem(type, item) {
  var header = type === "warning" ? "WARNING" : "ERROR";
  var body = "";

  if (typeof item === "string") {
    body += item;
  } else {
    var file = item.file || ""; // eslint-disable-next-line no-nested-ternary

    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\s|\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";
    var loc = item.loc;
    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");
    body += item.message || "";
  }

  return {
    header: header,
    body: body
  };
} // Compilation with errors (e.g. syntax error or missing modules).

/**
 * @param {string} type
 * @param {Array<string  | { file?: string, moduleName?: string, loc?: string, message?: string }>} messages
 */


function show(type, messages) {
  ensureOverlayExists(function () {
    messages.forEach(function (message) {
      var entryElement = document.createElement("div");
      var typeElement = document.createElement("span");

      var _formatProblem = formatProblem(type, message),
          header = _formatProblem.header,
          body = _formatProblem.body;

      typeElement.innerText = header;
      typeElement.style.color = "#".concat(colors.red); // Make it look similar to our terminal.

      var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()((0,html_entities__WEBPACK_IMPORTED_MODULE_1__.encode)(body));
      var messageTextNode = document.createElement("div");
      messageTextNode.innerHTML = text;
      entryElement.appendChild(typeElement);
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(messageTextNode);
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(document.createElement("br"));
      /** @type {HTMLDivElement} */

      containerElement.appendChild(entryElement);
    });
  });
}



/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* global __webpack_dev_server_client__ */

 // this WebsocketClient is here as a default fallback, in case the client is not injected

/* eslint-disable camelcase */

var Client = // eslint-disable-next-line no-nested-ternary
typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* eslint-enable camelcase */

var retries = 0;
var maxRetries = 10;
var client = null;
/**
 * @param {string} url
 * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers
 * @param {number} [reconnect]
 */

var socket = function initSocket(url, handlers, reconnect) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;

    if (typeof reconnect !== "undefined") {
      maxRetries = reconnect;
    }
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    } // Try to reconnect.


    client = null; // After 10 retries stop trying, to prevent logspam.

    if (retries < maxRetries) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      // eslint-disable-next-line no-restricted-properties
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("Trying to reconnect...");
      setTimeout(function () {
        socket(url, handlers, reconnect);
      }, retryInMs);
    }
  });
  client.onMessage(
  /**
   * @param {any} data
   */
  function (data) {
    var message = JSON.parse(data);

    if (handlers[message.type]) {
      handlers[message.type](message.data, message.params);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/createSocketURL.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL
 * @returns {string}
 */
function format(objURL) {
  var protocol = objURL.protocol || "";

  if (protocol && protocol.substr(-1) !== ":") {
    protocol += ":";
  }

  var auth = objURL.auth || "";

  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }

  var host = "";

  if (objURL.hostname) {
    host = auth + (objURL.hostname.indexOf(":") === -1 ? objURL.hostname : "[".concat(objURL.hostname, "]"));

    if (objURL.port) {
      host += ":".concat(objURL.port);
    }
  }

  var pathname = objURL.pathname || "";

  if (objURL.slashes) {
    host = "//".concat(host || "");

    if (pathname && pathname.charAt(0) !== "/") {
      pathname = "/".concat(pathname);
    }
  } else if (!host) {
    host = "";
  }

  var search = objURL.search || "";

  if (search && search.charAt(0) !== "?") {
    search = "?".concat(search);
  }

  var hash = objURL.hash || "";

  if (hash && hash.charAt(0) !== "#") {
    hash = "#".concat(hash);
  }

  pathname = pathname.replace(/[?#]/g,
  /**
   * @param {string} match
   * @returns {string}
   */
  function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}
/**
 * @param {URL & { fromCurrentScript?: boolean }} parsedURL
 * @returns {string}
 */


function createSocketURL(parsedURL) {
  var hostname = parsedURL.hostname; // Node.js module parses it as `::`
  // `new URL(urlString, [baseURLString])` parses it as '[::]'

  var isInAddrAny = hostname === "0.0.0.0" || hostname === "::" || hostname === "[::]"; // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384

  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf("http") === 0) {
    hostname = self.location.hostname;
  }

  var socketURLProtocol = parsedURL.protocol || self.location.protocol; // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.

  if (socketURLProtocol === "auto:" || hostname && isInAddrAny && self.location.protocol === "https:") {
    socketURLProtocol = self.location.protocol;
  }

  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, "ws");
  var socketURLAuth = ""; // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
  // Parse authentication credentials in case we need them

  if (parsedURL.username) {
    socketURLAuth = parsedURL.username; // Since HTTP basic authentication does not allow empty username,
    // we only include password if the username is not empty.

    if (parsedURL.password) {
      // Result: <username>:<password>
      socketURLAuth = socketURLAuth.concat(":", parsedURL.password);
    }
  } // In case the host is a raw IPv6 address, it can be enclosed in
  // the brackets as the brackets are needed in the final URL string.
  // Need to remove those as url.format blindly adds its own set of brackets
  // if the host string contains colons. That would lead to non-working
  // double brackets (e.g. [[::]]) host
  //
  // All of these web socket url params are optionally passed in through resourceQuery,
  // so we need to fall back to the default if they are not provided


  var socketURLHostname = (hostname || self.location.hostname || "localhost").replace(/^\[(.*)\]$/, "$1");
  var socketURLPort = parsedURL.port;

  if (!socketURLPort || socketURLPort === "0") {
    socketURLPort = self.location.port;
  } // If path is provided it'll be passed in via the resourceQuery as a
  // query param so it has to be parsed out of the querystring in order for the
  // client to open the socket to the correct location.


  var socketURLPathname = "/ws";

  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {
    socketURLPathname = parsedURL.pathname;
  }

  return format({
    protocol: socketURLProtocol,
    auth: socketURLAuth,
    hostname: socketURLHostname,
    port: socketURLPort,
    pathname: socketURLPathname,
    slashes: true
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSocketURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js":
/*!********************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @returns {string}
 */
function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return document.currentScript.getAttribute("src");
  } // Fallback to getting all scripts running in the document.


  var scriptElements = document.scripts || [];
  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {
    return element.getAttribute("src");
  });

  if (scriptElementsWithSrc.length > 0) {
    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
    return currentScript.getAttribute("src");
  } // Fail as there was no script to use.


  throw new Error("[webpack-dev-server] Failed to get current script source.");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentScriptSource);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ "./node_modules/webpack-dev-server/client/modules/logger/index.js");
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);

var name = "webpack-dev-server"; // default level is set on the client side, so it does not need
// to be set by the CLI or API

var defaultLevel = "info"; // options new options, merge with old options

/**
 * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level
 * @returns {void}
 */

function setLogLevel(level) {
  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({
    level: level
  });
}

setLogLevel(defaultLevel);
var log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/parseURL.js":
/*!******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/parseURL.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentScriptSource.js */ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js");

/**
 * @param {string} resourceQuery
 * @returns {{ [key: string]: string | boolean }}
 */

function parseURL(resourceQuery) {
  /** @type {{ [key: string]: string }} */
  var options = {};

  if (typeof resourceQuery === "string" && resourceQuery !== "") {
    var searchParams = resourceQuery.substr(1).split("&");

    for (var i = 0; i < searchParams.length; i++) {
      var pair = searchParams[i].split("=");
      options[pair[0]] = decodeURIComponent(pair[1]);
    }
  } else {
    // Else, get the url from the <script> this file was called with.
    var scriptSource = (0,_getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    var scriptSourceURL;

    try {
      // The placeholder `baseURL` with `window.location.href`,
      // is to allow parsing of path-relative or protocol-relative URLs,
      // and will have no effect if `scriptSource` is a fully valid URL.
      scriptSourceURL = new URL(scriptSource, self.location.href);
    } catch (error) {// URL parsing failed, do nothing.
      // We will still proceed to see if we can recover using `resourceQuery`
    }

    if (scriptSourceURL) {
      options = scriptSourceURL;
      options.fromCurrentScript = true;
    }
  }

  return options;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/reloadApp.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/emitter.js */ "./node_modules/webpack/hot/emitter.js");
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");


/** @typedef {import("../index").Options} Options
/** @typedef {import("../index").Status} Status

/**
 * @param {Options} options
 * @param {Status} status
 */

function reloadApp(_ref, status) {
  var hot = _ref.hot,
      liveReload = _ref.liveReload;

  if (status.isUnloading) {
    return;
  }

  var currentHash = status.currentHash,
      previousHash = status.previousHash;
  var isInitial = currentHash.indexOf(
  /** @type {string} */
  previousHash) >= 0;

  if (isInitial) {
    return;
  }
  /**
   * @param {Window} rootWindow
   * @param {number} intervalId
   */


  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App updated. Reloading...");
    rootWindow.location.reload();
  }

  var search = self.location.search.toLowerCase();
  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;
  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;

  if (hot && allowToHot) {
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App hot update...");
    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit("webpackHotUpdate", status.currentHash);

    if (typeof self !== "undefined" && self.window) {
      // broadcast update to window
      self.postMessage("webpackHotUpdate".concat(status.currentHash), "*");
    }
  } // allow refreshing the page only if liveReload isn't disabled
  else if (liveReload && allowToLiveReload) {
    var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)

    var intervalId = self.setInterval(function () {
      if (rootWindow.location.protocol !== "about:") {
        // reload immediately if protocol is valid
        applyReload(rootWindow, intervalId);
      } else {
        rootWindow = rootWindow.parent;

        if (rootWindow.parent === rootWindow) {
          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
          applyReload(rootWindow, intervalId);
        }
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadApp);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global __resourceQuery WorkerGlobalScope */
// Send messages to the outside, so plugins can consume it.

/**
 * @param {string} type
 * @param {any} [data]
 */
function sendMsg(type, data) {
  if (typeof self !== "undefined" && (typeof WorkerGlobalScope === "undefined" || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, "*");
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMsg);

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/* globals __webpack_hash__ */
if (true) {
	var lastHash;
	var upToDate = function upToDate() {
		return lastHash.indexOf(__webpack_require__.h()) >= 0;
	};
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
	var check = function check() {
		module.hot
			.check(true)
			.then(function (updatedModules) {
				if (!updatedModules) {
					log("warning", "[HMR] Cannot find update. Need to do a full reload!");
					log(
						"warning",
						"[HMR] (Probably because of restarting the webpack-dev-server)"
					);
					window.location.reload();
					return;
				}

				if (!upToDate()) {
					check();
				}

				__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);

				if (upToDate()) {
					log("info", "[HMR] App is up to date.");
				}
			})
			.catch(function (err) {
				var status = module.hot.status();
				if (["abort", "fail"].indexOf(status) >= 0) {
					log(
						"warning",
						"[HMR] Cannot apply update. Need to do a full reload!"
					);
					log("warning", "[HMR] " + log.formatError(err));
					window.location.reload();
				} else {
					log("warning", "[HMR] Update failed: " + log.formatError(err));
				}
			});
	};
	var hotEmitter = __webpack_require__(/*! ./emitter */ "./node_modules/webpack/hot/emitter.js");
	hotEmitter.on("webpackHotUpdate", function (currentHash) {
		lastHash = currentHash;
		if (!upToDate() && module.hot.status() === "idle") {
			log("info", "[HMR] Checking for updates on the server...");
			check();
		}
	});
	log("info", "[HMR] Waiting for update signal from WDS...");
} else {}


/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
module.exports = new EventEmitter();


/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function (updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function (moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function (moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function (moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function (moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				'[HMR] Consider using the optimization.moduleIds: "named" for module names.'
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function (level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function (level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function (level) {
	logLevel = level;
};

module.exports.formatError = function (err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	} else {
		return stack;
	}
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("app." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("bd8421ac85014815182a")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "fast-dogs:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatefast_dogs"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&reconnect=10");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;