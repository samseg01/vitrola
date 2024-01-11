const capa = document.querySelector('.capa');
const contra = document.querySelector('.contra-capa');

function tamanho(){
    let tamanhoW = (getComputedStyle(capa).width.split('p'));
    let tamanhoH = getComputedStyle(capa).height.split('p')
    if(tamanhoW[0] !== tamanhoH[0]){
        //console.log(tamanho[0]);
        capa.style.height = getComputedStyle(capa).width;
        contra.style.height = getComputedStyle(capa).width;
    }
}

setInterval(tamanho, 100);