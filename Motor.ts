class Motor {
    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    encender(): void {
        console.log(`El motor de tipo ${this.tipo} está encendido.`);
    }
}

class Auto {
    marca: string;
    motor: Motor|undefined;

    constructor(marca: string, motor: Motor) {
        this.marca = marca;
        this.motor = motor;

    }
    clear() {
        this.marca = "";
        this.motor = undefined;
      }


    arrancar(): void {
        console.log(`El auto de marca ${this.marca} está arrancando.`);
        this.motor.encender();
    }
}


let motor = new Motor("V8");
let auto = new Auto("Ford Mustang", motor);
auto.arrancar(); 
auto = null;
