/**
 * পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (PUB)
 * নোটিশ অনুসন্ধান ও ক্যাটাগরি ফিল্টারিং স্ক্রিপ্ট
 */

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#notice-search-input");
  const categorySelect = document.querySelector("#notice-category-select");
  const noticesContainer = document.querySelector("#notices-display-container");

  if (!noticesContainer || typeof noticesData === "undefined") return;

  // ১. নোটিশ রেন্ডার করার ফাংশন
  function renderNotices(items) {
    noticesContainer.innerHTML = "";

    if (items.length === 0) {
      noticesContainer.innerHTML = `
        <div style="text-align: center; padding: 40px; background-color: var(--bg-light); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
          <p style="font-size: 16px; color: var(--text-muted); margin-bottom: 5px;">কোনো নোটিশ বা বিজ্ঞপ্তি পাওয়া যায়নি।</p>
          <span style="font-size: 13px; color: var(--text-muted);">অন্য কি-ওয়ার্ড বা ক্যাটাগরি দিয়ে চেষ্টা করুন।</span>
        </div>
      `;
      return;
    }

    const isInsidePages = window.location.pathname.includes("/pages/") || window.location.pathname.includes("/notice-details/");

    items.forEach(n => {
      const parts = n.date.split(" ");
      const day = parts[0] || "15";
      const month = parts[1] || "Oct";
      const detailLink = isInsidePages
        ? `../notice-details/notice-template.html?id=${n.id}`
        : `./notice-details/notice-template.html?id=${n.id}`;

      const noticeItem = document.createElement("div");
      noticeItem.className = "notice-box";
      noticeItem.innerHTML = `
        <div class="notice-date-badge">
          <span class="notice-date-day">${day}</span>
          <span class="notice-date-month">${month}</span>
        </div>
        <div class="notice-info">
          <span class="notice-tag">${n.category}</span>
          <h4 class="notice-title">
            <a href="${detailLink}">${n.title}</a>
          </h4>
          <span class="notice-meta">প্রকাশক: ${n.author}</span>
        </div>
        <div class="notice-action">
          <a href="${detailLink}" class="default-btn btn-sm" aria-label="বিজ্ঞপ্তি পড়ুন">
            পড়ুন
          </a>
        </div>
      `;
      noticesContainer.appendChild(noticeItem);
    });
  }

  // ২. ফিল্টার ও সার্চ প্রয়োগের ফাংশন
  function applyFilter() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const category = categorySelect ? categorySelect.value : "all";

    const filtered = noticesData.filter(n => {
      const matchesQuery = n.title.toLowerCase().includes(query) || n.summary.toLowerCase().includes(query);
      const matchesCategory = category === "all" || n.category.toLowerCase() === category.toLowerCase();
      return matchesQuery && matchesCategory;
    });

    renderNotices(filtered);
  }

  // ৩. ইভেন্ট লিসেনার যুক্ত করা
  if (searchInput) {
    searchInput.addEventListener("input", applyFilter);
  }

  if (categorySelect) {
    categorySelect.addEventListener("change", applyFilter);
  }

  // ৪. প্রাথমিক রেন্ডারিং
  const isHomepage = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/");
  renderNotices(isHomepage ? noticesData.slice(0, 5) : noticesData);
});
