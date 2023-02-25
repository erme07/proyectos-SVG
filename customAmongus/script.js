const contentSVG = document.getElementById('externalSVG');
const menu = document.querySelectorAll('[data-name="menu"]');
const panels = document.querySelectorAll('[data-name="panel"]');
const items = document.querySelector(".items");

contentSVG.addEventListener("load",function(){ 
    const svgDocument = contentSVG.contentDocument;
    const colorCharacter = svgDocument.getElementById('characterColor');

    document.addEventListener('click',(e)=>{
        if(e.target.getAttribute("data-name") === "color"){
            colorCharacter.style.fill = `var(--${e.target.getAttribute("data-value")})`;
            const colors = document.querySelectorAll(`.${e.target.getAttribute("data-name")}s div`);
            colors.forEach(el => { el.classList.remove("selected"); });
            e.target.classList.add("selected");
        }
        if(e.target.getAttribute("data-name") === "hat" || e.target.getAttribute("data-name") === "skin" || e.target.getAttribute("data-name") === "pet"){
            const elemento = svgDocument.getElementById(e.target.getAttribute("data-name"));
            const aux = document.querySelectorAll(`.${e.target.getAttribute("data-name")}s div`);
            aux.forEach(el => { el.classList.remove("selected"); });

            if(e.target.getAttribute("data-value") === "default"){
                e.target.classList.add("selected");
                elemento.innerHTML="";
            }else{
                e.target.parentElement.classList.add("selected");
                elemento.innerHTML = `<use href="#${e.target.getAttribute("data-value")}"/>`;
            }
        }

        if(e.target.tagName === 'use'){
            if(e.target.parentElement.getAttribute("data-name") === "hat" || e.target.parentElement.getAttribute("data-name") === "skin" || e.target.parentElement.getAttribute("data-name") === "pet"){
                const elementoPadre = svgDocument.getElementById(e.target.parentElement.getAttribute("data-name"));
                aux = document.querySelectorAll(`.${e.target.parentElement.getAttribute("data-name")}s div`);
                aux.forEach(el => { el.classList.remove("selected"); });
                e.target.parentElement.parentElement.classList.add("selected");
                elementoPadre.innerHTML = `<use href="#${e.target.parentElement.getAttribute("data-value")}"/>`;
            }
        }

        if(e.target.getAttribute("data-name") === 'menu'){
            menu.forEach(el => { el.classList.remove("menu__option--active"); });
            e.target.classList.add("menu__option--active");

            const panel = document.querySelector(`.${e.target.getAttribute("data-value")}`);
            panels.forEach(el => { el.classList.remove("active"); });
            panel.classList.add("active");
            if(e.target.getAttribute("data-value") === 'colors')
                items.classList.add("items--background");
            else
                items.classList.remove("items--background");
        }
    })
});
screen.orientation.addEventListener("change", function(){
    const proyecto = document.querySelector("body");
    console.log(screen.orientation)
    if(screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary")
        proyecto.classList.add("horizontal");
    else
        proyecto.classList.remove("horizontal");
})
    
