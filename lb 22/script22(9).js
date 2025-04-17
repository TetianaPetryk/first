function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  function analyzeNumber() {
    const num = parseFloat(document.getElementById("number").value);
    const output = document.getElementById("output");
  
    if (isNaN(num)) {
      output.innerHTML = "<p>Будь ласка, введіть коректне число.</p>";
      return;
    }
  
    let result = `<p>Число ${num} є ${num >= 0 ? 'позитивним' : 'негативним'}.</p>`;
  
    result += `<p>Число ${num} ${isPrime(num) ? 'є простим.' : 'не є простим.'}</p>`;
  
    const divisors = [2, 3, 5, 6, 9];
    const divisibleBy = divisors.filter(d => num % d === 0);
  
    if (divisibleBy.length > 0) {
      result += `<p>Число ділиться на: ${divisibleBy.join(", ")}</p>`;
    } else {
      result += "<p>Число не ділиться без залишку на 2, 3, 5, 6 або 9.</p>";
    }
  
    output.innerHTML = result;
  }
  