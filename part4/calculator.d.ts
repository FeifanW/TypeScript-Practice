type IOperator = 'plus' | 'minus'
// type ICalculator = (operator: IOperator, numbers: number[]) => number;
// 用interface描述函数
interface ICalculator {
    (operator: IOperator, numbers: number[]) : number;
    plus:(numbers: number[]) => number;
    minus:(numbers: number[]) => number;
}
declare const calculator: ICalculator

export default calculator