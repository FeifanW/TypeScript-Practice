const enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
const value = 'UP'
if(value === Direction.Up){
    console.log('go up!')
}
console.log(Direction.Up)
// console.log(Direction[0])

// 常量枚举可以提升性能
