//On sélectionne les éléments du document
let b1 = document.getElementById('line');
let b2 = document.getElementById('hexa');
let d1 = document.getElementById('sandbox');
let d2 = document.getElementById('terraformation');
let i = 0;

function changeCouleur(){
    this.style.backgroundColor ='green';
}

function creerLigne(){
    i++;
    const line = document.createElement('div');
    line.id = i;
    if(i%2 == 0){
        line.classList.add('hex-row', 'even');
    } else {
        line.classList.add('hex-row');
    }
    d1.appendChild(line);
}

function creerHexagone(){
    const hex = document.createElement('div');
    hex.classList.add('hex');
    hex.innerHTML = '<div class="top"></div><div class="middle"></div><div class="bottom"></div>';
    console.log(i);
    let d3 = i.toString();
    let d2 = document.getElementById(d3);
    d2.appendChild(hex);
}

//On utilise la méthode addEventListener pour gérer des évènements
b1.addEventListener('click', creerLigne);
b2.addEventListener('click', creerHexagone);

d2.addEventListener('mouseover', changeCouleur);
d2.addEventListener('mouseout', function(){this.style.backgroundColor='inherit'});