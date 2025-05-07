let timer;
let timeLeft = 60;
let current = 1;
let startTime;
let gameCount = 0;
let results = [];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('grid');
  const restartBtn = document.getElementById('restartBtn');

  if (grid) {
    startGame();
    restartBtn.addEventListener('click', startGame);
  }
});

function startGame() {
  timeLeft = 60;
  current = 1;
  document.getElementById('timer').textContent = timeLeft;
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert('Час вийшов!');
      startGame();
    }
  }, 1000);

  const numbers = shuffle(Array.from({ length: 25 }, (_, i) => i + 1));
  for (let num of numbers) {
    const btn = document.createElement('button');
    btn.textContent = num;
    btn.style.fontSize = `${Math.floor(Math.random() * 5 + 1) * 4}px`;
    btn.style.color = getRandomColor();
    btn.addEventListener('click', () => handleClick(btn, num));
    grid.appendChild(btn);
  }

  startTime = Date.now();
}

function handleClick(button, num) {
  if (num === current) {
    button.classList.add('highlight');
    current++;
    if (current > 25) {
      clearInterval(timer);
      const duration = 60 - timeLeft;
      alert(`Вітаємо! Ви завершили гру за ${duration} секунд.`);
      logResult(duration);
      startGame();
    }
  } else {
    alert('Не вірна цифра');
    button.classList.add('wrong');
    setTimeout(() => button.classList.remove('wrong'), 500);
  }
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 80%, 50%)`;
}

function logResult(seconds) {
  gameCount++;
  results.push({ name: `Гра ${gameCount}`, time: seconds });
  const body = document.getElementById('resultsBody');
  body.innerHTML = '';

  const best = Math.min(...results.map(r => r.time));
  results.forEach(r => {
    const row = document.createElement('tr');
    if (r.time === best) row.classList.add('best');
    row.innerHTML = `<td>${r.name}</td><td>${r.time} с.</td>`;
    body.appendChild(row);
  });
}
