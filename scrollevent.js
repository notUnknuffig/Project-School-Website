window.addEventListener("scroll", scrollVar)
window.addEventListener("resize", scrollVar)

function scrollVar() {
    const htmlDocument = document.documentElement
    const scrollPercent = Math.min((htmlDocument.scrollTop / htmlDocument.clientHeight) * 100, 200)
    htmlDocument.style.setProperty("--scroll", scrollPercent)
}

scrollVar()