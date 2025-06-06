// Utility to get URL parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Data for subjects per semester
// Each subject has an icon class from Font Awesome for display
const subjectsData = {
  1: [
    { id: "EM1", name: "Engineering Mathematics-I", icon: "fa-solid fa-square-root-variable" },
    { id: "HV", name: "Human Values", icon: "fa-solid fa-leaf" },
    { id: "BCE", name: "Basic Civil Engineering", icon: "fa-solid fa-bolt" },
    { id: "BME", name: "Basic Mechanical Engineering", icon: "fa-solid fa-cogs" },
    { id: "EC", name: "Engineering Chemistry", icon: "fa-solid fa-flask" },
  ],
  2: [
    { id: "EM2", name: "Engineering Mathematics-II", icon: "fa-solid fa-square-root-variable" },
    { id: "BEE", name: "Basic Electrical Engineering", icon: "fa-solid fa-microchip" },
    { id: "EP", name: "Engineering Physics", icon: "fa-solid fa-atom" },
    { id: "PPS", name: "Programming for Problem Solving", icon: "fa-solid fa-code" },
    { id: "CS", name: "Communication Skills", icon: "fa-solid fa-pencil-ruler" },
  ],
  3: [
    { id: "AEM", name: "Advanced Engineering Mathematics", icon: "fa-solid fa-square-root-variable" },
    { id: "MEFA", name: "Managerial Economics and Financial Accounting", icon: "fa-solid fa-atom" },
    { id: "DE", name: "Digital Electronics", icon: "fa-solid fa-code" },
    { id: "DSA", name: "Data Structures and Algorithm", icon: "fa-solid fa-pencil-ruler" },
    { id: "OOPs", name: "Object Oriented Programming", icon: "fa-solid fa-pencil-ruler" },
    { id: "SE", name: "Software engineering", icon: "fa-solid fa-pencil-ruler" },
  ],
  4: [
    { id: "DMS", name: "Discrete Mathematics Structure", icon: "fa-solid fa-square-root-variable" },
    { id: "TC", name: "Technical Communication", icon: "fa-solid fa-microchip" },
    { id: "MPI_CSE", name: "Microprocessor & Interfaces", icon: "fa-solid fa-atom" },
    { id: "DBMS", name: "Database Management System", icon: "fa-solid fa-code" },
    { id: "TOC", name: "Theory Of Computation", icon: "fa-solid fa-pencil-ruler" },
    { id: "DCCN", name: "Data Communication and Computer Networks", icon: "fa-solid fa-pencil-ruler" },
  ],
  5: [
    { id: "ITC", name: "Information Theory and Computation", icon: "fa-solid fa-square-root-variable" },
    { id: "OS", name: "Operating System", icon: "fa-solid fa-microchip" },
    { id: "CGM", name: "Computer Graphics and Multimedia", icon: "fa-solid fa-atom" },
    { id: "AOA", name: "Analysis of Algorithm", icon: "fa-solid fa-code" },
    { id: "CD", name: "Compiler Design", icon: "fa-solid fa-pencil-ruler" },
    { id: "WC", name: "Wireless Communication", icon: "fa-solid fa-pencil-ruler" },
    { id: "MPI_IT", name: "Microprocessor & Interfaces", icon: "fa-solid fa-atom" },
  ],
  6: [
    { id: "DIP", name: "Digital Image Processing", icon: "fa-solid fa-square-root-variable" },
    { id: "ML", name: "Machine Learning", icon: "fa-solid fa-microchip" },
    { id: "CAO", name: "Computer Architecture and Organizaion", icon: "fa-solid fa-atom" },
    { id: "ISS", name: "Information Security System", icon: "fa-solid fa-code" },
    { id: "AI", name: "Artificial Intelligence", icon: "fa-solid fa-pencil-ruler" },
    { id: "DS", name: "Distributed System", icon: "fa-solid fa-atom" },
    { id: "CC", name: "Cloud Computing", icon: "fa-solid fa-microchip" },
  ],
  // 7: [
  //   { id: "EM2", name: "Engineering Mathematics-II", icon: "fa-solid fa-square-root-variable" },
  //   { id: "BEE", name: "Basic Electrical Engineering", icon: "fa-solid fa-microchip" },
  //   { id: "EP", name: "Engineering Physics", icon: "fa-solid fa-atom" },
  //   { id: "PPS", name: "Programming for Problem Solving", icon: "fa-solid fa-code" },
  //   { id: "CS", name: "Communication Skills", icon: "fa-solid fa-pencil-ruler" },
  // ],
  // 8: [
  //   { id: "EM2", name: "Engineering Mathematics-II", icon: "fa-solid fa-square-root-variable" },
  //   { id: "BEE", name: "Basic Electrical Engineering", icon: "fa-solid fa-microchip" },
  //   { id: "EP", name: "Engineering Physics", icon: "fa-solid fa-atom" },
  //   { id: "PPS", name: "Programming for Problem Solving", icon: "fa-solid fa-code" },
  //   { id: "CS", name: "Communication Skills", icon: "fa-solid fa-pencil-ruler" },
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
