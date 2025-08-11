// Nav and hero section
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});


// history section

// Reveal on scroll
const items = document.querySelectorAll(".timeline-item");
window.addEventListener("scroll", () => {
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add("show");
        }
    });
});

// when click on join celebration button

const joinBtn = document.getElementById("joinBtn");
  const popup = document.getElementById("celebrationPopup");

  joinBtn.addEventListener("click", () => {
    // Show Popup
    popup.style.display = "block";

    // Hide Popup after 2 seconds
    setTimeout(() => {
      popup.style.display = "none";
    }, 2000);

    // Fire Confetti 🎉
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  });

