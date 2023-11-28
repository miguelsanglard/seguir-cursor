const circulo = document.querySelector(".circulo");

function seguir(event) {
  var x = event.clientX;
  var y = event.clientY;

  circulo.style.top = y + "px";
  circulo.style.left = x + "px";

  console.log(circulo);
}

window.addEventListener("mousemove", seguir);
