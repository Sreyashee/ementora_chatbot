import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { getBotReply } from './chatbot.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../frontend')));

// Chatbot API endpoint
app.post('/api/chat', (req, res) => {
    const { prompt } = req.body;
    console.log("Received prompt:", prompt);
    const reply = getBotReply(prompt);
    res.json({ reply });
});

// Fallback for SPA routing (serves index.html)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
