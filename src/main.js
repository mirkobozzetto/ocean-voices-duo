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

// * traduction
const toggleLanguage = (lang) => {
  const enElements = document.querySelectorAll('[id$="-en"]');
  const frElements = document.querySelectorAll('[id$="-fr"]');

  if (lang === "en") {
    enElements.forEach((element) => element.classList.remove("hidden"));
    frElements.forEach((element) => element.classList.add("hidden"));
  } else {
    enElements.forEach((element) => element.classList.add("hidden"));
    frElements.forEach((element) => element.classList.remove("hidden"));
  }
};

document
  .getElementById("english")
  .addEventListener("click", () => toggleLanguage("en"));
document
  .getElementById("french")
  .addEventListener("click", () => toggleLanguage("fr"));

//* bug mobil scroll correction

link.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    let target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, 100); // Tu peux ajuster ce délai si besoin
});
