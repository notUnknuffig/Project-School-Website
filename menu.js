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

function menuResize() {
    var menuButton = document.getElementById("menu-button");
    var menu = document.getElementsByClassName("menu-item-container");

    if(htmlDocument.clientWidth <= 800)
    {
        if(!menu_open) {
            menu_open = false;
            menu[0].style.visibility = "hidden"
            menu[0].style.transform = "translateY(0)"
            menuButton.style.backgroundImage = "url('../img/menu-icon.svg')";
        }
    }
    else {
        menu_open = false;
        menu[0].style.visibility = "visible"
        menu[0].style.animation = "none"
        menu[0].style.transform = "translateY(var(--menu-scroll, 0))";
        menuButton.style.backgroundImage = "url('../img/exit-icon.svg')";
    }
}

scrollVar()

function revealMenu() {
    var menuButton = document.getElementById("menu-button");
    var menu = document.getElementsByClassName("menu-item-container");
    
    
    if (menu[0].style.visibility == "hidden") {
        menu_open = true;
        menu[0].style.animation = "open-close-menubar 0.5s ease-in-out forwards"
        menu[0].addEventListener("animationend", function() {
            menu[0].style.animation = "idle 0.1s"
            menu[0].style.visibility = "visible"
            menu[0].style.pointerEvents = "all"
        })
        menu[0].style.transform = "translateY(0)"
        menuButton.style.backgroundImage = "url('../img/exit-icon.svg')";
    } else {
        menu_open = false;
        menu[0].style.animation = "open-close-menubar 0.5s ease-in-out reverse backwards"
        menu[0].addEventListener("animationend", function() {
            menu[0].style.animation = "idle 0.1s"
            menu[0].style.visibility = "hidden"
            menu[0].style.pointerEvents = "none"
        })
        menu[0].style.transform = "translateY(calc(1% * min((max( var(--scroll), 30 ) * 3 - 190), 0)))";
        menuButton.style.backgroundImage = "url('../img/menu-icon.svg')";
    }
}