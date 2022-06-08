import {WebSocketServer, WebSocket} from "ws";
import {drawOnCanvas} from "./canvas.js";
import {readToken} from "./users.js";
import fs from 'fs';

const connections = new Set();
const authorizedConnections = {};

export const createWebSocketServer = (server) => {
    // Start new WebSocket server
    const wss = new WebSocketServer({ server });
    console.log("Websocket server created");
    // Handling new connection, where variable ws holds current connection.
    wss.on('connection', (ws) => {
        if(!ws) return;
        // Store new connection.
        connections.add(ws);
        // Send initial data to new connection.
        onNewConnection(ws);
        console.log("New connection", connections.size);
        // Handle events(messages) from established connection
        ws.on('message', async (message) => {
            // Parse JSON content of incomming message.
            const parsed = JSON.parse(message);
            //console.log(parsed);

            // Initialize event handler
            if(parsed.event === "initialize"){
                // Try to read incomming user token
                const userData = await readToken(parsed.data.token);
                console.log("userdata", userData);
                // If the token is invalid send error message to connection.
                if(userData.status === "invalid"){
                    ws.send(JSON.stringify({
                        event: "handshake",
                        data: {
                            status: "invalid"
                        }
                    }));
                // If the token is valid
                } else {
                    // Add it to dictionary of tokens and connections
                    if(!authorizedConnections[parsed.data.token]){
                        authorizedConnections[parsed.data.token] = ws;
                    }
                    // Send user information to the connection.
                    ws.send(JSON.stringify({
                        event: "handshake",
                        data: {
                            status: "valid",
                            user: {
                                login: userData.content.login,
                                email: userData.content.email
                            },
                            token: parsed.data.token
                        }
                    }));
                }
            }
            // Draw event handler
            else if(parsed.event === "draw"){
                onUserDraw(parsed, ws);
            }
        });

        // On closed connection delete all stored data and inform other listeners.
        ws.on('close', () => {
            connections.delete(ws);
            for(const [token, connection] of Object.entries(authorizedConnections)){
                if(ws === connection) delete authorizedConnections[token];
            }
            console.log("Closed connection", connections.size);
            onClosedConnection();
        });
    });
}

const sendConnectionSize = () => {
    const message = {
        event: "usersChanged",
        data: {
            userCount: connections.size
        }
    }
    connections.forEach((connection) => {
        connection.send(JSON.stringify(message));
    });
}

const onNewConnection = (currentCon) => {
    try {
        currentCon.send(JSON.stringify({
            event: "imageInit",
            data: {
            }
        }));
    } catch (ex){
        console.log(ex);
    }
    sendConnectionSize();
};

const onClosedConnection = () => {
    sendConnectionSize();
}

const onUserDraw = (data, sender) => {
    if(!authorizedConnections[data.bearer]) {
        console.error("Unauthorized drawing!")
        return
    };
    drawOnCanvas(data.data);
    connections.forEach((connection) => {
       if(connection === sender) return;
       connection.send(JSON.stringify(data));
    });
}