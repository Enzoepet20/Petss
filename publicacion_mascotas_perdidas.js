class PublicacionMascotaPerdida {
    constructor() {
        this.formulario = document.getElementById('publicarPerdidasForm');
        this.formulario.addEventListener('submit', (event) => this.publicarMascotaPerdida(event));
        this.inputImagen = document.getElementById('imagenMascotaPerdida');
        this.previewImagen = document.getElementById('previewImagen');

        // Agregar evento para mostrar la vista previa de la imagen seleccionada
        this.inputImagen.addEventListener('change', () => this.mostrarVistaPreviaImagen());
    }

    publicarMascotaPerdida(event) {
        event.preventDefault();

        if (this.validarFormulario()) {
            const datosMascota = this.obtenerDatosFormulario();

            // Simulación de enviar datos al servidor utilizando la API Fetch
            this.enviarDatosAlServidor(datosMascota);
        }
    }

    validarFormulario() {
        const camposObligatorios = ['nombreMascota', 'descripcionMascota', 'ubicacionPerdida', 'contacto', 'fechaPerdida', 'estadoSaludMascota', 'imagenMascotaPerdida'];

        for (const campo of camposObligatorios) {
            const valorCampo = this.getValue(campo);

            if (!valorCampo) {
                alert('Todos los campos son obligatorios. Por favor, completa la información.');
                return false;
            }
        }

        return true;
    }

    obtenerDatosFormulario() {
        return {
            nombreMascota: this.getValue('nombreMascota'),
            descripcionMascota: this.getValue('descripcionMascota'),
            ubicacionPerdida: this.getValue('ubicacionPerdida'),
            contacto: this.getValue('contacto'),
            fechaPerdida: this.getValue('fechaPerdida'),
            estadoSaludMascota: this.getValue('estadoSaludMascota'),
            imagenMascotaPerdida: this.inputImagen.files[0], // Archivo de la imagen
            recompensa: this.getValue('recompensa'),
            etiquetas: this.getValue('etiquetas'),
        };
    }

    enviarDatosAlServidor(datosMascota) {
        // Utiliza la API Fetch para enviar los datos al servidor
        const formData = new FormData();
        formData.append('nombreMascota', datosMascota.nombreMascota);
        formData.append('descripcionMascota', datosMascota.descripcionMascota);
        formData.append('ubicacionPerdida', datosMascota.ubicacionPerdida);
        formData.append('contacto', datosMascota.contacto);
        formData.append('fechaPerdida', datosMascota.fechaPerdida);
        formData.append('estadoSaludMascota', datosMascota.estadoSaludMascota);
        formData.append('imagenMascotaPerdida', datosMascota.imagenMascotaPerdida);
        formData.append('recompensa', datosMascota.recompensa);
        formData.append('etiquetas', datosMascota.etiquetas);

        fetch('url_del_servidor', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al enviar los datos al servidor.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos enviados con éxito:', data);
            // Muestra un mensaje de éxito al usuario
            alert('Mascota perdida publicada con éxito.');
            // Puedes redirigir a otra página o realizar acciones adicionales aquí
        })
        .catch(error => {
            console.error('Error:', error.message);
            // Muestra un mensaje de error al usuario
            alert('Ocurrió un error al publicar la mascota perdida. Por favor, inténtalo de nuevo.');
        });
    }

    getValue(elementId) {
        return document.getElementById(elementId).value;
    }

    mostrarVistaPreviaImagen() {
        const file = this.inputImagen.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                this.previewImagen.src = e.target.result;
            }.bind(this);

            reader.readAsDataURL(file);
        }
    }
}

const publicacionMascotaPerdida = new PublicacionMascotaPerdida();
