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
import { FabricObject } from '../utils';
import Handler from './Handler';
declare class TooltipHandler {
    handler: Handler;
    tooltipEl: HTMLDivElement;
    target?: fabric.Object;
    constructor(handler: Handler);
    /**
     * Initialize tooltip
     *
     * @author salgum1114
     */
    initialize(): void;
    /**
     * Destroy tooltip
     *
     * @author salgum1114
     */
    destroy(): void;
    /**
     * Show tooltip
     *
     * @param {FabricObject} [target]
     */
    show: _.DebouncedFunc<(target?: FabricObject<import("../../../../../../../../Users/PARWEZ ZAFAR/Desktop/react_designer/react-design-editor/node_modules/@types/fabric/fabric-impl").Object>) => Promise<void>>;
    /**
     * Hide tooltip
     * @param {fabric.Object} [_target]
     */
    hide: _.DebouncedFunc<(_target?: import("../../../../../../../../Users/PARWEZ ZAFAR/Desktop/react_designer/react-design-editor/node_modules/@types/fabric/fabric-impl").Object) => void>;
}
export default TooltipHandler;
