/**
 * পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (PUB)
 * লাইটবক্স ফটো গ্যালারি স্ক্রিপ্ট: ছবিতে ক্লিক করলে বড় ভিউ ও ক্লোজ হ্যান্ডলিং
 */

document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightboxModal = document.querySelector("#gallery-lightbox-modal");
  const lightboxImg = document.querySelector("#lightbox-image");
  const lightboxClose = document.querySelector(".lightbox-close");

  if (!lightboxModal || !lightboxImg) return;

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "Campus Photo";
        lightboxModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  function closeLightbox() {
    lightboxModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxModal.classList.contains("active")) {
      closeLightbox();
    }
  });
});
