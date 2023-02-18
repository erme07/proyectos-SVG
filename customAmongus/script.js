const colores = document.querySelector(".colors");
const characterColor = document.getElementById("characterColor");

colores.addEventListener('click',(e)=>{
    if(e.target.getAttribute("data-name") === "color-selector"){
        characterColor.style.fill = `var(--${e.target.getAttribute("data-value")})`;
    }
})