const yearEl = document.getElementById("year");
const toggleBtn = document.getElementById("themeToggle");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (toggleBtn) {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const activeTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", activeTheme);
  });
}