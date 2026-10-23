// year.js - Load engineering years

const years = [
  { id: 1, name: "First<br>Year", desc: "Semesters 1 & 2", link: "semester.html?year=1" },
  { id: 2, name: "Second<br>Year", desc: "Semesters 3 & 4", link: "semester.html?year=2" },
  { id: 3, name: "Third<br>Year", desc: "Semesters 5 & 6", link: "semester.html?year=3" },
  { id: 4, name: "Fourth<br>Year", desc: "Semesters 7 & 8", link: "semester.html?year=4" },
];

function loadYears() {
  const yearList = document.getElementById("year-list");
  if (!yearList) return;
  yearList.innerHTML = "";
  years.forEach((year) => {
    const card = document.createElement("a");
    card.className = "category-card";
    card.href = year.link;
    card.innerHTML = `<h3>${year.name}</h3><span class="card-subtitle">${year.desc}</span>`;
    yearList.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof renderBreadcrumbs === "function") {
    renderBreadcrumbs([
      { label: "Home", href: "/" },
      { label: "Engineering Years" }
    ]);
  }
  loadYears();
});
