// Capture form
var form_cont = document.getElementById("form_cont");
form_cont.addEventListener("submit", function (event) {
  event.preventDefault();
});
// Datos del formulario
function envio_form() {
  var name = document.getElementById("name").value;
  document.getElementById("name-show").innerHTML = name;
  var email = document.getElementById("email").value;
  document.getElementById("email-show").innerHTML = email;
  var message = document.getElementById("message").value;
  document.getElementById("message-show").innerHTML = message;
}
// Modal Windows
const submit_form = document.getElementById("submit_form");
const close = document.getElementById("close");
const modal = document.getElementById("modal_container");
submit_form.addEventListener("click", () => {
  modal.classList.add("show");
});
close.addEventListener("click", () => {
  modal.classList.remove("show");
    document.getElementById("form_cont").reset();
});
// Menu desplegable de hamburguesa
function menu_hamburguesa(menu) {
  menu.classList.toggle("open");
}
