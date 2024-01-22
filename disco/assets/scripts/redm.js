const vinil = document.querySelector('.vinil');
const baseAgulha = document.querySelector('.cabeça-agulha')

function tamanho(){
    let tamanhoW = getComputedStyle(vinil).width.split('p');
    let tamanhoH = getComputedStyle(vinil).height.split('p');

    let tamanhoWAgulha = getComputedStyle(baseAgulha).width.split('p');
    let tamanhoHAgulha = getComputedStyle(baseAgulha).height.split('p');

    if(tamanhoW[0] !== tamanhoH[0]){
        //console.log(tamanho[0]);
        vinil.style.height = getComputedStyle(vinil).width;
    }
    if(tamanhoWAgulha[0] !== tamanhoHAgulha[0]){
        //console.log(tamanho[0]);
        baseAgulha.style.height = getComputedStyle(baseAgulha).width;
    }
}

// function tamanho

setInterval(tamanho, 100);