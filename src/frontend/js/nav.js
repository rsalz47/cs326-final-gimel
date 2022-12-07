/// Inserts navbat into html file when called
(function insert_nav(path) {
    fetch(path + "nav.html")
        .then(res => res.text())
        .then(text => {
            const oldelem = document.querySelector("script#navbar");
            const newelem = document.createElement("div");
            newelem.innerHTML = text;
            oldelem.parentNode.replaceChild(newelem, oldelem);
        });
})("");
