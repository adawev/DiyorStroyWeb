import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const TELEGRAM_TOKEN = "8332460446:AAHcT1uaL19rv6yiz-RoG7vsmgggpJI5zCA";
const CHAT_ID = "6901843919";
const CHAT_ID_2 = "1744279411";

app.post("/send-message", async (req, res) => {
    const { name, phone, message } = req.body;

    const text = `Yangi xabar:\nIsm: ${name}\nTelefon raqam: ${phone}\nXabar: ${message}`;

    try {
        const send1 = fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: CHAT_ID, text })
        });

        const send2 = fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: CHAT_ID_2, text })
        });

        const results = await Promise.all([send1, send2]);

        const failed = results.find(r => !r.ok);
        if (failed) {
            const errText = await failed.text();
            return res.status(500).json({ error: errText });
        }

        res.status(200).json({ success: true, message: "Ikkala userga yuborildi" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log("Server run 3000"));
