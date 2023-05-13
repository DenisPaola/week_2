export class Vector {
    private elements: Array<number> = []

    constructor(n:number, k:number) {
        for (let index = 0; index < n; index++) {
            this.elements.push(Math.floor(Math.random() * k))
        }
    }

    public print() {
        console.log(this.elements)
    }

    public add(v1: Array<number>):Array<number> {
        let result:Array<number> = []
        for (let index = 0; index < this.elements.length; index++) {
            result.push(this.elements[index] + v1[index])
        }
        return result
    }

    public subs(v1: Array<number>):Array<number> {
        let result:Array<number> = []
        for (let index = 0; index < this.elements.length; index++) {
            result.push(this.elements[index] - v1[index])
        }
        return result
    }
    
    public mult(v1: Array<number>):Array<number> {
        let result:Array<number> = []
        for (let index = 0; index < this.elements.length; index++) {
            result.push(this.elements[index] * v1[index])
        }
        return result
    }
    
    public multNumber(n:number):Array<number> {
        let result:Array<number> = []
        for (let index = 0; index < this.elements.length; index++) {
            result.push(this.elements[index] * n)
        }
        return result
    }
    
}