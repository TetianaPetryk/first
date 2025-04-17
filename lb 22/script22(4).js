// Функція для обчислення середнього арифметичного
function Calculate(a, b, c) {
    return (a + b + c) / 3;
  }
  
  // Отримання значень та виведення результату
  function showAverage() {
    const a = parseInt(document.getElementById("num1").value);
    const b = parseInt(document.getElementById("num2").value);
    const c = parseInt(document.getElementById("num3").value);
  
    const avg = Calculate(a, b, c);
    document.getElementById("result").textContent = `Середнє арифметичне: ${avg}`;
  }
  