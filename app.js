const ul = document.querySelector(".ham-list");
const ham = document.querySelector(".hamburg-menu");
ham.addEventListener("click", () => {
    ul.classList.toggle("display");
});
document.querySelectorAll(".ham-list li").forEach((item) => {
    item.addEventListener("click", function () {
        document.querySelector(".ham-list").classList.remove("display");
    });
});