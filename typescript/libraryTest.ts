import { Library } from './library'
import { Book } from './book'

const myLibrary = new Library([
    new Book('Libro espectacular', 256, '1234567890', 'Paola Lozano', 'New World'),
    new Book('Otro Libro', 120, '2345678901', 'Juliana Trujillo', 'Los Lectores'),
    new Book('La Biblia de la Programacion', 430, '3456789012', 'Paola Lozano', 'Asno'),
], 'Madrid', 'Manager 1')

console.log(myLibrary.toString())
console.log(myLibrary.getNumberOfBooks())
console.log(myLibrary.getAddress())
myLibrary.setManager('Julian Rodriguez')
console.log(myLibrary.getManager())
console.log(myLibrary.findByAuthor('Paola Lozano'))
console.log(myLibrary.findByAuthor('Pedro Sanchez'))
