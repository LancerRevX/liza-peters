const MENU_COLLAPSED_CLASS = 'collapsed';

window.addEventListener("load", (event) => {
    let menu = document.querySelector('.menu');
    let menuCollapseButton = menu.querySelector(".menu-collapse-button");
    menuCollapseButton.addEventListener("click", (event) => {
        menu.classList.toggle(MENU_COLLAPSED_CLASS);
    });
});
