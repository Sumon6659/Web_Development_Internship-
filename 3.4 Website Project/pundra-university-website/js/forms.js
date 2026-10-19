/**
 * পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (PUB)
 * ফর্ম ভ্যালিডেশন ও ডেমো অ্যাডমিশন সাবমিশন স্ক্রিপ্ট
 * এটি একটি ফ্রন্ট-এন্ড ডেমোস্ট্রেশন এবং কোনো সংবেদনশীল ডেটা বাইরে পাঠায় না।
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // ১. ডেমো অনলাইন ভর্তি আবেদন ফর্ম
  // ==========================================
  const admissionForm = document.querySelector("#demo-admission-form");
  const admissionModal = document.querySelector("#admission-confirmation-modal");
  const modalCloseBtn = document.querySelector("#modal-close-btn");
  const modalDataSummary = document.querySelector("#modal-submission-summary");

  if (admissionForm) {
    admissionForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // ইনপুট ভ্যালুসমূহ সংগ্রহ করা
      const applicantName = document.querySelector("#applicant-name")?.value.trim();
      const applicantPhone = document.querySelector("#applicant-phone")?.value.trim();
      const applicantEmail = document.querySelector("#applicant-email")?.value.trim();
      const selectedProgram = document.querySelector("#applicant-program")?.value;
      const sscGpa = document.querySelector("#applicant-ssc-gpa")?.value.trim();
      const hscGpa = document.querySelector("#applicant-hsc-gpa")?.value.trim();

      const formAlert = document.querySelector("#admission-form-alert");

      // ক্লায়েন্ট-সাইড ভ্যালিডেশন
      if (!applicantName || applicantName.length < 3) {
        showError(formAlert, "অনুগ্রহ করে প্রার্থীর পূর্ণ নাম সঠিকভাবে লিখুন (কমপক্ষে ৩ অক্ষর)।");
        return;
      }

      const phoneRegex = /^01[3-9]\d{8}$/;
      if (!applicantPhone || !phoneRegex.test(applicantPhone)) {
        showError(formAlert, "অনুগ্রহ করে সঠিক ১১ ডিজিটের বাংলাদেশি মোবাইল নম্বর প্রদান করুন (যেমন: 01712345678)।");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!applicantEmail || !emailRegex.test(applicantEmail)) {
        showError(formAlert, "অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা প্রদান করুন।");
        return;
      }

      if (!selectedProgram) {
        showError(formAlert, "অনুগ্রহ করে কাঙ্ক্ষিত শিক্ষা প্রোগ্রাম নির্বাচন করুন।");
        return;
      }

      // সফল ডেমো আবেদন তৈরি
      hideError(formAlert);

      const demoTrackingId = "PUB-DEMO-" + Math.floor(100000 + Math.random() * 900000);
      const submissionDate = new Date().toLocaleDateString("bn-BD", { year: "numeric", month: "long", day: "numeric" });

      if (modalDataSummary) {
        modalDataSummary.innerHTML = `
          <div style="background-color: var(--bg-light); padding: 15px; border-radius: var(--radius-md); margin-bottom: 15px; text-align: left; font-size: 14.5px;">
            <p><strong>ট্র্যাকিং নম্বর:</strong> <span style="color: var(--primary-color); font-weight: 700;">${demoTrackingId}</span></p>
            <p><strong>আবেদনকারীর নাম:</strong> ${applicantName}</p>
            <p><strong>নির্বাচিত প্রোগ্রাম:</strong> ${selectedProgram}</p>
            <p><strong>মোবাইল নম্বর:</strong> ${applicantPhone}</p>
            <p><strong>তারিখ:</strong> ${submissionDate}</p>
          </div>
          <p style="font-size: 13.5px; color: var(--text-muted); line-height: 1.5;">
            * দ্রষ্টব্য: এটি একটি শিক্ষামূলক ডেমোস্ট্রেশন ফর্ম। কোনো তথ্য বিশ্ববিদ্যালয়ের অফিসিয়াল সার্ভারে জমা হয়নি। বিশ্ববিদ্যালয়ে সত্যিকার ভর্তির জন্য দয়া করে তাদের অফিশিয়াল ইউআইএমএস পোর্টালে ভিজিট করুন।
          </p>
        `;
      }

      if (admissionModal) {
        admissionModal.classList.add("active");
        admissionForm.reset();
      }
    });
  }

  // মডাল বন্ধ করার ইভেন্ট
  if (modalCloseBtn && admissionModal) {
    modalCloseBtn.addEventListener("click", () => {
      admissionModal.classList.remove("active");
    });
  }

  // ==========================================
  // ২. সাধারণ যোগাযোগ ফর্ম (Contact Form)
  // ==========================================
  const contactForm = document.querySelector("#contact-us-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.querySelector("#contact-name")?.value.trim();
      const email = document.querySelector("#contact-email")?.value.trim();
      const message = document.querySelector("#contact-message")?.value.trim();
      const alertBox = document.querySelector("#contact-form-alert");

      if (!name || !email || !message) {
        showError(alertBox, "অনুগ্রহ করে সকল আবশ্যকীয় ঘর পূরণ করুন।");
        return;
      }

      if (alertBox) {
        alertBox.className = "form-alert success";
        alertBox.textContent = `ধন্যবাদ, ${name}! আপনার বার্তাটি ডেমো হিসেবে গ্রহণ করা হয়েছে। এটি একটি প্রদর্শনমূলক ওয়েবসাইট।`;
        alertBox.style.display = "block";
        contactForm.reset();
      }
    });
  }

  // হেল্পার ফাংশন
  function showError(alertBox, message) {
    if (!alertBox) return;
    alertBox.className = "form-alert error";
    alertBox.textContent = message;
    alertBox.style.display = "block";
  }

  function hideError(alertBox) {
    if (!alertBox) return;
    alertBox.style.display = "none";
  }
});
