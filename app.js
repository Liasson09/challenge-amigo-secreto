// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
let amigos = [];

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;

    if (nombreDeAmigo != '') {
        amigos.push(nombreDeAmigo);
        
        console.log(amigos);

        limpiarTexto('amigo');
        actualizarListaAmigos();
    }else{
        alert("Por favor, inserte un nombre.");
    }

}
//limpiar entrada
function limpiarTexto(elemento) {
    document.getElementById(elemento).value = '';
    document.getElementById(elemento).focus;
}

function actualizarListaAmigos() {
    let listaAmigo = document.getElementById('listaAmigos');
    listaAmigo.innerHTML = "";

    amigos.forEach(function(item) {
        let li = document.createElement("li");
        li.textContent = item;
        listaAmigo.appendChild(li);
    });

}

function sortearAmigo(){
    cantidadAmigos = amigos.length;
    if (cantidadAmigos > 0) {
        let numeroAleatorio = Math.floor(Math.random()*cantidadAmigos);
        amigoSorteado = amigos[numeroAleatorio];

        let listaAmigo = document.getElementById('listaAmigos');
        listaAmigo.innerHTML = "";
        
        let elementoHTML = document.getElementById("resultado");
        elementoHTML.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    }else{
        alert("No ingresaste ningún amigo.")
    }
}
