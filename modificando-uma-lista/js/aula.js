function adicionarIngredientes(){
    var ing = document.getElementById("ingredientes").value;
    var listahtml = document.getElementById("lista").innerHTML;
    listafinal = listahtml +"<li>"+ing+"</li>";

    document.getElementById("lista").innerHTML = listafinal;
}