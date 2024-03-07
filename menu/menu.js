window.addEventListener("scroll", scrollVar)
window.addEventListener("resize", scrollVar)
window.addEventListener("resize", menuResize)

let menu_open = false
const htmlDocument = document.documentElement
const color_1_deg = 240;
const color_2_deg = 200;
const color_3_deg = 140;

function scrollVar() {
    const scrollPercent = Math.min((htmlDocument.scrollTop / htmlDocument.clientHeight) * 100, 200);
    htmlDocument.style.setProperty("--scroll", scrollPercent);

    const colorValue_section_1 = (color_2_deg - color_1_deg) * (Math.min(Math.max(scrollPercent -60, 0), 40)/ 40);
    const colorValue_section_2 = (color_3_deg - color_2_deg) * (Math.min(Math.max(scrollPercent -160, 0), 40)/ 40);

    const color = 240 + colorValue_section_1 + colorValue_section_2;

    htmlDocument.style.setProperty("--value-clr", color);
}

function menuResize(isOnLoad) {
    var menuButton = document.getElementById("menu-button");
    var menu = document.getElementById("menu-item-container");

    if(htmlDocument.clientWidth <= 800)
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

scrollVar()
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