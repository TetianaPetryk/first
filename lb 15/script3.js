function divideUntilLessThanFive() {
    let b = 1000;
    let count = 0;

    do {
        b /= 3;
        count++;
    } while (b >= 5);

    let res = b;

 
    document.getElementById("result").innerText = `Результат: ${res}`;
    document.getElementById("iterations").innerText = `Кількість ітерацій: ${count}`;
}


divideUntilLessThanFive();
