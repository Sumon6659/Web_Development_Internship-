/**
 * পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (PUB)
 * অ্যাকর্ডিয়ন স্ক্রিপ্ট: প্রশ্নোত্তর (FAQ) ও কারিকুলাম ড্রপডাউন টগল
 */

document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const currentItem = header.parentElement;
      const currentBody = currentItem.querySelector(".accordion-body");
      const isAlreadyActive = currentItem.classList.contains("active");

      // একই অ্যাকর্ডিয়নের অন্যান্য আইটেম বন্ধ করা
      const parentAccordion = currentItem.closest(".accordion");
      if (parentAccordion) {
        const siblingItems = parentAccordion.querySelectorAll(".accordion-item");
        siblingItems.forEach(item => {
          if (item !== currentItem) {
            item.classList.remove("active");
            const body = item.querySelector(".accordion-body");
            if (body) body.style.maxHeight = null;
            const h = item.querySelector(".accordion-header");
            if (h) h.setAttribute("aria-expanded", "false");
          }
        });
      }

      // বর্তমান আইটেম টগল করা
      if (isAlreadyActive) {
        currentItem.classList.remove("active");
        if (currentBody) currentBody.style.maxHeight = null;
        header.setAttribute("aria-expanded", "false");
      } else {
        currentItem.classList.add("active");
        if (currentBody) currentBody.style.maxHeight = currentBody.scrollHeight + 35 + "px";
        header.setAttribute("aria-expanded", "true");
      }
    });

    // কীবোর্ড অ্যাক্সেসিবিলিটি (Enter ও Space)
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        header.click();
      }
    });
  });
});
