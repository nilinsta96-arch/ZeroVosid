function boshlash() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("site").style.display = "block";

    const paragraphs = document.querySelectorAll(".about p");
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.classList.add("show");
        }, index * 700);
    });
}
