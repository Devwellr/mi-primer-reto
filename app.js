let textoEntrada = document.querySelector(".texto_entrada")
let textoSalida = document.querySelector(".texto_encriptado")
let botonCopiar = document.querySelector('#btncopiar')
// array del vocabulario.
let vocabulario = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
]

function bntencriptar() {
    let texto = textoNuevo(textoEntrada.value);    
    textoSalida.value= texto
    let display = texto.length;
    if (display > 0) {
        //objetos visibles cuando hay texto.
        document.getElementById('btncopiar').style.display= 'flex';
        document.querySelector('.texto_encriptado').style.display= 'block';
        document.querySelector('.indicacion').style.display= 'none';
        document.querySelector('.imagen_muñeco').style.display= 'none';
    } else {
        //objetos cambiados cuando no hay texto
        document.getElementById('btncopiar').style.display= 'none';
        document.querySelector('.texto_encriptado').style.display= 'none';
        document.querySelector('.indicacion').style.display= 'block';
        document.querySelector('.imagen_muñeco').style.display= 'block';
    }
}
function textoNuevo(frasenueva) {
    for (let i = 0; i < vocabulario.length; i++) {
        if (frasenueva.includes(vocabulario[i][0])) {
            frasenueva = frasenueva.replaceAll(
                vocabulario[i][0],
                vocabulario[i][1]
            )
        }
    }
    return frasenueva;
}
// codigo btn desencriptar
function btndesencriptar() {
    let desencriptar = desencriptarTexto(textoEntrada.value);
    textoSalida.value = desencriptar;
    }

function desencriptarTexto(textoDesencriptado) {
    for (let i = 0; i < vocabulario.length; i++) {
        if (textoDesencriptado.includes(vocabulario[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(
                vocabulario[i][1],
                vocabulario[i][0]
            )
        } 
    }
    return textoDesencriptado;
}
async function copy() {
    let txt = textoSalida.value
    await navigator.clipboard.writeText(txt)
}
botonCopiar.addEventListener('click',copy);