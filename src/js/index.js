
const botaoClipe = document.querySelector(".botao-clipe");
const video = document.getElementById ("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoClipe.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
})

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", ""); 
})
