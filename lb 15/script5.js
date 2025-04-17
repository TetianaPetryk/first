// Запитуємо число від 1 до 31 через prompt
let dayInput = prompt("Введіть число від 1 до 31:");

// Перетворюємо введене значення у число
let dayNumber = parseInt(dayInput, 10);

// Перевіряємо, чи число в діапазоні від 1 до 31
if(isNaN(dayNumber) || dayNumber < 1 || dayNumber > 31) {
  document.write("Некоректне число. Будь ласка, введіть число від 1 до 31.");
} else {
  // Отримуємо поточну дату
  let currentDate = new Date();
  
  // Створюємо об'єкт дати для поточного місяця і року з введеним числом
  // Місяці нумеруються від 0 до 11
  let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNumber);

  // Масив назв днів тижня
  let daysOfWeek = [
    "Неділя", "Понеділок", "Вівторок", "Середа",
    "Четвер", "П'ятниця", "Субота"
  ];

  // Отримуємо день тижня (0 - неділя, 6 - субота)
  let dayOfWeek = daysOfWeek[date.getDay()];

  // Виводимо результат на сторінку
  document.write("День " + dayNumber + " поточного місяця є: " + dayOfWeek);
}
