// 基础类型 boolean 、 number 、 string 、 void 、 undefined 、 symbol 、 null
let count : number;
count = 123

// 对象类型， {}、Class、function、 []
const fun1 = (str: string) => {
  return parseInt(str, 10);
}

const func1: (str: string) => number = (str) => {
  return parseInt(str, 10)
}

const date = new Date()

// 其他情况
interface Person {
  name: 'string'
}

const rawData = '{"name": "dell"}'
const newData: Person = JSON.parse(rawData)

let temp: number | string = 123
temp = '456'