// subject.js - Load subjects dynamically based on semester parameter

const subjectsData = {
  1: [
    { id: "EM1", name: "Engineering Mathematics-I", icon: "fa-solid fa-calculator" },
    { id: "HV", name: "Human Values", icon: "fa-solid fa-heart" },
    { id: "BCE", name: "Basic Civil Engineering", icon: "fa-solid fa-building" },
    { id: "BME", name: "Basic Mechanical Engineering", icon: "fa-solid fa-gear" },
    { id: "EC", name: "Engineering Chemistry", icon: "fa-solid fa-flask" },
  ],
  2: [
    { id: "EM2", name: "Engineering Mathematics-II", icon: "fa-solid fa-square-root-variable" },
    { id: "BEE", name: "Basic Electrical Engineering", icon: "fa-solid fa-bolt" },
    { id: "EP", name: "Engineering Physics", icon: "fa-solid fa-atom" },
    { id: "PPS", name: "Programming for Problem Solving", icon: "fa-solid fa-code" },
    { id: "CS", name: "Communication Skills", icon: "fa-solid fa-comments" },
  ],
  3: [
    { id: "AEM", name: "Advanced Engineering Mathematics", icon: "fa-solid fa-calculator" },
    { id: "MEFA", name: "Managerial Economics and Financial Accounting", icon: "fa-solid fa-chart-line" },
    { id: "DE", name: "Digital Electronics", icon: "fa-solid fa-microchip" },
    { id: "DSA", name: "Data Structures and Algorithm", icon: "fa-solid fa-network-wired" },
    { id: "OOPs", name: "Object Oriented Programming", icon: "fa-solid fa-laptop-code" },
    { id: "SE", name: "Software Engineering", icon: "fa-solid fa-diagram-project" },
  ],
  4: [
    { id: "DMS", name: "Discrete Mathematics Structure", icon: "fa-solid fa-brain" },
    { id: "TC", name: "Technical Communication", icon: "fa-solid fa-bullhorn" },
    { id: "MPI_CSE", name: "Microprocessor & Interfaces (CSE)", icon: "fa-solid fa-microchip" },
    { id: "DBMS", name: "Database Management System", icon: "fa-solid fa-database" },
    { id: "TOC", name: "Theory Of Computation", icon: "fa-solid fa-sitemap" },
    { id: "POC", name: "Principle of Communication", icon: "fa-solid fa-tower-broadcast" },
    { id: "DCCN", name: "Data Communication and Computer Networks", icon: "fa-solid fa-network-wired" },
  ],
  5: [
    { id: "ITC", name: "Information Theory and Computation", icon: "fa-solid fa-circle-nodes" },
    { id: "OS", name: "Operating System", icon: "fa-solid fa-desktop" },
    { id: "CGM", name: "Computer Graphics and Multimedia", icon: "fa-solid fa-palette" },
    { id: "AOA", name: "Analysis of Algorithm", icon: "fa-solid fa-chart-simple" },
    { id: "CD", name: "Compiler Design", icon: "fa-solid fa-file-code" },
    { id: "WC", name: "Wireless Communication", icon: "fa-solid fa-wifi" },
    { id: "MPI_IT", name: "Microprocessor & Interfaces (IT)", icon: "fa-solid fa-microchip" },
  ],
  6: [
    { id: "DIP", name: "Digital Image Processing", icon: "fa-solid fa-image" },
    { id: "ML", name: "Machine Learning", icon: "fa-solid fa-robot" },
    { id: "CAO", name: "Computer Architecture and Organization", icon: "fa-solid fa-server" },
    { id: "ISS", name: "Information Security System", icon: "fa-solid fa-shield-halved" },
    { id: "AI", name: "Artificial Intelligence", icon: "fa-solid fa-brain" },
    { id: "DS", name: "Distributed System", icon: "fa-solid fa-network-wired" },
    { id: "CC", name: "Cloud Computing", icon: "fa-solid fa-cloud" },
  ],
  7: [
    { id: "BDA", name: "Big Data Analytics", status: "coming_soon", icon: "fa-solid fa-database" },
    { id: "IOT", name: "Internet of Things", status: "coming_soon", icon: "fa-solid fa-microchip" },
    { id: "IS", name: "Information Security", status: "coming_soon", icon: "fa-solid fa-lock" },
  ],
  8: [
    { id: "DM", name: "Disaster Management", status: "coming_soon", icon: "fa-solid fa-triangle-exclamation" },
    { id: "CS_SEC", name: "Cyber Security", status: "coming_soon", icon: "fa-solid fa-shield-cat" },
  ],
};

function getSemesterYear(sem) {
  const s = parseInt(sem, 10);
  if (s <= 2) return 1;
  if (s <= 4) return 2;
  if (s <= 6) return 3;
  return 4;
}

function loadSubjects() {
  const semester = getQueryParam("semester");
  const subjectList = document.getElementById("subject-list");
  const pageTitle = document.getElementById("subject-page-title");
  if (!subjectList) return;

  subjectList.innerHTML = "";

  if (!semester || !subjectsData[semester]) {
    if (pageTitle) pageTitle.textContent = "Select Semester";
    subjectList.innerHTML = `
      <div class="empty-fallback-box">
        <p>No valid semester was specified. Please choose a semester:</p>
        <div class="fallback-sem-grid">
          <a href="subject.html?semester=1" class="custom-button">Semester 1</a>
          <a href="subject.html?semester=2" class="custom-button">Semester 2</a>
          <a href="subject.html?semester=3" class="custom-button">Semester 3</a>
          <a href="subject.html?semester=4" class="custom-button">Semester 4</a>
          <a href="subject.html?semester=5" class="custom-button">Semester 5</a>
          <a href="subject.html?semester=6" class="custom-button">Semester 6</a>
          <a href="subject.html?semester=7" class="custom-button">Semester 7</a>
          <a href="subject.html?semester=8" class="custom-button">Semester 8</a>
        </div>
      </div>
    `;
    return;
  }

  const year = getQueryParam("year") || getSemesterYear(semester);
  if (pageTitle) {
    pageTitle.textContent = `Semester ${semester} Subjects`;
  }
  document.title = `Semester ${semester} Subjects - RTU Notes`;

  if (typeof renderBreadcrumbs === "function") {
    renderBreadcrumbs([
      { label: "Home", href: "/" },
      { label: "Years", href: "year.html" },
      { label: `Year ${year}`, href: `semester.html?year=${year}` },
      { label: `Semester ${semester}` }
    ]);
  }

  subjectsData[semester].forEach((subject) => {
    const isComingSoon = subject.status === "coming_soon";
    const card = document.createElement(isComingSoon ? "div" : "a");
    card.className = "category-card subject-card";

    if (!isComingSoon) {
      card.href = `units-pyqs.html?semester=${semester}&subject=${subject.id}`;
    }

    card.innerHTML = `
      <div class="subject-card-code">${subject.id}</div>
      <h3>${subject.name}</h3>
      ${isComingSoon ? '<span class="badge-coming-soon"><i class="fas fa-clock"></i> Coming Soon</span>' : '<span class="badge-available">Notes & PYQs <i class="fas fa-arrow-right"></i></span>'}
    `;

    subjectList.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadSubjects();
});
