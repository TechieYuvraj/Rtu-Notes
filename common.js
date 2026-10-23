// common.js - Shared utilities and subject catalog for RTU Notes

// Global Site Configuration
const RTU_CONFIG = {
  // Published Google Form URL
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScYcvcNuQ6L2e2zpklMp61QYEjDpIHfApVYtGJNgnVY3m0-NA/viewform",
  contactUrl: "https://yuvraj.rtunotes.in",
  // Google Form Pre-fill Entry IDs
  formEntries: {
    action: "entry.1219573920",
    branchSem: "entry.616813986",
    subject: "entry.1941603091",
    unitOrYear: "entry.1753262571",
  },
};

// Helper: Get feedback/request form URL with dynamic pre-fill parameters
function getFeedbackFormUrl(options) {
  const base = RTU_CONFIG.googleFormUrl;
  if (!base) return RTU_CONFIG.contactUrl;

  let subjectName = "";
  let actionType = "";
  let unitName = "";
  let semester = null;

  if (typeof options === "string") {
    subjectName = options;
  } else if (typeof options === "object" && options !== null) {
    subjectName = options.subject || "";
    actionType = options.action || "";
    unitName = options.unit || "";
    semester = options.semester || null;
  }

  const params = new URLSearchParams();

  if (actionType && RTU_CONFIG.formEntries?.action) {
    params.set(RTU_CONFIG.formEntries.action, actionType);
  }
  if (subjectName && RTU_CONFIG.formEntries?.subject) {
    params.set(RTU_CONFIG.formEntries.subject, subjectName);
  }
  if (unitName && RTU_CONFIG.formEntries?.unitOrYear) {
    params.set(RTU_CONFIG.formEntries.unitOrYear, unitName);
  }
  if (semester && RTU_CONFIG.formEntries?.branchSem) {
    const sem = Number(semester);
    if (sem === 1 || sem === 2) {
      params.set(RTU_CONFIG.formEntries.branchSem, "1st Year (Semester 1 & 2)");
    } else if (sem === 3) {
      params.set(RTU_CONFIG.formEntries.branchSem, "2nd Year (Semester 3)");
    } else if (sem === 4) {
      params.set(RTU_CONFIG.formEntries.branchSem, "2nd Year (Semester 4)");
    } else if (sem === 5) {
      params.set(RTU_CONFIG.formEntries.branchSem, "3rd Year (Semester 5)");
    } else if (sem === 6) {
      params.set(RTU_CONFIG.formEntries.branchSem, "3rd Year (Semester 6)");
    } else if (sem === 7 || sem === 8) {
      params.set(RTU_CONFIG.formEntries.branchSem, "4th Year (Semester 7 & 8)");
    }
  }

  const queryString = params.toString();
  return queryString ? `${base}?usp=pp_url&${queryString}` : base;
}

// Master catalog of RTU subjects across semesters
const RTU_CATALOG = [
  // Semester 1
  { id: "EM1", name: "Engineering Mathematics-I", semester: 1, year: 1 },
  { id: "HV", name: "Human Values", semester: 1, year: 1 },
  { id: "BCE", name: "Basic Civil Engineering", semester: 1, year: 1 },
  { id: "BME", name: "Basic Mechanical Engineering", semester: 1, year: 1 },
  { id: "EC", name: "Engineering Chemistry", semester: 1, year: 1 },

  // Semester 2
  { id: "EM2", name: "Engineering Mathematics-II", semester: 2, year: 1 },
  { id: "BEE", name: "Basic Electrical Engineering", semester: 2, year: 1 },
  { id: "EP", name: "Engineering Physics", semester: 2, year: 1 },
  { id: "PPS", name: "Programming for Problem Solving", semester: 2, year: 1 },
  { id: "CS", name: "Communication Skills", semester: 2, year: 1 },

  // Semester 3
  { id: "AEM", name: "Advanced Engineering Mathematics", semester: 3, year: 2 },
  { id: "MEFA", name: "Managerial Economics and Financial Accounting", semester: 3, year: 2 },
  { id: "DE", name: "Digital Electronics", semester: 3, year: 2 },
  { id: "DSA", name: "Data Structures and Algorithm", semester: 3, year: 2 },
  { id: "OOPs", name: "Object Oriented Programming", semester: 3, year: 2 },
  { id: "SE", name: "Software Engineering", semester: 3, year: 2 },

  // Semester 4
  { id: "DMS", name: "Discrete Mathematics Structure", semester: 4, year: 2 },
  { id: "TC", name: "Technical Communication", semester: 4, year: 2 },
  { id: "MPI_CSE", name: "Microprocessor & Interfaces (CSE)", semester: 4, year: 2 },
  { id: "DBMS", name: "Database Management System", semester: 4, year: 2 },
  { id: "TOC", name: "Theory Of Computation", semester: 4, year: 2 },
  { id: "POC", name: "Principle of Communication", semester: 4, year: 2 },
  { id: "DCCN", name: "Data Communication and Computer Networks", semester: 4, year: 2 },

  // Semester 5
  { id: "ITC", name: "Information Theory and Computation", semester: 5, year: 3 },
  { id: "OS", name: "Operating System", semester: 5, year: 3 },
  { id: "CGM", name: "Computer Graphics and Multimedia", semester: 5, year: 3 },
  { id: "AOA", name: "Analysis of Algorithm", semester: 5, year: 3 },
  { id: "CD", name: "Compiler Design", semester: 5, year: 3 },
  { id: "WC", name: "Wireless Communication", semester: 5, year: 3 },
  { id: "MPI_IT", name: "Microprocessor & Interfaces (IT)", semester: 5, year: 3 },

  // Semester 6
  { id: "DIP", name: "Digital Image Processing", semester: 6, year: 3 },
  { id: "ML", name: "Machine Learning", semester: 6, year: 3 },
  { id: "CAO", name: "Computer Architecture and Organization", semester: 6, year: 3 },
  { id: "ISS", name: "Information Security System", semester: 6, year: 3 },
  { id: "AI", name: "Artificial Intelligence", semester: 6, year: 3 },
  { id: "DS", name: "Distributed System", semester: 6, year: 3 },
  { id: "CC", name: "Cloud Computing", semester: 6, year: 3 },

  // Semester 7 (4th Year)
  { id: "BDA", name: "Big Data Analytics", semester: 7, year: 4, status: "coming_soon" },
  { id: "IOT", name: "Internet of Things", semester: 7, year: 4, status: "coming_soon" },
  { id: "IS", name: "Information Security", semester: 7, year: 4, status: "coming_soon" },

  // Semester 8 (4th Year)
  { id: "DM", name: "Disaster Management", semester: 8, year: 4, status: "coming_soon" },
  { id: "CS_SEC", name: "Cyber Security", semester: 8, year: 4, status: "coming_soon" },
];

// Utility: get query parameter from URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Utility: find subject by ID
function getSubjectById(subjectId) {
  if (!subjectId) return null;
  const upper = subjectId.toUpperCase();
  return RTU_CATALOG.find((s) => s.id.toUpperCase() === upper) || null;
}

// Utility: validate if URL is a functional external/internal link
function isValidResourceUrl(url) {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim();
  if (
    trimmed === "" ||
    trimmed === "#" ||
    trimmed.toLowerCase().startsWith("error") ||
    trimmed.toLowerCase().startsWith("waiting")
  ) {
    return false;
  }
  return (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("/") ||
    trimmed.startsWith("./") ||
    trimmed.startsWith("assets/") ||
    trimmed.includes(".pdf")
  );
}

// Setup mobile navigation toggle safely
function setupMenuToggle() {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.onclick = function (e) {
      e.stopPropagation();
      navLinks.classList.toggle("active");
    };
    document.addEventListener("click", function (e) {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove("active");
      }
    });
  }
}

// Update copyright year dynamically
function initDynamicFooter() {
  const yearSpan = document.getElementById("dynamic-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// Render dynamic breadcrumbs
function renderBreadcrumbs(items) {
  const container = document.getElementById("breadcrumb-trail");
  if (!container || !Array.isArray(items)) return;

  container.innerHTML = "";
  const nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Breadcrumb");
  nav.className = "breadcrumb";

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    if (index > 0) {
      const sep = document.createElement("span");
      sep.className = "breadcrumb-sep";
      sep.setAttribute("aria-hidden", "true");
      sep.textContent = ">";
      nav.appendChild(sep);
    }
    if (isLast || !item.href) {
      const span = document.createElement("span");
      span.className = "breadcrumb-item active";
      span.textContent = item.label;
      nav.appendChild(span);
    } else {
      const link = document.createElement("a");
      link.className = "breadcrumb-item";
      link.href = item.href;
      link.textContent = item.label;
      nav.appendChild(link);
    }
  });

  container.appendChild(nav);
}

document.addEventListener("DOMContentLoaded", () => {
  setupMenuToggle();
  initDynamicFooter();
});
