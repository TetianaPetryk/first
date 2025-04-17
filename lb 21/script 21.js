// Створення елементів калькулятора за допомогою JavaScript
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.backgroundColor = '#f0f0f0';

// Створення контейнера для калькулятора
const calculator = document.createElement('div');
calculator.style.display = 'flex';
calculator.style.flexDirection = 'column';
calculator.style.alignItems = 'center';
calculator.style.backgroundColor = '#fff';
calculator.style.padding = '20px';
calculator.style.borderRadius = '10px';
calculator.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
document.body.appendChild(calculator);

// Створення дисплея калькулятора
const display = document.createElement('input');
display.type = 'text';
display.disabled = true;
display.style.width = '300px'; // Ширина для великих екранів
display.style.height = '40px';
display.style.textAlign = 'right';
display.style.marginBottom = '20px';
display.style.fontSize = '20px';
display.style.padding = '10px';
display.style.border = '1px solid #ccc';
display.style.borderRadius = '5px';
calculator.appendChild(display);

// Створення контейнера для кнопок калькулятора
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'grid';
buttonContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
buttonContainer.style.gap = '10px';
calculator.appendChild(buttonContainer);

// Массив кнопок
const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
];

// Створення кнопок калькулятора
buttons.forEach(label => {
    const button = document.createElement('button');
    button.textContent = label;
    button.style.padding = '20px';
    button.style.fontSize = '18px';
    button.style.cursor = 'pointer';
    button.style.border = 'none';
    button.style.backgroundColor = '#f1f1f1';
    button.style.borderRadius = '5px';
    button.addEventListener('click', () => handleButtonClick(label));
    buttonContainer.appendChild(button);
});

// Додавання кнопки для очищення дисплея
const clearButton = document.createElement('button');
clearButton.textContent = 'C';
clearButton.style.padding = '20px';
clearButton.style.fontSize = '18px';
clearButton.style.cursor = 'pointer';
clearButton.style.border = 'none';
clearButton.style.backgroundColor = '#f1f1f1';
clearButton.style.borderRadius = '5px';
clearButton.addEventListener('click', clearDisplay);
calculator.appendChild(clearButton);

// Змінні для зберігання введених даних
let currentInput = '';
let currentOperator = '';
let currentResult = 0;

// Функція обробки натискання кнопки
function handleButtonClick(label) {
    if (label >= '0' && label <= '9' || label === '.') {
        currentInput += label;
        display.value = currentInput;
    } else if (label === '=') {
        try {
            currentResult = eval(currentInput);
            display.value = currentResult;
            currentInput = '' + currentResult;
        } catch (e) {
            display.value = 'Помилка';
            currentInput = '';
        }
    } else {
        if (currentInput) {
            currentInput += ` ${label} `;
            display.value = currentInput;
        }
    }
}

// Функція для очищення дисплея
function clearDisplay() {
    currentInput = '';
    display.value = '';
}

// Медіа-запити для адаптивності
const mediaQueryMobile = '@media (max-width: 600px) {';
const mediaQueryTablet = '@media (max-width: 900px) {';

// Додавання адаптивних стилів через JavaScript
const style = document.createElement('style');
style.innerHTML = `
    ${mediaQueryMobile}
        .calculator {
            width: 90%;
            padding: 15px;
        }
        .display {
            width: 100%;
        }
        .button {
            padding: 15px;
            font-size: 16px;
        }
    }
    ${mediaQueryTablet}
        .calculator {
            width: 80%;
            padding: 20px;
        }
        .display {
            width: 250px;
        }
        .button {
            padding: 18px;
            font-size: 17px;
        }
    }
`;
document.head.appendChild(style);
