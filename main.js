const boton = document.getElementById("botton");

let names = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga",
   "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];

function showName() {
   document.getElementById("box").innerHTML = names[Math.floor(Math.random() * (names.length))];
}


boton.addEventListener("click", showName);








