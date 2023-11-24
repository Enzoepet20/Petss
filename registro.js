class RegistroUsuario {
    constructor() {
        this.formulario = document.getElementById('registroForm');
        this.formulario.addEventListener('submit', this.registrarUsuario.bind(this));
    }

    async registrarUsuario(event) {
        event.preventDefault();

        const datosUsuario = this.obtenerDatosUsuario();

        if (this.validarDatosUsuario(datosUsuario)) {
            try {
                const respuestaServidor = await this.enviarDatosAlServidor(datosUsuario);

                console.log('Respuesta del servidor:', respuestaServidor);

                alert('Usuario registrado con éxito');
            } catch (error) {
                console.error('Error:', error.message);
                alert('Se produjo un error al registrar el usuario');
            }
        }
    }

    obtenerDatosUsuario() {
        return {
            nombre: this.getValue('nombre'),
            apellido: this.getValue('apellido'),
            correo: this.getValue('correo'),
            contrasena: this.getValue('contrasena'),
            confirmarContrasena: this.getValue('confirmarContrasena')
        };
    }

    async enviarDatosAlServidor(datosUsuario) {
        const urlServidor = 'URL_DEL_SERVIDOR';

        const respuesta = await fetch(urlServidor, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosUsuario),
        });

        if (!respuesta.ok) {
            throw new Error('Error al enviar los datos al servidor.');
        }

        return respuesta.json();
    }

    validarDatosUsuario(datosUsuario) {
        const errores = [];

        // Verificar que los campos obligatorios no estén vacíos
        for (const campo in datosUsuario) {
            if (!datosUsuario[campo]) {
                errores.push(`El campo ${campo} es obligatorio.`);
            }
        }

        // Verificar que la contraseña coincida con la confirmación
        if (datosUsuario.contrasena !== datosUsuario.confirmarContrasena) {
            errores.push('La contraseña y la confirmación no coinciden.');
        }

        // Mostrar mensajes de error si hay problemas
        if (errores.length > 0) {
            alert('Corrige los siguientes errores:\n\n' + errores.join('\n'));
            return false;
        }

        return true;
    }

    getValue(elementId) {
        return document.getElementById(elementId).value;
    }
}

// Crear una instancia de la clase para iniciar el código
const registroUsuario = new RegistroUsuario();
