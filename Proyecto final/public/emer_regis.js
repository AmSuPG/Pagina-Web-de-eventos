//ventana emergente para la interfaz del registro
const ventana_confirmar_registro = document.getElementById("aviso_registro")
const abrir_ventana = document.getElementById("registro_formulario")

abrir_ventana.addEventListener("click", function(){
    ventana_confirmar_registro.style.display = "block";
});

//redirecionamiento pagina principal desde el inicio de sesión
function redirigirPrincipal(){
    window.location.href = '../16_pagina_principal/index.html';
}