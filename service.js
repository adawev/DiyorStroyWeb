import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const TELEGRAM_TOKEN = "8332460446:AAHcT1uaL19rv6yiz-RoG7vsmgggpJI5zCA";
const CHAT_ID = "6901843919";

app.post("/send-message", async (req, res) => {
    const { name, phone, message } = req.body;

    const text = `Yangi xabar:\nIsm: ${name}\nTelefon raqam: ${phone}\nXabar: ${message}`;

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: CHAT_ID, text })
        });

        if (response.ok) {
            res.status(200).json({ success: true });
        } else {
            const errText = await response.text();
            res.status(500).json({ error: errText });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});


app.listen(3000);
