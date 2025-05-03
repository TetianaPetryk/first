const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Віддаємо index.html при відкритті головної сторінки
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Обробка AJAX-запиту
app.post('/square', (req, res) => {
    const number = parseFloat(req.body.number);

    if (isNaN(number)) {
        return res.send("Будь ласка, введіть коректне число.");
    }

    const square = number * number;
    res.send(`Квадрат числа ${number} дорівнює ${square}.`);
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});
