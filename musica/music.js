console.log()

const musica = new Audio(localStorage.getItem('valueText')+'.mp3');

document.getElementById('play-btn').addEventListener('click', function(){

    const vinil = document.querySelector('.vinil');
    const agulha = document.querySelector('.cabeça-agulha');

    agulha.style.animation = 'agulha-play 1s linear'
    document.getElementById('play-btn').style.display = 'none';
    document.querySelector('.furo').style.display = 'block'

    setTimeout(() => {
        agulha.style.rotate = '19deg';
        vinil.style.animation = 'rodar 2s linear infinite';
        musica.currentTime = 0;
        musica.play();
    },(1000));

})


function volume(){
    let valor = parseInt(document.getElementById('volume').value);
    musica.volume = valor/100;
}

setInterval(volume, 500);

