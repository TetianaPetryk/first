const weekData = {
    ua: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота', 'Неділя'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

function start() {
    let lang;
    // Вибір мови
    while (true) {
        lang = prompt('Виберіть мову: "ua" або "en"?');
        if (!lang) continue;
        lang = lang.toLowerCase();
        if (lang === 'ua' || lang === 'en') break;
        alert('Неправильний ввід. Введіть "ua" або "en".');
    }

    let day;
    // Вибір номера дня тижня
    while (true) {
        const promptText = lang === 'ua'
            ? 'Введіть номер дня тижня від 1 до 7?'
            : 'Enter the day number of the week (from 1 to 7)?';
        const input = prompt(promptText);
        day = parseInt(input);
        if (!isNaN(day) && day >= 1 && day <= 7) break;
        alert(lang === 'ua'
            ? 'Неправильний ввід. Введіть число від 1 до 7.'
            : 'Invalid input. Enter a number from 1 to 7.');
    }

    // Вивід результату
    alert(weekData[lang][day - 1]);
}

window.onload = start;
