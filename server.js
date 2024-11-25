const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const { Socket } = require("socket.io-client");
const path = require("path");


const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (client) => {
    console.log("a new user has connected");
   client.on('message', (message) => {
        console.log("message is " ,message);
        io.emit("message",(message));
    });
});

app.use(express.static("./hack"));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "hack", "index.html"));
});

server.listen(9000, "192.168.103.79" ,() => {
    console.log("server started at 9000 ")
});
