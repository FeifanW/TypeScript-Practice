// 没有逻辑代码只是用来类型声明
// 只有类型 - 比如 interface、function 或者 class 等等

// declare function axios(url: string):string
interface IAxios {
    get:(url:string) => string;
    post: (url:string, data:any) => string;
}

declare const axios: IAxios