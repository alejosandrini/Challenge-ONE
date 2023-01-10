/*La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"*/
function textoValido(texto){
    let letrasValidas = /[a-z]/
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
    contenedor.innerHTML = `<p class="p-3 mt-2 msg-error">${mensaje}</p>`
    let imagen = document.createElement('img');
    imagen.setAttribute("src","../static/images/MuñecoError.png")
    imagen.setAttribute("alt","Muñeco hubo error")
    imagen.setAttribute("id","img-resultado")
    contenedor.appendChild(imagen)
    let textarea = document.getElementById("texto-ingresado")
    textarea.value=""
    textarea.focus()
}

function encriptar(){
    let texto = document.getElementById("texto-ingresado").value;
    if(textoValido(texto)){
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
    let texto = document.getElementById("texto-ingresado").value;
    if(textoValido(texto)){
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
    contenedor.innerHTML = `<h4 class="mt-3 h-75">${texto}</h4>`
    let botonCopiar = document.createElement('button');
    botonCopiar.innerText = "Copiar"
    botonCopiar.classList.add('btn');
    botonCopiar.setAttribute("id","botonCopiar");
    botonCopiar.setAttribute("type","button")
    contenedor.appendChild(botonCopiar)
}