// Utility to get URL parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Data for semesters per year
const semestersData = {
  1: [
    { id: 1, name: "Semester 1", link: "subject.html?year=1&semester=1" },
    { id: 2, name: "Semester 2", link: "subject.html?year=1&semester=2" },
  ],
  2: [
    { id: 3, name: "Semester 3", link: "subject.html?year=2&semester=3" },
    { id: 4, name: "Semester 4", link: "subject.html?year=2&semester=4" },
  ],
  3: [
    { id: 5, name: "Semester 5", link: "subject.html?year=3&semester=5" },
    { id: 6, name: "Semester 6", link: "subject.html?year=3&semester=6" },
  ],
  4: [
    { id: 7, name: "Semester 7", link: "subject.html?year=4&semester=7" },
    { id: 8, name: "Semester 8", link: "subject.html?year=4&semester=8" },
  ],
};

// Syllabus PDF links
const syllabusData = {
  1: [
    { id: 1, name: "1st Year Syllabus", link: "assets/syllabus/CSE-Sylabus-1st-Year.pdf" },
  ],
  2: [
    { id: 3, name: "3rd Sem Syllabus", link: "assets/syllabus/CSE-Sylabus-3rd-Sem.pdf" },
    { id: 4, name: "4th Sem Syllabus", link: "assets/syllabus/CSE-Sylabus-4th-Sem.pdf" },
  ],
  3: [
    { id: 5, name: "3rd Year Syllabus", link: "assets/syllabus/CSE-Sylabus-5th-6th-Sem.pdf" },
  ],
  4: [
    { id: 7, name: "7th Sem Syllabus", link: "assets/syllabus/CSE-Sylabus-7th-Sem.pdf" },
    { id: 8, name: "8th Sem Syllabus", link: "assets/syllabus/CSE-Sylabus-8th-Sem.pdf" },
  ],
};

// Function to load semesters
function loadSemesters() {
  const year = getQueryParam("year");
  const semesterList = document.getElementById("semester-list");
  if (!semesterList || !year || !semestersData[year]) {
    return;
  }

  semesterList.innerHTML = "";
  semestersData[year].forEach((semester) => {
    const card = document.createElement("a");
    card.className = "category-card";
    card.href = semester.link;
    card.textContent = semester.name;
    semesterList.appendChild(card);
  });
}

// Function to load syllabus
function loadSyllabus() {
  const year = getQueryParam("year");
  const syllabusList = document.getElementById("syllabus-list");
  if (!syllabusList || !year || !syllabusData[year]) {
    return;
  }

  syllabusList.innerHTML = "";
  syllabusData[year].forEach((syllabus) => {
    const card = document.createElement("a");
    card.className = "category-card";
    card.href = syllabus.link;
    card.textContent = syllabus.name;
    card.target = "_blank";
    syllabusList.appendChild(card);
  });
}

// Mobile menu toggle
function setupMenuToggle() {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  loadSemesters();
  loadSyllabus();
  setupMenuToggle();
});
