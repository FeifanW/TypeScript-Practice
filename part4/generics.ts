function echo<T>(arg:T):T {
    return arg
}

const result:string = echo('temp')
let a = result

function swap<T, U>(tuple:[T,U]):[U,T]{
    return [tuple[1], tuple[0]]
}
const result2  = swap(['string', 123])

function echoWithArr<T>(arg:T[]): T[] {
    console.log(arg.length)
    return arg
}

const arrs = echoWithArr([1, 2, 3])

// 可以用接口interface来约束泛型
interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(arg: T):T {
    console.log(arg.length)
    return arg
}

const str = echoWithLength('str')
const obj = echoWithLength({length:10, width:10})
const arr2 = echoWithLength([1,2,3])
// echoWithLength(13)     // 约束泛型必须有length属性

class Queue<T> {   // 类可以用泛型来约束
    private data = []
    push(item: T) {
        return this.data.push(item)
    }
    pop():T {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

interface KeyPair<T, U> {
    key: T
    value: U
}
let kp1: KeyPair<number, string> = {key:1, value:'string'}
let kp2: KeyPair<string, number> = {key:'str', value:2}
let arr:number[] = [1,2,3]
let arrTwo:Array<number> = [1,2,3]












