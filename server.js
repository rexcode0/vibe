import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import os from "os"
import http from "http";
import express from "express";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const server = http.createServer(app);
const io = new Server(server);


function getHostIp() {
    const networkInterfaces = os.networkInterfaces();
    for (const interfaceName in networkInterfaces) {
        const addresses = networkInterfaces[interfaceName];
        for (const address of addresses) {
            if (address.family === 'IPv4' && !address.internal) {
                return address.address; // Return the first non-internal IPv4 address
            }
        }
    }
    return '127.0.0.1'; // Fallback to localhost if no external IP is found
}


io.on("connection", (client) => {
    console.log("A new user has connected");
    client.on("message", async(message) => {
        console.log("Message is:", message[2]);
        const prompt = `Convert the following text into a sequence of emojis that convey the same meaning: "${message[2]}"`;
        
        try {
            const result = await model.generateContent(prompt);
            console.log(result.response.text());
            message[2] = result.response.text();
            console.log(message) // Adjust based on API response structure
            io.emit("message", message);
        } catch (err) {
            console.error("Error generating content:", err);
            client.emit("error", "Failed to process your request.");
        }
    });
});

app.use(express.static("./hack"));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "hack", "index.html"));
});

server.listen(9000 , `${getHostIp()}` ,() => {
    console.log(`Server started at port http://${getHostIp()}:9000`);
});
