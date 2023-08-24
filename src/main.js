// * Padding interactif
const computePadding = (open) =>
  `padding-top: ${open ? "10rem" : "4rem"} + 5vh`;
window.computePadding = computePadding;

// * smooth nav scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
