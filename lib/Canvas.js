"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_1 = require("fabric");
const react_1 = __importStar(require("react"));
const resize_observer_polyfill_1 = __importDefault(require("resize-observer-polyfill"));
const uuidv4_1 = require("uuidv4");
const constants_1 = require("./constants");
const Handler_1 = __importDefault(require("./handlers/Handler"));
require("./styles/canvas.less");
require("./styles/contextmenu.less");
require("./styles/fabricjs.less");
require("./styles/tooltip.less");
class InternalCanvas extends react_1.Component {
    constructor() {
        super(...arguments);
        this.containerRef = react_1.default.createRef();
        this.state = {
            id: uuidv4_1.uuid(),
            loaded: false,
        };
        this.createObserver = () => {
            this.resizeObserver = new resize_observer_polyfill_1.default((entries) => {
                const { width = 0, height = 0 } = (entries[0] && entries[0].contentRect) || {};
                this.handler.eventHandler.resize(width, height);
                if (!this.state.loaded) {
                    this.handleLoad();
                }
            });
            this.resizeObserver.observe(this.containerRef.current);
        };
        this.destroyObserver = () => {
            if (this.resizeObserver) {
                this.resizeObserver.disconnect();
                this.resizeObserver = null;
            }
        };
        this.handleLoad = () => {
            this.setState({
                loaded: true,
            }, () => {
                if (this.props.onLoad) {
                    this.props.onLoad(this.handler, this.canvas);
                }
            });
        };
    }
    componentDidMount() {
        const { editable, canvasOption, width, height, responsive, ...other } = this.props;
        const { id } = this.state;
        const mergedCanvasOption = Object.assign({}, constants_1.defaults.canvasOption, canvasOption, {
            width,
            height,
            selection: (typeof canvasOption ? .selection !== 'undefined' && canvasOption ? .selection :  : ) || editable,
        });
        this.canvas = new fabric_1.fabric.Canvas(`canvas_${id}`, mergedCanvasOption);
        this.canvas.setBackgroundColor(mergedCanvasOption.backgroundColor, this.canvas.renderAll.bind(this.canvas));
        this.canvas.renderAll();
        this.container = this.containerRef.current;
        this.handler = new Handler_1.default({
            id,
            width,
            height,
            editable,
            canvas: this.canvas,
            container: this.containerRef.current,
            canvasOption: mergedCanvasOption,
            ...other,
        });
        if (this.props.responsive) {
            this.createObserver();
        }
        else {
            this.handleLoad();
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.width !== prevProps.width || this.props.height !== prevProps.height) {
            this.handler.eventHandler.resize(this.props.width, this.props.height);
        }
        if (this.props.editable !== prevProps.editable) {
            this.handler.editable = this.props.editable;
        }
        if (this.props.responsive !== prevProps.responsive) {
            if (!this.props.responsive) {
                this.destroyObserver();
            }
            else {
                this.destroyObserver();
                this.createObserver();
            }
        }
        if (JSON.stringify(this.props.canvasOption) !== JSON.stringify(prevProps.canvasOption)) {
            this.handler.setCanvasOption(this.props.canvasOption);
        }
        if (JSON.stringify(this.props.keyEvent) !== JSON.stringify(prevProps.keyEvent)) {
            this.handler.setKeyEvent(this.props.keyEvent);
        }
        if (JSON.stringify(this.props.fabricObjects) !== JSON.stringify(prevProps.fabricObjects)) {
            this.handler.setFabricObjects(this.props.fabricObjects);
        }
        if (JSON.stringify(this.props.workareaOption) !== JSON.stringify(prevProps.workareaOption)) {
            this.handler.setWorkareaOption(this.props.workareaOption);
        }
        if (JSON.stringify(this.props.guidelineOption) !== JSON.stringify(prevProps.guidelineOption)) {
            this.handler.setGuidelineOption(this.props.guidelineOption);
        }
        if (JSON.stringify(this.props.objectOption) !== JSON.stringify(prevProps.objectOption)) {
            this.handler.setObjectOption(this.props.objectOption);
        }
        if (JSON.stringify(this.props.gridOption) !== JSON.stringify(prevProps.gridOption)) {
            this.handler.setGridOption(this.props.gridOption);
        }
        if (JSON.stringify(this.props.propertiesToInclude) !== JSON.stringify(prevProps.propertiesToInclude)) {
            this.handler.setPropertiesToInclude(this.props.propertiesToInclude);
        }
        if (JSON.stringify(this.props.activeSelectionOption) !== JSON.stringify(prevProps.activeSelectionOption)) {
            this.handler.setActiveSelectionOption(this.props.activeSelectionOption);
        }
    }
    componentWillUnmount() {
        this.destroyObserver();
        this.handler.destroy();
    }
    render() {
        const { style } = this.props;
        const { id } = this.state;
        return (react_1.default.createElement("div", { ref: this.containerRef, id: id, className: "rde-canvas", style: { width: '100%', height: '100%', ...style } },
            react_1.default.createElement("canvas", { id: `canvas_${id}` })));
    }
}
InternalCanvas.defaultProps = {
    id: uuidv4_1.uuid(),
    editable: true,
    zoomEnabled: true,
    minZoom: 30,
    maxZoom: 300,
    responsive: true,
    width: 0,
    height: 0,
};
const Canvas = react_1.default.forwardRef((props, ref) => {
    const canvasRef = react_1.useRef();
    react_1.default.useImperativeHandle(ref, () => ({
        handler: canvasRef.current.handler,
        canvas: canvasRef.current.canvas,
        container: canvasRef.current.container,
    }));
    return react_1.default.createElement(InternalCanvas, Object.assign({ ref: canvasRef }, props));
});
exports.default = Canvas;
