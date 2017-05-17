window.onload = function(){
	var boton = document.getElementById("demo");
	boton.addEventListener("click",hola);
}
function hola(){
	var mensaje = document.getElementById("mensaje");
	mensaje.innerHTML = "HOLA MUNDO"
}