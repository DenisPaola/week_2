import { Vector } from './vector'

const miVector = new Vector(6, 50)
miVector.print()
console.log(miVector.add([2, 2, 2, 2, 2, 2]))
console.log(miVector.subs([2, 2, 2, 2, 2, 2]))
console.log(miVector.mult([2, 2, 2, 2, 2, 2]))
console.log(miVector.multNumber(3))