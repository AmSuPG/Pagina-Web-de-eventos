//ventana emergente para la interfaz del evento en la pag. principal
const ventana_evento = document.getElementById("aviso_evento")
const abrir_ventana_evento = document.getElementById("evento_formulario")
const cerrar_ventana_evento = document.getElementById("cancelar_evento");

abrir_ventana_evento.addEventListener("click", function(){
    ventana_evento.style.display = "block";
});

cerrar_ventana_evento.addEventListener("click", function(){
    ventana_evento.style.display = "none";
});