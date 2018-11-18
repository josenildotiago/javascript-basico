//função sem parâmetros
function trocarDiv(){
    var area = document.getElementById("area");
    var text = prompt("Qual texto?");

    area.innerHTML = text;
}
//função com parâmetros
function trocarDiv2(nome) {
    var area = document.getElementById("area");
    var text = prompt("Qual texto?");

    area.innerHTML = nome+" "+text;
}