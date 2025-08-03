import express from 'express';
import cors from 'cors';
import { getBotReply } from './chatbot.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', (req, res) => {
    const { prompt } = req.body;
    console.log("Received prompt:", prompt); // 👈 Add this line
    const reply = getBotReply(prompt);
    res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
