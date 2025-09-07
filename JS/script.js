window.onscroll = function () {
    var nav = document.querySelector("nav");  // Ensure the selector targets the right element
    if (window.pageYOffset > 100) {  // Change '100' to any scroll offset you'd like
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};
