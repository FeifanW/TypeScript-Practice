const arr: (number | string)[] = [1, '2', 3]
const stringArr: string[] = ['a', 'b', 'c']
const undefinedArr: undefined[] = [undefined]

// type alias 类型别名
type User = {name: string; age: number}

class Teacher {
  name: string;
  age: number;
}

const objectArr: Teacher[] = [
  new Teacher(),
  {
    name: 'dell',
    age: 28
  }
]

// 元组 tuple
const teacherInfo: [string, string, number] = ['a', 'b', 10]
// csv格式常见以下数据结构
const teacherList: [string, string, number][] = [
  ['a','b', 12],
  ['a','b', 12],
  ['a','b', 12]
]
