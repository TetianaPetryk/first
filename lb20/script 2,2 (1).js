// Функції для зміни кольору
function paintRed(event) {
    event.target.style.backgroundColor = "red";
    event.target.removeEventListener("click", paintRed);
    event.target.addEventListener("click", paintGreen);
}

function paintGreen(event) {
    event.target.style.backgroundColor = "green";
    event.target.removeEventListener("click", paintGreen);
    event.target.addEventListener("click", paintRed);
}

// Додаємо слухачів подій до кожного div
const boxes = document.querySelectorAll('div');

boxes.forEach(box => {
    box.addEventListener('click', paintRed);
});
