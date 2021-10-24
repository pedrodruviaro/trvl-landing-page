const header = document.querySelector(".header");

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 10) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});
