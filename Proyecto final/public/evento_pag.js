const tit_evento = document.getElementById('titulo_evento');  
const fecha_evento = document.getElementById('fecha_evento');
const direc_evento = document.getElementById('direccion_evento');
const cupo_evento = document.getElementById('cupos_evento');
const hora_evento = document.getElementById('hora_evento');
const num_evento = document.getElementById('numero_contacto_evento');
const desc_evento = document.getElementById('desc_evento');
const boton_publicar = document.getElementById('publicar_evento');
const listaEventos = document.getElementById('card-container');

// Cargar eventos guardados del localStorage al inicio
window.addEventListener('load', cargarEventosGuardados);

boton_publicar.addEventListener('click', agregarEvento);

function agregarEvento() {
    // Verificar que todos los campos estén llenos
    if (tit_evento.value && fecha_evento.value && direc_evento.value && cupo_evento.value && hora_evento.value && num_evento.value) {
        let eventoNuevo = document.createElement('div');
        eventoNuevo.classList.add('card');

        let titulo = document.createElement('h2');
        titulo.innerText = tit_evento.value;
        eventoNuevo.appendChild(titulo);

        let fecha = document.createElement('p');
        fecha.innerText = `Fecha: ${fecha_evento.value}`;
        eventoNuevo.appendChild(fecha);

        let lugar = document.createElement('p');
        lugar.innerText = `Dirección: ${direc_evento.value}`;
        eventoNuevo.appendChild(lugar);

        let cupos = document.createElement('p');
        cupos.innerText = `Cupos: ${cupo_evento.value}`;
        eventoNuevo.appendChild(cupos);

        let hora = document.createElement('p');
        hora.innerText = `Hora: ${hora_evento.value}`;
        eventoNuevo.appendChild(hora);

        let numero = document.createElement('p');
        numero.innerText = `Número: ${num_evento.value}`;
        eventoNuevo.appendChild(numero);

        if (desc_evento.value) {
            let descripcion = document.createElement('p');
            descripcion.innerText = `Descripción: ${desc_evento.value}`;
            eventoNuevo.appendChild(descripcion);
        }

        let buton_asistir = document.createElement('button');
        buton_asistir.innerText = "Asistir";
        buton_asistir.id = "boton_asistir";
        eventoNuevo.appendChild(buton_asistir);

        // Guardar el evento en el localStorage
        let eventosGuardados = JSON.parse(localStorage.getItem('eventos')) || [];
        eventosGuardados.push({
            titulo: tit_evento.value,
            fecha: fecha_evento.value,
            direccion: direc_evento.value,
            cupos: cupo_evento.value,
            hora: hora_evento.value,
            numero: num_evento.value,
            descripcion: desc_evento.value || '' // Guardar descripción, aunque sea vacía
        });
        localStorage.setItem('eventos', JSON.stringify(eventosGuardados));

        // Agregar el evento al DOM
        listaEventos.appendChild(eventoNuevo);
        
        // Limpiar los campos
        tit_evento.value = '';
        fecha_evento.value = '';
        direc_evento.value = '';
        cupo_evento.value = '';
        hora_evento.value = '';
        num_evento.value = '';
        desc_evento.value = '';
    } else {
        alert("Debes ingresar la información del evento");
    }
}

function cargarEventosGuardados() {
    let eventosGuardados = JSON.parse(localStorage.getItem('eventos')) || [];

    eventosGuardados.forEach(evento => {
        let eventoNuevo = document.createElement('div');
        eventoNuevo.classList.add('card');

        let titulo = document.createElement('h2');
        titulo.innerText = evento.titulo;
        eventoNuevo.appendChild(titulo);

        let fecha = document.createElement('p');
        fecha.innerText = `Fecha: ${evento.fecha}`;
        eventoNuevo.appendChild(fecha);

        let lugar = document.createElement('p');
        lugar.innerText = `Dirección: ${evento.direccion}`;
        eventoNuevo.appendChild(lugar);

        let cupos = document.createElement('p');
        cupos.innerText = `Cupos: ${evento.cupos}`;
        eventoNuevo.appendChild(cupos);

        let hora = document.createElement('p');
        hora.innerText = `Hora: ${evento.hora}`;
        eventoNuevo.appendChild(hora);

        let numero = document.createElement('p');
        numero.innerText = `Número: ${evento.numero}`;
        eventoNuevo.appendChild(numero);

        if (evento.descripcion) {
            let descripcion = document.createElement('p');
            descripcion.innerText = `Descripción: ${evento.descripcion}`;
            eventoNuevo.appendChild(descripcion);
        }

        let buton_asistir = document.createElement('button');
        buton_asistir.innerText = "Asistir";
        buton_asistir.id = "boton_asistir";
        eventoNuevo.appendChild(buton_asistir);

        buton_asistir.addEventListener('click', function() {
            mostrarPopup(evento);
        });


        listaEventos.appendChild(eventoNuevo);
    });
}

function mostrarPopup(evento) {
    // Crear la estructura del popup
    let popup = document.createElement('div');
    popup.classList.add('popup');

    let mensaje = document.createElement('p');
    mensaje.innerText = `¡Haz confirmado tu asistencia para el evento ${evento.titulo}!. Revisa tus notificaciones, correo y mensajes.`;
    popup.appendChild(mensaje);

    let cerrarBtn = document.createElement('button');
    cerrarBtn.innerText = 'Aceptar';
    cerrarBtn.onclick = function() {
        cerrarPopup(popup);
    };
    popup.appendChild(cerrarBtn);

    document.body.appendChild(popup);
}

function cerrarPopup(popup) {
    document.body.removeChild(popup);
}
