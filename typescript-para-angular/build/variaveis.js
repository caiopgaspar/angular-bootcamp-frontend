"use strict";
/**
 * variaveis
 */
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "caio";
let idade = 32;
let altura = 1.87;
//tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = "";
/*objeto sem previsibilidade*/
let produto = {
    name: "caio",
    cidade: "pedro leopoldo",
    idade: 32,
};
let meuProduto = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
};
/*arrays*/
let dados = ["caio", "felipe", "ana", "adriana"];
let dados2 = ["caio", "felipe", "ana", "adriana"];
//multitipos
let infos = ["caio", 32, "henrique"];
/*Tuplas*/
let boleto = ["agua conta", 199.90, 32342342];
/**
 * arrays metodos
 */
dados.pop();
/**
 * Datas
 */
let aniversario = new Date("2024-01-17 14:17");
console.log(aniversario.toString());
