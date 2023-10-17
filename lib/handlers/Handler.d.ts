import { fabric } from 'fabric';
import { AlignmentHandler, AnimationHandler, ChartHandler, ContextmenuHandler, CropHandler, CustomHandler, DrawingHandler, ElementHandler, EventHandler, GridHandler, GuidelineHandler, ImageHandler, InteractionHandler, LinkHandler, NodeHandler, PortHandler, ShortcutHandler, TooltipHandler, TransactionHandler, WorkareaHandler, ZoomHandler } from '.';
import { CanvasOption, FabricCanvas, FabricGroup, FabricImage, FabricObject, FabricObjectOption, FabricObjects, GridOption, GuidelineOption, InteractionMode, KeyEvent, WorkareaObject, WorkareaOption } from '../utils';
import { TransactionEvent } from './TransactionHandler';
export interface HandlerCallback {
    /**
     * When has been added object in Canvas, Called function
     *
     */
    onAdd?: (object: FabricObject) => void;
    /**
     * Return contextmenu element
     *
     */
    onContext?: (el: HTMLDivElement, e: React.MouseEvent, target?: FabricObject) => Promise<any> | any;
    /**
     * Return tooltip element
     *
     */
    onTooltip?: (el: HTMLDivElement, target?: FabricObject) => Promise<any> | any;
    /**
     * When zoom, Called function
     */
    onZoom?: (zoomRatio: number) => void;
    /**
     * When clicked object, Called function
     *
     */
    onClick?: (canvas: FabricCanvas, target: FabricObject) => void;
    /**
     * When double clicked object, Called function
     *
     */
    onDblClick?: (canvas: FabricCanvas, target: FabricObject) => void;
    /**
     * When modified object, Called function
     */
    onModified?: (target: FabricObject) => void;
    /**
     * When select object, Called function
     *
     */
    onSelect?: (target: FabricObject) => void;
    /**
     * When has been removed object in Canvas, Called function
     *
     */
    onRemove?: (target: FabricObject) => void;
    /**
     * When has been undo or redo, Called function
     *
     */
    onTransaction?: (transaction: TransactionEvent) => void;
    /**
     * When has been changed interaction mode, Called function
     *
     */
    onInteraction?: (interactionMode: InteractionMode) => void;
    /**
     * When canvas has been loaded
     *
     */
    onLoad?: (handler: Handler, canvas?: fabric.Canvas) => void;
}
export interface HandlerOption {
    /**
     * Canvas id
     * @type {string}
     */
    id?: string;
    /**
     * Canvas object
     * @type {FabricCanvas}
     */
    canvas?: FabricCanvas;
    /**
     * Canvas parent element
     * @type {HTMLDivElement}
     */
    container?: HTMLDivElement;
    /**
     * Canvas editable
     * @type {boolean}
     */
    editable?: boolean;
    /**
     * Canvas interaction mode
     * @type {InteractionMode}
     */
    interactionMode?: InteractionMode;
    /**
     * Persist properties for object
     * @type {string[]}
     */
    propertiesToInclude?: string[];
    /**
     * Minimum zoom ratio
     * @type {number}
     */
    minZoom?: number;
    /**
     * Maximum zoom ratio
     * @type {number}
     */
    maxZoom?: number;
    /**
     * Zoom ratio step
     * @type {number}
     */
    zoomStep?: number;
    /**
     * Workarea option
     * @type {WorkareaOption}
     */
    workareaOption?: WorkareaOption;
    /**
     * Canvas option
     * @type {CanvasOption}
     */
    canvasOption?: CanvasOption;
    /**
     * Grid option
     * @type {GridOption}
     */
    gridOption?: GridOption;
    /**
     * Default option for Fabric Object
     * @type {FabricObjectOption}
     */
    objectOption?: FabricObjectOption;
    /**
     * Guideline option
     * @type {GuidelineOption}
     */
    guidelineOption?: GuidelineOption;
    /**
     * Whether to use zoom
     * @type {boolean}
     */
    zoomEnabled?: boolean;
    /**
     * ActiveSelection option
     * @type {Partial<FabricObjectOption<fabric.ActiveSelection>>}
     */
    activeSelectionOption?: Partial<FabricObjectOption<fabric.ActiveSelection>>;
    /**
     * Canvas width
     * @type {number}
     */
    width?: number;
    /**
     * Canvas height
     * @type {number}
     */
    height?: number;
    /**
     * Keyboard event in Canvas
     * @type {KeyEvent}
     */
    keyEvent?: KeyEvent;
    /**
     * Append custom objects
     * @type {{ [key: string]: any }}
     */
    fabricObjects?: FabricObjects;
    handlers?: {
        [key: string]: CustomHandler;
    };
    [key: string]: any;
}
export declare type HandlerOptions = HandlerOption & HandlerCallback;
/**
 * Main handler for Canvas
 * @class Handler
 * @implements {HandlerOptions}
 */
declare class Handler implements HandlerOptions {
    id: string;
    canvas: FabricCanvas;
    workarea: WorkareaObject;
    container: HTMLDivElement;
    editable: boolean;
    interactionMode: InteractionMode;
    minZoom: number;
    maxZoom: number;
    zoomStep: number;
    propertiesToInclude?: string[];
    workareaOption?: WorkareaOption;
    canvasOption?: CanvasOption;
    gridOption?: GridOption;
    objectOption?: FabricObjectOption;
    guidelineOption?: GuidelineOption;
    keyEvent?: KeyEvent;
    activeSelectionOption?: Partial<FabricObjectOption<fabric.ActiveSelection>>;
    fabricObjects?: FabricObjects;
    zoomEnabled?: boolean;
    width?: number;
    height?: number;
    onAdd?: (object: FabricObject) => void;
    onContext?: (el: HTMLDivElement, e: React.MouseEvent, target?: FabricObject) => Promise<any>;
    onTooltip?: (el: HTMLDivElement, target?: FabricObject) => Promise<any>;
    onZoom?: (zoomRatio: number) => void;
    onClick?: (canvas: FabricCanvas, target: FabricObject) => void;
    onDblClick?: (canvas: FabricCanvas, target: FabricObject) => void;
    onModified?: (target: FabricObject) => void;
    onSelect?: (target: FabricObject) => void;
    onRemove?: (target: FabricObject) => void;
    onTransaction?: (transaction: TransactionEvent) => void;
    onInteraction?: (interactionMode: InteractionMode) => void;
    onLoad?: (handler: Handler, canvas?: fabric.Canvas) => void;
    imageHandler: ImageHandler;
    chartHandler: ChartHandler;
    elementHandler: ElementHandler;
    cropHandler: CropHandler;
    animationHandler: AnimationHandler;
    contextmenuHandler: ContextmenuHandler;
    tooltipHandler: TooltipHandler;
    zoomHandler: ZoomHandler;
    workareaHandler: WorkareaHandler;
    interactionHandler: InteractionHandler;
    transactionHandler: TransactionHandler;
    gridHandler: GridHandler;
    portHandler: PortHandler;
    linkHandler: LinkHandler;
    nodeHandler: NodeHandler;
    alignmentHandler: AlignmentHandler;
    guidelineHandler: GuidelineHandler;
    eventHandler: EventHandler;
    drawingHandler: DrawingHandler;
    shortcutHandler: ShortcutHandler;
    handlers: {
        [key: string]: CustomHandler;
    };
    objectMap: Record<string, FabricObject>;
    objects: FabricObject[];
    activeLine?: any;
    activeShape?: any;
    zoom: number;
    prevTarget?: FabricObject;
    target?: FabricObject;
    pointArray?: any[];
    lineArray?: any[];
    isCut: boolean;
    private isRequsetAnimFrame;
    private requestFrame;
    /**
     * Copied object
     *
     * @private
     * @type {*}
     */
    private clipboard;
    constructor(options: HandlerOptions);
    /**
     * Initialize handler
     *
     * @author salgum1114
     * @param {HandlerOptions} options
     */
    initialize(options: HandlerOptions): void;
    /**
     * Init class fields
     * @param {HandlerOptions} options
     */
    initOption: (options: HandlerOptions) => void;
    /**
     * Initialize callback
     * @param {HandlerOptions} options
     */
    initCallback: (options: HandlerOptions) => void;
    /**
     * Initialize handlers
     *
     */
    initHandler: () => void;
    /**
     * Get primary object
     * @returns {FabricObject[]}
     */
    getObjects: () => FabricObject<fabric.Object>[];
    /**
     * Set key pair
     * @param {keyof FabricObject} key
     * @param {*} value
     * @returns
     */
    set: (key: string | number, value: any) => void;
    /**
     * Set option
     * @param {Partial<FabricObject>} option
     * @returns
     */
    setObject: (option: Partial<FabricObject<fabric.Object>>) => void;
    /**
     * Set key pair by object
     * @param {FabricObject} obj
     * @param {string} key
     * @param {*} value
     * @returns
     */
    setByObject: (obj: any, key: string, value: any) => void;
    /**
     * Set key pair by id
     * @param {string} id
     * @param {string} key
     * @param {*} value
     */
    setById: (id: string, key: string, value: any) => void;
    /**
     * Set partial by object
     * @param {FabricObject} obj
     * @param {FabricObjectOption} option
     * @returns
     */
    setByPartial: (obj: FabricObject<fabric.Object>, option: FabricObjectOption<fabric.IObjectOptions>) => void;
    /**
     * Set shadow
     * @param {fabric.Shadow} option
     * @returns
     */
    setShadow: (option: fabric.IShadowOptions) => void;
    /**
     * Set the image
     * @param {FabricImage} obj
     * @param {(File | string)} [source]
     * @returns
     */
    setImage: (obj: FabricImage, source?: string | File) => Promise<FabricImage>;
    /**
     * Set image by id
     * @param {string} id
     * @param {*} source
     * @returns
     */
    setImageById: (id: string, source: any) => Promise<FabricImage>;
    /**
     * Set visible
     * @param {boolean} [visible]
     * @returns
     */
    setVisible: (visible?: boolean) => void;
    /**
     * Set the position on Object
     *
     * @param {FabricObject} obj
     * @param {boolean} [centered]
     */
    centerObject: (obj: FabricObject<fabric.Object>, centered?: boolean) => void;
    /**
     * Add object
     * @param {FabricObjectOption} obj
     * @param {boolean} [centered=true]
     * @param {boolean} [loaded=false]
     * @param {boolean} [group=false]
     * @returns
     */
    add: (obj: FabricObjectOption<fabric.IObjectOptions>, centered?: boolean, loaded?: boolean, group?: boolean) => any;
    /**
     * Add group object
     *
     * @param {FabricGroup} obj
     * @param {boolean} [centered=true]
     * @param {boolean} [loaded=false]
     * @returns
     */
    addGroup: (obj: FabricGroup) => any;
    /**
     * Add iamge object
     * @param {FabricImage} obj
     * @returns
     */
    addImage: (obj: FabricImage) => FabricImage;
    /**
     * Remove object
     * @param {FabricObject} target
     * @returns {any}
     */
    remove: (target?: FabricObject<fabric.Object>) => void;
    /**
     * Remove object by id
     * @param {string} id
     */
    removeById: (id: string) => void;
    /**
     * Delete at origin object list
     * @param {string} id
     */
    removeOriginById: (id: string) => void;
    /**
     * Duplicate object
     * @returns
     */
    duplicate: () => void;
    /**
     * Duplicate object by id
     * @param {string} id
     * @returns
     */
    duplicateById: (id: string) => boolean;
    /**
     * Cut object
     *
     */
    cut: () => void;
    /**
     * Copy to clipboard
     *
     * @param {*} value
     */
    copyToClipboard: (value: any) => void;
    /**
     * Copy object
     *
     * @returns
     */
    copy: () => boolean;
    /**
     * Paste object
     *
     * @returns
     */
    paste: () => boolean;
    /**
     * Find object by object
     * @param {FabricObject} obj
     */
    find: (obj: FabricObject<fabric.Object>) => FabricObject<fabric.Object>;
    /**
     * Find object by id
     * @param {string} id
     * @returns {(FabricObject | null)}
     */
    findById: (id: string) => FabricObject<fabric.Object>;
    /**
     * Find object in origin list
     * @param {string} id
     * @returns
     */
    findOriginById: (id: string) => FabricObject<fabric.Object>;
    /**
     * Return origin object list
     * @param {string} id
     * @returns
     */
    findOriginByIdWithIndex: (id: string) => {
        object?: undefined;
        index?: undefined;
    } | {
        object: undefined;
        index: number;
    };
    /**
     * Select object
     * @param {FabricObject} obj
     * @param {boolean} [find]
     */
    select: (obj: FabricObject<fabric.Object>, find?: boolean) => void;
    /**
     * Select by id
     * @param {string} id
     */
    selectById: (id: string) => void;
    /**
     * Select all
     * @returns
     */
    selectAll: () => void;
    /**
     * Save origin width, height
     * @param {FabricObject} obj
     * @param {number} width
     * @param {number} height
     */
    originScaleToResize: (obj: FabricObject<fabric.Object>, width: number, height: number) => void;
    /**
     * When set the width, height, Adjust the size
     * @param {number} width
     * @param {number} height
     */
    scaleToResize: (width: number, height: number) => void;
    /**
     * Import json
     * @param {*} json
     * @param {(canvas: FabricCanvas) => void} [callback]
     */
    importJSON: (json: any, callback?: (canvas: FabricCanvas<fabric.Canvas>) => void) => Promise<FabricCanvas<fabric.Canvas>>;
    /**
     * Export json
     */
    exportJSON: () => FabricObject<fabric.Object>[];
    /**
     * Active selection to group
     * @returns
     */
    toGroup: (target?: FabricObject<fabric.Object>) => FabricObject<fabric.Group>;
    /**
     * Group to active selection
     * @returns
     */
    toActiveSelection: (target?: FabricObject<fabric.Object>) => any;
    /**
     * Bring forward
     */
    bringForward: () => void;
    /**
     * Bring to front
     */
    bringToFront: () => void;
    /**
     * Send backwards
     * @returns
     */
    sendBackwards: () => void;
    /**
     * Send to back
     */
    sendToBack: () => void;
    /**
     * Clear canvas
     * @param {boolean} [includeWorkarea=false]
     */
    clear: (includeWorkarea?: boolean) => void;
    /**
     * Start request animation frame
     */
    startRequestAnimFrame: () => void;
    /**
     * Stop request animation frame
     */
    stopRequestAnimFrame: () => void;
    /**
     * Save target object as image
     * @param {FabricObject} targetObject
     * @param {string} [option={ name: 'New Image', format: 'png', quality: 1 }]
     */
    saveImage: (targetObject: FabricObject<fabric.Object>, option?: {
        name: string;
        format: string;
        quality: number;
    }) => void;
    /**
     * Save canvas as image
     * @param {string} [option={ name: 'New Image', format: 'png', quality: 1 }]
     */
    saveCanvasImage: (option?: {
        name: string;
        format: string;
        quality: number;
    }) => void;
    /**
     * Sets "angle" of an instance with centered rotation
     *
     * @param {number} angle
     */
    rotate: (angle: number) => void;
    /**
     * Destroy canvas
     *
     */
    destroy: () => void;
    /**
     * Set canvas option
     *
     * @param {CanvasOption} canvasOption
     */
    setCanvasOption: (canvasOption: CanvasOption) => void;
    /**
     * Set keyboard event
     *
     * @param {KeyEvent} keyEvent
     */
    setKeyEvent: (keyEvent: KeyEvent) => void;
    /**
     * Set fabric objects
     *
     * @param {FabricObjects} fabricObjects
     */
    setFabricObjects: (fabricObjects: FabricObjects) => void;
    /**
     * Set workarea option
     *
     * @param {WorkareaOption} workareaOption
     */
    setWorkareaOption: (workareaOption: WorkareaOption) => void;
    /**
     * Set guideline option
     *
     * @param {GuidelineOption} guidelineOption
     */
    setGuidelineOption: (guidelineOption: GuidelineOption) => void;
    /**
     * Set grid option
     *
     * @param {GridOption} gridOption
     */
    setGridOption: (gridOption: GridOption) => void;
    /**
     * Set object option
     *
     * @param {FabricObjectOption} objectOption
     */
    setObjectOption: (objectOption: FabricObjectOption<fabric.IObjectOptions>) => void;
    /**
     * Set activeSelection option
     *
     * @param {Partial<FabricObjectOption<fabric.ActiveSelection>>} activeSelectionOption
     */
    setActiveSelectionOption: (activeSelectionOption: Partial<FabricObjectOption<fabric.ActiveSelection>>) => void;
    /**
     * Set propertiesToInclude
     *
     * @param {string[]} propertiesToInclude
     */
    setPropertiesToInclude: (propertiesToInclude: string[]) => void;
    /**
     * Register custom handler
     *
     * @param {string} name
     * @param {typeof CustomHandler} handler
     */
    registerHandler: (name: string, handler: typeof CustomHandler) => CustomHandler;
}
export default Handler;
