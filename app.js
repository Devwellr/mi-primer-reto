let textoEntrada = document.querySelector(".texto_entrada")
let textoSalida = document.querySelector(".texto_encriptado")
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
   textoSalida.value = desencriptar
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
