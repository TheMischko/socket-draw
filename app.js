import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import {createWebSocketServer} from "./src/websockets.js";
import {createVirtualCanvas} from "./src/canvas.js";

const app = express();
const port = process.env.PORT || 5001;


app.use(express.static('public'));
app.use(express.urlencoded({ extended:true} ));
app.use(cors())
app.use(bodyParser.json());



const server = app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
    createWebSocketServer(server);
    createVirtualCanvas();
});

