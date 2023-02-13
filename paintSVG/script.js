const color = document.getElementById('color');
const lienzo = document.getElementById('lienzo');
let colorSelected = color.value;

lienzo.addEventListener("load",function(){ 
    const svgDocument = lienzo.contentDocument;
    const svg = svgDocument.getElementById("svg5");
    svg.addEventListener('click',(e)=>{
        console.log(e.target);
        e.target.style.fill = colorSelected;
    })
});

color.addEventListener('change', () => colorSelected = color.value)
