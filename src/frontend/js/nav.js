/// Inserts navbat into html file when called
function insert_nav(path) {
    fetch(path + 'nav.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#navbar");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem,oldelem);
    })
}
