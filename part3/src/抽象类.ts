(function (){
    // 以abstract开头的类是抽象类
        // 抽象类和普通类区别不大，只是不能用来创建对象
        // 抽象类就是专门用来被继承的类
    abstract class Animal {
        name:string;
        constructor(name:string) {
            this.name = name
        }
        // 定义一个抽象方法
        // 抽象方法使用abstract开头，没有方法体
        // 抽象方法只能定义在抽象类，子类必须对抽象方法进行重写
        abstract sayHello():void
    }
    class Dog extends Animal{
        age:number

        constructor(name:string, age:number) {
            // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
            super(name);   // 调用父类的构造函数
            this.age = age
        }

        sayHello() {
            console.log("汪汪汪")
        }
    }

    const dog = new Dog("旺财",3)
    dog.sayHello()
})()