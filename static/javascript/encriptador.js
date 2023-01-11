/*La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"*/
function textoValido(texto){
    let letrasValidas = /[a-z\s,.]/
    for(let letra of texto){
        if(letra.search(letrasValidas) == -1){
            console.log(letra)
            return false
        }
    }
    return true
}

function mostrarError(mensaje){
    let contenedor = document.getElementById("resultado");
    contenedor.innerHTML = `<p class="p-3 mt-2 msg-error">${mensaje}</p>`;
    let imagen = document.createElement('img');
    imagen.setAttribute("src","../static/images/MuñecoError.png");
    imagen.setAttribute("alt","Muñeco hubo error");
    imagen.setAttribute("id","img-resultado");
    contenedor.appendChild(imagen);
    let textarea = document.getElementById("texto-ingresado");
    textarea.select();
}

function encriptar(){
    let input = document.getElementById("texto-ingresado");
    let texto = input.value;
    if(texto.trim()==""){
        let titulo = document.querySelector(".card-title");
        if(titulo == null){
            generarTextoPendiente();
        }else{
            titulo.textContent = "No ha ingresado ningún mensaje todavía"
        }
        input.value = texto.trim();
        input.focus();
    }else if(textoValido(texto)){
        let textoEncriptado = texto.replaceAll("e","enter");
        textoEncriptado = textoEncriptado.replaceAll("i","imes");
        textoEncriptado = textoEncriptado.replaceAll("a","ai");
        textoEncriptado = textoEncriptado.replaceAll("o","ober");
        textoEncriptado = textoEncriptado.replaceAll("u","ufat");
        mostrarResultado(textoEncriptado);
    }else{
        let mensaje = "Hay un carácter inválido, solo utilizar letras minúsculas y sin acentos";
        mostrarError(mensaje);
    }
}

function desencriptar(){
    let input = document.getElementById("texto-ingresado");
    let texto = input.value;
    if(texto.trim()==""){
        let titulo = document.querySelector(".card-title");
        if(titulo == null){
            generarTextoPendiente();
        }else{
            titulo.textContent = "No ha ingresado ningún mensaje todavía"
        }
        input.value = texto.trim();
        input.focus();
    }else if(textoValido(texto)){
        let textoEncriptado = texto.replaceAll("enter","e");
        textoEncriptado = textoEncriptado.replaceAll("imes","i");
        textoEncriptado = textoEncriptado.replaceAll("ai","a");
        textoEncriptado = textoEncriptado.replaceAll("ober","o");
        textoEncriptado = textoEncriptado.replaceAll("ufat","u");
        mostrarResultado(textoEncriptado);
    }else{
        let mensaje = "Hay un carácter inválido, solo utilizar letras minúsculas y sin acentos";
        mostrarError(mensaje);
    }
}

function mostrarResultado(texto){
    let contenedor = document.getElementById("resultado");
    contenedor.innerHTML = ``;
    let input = document.createElement('textarea');
    input.setAttribute("cols", "16");
    input.setAttribute("rows", "8");
    input.setAttribute("id", "texto-resultado");
    input.classList.add('mt-3');
    input.classList.add('h-75');
    input.setAttribute("readonly", true);
    input.value = texto;
    
    let botonCopiar = document.createElement('button');
    botonCopiar.innerText = "Copiar";
    botonCopiar.classList.add('btn');
    botonCopiar.setAttribute("id","botonCopiar");
    botonCopiar.setAttribute("type","button");
    botonCopiar.setAttribute("onclick","copiar()");
    
    contenedor.appendChild(input);
    contenedor.appendChild(botonCopiar);
}

function generarTextoPendiente(){
    let contenedor = document.getElementById("resultado");
    contenedor.innerHTML =
    `
    <img id="img-resultado" src="../static/images/Muñeco.png" alt="Muñeco">
    <div class="card-body">
        <h4 class="card-title">No ha ingresado ningún mensaje todavía</h4>
        <p class="card-text">Ingresa el texto que desees encriptar o desencriptar.</p>
    </div>
    `;
}

function copiar() {
    let copyText = document.getElementById("texto-resultado");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    //document.execCommand("copy"); deprecated
    }
  