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

//comando if else e while 
var idade = 18;
if (idade >= 18){
    alert("maior de idade")
}
//prompt faz o usuario digitar sua idade
var idade = prompt("Digite sua idade")
if (idade >= 18){
    alert("maior de idade")

}else{
    alert("Menor de idade");
}
//estrutura de repetição com o while
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;  
}
//estrutura de repetição com for
var count;
for(count=0; count <=5; count++)
alert(count);

//utilizando date 
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

//funcões
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));

function clicou(){
    //alert("obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
    
}

function redirecionar(){
    //alert("obrigado por clicar");
   window.open("https://globallabs.academy/");
    window.location.href = ("https://www.google.com/");
}

function trocar(){
   // alert("trocar texto");
    document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse aqui";
    document.getElementById("mousemove2").innerHTML = "obrigado por ";
    MediaElementAudioSourceNode.innerHTML ="passe o moussss";
}   