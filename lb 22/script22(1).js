// Функція, яка повертає залишок від ділення на 60
function seconds(total) {
    return total % 60;
  }
  
  // Функція, яка бере введене значення і показує результат
  function showSeconds() {
    const input = document.getElementById("totalInput").value;
    const total = Number(input);
    const result = seconds(total);
    document.getElementById("result").textContent = `Залишок: ${result} секунд`;
  }
  