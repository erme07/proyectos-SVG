const color = document.getElementById('color');
const svg = document.getElementById("svg5");
const contenedor = document.querySelector("body");
let colorSelected = color.value;

let estilos = document.createElement("style");
document.head.appendChild(estilos);

const cambiarCursor = (colorSelected) => {
    let customCursor = `cursor: url('data:image/svg+xml;utf8,<svg height="30" version="1.1" viewBox="0 0 30 30" width="30" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path id="pintura" fill="${colorSelected}" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.2947067 20.086479C4.0813681 18.209896 2.7623353 30.847491.6769681 29.896833C-.30774315 28.579347-.16531841 20.630603 1.2722979 17.513632C4.479767 10.559351 8.8154104 10.546949 15.247766 12.307019Z" /><path d="M7.7484268 18.000918L20.713539 28.928945L28.934431 18.534714L17.057955 6.5866729Z" fill="#ffffff" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /><path d="M16.805511 12.934078C27.129761 12.695911 29.817438 8.5004021 27.683286 6.885532C26.449882 5.9522404 22.743732 6.2601181 17.607982 7.140014" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /><ellipse cx="17.129471" cy="13.03061" rx="2.204949" ry="2.069952" /></svg>') 0 30, auto;`
    estilos.textContent = `#svg5 { ${customCursor.replace(/#/g, '%23')} }`;
}
cambiarCursor(colorSelected)
svg.addEventListener('click', (e) => {
    if (e.target.getAttribute("data-tipo") === 'seleccionable') {
        e.target.style.fill = colorSelected;
    }
})
color.addEventListener('input', () => {
    colorSelected = color.value;
    cambiarCursor(colorSelected)
})

const modoHorizontal = () => {
    if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary")
        contenedor.classList.add("horizontal");
    else
        contenedor.classList.remove("horizontal");
}
modoHorizontal();

screen.orientation.addEventListener("change", function () {
    modoHorizontal();
})