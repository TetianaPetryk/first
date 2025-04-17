document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".link");

    function addTitle(event) {
        event.target.setAttribute("title", event.target.href);
    }

    function removeTitle(event) {
        event.target.removeAttribute("title");
    }

    links.forEach(link => {
        link.addEventListener("mouseover", addTitle);
        link.addEventListener("mouseout", removeTitle);
    });
});
