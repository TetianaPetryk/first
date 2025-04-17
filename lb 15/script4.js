function convertToInches() {
    // Отримуємо значення з інпуту
    var cm = document.getElementById('centimeters').value;
    
    // Переводимо сантиметри в дюйми (1 дюйм = 2.54 см)
    var inches = cm / 2.54;
    
    // Виводимо результат в alert з округленням до 2 знаків після коми
    alert(cm + ' сантиметрів = ' + inches.toFixed(2) + ' дюймів');
}
