const name = '我是Modeule';

let func = function () {
    console.log("这是方法");
}

function Person(pname) {
    this.name = pname;
}


// 1.导出方式一
export {
    name,
    func,
    Person
}

// 2.导出类
export class Dom {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log(this.name + "年龄:" + this.age);
    }
}