const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Crochet Portfolio API is running 🧶');
});

app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: "Lavender Bouquet", price: 1200, category: "Flowers" },
        { id: 2, name: "Chunky Bee Plushie", price: 850, category: "Plushies" },
        { id: 3, name: "Sunflower Keychain", price: 250, category: "Keychains" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
