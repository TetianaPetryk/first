document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input");
    const output = document.getElementById("demo");

    function showValue(event) {
        output.textContent = event.target.value;
    }

    inputs.forEach(input => {
        input.addEventListener("click", showValue);
    });
});
