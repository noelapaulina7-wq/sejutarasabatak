document.addEventListener("DOMContentLoaded", () => {
  // --- ANIMASI TRAVEL CARDS ---
  const travelCards = document.querySelectorAll(".travel__card");

  const revealTravel = () => {
    const triggerBottom = window.innerHeight * 0.85;

    travelCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealTravel);
  revealTravel();

  // --- TOMBOL SCROLL TO TOP ---
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

