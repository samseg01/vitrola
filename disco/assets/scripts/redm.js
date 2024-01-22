const vinil = document.querySelector('.vinil');
const baseAgulha = document.querySelector('.cabeça-agulha')
const caixa = document.getElementById('caixa');

function tamanho(){
    let tamanhoW = getComputedStyle(vinil).width.split('p');
    let tamanhoH = getComputedStyle(vinil).height.split('p');

    let tamanhoWAgulha = getComputedStyle(baseAgulha).width.split('p');
    let tamanhoHAgulha = getComputedStyle(baseAgulha).height.split('p');

    let tamanhoWCaixa = getComputedStyle(caixa).width.split('p');
    let tamanhoHCaixa = getComputedStyle(caixa).height.split('p');

    let redmCaixa = Number(tamanhoHCaixa[0])*1.1    
    console.log(redmCaixa+'px')
    caixa.style.width = redmCaixa+'px';

    let tamanhoCaixaAtualizado = Number(tamanhoHCaixa[0])/100*90;
    vinil.style.height = tamanhoCaixaAtualizado+'px';

    if(tamanhoW[0] !== tamanhoH[0]){
        vinil.style.width = getComputedStyle(vinil).height;
    }

    if(tamanhoWAgulha[0] !== tamanhoHAgulha[0]){
        //console.log(tamanho[0]);
        baseAgulha.style.height = getComputedStyle(baseAgulha).width;
    }
}

// function tamanho

setInterval(tamanho, 100);