const boton = document.getElementById("botton");
const gif = document.body.style.backgroundImage;
let names = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga",
   "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];

function showName() {
    let randomNumber = Math.floor(Math.random() * names.length);
    document.getElementById("box").innerHTML = names[randomNumber]
    if (names[randomNumber] === undefined) {
        return document.getElementById('box').innerHTML = 'Please restart';
    }
    names.splice(randomNumber, 1);
    setTimeout(function(){ gif },6000);
    function stopTime() {
       clearTimeout(gif);
    }
    gif = setTimeout(stopTime, 0);
    function startTime() {

    }
}
}

boton.addEventListener("click", showName);
const reload = document.getElementById("reinicio");
reload.addEventListener('click', _ => {location.reload();});














