const mobile = document.querySelector(".mobile");
const perfil = document.querySelector(".perfil");
const closeBar = document.querySelector(".close-bar");

mobile.addEventListener("click", openBar);

function openBar(){
    if(perfil.className === "perfil"){
        perfil.className += " open-perfil";
    } else{
        perfil.className = "perfil";
    }
}

closeBar.addEventListener("click", function(){
    perfil.className = "perfil";
})



const projects = document.querySelectorAll(".project");

for(let i = 0; i < projects.length; i++){
    projects[i].style.cursor = "pointer";
    projects[i].style.outline = "1px solid gray";
    projects[i].style.margin = "10px";
    projects[i].style.transition = "0.4s";
    projects[i].style.backgroundColor = "#e7e7e7";
    projects[i].addEventListener("click", function(){
        if(i == 0){
            window.open("https://valerio-figueira.github.io/jasper-project/", "_blank");
        } else if(i == 1){
            window.open("https://valerio-figueira.github.io/turmalina-page/", "_blank");
        } else if(i == 2){
            window.open("https://valerio-figueira.github.io/black-onyx-page/", "_blank");
        } else if(i == 3){
            window.open("https://valerio-figueira.github.io/lapis-lazuli-page/", "_blank");
        }
    })
    projects[i].addEventListener("mouseenter", function(){
        projects[i].style.boxShadow = "0px 0px 5px 1px #00000063";
        projects[i].style.transform = "scale(1.04)";
    })
    projects[i].addEventListener("mouseleave", function(){
        projects[i].style.boxShadow = "none"; 
        projects[i].style.transform = "none";       
    })
}


const portfolio = document.querySelector(".portfolium-grid");
portfolio.style.paddingBottom = "20px";

const portfolioImgs = document.querySelectorAll(".project img");

for(let img of portfolioImgs){
    img.style.boxShadow = "0px 0px 5px 1px #00000063";
}