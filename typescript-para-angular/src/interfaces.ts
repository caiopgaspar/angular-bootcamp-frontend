//interfaces (type x interface)
type robot = {
    readonly id: number | string;
    name: string;
};

const bot1: robot = {
    id: 1,
    name: "megaman",
};


interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
};

const bot2: robot2 = {
    id: 1,
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot1);
console.log(bot2);

class Pessoa implements robot2{
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `hello i am ${this.name}`;
    }
};

const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());

