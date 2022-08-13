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

/*
Para treinar um pouco a interface DOM, irei colocar a descrição dos projetos pelo próprio javascript
*/
const description = document.querySelectorAll(".post .description");

description[0].textContent = "Meu primeiro projeto real, feito para o Instituto de Previdência de minha cidade. O site é todo responsivo, adaptável a qualquer formato de tela. Feito com HTML, CSS e Javascript.";

description[1].textContent = "Este é um dos meus projetos fictícios, no qual me empenhei por boas horas para me aprimorar como desenvolvedor web. Gostei muito de tê-lo feito, utilizei várias propriedades CSS de estilização, e.g., absolute position, flex, grid, @mediascreen, efeito parallax, transition, etc.";

description[2].textContent = "Meu primeiro site feito com efeito parallax. É um site simples, mas com diversas propriedades avançadas de CSS. Há nele um navigator para mobiles e PCs desktop.";

description[3].textContent = "Este modelo de site, com a propriedade grid, contém três colunas de artigos que, sendo visíveis para PCs desktop e outras telas, se ajustam a uma ou duas colunas conforme o dispositivo mobile.";

description[5].textContent = "Meu primeiro \"projetinho\", o qual tentei fazer com o maior carinho, apesar de ser apenas um modelo fictício. Aprendi muito sobre estruturação de sites com este primeiro projeto.";

/*Turmalina*/
const link = document.createElement("a");
link.setAttribute("href", "https://www.rocketseat.com.br/");
link.setAttribute("target", "_blank");
link.textContent = "rocketseat";

description[4].innerHTML = `Um simples modelo de site, o qual tentei fazer "imitando" o modelo de site da `;
description[4].appendChild(link);
description[4].innerHTML += ` do qual faço parte como estudante de programação.`;


/*
Um simples modelo de site, o qual tentei fazer "imitando" o modelo de site da <a href="https://www.rocketseat.com.br/" target="_blank" rel="external">rocketseat</a>, do qual faço parte como estudante de programação.
*/



/*About myself*/
const intro = document.querySelector(".paragraph");
intro.innerHTML = "Desenvolvedor web, frontend. Estudante de HTML, CSS, JavaScript e outras tecnologias. Além disso, tenho 8 meses de experiência com Java, o qual aprendi resolvendo diversas listas de exercícios para aprimoramento da lógica de programação.";