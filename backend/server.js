import express from 'express';
import cors from 'cors';
import { getBotReply } from './chatbot.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', (req, res) => {
    const { prompt } = req.body;
    console.log("Received prompt:", prompt);
    const reply = getBotReply(prompt);
    res.json({ reply });
});

// Optional: Serve static frontend if deployed together
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


