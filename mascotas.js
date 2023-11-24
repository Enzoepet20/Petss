// mascotas.js

class Mascota {
    constructor(nombre, descripcion, ubicacion, estadoSalud, estadoAdopcion, imagen, contacto, etiquetas) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.estadoSalud = estadoSalud;
        this.estadoAdopcion = estadoAdopcion;
        this.imagen = imagen;
        this.contacto = contacto;
        this.etiquetas = etiquetas.split(',').map(tag => tag.trim());
    }

    mostrar() {
        console.log('Información de la mascota:');
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Ubicación: ${this.ubicacion}`);
        console.log(`Estado de Salud: ${this.estadoSalud}`);
        console.log(`Estado de Adopción: ${this.estadoAdopcion}`);
        console.log(`Imagen: ${this.imagen}`);
        console.log(`Contacto: ${this.contacto}`);
        console.log('Etiquetas:', this.etiquetas);
    }
}

// Crear instancias de Mascota
const mascota1 = new Mascota('Buddy', 'Cachorro juguetón', 'Ciudad X', 'Saludable', 'Disponible', 'buddy.jpg', 'correo@example.com', 'perro, cachorro, amigable');
const mascota2 = new Mascota('Luna', 'Gata cariñosa', 'Ciudad Y', 'Saludable', 'Adoptada', 'luna.jpg', 'correo@example.com', 'gato, cariñoso, hogar');

// Mostrar información de las mascotas
mascota1.mostrar();
mascota2.mostrar();
