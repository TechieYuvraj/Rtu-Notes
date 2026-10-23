// index.js - Homepage logic & instant subject search

function setupHeroSearch() {
  const searchInput = document.getElementById("subject-search");
  const searchResults = document.getElementById("search-results");

  if (!searchInput || !searchResults) return;

  function performSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      searchResults.style.display = "none";
      searchResults.innerHTML = "";
      return;
    }

    const matches = RTU_CATALOG.filter((sub) => {
      const matchId = sub.id.toLowerCase().includes(q);
      const matchName = sub.name.toLowerCase().includes(q);
      return matchId || matchName;
    });

    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="search-no-result">No subjects found matching "${query}".</div>`;
      searchResults.style.display = "block";
      return;
    }

    searchResults.innerHTML = matches
      .slice(0, 8)
      .map((sub) => {
        const isComingSoon = sub.status === "coming_soon";
        const targetUrl = isComingSoon
          ? `subject.html?year=${sub.year}&semester=${sub.semester}`
          : `units-pyqs.html?semester=${sub.semester}&subject=${sub.id}`;

        return `
          <a href="${targetUrl}" class="search-result-item">
            <div class="search-result-info">
              <span class="search-subject-name">${sub.name}</span>
              <span class="search-subject-code">${sub.id}</span>
            </div>
            <div class="search-result-meta">
              <span class="search-sem-tag">Sem ${sub.semester}</span>
              ${isComingSoon ? '<span class="search-soon-tag">Coming Soon</span>' : ''}
            </div>
          </a>
        `;
      })
      .join("");

    searchResults.style.display = "block";
  }

  searchInput.addEventListener("input", (e) => {
    performSearch(e.target.value);
  });

  searchInput.addEventListener("focus", (e) => {
    if (e.target.value.trim()) {
      performSearch(e.target.value);
    }
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupHeroSearch();
});
