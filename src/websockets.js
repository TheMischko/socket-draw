import {WebSocketServer, WebSocket} from "ws";
import {drawOnCanvas} from "./canvas.js";
import fs from 'fs';

const connections = new Set();

export const createWebSocketServer = (server) => {
    const wss = new WebSocketServer({ server });
    console.log("Websocket server created");

    wss.on('connection', (ws) => {
        connections.add(ws);
        console.log("New connection", connections.size);
        onNewConnection(ws);

        ws.on('message', (message) => {
            const parsed = JSON.parse(message);

            if(parsed.event === "draw"){
                onUserDraw(parsed, ws);
            }
        });

        ws.on('close', () => {
            connections.delete(ws);
            console.log("Closed connection", connections.size);
            onClosedConnection();
        });
    });
}

const onNewConnection = (currentCon) => {
    const message = {
        event: "usersChanged",
        data: {
            userCount: connections.size
        }
    }

    try {
        currentCon.send(JSON.stringify({
            event: "imageInit",
            data: {
            }
        }));
    } catch (ex){
        console.log(ex);
    }


    connections.forEach((connection) => {
        connection.send(JSON.stringify(message));
    })
};

const onClosedConnection = () => {
    onNewConnection();
}

const onUserDraw = (data, sender) => {
    drawOnCanvas(data.data);
    connections.forEach((connection) => {
       if(connection === sender) return;
       connection.send(JSON.stringify(data));
    });
}