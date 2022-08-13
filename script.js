let mobile = document.querySelector(".mobile");
let perfil = document.querySelector(".perfil");
let icon = document.querySelector(".close-icon");

mobile.addEventListener("click", function(){
    if(perfil.className === "perfil"){
        perfil.className += " open";
    } else{
        perfil.className = "perfil";
    }
})

icon.addEventListener("click", function(){
    perfil.className = "perfil";
})