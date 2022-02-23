// type annotation 类型注解，告诉TS变量是什么类型
// type inference  类型推断 TS自动尝试分析变量的类型

function getTotal(firstNumber: number, secondNumber: number){
  return firstNumber + secondNumber
}

const total = getTotal(1,2)