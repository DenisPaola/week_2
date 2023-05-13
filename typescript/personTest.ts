import { Person } from './person'

const persona = new Person('Paola', 18, 'Madrid España')
console.log(persona.name)
console.log(persona.age)
// console.log(persona.address)  => ERROR!! es privado!
persona.printName()
console.log(persona.yearOfBirth(2023))
persona.setAddress('Trujillo Peru')
console.log(persona.getAddress())