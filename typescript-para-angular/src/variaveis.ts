/**
 * variaveis
 */

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "caio";
let idade: number = 32;
let altura: number = 1.87;

//tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = "";

/*objeto sem previsibilidade*/
let produto: object = {
    name: "caio",
    cidade: "pedro leopoldo",
    idade: 32,
};


//objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
}

/*arrays*/

let dados: string[] = ["caio", "felipe", "ana", "adriana"];
let dados2: Array<string> = ["caio", "felipe", "ana", "adriana"];

//multitipos
let infos: (string | number)[] = ["caio", 32, "henrique"];


/*Tuplas*/

let boleto:[string, number, number] = ["agua conta", 199.90, 32342342];


/**
 * arrays metodos
 */

dados.pop();

/**
 * Datas
 */
let aniversario: Date = new Date("2024-01-17 14:17");
console.log(aniversario.toString());