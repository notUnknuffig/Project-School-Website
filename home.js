window.addEventListener("scroll", scrollVar)
window.addEventListener("resize", scrollVar)

const htmlDocument = document.documentElement
var effectState = true;

const color_1_deg = 270;
const color_2_deg = 200;
const color_3_deg = 140;

function scrollVar() {
    const scrollPercent = Math.min((htmlDocument.scrollTop / htmlDocument.clientHeight) * 100, 200);
    htmlDocument.style.setProperty("--scroll", scrollPercent);

    const colorValue_section_1 = (color_2_deg - color_1_deg) * (Math.min(Math.max(scrollPercent -60, 0), 40)/ 40);
    const colorValue_section_2 = (color_3_deg - color_2_deg) * (Math.min(Math.max(scrollPercent -160, 0), 40)/ 40);

    const color = 260 + colorValue_section_1 + colorValue_section_2;

    htmlDocument.style.setProperty("--value-clr", color);
}

scrollVar()
