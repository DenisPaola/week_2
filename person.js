export class Person {

    constructor(name, weigth, heigth, year, hobbies) {
        debugger;
        this.name = name;
        this.weigth = weigth;
        this.heigth = heigth;
        this.hobbies = hobbies;


        const now = new Date();
        this.yearOfBirth = now.getFullYear() - year;
    }

    calcularIMC() {
        debugger;
        return this.weigth / this.heigth;
    }

    printAll() {
        console.log('Name: ' + this.name);
        console.log('Weigth: ' + this.weigth);
        console.log('Heigth: ' + this.heigth);
        console.log('yearOfBirth: ' + this.yearOfBirth);
    }

    printHobbies() {
        console.log('Los hobbies son:')
        this.hobbies.forEach(hobbie => {
            console.log(hobbie);
        });

    }
}