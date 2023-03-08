const btTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const btFecharMd = document.querySelector(".fechar-md");
const video = document.getElementById("video");
const linkVD = video.src;


btTrailer.addEventListener("click", ()=> {
    modal.classList.add("abt");
    video.setAttribute("src", linkVD);
});

btFecharMd.addEventListener("click", ()=> {
    modal.classList.remove("abt");
    video.setAttribute("src","");
});
