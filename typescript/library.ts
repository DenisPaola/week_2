import { Book } from './book'

export class Library {
    private books: Array<Book>
    private address: string
    private manager: string

    constructor(books:Array<Book>, address:string, manager:string) {
        this.books = books
        this.address = address
        this.manager = manager
    }

    public getAddress():string { return this.address }
    public getManager():string { return this.manager }

    public setAddress(newAddress:string) { this.address = newAddress }
    public setManager(newManager:string) { this.manager = newManager }

    public toString():string {
        let result = ''
        for (let index = 0; index < this.books.length; index++) {
            result += `Book${index+1}
            Title - ${this.books[index].getTitle()}
            Number of Pages - ${this.books[index].getNPages()}
            ISBN - ${this.books[index].getIsbn()}
            Author - ${this.books[index].getAuthor()}
            Editorial - ${this.books[index].getEditorial()}
            
            `
        }
        return result
    }

    public getNumberOfBooks():number {
        return this.books.length
    }

    public findByAuthor(author:string): Book[] {
        return this.books.filter(book => book.getAuthor() === author)
    }
}