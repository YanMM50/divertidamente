const silhueta = document.querySelector('#silhueta')
const tristeza = document.querySelector('#tristeza')
const alegria = document.querySelector('#alegria')
const nojinho = document.querySelector('#nojinho')
const raiva = document.querySelector('#raiva')


tristeza.addEventListener('click', trocartristeza)
alegria.addEventListener('click', trocaralegria)
nojinho.addEventListener('click', trocarnojinho)
raiva.addEventListener('click', trocarraiva)

function trocartristeza(){
    silhueta.src = 'images/04.png'
    document.body.style.background = 'linear-gradient(blue, white)'
}

function trocaralegria(){
    silhueta.src = 'images/02.png'
    document.body.style.background = 'linear-gradient(yellow, white)'
    
}

function trocarnojinho(){
    silhueta.src = 'images/03.png'
    document.body.style.background = 'linear-gradient(green, white)'
    
}

function trocarraiva(){
    silhueta.src = 'images/01.png'
    document.body.style.background = 'linear-gradient(red, white)'
    
}

