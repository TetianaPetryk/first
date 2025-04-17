document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".clickable");

    images.forEach(img => {
        img.onclick = function () {
            console.log(this.getAttribute("width"));
        };
    });
});
