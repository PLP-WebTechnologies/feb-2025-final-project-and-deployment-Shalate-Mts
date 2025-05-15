// Counter Animation
document.addEventListener("DOMContentLoaded", () => {
  const counters = [
    { id: "counter-products", value: 300 },
    { id: "counter-customers", value: 200 },
    { id: "counter-years", value: 1 },
  ];

  counters.forEach(counter => {
    let count = 0;
    const target = counter.value;
    const element = document.getElementById(counter.id);
    const interval = setInterval(() => {
      count += Math.ceil(target / 100);
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      element.textContent = count;
    }, 30);
  });
});

// Carousel functionality for testimonials
document.addEventListener("DOMContentLoaded", () => {
  const reviews = document.querySelectorAll('.carousel .review');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let current = 0;

  function showReview(index) {
    // On large screens, show all reviews
    if (window.innerWidth >= 900) {
      reviews.forEach(review => review.classList.add('active'));
    } else {
      reviews.forEach((review, i) => {
        review.classList.toggle('active', i === index);
      });
    }
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + reviews.length) % reviews.length;
    showReview(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % reviews.length;
    showReview(current);
  });

  // Show correct reviews on load and on resize
  showReview(current);
  window.addEventListener('resize', () => showReview(current));
});

// Tab Functionality
const tabButtons = document.querySelectorAll(".tab-button");
const tabs = document.querySelectorAll(".tab");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabs.forEach(tab => tab.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});