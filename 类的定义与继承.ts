class Person {
  name = "feifan";
  getName() {
    return this.name
  }
}

class Teacher extends Person {
  getTeacherName() {
    return 'Teacher'
  }
  getName() {
    return super.getName() + 'Wang'
  }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());