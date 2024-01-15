const caminho = '/assets/sons/' + localStorage.getItem('valueText')+'.mp3'
const musica = new Audio(caminho);

console.log(caminho);

const agulhaF = document.querySelector('.cabeça-agulha');


document.getElementById('play-btn').addEventListener('click', function(){

    const vinil = document.querySelector('.vinil');

    vinil.style.animation = 'rodar 2s linear infinite';

    document.getElementById('play-btn').style.display = 'none';
    document.querySelector('.furo').style.display = 'block'

    setTimeout(() => {
        agulhaF.style.animation = 'agulha-play 1.6s linear'
    },(400));

    setTimeout(() => {
        musica.currentTime = 0;
        musica.play();
        agulhaF.style.rotate = '19deg';
        agulhaF.style.animation = 'tremer-agulha 6s linear infinite';
    },(2000));

})
const element = document.querySelector('body');
const agulha = document.getElementById('agulha');

agulha.addEventListener('mouseup', function(){
    console.log(getComputedStyle(agulhaF).position)
    element.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        console.log(`A posição atual do cursor do mouse é: (${x}, ${y})`);
        //ponteiro.style.top = y+'px';
        //ponteiro.style.left = x+'px';
        let valor = (x*y)/2;
        //566 742
        valor = (valor/1000)+124
        /*if(valor<0){
            valor = valor+(19+300)/1000
        }*/
    
        console.log(valor);
        agulhaF.style.rotate = '-'+(valor-42-79)+'deg';


    });    
})



function volume(){
    let valor = parseInt(document.getElementById('volume').value);
    musica.volume = valor/100;
}

setInterval(volume, 500);

