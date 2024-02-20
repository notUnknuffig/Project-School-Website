window.addEventListener("scroll", scrollVar)
window.addEventListener("resize", scrollVar)

function scrollVar() {
    const htmlDocument = document.documentElement
    const scrollPercent = Math.min((htmlDocument.scrollTop / htmlDocument.clientHeight) * 100, 200)
    htmlDocument.style.setProperty("--scroll", scrollPercent)

    let colorValue_section_1 = (300 - 227) * (Math.min(Math.max(scrollPercent -80, 0), 20)/ 20)
    let colorValue_section_2 = (171 - 300) * (Math.min(Math.max(scrollPercent -180, 0), 20)/ 20)

    
    const color = 227 + colorValue_section_1 + colorValue_section_2
    
    htmlDocument.style.setProperty("--value-clr", color)
}

scrollVar()