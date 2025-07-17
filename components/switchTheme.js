export function switchTheme() {
  const switchTheme = document.getElementById("themeSwitch");
  switchTheme.addEventListener("change", toggleTheme);

  function toggleTheme() {
    
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
}
