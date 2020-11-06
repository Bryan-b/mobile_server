const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

const io = socketIO(server);
io.on("connection", (socket) => {
    console.log(socket);
    console.log("client connected on websocket");
});

server.listen(PORT, () => {
  console.log("server started and listening on port " + PORT);
});