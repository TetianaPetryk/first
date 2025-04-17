// Функція для обчислення периметра правильного багатокутника
function perimeter(side, count) {
    return side * count;
  }
  
  // Показує результат на сторінці
  function showPerimeter() {
    const side = Number(document.getElementById("sideInput").value);
    const count = Number(document.getElementById("countInput").value);
    const result = perimeter(side, count);
    document.getElementById("perimeterResult").textContent = `Периметр: ${result}`;
  }
  