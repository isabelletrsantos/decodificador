const textArea = document.querySelector(".apresentacao-conteudo-texto");
const mensagem = document.querySelector(".mensagem");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//Função para Encriptar
function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptada) {

let matrizCodigo = [
["e", "enter"], 
["i", "imes"], 
["a", "ai"], 
["o", "ober"], 
["u", "ufat"]
];

stringEncriptada = stringEncriptada.toLowerCase();

for (let i = 0; i < matrizCodigo.length; i++) {
  stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
}

return stringEncriptada;
}

//Função para Descriptografar
function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptada) {

let matrizCodigo = [
  ["e", "enter"], 
  ["i", "imes"], 
  ["a", "ai"], 
  ["o", "ober"], 
  ["u", "ufat"]
  ];
  
stringDesencriptada = stringDesencriptada.toLowerCase();

  
for (let i = matrizCodigo.length - 1; i >= 0; i--) {
    stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
  }

  return stringDesencriptada;
}




// Função para Copiar o Texto
function btnCopiar() {
  const textoParaCopiar = mensagem.value;
  const inputTemporario = document.createElement("input");

  inputTemporario.value = textoParaCopiar;
  document.body.appendChild(inputTemporario);

  inputTemporario.select();
  document.execCommand("copy");

  document.body.removeChild(inputTemporario);
}

document.querySelector(".botao-copiar").addEventListener("click", btnCopiar);
