function verificar() {
    var n1 = document.getElementById("n1").innerHTML; //pq é um DIV
    var n2 = document.getElementById("n2").value; //pq é um campo de input

    if (n1 == n2) {
        alert("Voce acertou o número");
    } else {
        alert("Voce errou");
    }
    resetar();
}
function resetar() {
    document.getElementById("n2").value="";

    var r = Math.floor(Math.random()* 100);
    document.getElementById("n1").innerHTML=r;
}
function verificarLetra() {
    var n1 = document.getElementById("n3").innerHTML.toLowerCase(); //pq é um DIV
    var n2 = document.getElementById("n4").value; //pq é um campo de input
    
    //alert(n1+ " " +n2);
    if (n1 == n2) {
        alert("PARABÉNS!! \n Voce acertou a letra: "+n2);
    } else {
        alert("Voce errou");
    }
    //resetarLetra();
    resetarLetra();
}
function resetarLetra(){
    var grupo = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var aleatorio = Math.floor(Math.random()*grupo.length)
    document.getElementById("n4").value="";
    document.getElementById("n3").innerHTML=grupo[aleatorio];
}