const boton = document.getElementById("botton");

let name = ["ana", "marta", "inga", "ranju"];

function random(){
   console.log(name[Math.floor(Math.random() * (name.length))]);
}


boton.addEventListener("click", random);


   let memberlist = document.getElementById('memberlist');
   console.log(memberlist.innerHTML);





