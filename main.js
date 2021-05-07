const boton = document.getElementById("botton");

let names = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga",
    "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];

function animateCortina() {
    document.body.style.backgroundImage= `url("images/cortina.gif")`;
}

function escogervoluntaria() {
    let randomNumber = Math.floor(Math.random() * names.length);
    document.getElementById("box").innerHTML = names[randomNumber]
    if (names[randomNumber] === undefined) {
        return document.getElementById('box').innerHTML = 'Please restart';
    }
    names.splice(randomNumber, 1);
}

function showName() {
    animateCortina()
    setTimeout(escogervoluntaria,6000);
}

boton.addEventListener("click", showName);
const reload = document.getElementById("reinicio");
reload.addEventListener('click', _ => {location.reload();});

