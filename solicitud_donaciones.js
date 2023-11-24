class SolicitudDonaciones {
    constructor() {
        this.formulario = document.getElementById('solicitudDonacionesForm');
        this.formulario.addEventListener('submit', this.solicitarDonaciones.bind(this));
    }

    async solicitarDonaciones(event) {
        event.preventDefault();

        const detallesSolicitud = this.obtenerDetallesSolicitud();

        if (this.validarDetallesSolicitud(detallesSolicitud)) {
            try {
                const respuestaServidor = await this.enviarDatosAlServidor(detallesSolicitud);

                // Manejar la respuesta del servidor según sea necesario
                this.mostrarMensajeExito('Solicitud de donaciones enviada con éxito');
            } catch (error) {
                console.error('Error:', error.message);
                this.mostrarMensajeError('Se produjo un error al enviar la solicitud de donaciones');
            }
        }
    }

    obtenerDetallesSolicitud() {
        return {
            causa: this.getValue('causa'),
            detallesCausa: this.getValue('detallesCausa'),
            cantidadRequerida: this.getValue('cantidadRequerida'),
            fechaLimite: this.getValue('fechaLimite'),
            metodoPago: this.getValue('metodoPago'),
            informacionContacto: this.getValue('informacionContacto')
        };
    }

    async enviarDatosAlServidor(detallesSolicitud) {
        const urlServidor = 'URL_DEL_SERVIDOR';

        const respuesta = await fetch(urlServidor, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(detallesSolicitud),
        });

        if (!respuesta.ok) {
            throw new Error('Error al enviar los datos al servidor.');
        }

        return respuesta.json();
    }

    validarDetallesSolicitud(detallesSolicitud) {
        const errores = [];

        // Verificar que los campos obligatorios no estén vacíos
        for (const campo in detallesSolicitud) {
            if (!detallesSolicitud[campo]) {
                errores.push(`El campo ${campo} es obligatorio.`);
            }
        }


        // Mostrar mensajes de error si hay problemas
        if (errores.length > 0) {
            this.mostrarMensajeError('Corrige los siguientes errores:\n\n' + errores.join('\n'));
            return false;
        }

        return true;
    }

    getValue(elementId) {
        return document.getElementById(elementId).value;
    }

    mostrarMensajeExito(mensaje) {
        alert(mensaje);
    }

    mostrarMensajeError(mensaje) {
        alert(mensaje);
    }
}

// Crear una instancia de la clase para iniciar el código
const solicitudDonaciones = new SolicitudDonaciones();
