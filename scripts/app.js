const menuContainer = document.querySelector("#menuContainer");
const btnMenu = document.querySelector("#open_menu");
const closeBtnMenu = document.querySelector("#close_menu");
const allGalleries = document.querySelectorAll(".gallery");
const allNavsLink = document.querySelectorAll(".nav__slider--link");
const firstNavLink = document.querySelector("#first__nav--link");

btnMenu.addEventListener("click", ()=>{
    menuContainer.style.left = "0";
    menuContainer.classList.add("showMenu");
    btnMenu.style.display = "none";
    closeBtnMenu.classList.add("showCloseMenu");
    closeBtnMenu.removeAttribute("id");
});

closeBtnMenu.addEventListener("click", ()=>{
    menuContainer.style.left = "-100%";
    btnMenu.style.display = "block";
    closeBtnMenu.setAttribute('id', 'close_menu');
    closeBtnMenu.classList.remove("showCloseMenu");
});

allNavsLink.forEach((link)=>{
    
});