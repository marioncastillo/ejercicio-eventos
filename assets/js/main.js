window.onload = function(){
	var boton = document.getElementById("demo");
	boton.addEventListener("click",hola);
}
function hola(){
	var mensaje = document.getElementById("mensaje");
	mensaje.innerHTML = "HOLA MUNDO"
}

function cargando(){
	aler("La pagina esta completamente cargada");
}

function mouseout(){
	alert("Estas sobre mi");
}

function mouseovert(){
	alert("No estas sobre mi");
}