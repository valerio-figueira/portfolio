const URL = "https://portfolium-api.netlify.app/projects";


async function fetchAPI() {
    const loader = document.querySelector(".loader");

    loader.style.display = "block";

    return fetch(URL)
    .then(response => {
        return Promise.resolve(response);
    }).then(response => {
        return response.json()
    }).then(projects => {
        loader.style.display = "none";
        return projects
    })
}


let startIndex = 0;
let endIndex = 8;
let indexPoint = 8;

displayProjects(startIndex, endIndex);

async function displayProjects(start, end){
    const portfolium = document.querySelector(".portfolium");

    const projects = await fetchAPI();

    const html = projects.slice(start, end).map(project => {
        return `
        <article class="projects" id="${project._id}">
            <div class="image-gallery">
                <div class="images">
                    ${project.image.map(img => {
                        return `
                        <a href="${project.url}" target="_blank">
                            <img src="${img}" alt="${project.title}">
                        </a>
                        `
                    })}
                </div>
                <button class="left-btn fa fa-angle-left"></button>
                <button class="right-btn fa fa-angle-right"></button>
            </div>
            <a href="${project.url}" target="_blank"><h3 class="name">${project.title}</h3></a>
            <a href="${project.url}" target="blank" class="knowmore">Saiba mais <span class="fa fa-angle-double-right icon"></span></a>
        </article>
        `;
    }).join("");    
    btnController(start, end, projects);
    portfolium.innerHTML = html;

    addEvents()

    return startIndex = start, endIndex = end;
}


function addEvents(){
    const ImgContainers = document.querySelectorAll('.image-gallery');
    
    ImgContainers.forEach(container => {
        container.addEventListener('click', (e) => {
            if(e.target.matches('.left-btn')){
                container.children[0].scrollLeft -= 250;
            } else if(e.target.matches('.right-btn')){
                container.children[0].scrollLeft += 250
            }
        })
    })
}

/*
NEXT/PREV BTNs CONTROLLER
*/
const next = document.querySelector(".controller #next");
const prev = document.querySelector(".controller #prev");

next.addEventListener("click", () => displayProjects(startIndex -= indexPoint, endIndex -= indexPoint));
prev.addEventListener("click", () => displayProjects(startIndex += indexPoint, endIndex += indexPoint));

function btnController(start, end, projects){
    const next = document.querySelector(".controller #next");
    const prev = document.querySelector(".controller #prev");
    if(start <= 0){
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
document.querySelector('.age').innerHTML = '<span>Idade:</span> ' + myAge;


// NAVBAR
const navbar = document.querySelector('.links-container');
const closeNav = document.querySelector('.links-container .close-nav')
document.querySelector('.mobile-icon')
.addEventListener('click', () => {
    if(!navbar.matches('.responsive')){
        navbar.classList.add('responsive');
        console.log(navbar)
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
