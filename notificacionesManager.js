// notificacionesManager.js

class NotificacionesManager {
    constructor() {
        this.notificaciones = [];
        this.contenedor = document.getElementById('notificaciones');
    }

    agregarNotificacion(notificacion) {
        this.notificaciones.push(notificacion);
        this.actualizarVista();
    }

    actualizarVista() {
        // Limpiar el contenedor antes de actualizar la vista
        this.contenedor.innerHTML = '';

        // Mostrar todas las notificaciones
        this.notificaciones.forEach(notificacion => {
            notificacion.mostrar(this.contenedor);
        });
    }
}

// Crear una instancia de NotificacionesManager
const notificacionesManager = new NotificacionesManager();
