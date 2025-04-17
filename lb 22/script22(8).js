function add(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  function mul(a, b) {
    return a * b;
  }
  
  function div(a, b) {
    if (b === 0) {
      return "Помилка: Ділення на нуль неможливе!";
    }
    return a / b;
  }
  
  function performOperation() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;
  
    if (isNaN(num1) || isNaN(num2)) {
      result = "Будь ласка, введіть коректні числа.";
    } else {
      switch (operation) {
        case "add":
          result = add(num1, num2);
          break;
        case "sub":
          result = sub(num1, num2);
          break;
        case "mul":
          result = mul(num1, num2);
          break;
        case "div":
          result = div(num1, num2);
          break;
        default:
          result = "Невідома операція!";
      }
    }
  
    document.getElementById("result").textContent = `Результат: ${result}`;
  }
  