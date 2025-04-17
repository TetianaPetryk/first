function generateArray() {
    const n = Number(document.getElementById("arraySize").value);
    const arr = [];
  
    // Заповнення масиву числами вручну
    for (let i = 0; i < n; i++) {
      const number = Number(prompt(`Введіть число для елементу ${i + 1}:`));
      arr.push(number);
    }
  
    // Найбільше значення
    const maxValue = Math.max(...arr);
  
    // Найменше значення
    const minValue = Math.min(...arr);
  
    // Загальна сума елементів
    const sumValue = arr.reduce((acc, val) => acc + val, 0);
  
    // Середнє арифметичне
    const avgValue = sumValue / arr.length;
  
    // Непарні значення
    const oddValues = arr.filter(num => num % 2 !== 0);
  
    // Виведення результатів
    document.getElementById("maxValue").textContent = `Найбільше значення: ${maxValue}`;
    document.getElementById("minValue").textContent = `Найменше значення: ${minValue}`;
    document.getElementById("sumValue").textContent = `Загальна сума елементів: ${sumValue}`;
    document.getElementById("avgValue").textContent = `Середнє арифметичне: ${avgValue.toFixed(2)}`;
    document.getElementById("oddValues").textContent = `Непарні значення: ${oddValues.join(", ")}`;
  }
  