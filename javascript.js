var botao = document.querySelector(".botao");
var numero = document.querySelector(".numero");

function somar(event) {
  var valornumero = numero.innerHTML;
  var valornumero2 = parseFloat(valornumero);
  var somando = valornumero2 + 1;
  if (somando < 11) {
    numero.textContent = somando;
  } else {
    console.log("Número exedido.");
  }
}

if (botao) {
  botao.addEventListener("click", somar);
  // console.log("teste");
} else {
  // console.log("não");
}
