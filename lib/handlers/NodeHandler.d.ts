import { fabric } from 'fabric';
import { NodeObject } from '../objects/Node';
import { FabricObject } from '../utils';
import Handler from './Handler';
declare class NodeHandler {
    handler: Handler;
    constructor(handler: Handler);
    /**
     * Get the node path by target object
     * @param {NodeObject} target
     * @param {NodeObject[]} [nodes=[]]
     * @param {string} [direction='init']
     */
    getNodePath: (target: NodeObject, nodes?: NodeObject[], direction?: string) => void;
    /**
     * Select the node path
     * @param {string[]} [path]
     */
    selectByPath: (path?: string[]) => void;
    /**
     * Select node by id
     * @param {string} id
     */
    selectById: (id: string) => void;
    /**
     * Deselect nodes
     */
    deselect: () => void;
    /**
     * Highlight path by ids
     * @param {string[]} [path]
     */
    highlightingByPath: (path?: string[]) => void;
    /**
     * Highlight link
     * @param {FabricObject} object
     * @param {FabricObject} targetObject
     * @param {number} [duration=500]
     */
    highlightingLink: (object: FabricObject<fabric.Object>, targetObject: FabricObject<fabric.Object>, duration?: number) => void;
    /**
     * Highlight node
     *
     * @param {*} object
     * @param {number} [duration=500]
     * @param {number} [minBlur=0]
     * @param {number} [maxBlur=50]
     */
    highlightingNode: (object: FabricObject<fabric.Object>, duration?: number, minBlur?: number, maxBlur?: number) => void;
}
export default NodeHandler;
