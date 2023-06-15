//nodos
//permite manipular el html y css desde html y css desde js por medio de metodos y atributos

//eventos
// permite agregar acciones a los elementos en html desde js



//seleccionar una etiqueta por nombre
let h1=document.querySelector("h1");
h1.style.color="red";
console.log(h1);
//seleccionar una etiqueta por id
let h2id=document.querySelector("#sub1");
h2id.style.backgroundColor="yellow";
//seleccionar una etiqueta por clase
let h2clase=document.querySelector(".sub2");
//h2clase.style.fontStyle="italic";  
//h2clase.style.textAlign="center";
h2clase.setAttribute("style","font-weight:bold; font-style:italic; text-align:center" );
//seleccionar una etiqueta que este dentro de otra
let span=document.querySelector("p > span");
span.style.fontSize="20px";
//seleccionar varias etiquetas
let ps=document.querySelectorAll(".ps");
//console.log(ps);
ps[1].style.backgroundColor="green";
for (let i=0; i<ps.length;i++){
    ps[i].style.backgroundColor="green";

}

//funsiones-nodos

//crear etiquetas

let enlace=document.createElement("a");
let textoEnlace=document.createTextNode("ir a youtube");
enlace.appendChild(textoEnlace);
enlace.setAttribute("href", "https://www.youtube.com");
enlace.setAttribute("target","_blank");
ps[1].appendChild(enlace);
//enlace.remove();
//let titulo2=document.createElement("h2");
//let textoh2=document.createTextNode("Titulo desde JS");
//titulo2.appendChild(textoh2);
enlace.replaceWith(titulo2);
//ps[1].insertAdjacentElement("afterend",enlace);
//h1.insertAdjacentElement("beforebegin",enlace);
//lenguaje js.com pagina para el DOM
//classList
/*//agregar una clase a un elemento
h1.classList.add("cambiarfondo");
//quitar una clase al elemento
h1.classList.remove("cambiarfondo");
//alternar una clase
h1.classList.toggle("cambiarfondo");*/
//verificar si el elemento contiene una clase 
//true o false
//let existeClase=h1.classList.contains("cambiarfondo");
//console.log("existe la clase?")