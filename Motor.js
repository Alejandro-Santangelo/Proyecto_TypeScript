"use strict";
class Motor {
    constructor(tipo) {
        this.tipo = tipo;
    }
    encender() {
        console.log(`El motor de tipo ${this.tipo} está encendido.`);
    }
}
class Auto {
    constructor(marca, motor) {
        this.marca = marca;
        this.motor = motor;
    }
    arrancar() {
        console.log(`El auto de marca ${this.marca} está arrancando.`);
        this.motor.encender();
    }
}
// Ejemplo de uso:
const motor = new Motor("V8");
const auto = new Auto("Ford Mustang", motor);
auto.arrancar();
