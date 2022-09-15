const menuContainer = document.querySelector("#menuContainer");
const btnMenu = document.querySelector("#open_menu");
const closeBtnMenu = document.querySelector("#close_menu");
const allGalleries = Array.from(document.querySelectorAll(".gallery"));
const allTabs = Array.from(document.querySelectorAll(".tab"));

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

/*El primer tab arranca coloreado*/
allTabs[0].style.color = "#EF3194";

/*Recorremos todos los tabs y le damos un evento click a cada item*/
allTabs.forEach((tab, index)=>{

    tab.addEventListener("click", ()=>{

        /*En cada acción del click, se recorre todos los items de gallery
        y sí tienen la clase 'gallery-active' se las quita, para ocultarlos*/
        allGalleries.forEach((galleryTemp)=>{
            galleryTemp.classList.remove("gallery-active");
        });

        /*En cada acción del click, se recorre todos los items de tabs
        y sí tienen la clase 'active' se las quita*/
        allTabs.forEach((tabTemp)=>{
            tabTemp.classList.remove("active");
            /*En cada iteración hace que el tab se vuelva blanco,
            sí hacemos click*/
            tabTemp.style.color = "#FFFFFF";
        });

        allGalleries[index].classList.add("gallery-active");
        allTabs[index].classList.add("active");
        /*Le pasamos el parámetro index como indice,
        para colorear el tab actual*/
        allTabs[index].style.color = "#EF3194";
    });

});