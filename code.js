const dayDark = document.querySelector("#site");
const button = document.querySelector("#cambiarTema");

button.addEventListener("click", function(){
    dayDark.classList.toggle("day");
})