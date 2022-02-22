// 1、静态类型
// let b:number = 123
// b = "123"
// b = 456

// type Point = {x:number, y:number}
// interface Point {x:number, y:number}
// function tsDemo(data: Point){
//     // console.log("test") 
//     return Math.sqrt(data.x ** 2 + data.y ** 2)
// }
// tsDemo({x:1, y:2})

// const count: number = 2022
// count会继承number上的所有方法

// interface Point {
//     x: number,
//     y: number
// }

// const point: Point = {
//     x:3,
//     y:2
// }

// 2.基础类型 null undefined symbol boolean void
const count: number = 123
const teacherName: string = 'jack'

// 3.对象类型

class Person {}

const teacher: { name: string ; age: number } = {
    name: 'jack',
    age:18
}

const num: number[] = [1,2,3]

const jack: Person = new Person()

const getTotal: () => number = () => {
    return 123
}


