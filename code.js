const dayDark = document.querySelector("#site");
const button = document.querySelector("#cambiarTema");
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownNav = document.querySelector(".dropdown-nav");
const buttonLi = document.querySelector("#cambiarTemaLi");
const links = document.querySelectorAll(".dropdown-nav li")


button.addEventListener("click", function(){
    dayDark.classList.toggle("day");
})

toggleBtn.onclick = function(){
    dropDownNav.classList.toggle("open")
    const isOpen = dropDownNav.classList.contains("open")

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    
};



buttonLi.addEventListener("click", function(){
    dayDark.classList.toggle("day");
})