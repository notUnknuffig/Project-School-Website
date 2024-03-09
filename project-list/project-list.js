var openWindows = [];

function windowDisplay(buttonId) {
    var windowId = document.getElementById(buttonId).getAttribute("windowID");
    var windowState = document.getElementById(buttonId).getAttribute("windowState");
    var window = document.getElementById(windowId);
    var index = openWindows.indexOf(window);

    if (windowState == "close") {
        if (index !== -1) {
            closeWindow(window);
        }
    }
    else if(windowState == "open") {
        if (index === -1) {
            closeAllWindows();
            openWindow(window);
        }
    }
    else {
        if(window.style.display == "none") {
            if (index === -1) {
                openWindow(window);
            }
        }
        else {
            if (index === -1) {
                closeWindow(window);
            }
        }
    }
}

function openWindow(window) {
    if(window.style.display == "block") {
        console.log("Window already open!")
    }
    else {
        openWindows.push(window);
        window.style.display = "grid";
    }
}

function closeWindow(window) {
    if(window.style.display == "none") {
        console.log("Window already closed!")
    }  
    else {
        var index = openWindows.indexOf(window);
        if (index !== -1) {
            openWindows.splice(index, 1);
        }
        window.style.display = "none";
    }
}

function closeAllWindows() {
    openWindows.forEach(item => {
        closeWindow(item);
    });
}