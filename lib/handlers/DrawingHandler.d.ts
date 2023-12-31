import { fabric } from 'fabric';
import { FabricEvent, FabricObject } from '../utils';
import Handler from './Handler';
declare class DrawingHandler {
    handler: Handler;
    constructor(handler: Handler);
    polygon: {
        init: () => void;
        finish: () => void;
        addPoint: (opt: FabricEvent<Event>) => void;
        generate: (pointArray: FabricObject<fabric.Circle>[]) => void;
    };
    line: {
        init: () => void;
        finish: () => void;
        addPoint: (opt: FabricEvent<Event>) => void;
        generate: (opt: FabricEvent<Event>) => void;
    };
    arrow: {
        init: () => void;
        finish: () => void;
        addPoint: (opt: FabricEvent<Event>) => void;
        generate: (opt: FabricEvent<Event>) => void;
    };
    orthogonal: {};
    curve: {};
}
export default DrawingHandler;
