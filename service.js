import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const CHAT_ID_2 = process.env.CHAT_ID_2;

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
