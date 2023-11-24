
    mostrarResultados(tipoMascota) {
        const resultadosHTML = `
        `;

        this.resultadosContainer.innerHTML = resultadosHTML;
    }
}

const busquedaMascotas = new BusquedaMascotas();

function adoptar(nombreMascota) {
    alert('¡Felicidades! Has adoptado a ' + nombreMascota + '.');
}
