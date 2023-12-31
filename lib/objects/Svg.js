"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_1 = require("fabric");
const utils_1 = require("../utils");
const Svg = fabric_1.fabric.util.createClass(fabric_1.fabric.Group, {
    type: 'svg',
    initialize(option = {}) {
        this.callSuper('initialize', [], option);
        this.loadSvg(option);
    },
    addSvgElements(objects, options, path) {
        const createdObj = fabric_1.fabric.util.groupSVGElements(objects, options, path);
        this.set(options);
        if (createdObj.getObjects) {
            createdObj.getObjects().forEach(obj => {
                this.add(obj);
                if (options.fill) {
                    obj.set('fill', options.fill);
                }
                if (options.stroke) {
                    obj.set('stroke', options.stroke);
                }
            });
        }
        else {
            createdObj.set({
                originX: 'center',
                originY: 'center',
            });
            if (options.fill) {
                createdObj.set({
                    fill: options.fill,
                });
            }
            if (options.stroke) {
                createdObj.set({
                    stroke: options.stroke,
                });
            }
            if (this._objects ? .length : ) {
                this._objects.forEach(obj => this.remove(obj));
            }
            this.add(createdObj);
        }
        this.set({
            fill: options.fill || 'rgba(0, 0, 0, 1)',
            stroke: options.stroke || 'rgba(255, 255, 255, 0)',
        });
        this.setCoords();
        if (this.canvas) {
            this.canvas.requestRenderAll();
        }
        return this;
    },
    loadSvg(option) {
        const { svg, loadType, fill, stroke } = option;
        return new Promise(resolve => {
            if (loadType === 'svg') {
                fabric_1.fabric.loadSVGFromString(svg, (objects, options) => {
                    resolve(this.addSvgElements(objects, { ...options, fill, stroke }, svg));
                });
            }
            else {
                fabric_1.fabric.loadSVGFromURL(svg, (objects, options) => {
                    resolve(this.addSvgElements(objects, { ...options, fill, stroke }, svg));
                });
            }
        });
    },
    setFill(value) {
        this.getObjects().forEach((obj) => obj.set('fill', value));
        return this;
    },
    setStroke(value) {
        this.getObjects().forEach((obj) => obj.set('stroke', value));
        return this;
    },
    toObject(propertiesToInclude) {
        return utils_1.toObject(this, propertiesToInclude, {
            svg: this.get('svg'),
            loadType: this.get('loadType'),
        });
    },
    _render(ctx) {
        this.callSuper('_render', ctx);
    },
});
Svg.fromObject = (option, callback) => {
    return callback(new Svg(option));
};
// @ts-ignore
window.fabric.Svg = Svg;
exports.default = Svg;
