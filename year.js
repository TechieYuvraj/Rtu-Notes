// Data for years
const years = [
  { id: 1, name: "First<br>Year", link: "semester.html?year=1" },
  { id: 2, name: "Second<br>Year", link: "semester.html?year=2" },
  { id: 3, name: "Third<br>Year", link: "semester.html?year=3" },
  { id: 4, name: "Fourth<br>Year", link: "semester.html?year=4" },
];

// Function to load years dynamically
function loadYears() {
  const yearList = document.getElementById("year-list");
  years.forEach((year) => {
    const card = document.createElement("a");
    card.className = "category-card";
    card.href = year.link;
    card.innerHTML = year.name;
    yearList.appendChild(card);
  });
}

// Mobile menu toggle
function setupMenuToggle() {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadYears();
  setupMenuToggle();
});
