const darkMode = document.querySelector(".switch-mode");
const menuIcon = document.querySelector(".menu-icon");
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

darkMode.addEventListener('click', () => {
    const isDark = document.body.classList.toggle("dark-mode");
    if (isDark) {
        darkMode.textContent = "light_mode";
        localStorage.setItem("theme", "dark");
    } else {
        darkMode.textContent = "dark_mode";
        localStorage.setItem("theme", "light");
    }

})

menuIcon.addEventListener('click', () => {
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