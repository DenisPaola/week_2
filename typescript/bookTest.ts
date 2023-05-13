import { Book } from './book'

const book = new Book('Libro espectacular', 256, '1234567890', 'Paola Lozano', 'New World')
console.log(book.toString())
book.setEditorial('Otra editorial importante')
book.setIsbn('0987654321')
book.setNPages(120)
book.setTitle('Libro super espectacular')
console.log(book.toString())