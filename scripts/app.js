const menuContainer = document.querySelector("#menuContainer");
const btnMenu = document.querySelector("#open_menu");
const closeBtnMenu = document.querySelector("#close_menu");
const allGalleries = Array.from(document.querySelectorAll(".gallery"));
const allTabs = Array.from(document.querySelectorAll(".tab"));
const allPlanets = Array.from(document.querySelectorAll(".planet"));
const arrowPrev = document.querySelector(".left");
const arrowNext = document.querySelector(".right");
/*Botones y contenedores de información*/
const allBtnsMenuDescription = Array.from(document.querySelectorAll(".btns-container"));
const allInfoContainers = Array.from(document.querySelectorAll(".info-container"));


/*Menu hamburgesa*/
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

/*El primer tab arranca coloreado, sí el array es diferente de 0*/
if(allTabs.length != 0){
    allTabs[0].style.color = "#EF3194";
}

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

/*------------Planetas------------*/
const changePosition = ()=>{
    let i = 0;

    if(allPlanets[i].classList.contains("active")){
        allInfoContainers.forEach((infoContainer)=>{
            getInfoContainer(infoContainer);
        });
    }

    arrowPrev.addEventListener("click", ()=>{
        allPlanets[i].classList.remove("active");
        i--;
        if(i < 0){
            i = allPlanets.length - 1;
        }
        allPlanets[i].classList.add("active");
    });

    arrowNext.addEventListener("click", ()=>{
        allPlanets[i].classList.remove("active");
        i++;

        if(i >= allPlanets.length){
            i = 0; 
        }
        allPlanets[i].classList.add("active");
    });
}

/*Botones y descripciones*/
const getInfoContainer = (container)=>{
    allBtnsMenuDescription.forEach((btnTemp)=>{
            changeBtnDescriptions(btnTemp, container.children[1], container.children[2], container.children[3]);
    });
}

const changeBtnDescriptions = (btns, descp, surf, comp)=>{
    Array.from(btns.children).forEach((btn)=>{
        btn.addEventListener("click", ()=>{
    
            if(btn.dataset.btn === descp.dataset.info){
                if(!descp.classList.contains("info-active")){
                    descp.classList.add("info-active");   
                    surf.classList.remove("info-active");
                    comp.classList.remove("info-active");
                }
            }
    
            if(btn.dataset.btn === surf.dataset.info){
                if(!surf.classList.contains("info-active")){
                    surf.classList.add("info-active");
                    descp.classList.remove("info-active");
                    comp.classList.remove("info-active");
                }
            }
    
            if(btn.dataset.btn === comp.dataset.info){
                if(!comp.classList.contains("info-active")){
                    comp.classList.add("info-active");
                    descp.classList.remove("info-active");
                    surf.classList.remove("info-active");
                }
            }
    
            Array.from(btns.children).forEach((btnTemp)=>{
                btnTemp.classList.remove("btn-planet-active");
            });
    
            btn.classList.add("btn-planet-active");
    
        });
    });
}

changePosition();