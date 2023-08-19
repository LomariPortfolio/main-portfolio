const root = document.documentElement;
const svgElements = document.querySelectorAll(".nav-link svg");
const progressBar = document.querySelector("#progressBar");
let isDarkTheme = false;
let totalPageHeight = document.body.scrollHeight - window.innerHeight;

function toggleTheme() {
  if (isDarkTheme) {
    // Switch to the original theme
    root.style.setProperty("--main-bg", "#FFFFFF");
    root.style.setProperty("--bg-primary", "#23232e");
    root.style.setProperty("--bg-secondary", "#141418");
    root.style.setProperty("--text-primary", "#000000");
    root.style.setProperty("--text-secondary", "#ececec");
    svgElements.forEach((svgElement) => {
      svgElement.style.filter = "invert(100%) grayscale(100%)";
    });
  } else {
    // Switch to the new theme
    root.style.setProperty("--main-bg", "#1b1b1b");
    root.style.setProperty("--bg-primary", "#dcdcd1");
    root.style.setProperty("--bg-secondary", "#ebebe7");
    root.style.setProperty("--text-primary", "#cdcdcd");
    root.style.setProperty("--text-secondary", "#131313");
    svgElements.forEach((svgElement) => {
      svgElement.style.filter = "invert(0)";
    });
  }
  isDarkTheme = !isDarkTheme;
}
function scrollToElement(elementId) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
window.onscroll = () => {
  let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
  progressBar.style.height = `${newProgressHeight}%`;
  progressBar.style.opacity = `${newProgressHeight}%`;
};
