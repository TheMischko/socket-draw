import pkg from 'canvas';
import path from "path";
import fs from "fs";

const {createCanvas, loadImage} = pkg;
const canvasFilePath = "./public/canvas.png";
console.log("canvas.js");
/** @type {Canvas} */
let canvas = null
/** @type {NodeCanvasRenderingContext2D} */
let ctx = null;

export const createVirtualCanvas = () => {
    canvas = createCanvas(800, 600);
    ctx = canvas.getContext('2d');

    loadImage(canvasFilePath).then((image) => {
        ctx.drawImage(image, 50, 0, 70, 70);
    }).catch((err) => {
        saveCanvas(canvas);
    });
}

export const drawOnCanvas = (drawData) => {
    ctx.beginPath();
    ctx.lineWidth = drawData.settings.brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = drawData.settings.color;
    ctx.moveTo(drawData.moveTo.x, drawData.moveTo.y);
    ctx.lineTo(drawData.lineTo.x, drawData.lineTo.y);
    ctx.stroke();
    saveCanvas(canvas);
}

/**
 *
 * @param canvas {Canvas}
 */
const saveCanvas = (canvas) => {
    const buffer = canvas.toBuffer();
    fs.writeFile(canvasFilePath, buffer, () => {});
}


