class InicioSesion {
    constructor() {
        this.formulario = document.getElementById('inicioSesionForm');
        this.formulario.addEventListener('submit', (event) => this.iniciarSesion(event));

           this.configurarRedesSociales();
    }

    iniciarSesion(event) {
        event.preventDefault();
        const correo = this.getValue('correo');
        const contrasena = this.getValue('contrasena');

        this.autenticarUsuario(correo, contrasena);
    }

    autenticarUsuario(correo, contrasena) {
         fetch('/ruta-de-autenticacion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo, contrasena }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.autenticado) {
                window.location.href = '/dashboard.html';
            } else {
                console.error('Autenticación fallida');
            }
        })
        .catch(error => {
            console.error('Error al autenticar:', error);
        });
    }

    getValue(elementId) {
        return document.getElementById(elementId).value;
    }

    configurarRedesSociales() {
        const btnFacebook = document.getElementById('btnFacebook');
        const btnGoogle = document.getElementById('btnGoogle');

        if (btnFacebook) {
            btnFacebook.addEventListener('click', () => this.iniciarSesionRedSocial('Facebook'));
        }

        if (btnGoogle) {
            btnGoogle.addEventListener('click', () => this.iniciarSesionRedSocial('Google'));
        }
    }

    iniciarSesionRedSocial(redSocial) {
         console.log(`Iniciar sesión con ${redSocial}`);
    }
}

const inicioSesion = new InicioSesion();
