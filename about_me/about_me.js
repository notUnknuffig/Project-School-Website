const socialContainer = document.querySelector(".social-container")
const socialList = document.querySelector(".social-list")
const socialButtons = document.querySelectorAll(".social-button")
const socialPanels = document.querySelectorAll(".social-media")
var previousPanel = null;

socialButtons.forEach((button, index) => {
    if(index === 0) {
        previousPanel = socialPanels[index];
    }
    else {
        socialPanels[index].setAttribute("hidden", "");
    }
});

socialContainer.addEventListener("click", (e) => {
    const clickedTab = e.target.closest(".social-button");
    if (!clickedTab) return;
    e.preventDefault();

    socialButtons.forEach((button) => {
        button.setAttribute("class", "social-button")
    });
    clickedTab.setAttribute("class", "social-button active-tab");

    const activePanel = socialContainer.querySelector(clickedTab.getAttribute('href'));
    socialPanels.forEach((panel) => {
        panel.setAttribute("hidden", true)
        panel.setAttribute("class", "social-media")
    });
    /**if (previousPanel !== activePanel) {
        previousPanel.setAttribute("class", "social-media inactive-pannel");
        console.log(previousPanel.getAttribute("animation"));
        previousPanel.addEventListener("animationend", function() {
            previousPanel.setAttribute("class", "social-media");
            previousPanel.setAttribute("hidden", true);
            previousPanel = activePanel;
        });
    }**/
    activePanel.removeAttribute("hidden");
    activePanel.setAttribute("class", "social-media active-pannel");
})