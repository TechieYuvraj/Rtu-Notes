// Utility to get URL parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Data for subjects per semester
// Each subject has an icon class from Font Awesome for display
const subjectsData = {
  1: [
    { id: "EM1", name: "Engineering Mathematics-I", icon: "fa-solid fa-book-open-reader" },
    { id: "HV", name: "Human Values", icon: "fa-solid fa-book-open-reader" },
    { id: "BCE", name: "Basic Civil Engineering", icon: "fa-solid fa-book-open-reader" },
    { id: "BME", name: "Basic Mechanical Engineering", icon: "fa-solid fa-book-open-reader" },
    { id: "EC", name: "Engineering Chemistry", icon: "fa-solid fa-book-open-reader" },
  ],
  2: [
    { id: "EM2", name: "Engineering Mathematics-II", icon: "fa-solid fa-book-open-reader" },
    { id: "BEE", name: "Basic Electrical Engineering", icon: "fa-solid fa-book-open-reader" },
    { id: "EP", name: "Engineering Physics", icon: "fa-solid fa-book-open-reader" },
    { id: "PPS", name: "Programming for Problem Solving", icon: "fa-solid fa-book-open-reader" },
    { id: "CS", name: "Communication Skills", icon: "fa-solid fa-book-open-reader" },
  ],
  3: [
    { id: "AEM", name: "Advanced Engineering Mathematics", icon: "fa-solid fa-book-open-reader" },
    { id: "MEFA", name: "Managerial Economics and Financial Accounting", icon: "fa-solid fa-book-open-reader" },
    { id: "DE", name: "Digital Electronics", icon: "fa-solid fa-book-open-reader" },
    { id: "DSA", name: "Data Structures and Algorithm", icon: "fa-solid fa-book-open-reader" },
    { id: "OOPs", name: "Object Oriented Programming", icon: "fa-solid fa-book-open-reader" },
    { id: "SE", name: "Software engineering", icon: "fa-solid fa-book-open-reader" },
  ],
  4: [
    { id: "DMS", name: "Discrete Mathematics Structure", icon: "fa-solid fa-book-open-reader" },
    { id: "TC", name: "Technical Communication", icon: "fa-solid fa-book-open-reader" },
    { id: "MPI_CSE", name: "Microprocessor & Interfaces", icon: "fa-solid fa-book-open-reader" },
    { id: "DBMS", name: "Database Management System", icon: "fa-solid fa-book-open-reader" },
    { id: "TOC", name: "Theory Of Computation", icon: "fa-solid fa-book-open-reader" },
    { id: "DCCN", name: "Data Communication and Computer Networks", icon: "fa-solid fa-book-open-reader" },
  ],
  5: [
    { id: "ITC", name: "Information Theory and Computation", icon: "fa-solid fa-book-open-reader" },
    { id: "OS", name: "Operating System", icon: "fa-solid fa-book-open-reader" },
    { id: "CGM", name: "Computer Graphics and Multimedia", icon: "fa-solid fa-book-open-reader" },
    { id: "AOA", name: "Analysis of Algorithm", icon: "fa-solid fa-book-open-reader" },
    { id: "CD", name: "Compiler Design", icon: "fa-solid fa-book-open-reader" },
    { id: "WC", name: "Wireless Communication", icon: "fa-solid fa-book-open-reader" },
    { id: "MPI_IT", name: "Microprocessor & Interfaces", icon: "fa-solid fa-book-open-reader" },
  ],
  6: [
    { id: "DIP", name: "Digital Image Processing", icon: "fa-solid fa-book-open-reader" },
    { id: "ML", name: "Machine Learning", icon: "fa-solid fa-book-open-reader" },
    { id: "CAO", name: "Computer Architecture and Organizaion", icon: "fa-solid fa-book-open-reader" },
    { id: "ISS", name: "Information Security System", icon: "fa-solid fa-book-open-reader" },
    { id: "AI", name: "Artificial Intelligence", icon: "fa-solid fa-book-open-reader" },
    { id: "DS", name: "Distributed System", icon: "fa-solid fa-book-open-reader" },
    { id: "CC", name: "Cloud Computing", icon: "fa-solid fa-book-open-reader" },
  ],
  // 7: [
  //   { id: "EM2", name: "Engineering Mathematics-II", icon: "fa-solid fa-book-open-reader" },
  //   { id: "BEE", name: "Basic Electrical Engineering", icon: "fa-solid fa-book-open-reader" },
  //   { id: "EP", name: "Engineering Physics", icon: "fa-solid fa-book-open-reader" },
  //   { id: "PPS", name: "Programming for Problem Solving", icon: "fa-solid fa-book-open-reader" },
  //   { id: "CS", name: "Communication Skills", icon: "fa-solid fa-book-open-reader" },
  // ],
  // 8: [
  //   { id: "EM2", name: "Engineering Mathematics-II", icon: "fa-solid fa-book-open-reader" },
  //   { id: "BEE", name: "Basic Electrical Engineering", icon: "fa-solid fa-book-open-reader" },
  //   { id: "EP", name: "Engineering Physics", icon: "fa-solid fa-book-open-reader" },
  //   { id: "PPS", name: "Programming for Problem Solving", icon: "fa-solid fa-book-open-reader" },
  //   { id: "CS", name: "Communication Skills", icon: "fa-solid fa-book-open-reader" },
  // ]
};

// Load subjects dynamically based on semester parameter
function loadSubjects() {
  const semester = getQueryParam("semester");
  const subjectList = document.getElementById("subject-list");
  subjectList.innerHTML = "";

  if (!semester || !subjectsData[semester]) {
    subjectList.textContent = "Invalid or missing semester parameter.";
    return;
  }

  subjectsData[semester].forEach((subject) => {
    const card = document.createElement("a");
    card.className = "category-card";
    card.href = `units-pyqs.html?semester=${semester}&subject=${subject.id}`;
    card.innerHTML = `<i class="${subject.icon}" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>${subject.name}`;
    subjectList.appendChild(card);
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
  loadSubjects();
  setupMenuToggle();
});
