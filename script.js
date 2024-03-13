var rocket = document.getElementById('rocket');
var br = document.getElementById('espaco');
let el = document.getElementById('id');
let btn = document.getElementById('btn');
        

function voar(){
        el.style.color = 'blue';
        rocket.style.animation = 'topo 10s infinite alternate';
};

btn.addEventListener('click', voar);