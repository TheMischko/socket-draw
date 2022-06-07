import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import {createWebSocketServer} from "./src/websockets.js";
import {createVirtualCanvas} from "./src/canvas.js";
import userRouter from "./src/users.js";
import 'dotenv/config'



const app = express();
const port = process.env.PORT || 5001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true} ));
app.use(cors())
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.url}`);
    next();
})
app.use("/users", userRouter);



const server = app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
    createWebSocketServer(server);
    createVirtualCanvas();
});

