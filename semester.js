// semester.js - Dynamic Semesters & Syllabus loader

const semestersData = {
  1: [
    { id: 1, name: "Semester 1", desc: "1st Year", link: "subject.html?year=1&semester=1" },
    { id: 2, name: "Semester 2", desc: "1st Year", link: "subject.html?year=1&semester=2" },
  ],
  2: [
    { id: 3, name: "Semester 3", desc: "2nd Year", link: "subject.html?year=2&semester=3" },
    { id: 4, name: "Semester 4", desc: "2nd Year", link: "subject.html?year=2&semester=4" },
  ],
  3: [
    { id: 5, name: "Semester 5", desc: "3rd Year", link: "subject.html?year=3&semester=5" },
    { id: 6, name: "Semester 6", desc: "3rd Year", link: "subject.html?year=3&semester=6" },
  ],
  4: [
    { id: 7, name: "Semester 7", desc: "4th Year", link: "subject.html?year=4&semester=7" },
    { id: 8, name: "Semester 8", desc: "4th Year", link: "subject.html?year=4&semester=8" },
  ],
};

const syllabusData = {
  1: [
    { id: 1, name: "1st Year Syllabus (CSE)", link: "assets/syllabus/CSE-Sylabus-1st-Year.pdf" },
  ],
  2: [
    { id: 3, name: "3rd Sem Syllabus (CSE)", link: "assets/syllabus/CSE-Sylabus-3rd-Sem.pdf" },
    { id: 4, name: "4th Sem Syllabus (CSE)", link: "assets/syllabus/CSE-Sylabus-4th-Sem.pdf" },
  ],
  3: [
    { id: 5, name: "3rd Year Syllabus (CSE)", link: "assets/syllabus/CSE-Sylabus-5th-6th-Sem.pdf" },
  ],
  4: [
    { id: 7, name: "7th Sem Syllabus (CSE)", link: "#", status: "coming_soon" },
    { id: 8, name: "8th Sem Syllabus (CSE)", link: "#", status: "coming_soon" },
  ],
};

const yearNames = {
  1: "1st Year",
  2: "2nd Year",
  3: "3rd Year",
  4: "4th Year",
};

function loadSemesters() {
  const year = getQueryParam("year");
  const semesterList = document.getElementById("semester-list");
  const syllabusList = document.getElementById("syllabus-list");
  const yearTitle = document.getElementById("semester-page-title");

  if (!semesterList) return;

  if (!year || !semestersData[year]) {
    if (yearTitle) yearTitle.textContent = "All Semesters";
    semesterList.innerHTML = `
      <div class="empty-fallback-box">
        <p>No valid year was selected. Please choose your engineering year:</p>
        <div class="fallback-year-buttons">
          <a href="semester.html?year=1" class="custom-button">1st Year (Sem 1 & 2)</a>
          <a href="semester.html?year=2" class="custom-button">2nd Year (Sem 3 & 4)</a>
          <a href="semester.html?year=3" class="custom-button">3rd Year (Sem 5 & 6)</a>
          <a href="semester.html?year=4" class="custom-button">4th Year (Sem 7 & 8)</a>
        </div>
      </div>
    `;
    if (syllabusList) {
      syllabusList.parentElement.style.display = "none";
    }
    return;
  }

  const yearLabel = yearNames[year] || `Year ${year}`;
  if (yearTitle) {
    yearTitle.textContent = `${yearLabel} Semesters`;
  }
  document.title = `${yearLabel} Semesters - RTU Notes`;

  if (typeof renderBreadcrumbs === "function") {
    renderBreadcrumbs([
      { label: "Home", href: "/" },
      { label: "Years", href: "year.html" },
      { label: yearLabel }
    ]);
  }

  semesterList.innerHTML = "";
  semestersData[year].forEach((semester) => {
    const card = document.createElement("a");
    card.className = "category-card";
    card.href = semester.link;
    card.innerHTML = `<h3>${semester.name}</h3><span class="card-subtitle">${semester.desc}</span>`;
    semesterList.appendChild(card);
  });
}

function loadSyllabus() {
  const year = getQueryParam("year");
  const syllabusList = document.getElementById("syllabus-list");
  if (!syllabusList || !year || !syllabusData[year]) return;

  syllabusList.innerHTML = "";
  syllabusData[year].forEach((syllabus) => {
    const card = document.createElement("div");
    card.className = "category-card";

    if (syllabus.status === "coming_soon" || !isValidResourceUrl(syllabus.link)) {
      card.innerHTML = `
        <h3>${syllabus.name}</h3>
        <span class="badge-coming-soon"><i class="fas fa-clock"></i> Coming Soon</span>
      `;
    } else {
      card.innerHTML = `
        <h3>${syllabus.name}</h3>
        <a href="${syllabus.link}" target="_blank" rel="noopener noreferrer" class="custom-button">
          <i class="fas fa-file-pdf"></i> Download PDF
        </a>
      `;
    }
    syllabusList.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadSemesters();
  loadSyllabus();
});
