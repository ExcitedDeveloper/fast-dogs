"use strict";
self["webpackHotUpdatefast_dogs"]("app",{

/***/ "./node_modules/@microsoft/fast-element/dist/esm/observation/array-change-records.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/observation/array-change-records.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/repeat.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/repeat.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  <fast-button appearance="primary">Random Breed</fast-button>

  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.when)((x) => !x.ready, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <div class="pt-1">Loading...</div>`)}
  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.when)((x) => x.ready, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
      <dog-card
        breed="Hound - Afghan"
        url="https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1954.jpg"
      ></dog-card>
    `)}
  ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.repeat)((x) => x.breeds, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html ` <dog-card url="${(x) => x}"></dog-card> `)}
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.css `
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
        this.ready = false;
        this.breeds = [];
    }
    connectedCallback() {
        super.connectedCallback();
        const btn = this.shadowRoot.querySelector("fast-button");
        if (!btn)
            return;
        btn.addEventListener("click", this.handleGetRandomBreed.bind(this));
    }
    handleGetRandomBreed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const breed = yield fetchRandomBreed();
            this.breeds.push(breed.message);
            this.ready = true;
        });
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
/******/ 	__webpack_require__.h = () => ("2ff3d12d5403a9b53fb7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjVlNDBkMDg5ZGMyNGY4NWI4MzQ1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUN6QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEMsd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZ0RBQWdELFFBQVE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JVNkI7QUFDd0Q7QUFDMUM7QUFDRDtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9EQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaURBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwRUFBbUI7QUFDakMsY0FBYyxrRUFBVztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNCQUFzQjtBQUMxQjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyRUFBa0M7QUFDdEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0VBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdFQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0VBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0VBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLNkI7QUFDMkI7QUFDZTtBQUM5QjtBQUNRO0FBQ2Y7QUFDbEM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVFQUFrQjtBQUN0RCx1Q0FBdUMsdUVBQWtCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxrREFBa0QsMkVBQXNCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxRQUFRO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtFQUErQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxpQkFBaUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFFBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDhCQUE4QiwwREFBYTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNERBQTBCO0FBQzNELFFBQVEsbUZBQXNCO0FBQzlCLHNDQUFzQyxpRkFBNEI7QUFDbEUseUNBQXlDLGlGQUE0QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdPaUM7QUFHakMsTUFBTSxRQUFRLEdBQUcseURBQUksQ0FBYTs7O0lBRzlCLDZEQUFJLENBQ0osQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDZix5REFBSSxDQUFhLHFDQUFxQyxDQUN2RDtJQUNDLDZEQUFJLENBQ0osQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ2QseURBQUksQ0FBYTs7Ozs7S0FLaEIsQ0FDRjtJQUNDLCtEQUFNLENBQ04sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQ2YseURBQUksQ0FBYSxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQzdEO0NBQ0YsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLHdEQUFHOzs7O0NBSWpCLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHLEdBQVMsRUFBRSxDQUFDO0lBQ25DLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDeEUsT0FBTyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMvQixDQUFDLEVBQUM7QUFHRixJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsZ0VBQVc7SUFBNUM7O1FBQ2MsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixXQUFNLEdBQWEsRUFBRSxDQUFDO0lBbUJwQyxDQUFDO0lBakJDLGlCQUFpQjtRQUNmLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTFCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUVqQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUssb0JBQW9COztZQUN4QixNQUFNLEtBQUssR0FBRyxNQUFNLGdCQUFnQixFQUFFLENBQUM7WUFFdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWhDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtDQUNGO0FBcEJhO0lBQVgsK0RBQVU7MENBQXdCO0FBQ3ZCO0lBQVgsK0RBQVU7MkNBQXVCO0FBRnZCLFdBQVc7SUFEdkIsc0VBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQzdDLFdBQVcsQ0FxQnZCO0FBckJ1Qjs7Ozs7Ozs7O1VDOUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtZG9ncy8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS9vYnNlcnZhdGlvbi9hcnJheS1jaGFuZ2UtcmVjb3Jkcy5qcyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3MvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vb2JzZXJ2YXRpb24vYXJyYXktb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vZmFzdC1kb2dzLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3RlbXBsYXRpbmcvcmVwZWF0LmpzIiwid2VicGFjazovL2Zhc3QtZG9ncy8uL3NyYy9jb21wb25lbnRzL2JyZWVkLXNlYXJjaC50cyIsIndlYnBhY2s6Ly9mYXN0LWRvZ3Mvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVtcHR5QXJyYXkgfSBmcm9tIFwiLi4vcGxhdGZvcm1cIjtcbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXdTcGxpY2UoaW5kZXgsIHJlbW92ZWQsIGFkZGVkQ291bnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIHJlbW92ZWQ6IHJlbW92ZWQsXG4gICAgICAgIGFkZGVkQ291bnQ6IGFkZGVkQ291bnQsXG4gICAgfTtcbn1cbmNvbnN0IEVESVRfTEVBVkUgPSAwO1xuY29uc3QgRURJVF9VUERBVEUgPSAxO1xuY29uc3QgRURJVF9BREQgPSAyO1xuY29uc3QgRURJVF9ERUxFVEUgPSAzO1xuLy8gTm90ZTogVGhpcyBmdW5jdGlvbiBpcyAqYmFzZWQqIG9uIHRoZSBjb21wdXRhdGlvbiBvZiB0aGUgTGV2ZW5zaHRlaW5cbi8vIFwiZWRpdFwiIGRpc3RhbmNlLiBUaGUgb25lIGNoYW5nZSBpcyB0aGF0IFwidXBkYXRlc1wiIGFyZSB0cmVhdGVkIGFzIHR3b1xuLy8gZWRpdHMgLSBub3Qgb25lLiBXaXRoIEFycmF5IHNwbGljZXMsIGFuIHVwZGF0ZSBpcyByZWFsbHkgYSBkZWxldGVcbi8vIGZvbGxvd2VkIGJ5IGFuIGFkZC4gQnkgcmV0YWluaW5nIHRoaXMsIHdlIG9wdGltaXplIGZvciBcImtlZXBpbmdcIiB0aGVcbi8vIG1heGltdW0gYXJyYXkgaXRlbXMgaW4gdGhlIG9yaWdpbmFsIGFycmF5LiBGb3IgZXhhbXBsZTpcbi8vXG4vLyAgICd4eHh4MTIzJyAtPiAnMTIzeXl5eSdcbi8vXG4vLyBXaXRoIDEtZWRpdCB1cGRhdGVzLCB0aGUgc2hvcnRlc3QgcGF0aCB3b3VsZCBiZSBqdXN0IHRvIHVwZGF0ZSBhbGwgc2V2ZW5cbi8vIGNoYXJhY3RlcnMuIFdpdGggMi1lZGl0IHVwZGF0ZXMsIHdlIGRlbGV0ZSA0LCBsZWF2ZSAzLCBhbmQgYWRkIDQuIFRoaXNcbi8vIGxlYXZlcyB0aGUgc3Vic3RyaW5nICcxMjMnIGludGFjdC5cbmZ1bmN0aW9uIGNhbGNFZGl0RGlzdGFuY2VzKGN1cnJlbnQsIGN1cnJlbnRTdGFydCwgY3VycmVudEVuZCwgb2xkLCBvbGRTdGFydCwgb2xkRW5kKSB7XG4gICAgLy8gXCJEZWxldGlvblwiIGNvbHVtbnNcbiAgICBjb25zdCByb3dDb3VudCA9IG9sZEVuZCAtIG9sZFN0YXJ0ICsgMTtcbiAgICBjb25zdCBjb2x1bW5Db3VudCA9IGN1cnJlbnRFbmQgLSBjdXJyZW50U3RhcnQgKyAxO1xuICAgIGNvbnN0IGRpc3RhbmNlcyA9IG5ldyBBcnJheShyb3dDb3VudCk7XG4gICAgbGV0IG5vcnRoO1xuICAgIGxldCB3ZXN0O1xuICAgIC8vIFwiQWRkaXRpb25cIiByb3dzLiBJbml0aWFsaXplIG51bGwgY29sdW1uLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7ICsraSkge1xuICAgICAgICBkaXN0YW5jZXNbaV0gPSBuZXcgQXJyYXkoY29sdW1uQ291bnQpO1xuICAgICAgICBkaXN0YW5jZXNbaV1bMF0gPSBpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXplIG51bGwgcm93XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5Db3VudDsgKytqKSB7XG4gICAgICAgIGRpc3RhbmNlc1swXVtqXSA9IGo7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcm93Q291bnQ7ICsraSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IGNvbHVtbkNvdW50OyArK2opIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50W2N1cnJlbnRTdGFydCArIGogLSAxXSA9PT0gb2xkW29sZFN0YXJ0ICsgaSAtIDFdKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VzW2ldW2pdID0gZGlzdGFuY2VzW2kgLSAxXVtqIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub3J0aCA9IGRpc3RhbmNlc1tpIC0gMV1bal0gKyAxO1xuICAgICAgICAgICAgICAgIHdlc3QgPSBkaXN0YW5jZXNbaV1baiAtIDFdICsgMTtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXNbaV1bal0gPSBub3J0aCA8IHdlc3QgPyBub3J0aCA6IHdlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpc3RhbmNlcztcbn1cbi8vIFRoaXMgc3RhcnRzIGF0IHRoZSBmaW5hbCB3ZWlnaHQsIGFuZCB3YWxrcyBcImJhY2t3YXJkXCIgYnkgZmluZGluZ1xuLy8gdGhlIG1pbmltdW0gcHJldmlvdXMgd2VpZ2h0IHJlY3Vyc2l2ZWx5IHVudGlsIHRoZSBvcmlnaW4gb2YgdGhlIHdlaWdodFxuLy8gbWF0cml4LlxuZnVuY3Rpb24gc3BsaWNlT3BlcmF0aW9uc0Zyb21FZGl0RGlzdGFuY2VzKGRpc3RhbmNlcykge1xuICAgIGxldCBpID0gZGlzdGFuY2VzLmxlbmd0aCAtIDE7XG4gICAgbGV0IGogPSBkaXN0YW5jZXNbMF0ubGVuZ3RoIC0gMTtcbiAgICBsZXQgY3VycmVudCA9IGRpc3RhbmNlc1tpXVtqXTtcbiAgICBjb25zdCBlZGl0cyA9IFtdO1xuICAgIHdoaWxlIChpID4gMCB8fCBqID4gMCkge1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgZWRpdHMucHVzaChFRElUX0FERCk7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICAgICAgZWRpdHMucHVzaChFRElUX0RFTEVURSk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBub3J0aFdlc3QgPSBkaXN0YW5jZXNbaSAtIDFdW2ogLSAxXTtcbiAgICAgICAgY29uc3Qgd2VzdCA9IGRpc3RhbmNlc1tpIC0gMV1bal07XG4gICAgICAgIGNvbnN0IG5vcnRoID0gZGlzdGFuY2VzW2ldW2ogLSAxXTtcbiAgICAgICAgbGV0IG1pbjtcbiAgICAgICAgaWYgKHdlc3QgPCBub3J0aCkge1xuICAgICAgICAgICAgbWluID0gd2VzdCA8IG5vcnRoV2VzdCA/IHdlc3QgOiBub3J0aFdlc3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtaW4gPSBub3J0aCA8IG5vcnRoV2VzdCA/IG5vcnRoIDogbm9ydGhXZXN0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW4gPT09IG5vcnRoV2VzdCkge1xuICAgICAgICAgICAgaWYgKG5vcnRoV2VzdCA9PT0gY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGVkaXRzLnB1c2goRURJVF9MRUFWRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlZGl0cy5wdXNoKEVESVRfVVBEQVRFKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gbm9ydGhXZXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1pbiA9PT0gd2VzdCkge1xuICAgICAgICAgICAgZWRpdHMucHVzaChFRElUX0RFTEVURSk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBjdXJyZW50ID0gd2VzdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVkaXRzLnB1c2goRURJVF9BREQpO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgY3VycmVudCA9IG5vcnRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVkaXRzLnJldmVyc2UoKTtcbiAgICByZXR1cm4gZWRpdHM7XG59XG5mdW5jdGlvbiBzaGFyZWRQcmVmaXgoY3VycmVudCwgb2xkLCBzZWFyY2hMZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaExlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChjdXJyZW50W2ldICE9PSBvbGRbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWFyY2hMZW5ndGg7XG59XG5mdW5jdGlvbiBzaGFyZWRTdWZmaXgoY3VycmVudCwgb2xkLCBzZWFyY2hMZW5ndGgpIHtcbiAgICBsZXQgaW5kZXgxID0gY3VycmVudC5sZW5ndGg7XG4gICAgbGV0IGluZGV4MiA9IG9sZC5sZW5ndGg7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICB3aGlsZSAoY291bnQgPCBzZWFyY2hMZW5ndGggJiYgY3VycmVudFstLWluZGV4MV0gPT09IG9sZFstLWluZGV4Ml0pIHtcbiAgICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xufVxuZnVuY3Rpb24gaW50ZXJzZWN0KHN0YXJ0MSwgZW5kMSwgc3RhcnQyLCBlbmQyKSB7XG4gICAgLy8gRGlzam9pbnRcbiAgICBpZiAoZW5kMSA8IHN0YXJ0MiB8fCBlbmQyIDwgc3RhcnQxKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgLy8gQWRqYWNlbnRcbiAgICBpZiAoZW5kMSA9PT0gc3RhcnQyIHx8IGVuZDIgPT09IHN0YXJ0MSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgLy8gTm9uLXplcm8gaW50ZXJzZWN0LCBzcGFuMSBmaXJzdFxuICAgIGlmIChzdGFydDEgPCBzdGFydDIpIHtcbiAgICAgICAgaWYgKGVuZDEgPCBlbmQyKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5kMSAtIHN0YXJ0MjsgLy8gT3ZlcmxhcFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmQyIC0gc3RhcnQyOyAvLyBDb250YWluZWRcbiAgICB9XG4gICAgLy8gTm9uLXplcm8gaW50ZXJzZWN0LCBzcGFuMiBmaXJzdFxuICAgIGlmIChlbmQyIDwgZW5kMSkge1xuICAgICAgICByZXR1cm4gZW5kMiAtIHN0YXJ0MTsgLy8gT3ZlcmxhcFxuICAgIH1cbiAgICByZXR1cm4gZW5kMSAtIHN0YXJ0MTsgLy8gQ29udGFpbmVkXG59XG4vKipcbiAqIFNwbGljZSBQcm9qZWN0aW9uIGZ1bmN0aW9uczpcbiAqXG4gKiBBIHNwbGljZSBtYXAgaXMgYSByZXByZXNlbnRhdGlvbiBvZiBob3cgYSBwcmV2aW91cyBhcnJheSBvZiBpdGVtc1xuICogd2FzIHRyYW5zZm9ybWVkIGludG8gYSBuZXcgYXJyYXkgb2YgaXRlbXMuIENvbmNlcHR1YWxseSBpdCBpcyBhIGxpc3Qgb2ZcbiAqIHR1cGxlcyBvZlxuICpcbiAqICAgPGluZGV4LCByZW1vdmVkLCBhZGRlZENvdW50PlxuICpcbiAqIHdoaWNoIGFyZSBrZXB0IGluIGFzY2VuZGluZyBpbmRleCBvcmRlciBvZi4gVGhlIHR1cGxlIHJlcHJlc2VudHMgdGhhdCBhdFxuICogdGhlIHxpbmRleHwsIHxyZW1vdmVkfCBzZXF1ZW5jZSBvZiBpdGVtcyB3ZXJlIHJlbW92ZWQsIGFuZCBjb3VudGluZyBmb3J3YXJkXG4gKiBmcm9tIHxpbmRleHwsIHxhZGRlZENvdW50fCBpdGVtcyB3ZXJlIGFkZGVkLlxuICovXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQHJlbWFya3NcbiAqIExhY2tpbmcgaW5kaXZpZHVhbCBzcGxpY2UgbXV0YXRpb24gaW5mb3JtYXRpb24sIHRoZSBtaW5pbWFsIHNldCBvZlxuICogc3BsaWNlcyBjYW4gYmUgc3ludGhlc2l6ZWQgZ2l2ZW4gdGhlIHByZXZpb3VzIHN0YXRlIGFuZCBmaW5hbCBzdGF0ZSBvZiBhblxuICogYXJyYXkuIFRoZSBiYXNpYyBhcHByb2FjaCBpcyB0byBjYWxjdWxhdGUgdGhlIGVkaXQgZGlzdGFuY2UgbWF0cml4IGFuZFxuICogY2hvb3NlIHRoZSBzaG9ydGVzdCBwYXRoIHRocm91Z2ggaXQuXG4gKlxuICogQ29tcGxleGl0eTogTyhsICogcClcbiAqICAgbDogVGhlIGxlbmd0aCBvZiB0aGUgY3VycmVudCBhcnJheVxuICogICBwOiBUaGUgbGVuZ3RoIG9mIHRoZSBvbGQgYXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGNTcGxpY2VzKGN1cnJlbnQsIGN1cnJlbnRTdGFydCwgY3VycmVudEVuZCwgb2xkLCBvbGRTdGFydCwgb2xkRW5kKSB7XG4gICAgbGV0IHByZWZpeENvdW50ID0gMDtcbiAgICBsZXQgc3VmZml4Q291bnQgPSAwO1xuICAgIGNvbnN0IG1pbkxlbmd0aCA9IE1hdGgubWluKGN1cnJlbnRFbmQgLSBjdXJyZW50U3RhcnQsIG9sZEVuZCAtIG9sZFN0YXJ0KTtcbiAgICBpZiAoY3VycmVudFN0YXJ0ID09PSAwICYmIG9sZFN0YXJ0ID09PSAwKSB7XG4gICAgICAgIHByZWZpeENvdW50ID0gc2hhcmVkUHJlZml4KGN1cnJlbnQsIG9sZCwgbWluTGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRFbmQgPT09IGN1cnJlbnQubGVuZ3RoICYmIG9sZEVuZCA9PT0gb2xkLmxlbmd0aCkge1xuICAgICAgICBzdWZmaXhDb3VudCA9IHNoYXJlZFN1ZmZpeChjdXJyZW50LCBvbGQsIG1pbkxlbmd0aCAtIHByZWZpeENvdW50KTtcbiAgICB9XG4gICAgY3VycmVudFN0YXJ0ICs9IHByZWZpeENvdW50O1xuICAgIG9sZFN0YXJ0ICs9IHByZWZpeENvdW50O1xuICAgIGN1cnJlbnRFbmQgLT0gc3VmZml4Q291bnQ7XG4gICAgb2xkRW5kIC09IHN1ZmZpeENvdW50O1xuICAgIGlmIChjdXJyZW50RW5kIC0gY3VycmVudFN0YXJ0ID09PSAwICYmIG9sZEVuZCAtIG9sZFN0YXJ0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBlbXB0eUFycmF5O1xuICAgIH1cbiAgICBpZiAoY3VycmVudFN0YXJ0ID09PSBjdXJyZW50RW5kKSB7XG4gICAgICAgIGNvbnN0IHNwbGljZSA9IG5ld1NwbGljZShjdXJyZW50U3RhcnQsIFtdLCAwKTtcbiAgICAgICAgd2hpbGUgKG9sZFN0YXJ0IDwgb2xkRW5kKSB7XG4gICAgICAgICAgICBzcGxpY2UucmVtb3ZlZC5wdXNoKG9sZFtvbGRTdGFydCsrXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtzcGxpY2VdO1xuICAgIH1cbiAgICBlbHNlIGlmIChvbGRTdGFydCA9PT0gb2xkRW5kKSB7XG4gICAgICAgIHJldHVybiBbbmV3U3BsaWNlKGN1cnJlbnRTdGFydCwgW10sIGN1cnJlbnRFbmQgLSBjdXJyZW50U3RhcnQpXTtcbiAgICB9XG4gICAgY29uc3Qgb3BzID0gc3BsaWNlT3BlcmF0aW9uc0Zyb21FZGl0RGlzdGFuY2VzKGNhbGNFZGl0RGlzdGFuY2VzKGN1cnJlbnQsIGN1cnJlbnRTdGFydCwgY3VycmVudEVuZCwgb2xkLCBvbGRTdGFydCwgb2xkRW5kKSk7XG4gICAgY29uc3Qgc3BsaWNlcyA9IFtdO1xuICAgIGxldCBzcGxpY2UgPSB2b2lkIDA7XG4gICAgbGV0IGluZGV4ID0gY3VycmVudFN0YXJ0O1xuICAgIGxldCBvbGRJbmRleCA9IG9sZFN0YXJ0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3BzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHN3aXRjaCAob3BzW2ldKSB7XG4gICAgICAgICAgICBjYXNlIEVESVRfTEVBVkU6XG4gICAgICAgICAgICAgICAgaWYgKHNwbGljZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGljZXMucHVzaChzcGxpY2UpO1xuICAgICAgICAgICAgICAgICAgICBzcGxpY2UgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgb2xkSW5kZXgrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRURJVF9VUERBVEU6XG4gICAgICAgICAgICAgICAgaWYgKHNwbGljZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGljZSA9IG5ld1NwbGljZShpbmRleCwgW10sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGxpY2UuYWRkZWRDb3VudCsrO1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgc3BsaWNlLnJlbW92ZWQucHVzaChvbGRbb2xkSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBvbGRJbmRleCsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFRElUX0FERDpcbiAgICAgICAgICAgICAgICBpZiAoc3BsaWNlID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaWNlID0gbmV3U3BsaWNlKGluZGV4LCBbXSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwbGljZS5hZGRlZENvdW50Kys7XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRURJVF9ERUxFVEU6XG4gICAgICAgICAgICAgICAgaWYgKHNwbGljZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGljZSA9IG5ld1NwbGljZShpbmRleCwgW10sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGxpY2UucmVtb3ZlZC5wdXNoKG9sZFtvbGRJbmRleF0pO1xuICAgICAgICAgICAgICAgIG9sZEluZGV4Kys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBubyBkZWZhdWx0XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNwbGljZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHNwbGljZXMucHVzaChzcGxpY2UpO1xuICAgIH1cbiAgICByZXR1cm4gc3BsaWNlcztcbn1cbmNvbnN0ICRwdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG5mdW5jdGlvbiBtZXJnZVNwbGljZShzcGxpY2VzLCBpbmRleCwgcmVtb3ZlZCwgYWRkZWRDb3VudCkge1xuICAgIGNvbnN0IHNwbGljZSA9IG5ld1NwbGljZShpbmRleCwgcmVtb3ZlZCwgYWRkZWRDb3VudCk7XG4gICAgbGV0IGluc2VydGVkID0gZmFsc2U7XG4gICAgbGV0IGluc2VydGlvbk9mZnNldCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBzcGxpY2VzW2ldO1xuICAgICAgICBjdXJyZW50LmluZGV4ICs9IGluc2VydGlvbk9mZnNldDtcbiAgICAgICAgaWYgKGluc2VydGVkKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnRlcnNlY3RDb3VudCA9IGludGVyc2VjdChzcGxpY2UuaW5kZXgsIHNwbGljZS5pbmRleCArIHNwbGljZS5yZW1vdmVkLmxlbmd0aCwgY3VycmVudC5pbmRleCwgY3VycmVudC5pbmRleCArIGN1cnJlbnQuYWRkZWRDb3VudCk7XG4gICAgICAgIGlmIChpbnRlcnNlY3RDb3VudCA+PSAwKSB7XG4gICAgICAgICAgICAvLyBNZXJnZSB0aGUgdHdvIHNwbGljZXNcbiAgICAgICAgICAgIHNwbGljZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgaW5zZXJ0aW9uT2Zmc2V0IC09IGN1cnJlbnQuYWRkZWRDb3VudCAtIGN1cnJlbnQucmVtb3ZlZC5sZW5ndGg7XG4gICAgICAgICAgICBzcGxpY2UuYWRkZWRDb3VudCArPSBjdXJyZW50LmFkZGVkQ291bnQgLSBpbnRlcnNlY3RDb3VudDtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gc3BsaWNlLnJlbW92ZWQubGVuZ3RoICsgY3VycmVudC5yZW1vdmVkLmxlbmd0aCAtIGludGVyc2VjdENvdW50O1xuICAgICAgICAgICAgaWYgKCFzcGxpY2UuYWRkZWRDb3VudCAmJiAhZGVsZXRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAvLyBtZXJnZWQgc3BsaWNlIGlzIGEgbm9vcC4gZGlzY2FyZC5cbiAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlbW92ZWQgPSBjdXJyZW50LnJlbW92ZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGljZS5pbmRleCA8IGN1cnJlbnQuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29tZSBwcmVmaXggb2Ygc3BsaWNlLnJlbW92ZWQgaXMgcHJlcGVuZGVkIHRvIGN1cnJlbnQucmVtb3ZlZC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlcGVuZCA9IHNwbGljZS5yZW1vdmVkLnNsaWNlKDAsIGN1cnJlbnQuaW5kZXggLSBzcGxpY2UuaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAkcHVzaC5hcHBseShwcmVwZW5kLCBjdXJyZW50UmVtb3ZlZCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZW1vdmVkID0gcHJlcGVuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNwbGljZS5pbmRleCArIHNwbGljZS5yZW1vdmVkLmxlbmd0aCA+XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaW5kZXggKyBjdXJyZW50LmFkZGVkQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29tZSBzdWZmaXggb2Ygc3BsaWNlLnJlbW92ZWQgaXMgYXBwZW5kZWQgdG8gY3VycmVudC5yZW1vdmVkLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBlbmQgPSBzcGxpY2UucmVtb3ZlZC5zbGljZShjdXJyZW50LmluZGV4ICsgY3VycmVudC5hZGRlZENvdW50IC0gc3BsaWNlLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgJHB1c2guYXBwbHkoY3VycmVudFJlbW92ZWQsIGFwcGVuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwbGljZS5yZW1vdmVkID0gY3VycmVudFJlbW92ZWQ7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuaW5kZXggPCBzcGxpY2UuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaWNlLmluZGV4ID0gY3VycmVudC5pbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3BsaWNlLmluZGV4IDwgY3VycmVudC5pbmRleCkge1xuICAgICAgICAgICAgLy8gSW5zZXJ0IHNwbGljZSBoZXJlLlxuICAgICAgICAgICAgaW5zZXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc3BsaWNlcy5zcGxpY2UoaSwgMCwgc3BsaWNlKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHNwbGljZS5hZGRlZENvdW50IC0gc3BsaWNlLnJlbW92ZWQubGVuZ3RoO1xuICAgICAgICAgICAgY3VycmVudC5pbmRleCArPSBvZmZzZXQ7XG4gICAgICAgICAgICBpbnNlcnRpb25PZmZzZXQgKz0gb2Zmc2V0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaW5zZXJ0ZWQpIHtcbiAgICAgICAgc3BsaWNlcy5wdXNoKHNwbGljZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFNwbGljZXMoY2hhbmdlUmVjb3Jkcykge1xuICAgIGNvbnN0IHNwbGljZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBjaGFuZ2VSZWNvcmRzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgY29uc3QgcmVjb3JkID0gY2hhbmdlUmVjb3Jkc1tpXTtcbiAgICAgICAgbWVyZ2VTcGxpY2Uoc3BsaWNlcywgcmVjb3JkLmluZGV4LCByZWNvcmQucmVtb3ZlZCwgcmVjb3JkLmFkZGVkQ291bnQpO1xuICAgIH1cbiAgICByZXR1cm4gc3BsaWNlcztcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0QXJyYXlTcGxpY2VzKGFycmF5LCBjaGFuZ2VSZWNvcmRzKSB7XG4gICAgbGV0IHNwbGljZXMgPSBbXTtcbiAgICBjb25zdCBpbml0aWFsU3BsaWNlcyA9IGNyZWF0ZUluaXRpYWxTcGxpY2VzKGNoYW5nZVJlY29yZHMpO1xuICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGluaXRpYWxTcGxpY2VzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgY29uc3Qgc3BsaWNlID0gaW5pdGlhbFNwbGljZXNbaV07XG4gICAgICAgIGlmIChzcGxpY2UuYWRkZWRDb3VudCA9PT0gMSAmJiBzcGxpY2UucmVtb3ZlZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGlmIChzcGxpY2UucmVtb3ZlZFswXSAhPT0gYXJyYXlbc3BsaWNlLmluZGV4XSkge1xuICAgICAgICAgICAgICAgIHNwbGljZXMucHVzaChzcGxpY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgc3BsaWNlcyA9IHNwbGljZXMuY29uY2F0KGNhbGNTcGxpY2VzKGFycmF5LCBzcGxpY2UuaW5kZXgsIHNwbGljZS5pbmRleCArIHNwbGljZS5hZGRlZENvdW50LCBzcGxpY2UucmVtb3ZlZCwgMCwgc3BsaWNlLnJlbW92ZWQubGVuZ3RoKSk7XG4gICAgfVxuICAgIHJldHVybiBzcGxpY2VzO1xufVxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgY2FsY1NwbGljZXMsIG5ld1NwbGljZSwgcHJvamVjdEFycmF5U3BsaWNlcyB9IGZyb20gXCIuL2FycmF5LWNoYW5nZS1yZWNvcmRzXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyU2V0IH0gZnJvbSBcIi4vbm90aWZpZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi9vYnNlcnZhYmxlXCI7XG5sZXQgYXJyYXlPYnNlcnZhdGlvbkVuYWJsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGFkanVzdEluZGV4KGNoYW5nZVJlY29yZCwgYXJyYXkpIHtcbiAgICBsZXQgaW5kZXggPSBjaGFuZ2VSZWNvcmQuaW5kZXg7XG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgaWYgKGluZGV4ID4gYXJyYXlMZW5ndGgpIHtcbiAgICAgICAgaW5kZXggPSBhcnJheUxlbmd0aCAtIGNoYW5nZVJlY29yZC5hZGRlZENvdW50O1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgaW5kZXggPVxuICAgICAgICAgICAgYXJyYXlMZW5ndGggKyBjaGFuZ2VSZWNvcmQucmVtb3ZlZC5sZW5ndGggKyBpbmRleCAtIGNoYW5nZVJlY29yZC5hZGRlZENvdW50O1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gICAgY2hhbmdlUmVjb3JkLmluZGV4ID0gaW5kZXg7XG4gICAgcmV0dXJuIGNoYW5nZVJlY29yZDtcbn1cbmNsYXNzIEFycmF5T2JzZXJ2ZXIgZXh0ZW5kcyBTdWJzY3JpYmVyU2V0IHtcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UpIHtcbiAgICAgICAgc3VwZXIoc291cmNlKTtcbiAgICAgICAgdGhpcy5vbGRDb2xsZWN0aW9uID0gdm9pZCAwO1xuICAgICAgICB0aGlzLnNwbGljZXMgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMubmVlZHNRdWV1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FsbCA9IHRoaXMuZmx1c2g7XG4gICAgICAgIHNvdXJjZS4kZmFzdENvbnRyb2xsZXIgPSB0aGlzO1xuICAgIH1cbiAgICBhZGRTcGxpY2Uoc3BsaWNlKSB7XG4gICAgICAgIGlmICh0aGlzLnNwbGljZXMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdGhpcy5zcGxpY2VzID0gW3NwbGljZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwbGljZXMucHVzaChzcGxpY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5lZWRzUXVldWUpIHtcbiAgICAgICAgICAgIHRoaXMubmVlZHNRdWV1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgRE9NLnF1ZXVlVXBkYXRlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2V0KG9sZENvbGxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5vbGRDb2xsZWN0aW9uID0gb2xkQ29sbGVjdGlvbjtcbiAgICAgICAgaWYgKHRoaXMubmVlZHNRdWV1ZSkge1xuICAgICAgICAgICAgdGhpcy5uZWVkc1F1ZXVlID0gZmFsc2U7XG4gICAgICAgICAgICBET00ucXVldWVVcGRhdGUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmx1c2goKSB7XG4gICAgICAgIGNvbnN0IHNwbGljZXMgPSB0aGlzLnNwbGljZXM7XG4gICAgICAgIGNvbnN0IG9sZENvbGxlY3Rpb24gPSB0aGlzLm9sZENvbGxlY3Rpb247XG4gICAgICAgIGlmIChzcGxpY2VzID09PSB2b2lkIDAgJiYgb2xkQ29sbGVjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZWVkc1F1ZXVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcGxpY2VzID0gdm9pZCAwO1xuICAgICAgICB0aGlzLm9sZENvbGxlY3Rpb24gPSB2b2lkIDA7XG4gICAgICAgIGNvbnN0IGZpbmFsU3BsaWNlcyA9IG9sZENvbGxlY3Rpb24gPT09IHZvaWQgMFxuICAgICAgICAgICAgPyBwcm9qZWN0QXJyYXlTcGxpY2VzKHRoaXMuc291cmNlLCBzcGxpY2VzKVxuICAgICAgICAgICAgOiBjYWxjU3BsaWNlcyh0aGlzLnNvdXJjZSwgMCwgdGhpcy5zb3VyY2UubGVuZ3RoLCBvbGRDb2xsZWN0aW9uLCAwLCBvbGRDb2xsZWN0aW9uLmxlbmd0aCk7XG4gICAgICAgIHRoaXMubm90aWZ5KGZpbmFsU3BsaWNlcyk7XG4gICAgfVxufVxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXJlc3QtcGFyYW1zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cbi8qKlxuICogRW5hYmxlcyB0aGUgYXJyYXkgb2JzZXJ2YXRpb24gbWVjaGFuaXNtLlxuICogQHJlbWFya3NcbiAqIEFycmF5IG9ic2VydmF0aW9uIGlzIGVuYWJsZWQgYXV0b21hdGljYWxseSB3aGVuIHVzaW5nIHRoZVxuICoge0BsaW5rIFJlcGVhdERpcmVjdGl2ZX0sIHNvIGNhbGxpbmcgdGhpcyBBUEkgbWFudWFsbHkgaXNcbiAqIG5vdCB0eXBpY2FsbHkgbmVjZXNzYXJ5LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQXJyYXlPYnNlcnZhdGlvbigpIHtcbiAgICBpZiAoYXJyYXlPYnNlcnZhdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhcnJheU9ic2VydmF0aW9uRW5hYmxlZCA9IHRydWU7XG4gICAgT2JzZXJ2YWJsZS5zZXRBcnJheU9ic2VydmVyRmFjdG9yeSgoY29sbGVjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5T2JzZXJ2ZXIoY29sbGVjdGlvbik7XG4gICAgfSk7XG4gICAgY29uc3QgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbiAgICBjb25zdCBwb3AgPSBhcnJheVByb3RvLnBvcDtcbiAgICBjb25zdCBwdXNoID0gYXJyYXlQcm90by5wdXNoO1xuICAgIGNvbnN0IHJldmVyc2UgPSBhcnJheVByb3RvLnJldmVyc2U7XG4gICAgY29uc3Qgc2hpZnQgPSBhcnJheVByb3RvLnNoaWZ0O1xuICAgIGNvbnN0IHNvcnQgPSBhcnJheVByb3RvLnNvcnQ7XG4gICAgY29uc3Qgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG4gICAgY29uc3QgdW5zaGlmdCA9IGFycmF5UHJvdG8udW5zaGlmdDtcbiAgICBhcnJheVByb3RvLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgbm90RW1wdHkgPSB0aGlzLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IG1ldGhvZENhbGxSZXN1bHQgPSBwb3AuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuJGZhc3RDb250cm9sbGVyO1xuICAgICAgICBpZiAobyAhPT0gdm9pZCAwICYmIG5vdEVtcHR5KSB7XG4gICAgICAgICAgICBvLmFkZFNwbGljZShuZXdTcGxpY2UodGhpcy5sZW5ndGgsIFttZXRob2RDYWxsUmVzdWx0XSwgMCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRob2RDYWxsUmVzdWx0O1xuICAgIH07XG4gICAgYXJyYXlQcm90by5wdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZXRob2RDYWxsUmVzdWx0ID0gcHVzaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zdCBvID0gdGhpcy4kZmFzdENvbnRyb2xsZXI7XG4gICAgICAgIGlmIChvICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG8uYWRkU3BsaWNlKGFkanVzdEluZGV4KG5ld1NwbGljZSh0aGlzLmxlbmd0aCAtIGFyZ3VtZW50cy5sZW5ndGgsIFtdLCBhcmd1bWVudHMubGVuZ3RoKSwgdGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRob2RDYWxsUmVzdWx0O1xuICAgIH07XG4gICAgYXJyYXlQcm90by5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgb2xkQXJyYXk7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLiRmYXN0Q29udHJvbGxlcjtcbiAgICAgICAgaWYgKG8gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgby5mbHVzaCgpO1xuICAgICAgICAgICAgb2xkQXJyYXkgPSB0aGlzLnNsaWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0aG9kQ2FsbFJlc3VsdCA9IHJldmVyc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKG8gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgby5yZXNldChvbGRBcnJheSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGhvZENhbGxSZXN1bHQ7XG4gICAgfTtcbiAgICBhcnJheVByb3RvLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBub3RFbXB0eSA9IHRoaXMubGVuZ3RoID4gMDtcbiAgICAgICAgY29uc3QgbWV0aG9kQ2FsbFJlc3VsdCA9IHNoaWZ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLiRmYXN0Q29udHJvbGxlcjtcbiAgICAgICAgaWYgKG8gIT09IHZvaWQgMCAmJiBub3RFbXB0eSkge1xuICAgICAgICAgICAgby5hZGRTcGxpY2UobmV3U3BsaWNlKDAsIFttZXRob2RDYWxsUmVzdWx0XSwgMCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRob2RDYWxsUmVzdWx0O1xuICAgIH07XG4gICAgYXJyYXlQcm90by5zb3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgb2xkQXJyYXk7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLiRmYXN0Q29udHJvbGxlcjtcbiAgICAgICAgaWYgKG8gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgby5mbHVzaCgpO1xuICAgICAgICAgICAgb2xkQXJyYXkgPSB0aGlzLnNsaWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0aG9kQ2FsbFJlc3VsdCA9IHNvcnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKG8gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgby5yZXNldChvbGRBcnJheSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGhvZENhbGxSZXN1bHQ7XG4gICAgfTtcbiAgICBhcnJheVByb3RvLnNwbGljZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWV0aG9kQ2FsbFJlc3VsdCA9IHNwbGljZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zdCBvID0gdGhpcy4kZmFzdENvbnRyb2xsZXI7XG4gICAgICAgIGlmIChvICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG8uYWRkU3BsaWNlKGFkanVzdEluZGV4KG5ld1NwbGljZSgrYXJndW1lbnRzWzBdLCBtZXRob2RDYWxsUmVzdWx0LCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50cy5sZW5ndGggLSAyIDogMCksIHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0aG9kQ2FsbFJlc3VsdDtcbiAgICB9O1xuICAgIGFycmF5UHJvdG8udW5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWV0aG9kQ2FsbFJlc3VsdCA9IHVuc2hpZnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuJGZhc3RDb250cm9sbGVyO1xuICAgICAgICBpZiAobyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBvLmFkZFNwbGljZShhZGp1c3RJbmRleChuZXdTcGxpY2UoMCwgW10sIGFyZ3VtZW50cy5sZW5ndGgpLCB0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGhvZENhbGxSZXN1bHQ7XG4gICAgfTtcbn1cbi8qIGVzbGludC1lbmFibGUgcHJlZmVyLXJlc3QtcGFyYW1zICovXG4vKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgfSBmcm9tIFwiLi4vb2JzZXJ2YXRpb24vb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgZW5hYmxlQXJyYXlPYnNlcnZhdGlvbiB9IGZyb20gXCIuLi9vYnNlcnZhdGlvbi9hcnJheS1vYnNlcnZlclwiO1xuaW1wb3J0IHsgZW1wdHlBcnJheSB9IGZyb20gXCIuLi9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgSFRNTERpcmVjdGl2ZSB9IGZyb20gXCIuL2h0bWwtZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBIVE1MVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcbmNvbnN0IGRlZmF1bHRSZXBlYXRPcHRpb25zID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgcG9zaXRpb25pbmc6IGZhbHNlLFxufSk7XG5mdW5jdGlvbiBiaW5kV2l0aG91dFBvc2l0aW9uaW5nKHZpZXcsIGl0ZW1zLCBpbmRleCwgY29udGV4dCkge1xuICAgIHZpZXcuYmluZChpdGVtc1tpbmRleF0sIGNvbnRleHQpO1xufVxuZnVuY3Rpb24gYmluZFdpdGhQb3NpdGlvbmluZyh2aWV3LCBpdGVtcywgaW5kZXgsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBPYmplY3QuY3JlYXRlKGNvbnRleHQpO1xuICAgIGNoaWxkQ29udGV4dC5pbmRleCA9IGluZGV4O1xuICAgIGNoaWxkQ29udGV4dC5sZW5ndGggPSBpdGVtcy5sZW5ndGg7XG4gICAgdmlldy5iaW5kKGl0ZW1zW2luZGV4XSwgY2hpbGRDb250ZXh0KTtcbn1cbi8qKlxuICogQSBiZWhhdmlvciB0aGF0IHJlbmRlcnMgYSB0ZW1wbGF0ZSBmb3IgZWFjaCBpdGVtIGluIGFuIGFycmF5LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgUmVwZWF0QmVoYXZpb3Ige1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUmVwZWF0QmVoYXZpb3IuXG4gICAgICogQHBhcmFtIGxvY2F0aW9uIC0gVGhlIGxvY2F0aW9uIGluIHRoZSBET00gdG8gcmVuZGVyIHRoZSByZXBlYXQuXG4gICAgICogQHBhcmFtIGl0ZW1zQmluZGluZyAtIFRoZSBhcnJheSB0byByZW5kZXIuXG4gICAgICogQHBhcmFtIGlzSXRlbXNCaW5kaW5nVm9sYXRpbGUgLSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaXRlbXMgYmluZGluZyBoYXMgdm9sYXRpbGUgZGVwZW5kZW5jaWVzLlxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUJpbmRpbmcgLSBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyIGZvciBlYWNoIGl0ZW0uXG4gICAgICogQHBhcmFtIGlzVGVtcGxhdGVCaW5kaW5nVm9sYXRpbGUgLSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdGVtcGxhdGUgYmluZGluZyBoYXMgdm9sYXRpbGUgZGVwZW5kZW5jaWVzLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyB1c2VkIHRvIHR1cm4gb24gc3BlY2lhbCByZXBlYXQgZmVhdHVyZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobG9jYXRpb24sIGl0ZW1zQmluZGluZywgaXNJdGVtc0JpbmRpbmdWb2xhdGlsZSwgdGVtcGxhdGVCaW5kaW5nLCBpc1RlbXBsYXRlQmluZGluZ1ZvbGF0aWxlLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgdGhpcy5pdGVtc0JpbmRpbmcgPSBpdGVtc0JpbmRpbmc7XG4gICAgICAgIHRoaXMudGVtcGxhdGVCaW5kaW5nID0gdGVtcGxhdGVCaW5kaW5nO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgICAgIHRoaXMudmlld3MgPSBbXTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IG51bGw7XG4gICAgICAgIHRoaXMuaXRlbXNPYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMub3JpZ2luYWxDb250ZXh0ID0gdm9pZCAwO1xuICAgICAgICB0aGlzLmNoaWxkQ29udGV4dCA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5iaW5kVmlldyA9IGJpbmRXaXRob3V0UG9zaXRpb25pbmc7XG4gICAgICAgIHRoaXMuaXRlbXNCaW5kaW5nT2JzZXJ2ZXIgPSBPYnNlcnZhYmxlLmJpbmRpbmcoaXRlbXNCaW5kaW5nLCB0aGlzLCBpc0l0ZW1zQmluZGluZ1ZvbGF0aWxlKTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUJpbmRpbmdPYnNlcnZlciA9IE9ic2VydmFibGUuYmluZGluZyh0ZW1wbGF0ZUJpbmRpbmcsIHRoaXMsIGlzVGVtcGxhdGVCaW5kaW5nVm9sYXRpbGUpO1xuICAgICAgICBpZiAob3B0aW9ucy5wb3NpdGlvbmluZykge1xuICAgICAgICAgICAgdGhpcy5iaW5kVmlldyA9IGJpbmRXaXRoUG9zaXRpb25pbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIGJlaGF2aW9yIHRvIHRoZSBzb3VyY2UuXG4gICAgICogQHBhcmFtIHNvdXJjZSAtIFRoZSBzb3VyY2UgdG8gYmluZCB0by5cbiAgICAgKiBAcGFyYW0gY29udGV4dCAtIFRoZSBleGVjdXRpb24gY29udGV4dCB0aGF0IHRoZSBiaW5kaW5nIGlzIG9wZXJhdGluZyB3aXRoaW4uXG4gICAgICovXG4gICAgYmluZChzb3VyY2UsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMub3JpZ2luYWxDb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5jaGlsZENvbnRleHQgPSBPYmplY3QuY3JlYXRlKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmNoaWxkQ29udGV4dC5wYXJlbnQgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMuY2hpbGRDb250ZXh0LnBhcmVudENvbnRleHQgPSB0aGlzLm9yaWdpbmFsQ29udGV4dDtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXNCaW5kaW5nT2JzZXJ2ZXIub2JzZXJ2ZShzb3VyY2UsIHRoaXMub3JpZ2luYWxDb250ZXh0KTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVCaW5kaW5nT2JzZXJ2ZXIub2JzZXJ2ZShzb3VyY2UsIHRoaXMub3JpZ2luYWxDb250ZXh0KTtcbiAgICAgICAgdGhpcy5vYnNlcnZlSXRlbXModHJ1ZSk7XG4gICAgICAgIHRoaXMucmVmcmVzaEFsbFZpZXdzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgdGhpcyBiZWhhdmlvciBmcm9tIHRoZSBzb3VyY2UuXG4gICAgICogQHBhcmFtIHNvdXJjZSAtIFRoZSBzb3VyY2UgdG8gdW5iaW5kIGZyb20uXG4gICAgICovXG4gICAgdW5iaW5kKCkge1xuICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5pdGVtc09ic2VydmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zT2JzZXJ2ZXIudW5zdWJzY3JpYmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bmJpbmRBbGxWaWV3cygpO1xuICAgICAgICB0aGlzLml0ZW1zQmluZGluZ09ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUJpbmRpbmdPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBoYW5kbGVDaGFuZ2Uoc291cmNlLCBhcmdzKSB7XG4gICAgICAgIGlmIChzb3VyY2UgPT09IHRoaXMuaXRlbXNCaW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtc0JpbmRpbmdPYnNlcnZlci5vYnNlcnZlKHRoaXMuc291cmNlLCB0aGlzLm9yaWdpbmFsQ29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJdGVtcygpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQWxsVmlld3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzb3VyY2UgPT09IHRoaXMudGVtcGxhdGVCaW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZUJpbmRpbmdPYnNlcnZlci5vYnNlcnZlKHRoaXMuc291cmNlLCB0aGlzLm9yaWdpbmFsQ29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hBbGxWaWV3cyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlld3MoYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb2JzZXJ2ZUl0ZW1zKGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gZW1wdHlBcnJheTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRPYnNlcnZlciA9IHRoaXMuaXRlbXNPYnNlcnZlcjtcbiAgICAgICAgY29uc3QgbmV3T2JzZXJ2ZXIgPSAodGhpcy5pdGVtc09ic2VydmVyID0gT2JzZXJ2YWJsZS5nZXROb3RpZmllcih0aGlzLml0ZW1zKSk7XG4gICAgICAgIGNvbnN0IGhhc05ld09ic2VydmVyID0gb2xkT2JzZXJ2ZXIgIT09IG5ld09ic2VydmVyO1xuICAgICAgICBpZiAoaGFzTmV3T2JzZXJ2ZXIgJiYgb2xkT2JzZXJ2ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9sZE9ic2VydmVyLnVuc3Vic2NyaWJlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNOZXdPYnNlcnZlciB8fCBmb3JjZSkge1xuICAgICAgICAgICAgbmV3T2JzZXJ2ZXIuc3Vic2NyaWJlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVZpZXdzKHNwbGljZXMpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5jaGlsZENvbnRleHQ7XG4gICAgICAgIGNvbnN0IHZpZXdzID0gdGhpcy52aWV3cztcbiAgICAgICAgY29uc3QgdG90YWxSZW1vdmVkID0gW107XG4gICAgICAgIGNvbnN0IGJpbmRWaWV3ID0gdGhpcy5iaW5kVmlldztcbiAgICAgICAgbGV0IHJlbW92ZURlbHRhID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gc3BsaWNlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxpY2UgPSBzcGxpY2VzW2ldO1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZCA9IHNwbGljZS5yZW1vdmVkO1xuICAgICAgICAgICAgdG90YWxSZW1vdmVkLnB1c2goLi4udmlld3Muc3BsaWNlKHNwbGljZS5pbmRleCArIHJlbW92ZURlbHRhLCByZW1vdmVkLmxlbmd0aCkpO1xuICAgICAgICAgICAgcmVtb3ZlRGVsdGEgLT0gc3BsaWNlLmFkZGVkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHNwbGljZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaWNlID0gc3BsaWNlc1tpXTtcbiAgICAgICAgICAgIGxldCBhZGRJbmRleCA9IHNwbGljZS5pbmRleDtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IGFkZEluZGV4ICsgc3BsaWNlLmFkZGVkQ291bnQ7XG4gICAgICAgICAgICBmb3IgKDsgYWRkSW5kZXggPCBlbmQ7ICsrYWRkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZWlnaGJvciA9IHZpZXdzW2FkZEluZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IG5laWdoYm9yID8gbmVpZ2hib3IuZmlyc3RDaGlsZCA6IHRoaXMubG9jYXRpb247XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IHRvdGFsUmVtb3ZlZC5sZW5ndGggPiAwID8gdG90YWxSZW1vdmVkLnNoaWZ0KCkgOiB0ZW1wbGF0ZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICB2aWV3cy5zcGxpY2UoYWRkSW5kZXgsIDAsIHZpZXcpO1xuICAgICAgICAgICAgICAgIGJpbmRWaWV3KHZpZXcsIGl0ZW1zLCBhZGRJbmRleCwgY2hpbGRDb250ZXh0KTtcbiAgICAgICAgICAgICAgICB2aWV3Lmluc2VydEJlZm9yZShsb2NhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gdG90YWxSZW1vdmVkLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgIHRvdGFsUmVtb3ZlZFtpXS5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gdmlld3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb250ZXh0ID0gdmlld3NbaV0uY29udGV4dDtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGV4dC5sZW5ndGggPSBpaTtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGV4dC5pbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVmcmVzaEFsbFZpZXdzKHRlbXBsYXRlQ2hhbmdlZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5jaGlsZENvbnRleHQ7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uO1xuICAgICAgICBjb25zdCBiaW5kVmlldyA9IHRoaXMuYmluZFZpZXc7XG4gICAgICAgIGxldCBpdGVtc0xlbmd0aCA9IGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgbGV0IHZpZXdzID0gdGhpcy52aWV3cztcbiAgICAgICAgbGV0IHZpZXdzTGVuZ3RoID0gdmlld3MubGVuZ3RoO1xuICAgICAgICBpZiAoaXRlbXNMZW5ndGggPT09IDAgfHwgdGVtcGxhdGVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAvLyBhbGwgdmlld3MgbmVlZCB0byBiZSByZW1vdmVkXG4gICAgICAgICAgICBIVE1MVmlldy5kaXNwb3NlQ29udGlndW91c0JhdGNoKHZpZXdzKTtcbiAgICAgICAgICAgIHZpZXdzTGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlld3NMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGFsbCB2aWV3cyBuZWVkIHRvIGJlIGNyZWF0ZWRcbiAgICAgICAgICAgIHRoaXMudmlld3MgPSB2aWV3cyA9IG5ldyBBcnJheShpdGVtc0xlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zTGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gdGVtcGxhdGUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgYmluZFZpZXcodmlldywgaXRlbXMsIGksIGNoaWxkQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgdmlld3NbaV0gPSB2aWV3O1xuICAgICAgICAgICAgICAgIHZpZXcuaW5zZXJ0QmVmb3JlKGxvY2F0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGF0dGVtcHQgdG8gcmV1c2UgZXhpc3Rpbmcgdmlld3Mgd2l0aCBuZXcgZGF0YVxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBpdGVtc0xlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPCB2aWV3c0xlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gdmlld3NbaV07XG4gICAgICAgICAgICAgICAgICAgIGJpbmRWaWV3KHZpZXcsIGl0ZW1zLCBpLCBjaGlsZENvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IHRlbXBsYXRlLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBiaW5kVmlldyh2aWV3LCBpdGVtcywgaSwgY2hpbGRDb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdmlld3MucHVzaCh2aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5pbnNlcnRCZWZvcmUobG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZWQgPSB2aWV3cy5zcGxpY2UoaSwgdmlld3NMZW5ndGggLSBpKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGl0ZW1zTGVuZ3RoID0gcmVtb3ZlZC5sZW5ndGg7IGkgPCBpdGVtc0xlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZFtpXS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5iaW5kQWxsVmlld3MoKSB7XG4gICAgICAgIGNvbnN0IHZpZXdzID0gdGhpcy52aWV3cztcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gdmlld3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgdmlld3NbaV0udW5iaW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgY29uZmlndXJlcyBsaXN0IHJlbmRlcmluZy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIFJlcGVhdERpcmVjdGl2ZSBleHRlbmRzIEhUTUxEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUmVwZWF0RGlyZWN0aXZlLlxuICAgICAqIEBwYXJhbSBpdGVtc0JpbmRpbmcgLSBUaGUgYmluZGluZyB0aGF0IHByb3ZpZGVzIHRoZSBhcnJheSB0byByZW5kZXIuXG4gICAgICogQHBhcmFtIHRlbXBsYXRlQmluZGluZyAtIFRoZSB0ZW1wbGF0ZSBiaW5kaW5nIHVzZWQgdG8gb2J0YWluIGEgdGVtcGxhdGUgdG8gcmVuZGVyIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyB1c2VkIHRvIHR1cm4gb24gc3BlY2lhbCByZXBlYXQgZmVhdHVyZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaXRlbXNCaW5kaW5nLCB0ZW1wbGF0ZUJpbmRpbmcsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pdGVtc0JpbmRpbmcgPSBpdGVtc0JpbmRpbmc7XG4gICAgICAgIHRoaXMudGVtcGxhdGVCaW5kaW5nID0gdGVtcGxhdGVCaW5kaW5nO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIHBsYWNlaG9sZGVyIHN0cmluZyBiYXNlZCBvbiB0aGUgZGlyZWN0aXZlJ3MgaW5kZXggd2l0aGluIHRoZSB0ZW1wbGF0ZS5cbiAgICAgICAgICogQHBhcmFtIGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBkaXJlY3RpdmUgd2l0aGluIHRoZSB0ZW1wbGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3JlYXRlUGxhY2Vob2xkZXIgPSBET00uY3JlYXRlQmxvY2tQbGFjZWhvbGRlcjtcbiAgICAgICAgZW5hYmxlQXJyYXlPYnNlcnZhdGlvbigpO1xuICAgICAgICB0aGlzLmlzSXRlbXNCaW5kaW5nVm9sYXRpbGUgPSBPYnNlcnZhYmxlLmlzVm9sYXRpbGVCaW5kaW5nKGl0ZW1zQmluZGluZyk7XG4gICAgICAgIHRoaXMuaXNUZW1wbGF0ZUJpbmRpbmdWb2xhdGlsZSA9IE9ic2VydmFibGUuaXNWb2xhdGlsZUJpbmRpbmcodGVtcGxhdGVCaW5kaW5nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJlaGF2aW9yIGZvciB0aGUgcHJvdmlkZWQgdGFyZ2V0IG5vZGUuXG4gICAgICogQHBhcmFtIHRhcmdldCAtIFRoZSBub2RlIGluc3RhbmNlIHRvIGNyZWF0ZSB0aGUgYmVoYXZpb3IgZm9yLlxuICAgICAqL1xuICAgIGNyZWF0ZUJlaGF2aW9yKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlcGVhdEJlaGF2aW9yKHRhcmdldCwgdGhpcy5pdGVtc0JpbmRpbmcsIHRoaXMuaXNJdGVtc0JpbmRpbmdWb2xhdGlsZSwgdGhpcy50ZW1wbGF0ZUJpbmRpbmcsIHRoaXMuaXNUZW1wbGF0ZUJpbmRpbmdWb2xhdGlsZSwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgZW5hYmxlcyBsaXN0IHJlbmRlcmluZy5cbiAqIEBwYXJhbSBpdGVtc0JpbmRpbmcgLSBUaGUgYXJyYXkgdG8gcmVuZGVyLlxuICogQHBhcmFtIHRlbXBsYXRlT3JUZW1wbGF0ZUJpbmRpbmcgLSBUaGUgdGVtcGxhdGUgb3IgYSB0ZW1wbGF0ZSBiaW5kaW5nIHVzZWQgb2J0YWluIGEgdGVtcGxhdGVcbiAqIHRvIHJlbmRlciBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyB1c2VkIHRvIHR1cm4gb24gc3BlY2lhbCByZXBlYXQgZmVhdHVyZXMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQoaXRlbXNCaW5kaW5nLCB0ZW1wbGF0ZU9yVGVtcGxhdGVCaW5kaW5nLCBvcHRpb25zID0gZGVmYXVsdFJlcGVhdE9wdGlvbnMpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZUJpbmRpbmcgPSB0eXBlb2YgdGVtcGxhdGVPclRlbXBsYXRlQmluZGluZyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gdGVtcGxhdGVPclRlbXBsYXRlQmluZGluZ1xuICAgICAgICA6ICgpID0+IHRlbXBsYXRlT3JUZW1wbGF0ZUJpbmRpbmc7XG4gICAgcmV0dXJuIG5ldyBSZXBlYXREaXJlY3RpdmUoaXRlbXNCaW5kaW5nLCB0ZW1wbGF0ZUJpbmRpbmcsIG9wdGlvbnMpO1xufVxuIiwiaW1wb3J0IHtcclxuICBGQVNURWxlbWVudCxcclxuICBjdXN0b21FbGVtZW50LFxyXG4gIGF0dHIsXHJcbiAgaHRtbCxcclxuICBjc3MsXHJcbiAgb2JzZXJ2YWJsZSxcclxuICB3aGVuLFxyXG4gIHJlcGVhdCxcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgRG9nQ2FyZCB9IGZyb20gXCIuL2RvZy1jYXJkXCI7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8QnJlZWRTZWFyY2g+YFxyXG4gIDxmYXN0LWJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiPlJhbmRvbSBCcmVlZDwvZmFzdC1idXR0b24+XHJcblxyXG4gICR7d2hlbihcclxuICAgICh4KSA9PiAheC5yZWFkeSxcclxuICAgIGh0bWw8QnJlZWRTZWFyY2g+YCA8ZGl2IGNsYXNzPVwicHQtMVwiPkxvYWRpbmcuLi48L2Rpdj5gXHJcbiAgKX1cclxuICAke3doZW4oXHJcbiAgICAoeCkgPT4geC5yZWFkeSxcclxuICAgIGh0bWw8QnJlZWRTZWFyY2g+YFxyXG4gICAgICA8ZG9nLWNhcmRcclxuICAgICAgICBicmVlZD1cIkhvdW5kIC0gQWZnaGFuXCJcclxuICAgICAgICB1cmw9XCJodHRwczovL2ltYWdlcy5kb2cuY2VvL2JyZWVkcy93b2xmaG91bmQtaXJpc2gvbjAyMDkwNzIxXzE5NTQuanBnXCJcclxuICAgICAgPjwvZG9nLWNhcmQ+XHJcbiAgICBgXHJcbiAgKX1cclxuICAke3JlcGVhdChcclxuICAgICh4KSA9PiB4LmJyZWVkcyxcclxuICAgIGh0bWw8QnJlZWRTZWFyY2g+YCA8ZG9nLWNhcmQgdXJsPVwiJHsoeCkgPT4geH1cIj48L2RvZy1jYXJkPiBgXHJcbiAgKX1cclxuYDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IGNzc2BcclxuICAucHQtMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGZldGNoUmFuZG9tQnJlZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2ltYWdlL3JhbmRvbVwiKTtcclxuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoeyBuYW1lOiBcImJyZWVkLXNlYXJjaFwiLCB0ZW1wbGF0ZSwgc3R5bGVzIH0pXHJcbmV4cG9ydCBjbGFzcyBCcmVlZFNlYXJjaCBleHRlbmRzIEZBU1RFbGVtZW50IHtcclxuICBAb2JzZXJ2YWJsZSByZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBvYnNlcnZhYmxlIGJyZWVkczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgIGNvbnN0IGJ0biA9IHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImZhc3QtYnV0dG9uXCIpO1xyXG5cclxuICAgIGlmICghYnRuKSByZXR1cm47XHJcblxyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUdldFJhbmRvbUJyZWVkLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlR2V0UmFuZG9tQnJlZWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBicmVlZCA9IGF3YWl0IGZldGNoUmFuZG9tQnJlZWQoKTtcclxuXHJcbiAgICB0aGlzLmJyZWVkcy5wdXNoKGJyZWVkLm1lc3NhZ2UpO1xyXG5cclxuICAgIHRoaXMucmVhZHkgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyZmYzZDEyZDU0MDNhOWI1M2ZiN1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==