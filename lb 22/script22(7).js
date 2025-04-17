function fillArrayManually() {
    const rows = 5;
    const cols = 5;
    const arr = [];
  
    // Заповнюємо масив вручну
    for (let i = 0; i < rows; i++) {
      arr[i] = []; // Ініціалізуємо кожний рядок масиву
      for (let j = 0; j < cols; j++) {
        const userInput = prompt(`Введіть число для елементу [${i + 1}][${j + 1}]:`);
        arr[i][j] = Number(userInput); // Перетворюємо на число та зберігаємо в масиві
      }
    }
  
    // Заміна елементів головної діагоналі
    for (let i = 0; i < rows; i++) {
      if (arr[i][i] < 0) {
        arr[i][i] = 0; // Якщо число негативне, заміняємо на 0
      } else if (arr[i][i] > 0) {
        arr[i][i] = 1; // Якщо число позитивне, заміняємо на 1
      }
    }
  
    // Виведення результатів на сторінку
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h3>Модифікований масив:</h3>";
  
    // Формуємо HTML таблицю для відображення
    let tableHTML = "<table border='1'>";
    for (let i = 0; i < rows; i++) {
      tableHTML += "<tr>";
      for (let j = 0; j < cols; j++) {
        tableHTML += `<td>${arr[i][j]}</td>`;
      }
      tableHTML += "</tr>";
    }
    tableHTML += "</table>";
  
    resultDiv.innerHTML += tableHTML;
  }
  