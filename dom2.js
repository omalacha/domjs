/*
// agregamos la etiqueta h1 y la ubicamos entes del div 

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

/*let ol=document.getElementsByTagName("ol")[0];
let ul=document.createElement("ul")
ul.setAttribute("class","listadesordenada")
ul.innerHTML = ol.innerHTML;
ol.parentNode.replaceChild(ul,ol);

//css

let h2=document.querySelector("h2");
h2.classList.add("fondo-letra");
ul.removeChild(ul.querySelector("li:last-Child"));

//agregar item

let item=document.createElement("li");
let textoItem=document.createTextNode("recoger a los niños");
item.appendChild(textoItem);
ul.appendChild(item);

let lista=document.querySelectorAll("li");
lista[0].classList.add("cumplido");
lista[3].classList.add("cumplido");
lista[1].classList.add("fallido");
lista[2].classList.add("fallido");
lista[2].insertAdjacentElement("beforebegin",item);*/

let ps=document.querySelectorAll(".ps");
//console.log(ps);
ps[1].style.backgroundColor="green";
for (let i=0; i<ps.length;i++){
    ps[i].style.backgroundColor="green";
}