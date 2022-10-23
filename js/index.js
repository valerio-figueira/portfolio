const projects = [
    {
        name: "Ecommerce",
        description: "Mais um ecommerce trabalhado com Javascript ES6.",
        img: "imgs/Projetos/new-ecommerce.webp",
        url: "https://valerio-figueira.github.io/ecommerce-js/"
    },
    {
        name: "Harry Potter Gallery - API",
        description: "Galeria de fotos com personagens do filme Harry Potter, utilizando a função fetch para consumo de API.",
        img: "imgs/Projetos/hp-gallery.webp",
        url: "https://valerio-figueira.github.io/harrypotter-characters/"
    },
    {
        name: "Ecommerce",
        description: "Um ecommerce feito dinamicamente com Javascript e com regras de lógica para controle de preços.",
        img: "imgs/Projetos/ecommerce.webp",
        url: "https://valerio-figueira.github.io/ecommerce/"
    },
    {
        name: "Portfolium Novum",
        description: "Modelo de site para portfólio. Feito em HTML, CSS e Javascript. Todos os projetos foram inseridos dinamicamente pelo Javascript.",
        img: "imgs/Projetos/portfolium-novum.webp",
        url: "https://valerio-figueira.github.io/portfolium_novum/"
    },
    {
        name: "Base Apparel",
        description: "Uma landing page de vestuário feminino, com entrada de cadastro para lista de e-mails, feita em HTML e CSS.",
        img: "imgs/Projetos/base-apparel.webp",
        url: "https://valerio-figueira.github.io/base-apparel-page/"
    },
    {
        name: "IPMA",
        description: "Meu primeiro projeto real, feito para o Instituto de Previdência de minha cidade. O site é todo responsivo, adaptável a qualquer formato de tela. Feito com HTML, CSS e Javascript.",
        img: "imgs/Projetos/IPMA.webp",
        url: "https://www.ipmamonte.mg.gov.br/"
    },
    {
        name: "Four Cards",
        description: "Uma simples página web feita com HTML e CSS. Alinhamento dos cartões feito com gridlayout.",
        img: "imgs/Projetos/four-cards-page.webp",
        url: "https://valerio-figueira.github.io/four-cards-page/"
    },
    {
        name: "Landing Page",
        description: "Huddle Landing Page é um projeto feito com HTML e CSS. Algumas propriedades de CSS utilizadas foram Grid Layout, Flex Box, @mediascreen (para deixá-lo responsivo), entre outras.",
        img: "imgs/Projetos/huddle.webp",
        url: "https://valerio-figueira.github.io/huddle-landing-page/"
    },
    {
        name: "Subscription Page",
        description: "Esta é uma página de cadastro, com valor de venda do produto por mensalidade. Feita com HTML e CSS apenas. A página é responsiva, se adaptando muito bem a qualquer dispositivo.",
        img: "imgs/Projetos/subscription-page.webp",
        url: "https://valerio-figueira.github.io/singlepage-subscription/"
    },
    {
        name: "Jasper Project",
        description: "Meu primeiro site feito com efeito parallax. É um site simples, mas com diversas propriedades avançadas de CSS. Há nele um navigator para mobiles e PCs desktop.",
        img: "imgs/Projetos/jasper-project.webp",
        url: "https://valerio-figueira.github.io/jasper-project/"
    },
    {
        name: "Black Onyx",
        description: "Este modelo de site, com a propriedade grid, contém três colunas de artigos que, sendo visíveis para PCs desktop e outras telas, se ajustam a uma ou duas colunas conforme o dispositivo mobile.",
        img: "imgs/Projetos/onyx-project.webp",
        url: "https://valerio-figueira.github.io/black-onyx-page/"
    },
    {
        name: "Lapis Lazuli",
        description: "Meu primeiro projeto web, o qual fiz com muita dedicação, aplicando todo conhecimento que obtive por meio de cursos e leituras, conquanto seja apenas um modelo fictício. Aprendi muito sobre estruturação de sites com este primeiro projeto.",
        img: "imgs/Projetos/lapis-lazuli.webp",
        url: "https://valerio-figueira.github.io/lapis-lazuli-page/"
    }
];

/*Insert projects into section tag*/
let startIndex = 0;
let endIndex = 8;
let indexPoint = 8;

displayProjects(startIndex, endIndex);

function displayProjects(start, end){
    const portfolium = document.querySelector(".portfolium");
    const html = projects.slice(start, end).map(project => {
        return `
        <article class="projects">
            <a href="${project.url}" target="_blank">
                <img src="${project.img}" alt="${project.name}">
            </a>
            <a href="${project.url}" target="_blank"><h3 class="name">${project.name}</h3></a>
            <a href="${project.url}" target="blank" class="knowmore">Saiba mais <span class="fa fa-angle-double-right icon"></span></a>
        </article>
        `;
    }).join("");    
    btnController(start, end);
    portfolium.innerHTML = html;
    return startIndex = start, endIndex = end;
}

/*
NEXT/PREV BTNs CONTROLLER
*/
const next = document.querySelector(".controller #next");
const prev = document.querySelector(".controller #prev");

next.addEventListener("click", () => displayProjects(startIndex -= indexPoint, endIndex -= indexPoint));
prev.addEventListener("click", () => displayProjects(startIndex += indexPoint, endIndex += indexPoint));

function btnController(start, end){
    const next = document.querySelector(".controller #next");
    const prev = document.querySelector(".controller #prev");
    if(start === 0){
        next.disabled = true;
        prev.disabled = false;
    } else if (end >= projects.length - 1){
        prev.disabled = true;
        next.disabled = false;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }
}





/*
FADE IN ANIMATION ON SCROLL
*/
const reveal = document.querySelectorAll(".reveal");
const callback = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("inview");
        } else{
            entry.target.classList.remove("inview");
        }
    });
}
const io = new IntersectionObserver(callback);
for(let view of reveal){
    io.observe(view);
}


const social = document.querySelector('footer .social');

social.appendChild(createSocialAnchors('mailto:j.valerio.figueira@gmail.com', 'fa fa-envelope'));
social.appendChild(createSocialAnchors('https://www.linkedin.com/in/valerio-figueira/', 'fa fa-linkedin-square'));
social.appendChild(createSocialAnchors('https://github.com/valerio-figueira', 'fa fa-github'));
social.appendChild(createSocialAnchors('https://www.instagram.com/valerio.figueira/', 'fa fa-instagram'));
social.appendChild(createSocialAnchors('https://www.facebook.com/jvaleriofigueira/', 'fa fa-facebook-official'));

function createSocialAnchors(url, iconClass){
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = "_blank";
    anchor.className = iconClass;
    return anchor;
}



const copyright = document.querySelector(".copyright");
const year = new Date().getFullYear();
copyright.innerHTML = `Direitos Autorais - \u00A9 ${year}`;



let myAge = year - 1994;
const actualMonth = new Date().getMonth() + 1;
actualMonth < 12 ? --myAge : myAge;
document.querySelector('.age').innerHTML = 'Idade: ' + myAge;


// NAVBAR
const navbar = document.querySelector('.nav_links');
const closeNav = document.querySelector('.nav_links .close-nav')
document.querySelector('.mobile-icon')
.addEventListener('click', () => {
    if(!navbar.matches('.responsive')){
        navbar.classList.add('responsive');
        closeNav.addEventListener('click', () => {
            navbar.classList.remove('responsive');
        });
    }else{
        navbar.classList.remove('responsive');
    }
})

document.querySelector('footer .up-btn')
.addEventListener('click', () => {
    window.open('#home', '_self');
});
