let sum:(x:number, y:number) => number
const result = sum(1,2)


// 写很长的类型比较累，所以可以用类型别名
type PlusType = (x:number, y:number) => number
let sum2: PlusType
const result2 = sum2(2,3)

// 类型如果是字符串和数字可以用联合类型
type StrOrNumber = string | number
let result3: StrOrNumber = '123'
result3 = 123
// result3 = true

// 字面量类型比较特殊，只能是原始数据类型
const str: 'name' = 'name'
const number:1 = 1
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Left'

// 交叉类型
interface IName {
    name: string
}

type IPerson = IName & {age: number}
let person: IPerson = {name:'123', age:456}

