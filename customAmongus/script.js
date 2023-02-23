const colores = document.querySelector(".colors");
const hats = document.querySelector(".hats");
const pets = document.querySelector(".pets");
const skins = document.querySelector(".skins")
const contentSVG = document.getElementById("externalSVG");
const menu = document.querySelector(".menu");
const items = document.querySelector(".items");
const options = document.querySelectorAll('[data-name="option"]');

contentSVG.addEventListener("load",function(){ 
    const svgDocument = contentSVG.contentDocument;
    const colorCharacter = svgDocument.getElementById("characterColor");
    const hat = svgDocument.getElementById("hat");
    const pet = svgDocument.getElementById("pet");
    const skin = svgDocument.getElementById("skin");

    colores.addEventListener('click',(e)=>{
        if(e.target.getAttribute("data-name") === "color-selector"){
            colorCharacter.style.fill = `var(--${e.target.getAttribute("data-value")})`;
        }
    })
    hats.addEventListener("click", (e)=>{
        let hatItem = "";
        if(e.target.getAttribute("data-name") === "hat-selector"){
            hatItem = e.target.getAttribute("data-value");
            hat.innerHTML = `<use href="#${hatItem}"/>`;
        }
        if(e.target.tagName === 'use'){
            hatItem = e.target.parentElement.getAttribute("data-value");
            hat.innerHTML = `<use href="#${hatItem}"/>`;
        }
        if(hatItem === "hat_default"){
            hat.innerHTML="";
        }
    })
    pets.addEventListener("click", (e)=>{
        let hatItem = "";
        if(e.target.getAttribute("data-name") === "pet-selector"){
            hatItem = e.target.getAttribute("data-value");
            pet.innerHTML = `<use href="#${hatItem}"/>`;
        }
        if(e.target.tagName === 'use'){
            hatItem = e.target.parentElement.getAttribute("data-value");
            pet.innerHTML = `<use href="#${hatItem}"/>`;
        }
        if(hatItem === "pet_default"){
            pet.innerHTML="";
        }
    })
    skins.addEventListener("click", (e)=>{
        let hatItem = "";
        if(e.target.getAttribute("data-name") === "skin-selector"){
            hatItem = e.target.getAttribute("data-value");
            skin.innerHTML = `<use href="#${hatItem}"/>`;
        }
        if(e.target.tagName === 'use'){
            hatItem = e.target.parentElement.getAttribute("data-value");
            skin.innerHTML = `<use href="#${hatItem}"/>`;
        }
        if(hatItem === "skin_default"){
            skin.innerHTML="";
        }
    })
    
});
menu.addEventListener("click", (e)=>{
    if(e.target.getAttribute("data-name") === 'option'){
        for(i=0;i<items.childElementCount;i++){
            items.children[i].classList.remove("active");
        }
        for(i=0;i<menu.childElementCount;i++){
            menu.children[i].classList.remove("menu_active");
        }
        const aux = document.querySelector(`.${e.target.getAttribute("data-value")}`);
        aux.classList.add("active");
        e.target.classList.add("menu_active");
        if(e.target.getAttribute("data-value") !== 'colors'){
            items.style.backgroundColor = "unset";
        }
        else{
            items.style.backgroundColor = "var(--panelSecondColor)";
        }
    }
})