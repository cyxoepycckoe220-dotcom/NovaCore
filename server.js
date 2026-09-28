const express = require("express");
const fetch = require("node-fetch");
const app = express();

const FIREBASE_URL = "https://novacore-fcd6a-default-rtdb.firebaseio.com/last.json";

app.get("/gettext", async (req, res) => {
    try {
        const response = await fetch(FIREBASE_URL);
        const data = await response.json();
        res.json({ value: data?.value || "" });
    } catch (e) {
        res.json({ value: "" });
    }
});

// корневой маршрут для проверки
app.get("/", (req, res) => {
    res.send("NovaCore proxy is running");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});
