import pkg from 'canvas';
import path from "path";
import fs from "fs";
import 'dotenv/config'

const {createCanvas, loadImage} = pkg;
const canvasFilePath = "./public/canvas.png";
const WIDTH = Number(process.env.CVS_WIDTH);
const HEIGHT = Number(process.env.CVS_HEIGHT);

/** @type {Canvas} */
let canvas = null
/** @type {NodeCanvasRenderingContext2D} */
let ctx = null;
let saveTimeout = false;

export const createVirtualCanvas = () => {
    canvas = createCanvas(WIDTH, HEIGHT);
    console.log([WIDTH, HEIGHT, canvas]);
    ctx = canvas.getContext('2d');

    loadImage(canvasFilePath).then((image) => {
        ctx.drawImage(image, 0, 0, WIDTH, HEIGHT);
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
    if(!saveTimeout){
        saveTimeout = true;
        setTimeout(() => {
            saveTimeout = false;
        },500);
        saveCanvas(canvas);
    }


}

/**
 *
 * @param canvas {Canvas}
 */
const saveCanvas = (canvas) => {
    const buffer = canvas.toBuffer();
    fs.writeFile(canvasFilePath, buffer, () => {});
}


