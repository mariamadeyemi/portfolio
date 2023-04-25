const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-list");


btn.addEventListener("click", ()=>{
    menu.classList.toggle("show");
})