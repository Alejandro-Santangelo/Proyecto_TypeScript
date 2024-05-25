class Hoja {
    contenido: string;

    constructor(contenido: string) {
        this.contenido = contenido;
    }

    leer(): void {
        console.log(this.contenido);
    }
}

class Libro {
    titulo: string;
    hojas: Hoja[];

    constructor(titulo: string) {
        this.titulo = titulo;
        this.hojas = [];
    }

    agregarHoja(contenido: string): void {
        const hoja = new Hoja(contenido);
        this.hojas.push(hoja);
    }

    leerLibro(): void {
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

