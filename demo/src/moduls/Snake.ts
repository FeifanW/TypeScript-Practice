class Snake{
    // 蛇头
    head:HTMLElement;
    // 蛇的身体
    bodies:HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector("#snake > div") as HTMLElement;
        this.bodies = this.element!.getElementsByTagName("div")
    }

    // 获取蛇头的坐标
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    set X(value:number){
        if(this.X === value){
            return;
        }
        // X的值的合法范围0-290之间
        if(value < 0 || value > 290){
            throw new Error("蛇撞墙了！")
        }

        // 水平方向不能掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft ===value){
            // console.log("水平方向发生了掉头")
            if(value > this.X){  // 让掉头失效
                value = this.X - 10
            }else{
                value = this.X + 10
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.left = value + 'px';
        // 检查有没有撞到自己
        this.checkHeadBody()
    }
    set Y(value:number){
        if(this.Y === value){
            return;
        }
        if(value < 0 || value > 290){
            throw new Error("蛇撞墙了！")
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop ===value){
            // console.log("水平方向发生了掉头")
            if(value > this.Y){  // 让掉头失效
                value = this.Y - 10
            }else{
                value = this.Y + 10
            }
        }

        this.moveBody()

        this.head.style.top = value + 'px';
        // 检查有没有撞到自己
        this.checkHeadBody()
    }
    // 蛇增加身体的方法
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

    // 添加一个蛇身体移动的方法
    moveBody(){
        // 从后往前改
        for(let i=this.bodies.length-1;i>0;i--){
            // 获取前边身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';

        }
    }

    // 检查头和身体有没有相撞
    checkHeadBody(){
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for(let i=1;i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                // 进入说明蛇头撞到了身体
                throw new Error("撞到自己了！")
            }
        }
    }
}

export default Snake