const boton = document.getElementById("botton");

let names = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga",
   "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];

function showName() {
   let randomName = Math.floor(Math.random() * names.length);
   console.log("let showme" + randomName);
   for( let i = 0; i < names.length; i++) {
     // if ( names[i] === randomName);
         names.splice(randomName, 1);
 }
}

   /*  document.getElementById("box").innerHTML = names[Math.floor(Math.random() * (names.length))];


        {

           arr.splice(i, 1);
           names.splice(-1, 1 );
     console.log(names);
  }*/



boton.addEventListener("click", showName);








