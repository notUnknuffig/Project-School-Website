window.addEventListener("resize", menuResize)
let menu_open = false

const theme_switch = document.getElementById('theme-switch');
const htmlElement = document.documentElement;


function menuResize(isOnLoad) {
    var menuButton = document.getElementById("menu-button");
    var menu = document.getElementById("menu-item-container");

    if(htmlElement.clientWidth <= 800)
    {
        if(!menu_open) {
            menu_open = false;
            menu.style.visibility = "hidden"
            menu.style.transform = "translateY(0)"
            menuButton.style.backgroundImage = "var(--img-menu-icon)";
        }
        else if(isOnLoad) {
            menu_open = false;
            menu.style.visibility = "hidden"
            menu.style.transform = "translateY(0)"
            menuButton.style.backgroundImage = "var(--img-menu-icon)";
        }
    }
    else {
        menu_open = false;
        menu.style.visibility = "visible"
        menu.style.animation = "none"
        menu.style.transform = "translateY(var(--menu-scroll, 0))";
        menuButton.style.backgroundImage = "var(--img-exit-icon)";
    }
}

menuResize(true)

function revealMenu() {
    var menuButton = document.getElementById("menu-button");
    var menu = document.getElementById("menu-item-container");
    
    if (menu.style.visibility == "hidden") {
        menu_open = true;
        menu.style.animation = "open-close-menubar 0.5s ease-in-out forwards"
        menu.addEventListener("animationend", function() {
            menu.style.animation = "idle 0.1s"
            menu.style.visibility = "visible"
            menu.style.pointerEvents = "all"
        })
        menu.style.transform = "translateY(0)"
        menuButton.style.backgroundImage = "var(--img-exit-icon)";
    } else {
        menu_open = false;
        menu.style.animation = "open-close-menubar 0.5s ease-in-out reverse backwards"
        menu.addEventListener("animationend", function() {
            menu.style.animation = "idle 0.1s"
            menu.style.visibility = "hidden"
            menu.style.pointerEvents = "none"
        })
        menu.style.transform = "translateY(calc(1% * min((max( var(--scroll), 30 ) * 3 - 190), 0)))";
        menuButton.style.backgroundImage = "var(--img-menu-icon)";
    }
}

function setTheme() {
    if(theme_switch.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
    else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

var theme = "light";
if(window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
    theme_switch.checked = true;
    theme = "dark";
}
if(localStorage.getItem("theme", theme) == "dark") {
    theme_switch.checked = true;
    theme = "dark";
}
localStorage.setItem("theme", theme);
document.documentElement.setAttribute("data-theme", theme);