let arrOfNumbers:number[] = [1,2,3]
arrOfNumbers.push(3)

function test() {
    console.log(arguments)
}

// 元组限定了数据类型的数组
let user:[string, number] = ['hello', 20]
user.push(123)   // 只能push上面规定的类型




