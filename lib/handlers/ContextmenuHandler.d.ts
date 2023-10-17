/// <reference path="../../node_modules/@types/lodash/common/common.d.ts" />
/// <reference path="../../node_modules/@types/lodash/common/collection.d.ts" />
/// <reference path="../../node_modules/@types/lodash/common/date.d.ts" />
/// <reference path="../../node_modules/@types/lodash/common/function.d.ts" />
/// <reference path="../../node_modules/@types/lodash/common/lang.d.ts" />
/// <reference path="../../node_modules/@types/lodash/common/math.d.ts" />
/// <reference path="../../node_modules/@types/lodash/common/number.d.ts" />
/// <reference path="../../node_modules/@types/lodash/common/seq.d.ts" />
/// <reference path="../../node_modules/@types/lodash/common/string.d.ts" />
/// <reference path="../../node_modules/@types/lodash/common/util.d.ts" />
import { Handler } from '.';
declare class ContextmenuHandler {
    handler: Handler;
    contextmenuEl: HTMLDivElement;
    constructor(handler: Handler);
    /**
     * Initialize contextmenu
     *
     */
    initialize(): void;
    /**
     * Destroy contextmenu
     *
     */
    destory(): void;
    /**
     * Show context menu
     *
     */
    show: _.DebouncedFunc<(e: any, target: any) => Promise<void>>;
    /**
     * Hide context menu
     *
     */
    hide: _.DebouncedFunc<() => void>;
}
export default ContextmenuHandler;
