const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

// Add your /roast/:username route here
app.get('/roast/:username', async (req, res) => {
    // ... (your roast logic here)
    res.json({ roast: "This is a placeholder roast." });
});

// Remove the app.listen() call

module.exports = app;