//ventana emergente para la interfaz del evento en la pag. principal
const ventana_evento_creado = document.getElementById("aviso_evento_creado")
const abrir_ventana_evento_creado = document.getElementById("publicar_evento")
const cerrar_ventana_evento_creado = document.getElementById("cerrar_ventana_evento_creado");

abrir_ventana_evento_creado.addEventListener("click", function(){
    ventana_evento_creado.style.display = "block";
});

cerrar_ventana_evento_creado.addEventListener("click", function(){
    ventana_evento_creado.style.display = "none";
});