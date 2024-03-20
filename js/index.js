window.addEventListener('load', () => {
    let btns = document.getElementsByClassName("nav-item");
   for (let i = 0; i < btns.length; i++) {
    if (btns[i].href === window.location.href) {
        btns[i].classList.add("active-item");
    }
   }
});