function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const bulborb = document.querySelector(".bulborb-container");
const bulborbAnchor = document.querySelector("#bulborb-anchor")
let bulborbWidth;
let bulborbHeight;

addEventListener("scroll", (event) => {
    if (isInViewport(bulborbAnchor)) {
        bulborb.style.position = "relative";
        bulborb.style.top = "";
        bulborb.style.left = "";
        bulborb.style.width = "";
        bulborb.style.height = "";

        bulborbWidth = bulborb.getBoundingClientRect()["width"];
        bulborbHeight = bulborb.getBoundingClientRect()["height"];
    }
    else {
        bulborb.style.position = "fixed";
        bulborb.style.top = "0";
        bulborb.style.left = "0";
        bulborb.style.width = bulborbWidth.toString() + "px";
        bulborb.style.height = bulborbHeight.toString() + "px";
    }
});