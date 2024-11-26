import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
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

io.on("connection", (client) => {
    console.log("A new user has connected");
    client.on("message", async(message) => {
        console.log("Message is:", message[2]);
        const prompt = `i want you to convert the follownig test into emoji and only return emoji "${message[2]}, dont return any text in any case just try to convert the stuff"`;
        
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

server.listen(9000, () => {
    console.log("Server started at port 9000");
});
