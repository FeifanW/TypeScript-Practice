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

// object表示一个js对象
let r:object
r = {}
r = function (){};

// 用来指定对象中包含那些属性
// 属性名后面加上? 表示属性值可选
let z :{name:string, age?:number};
z = {name:'456', age:19}

// [propName: string]:any  表示任意类型的属性
let f :{name:string, [propName:string]:any};
z = {name:'456', age:19}

// 设置函数结构的类型声明
let u:(a:number, b:number)=>number;
u = function (n1:number, n2:number):number{
    return n1 + n2;
}

let j:string[];
j = ['a','b','c'];

// 数组类型两种表示方式
let aa : number[];
let bb: Array<number>;
// bb = [1,2,3,'test'];

// 元组: 长度固定的数组
let hh: [string, number]
hh = ['hello', 654]



let b:{name: string, age?: number}
b = {name:'123'}
b = {name:'123', age:12}


let k:{name: string, [propName:string]:any}
k = {name:'123', age:12}

let dd :(a:number, b:number) => number
dd = function (a:number, b:number){
    return a + b
}

let xx : string[]
xx = ['a', 'b', 'c']


let ff :number[];
let gg : Array<number>
gg = [1,2,3]

// 枚举
// 枚举就是把所有可能性列出来
enum Gender{
    Male,
    Female
}
let i: {name:string, gender:Gender}
i = {
    name:'12',
    gender:Gender.Male
}
console.log(i.gender === Gender.Male)

// &表示同时
let jj : {name:string} & {age: number};
jj = {name:'123', age:555}

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 6
let cc:myType;


















