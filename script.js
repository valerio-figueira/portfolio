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
contato.addEventListener("click", function(){
    window.open("./index.html", "_self");
})


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
let pullElements = (id) => {
    document.querySelectorAll(id);
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


/*SUBSCRIPTION PAGE - PROJECT (DESCRIPTION OF IT AND LINK)*/
const subscriptionPage = pullElement("#subscription-page .description");
subscriptionPage.innerHTML = "Esta é uma página de cadastro, com valor de venda do produto por mensalidade. Feita com HTML e CSS apenas. A página é responsiva, se adaptando muito bem a qualquer dispositivo.";
createAnchorWithAppend(subscriptionPage, "https://valerio-figueira.github.io/singlepage-subscription/", linkText);


/*Github LINK*/
let github = pullElement(".about").lastElementChild;
github.innerHTML += "Esses e outros projetos podem ser encontrados também em meu repositório remoto ";
createAnchorWithAppend(github, "https://github.com/valerio-figueira/", "");
github.firstElementChild.appendChild(document.createElement("span")).className = "fa fa-git-square icon";
github.firstElementChild.innerHTML += "Github.";


/*
INSERTING TEXT IN HEADERS
*/
pullElement(".main-title").innerHTML = "Valerio Figueira";
pullElement(".subtitle").innerHTML = "Web Developer - Frontend";
pullElement(".about").firstElementChild.innerHTML = "Sobre";


/*
CREATING CONTACT INFO
*/
pullElement(".box").appendChild(createContactInfo(" (34) 99971-3607", "tel:+55(34)99971.3607", "fa fa-phone-square icon"));
pullElement(".box").appendChild(createContactInfo(" j.valerio.figueira@gmail.com", "mailto:j.valerio.figueira@gmail.com", "fa fa-envelope icon"));
pullElement(".box").appendChild(createContactInfo(" /valerio-figueira", "https://github.com/valerio-figueira", "fa fa-git-square icon"));
pullElement(".box").appendChild(createContactInfo(" /valerio-figueira", "https://www.linkedin.com/in/valerio-figueira/", "fa fa-linkedin-square icon"));
pullElement(".box").appendChild(createContactInfo(" Monte Alegre de Minas - MG", "#location", "fa fa-map-marker icon"));


function createContactInfo(description, url, iconName){
    let anchor = document.createElement("a");
    let paragraph = document.createElement("p");
    let icon = document.createElement("span");

    icon.className = iconName;
    anchor.setAttribute("href", url);
    anchor.setAttribute("target", "_blank");
    anchor.setAttribute("rel", "external");  
    
    anchor.appendChild(paragraph);
    paragraph.appendChild(icon);
    paragraph.innerHTML += description;
    return anchor;
}

/*
CREATING UNORDERED LIST
*/
let box = pullAllElements(".box")[1];
box.appendChild(createHeader("h2", "Competências"));


function createHeader(type, text){
    let h2 = document.createElement(type);
    h2.innerHTML = text;
    return h2;
}

let list = document.createElement("ul");
box.appendChild(list);
createList(list, "HTML5");
createList(list, "CSS3");
createList(list, "Javascript");
createList(list, "Java");
createList(list, "CSS Flexbox");
createList(list, "CSS Grid Layout");
createList(list, "Linux");
createList(list, "Hardware");
createList(list, "Redes LAN-WAN");
createList(list, "Hardware");
createList(list, "Rede de Computadores");


function createList(list, description){
    let li = document.createElement("li")
    list.appendChild(li);
    return li.innerHTML = description;
}