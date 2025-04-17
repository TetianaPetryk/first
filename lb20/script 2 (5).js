document.addEventListener("DOMContentLoaded", function () {
    const numberWords = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };

    document.querySelectorAll("p").forEach(paragraph => {
        paragraph.addEventListener("click", function () {
            let text = this.textContent.toLowerCase();
            if (numberWords[text] !== undefined) {
                this.textContent = numberWords[text] ** 2; // Підносимо число до квадрата
            }
        });
    });
});
