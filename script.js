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




/*About myself*/
const intro = document.querySelector(".paragraph");
intro.innerHTML = "Desenvolvedor web, frontend. Estudante de HTML, CSS, JavaScript e outras tecnologias. Além disso, tenho 8 meses de experiência com Java, o qual aprendi resolvendo diversas listas de exercícios para aprimoramento da lógica de programação.";





/*ADD EFFECT CLASS IN IMGs*/
const post = pullAllElements(".post .description");
for(let item of post){
    item.previousElementSibling.className = "img-effect";
}

/*
TEXT INSIDE IMG

let imgs = document.querySelectorAll(".img-effect");
for(let img of imgs){
    createParagraphs(img);
    img.style.position = "relative";
    img.lastChild.className = "center-text";
}

function createParagraphs(img){
    let p = document.createElement("p");
    p.innerText = "Preview";
    p.style.textAlign = "center";
    p.style.verticalAlign = "middle";
    img.appendChild(p);
    return img;
}
*/

function createAnchorWithAppend(text, url, description){
    let link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "external");
    link.innerHTML = description;
    text.appendChild(link);
    return text;
}
function createSimpleAnchor(url, description){
    let link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "external");
    link.innerHTML = description;
    return link;
}
function pullElement(id){
    return document.querySelector(`${id}`);
}
function pullAllElements(id){
    return document.querySelectorAll(`${id}`);
}



const linkText = " Preview";
const ipma = pullElement("#ipma .description");
ipma.innerHTML = "Meu primeiro projeto real, feito para o Instituto de Previdência de minha cidade. O site é todo responsivo, adaptável a qualquer formato de tela. Feito com HTML, CSS e Javascript.";
createAnchorWithAppend(ipma, "https://www.ipmamonte.mg.gov.br/", linkText);

const ruby = pullElement("#ruby .description");
ruby.innerHTML = "Este é um dos meus projetos fictícios, no qual me empenhei por boas horas para me aprimorar como desenvolvedor web. Gostei muito de tê-lo feito, utilizei várias propriedades CSS de estilização, e.g., absolute position, flex, grid, @mediascreen, efeito parallax, transition, etc."
createAnchorWithAppend(ruby, "https://valerio-figueira.github.io/ruby-project/", linkText);

const jasper = pullElement("#jasper .description");
jasper.innerHTML = "Meu primeiro site feito com efeito parallax. É um site simples, mas com diversas propriedades avançadas de CSS. Há nele um navigator para mobiles e PCs desktop.";
createAnchorWithAppend(jasper, "https://valerio-figueira.github.io/jasper-project/", linkText);

const blackOnyx = pullElement("#black-onyx .description");
blackOnyx.innerHTML = "Este modelo de site, com a propriedade grid, contém três colunas de artigos que, sendo visíveis para PCs desktop e outras telas, se ajustam a uma ou duas colunas conforme o dispositivo mobile.";
createAnchorWithAppend(blackOnyx, "https://valerio-figueira.github.io/black-onyx-page/", linkText);

const lapisLazuli = pullElement("#lapis-lazuli .description");
lapisLazuli.innerHTML = "Meu primeiro \"projetinho\", o qual tentei fazer com o maior carinho, conquanto seja apenas um modelo fictício. Aprendi muito sobre estruturação de sites com este primeiro projeto.";
createAnchorWithAppend(lapisLazuli, "https://valerio-figueira.github.io/lapis-lazuli-page/", linkText);




setAnchorAtributes(pullAllElements("#ipma a"), "https://www.ipmamonte.mg.gov.br/");
setAnchorAtributes(pullAllElements("#subscription-page a"), "https://valerio-figueira.github.io/singlepage-subscription/");
setAnchorAtributes(pullAllElements("#ruby a"), "https://valerio-figueira.github.io/ruby-project/");
setAnchorAtributes(pullAllElements("#jasper a"), "https://valerio-figueira.github.io/jasper-project/");
setAnchorAtributes(pullAllElements("#black-onyx a"), "https://valerio-figueira.github.io/black-onyx-page/");
setAnchorAtributes(pullAllElements("#lapis-lazuli a"), "https://valerio-figueira.github.io/lapis-lazuli-page/");



/*TURMALINA*/
setAnchorAtributes(pullAllElements("#turmalina a"), "https://valerio-figueira.github.io/turmalina-page/");
const turmalina = pullElement("#turmalina .description");
turmalina.innerHTML = `Um simples modelo de site, o qual tentei fazer "imitando" o modelo de site da`;
turmalina.appendChild(createSimpleAnchor("https://www.rocketseat.com.br/", " rocketseat"));
turmalina.innerHTML += `, do qual faço parte como estudante de programação.`;
createAnchorWithAppend(turmalina, "https://valerio-figueira.github.io/turmalina-page/", linkText);




function setAnchorAtributes(elements, url){
    for(let element of elements){
        element.setAttribute("href", url);
        element.setAttribute("target", "_blank");
        element.setAttribute("rel", "external");
    }
    return elements;
}

const subscriptionPage = pullElement("#subscription-page .description");
subscriptionPage.innerHTML = "Esta é uma página de cadastro, com valor de venda do produto por mensalidade. Feita com HTML e CSS apenas. A página é responsiva, se adaptando muito bem a qualquer dispositivo.";
createAnchorWithAppend(subscriptionPage, "https://valerio-figueira.github.io/singlepage-subscription/", linkText);


