var navLinks = document.getElementById("nav-links");

function toggleMenu() {
    if (navLinks.style.right === "0px") {
        navLinks.style.right = "-200px";
    } else {
        navLinks.style.right = "0";
    }
}
