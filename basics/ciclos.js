//Ciclos en JavaScript
//for
for(let i=0;i<3;i++){
    console.log("indice "+i);
}

//while
let i=0;
while(i<3){
    console.log("Indice "+i)
    i++;
}

//do While
i=0;
do{
    console.log('indice '+i);
    i++
}while(i===0);

//recorriendo objetos
const letras='abc';
const numeros=[1,2,3];

for(let i=0;i<letras.length;i++){
    console.log(letras[1]);
}

for(let i=0;i<numeros.length;i++){
    console.log(numeros[i]);
}

//for of
console.log('For of\n');
for(const letra of letras){
    console.log(letra);
}
for(const numero of numeros){
    console.log(numero);
}