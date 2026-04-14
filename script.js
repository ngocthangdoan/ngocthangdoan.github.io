const darkMode = document.querySelector(".switch-mode");
// const menuIcon = document.querySelector(".menu-icon");
const btnMenuIcon = document.querySelector(".btn-menu");
const btnSwitchIcon = document.querySelector(".btn-switch");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelectorAll(".nav-item");

const theme = localStorage.getItem("theme");
if (theme === "dark") {
    document.body.classList.add("dark-mode");
    darkMode.textContent = "light_mode";
}

if (theme === "light") {
    document.body.classList.remove("dark-mode");
    darkMode.textContent = "dark_mode";
}
btnSwitchIcon.addEventListener('click', () => {
// darkMode.addEventListener('click', () => {
    const isDark = document.body.classList.toggle("dark-mode");
    if (isDark) {
        darkMode.textContent = "light_mode";
        localStorage.setItem("theme", "dark");
    } else {
        darkMode.textContent = "dark_mode";
        localStorage.setItem("theme", "light");
    }

    if (navList.classList.contains("list--vertical")) {
        navList.classList.remove("list--vertical");
    }
})

btnMenuIcon.addEventListener('click', () => {
// menuIcon.addEventListener('click', () => {
    navList.classList.toggle("list--vertical");
})

navItem.forEach((item) => {
    item.addEventListener('click', ()=>{
        if (!item.classList.contains("active")) {
            document.querySelector(".nav-list .active").classList.remove("active");
            item.classList.add("active");
        }
    })
})

function setTabFocusMenuIcon() {
    if (window.innerWidth < 900) {
        btnMenuIcon.tabIndex = 0;
        btnMenuIcon.setAttribute("aria-hidden", "false");
    } else {
        btnMenuIcon.tabIndex = -1;
        btnMenuIcon.setAttribute("aria-hidden", "true");
    }
}

setTabFocusMenuIcon();
window.addEventListener('resize', setTabFocusMenuIcon);
