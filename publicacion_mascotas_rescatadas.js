class PublicarMascotasRescatadas {
    constructor() {
        this.formulario = document.getElementById('publicarMascotasForm');
        this.formulario.addEventListener('submit', (event) => this.publicarMascota(event));
    }

    publicarMascota(event) {
        event.preventDefault();
        const datosMascota = {
            nombre: this.getValue('nombreMascota'),
            descripcion: this.getValue('descripcionMascota'),
            ubicacion: this.getValue('ubicacionMascota'),
            estadoSalud: this.getValue('estadoSaludMascota'),
            estadoAdopcion: this.getValue('estadoAdopcion'),
        };

        // Validar datos antes de enviar al servidor
        const validacionExitosa = this.validarDatosMascota(datosMascota);

        if (validacionExitosa) {
            this.enviarDatosAlServidor(datosMascota);
        }
    }

    async enviarDatosAlServidor(datosMascota) {
        try {
            // Simular una solicitud POST al servidor usando fetch
            const respuesta = await fetch('URL_DEL_SERVIDOR', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosMascota),
            });

            if (!respuesta.ok) {
                throw new Error('Error al enviar los datos al servidor.');
            }

            const respuestaServidor = await respuesta.json();

            console.log('Respuesta del servidor:', respuestaServidor);

            alert('Mascota rescatada publicada con éxito');

        } catch (error) {
            console.error('Error:', error.message);
            alert('Se produjo un error al publicar la mascota rescatada');
        }
    }

    validarDatosMascota(datosMascota) {
        const errores = [];

        // Verificar que los campos obligatorios no estén vacíos
        if (!datosMascota.nombre) {
            errores.push('El campo "Nombre de la Mascota" es obligatorio.');
        }

        if (!datosMascota.descripcion) {
            errores.push('El campo "Descripción" es obligatorio.');
        }

        if (!datosMascota.ubicacion) {
            errores.push('El campo "Ubicación" es obligatorio.');
        }


        if (errores.length > 0) {
            alert('Corrige los siguientes errores:\n\n' + errores.join('\n'));
            return false;
        }

        // Todos los campos son válidos
        return true;
    }

    getValue(elementId) {
        return document.getElementById(elementId).value;
    }
}

// Crear una instancia de la clase para iniciar el código
const publicarMascotasRescatadas = new PublicarMascotasRescatadas();

