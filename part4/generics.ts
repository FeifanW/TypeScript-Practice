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