/**
 * পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (PUB)
 * প্রধান স্ক্রিপ্ট: ফি ক্যালকুলেটর, ব্যাক-টু-টপ বাটন ও ভিজিটর কাউন্টার
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // ১. ব্যাক টু টপ বাটন (Back to Top)
  // ==========================================
  const backToTopBtn = document.querySelector("#back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn?.classList.add("active");
    } else {
      backToTopBtn?.classList.remove("active");
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ==========================================
  // ২. ডাইনামিক টিউশন ফি ক্যালকুলেটর
  // ==========================================
  const programSelect = document.querySelector("#calc-program-select");
  const waiverSelect = document.querySelector("#calc-waiver-select");
  const calcBtn = document.querySelector("#calculate-fee-btn");

  // প্রোগ্রাম ড্রপডাউনে অপশন যোগ করা
  if (programSelect && typeof programsData !== "undefined") {
    programSelect.innerHTML = '<option value="">-- প্রোগ্রাম নির্বাচন করুন --</option>';
    programsData.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = `${p.title} (${p.level})`;
      programSelect.appendChild(opt);
    });
  }

  function calculateTuitionFee() {
    if (!programSelect || typeof programsData === "undefined") return;

    const selectedProgId = programSelect.value;
    const waiverPercent = parseInt(waiverSelect ? waiverSelect.value : "0", 10) || 0;

    const program = programsData.find(p => p.id === selectedProgId);
    const resultBox = document.querySelector("#calculator-result-container");

    if (!program || !resultBox) return;

    // সংখ্যায় রূপান্তর
    const totalOriginalFee = parseInt(program.totalFee.replace(/,/g, ""), 10);
    const tuitionOnly = parseInt(program.tuitionFee.replace(/,/g, ""), 10);
    const admissionFee = parseInt(program.admissionFee.replace(/,/g, ""), 10);
    const registrationFee = parseInt(program.registrationFee.replace(/,/g, ""), 10);
    const otherFee = parseInt(program.otherFee.replace(/,/g, ""), 10);

    // ওয়েভার শুধুমাত্র টিউশন ফি-এর ওপর প্রযোজ্য হয়
    const waiverDiscount = Math.round((tuitionOnly * waiverPercent) / 100);
    const finalTotalFee = totalOriginalFee - waiverDiscount;
    const perSemesterFee = Math.round(finalTotalFee / program.totalSemesters);
    const estimatedMonthly = Math.round(perSemesterFee / 6);

    resultBox.innerHTML = `
      <div class="result-row">
        <span>প্রোগ্রামের নাম:</span>
        <strong>${program.title}</strong>
      </div>
      <div class="result-row">
        <span>মোট ক্রেডিট ও সেমিস্টার:</span>
        <span>${program.totalCredits} ক্রেডিট (${program.totalSemesters} সেমিস্টার)</span>
      </div>
      <div class="result-row">
        <span>ভর্তি ও রেজিস্ট্রেশন ফি:</span>
        <span>৳ ${(admissionFee + registrationFee).toLocaleString("en-IN")}</span>
      </div>
      <div class="result-row">
        <span>মূল টিউশন ফি:</span>
        <span>৳ ${tuitionOnly.toLocaleString("en-IN")}</span>
      </div>
      <div class="result-row">
        <span>অন্যান্য আনুষঙ্গিক ফি:</span>
        <span>৳ ${otherFee.toLocaleString("en-IN")}</span>
      </div>
      <div class="result-row">
        <span>অর্জিত ওয়েভার (${waiverPercent}%):</span>
        <span style="color: var(--success-color); font-weight: 700;">- ৳ ${waiverDiscount.toLocaleString("en-IN")}</span>
      </div>
      <div class="result-row">
        <span>প্রতি সেমিস্টারের আনুমানিক খরচ:</span>
        <span style="color: var(--navy-color); font-weight: 700;">৳ ${perSemesterFee.toLocaleString("en-IN")}</span>
      </div>
      <div class="result-row">
        <span>ওয়েভার পরবর্তী সর্বমোট ফি:</span>
        <span>৳ ${finalTotalFee.toLocaleString("en-IN")}</span>
      </div>
    `;
    resultBox.style.display = "block";
  }

  if (calcBtn) {
    calcBtn.addEventListener("click", calculateTuitionFee);
  }

  // ==========================================
  // ৩. ভিজিটর কাউন্টার সংখ্যা এনিমেশন / প্রদর্শন
  // ==========================================
  const visitorTodayElem = document.querySelector("#visitor-count-today");
  const visitorTotalElem = document.querySelector("#visitor-count-total");

  if (visitorTodayElem && visitorTotalElem) {
    // পুন্ড্র বিশ্ববিদ্যালয়ের অফিসিয়াল ভিজিটর সংখ্যার সাথে সামঞ্জস্যপূর্ণ
    const baseToday = 3364;
    const baseTotal = 5706650;
    
    // লোকাল স্টোরেজ থেকে রিফ্রেশ সংখ্যা সামঞ্জস্য করা
    let visits = parseInt(localStorage.getItem("pub_demo_visits") || "0", 10);
    visits++;
    localStorage.setItem("pub_demo_visits", visits);

    visitorTodayElem.textContent = (baseToday + visits).toLocaleString();
    visitorTotalElem.textContent = (baseTotal + visits).toLocaleString();
  }
});
