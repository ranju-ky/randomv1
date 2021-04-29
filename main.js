const boton = document.getElementById("botton");

let name = ["ana", "marta", "inga", "ranju"];

function random(name){
   return Math.floor(Math.random() * (name.length));
}
console.log(name);

boton.addEventListener("click", random);
