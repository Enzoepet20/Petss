class Notificacion {
    constructor(id, icono, mensaje, fecha) {
        this.id = id;
        this.icono = icono;
        this.mensaje = mensaje;
        this.fecha = fecha;
    }

    mostrar() {
        const notificacion = document.getElementById(this.id);

        // Crea un nuevo elemento div para cada notificación
        const notificacionDiv = document.createElement('div');
        notificacionDiv.classList.add('notificacion');

        notificacionDiv.innerHTML = `
            <div class="icono"><img src="${this.icono}" alt="Ícono"></div>
            <div class="contenido">
                <p class="mensaje">${this.mensaje}</p>
                <p class="fecha">Fecha: ${this.fecha}</p>
            </div>
        `;

        // Agrega la nueva notificación al contenedor
        notificacion.appendChild(notificacionDiv);
    }
}

// Crear instancias de Notificacion
const notificacion1 = new Notificacion('notificaciones', 'icono_adopcion.png', '¡Felicidades! La adopción de "Buddy" se ha confirmado. 🐾', '12 de Noviembre de 2023');
const notificacion2 = new Notificacion('notificaciones', 'icono_donacion.png', '¡Gracias por tu labor! Se ha recibido una donación para la causa "Ayuda a perritos enfermos". 🙏', '10 de Noviembre de 2023');

// Mostrar las notificaciones
notificacion1.mostrar();
notificacion2.mostrar();
