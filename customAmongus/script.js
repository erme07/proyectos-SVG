const colores = document.querySelector(".colors");
const hats = document.querySelector(".hats");
const contentSVG = document.getElementById("externalSVG")

contentSVG.addEventListener("load",function(){ 
    const svgDocument = contentSVG.contentDocument;
    const colorCharacter = svgDocument.getElementById("characterColor");
    const hat = svgDocument.getElementById("hat");

    colores.addEventListener('click',(e)=>{
        if(e.target.getAttribute("data-name") === "color-selector"){
            colorCharacter.style.fill = `var(--${e.target.getAttribute("data-value")})`;
        }
    })
    hats.addEventListener("click", (e)=>{
        let hatItem = "";
        if(e.target.getAttribute("data-name") === "hat-selector"){
            hatItem = e.target.getAttribute("data-value");
        }
        if(e.target.tagName === 'use'){
            hatItem = e.target.parentElement.getAttribute("data-value");
        }
        if(hatItem === "hat_default"){
            hat.innerHTML="";
        }else{
            hat.innerHTML = `<use href="#${hatItem}"/>`;
        }
    })
});