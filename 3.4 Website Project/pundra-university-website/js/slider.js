/**
 * পুন্ড্র ইউনিভার্সিটি অব সায়েন্স অ্যান্ড টেকনোলজি (PUB)
 * হিরো স্লাইডার স্ক্রিপ্ট: স্বয়ংক্রিয় স্লাইড পরিবর্তন, ডটস ও বাটন কন্ট্রোল
 */

document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".hero-slider-container");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  const indicatorsContainer = document.querySelector(".slider-indicators");

  if (!slides || slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval = null;
  const slideDuration = 6000; // প্রতি স্লাইড ৬ সেকেন্ড থাকবে

  // ১. স্লাইডার ইন্ডিকেটর বাটনগুলো তৈরি করা
  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = "";
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = `slider-dot ${index === 0 ? "active" : ""}`;
      dot.setAttribute("aria-label", `Slide ${index + 1}`);
      dot.addEventListener("click", () => goToSlide(index));
      indicatorsContainer.appendChild(dot);
    });
  }

  const dots = document.querySelectorAll(".slider-dot");

  // ২. নির্দিষ্ট স্লাইডে যাওয়ার ফাংশন
  function goToSlide(index) {
    slides[currentSlide].classList.remove("active");
    if (dots.length > 0) dots[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    if (dots.length > 0) dots[currentSlide].classList.add("active");
  }

  // ৩. পরবর্তী স্লাইডে যাওয়ার ফাংশন
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  // ৪. পূর্ববর্তী স্লাইডে যাওয়ার ফাংশন
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  // ৫. বোতাম ইভেন্ট লিসেনার
  if (nextBtn) nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  if (prevBtn) prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  // ৬. স্বয়ংক্রিয় স্লাইড শুরু করা
  function startAutoplay() {
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  function stopAutoplay() {
    clearInterval(slideInterval);
  }

  function resetInterval() {
    stopAutoplay();
    startAutoplay();
  }

  startAutoplay();

  // ৭. স্লাইডারের ওপর মাউস রাখলে অটো-প্লে পজ করা
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopAutoplay);
    sliderContainer.addEventListener("mouseleave", startAutoplay);
  }

  // ৮. কীবোর্ডের তীরচিহ্ন দিয়ে স্লাইড নিয়ন্ত্রণ
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
      resetInterval();
    } else if (e.key === "ArrowRight") {
      nextSlide();
      resetInterval();
    }
  });
});
