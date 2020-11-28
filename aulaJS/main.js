var nome = "denis";
var idade = 33;
var idade2 = 20;
var frase = "Japao melhor time do mundo";
//alert("bem vindo"+ nome+"tem"+idade);
//alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japao", "Brasil"));
console.log(frase.toLowerCase());
console.log(idade*idade2);

var lista =["maça","pera","laranja"];
lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse())
console.log(lista[1]);
console.log(lista);
console.log(lista[1])
console.log(lista.toString()[1]);
console.log(lista.join(" "));
var fruta ={nome:"maça", cor:"vermelho"}
console.log(fruta.nome);
//alert(fruta.cor);
var frutas=[{nome:"maça",cor:"vermelho"},{nome:"uva",cor:"roxo"}];
console.log(frutas[1].nome);
//var idade=prompt("Qual sua idade ?");
//if(idade>=18){
//    alert("maior de idade")
//}else{
//    alert("menor de idade ")
//}
console.log(idade);
var count=0;
while(count<5){
    console.log(count);
    count++;
}
for (count=0; count<=5; count++){
    console.log(count);
}
var d = new Date();
console.log(d.getDay()+1);
console.log(d.getHours());

//function soma(n1,n2){
//    return n1+n2;
//}
//alert(soma(5,10));
//function setReplace(frase,nome,novo_nome){
//    return frase.replace(nome,novo_nome)
//}
//alert(setReplace( "vai japao","japao","Barsil"));
function validaIdade(idade){
    var validar;
    if (idade>=18){
        validar=true
    }else{
        validar=false
    }
    return validar;
}
//var idade = prompt("Digite a idade");
console.log(validaIdade(idade));


function botao(){
    document.getElementById("agradecimento").innerHTML = "obrigado por clicar";
//    alert("obrigado por clicar")
}
function redirecionar(){
    window.open("https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwj2qIbx16XtAhXcH7kGHRQHDP8QPAgI");
    window.location.href  = "https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwj2qIbx16XtAhXcH7kGHRQHDP8QPAgI";
}
function trocar(elemento){
    //document.getElementById("mouse").innerHTML = "obrigado mouse";
    elemento.innerHTML= " obrigadopasse o mouse " ;
    //alert("trocar texto");
    
}
function voltar(elemento){
    //document.getElementById("mouse").innerHTML = "passe o mouse"
    elemento.innerHTML= "passe o mouse " ;
}

function change(elemento){
    console.log(elemento.value);
}