function getCurrentFormattedDateTime() {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
  
    const date = `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()}`;
    const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  
    return `${date} ${time}`;
  }
  
  function getHint(distance) {
    if (distance >= 20) return 'холодно';
    if (distance >= 10) return 'тепло';
    return 'гаряче';
  }
  
  function playGame() {
    const target = Math.floor(Math.random() * 51); // від 0 до 50
    let attempts = 0;
    let guess;
    let isCorrect = false;
  
    while (!isCorrect) {
      guess = prompt('Вгадай число від 0 до 50:');
      if (guess === null) {
        alert('Гру перервано.');
        return;
      }
  
      const number = Number(guess);
      if (isNaN(number) || number < 0 || number > 50) {
        alert('Будь ласка, введіть ціле число від 0 до 50.');
        continue;
      }
  
      attempts++;
      const timeStamp = getCurrentFormattedDateTime();
  
      if (number === target) {
        alert(`За ${attempts} спроб ви вгадали число ${target}.`);
        console.log(`${timeStamp} Спроба ${attempts}: число ${number} – ВІРНО!`);
        isCorrect = true;
      } else {
        const diff = Math.abs(target - number);
        const hint = getHint(diff);
        alert(`Невірно. Ви ${hint}. Спробуйте ще.`);
        console.log(`${timeStamp} Спроба ${attempts}: число ${number} – не вірно`);
      }
    }
  
    if (confirm('Бажаєте зіграти ще раз?')) {
      playGame();
    } else {
      alert('Дякуємо за гру!');
    }
  }
  
  document.addEventListener('DOMContentLoaded', playGame);
  