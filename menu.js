window.addEventListener("scroll", scrollVar)
window.addEventListener("resize", scrollVar)

let menu_open = false

function scrollVar() {
    const htmlDocument = document.documentElement
    const scrollPercent = Math.min((htmlDocument.scrollTop / htmlDocument.clientHeight) * 100, 200)
    htmlDocument.style.setProperty("--scroll", scrollPercent)

    const colorValue_section_1 = (197 - 240) * (Math.min(Math.max(scrollPercent -80, 0), 20)/ 20)
    const colorValue_section_2 = (140 - 197) * (Math.min(Math.max(scrollPercent -180, 0), 20)/ 20)

    
    const color = 240 + colorValue_section_1 + colorValue_section_2
    
    htmlDocument.style.setProperty("--value-clr", color)

    var menuButton = document.getElementById("menu-button");
    var menu = document.getElementsByClassName("menu-item-container");

    if(htmlDocument.clientWidth <= 800)
    {
        if(!menu_open) {
            menu_open = false;
            menu[0].style.visibility = "hidden"
            menu[0].style.transform = "translateY(0)"
            menuButton.style.backgroundImage = "url('img/menu-icon.svg')";
        }
    }
    else {
        menu_open = false;
        menu[0].style.visibility = "visible"
        menu[0].style.animation = "none"
        menu[0].style.transform = "translateY(var(--menu-scroll, 0))";
        menuButton.style.backgroundImage = "url('img/exit-icon.svg')";
    }
}

function revealMenu() {
    var menuButton = document.getElementById("menu-button");
    var menu = document.getElementsByClassName("menu-item-container");
    
    if (menu[0].style.visibility == "hidden") {
        menu_open = true;
        menu[0].style.animation = "open-close-menubar 0.5s ease-in-out forwards"
        menu[0].addEventListener("animationend", function() {
            menu[0].style.animation = "idle 0.1s"
            menu[0].style.visibility = "visible"
        })
        menu[0].style.transform = "translateY(0)"
        menuButton.style.backgroundImage = "url('img/exit-icon.svg')";
    } else {
        menu_open = false;
        menu[0].style.animation = "open-close-menubar 0.5s ease-in-out reverse backwards"
        menu[0].addEventListener("animationend", function() {
            menu[0].style.animation = "idle 0.1s"
            menu[0].style.visibility = "hidden"
        })
        menu[0].style.transform = "translateY(calc(1% * min((max( var(--scroll), 30 ) * 3 - 190), 0)))";
        menuButton.style.backgroundImage = "url('img/menu-icon.svg')";
    }
}

function revealWindow(buttonId) {
    var windowId = document.getElementById(buttonId).getAttribute("windowID")
    var window = document.getElementById(windowId);
    if (window.style.visibility == "hidden") {
        console.log("window hidden")
        window.style.animation = "open-close-window 0.5s ease-in-out reverse backwards"
        window.addEventListener("animationend", function() {
            window.style.animation = "idle 0.1s"
            window.style.visibility = "hidden"
        })

    }
    else {
        console.log("window opened")

        window.style.animation = "open-close-window 0.5s ease-in-out forwards"
        window.addEventListener("animationend", function() {
            window.style.animation = "idle 0.1s"
            window.style.visibility = "visible"
        })
    }
}