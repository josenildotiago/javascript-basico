//Função verificar
function verificar() {
    var n1 = document.getElementById("n1").innerHTML; //pq é um DIV
    var n2 = document.getElementById("n2").value; //pq é um campo de input
    //Verifica se o caractere de n1 é igual a n2
    if (n1 == n2) {
        alert("PARABÉNS!! \n Você acertou o número: "+n2);
    } else {
        alert("Você errou!!");
    }
    //Reseta para uma nova tentativa
    resetar();
}
//Função resetar
function resetar() {
    //Apaga o caractere que estiver em n2
    document.getElementById("n2").value="";

    //Busca um caractere aleatório
    var r = Math.floor(Math.random()* 100);
    document.getElementById("n1").innerHTML=r; //coloca o caractere aleatório no n1
}
//Função verificar letra
function verificarLetra() {
    var n1 = document.getElementById("n3").innerHTML.toLowerCase(); //pq é um DIV
    var n2 = document.getElementById("n4").value; //pq é um campo de input
    var n3 = document.getElementById("n4").value.toUpperCase();//Converte para maiúscula
    
    //Verifica se o caractere de n1 é igual a n2
    if (n1 == n2) {
        alert("PARABÉNS!! \n Você acertou a letra: "+n3);
    } else {
        alert("Você errou!!");
    }
    //Reseta a letra
    resetarLetra();
}
//Função resetar a letra
function resetarLetra(){
    //Cria um array
    var grupo = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    //Cria uma aleatório
    var aleatorio = Math.floor(Math.random()*grupo.length)
    document.getElementById("n4").value="";//Apaga o caractere que estiver em n4
    document.getElementById("n3").innerHTML=grupo[aleatorio];//Coloca o caractere aleatório em n3
}