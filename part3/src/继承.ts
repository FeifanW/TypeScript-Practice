(function (){
    // 定义一个Animal类
    class Animal{
        name:string;
        age:number;
        constructor(name:string, age:number) {
            this.name = name
            this.age = age
        }
        sayHello(){
            console.log("动物在叫")
        }
    }

    class Dog extends Animal{
        run(){
            console.log(`${this.name}在跑~`)
        }
        sayHello() {
            console.log("小狗汪汪")
        }
    }

    class Cat extends Animal{

    }

    const dog = new Dog("旺财", 5)
    const cat = new Cat("咪咪",3)
    console.log(dog)
    dog.sayHello()
    dog.run()

})()