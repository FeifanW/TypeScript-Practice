const add = (x:number, y:number, z?:number):number => {
    if(typeof z ==='number'){
        return x + y + z
    }else{
        return x + y
    }
}

interface ISum {   // interface也可以用来声明函数
    (x:number, y:number, z?:number) : number
}


let add2:(x:number, y:number, z?:number) => number = add       // 这里的箭头不是ES6里的箭头函数而是ts里的一种用法

let add3:ISum = add

// TS会在没有指定类型的时候推测出类型
let str = 'str'
// str = 123

// 联合类型
let numberOrString: number | string
numberOrString.toString()

function getLength(input: string | number): number {
    // 类型断言
    const str = input as string  // 我比编译器更了解，断定是string类型
    if(str.length) {
        return str.length
    } else {
        const number = input as number
        return number.toString().length
    }
}

// type guard 类型守护  遇到联合类型可以自动缩小范围常见typeof、instanceOf等
function getLength2(input: string | number): number {
    if(typeof input === 'string'){
        return input.length
    } else {
        return input.toString().length
    }
}










