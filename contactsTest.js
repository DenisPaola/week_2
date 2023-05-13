import { Contacts } from './contacts.js';
import { Person } from './person.js';

// Se crean las variables de la clase persona
const person1 = new Person('Pepe', 90, 1.2, 1982, ['cocina', 'deportes', 'lectura']);
const person2 = new Person('Manolo', 60, 1.2, 2001, ['cocina', 'ciencia', 'astrología']);

// Se crea una variable de la clase Contacts
const contacts = new Contacts();

// Se incluyen dos personas
contacts.addPerson(person1);
contacts.addPerson(person2);

// Se imprimen las personas
contacts.printPersons();