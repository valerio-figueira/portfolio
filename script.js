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