const color = document.getElementById('color');
const svg = document.getElementById("svg5");
const contenedor = document.querySelector("body");
let colorSelected = color.value;

let estilos = document.createElement("style");
document.head.appendChild(estilos);

const cambiarCursor = (colorSelected)=>{
    colorSelected = colorSelected.replace(/#/g,'%23');
    let customCursor = `cursor: url('data:image/svg+xml;utf8,<svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32"><path id="pintura" style="fill:${colorSelected};stroke:%23000000" d="M 9.2947067,20.086479 C 4.0813681,18.209896 2.7623353,30.847491 0.6769681,29.896833 -0.30774315,28.579347 -0.16531841,20.630603 1.2722979,17.513632 4.479767,10.559351 8.8154104,10.546949 15.247766,12.307019 Z"/><path style="fill:%23ffffff;stroke:%23000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;" d="M 7.7484268,18.000918 20.713539,28.928945 28.934431,18.534714 17.057955,6.5866729 Z" /><path style="fill:none;stroke:%23000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round" d="M 16.805511,12.934078 C 27.129761,12.695911 29.817438,8.5004021 27.683286,6.885532 26.449882,5.9522404 22.743732,6.2601181 17.607982,7.140014"/><ellipse cx="17.129471" cy="13.03061" rx="2.2049494" ry="2.0699525" style="fill: %23000000;"/></svg>') 0 30, auto;`
    estilos.textContent = `#svg5 { ${customCursor} }`;
}
cambiarCursor(colorSelected)     
svg.addEventListener('click',(e)=>{
    if(e.target.getAttribute("data-tipo") === 'seleccionable'){
        e.target.style.fill = colorSelected;
    }
})
color.addEventListener('input', () => {
    colorSelected = color.value;
    cambiarCursor(colorSelected)
})

const modoHorizontal = () =>{
    if(screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary")
        contenedor.classList.add("horizontal");
    else
        contenedor.classList.remove("horizontal");
}
modoHorizontal();

screen.orientation.addEventListener("change", function(){
    modoHorizontal();
})