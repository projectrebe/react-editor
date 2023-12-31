import { fabric } from 'fabric';
import { FabricEvent, FabricObject } from '../utils';
import Handler from './Handler';
declare class GuidelineHandler {
    handler: Handler;
    verticalLines: {
        x?: number;
        y1?: number;
        y2?: number;
    }[];
    horizontalLines: {
        y?: number;
        x1?: number;
        x2?: number;
    }[];
    ctx: CanvasRenderingContext2D;
    viewportTransform: number[];
    aligningLineOffset: number;
    aligningLineMargin: number;
    aligningLineWidth: number;
    aligningLineColor: string;
    zoom: number;
    constructor(handler: Handler);
    /**
     * Initialize guideline handler
     *
     */
    initialize(): void;
    /**
     * Destroy guideline handler
     *
     * @author salgum1114
     */
    destroy(): void;
    /**
     * Before the render
     *
     * @param {FabricEvent} _opt
     */
    beforeRender: (_opt: FabricEvent<Event>) => void;
    /**
     * After the render
     *
     * @param {FabricEvent} _opt
     */
    afterRender: (_opt: FabricEvent<Event>) => void;
    drawVerticalLine: (coords: {
        x?: number;
        y1?: number;
        y2?: number;
    }) => void;
    drawHorizontalLine: (coords: {
        y?: number;
        x1?: number;
        x2?: number;
    }) => void;
    drawLine: (x1: number, y1: number, x2: number, y2: number) => void;
    isInRange: (v1: number, v2: number) => boolean;
    movingGuidelines: (target: FabricObject<fabric.Object>) => void;
    scalingGuidelines: (_target: FabricObject<fabric.Object>) => void;
}
export default GuidelineHandler;
