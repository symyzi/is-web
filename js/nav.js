window.addEventListener('load', () => {
    let btns = document.getElementsByClassName("nav-item");
    btns.forEach(element => {
        if (element.childNodes[1].href === window.location.href) {
            element.childNodes[1].classList.add("active-item");
        }
    });
});