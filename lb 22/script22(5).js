// Функція з використанням if
function isDivisibleWithIf(n, x, y) {
    if (n % x === 0 && n % y === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Функція з використанням тернарного оператора
  function isDivisibleWithTernary(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
  }
  
  // Функція без if і тернарного оператора
  function isDivisibleWithoutIf(n, x, y) {
    return n % x === 0 && n % y === 0;
  }
  
  // Функція для отримання значень з форми та показу результату
  function checkDivisibility() {
    const n = Number(document.getElementById("nInput").value);
    const x = Number(document.getElementById("xInput").value);
    const y = Number(document.getElementById("yInput").value);
  
    // Використовуємо одну з функцій для перевірки
    const result = isDivisibleWithIf(n, x, y); // або isDivisibleWithTernary(n, x, y);, або isDivisibleWithoutIf(n, x, y);
  
    // Виведення результату на сторінку
    document.getElementById("result").textContent = result ? 'Так, число ділиться на обидва' : 'Ні, число не ділиться на обидва';
  }
  