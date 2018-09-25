---
---

main = document.querySelector('body');

const getCurrentTheme = () => {
  return main.className;
}

const populateThemeStorage = () => {
  localStorage.setItem('theme', main.className);

  setSiteTheme();
}

const setSiteTheme = () => {
  main.className = localStorage.getItem('theme');
}

if (!localStorage.getItem('theme')) {
  populateThemeStorage();
} else {
  setSiteTheme();
}

let theme_toggle = document.querySelector('.theme-toggle');

theme_toggle.addEventListener('click', function (e) {
  if (getCurrentTheme() == 'th--light') {
    main.classList.replace('th--light', 'th--dark');
  } else {
    main.classList.replace('th--dark', 'th--light');
  }
  const current_theme = getCurrentTheme();
  localStorage.setItem('theme', current_theme);
  populateThemeStorage();
}, false);
