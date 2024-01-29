//funcoes
function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name: string){
    return `Hello ${name}!`;
}

function callToPhone(phone: number | string): number | string {
    return phone;
}

async function getDatabase(id: number): Promise<number | string> {
    return "caio";
}


let soma: number = addNumber(4, 7);

console.log(soma);

console.log(addToHello("Caio"));

console.log(callToPhone(4354354354));
console.log(callToPhone("4354354354"));