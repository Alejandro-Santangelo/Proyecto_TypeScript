class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

class Estudiante extends Persona {
  grado: string;

  constructor(nombre: string, edad: number, grado: string) {
    super(nombre, edad);
    this.grado = grado;
  }

  estudiar(): void {
    console.log(`${this.nombre} está estudiando en el grado ${this.grado}.`);
  }
}



class Docente extends Persona {
private _materia: String = "";
private _nota: Number = 0;
constructor(nombre: string, edad: number, materia: string) {
    super(nombre, edad);
    this.materia = materia;
}
public get materia(): String {
    return this._materia;
}
public set materia(value: String) {
    this._materia = value;
}
public cargarNota(nota: Number){
    this._nota = nota;
}
}
const estudiante = new Estudiante("Juan", 20, "3º año de Ingeniería");
estudiante.saludar();
estudiante.estudiar();
const docente = new Docente("Juan", 20, "Fisica");
docente.saludar();
docente.cargarNota(3);

