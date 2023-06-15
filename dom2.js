/*// agregamos la etiqueta h1 y la ubicamos entes del div 
let div=document.querySelector("div")
let etiqueta=document.createElement("h1");
let textoEtiqueta=document.createTextNode("my presentacion");
etiqueta.appendChild(textoEtiqueta);
div.appendChild(etiqueta);
div.insertAdjacentElement("beforebegin",etiqueta);

// agregamos la etiqueta p y la ubicamos despues de la  etiqueta p

let p=document.createElement("p");
let textoP=document.createTextNode("my best friend is michey")
p.appendChild(textoP);
let p1=document.querySelector("div > .p1")
p1.insertAdjacentElement("afterend",p)


// color letra h1 y fondo 

etiqueta.style.color="green"
p.setAttribute("style","font-weight:bold")
p.style.backgroundColor="red";*/


// listas 
let ol=document.querySelector("ol")
let ul=document.createAttribute("ul")
//ol.replaceWith(ul)