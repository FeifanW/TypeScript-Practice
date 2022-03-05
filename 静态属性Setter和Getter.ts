// TS里的getter和setter

// class Person {
//   constructor(private _name:string) {}
//   get name() {
//     return this._name + 'wang'
//   }
//   set name(name: string) {
//     const realName = name.split(' ')[0]
//     this._name = realName;
//   }
// }

// const person = new Person('dell');
// console.log("变化之前的",person.name)
// person.name = 'fei fan'
// console.log("变化之后的",person.name)

// 单例模式：就是一个类只能创建一个实例
class Demo {
  private static instance: Demo;
  private constructor(public name:string) {}
  static getInstance() {
    if(!this.instance) {
      this.instance = new Demo('feifan')
    }
    return this.instance
  }
}

const demo1 = Demo.getInstance()
const demo2 = Demo.getInstance()
console.log(demo1.name)
console.log(demo2.name)
console.log(demo1 === demo2)

