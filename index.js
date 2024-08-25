const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    if (!data || data.length === 0) {
        return res.status(200).json({
            "is_success": false
        });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

    const response = {
        "is_success": true,
        "user_id": "Bitan_Mallik_15112002",
        "email": "bitan.mallik2021@vitstudent.ac.in",
        "roll_number": "21BCE5080",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": highestLowercaseAlphabet
    };

    res.status(200).json(response);
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        "operation_code": 1
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
