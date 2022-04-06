// trocar cor da div a partir dos clicks nos botões. 

function verde() {
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.add('verde')
    document.querySelector('#exemplo').innerHTML = 'Verde'
}
function vermelho() {
    document.querySelector('#exemplo').classList.remove('verde')
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.add('vermelho')
    document.querySelector('#exemplo').innerHTML = 'Vermelho'
}
function azul() {
    document.querySelector('#exemplo').classList.remove('verde')
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.add('azul')
    document.querySelector('#exemplo').innerHTML = 'Azul'
}

// Trocar cor do botão //

function trocar() {

   if (document.querySelector('#botao').classList.contains('branco')) {
       document.querySelector('#botao').classList.remove('branco');
       document.querySelector('#botao').classList.add('vermelho');
   } else {
    document.querySelector('#botao').classList.remove('vermelho');
     document.querySelector('#botao').classList.add('branco');

   }
}
