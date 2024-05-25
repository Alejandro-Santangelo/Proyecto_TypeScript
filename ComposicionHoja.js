"use strict";
class Hoja {
    constructor(contenido) {
        this.contenido = contenido;
    }
    leer() {
        console.log(this.contenido);
    }
}
class Libro {
    constructor(titulo) {
        this.titulo = titulo;
        this.hojas = [];
    }
    agregarHoja(contenido) {
        const hoja = new Hoja(contenido);
        this.hojas.push(hoja);
    }
    leerLibro() {
        console.log(`Leyendo el libro: ${this.titulo}`);
        for (const hoja of this.hojas) {
            hoja.leer();
        }
    }
}
const libro = new Libro("Mi Libro de Aventuras");
libro.agregarHoja("Capítulo 1: La Aventura Comienza");
libro.agregarHoja("Capítulo 2: En el Bosque Encantado");
libro.leerLibro();
