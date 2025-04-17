function printEvenNumbers() {
    let num = 0;
    do {
        if (num % 2 === 0) {
            console.log(num);
        }
        num++;
    } while (num <= 100);
}

// Викликаємо функцію
printEvenNumbers();
