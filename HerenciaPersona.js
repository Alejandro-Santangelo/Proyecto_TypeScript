"use strict";
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}
class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }
    estudiar() {
        console.log(`${this.nombre} está estudiando en el grado ${this.grado}.`);
    }
}
const estudiante = new Estudiante("Juan", 20, "3º año de Ingeniería");
estudiante.saludar();
estudiante.estudiar();



