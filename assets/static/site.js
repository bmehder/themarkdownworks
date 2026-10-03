const preferences = ["system", "dark", "light"];
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

const icons = {
  system: "<rect x='3' y='4' width='18' height='13' rx='1'></rect><path d='M8 21h8M12 17v4'></path>",
  dark: "<path d='M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z'></path>",
  light: "<circle cx='12' cy='12' r='3.5'></circle><path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4'></path>",
};

function savedPreference() {
  const saved = localStorage.getItem("tmw-theme");
  return preferences.includes(saved) ? saved : "system";
}

function applyTheme(preference) {
  const theme = preference === "system"
    ? (systemTheme.matches ? "dark" : "light")
    : preference;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.setAttribute("aria-label", `Theme: ${preference}. Change theme.`);
    button.setAttribute("title", `Theme: ${preference}`);
    button.querySelector("svg").innerHTML = icons[preference];
  });
}

document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const current = savedPreference();
    const next = preferences[(preferences.indexOf(current) + 1) % preferences.length];
    localStorage.setItem("tmw-theme", next);
    applyTheme(next);
  });
});

systemTheme.addEventListener("change", () => {
  if (savedPreference() === "system") applyTheme("system");
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => link.closest("details")?.removeAttribute("open"));
});

document.querySelector("[data-back-to-top]")?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
});

applyTheme(savedPreference());
