const vinil = document.querySelector('.vinil');

function tamanho(){
    let tamanhoW = (getComputedStyle(vinil).width.split('p'));
    let tamanhoH = getComputedStyle(vinil).height.split('p')
    if(tamanhoW[0] !== tamanhoH[0]){
        //console.log(tamanho[0]);
        vinil.style.height = getComputedStyle(vinil).width;
    }
}

setInterval(tamanho, 100);