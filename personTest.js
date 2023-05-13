import { Person } from './person.js';

const person = new Person('Pepe', 60, 1.2, 1982, ['cocina', 'deportes', 'lectura']);

const imc = person.calcularIMC();
console.log('El iMC es: ' + imc);

// Muestra los atributos de la persona
person.printAll();

// Muestra los hobbies
person.printHobbies();