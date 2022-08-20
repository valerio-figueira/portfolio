import Page01 from "./views/Page01.js";
import Page02 from "./views/Page02.js";


const pages = [
    {page: Page01},
    {page: Page02},
];

/*
const myPromise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 2);
    if(random === 0){
        resolve();
    } else {
        reject();
    }
})
myPromise
.then(() => console.log("Success!"))
.catch(() => console.error("Something went wrong"));
*/

let currentIndex = pages.length - 1;

//START WITH LAST PAGE OF THE ARRAY
lastPage(currentIndex);

//THIS CLICK EVENT IS GOING TO CHANGE THE VIEW PAGES OF ARRAY
pullElement("#next_button").addEventListener("click", () => nextPage(currentIndex));
pullElement("#prev_button").addEventListener("click", () => prevPage(currentIndex));


function lastPage(index){
    pullElement(".portfolium").innerHTML = pages[index].page.getHtml();

    buttonController(index);
    console.log(currentIndex);

    loadProjects();
    return index;
}

function nextPage(index){
    index = index - 1;
    pullElement(".portfolium").innerHTML = pages[index].page.getHtml();

    buttonController(index);
    console.log(currentIndex);

    loadProjects();
    return currentIndex = index;
}

function prevPage(index){
    index = index + 1;
    pullElement(".portfolium").innerHTML = pages[index].page.getHtml();

    buttonController(index);
    console.log(currentIndex);

    loadProjects();
    return currentIndex = index;
}

//THIS FUNCTION'LL CONTROL HOW NEXT/PREV BUTTONS LOOK IN THE PAGE
function buttonController(index){
    if(index === pages.length -1){
        pullElement("#next_button").style.display = "block";
        pullElement("#prev_button").style.display = "none";
        pullElement(".pages_controller").style.justifyContent = "end";
    } else if (index < pages.length -1 && index > 0){
        pullElement("#next_button").style.display = "block";
        pullElement("#prev_button").style.display = "block";
        pullElement(".pages_controller").style.justifyContent = "space-between";
    } else if (index >= -1){
        pullElement("#next_button").style.display = "none";
        pullElement("#prev_button").style.display = "block";
        pullElement(".pages_controller").style.justifyContent = "start";
    }
    return index;
}
    


function loadProjects(){

    const linkText = " Preview";



    /*INSERT URL IN CONTACT H2*/
    const contato = document.querySelector(".box h2");
    contato.style.cursor = "pointer";
    contato.addEventListener("click", function(){
        window.open("./index.html", "_self");
    })

    /*
    Para treinar um pouco a interface DOM, irei colocar a descrição dos projetos pelo próprio javascript
    */

    /*About myself*/
    const intro = document.querySelector(".paragraph");
    intro.innerHTML = "Desenvolvedor web, frontend. Estudante de HTML, CSS, JavaScript e outras tecnologias. Além disso, tenho 8 meses de experiência com Java, o qual aprendi resolvendo diversas listas de exercícios para aprimoramento da lógica de programação.";


    /*ADD EFFECT CLASS IN IMGs*/
    const post = pullAllElements(".post .description");
    for(let item of post){
        item.previousElementSibling.className = "img-effect";
    }




    const huddle = pullElement("#huddle .description");
    if(huddle){
        huddle.innerHTML = "Huddle Landing Page é um projeto feito com HTML e CSS. Algumas propriedades de CSS utilizadas foram Grid Layout, Flex Box, @mediascreen (para deixá-lo responsivo), entre outras.";
        createAnchorWithAppend(huddle, "https://valerio-figueira.github.io/huddle-landing-page/", linkText);

        setAnchorAtributes(pullAllElements("#huddle a"), "https://valerio-figueira.github.io/huddle-landing-page/");
    }

    const ipma = pullElement("#ipma .description");
    if(ipma){
        ipma.innerHTML = "Meu primeiro projeto real, feito para o Instituto de Previdência de minha cidade. O site é todo responsivo, adaptável a qualquer formato de tela. Feito com HTML, CSS e Javascript.";
        createAnchorWithAppend(ipma, "https://www.ipmamonte.mg.gov.br/", linkText);

        setAnchorAtributes(pullAllElements("#ipma a"), "https://www.ipmamonte.mg.gov.br/");
    }

    /*SUBSCRIPTION PAGE - PROJECT (DESCRIPTION OF IT AND LINK)*/
    const subscriptionPage = pullElement("#subscription-page .description");
    if(subscriptionPage){
        subscriptionPage.innerHTML = "Esta é uma página de cadastro, com valor de venda do produto por mensalidade. Feita com HTML e CSS apenas. A página é responsiva, se adaptando muito bem a qualquer dispositivo.";
        createAnchorWithAppend(subscriptionPage, "https://valerio-figueira.github.io/singlepage-subscription/", linkText);

        setAnchorAtributes(pullAllElements("#subscription-page a"), "https://valerio-figueira.github.io/singlepage-subscription/");
    }

    const ruby = pullElement("#ruby .description");
    if(ruby){
        ruby.innerHTML = "Este é um dos meus projetos fictícios, no qual me empenhei por boas horas para me aprimorar como desenvolvedor web. Gostei muito de tê-lo feito, utilizei várias propriedades CSS de estilização e.g. absolute position, flex, grid, @mediascreen, efeito parallax, transition, etc."
        createAnchorWithAppend(ruby, "https://valerio-figueira.github.io/ruby-project/", linkText);

        setAnchorAtributes(pullAllElements("#ruby a"), "https://valerio-figueira.github.io/ruby-project/");
    }

    const jasper = pullElement("#jasper .description");
    if(jasper){
        jasper.innerHTML = "Meu primeiro site feito com efeito parallax. É um site simples, mas com diversas propriedades avançadas de CSS. Há nele um navigator para mobiles e PCs desktop.";
        createAnchorWithAppend(jasper, "https://valerio-figueira.github.io/jasper-project/", linkText);

        setAnchorAtributes(pullAllElements("#jasper a"), "https://valerio-figueira.github.io/jasper-project/");
    }

    const blackOnyx = pullElement("#black-onyx .description");
    if(blackOnyx){
        blackOnyx.innerHTML = "Este modelo de site, com a propriedade grid, contém três colunas de artigos que, sendo visíveis para PCs desktop e outras telas, se ajustam a uma ou duas colunas conforme o dispositivo mobile.";
        createAnchorWithAppend(blackOnyx, "https://valerio-figueira.github.io/black-onyx-page/", linkText);

        setAnchorAtributes(pullAllElements("#black-onyx a"), "https://valerio-figueira.github.io/black-onyx-page/");
    }

    /*TURMALINA*/
    const turmalina = pullElement("#turmalina .description");
    if(turmalina){
        turmalina.innerHTML = `Um simples modelo de site, o qual tentei fazer "imitando" o modelo de site da`;
        turmalina.appendChild(createSimpleAnchor("https://www.rocketseat.com.br/", " rocketseat"));
        turmalina.innerHTML += `, do qual faço parte como estudante de programação.`;
        createAnchorWithAppend(turmalina, "https://valerio-figueira.github.io/turmalina-page/", linkText);

        setAnchorAtributes(pullAllElements("#turmalina a"), "https://valerio-figueira.github.io/turmalina-page/");
    }


    const lapisLazuli = pullElement("#lapis-lazuli .description");
    if(lapisLazuli){
        lapisLazuli.innerHTML = "Meu primeiro projeto web, o qual fiz com muita dedicação, aplicando todo conhecimento que obtive por meio de cursos e leituras, conquanto seja apenas um modelo fictício. Aprendi muito sobre estruturação de sites com este primeiro projeto.";
        createAnchorWithAppend(lapisLazuli, "https://valerio-figueira.github.io/lapis-lazuli-page/", linkText);

        setAnchorAtributes(pullAllElements("#lapis-lazuli a"), "https://valerio-figueira.github.io/lapis-lazuli-page/");
    }


}
















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




/*
CREATING UNORDERED LIST
*/
let box = pullAllElements(".box")[1];
box.appendChild(createHeader("h2", "Competências"));

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




/*
FUNCTIONS
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
function setAnchorAtributes(elements, url){
    for(let element of elements){
        element.setAttribute("href", url);
        element.setAttribute("target", "_blank");
        element.setAttribute("rel", "external");
    }
    return elements;
}
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
function createHeader(type, text){
    let h2 = document.createElement(type);
    h2.innerHTML = text;
    return h2;
}
function createList(list, description){
    let li = document.createElement("li")
    list.appendChild(li);
    return li.innerHTML = description;
}













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