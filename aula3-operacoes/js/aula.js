function somar(){
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);

    var soma = campo1 + campo2;
    alert(soma)
    document.getElementById('campo1').value='';
    document.getElementById('campo2').value='';
}
function diminuir(){
    var campo1 = parseInt(document.getElementById("campo3").value);
    var campo2 = parseInt(document.getElementById("campo4").value);

    var diminuir = campo1 - campo2;
    /* if (campo1 < campo2) {
        var diminuir = campo2 - campo1;
        var diminuir = "-"+diminuir;
    } else {
        var diminuir = campo1 - campo2;
    } */
    alert(diminuir);
    document.getElementById('campo3').value='';
    document.getElementById('campo4').value='';
}
function multiplicar(){
    var campo1 = parseInt(document.getElementById("campo5").value);
    var campo2 = parseInt(document.getElementById("campo6").value);

    var multiplica = campo1 * campo2;
    alert(multiplica)
    document.getElementById('campo5').value='';
    document.getElementById('campo6').value='';
}
function dividir(){
    var campo1 = parseInt(document.getElementById("campo7").value);
    var campo2 = parseInt(document.getElementById("campo8").value);

    var divide = campo1 / campo2;
    alert(divide)
    document.getElementById('campo7').value='';
    document.getElementById('campo8').value='';
}