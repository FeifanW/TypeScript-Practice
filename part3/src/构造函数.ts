class Dog{
    name:string;
    age:number;
    // constructor被称为构造函数
    // 构造函数会在创建对象的时候调用
    constructor(name:string, age:number) {
        // 实例方法中，this就表示当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = name
        this.age = age
    }
    bark(){
        alert("汪汪")
    }
}

const dog = new Dog("小黑",4)
const dog2 = new Dog("小白",2)

console.log(dog)
console.log(dog2)