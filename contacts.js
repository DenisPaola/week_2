import { Person } from './person.js';

export class Contacts {

    constructor() {
        // El array inicialmente vacío
        this.arrayPerson = [];
    }

    // Este método permite añadir una nueva persona
    addPerson(p) {
        this.arrayPerson.push(p);
    }

    // Imprime las personas que están almacenads en el array
    printPersons() {
        this.arrayPerson.forEach((person, index) => {
            console.log('Persona ' + (index + 1));
            person.printAll();
            console.log();
        });
    }
}