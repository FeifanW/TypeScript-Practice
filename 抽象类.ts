// class Person {
//   public readonly name: string
//   constructor(name: string){
//     this.name = name
//   }
// }

// const person = new Person('feifan');
// // person.name = 'feifan2';
// console.log(person.name)

// 抽象类
// abstract class test {
//   width: number;
//   getType() {
//     return '123'
//   }
//   abstract getArea(): number;
// }

// class Circle extends test {
//   getArea() {
//     return 123
//   }
// }

// class Square {}
// class Triangle {}


interface Person {
  name: string
}

interface Teacher extends Person {
  teachingAge: number;
}

interface Student extends Person{
  age: number;
}

interface Driver {
  name: string;
  age: number;
}

const teacher = {
  name: 'feifan',
  teachingAge: 1
}

const student = {
  name: 'abc',
  age: 10,
}

const getUserInfo = (user: Person) => {
  console.log(user.name);
}

getUserInfo(teacher);
getUserInfo(student);


