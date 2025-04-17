document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input");

    function handleClick(event) {
        console.log(event.target.value); // Виводимо значення в консоль
        event.target.removeEventListener("click", handleClick); // Видаляємо обробник
        event.target.addEventListener("click", function showAlert() {
            alert(event.target.value); // Виводимо значення в alert при наступних кліках
        });
    }

    inputs.forEach(input => {
        input.addEventListener("click", handleClick);
    });
});
