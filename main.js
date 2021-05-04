const boton = document.getElementById("botton");

let names = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga",
   "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];


function showName() {
    let randomNumber = Math.floor(Math.random()*names.length);

    document.getElementById("box").innerHTML = names[randomNumber]

    names.splice(randomNumber, 1);

}

boton.addEventListener("click", showName);

const reload = document.getElementById("reinicio");

reload.addEventListener('click', _ => {location.reload();});






