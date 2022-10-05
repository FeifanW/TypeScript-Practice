(function (){
    // 定义一个表示人的类
    class Person {
        // TS可以在属性前添加属性的修饰符
        // public 修饰的属性可以在任意位置访问（修改）
        // private 私有属性，私有属性只能在类内部进行访问（修改）
        // protected 受包含的属性，只能在当前类和当前类的子类中使用
        private _name:string;
        private _age:number;
        constructor(name:string, age:number) {
            this._name = name
            this._age = age
        }
        // getter方法用来读取属性
        // setter方法用来设置属性
        //     - 它们被称为属性的存取器
        // getName(){
        //     return this.name
        // }
        // // 定义方法
        // setName(value:string){
        //     this.name = value
        // }

        // TS中设置getter方法的方式
        get name(){
            return this._name
        }
        set name(value:string){
            this._name = value
        }


    }

    const per = new Person("蟹老板", 18)
    per.name = "派大星"
    console.log(per)

    class A{
        protected num:number;
        constructor(num:number) {
            this.num = num
        }
    }

    class B extends A{
        test(){
            console.log(this.num)
        }
    }

    class C{
        // 语法糖 可以直接将属性定义在构造函数中
        constructor(public name:string, public age:number) {
        }
    }
    const c = new C("xxx",100)
    console.log(c)
})()