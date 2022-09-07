let a:10
a = 11

let d:any
d = 22
d = "123465"

// 不指定类型，会自动判断为any
let c;
c = 10;
c = "hello"

// unknow 表示未知类型的值
let e: unknown
e = 10
e = "hello"
e = true


// any能给别的类型赋值，unknown不行
// unknown 是一个类型安全的any
let s: string
s = d

// 类型断言，可以用来告诉解析器变量的实际类型
s = e as string
s = <string>e

// 表示没有返回值的函数
function fn() :void{
    return null  // undefined也是空
}

// never 表示永远不会返回结果
function fn2() : never{
    throw new Error("报错了!")
}