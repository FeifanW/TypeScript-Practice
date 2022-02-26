// 不同的定义方式
// function hello() {}
// const test1 = function() {}
// const test2 = () => {}

// function add (first: number, second: number) : number {
//   return first + second;
// }

// function sayHello() : void {
//   console.log("hello")
// }

// function error() : never {
//   while(true) {}
// }

function add({first, second} : {first: number ; second: number}) : number {
  return first + second
}

function getNumber({first} : {first: number}) {
  return first
}

const total = add({first:1, second: 2})
const count = getNumber({first:1})












