// Function to detect elements entering the viewport
function onScroll() {
  const elements = document.querySelectorAll('.event');
  const triggerBottom = window.innerHeight / 5 * 4;

  elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
          el.classList.add('visible');
      } else {
          el.classList.remove('visible');
      }
  });
}

// Attach scroll event
window.addEventListener('scroll', onScroll);

// Trigger on page load
onScroll();


document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const saveTheDateBtn = document.getElementById("save-the-date-btn");
  const modal = document.getElementById("invitation-modal");
  const closeBtn = document.querySelector(".close-btn");

  // Open modal on button click
  saveTheDateBtn.addEventListener("click", () => {
      modal.classList.add("show");
  });

  // Close modal on close button click
  closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
  });

  // Close modal when clicking outside the content
  modal.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.classList.remove("show");
      }
  });
});