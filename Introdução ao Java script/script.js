var nome = "Deivid de Souza";
var idade = 29;
var idade2 = 20;
var frase = "Japão é o melhor time do mundo";
 // alert("Bem vindo" + nome +" tem" + idade);
 // alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
//toUpperCase deixa a string toda em maiúscula no console
console.log(frase.toUpperCase("Japão", "Brasil"));

//toLowerCase deixa a string toda em minúscula no console
console.log(frase.toLowerCase("Japão", "Brasil"));

//alert(frase.replace("Japão", "Brasil"));



//exemplos de Arrays
var lista = ["maça", "pêra", "laranja", "tomate"];


//push adiciona mais um elemento a lista
lista.push("uva");

//pop tira o ultimo elemento do Array
lista.pop();



//lista quantidade de elementos do array
console.log(lista.length);


//altera ordem dos elementos do array
console.log(lista.reverse());


//transforma os elementos  array em string
console.log(lista.toString());


/*/coloca - entre os elementos ou o
 que vc acrescentar entre as aspas
*/
console.log(lista.join("-"));


//array dicionario
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]

console.log(frutas[1].nome);

//console.log(lista[3]);
alert(lista[3]);