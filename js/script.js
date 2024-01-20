
// ============= active menu ===============

let menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("active");
});

// ============= rotate text ===============

let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i) =>
 `<b style= "transform:rotate(${i * 6.3}deg")>${char}</b>`).join("");

// ============= initialize swiperjs ===============

