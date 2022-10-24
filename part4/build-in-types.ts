// 除了第三方库JS还有很多原生对象，这些原生对象在安装tsc的时候会当成原生附送，每一个ts项目会自动加载

const a: Array<number> = [1,2,3]
const date = new Date()
date.getTime()
const reg = /abc/
reg.test('abc')


// build-in object
Math.pow(2,2)


// DOM and BOM
let body = document.body
let allLis = document.querySelectorAll('li')

document.addEventListener('click',(e) => {
    e.preventDefault()
})

// 在TS里面可以随意使用新版的JS语法
// Utility Types
interface IPerson {
    name: string
    age: number
}

let viking: IPerson = {name:'viking', age: 20}
type IPartial = Partial<IPerson>
let viking2: IPartial = {name:'viking'}
type IOmit = Omit<IPerson, 'name'>
let viking3: IOmit