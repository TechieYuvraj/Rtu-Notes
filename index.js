// Data for categories
const categories = [
  { name: "First Year", link: "year.html?year=1" },
  { name: "Second Year", link: "year.html?year=2" },
  { name: "Third Year", link: "year.html?year=3" },
  { name: "Fourth Year", link: "year.html?year=4" },
];

// Function to load categories dynamically
function loadCategories() {
  const categoryList = document.getElementById("category-list");
  categories.forEach((category) => {
    const card = document.createElement("a");
    card.className = "category-card";
    card.href = category.link;
    card.textContent = category.name;
    categoryList.appendChild(card);
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
  loadCategories();
  setupMenuToggle();
});
