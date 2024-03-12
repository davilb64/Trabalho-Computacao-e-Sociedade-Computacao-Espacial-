var rocket = document.getElementById('rocket');
var br = document.getElementById('espaco');

function voar(){
        br.parentElement.removeChild(br);
};

rocket.addEventListener('click', voar);