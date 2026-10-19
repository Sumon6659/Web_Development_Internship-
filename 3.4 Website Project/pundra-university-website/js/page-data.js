/**
 * পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (PUB)
 * ডাইনামিক পেজ ডেটা লোডার: টেমপ্লেট পেজসমূহে ইউআরএল প্যারামিটার থেকে ডেটা লোড করা
 */

document.addEventListener("DOMContentLoaded", () => {
  // ১. ইউআরএল কোয়েরি প্যারামিটার পাওয়ার ফাংশন
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // ==========================================
  // ক. প্রোগ্রাম ডিটেইলস টেমপ্লেট লোডার
  // ==========================================
  const programDetailsContainer = document.querySelector("#program-details-container");
  if (programDetailsContainer && typeof programsData !== "undefined") {
    const progId = getQueryParam("id") || "cse"; // ডিফল্ট সিএসই প্রোগ্রাম
    const program = programsData.find(p => p.id === progId) || programsData[0];

    if (program) {
      document.title = `${program.title} | পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি`;
      
      const titleElem = document.querySelector("#prog-title");
      if (titleElem) titleElem.textContent = program.title;

      const breadcrumbElem = document.querySelector("#prog-breadcrumb");
      if (breadcrumbElem) breadcrumbElem.textContent = program.shortName;

      const facultyElem = document.querySelector("#prog-faculty");
      if (facultyElem) facultyElem.textContent = program.faculty;

      const deptElem = document.querySelector("#prog-department");
      if (deptElem) deptElem.textContent = program.department;

      const creditsElem = document.querySelector("#prog-credits");
      if (creditsElem) creditsElem.textContent = program.totalCredits;

      const semestersElem = document.querySelector("#prog-semesters");
      if (semestersElem) semestersElem.textContent = program.totalSemesters;

      const durationElem = document.querySelector("#prog-duration");
      if (durationElem) durationElem.textContent = program.duration;

      const totalFeeElem = document.querySelector("#prog-total-fee");
      if (totalFeeElem) totalFeeElem.textContent = `৳ ${program.totalFee}`;

      const admFeeElem = document.querySelector("#prog-adm-fee");
      if (admFeeElem) admFeeElem.textContent = `৳ ${program.admissionFee}`;

      const tuitionFeeElem = document.querySelector("#prog-tuition-fee");
      if (tuitionFeeElem) tuitionFeeElem.textContent = `৳ ${program.tuitionFee}`;

      const monthlyFeeElem = document.querySelector("#prog-monthly-fee");
      if (monthlyFeeElem) monthlyFeeElem.textContent = `৳ ${program.monthlyFee}`;

      const overviewElem = document.querySelector("#prog-overview");
      if (overviewElem) overviewElem.textContent = program.overview;

      const eligibilityElem = document.querySelector("#prog-eligibility");
      if (eligibilityElem) eligibilityElem.textContent = program.eligibility;

      const imgElem = document.querySelector("#prog-image");
      if (imgElem) {
        imgElem.src = program.image;
        imgElem.alt = program.title;
      }

      const careerList = document.querySelector("#prog-career-list");
      if (careerList && program.careerProspects) {
        careerList.innerHTML = program.careerProspects.map(c => `<li>${c}</li>`).join("");
      }
    }
  }

  // ==========================================
  // খ. ডিপার্টমেন্ট ডিটেইলস টেমপ্লেট লোডার
  // ==========================================
  const departmentDetailsContainer = document.querySelector("#department-details-container");
  if (departmentDetailsContainer && typeof departmentsData !== "undefined") {
    const deptSlug = getQueryParam("id") || getQueryParam("dept") || "computer-science-and-engineering";
    const dept = departmentsData.find(d => d.slug === deptSlug || d.id === deptSlug) || departmentsData[0];

    if (dept) {
      document.title = `${dept.name} | পুন্ড্র ইউনিভার্সিটি`;

      const nameElem = document.querySelector("#dept-name");
      if (nameElem) nameElem.textContent = dept.name;

      const facultyElem = document.querySelector("#dept-faculty");
      if (facultyElem) facultyElem.textContent = dept.faculty;

      const headNameElem = document.querySelector("#dept-head-name");
      if (headNameElem) headNameElem.textContent = dept.headName;

      const headDesigElem = document.querySelector("#dept-head-desig");
      if (headDesigElem) headDesigElem.textContent = dept.headDesignation;

      const estElem = document.querySelector("#dept-established");
      if (estElem) estElem.textContent = dept.established;

      const emailElem = document.querySelector("#dept-email");
      if (emailElem) emailElem.textContent = dept.email;

      const phoneElem = document.querySelector("#dept-phone");
      if (phoneElem) phoneElem.textContent = dept.phone;

      const overviewElem = document.querySelector("#dept-overview");
      if (overviewElem) overviewElem.textContent = dept.banglaOverview;

      const descElem = document.querySelector("#dept-description");
      if (descElem) descElem.textContent = dept.description;

      const imgElem = document.querySelector("#dept-image");
      if (imgElem) {
        imgElem.src = dept.image;
        imgElem.alt = dept.name;
      }

      const progList = document.querySelector("#dept-programs-list");
      if (progList && dept.programsOffered) {
        progList.innerHTML = dept.programsOffered.map(p => `<li><strong>${p}</strong></li>`).join("");
      }

      const facList = document.querySelector("#dept-facilities-list");
      if (facList && dept.facilities) {
        facList.innerHTML = dept.facilities.map(f => `<li>${f}</li>`).join("");
      }
    }
  }

  // ==========================================
  // গ. নোটিশ ডিটেইলস টেমপ্লেট লোডার
  // ==========================================
  const noticeDetailsContainer = document.querySelector("#notice-details-container");
  if (noticeDetailsContainer && typeof noticesData !== "undefined") {
    const noticeId = parseInt(getQueryParam("id"), 10) || 1;
    const notice = noticesData.find(n => n.id === noticeId) || noticesData[0];

    if (notice) {
      document.title = `${notice.title} | পুন্ড্র ইউনিভার্সিটি নোটিশ`;

      const titleElem = document.querySelector("#notice-detail-title");
      if (titleElem) titleElem.textContent = notice.title;

      const dateElem = document.querySelector("#notice-detail-date");
      if (dateElem) dateElem.textContent = notice.date;

      const catElem = document.querySelector("#notice-detail-cat");
      if (catElem) catElem.textContent = notice.category;

      const authorElem = document.querySelector("#notice-detail-author");
      if (authorElem) authorElem.textContent = notice.author;

      const summaryElem = document.querySelector("#notice-detail-summary");
      if (summaryElem) summaryElem.textContent = notice.summary;
    }
  }

  // ==========================================
  // ঘ. ইভেন্ট ডিটেইলস টেমপ্লেট লোডার
  // ==========================================
  const eventDetailsContainer = document.querySelector("#event-details-container");
  if (eventDetailsContainer && typeof eventsData !== "undefined") {
    const eventId = parseInt(getQueryParam("id"), 10) || 1;
    const event = eventsData.find(e => e.id === eventId) || eventsData[0];

    if (event) {
      document.title = `${event.title} | পুন্ড্র ইউনিভার্সিটি ইভেন্ট`;

      const titleElem = document.querySelector("#event-detail-title");
      if (titleElem) titleElem.textContent = event.title;

      const dateElem = document.querySelector("#event-detail-date");
      if (dateElem) dateElem.textContent = event.date;

      const timeElem = document.querySelector("#event-detail-time");
      if (timeElem) timeElem.textContent = event.time;

      const venueElem = document.querySelector("#event-detail-venue");
      if (venueElem) venueElem.textContent = event.venue;

      const orgElem = document.querySelector("#event-detail-organizer");
      if (orgElem) orgElem.textContent = event.organizer;

      const descElem = document.querySelector("#event-detail-desc");
      if (descElem) descElem.textContent = event.description;

      const imgElem = document.querySelector("#event-detail-img");
      if (imgElem) {
        imgElem.src = event.image;
        imgElem.alt = event.title;
      }
    }
  }
});
