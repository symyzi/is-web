(function() {
    var before_load_time = Date.now();
    window.onload = page_load_time;

    function page_load_time() {
        document.getElementById("load-time").innerHTML =
            "Page load time is <b>" + (Date.now() - before_load_time) / 1000 + "</b> seconds";
    }
})();