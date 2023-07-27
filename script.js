const burgerButton = document.querySelector(".header__burger-btn");
const burgerMenu = document.querySelector(".header__burger-menu");
const body = document.querySelector("body");
let opacity = burgerMenu.style.opacity;

burgerButton.addEventListener("click", openMenu);

let div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();

function openMenu() {
    if (opacity == 0) {
        burgerMenu.style.opacity = "1";
        opacity = 1;
        body.style.overflow = "hidden";
        body.style.paddingRight = `${scrollWidth}px`
    } else {
        burgerMenu.style.opacity= "0";
        opacity = 0;
        body.style.overflow = "auto";
        body.style.overflowX = "hidden";
        body.style.paddingRight = "0px"
    }
}
