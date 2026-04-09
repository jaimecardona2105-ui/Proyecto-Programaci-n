colorPicker.addEventListener("input", actualizarPrimero, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function (p) {
    p.style.color = event.target.value;
  });
}
muestrario.select();

var muestrario;
var colorPredeterminado = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
  muestrario = document.querySelector("#muestrario");
  muestrario.value = colorPredeterminado;
  muestrario.addEventListener("input", actualizarPrimero, false);
  muestrario.addEventListener("change", actualizarTodo, false);
  muestrario.select();
}

unction actualizarPrimero(event) {
  var p = document.querySelector("p");

  if (p) {
    p.style.color = event.target.value;
  }
}