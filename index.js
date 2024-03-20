const kepek = document.querySelectorAll("#bal img");
const csonak = document.getElementById("csonak");
let leszedettKepek = [];


function kiemelHozzaadas(event){
    event.target.classList.add("kiemel");
}

function kiemelTorles(event){
    event.target.classList.remove("kiemel");
}

function eltuntetBalrol(event){
    event.target.style.display="none";
    leszedettKepek.push(event.target.src);
    kepMegjelenit();
    vizsgalat(event);
}

function kepMegjelenit(){
    csonak.innerHTML = `<img src="kepek/csonak.jpg" alt="" style="width: 500px;">`;
    for (let index = 0; index < leszedettKepek.length; index++) {
        let kep = `<img src="${leszedettKepek[index]}">`;  /* style="margin-top:-100px; margin-left:-100px; position: absolute;"> */
        csonak.innerHTML += kep;
    }
}

function vizsgalat(event) {
    console.log(event.target.src)
    console.log(leszedettKepek)
        if (event.target.src === "http://127.0.0.1:5500/kepek/kaposzta.png" && leszedettKepek.includes("http://127.0.0.1:5500/kepek/kecske2.png")) {
            alert("Veszély");
        }
        if (event.target.src === "http://127.0.0.1:5500/kepek/farkas.png" && leszedettKepek.includes("http://127.0.0.1:5500/kepek/kecske2.png")) {
            alert("Veszély");
        }
        if (event.target.src === "http://127.0.0.1:5500/kepek/kecske2.png" && leszedettKepek.includes("http://127.0.0.1:5500/kepek/farkas.png")) {
            alert("Veszély");
        }
        if (event.target.src === "http://127.0.0.1:5500/kepek/kecske2.png" && leszedettKepek.includes("http://127.0.0.1:5500/kepek/kaposzta.png")) {
            alert("Veszély");
        }
}

kepek.forEach(element => {
    element.addEventListener("mouseover", kiemelHozzaadas)
    element.addEventListener("mouseleave", kiemelTorles)
    element.addEventListener("click", eltuntetBalrol)
});

