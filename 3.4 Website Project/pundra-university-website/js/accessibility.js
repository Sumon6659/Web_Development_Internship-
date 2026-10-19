/**
 * পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (PUB)
 * অ্যাক্সেসিবিলিটি স্ক্রিপ্ট: কীবোর্ড নেভিগেশন ও স্ক্রিন রিডার সুবিধা
 */

document.addEventListener("DOMContentLoaded", () => {
  // ১. ড্রপডাউন মেনুসমূহে কীবোর্ড ফোকাস সমর্থন
  const dropdownToggles = document.querySelectorAll(".nav-item > .nav-link");

  dropdownToggles.forEach(toggle => {
    const parent = toggle.closest(".nav-item");
    const dropdownMenu = parent?.querySelector(".dropdown-menu");

    if (dropdownMenu) {
      toggle.setAttribute("aria-haspopup", "true");
      toggle.setAttribute("aria-expanded", "false");

      toggle.addEventListener("focus", () => {
        toggle.setAttribute("aria-expanded", "true");
      });

      // ড্রপডাউনের শেষ আইটেম থেকে ফোকাস চলে গেলে এরিয়া বন্ধ করা
      const lastItem = dropdownMenu.querySelector(".dropdown-item:last-child .dropdown-link");
      if (lastItem) {
        lastItem.addEventListener("blur", () => {
          toggle.setAttribute("aria-expanded", "false");
        });
      }
    }
  });

  // ২. মোডাল বা ড্রয়ার খোলা থাকা অবস্থায় ফোকাস ধরে রাখা (Focus Trap)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      const activeModal = document.querySelector(".lightbox-modal.active, #admission-confirmation-modal.active");
      if (activeModal) {
        const focusableElements = activeModal.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) { // শিফট + ট্যাব (পেছনের দিকে)
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else { // শুধু ট্যাব (সামনের দিকে)
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    }
  });
});
