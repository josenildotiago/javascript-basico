function somar(){
    var cam = document.getElementById("campo1").value.length;
    var cam2 = document.getElementById("campo2").value.length;

    if (cam == 0 || cam2 == 0) {
        document.getElementById("valor").innerHTML = "Valor: É preciso digitar algum valor em ambos os campos";
    } else {
        var campo1 = parseInt(document.getElementById("campo1").value);
        var campo2 = parseInt(document.getElementById("campo2").value);
        var inputy = document.getElementById("campo1");
        var inputy2 = document.getElementById("campo2");

        var soma = campo1 + campo2;
        document.getElementById("valor").innerHTML = "Valor:"+soma;

        inputy.placeholder = campo1;
        inputy2.placeholder = campo2;
        document.getElementById('campo1').value='';
        document.getElementById('campo2').value='';
    }
}
function diminuir(){
    var cam = document.getElementById("campo3").value.length;
    var cam2 = document.getElementById("campo4").value.length;
    if (cam == 0 || cam2 == 0) {
        document.getElementById("valor2").innerHTML = "Valor: É preciso digitar algum valor em ambos os campos";
    } else {
        var campo1 = parseInt(document.getElementById("campo3").value);
        var campo2 = parseInt(document.getElementById("campo4").value);
        var inputy = document.getElementById("campo3");
        var inputy2 = document.getElementById("campo4");

        var diminuir = campo1 - campo2;
        document.getElementById("valor2").innerHTML = "Valor:"+diminuir;
        inputy.placeholder = campo1;
        inputy2.placeholder = campo2;
        document.getElementById('campo3').value='';
        document.getElementById('campo4').value='';
    }
    
}
function multiplicar(){
    var cam = document.getElementById("campo5").value.length;
    var cam2 = document.getElementById("campo6").value.length;
    if (cam == 0 || cam2 == 0) {
        document.getElementById("valor3").innerHTML = "Valor: É preciso digitar algum valor em ambos os campos";
    } else {
        var campo1 = parseInt(document.getElementById("campo5").value);
        var campo2 = parseInt(document.getElementById("campo6").value);
        var inputy = document.getElementById("campo5");
        var inputy2 = document.getElementById("campo6");

        var multiplica = campo1 * campo2;
        document.getElementById("valor3").innerHTML = "Valor:"+multiplica;
        inputy.placeholder = campo1;
        inputy2.placeholder = campo2;
        document.getElementById('campo5').value='';
        document.getElementById('campo6').value='';
    }
    
}
function dividir(){
    var cam = document.getElementById("campo7").value.length;
    var cam2 = document.getElementById("campo8").value.length;
    if (cam == 0 || cam2 == 0) {
        document.getElementById("valor4").innerHTML = "Valor: É preciso digitar algum valor em ambos os campos";
    } else {
        var campo1 = parseInt(document.getElementById("campo7").value);
        var campo2 = parseInt(document.getElementById("campo8").value);
        var inputy = document.getElementById("campo7");
        var inputy2 = document.getElementById("campo8");

        var divide = campo1 / campo2;
        document.getElementById("valor4").innerHTML = "Valor:"+divide;
        inputy.placeholder = campo1;
        inputy2.placeholder = campo2;
        document.getElementById('campo7').value='';
        document.getElementById('campo8').value='';
    }

}