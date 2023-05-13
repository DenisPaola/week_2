import { Person } from './person'

export class Contacts {
    public people: Array<Person>

    constructor() {
        this.people = [
            new Person('Juan', 30, 'Barcelona'),
            new Person('Sofia', 28, 'Madrid'),
            new Person('Felipe', 45, 'Andorra'),
        ]
    }

    public printCalendar() {
        for (const persona of this.people) {
            console.log(`Nombre: ${persona.name} - Edad: ${persona.age} - Direccion: ${persona.getAddress()}`)
        }
    }
}