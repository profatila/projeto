var saudacao = "Bem vindo ....";

function entrar1() {

    var area = document.getElementById('area1');
    var texto = prompt('Digite seu nome');

    if (texto == '' || texto == null) {
        alert('Digitar seu nome novamente!');
        area.innerHTML = 'Bem vindo ...'
    } else {
        area.innerHTML = `${saudacao} ${texto}`;
    }
}

function entrar2(nome) {

    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome');
    area.innerHTML = saudacao + " " + nome + " " + texto;

}