//Basic types


let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any= 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true,'Hello']

//Tuple
let person: [number,string,boolean] = [1,'Brad',true]
//Tuple array
let employee: [number,string][]
employee = [
    [1,'Brad'],
    [2,'John'],
    [3,'Jill']
]

// Union
let pid: string | number
pid = '22'
//Enum
enum Direction1 {
    Up, Down, Left,Right
}
console.log(Direction1.Up)

//Objects
type User ={
    id:number,
    name: string
}
const user: User ={
    id:1,
    name:'John'
}

//Type Assertion
let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number

//Functions
function addnum(x: number,y: number): number {
    return x+y
}

function log(message: string | number): void {
    console.log(message)
}

//Interfaces
interface UserInterface {
   readonly id:number,
    name: string
    age?: number
}
const user1: UserInterface ={
    id:1,
    name:'John'
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = ( x: number,y: number): number=>x+y
const subtract: MathFunc = ( x: number,y: number): number=>x-y

//Classes
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
    this.id = id
    this.name = name
    }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')
