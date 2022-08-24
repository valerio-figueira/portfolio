const projects = [
    {
        name: "Four Cards",
        description: "Simples website feito com HTML e CSS. Alinhamento dos cartões feito com gridlayout.",
        img: "imgs/Four-Cards-Page.png",
        url: "https://valerio-figueira.github.io/four-cards-page/"
    },
    {
        name: "Landing Page",
        description: "Huddle Landing Page é um projeto feito com HTML e CSS. Algumas propriedades de CSS utilizadas foram Grid Layout, Flex Box, @mediascreen (para deixá-lo responsivo), entre outras.",
        img: "imgs/Huddle-Landing-Page.png",
        url: "https://valerio-figueira.github.io/huddle-landing-page/"
    },
    {
        name: "IPMA",
        description: "Meu primeiro projeto real, feito para o Instituto de Previdência de minha cidade. O site é todo responsivo, adaptável a qualquer formato de tela. Feito com HTML, CSS e Javascript.",
        img: "imgs/IPMA.png",
        url: "https://www.ipmamonte.mg.gov.br/"
    },
    {
        name: "Subscription Page",
        description: "Esta é uma página de cadastro, com valor de venda do produto por mensalidade. Feita com HTML e CSS apenas. A página é responsiva, se adaptando muito bem a qualquer dispositivo.",
        img: "imgs/subscription-page.png",
        url: "https://valerio-figueira.github.io/singlepage-subscription/"
    },
    {
        name: "Ruby Project",
        description: "Este é um dos meus projetos fictícios, no qual me empenhei por boas horas para me aprimorar como desenvolvedor web. Gostei muito de tê-lo feito, utilizei várias propriedades CSS de estilização e.g. absolute position, flex, grid, @mediascreen, efeito parallax, transition, etc.",
        img: "imgs/Ruby.png",
        url: "https://valerio-figueira.github.io/ruby-project/"
    },
    {
        name: "Jasper Project",
        description: "Meu primeiro site feito com efeito parallax. É um site simples, mas com diversas propriedades avançadas de CSS. Há nele um navigator para mobiles e PCs desktop.",
        img: "imgs/Jasper.png",
        url: "https://valerio-figueira.github.io/jasper-project/"
    },
    {
        name: "Black Onyx",
        description: "Este modelo de site, com a propriedade grid, contém três colunas de artigos que, sendo visíveis para PCs desktop e outras telas, se ajustam a uma ou duas colunas conforme o dispositivo mobile.",
        img: "imgs/Black Onyx.png",
        url: "https://valerio-figueira.github.io/black-onyx-page/"
    },
    {
        name: "Turmalina",
        description: `Um simples modelo de site, o qual tentei fazer "imitando" o modelo de site da <a href="https://www.rocketseat.com.br/" target="_blank" rel="external">rocketseat</a>, do qual faço parte como estudante de programação.`,
        img: "imgs/Turmalina.png",
        url: "https://valerio-figueira.github.io/turmalina-page/"
    },
    {
        name: "Lapis Lazuli",
        description: "Meu primeiro projeto web, o qual fiz com muita dedicação, aplicando todo conhecimento que obtive por meio de cursos e leituras, conquanto seja apenas um modelo fictício. Aprendi muito sobre estruturação de sites com este primeiro projeto.",
        img: "imgs/Lapis Lazuli.png",
        url: "https://valerio-figueira.github.io/lapis-lazuli-page/"
    }
];





//THIS FUNCTION'LL CONTROL HOW NEXT/PREV BUTTONS LOOK IN THE PAGE
function buttonController(start, end){
    if(start === 0){
        pullElement("#next_button").style.display = "none";
        pullElement("#prev_button").style.display = "block";
        pullElement(".pages_controller").style.justifyContent = "end";
    } else if (end >= projects.length){
        pullElement("#next_button").style.display = "block";
        pullElement("#prev_button").style.display = "none";
        pullElement(".pages_controller").style.justifyContent = "start";
    } else {
        pullElement("#next_button").style.display = "block";
        pullElement("#prev_button").style.display = "block";
        pullElement(".pages_controller").style.justifyContent = "space-between";
    }
    return start, end;
}

//SEARCH BAR
const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredProjects = projects.filter((project) => {
        return (
            project.name.toLowerCase().includes(searchString) || project.description.toLowerCase().includes(searchString)
        );
    });
    displayProjects(filteredProjects);
})



let indexStart = 0;
let indexEnd = 4;
displayProjects(projects, indexStart, indexEnd);

//THIS CLICK EVENT IS GOING TO CHANGE THE VIEW PAGES OF ARRAY
pullElement("#next_button").addEventListener("click", () => displayProjects(projects, indexStart -= 4, indexEnd -= 4));
pullElement("#prev_button").addEventListener("click", () => displayProjects(projects, indexStart += 4, indexEnd += 4));


//DISPLAY THE PROJECTS IN THE PAGE
function displayProjects(projects, start, end){
    const portfolium = document.querySelector(".portfolium");
    const html = projects.slice(start, end).map((project) => {
        return `
        <article class="post">
            <a href="${project.url}" target="_blank" rel="external"><h2 class="project_title">${project.name}</h2></a>
            <a href="${project.url}" target="_blank" rel="external"><img src="${project.img}" alt="${project.name}"></a>
            <p class="description">${project.description}<a href="${project.url}" target="_blank" rel="external"> Preview</a></p>
        </article>
        `;
    })
    .join('');
    buttonController(start, end);
    portfolium.innerHTML = html;    
    return indexStart = start, indexEnd = end;
}







/*About myself*/
const intro = document.querySelector(".paragraph");
intro.innerHTML = "Desenvolvedor web, frontend. Estudante de HTML, CSS, JavaScript e outras tecnologias. Além disso, tenho 8 meses de experiência com Java, o qual aprendi resolvendo diversas listas de exercícios para aprimoramento da lógica de programação.";


/*ADD EFFECT CLASS IN IMGs*/
const post = pullAllElements(".post .description");
for(let item of post){
    item.previousElementSibling.className = "img-effect";
}


/*INSERT URL IN CONTACT H2*/
const contato = document.querySelector(".box h2");
contato.style.cursor = "pointer";
contato.addEventListener("click", function(){
    window.open("./index.html", "_self");
})


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
function setAnchorAttributes(elements, url){
    for(let element of elements){
        element.setAttribute("href", url);
        element.setAttribute("target", "_blank");
        element.setAttribute("rel", "external");
    }
    return elements;
}
function setImageAttributes(image, url, alt){
    image.setAttribute("src", url);
    image.setAttribute("alt", alt);
    return image;
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