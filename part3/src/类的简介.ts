//使用class关键字来定义一个类
// 对象中主要包含了两个部分：
//     属性
//     方法
// 直接定义的属性是实例属性，需要通过对象的实例去访问
// 使用static开头的属性是静态属性（类属性），可以直接通过类去访问
// readonly开头的属性表示一个只读的属性无法修改
// 类方法和静态方法
class Person{
    // 定义属性
    name:string = '蟹老板';
    static readonly age:number = 18;
    // sayHello(){
    //     console.log("hello")
    // }
    static sayHello(){
        console.log("hello")
    }
}

const per = new Person();
// Person.age = 12
// per.sayHello()
Person.sayHello()
console.log(Person.age)