/**
 * পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (PUB)
 * প্রোগ্রাম ফিল্টারিং স্ক্রিপ্ট: আন্ডারগ্র্যাজুয়েট ও পোস্টগ্র্যাজুয়েট ফিল্টার
 */

document.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = document.querySelector(".programs-tabs-wrapper");
  const programsGrid = document.querySelector("#programs-display-grid");

  if (!programsGrid || typeof programsData === "undefined") return;

  // ১. প্রোগ্রাম কার্ড রেন্ডার করার ফাংশন
  function renderProgramCards(items) {
    programsGrid.innerHTML = "";

    if (items.length === 0) {
      programsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <p style="font-size: 18px;">কোনো প্রোগ্রাম পাওয়া যায়নি।</p>
        </div>
      `;
      return;
    }

    items.forEach(p => {
      // রিয়েল ইমেজ পাথ নিশ্চিত করা (পেজভেদে রিলেটিভ পাথ সামঞ্জস্য)
      const isInsidePages = window.location.pathname.includes("/pages/") || window.location.pathname.includes("/program-details/");
      const imgPath = isInsidePages ? p.image : p.image.replace("../", "./");
      const detailLink = isInsidePages 
        ? `../program-details/program-template.html?id=${p.id}` 
        : `./program-details/program-template.html?id=${p.id}`;

      const card = document.createElement("div");
      card.className = "program-card";
      card.innerHTML = `
        <div class="program-card-thumb">
          <img src="${imgPath}" alt="${p.title}" loading="lazy" onerror="this.src='${isInsidePages ? '../assets/images/programs/bba.jpg' : './assets/images/programs/bba.jpg'}'">
          <span class="program-level-badge">${p.level}</span>
        </div>
        <div class="program-card-body">
          <span class="program-faculty-tag">${p.faculty}</span>
          <h3 class="program-title">${p.title}</h3>
          <p class="program-overview-snippet">${p.overview.substring(0, 115)}...</p>
          
          <div class="program-meta-list">
            <div class="program-meta-item">
              <strong>${p.totalCredits}</strong>
              <span>টোটাল ক্রেডিট</span>
            </div>
            <div class="program-meta-item">
              <strong>${p.totalSemesters} সেমিস্টার</strong>
              <span>মেয়াদ (${p.duration})</span>
            </div>
          </div>

          <div class="program-card-footer">
            <div class="program-fee-total">
              মোট খরচ
              <strong>৳ ${p.totalFee}</strong>
            </div>
            <a href="${detailLink}" class="default-btn btn-sm">
              বিস্তারিত
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      `;
      programsGrid.appendChild(card);
    });
  }

  // ২. প্রাথমিক রেন্ডারিং (সব প্রোগ্রাম অথবা হোমপেজে প্রথম ৬টি)
  const isHomepage = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/");
  renderProgramCards(isHomepage ? programsData.slice(0, 6) : programsData);

  // ৩. ট্যাব ক্লিক ইভেন্ট হ্যান্ডলার
  if (tabsContainer) {
    const tabButtons = tabsContainer.querySelectorAll(".tab-btn");
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");
        if (filter === "all") {
          renderProgramCards(isHomepage ? programsData.slice(0, 6) : programsData);
        } else {
          const filtered = programsData.filter(p => p.level.toLowerCase() === filter.toLowerCase());
          renderProgramCards(filtered);
        }
      });
    });
  }
});
