document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // ✅ ONLY prevent default for hash links (like #section)
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // 🟥 DO NOT preventDefault if href is an .html file
  });
});
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
document.getElementById("faqToggle").addEventListener("click", () => {
  const box = document.getElementById("faqBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
});
// Set today's date as the minimum date
const dateInput = document.getElementById("schedule-date");
if (dateInput) {
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);
}

// Schedule confirmation
function scheduleCourse() {
  const course = document.getElementById("courseSelect").value;
  const date = document.getElementById("datePicker").value;

  if (!course || !date) {
    alert("Please select both course and date.");
    return;
  }

  const list = document.getElementById("scheduledList");
  const item = document.createElement("li");
  item.textContent = `${course} scheduled for ${new Date(date).toDateString()}`;
  list.appendChild(item);

  // Reset
  document.getElementById("courseSelect").value = "";
  document.getElementById("datePicker").value = "";
}
