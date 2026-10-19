/**
 * পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (PUB)
 * নেভিগেশন স্ক্রিপ্ট: মোবাইল মেনু ড্রয়ার, ড্রপডাউন এবং অ্যাক্টিভ লিঙ্ক নিয়ন্ত্রণ
 */

document.addEventListener("DOMContentLoaded", () => {
  // ১. উপাদানসমূহ নির্বাচন করা
  const mobileToggleBtn = document.querySelector(".mobile-toggle-btn");
  const mobileDrawer = document.querySelector(".mobile-drawer");
  const drawerBackdrop = document.querySelector(".drawer-backdrop");
  const drawerCloseBtn = document.querySelector(".drawer-close-btn");
  const mobileSubmenuToggles = document.querySelectorAll(".mobile-submenu-toggle");

  // ২. মোবাইল ড্রয়ার খোলার ফাংশন
  function openMobileDrawer() {
    if (mobileDrawer && drawerBackdrop) {
      mobileDrawer.classList.add("active");
      drawerBackdrop.classList.add("active");
      document.body.style.overflow = "hidden"; // পেজের স্ক্রলিং সাময়িক বন্ধ করা
      mobileToggleBtn?.setAttribute("aria-expanded", "true");
    }
  }

  // ৩. মোবাইল ড্রয়ার বন্ধ করার ফাংশন
  function closeMobileDrawer() {
    if (mobileDrawer && drawerBackdrop) {
      mobileDrawer.classList.remove("active");
      drawerBackdrop.classList.remove("active");
      document.body.style.overflow = ""; // পেজের স্ক্রলিং পুনরায় চালু করা
      mobileToggleBtn?.setAttribute("aria-expanded", "false");
    }
  }

  // ৪. ইভেন্ট লিসেনার যুক্ত করা
  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener("click", openMobileDrawer);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", closeMobileDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", closeMobileDrawer);
  }

  // ৫. মোবাইল মেনুর সাব-মেনু টগল করা (Accordion Effect)
  mobileSubmenuToggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const parentItem = toggle.closest(".mobile-nav-item");
      if (parentItem) {
        parentItem.classList.toggle("open");
      }
    });
  });

  // ৬. বর্তমান পেজ অনুযায়ী নেভিগেশন হাইলাইট করা
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link, .dropdown-link, .mobile-submenu-link");

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");
    if (linkHref && currentPath.endsWith(linkHref.replace("./", ""))) {
      link.classList.add("active");
      const parentDropdown = link.closest(".nav-item");
      if (parentDropdown) {
        const topLink = parentDropdown.querySelector(".nav-link");
        if (topLink) topLink.classList.add("active");
      }
    }
  });

  // ৭. কীবোর্ডের Escape বোতাম চাপলে মোবাইল ড্রয়ার বন্ধ করা
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileDrawer();
    }
  });
});
