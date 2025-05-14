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