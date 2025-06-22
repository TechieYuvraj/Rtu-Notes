// Utility to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const pyqsData = {
    EM1: [
        { id: 1, name: "Waiting...", pdf: "#" },
        { id: 2, name: "Waiting...", pdf: "#" },
        { id: 3, name: "Waiting...", pdf: "#" },
    ],
    EC: [
        { id: 1, name: "PYQ 2023 Solved", pdf: "https://drive.google.com/file/d/1heDwEKrXMn7LWCQS3Qo_D6UcDuSkmuZc/view?usp=sharing" },
        { id: 2, name: "PYQ 2024 Solved", pdf: "https://drive.google.com/file/d/1z3kn0eL-iENYqmjSz2CqadcnM_rBaJ6F/view?usp=sharing" },
    ],
    BCE: [
        { id: 3, name: "PYQ 2023 Solved", pdf: "https://drive.google.com/file/d/1qR82cUSHglT3j_dN-hMFJSc4ggP_ovQl/view?usp=sharing" },
        { id: 4, name: "PYQ 2024 Solved", pdf: "https://drive.google.com/file/d/13Y32FcQt7hnCjY2ZONRxhGiQT5cbromE/view?usp=sharing" },
    ],
    HV: [
        { id: 5, name: "PYQ 2023 Solved", pdf: "https://drive.google.com/file/d/1jylh1y5cJVZreTeY41iVbd3YGnovKIVZ/view?usp=sharing" },
        { id: 6, name: "PYQ 2024 Solved", pdf: "https://drive.google.com/file/d/1f-CBzu7rmgBQJeVMYfZWzg_V_ms3PEn-/view?usp=sharing" },
    ],
    BME: [
        { id: 7, name: "PYQ 2023 Solved", pdf: "https://drive.google.com/file/d/1l_qk5fw59lombHzCj7AZwa_WXAyMwxnD/view?usp=sharing" },
        { id: 8, name: "PYQ 2024 Solved", pdf: "https://drive.google.com/file/d/1WVL_2NZXctEzVCgO-8uuytp09U3zqBF3/view?usp=sharing" },
    ],
    EP: [
        { id: 9, name: "PYQ 2023 Solved", pdf: "https://drive.google.com/file/d/1_0uG7_gKx-zOe8EzOI1XygGkJ8OWSn9v/view?usp=sharing" },
        { id: 10, name: "PYQ 2024 Solved", pdf: "https://drive.google.com/file/d/1ShYzdAaF8gzJaHjMLlXxtxgi6WPwnXDu/view?usp=sharing" },
    ],
    PPS: [
        { id: 11, name: "PYQ 2023 Solved", pdf: "https://drive.google.com/file/d/1qr0bHvjewkT54S5I58Xn9rGf32ujMZp7/view?usp=sharing" },
        { id: 12, name: "PYQ 2024 Solved", pdf: "https://drive.google.com/file/d/1jBXf_beh4QzzO8P3sLpqfbt6J9Ax8zSz/view?usp=sharing" },
    ],
    BEE: [
        { id: 13, name: "PYQ 2023 Solved", pdf: "https://drive.google.com/file/d/14LGC860FOGEYz0ZKEmdoJIblV0QPh-zm/view?usp=sharing" },
        { id: 14, name: "PYQ 2024 Solved", pdf: "https://drive.google.com/file/d/1J_YOYce_QyqtRa74PG4bq_0fAcB9QIcz/view?usp=sharing" },
    ],
    CS: [
        { id: 15, name: "PYQ 2023 Solved", pdf: "https://drive.google.com/file/d/1bU5CoeiSI0XSn1GIj6M6KOYin6y_mL2s/view?usp=sharing" },
        { id: 16, name: "PYQ 2024 Solved", pdf: "https://drive.google.com/file/d/1QdfrbY0YPNICVADmAPVyLHGaZFb25v-d/view?usp=sharing" },
    ],
    EM2: [
        { id: 17, name: "PYQ 2023 Solved", pdf: "https://drive.google.com/file/d/1gngz5zLnxbygtjxPymSqSlUIFevCJDnp/view?usp=sharing" },
        { id: 18, name: "PYQ 2024 Solved", pdf: "https://drive.google.com/file/d/12SFlvXZTdsefZaTfG6MpLf6BdzRYNtk9/view?usp=sharing" },
    ],
    AEM: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    MEFA: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    DE: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    DSA: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    OOps: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    SE: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    DMS: [
        { id: 9, name: "PYQ 2022 Solved", pdf: "https://drive.google.com/file/d/1fm7hdjOOwL16IDyxpxvS-U2oRiEXjkJt/view?usp=sharing" },
        { id: 10, name: "PYQ 2023 Solved", pdf: "https://drive.google.com/file/d/1em-GlNW8SWMD9olKNHu4nZWDrCWQU8o-/view?usp=sharing" },
        { id: 11, name: "PYQ 2024 Solved", pdf: "https://drive.google.com/file/d/1JgJNerVwhvr7fzJIb_KS3hqXPV-TaqZl/view?usp=sharing" },
    ],
    TC: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    MPI_CSE: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    DBMS: [
        { id: 1, name: "PYQ 2022 Solved", pdf: "https://drive.google.com/file/d/1BWQ5_fBMqEC5ogh6U7_TEEF5rt8FGiw9/view?usp=sharing" },
        { id: 2, name: "PYQ 2023 Solved", pdf: "https://drive.google.com/file/d/1ul_deSSSopG7skw6ExpWn_8_3lhqRyqW/view?usp=sharing" },
        { id: 3, name: "PYQ 2024 Solved", pdf: "https://drive.google.com/file/d/1nglZXOnpOHdwI1HY_pZBIzmVeBHmR9Oi/view?usp=sharing" },
    ],
    TOC: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    POC: [
        { id: 4, name: "PYQ 2022 Solved", pdf: "https://drive.google.com/file/d/1sN3dCbWTv9RNC9kWh1GkAO6B45-ZRayr/view?usp=sharing" },
        { id: 5, name: "PYQ 2024 Solved", pdf: "https://drive.google.com/file/d/16hTLVf8vKu5Ihir9RMp-OOP2JDBpkxfw/view?usp=sharing" },
    ],
    DCCN: [
        { id: 6, name: "PYQ 2022 Solved", pdf: "https://drive.google.com/file/d/1pe_GY7uHSpKutmFiYsC23rZrlNSTdkm5/view?usp=sharing" },
        { id: 7, name: "PYQ 2023 Solved", pdf: "https://drive.google.com/file/d/1lRDNtz3BnKS1ZU1KQg4Onu2i6jweRc1X/view?usp=sharing" },
        { id: 8, name: "PYQ 2024 Solved", pdf: "https://drive.google.com/file/d/1MlO1xehyvZZCnyDmpIMQioyh3NZwVlBX/view?usp=sharing" },
    ],
    ITC: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    OS: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    AOA: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    CD: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    CGM: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    WC: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    MPI_IT: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    DIP: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    ML: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    AI: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    CAO: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    ISS: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    CC: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    DS: [
        { id: 4, name: "Waiting...", pdf: "" },
        { id: 5, name: "Waiting...", pdf: "#" },
        { id: 6, name: "Waiting...", pdf: "#" },
    ],
    // Add more subjects and PYQs as needed
};

// Load units and PYQs dynamically based on subject parameter
function loadUnitsAndPYQs() {
    const subject = getQueryParam("subject");
    const unitsList = document.getElementById("units-list");
    const pyqsList = document.getElementById("pyqs-list");

    unitsList.innerHTML = "";
    pyqsList.innerHTML = "";

    if (!subject) {
        unitsList.textContent = "Missing subject parameter.";
        pyqsList.textContent = "Missing subject parameter.";
        return;
    }

    const units = unitsData[subject];
    const pyqs = pyqsData[subject];

    if (!units || !pyqs) {
        unitsList.textContent = "No data available for this subject.";
        pyqsList.textContent = "No data available for this subject.";
        return;
    }

    units.forEach((unit) => {
        const card = document.createElement("div");
        card.className = "unit-card";
        card.innerHTML = `
      <span>${unit.name}</span>
      <a href="${unit.pdf}" target="_blank" rel="noopener noreferrer" class="custom-button" aria-label="Open ${unit.name} PDF">
        <i class="fas fa-file-pdf"></i> View
      </a>
    `;
        unitsList.appendChild(card);
    });

    pyqs.forEach((pyq) => {
        const card = document.createElement("div");
        card.className = "unit-card";
        card.innerHTML = `
      <span>${pyq.name}</span>
      <a href="${pyq.pdf}" target="_blank" rel="noopener noreferrer" class="custom-button" aria-label="Open ${pyq.name} PDF">
        <i class="fas fa-file-pdf"></i> View
      </a>
    `;
        pyqsList.appendChild(card);
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
    loadUnitsAndPYQs();
    setupMenuToggle();
});
