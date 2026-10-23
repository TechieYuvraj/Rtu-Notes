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
    OOPs: [
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
    const semester = getQueryParam("semester");
    const unitsList = document.getElementById("units-list");
    const pyqsList = document.getElementById("pyqs-list");
    const subjectHeader = document.getElementById("subject-header-banner");

    if (!unitsList || !pyqsList) return;

    unitsList.innerHTML = "";
    pyqsList.innerHTML = "";

    // 1. Edge Case: Missing subject query param
    if (!subject) {
        if (subjectHeader) {
            subjectHeader.innerHTML = `
                <div class="subject-header-card">
                    <h1>Select a Subject</h1>
                    <p>No subject was specified in the URL. Please pick a semester below:</p>
                </div>
            `;
        }
        unitsList.innerHTML = `
            <div class="empty-fallback-box">
                <div class="fallback-sem-grid">
                    <a href="subject.html?semester=1" class="custom-button">Semester 1</a>
                    <a href="subject.html?semester=2" class="custom-button">Semester 2</a>
                    <a href="subject.html?semester=3" class="custom-button">Semester 3</a>
                    <a href="subject.html?semester=4" class="custom-button">Semester 4</a>
                    <a href="subject.html?semester=5" class="custom-button">Semester 5</a>
                    <a href="subject.html?semester=6" class="custom-button">Semester 6</a>
                </div>
            </div>
        `;
        const pyqSection = pyqsList.closest(".categories");
        if (pyqSection) pyqSection.style.display = "none";
        return;
    }

    // 2. Resolve subject metadata from catalog
    const subjectInfo = typeof getSubjectById === "function" ? getSubjectById(subject) : null;
    const resolvedName = subjectInfo ? subjectInfo.name : subject;
    const resolvedSem = semester || (subjectInfo ? subjectInfo.semester : null);
    const resolvedYear = subjectInfo ? subjectInfo.year : (resolvedSem ? Math.ceil(resolvedSem / 2) : 1);

    document.title = `${resolvedName} (${subject}) Notes & Solved PYQs - RTU Notes`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute(
            "content",
            `Download complete unit-wise lecture notes, syllabus, and RTU solved question papers (PYQs) for ${resolvedName} (${subject}).`
        );
    }

    // 3. Render Breadcrumbs
    if (typeof renderBreadcrumbs === "function") {
        const crumbs = [
            { label: "Home", href: "/" },
            { label: "Years", href: "year.html" },
        ];
        if (resolvedYear) {
            crumbs.push({ label: `Year ${resolvedYear}`, href: `semester.html?year=${resolvedYear}` });
        }
        if (resolvedSem) {
            crumbs.push({ label: `Semester ${resolvedSem}`, href: `subject.html?year=${resolvedYear}&semester=${resolvedSem}` });
        }
        crumbs.push({ label: subject });
        renderBreadcrumbs(crumbs);
    }

    // 4. Render Subject Header Banner
    if (subjectHeader) {
        subjectHeader.innerHTML = `
            <div class="subject-header-card">
                <div class="subject-tags-row">
                    <span class="badge-tag code-tag">${subject}</span>
                    ${resolvedSem ? `<span class="badge-tag sem-tag">Semester ${resolvedSem}</span>` : ""}
                    ${resolvedYear ? `<span class="badge-tag year-tag">Year ${resolvedYear}</span>` : ""}
                </div>
                <h1>${resolvedName}</h1>
                <p>Complete unit-wise lecture notes and RTU solved question papers.</p>
            </div>
        `;
    }

    // 5. Decoupled Rendering: Units
    const units = typeof unitsData !== "undefined" ? unitsData[subject] : null;
    if (Array.isArray(units) && units.length > 0) {
        units.forEach((unit) => {
            const card = document.createElement("div");
            card.className = "unit-card";
            const isAvailable = isValidResourceUrl(unit.pdf);

            const unitRequestUrl = typeof getFeedbackFormUrl === "function"
                ? getFeedbackFormUrl({
                    subject: resolvedName,
                    unit: unit.name,
                    semester: resolvedSem,
                    action: "Request Lecture Notes for a Subject",
                })
                : "https://yuvraj.rtunotes.in";

            card.innerHTML = `
                <div class="unit-card-title">${unit.name}</div>
                ${
                    isAvailable
                        ? `<a href="${unit.pdf}" target="_blank" rel="noopener noreferrer" class="custom-button" aria-label="Open ${unit.name} PDF">
                             <i class="fas fa-file-pdf"></i> View Notes
                           </a>`
                        : `<span class="badge-coming-soon"><i class="fas fa-clock"></i> In Preparation</span>
                           <a href="${unitRequestUrl}" target="_blank" rel="noopener noreferrer" class="report-link">
                             <i class="fas fa-envelope"></i> Request Notes
                           </a>`
                }
            `;
            unitsList.appendChild(card);
        });
    } else {
        const notesRequestUrl = typeof getFeedbackFormUrl === "function"
            ? getFeedbackFormUrl({
                subject: resolvedName,
                semester: resolvedSem,
                action: "Request Lecture Notes for a Subject",
            })
            : "https://yuvraj.rtunotes.in";

        unitsList.innerHTML = `
            <div class="empty-state-card">
                <i class="fas fa-book-open"></i>
                <p>Lecture notes for <strong>${resolvedName}</strong> are currently being curated.</p>
                <a href="${notesRequestUrl}" target="_blank" rel="noopener noreferrer" class="custom-button">
                    <i class="fas fa-paper-plane"></i> Request Notes
                </a>
            </div>
        `;
    }

    // 6. Decoupled Rendering: PYQs
    const rawPyqs = typeof pyqsData !== "undefined" ? pyqsData[subject] : null;
    const validPyqs = Array.isArray(rawPyqs)
        ? rawPyqs.filter((p) => p.name !== "Waiting..." && isValidResourceUrl(p.pdf))
        : [];

    if (validPyqs.length > 0) {
        validPyqs.forEach((pyq) => {
            const card = document.createElement("div");
            card.className = "unit-card";
            card.innerHTML = `
                <div class="unit-card-title">${pyq.name}</div>
                <a href="${pyq.pdf}" target="_blank" rel="noopener noreferrer" class="custom-button" aria-label="Open ${pyq.name} PDF">
                    <i class="fas fa-file-pdf"></i> View Solved PYQ
                </a>
            `;
            pyqsList.appendChild(card);
        });
    } else {
        const pyqRequestUrl = typeof getFeedbackFormUrl === "function"
            ? getFeedbackFormUrl({
                subject: resolvedName,
                semester: resolvedSem,
                action: "Request Previous Year Solved Papers (PYQs)",
            })
            : "https://yuvraj.rtunotes.in";

        pyqsList.innerHTML = `
            <div class="empty-state-card">
                <i class="fas fa-file-lines"></i>
                <p>Solved past examination papers for <strong>${resolvedName}</strong> are being processed.</p>
                <a href="${pyqRequestUrl}" target="_blank" rel="noopener noreferrer" class="custom-button">
                    <i class="fas fa-paper-plane"></i> Request Solved Paper
                </a>
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadUnitsAndPYQs();
});
