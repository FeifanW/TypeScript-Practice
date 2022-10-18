interface Person{
    readonly id:number,
    name: string;
    age?: number;   // ?是可选属性可以不存在
}

let viking: Person = {
    id:1,
    name:"123",
    age:25
}

// viking.id = 456