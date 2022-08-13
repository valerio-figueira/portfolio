/*Mobile button to open vertical bar*/
const mobile = document.querySelector(".mobile");
const perfil = document.querySelector(".perfil");
const icon = document.querySelector(".close-icon");

mobile.addEventListener("click", function(){
    if(perfil.className === "perfil"){
        perfil.className += " open";
    } else{
        perfil.className = "perfil";
    }
})

/*CLOSE BUTTON OF SIDE-COLUMN*/
icon.addEventListener("click", function(){
    perfil.className = "perfil";
})



/*COPYRIGHT DATE*/
const copyright = document.querySelector(".copyright");
const year = new Date().getFullYear();

copyright.textContent = `\u00A9 Direitos Autorais - ${year}`;


/*INSERT URL IN CONTACT H2*/
const contato = document.querySelector(".box h2");
contato.style.cursor = "pointer";
contato.style.padding = "15px 0";
contato.addEventListener("click", function(){
    window.open("./index.html", "_self");
})

/*To center icons and links*/
const anchors = document.querySelectorAll(".box a");
for(let anchor of anchors){
    anchor.style.display = "flex";
    anchor.style.margin = "15px 0";
    anchor.style.alignItems = "center";

    const paras = document.querySelectorAll(".box p");
    for(let para of paras){
        para.style.margin = "0";
    }
}

/*Insert new article with contents in sidebar*/
const box = document.querySelector(".box");
const article = document.createElement("article");
box.appendChild(article);
const competencias = document.createElement("h2");
competencias.textContent = "Competências";
article.appendChild(competencias);
competencias.style.padding = "15px 0";

const ul = document.createElement("ul");
article.appendChild(ul);
const li = [];
for(let i = 0; i < 10; i++){
    li[i] = document.createElement("li");
    ul.appendChild(li[i]);
    li[i].style.padding = "5px 0";
    li[i].style.fontSize = "15px";
}
li[0].innerText = "HTML5";
li[1].innerText = "CSS3";
li[2].innerText = "Javascript";
li[3].innerText = "Java";
li[4].innerText = "CSS Flexbox";
li[5].innerText = "CSS Grid Layout";
li[6].innerText = "Linux";
li[7].innerText = "Hardware";
li[8].innerText = "Redes LAN-WAN";
li[9].innerText = "Rede de Computadores";



/*
p.innerText = "HTML5, CSS3, Javascript, Java, Redes LAN-WAN, Hardware, CSS Flexbox, CSS Grid Layout, Linux, Rede de Computadores";*/

