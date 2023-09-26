//Funcion con Javascript

/*
function nombre(params){
body functio
}
*/

/** 
 const nombre=function(params){
    body function
 }
*/
// funcion sin parametros sin retorno
function saluda(){
    console.log('Hellooo!');
}
saluda();

//funcion con parametros sin retorno
const saludaaa = function(name){
    console.log(`Hola ${name}`);
}
saludaaa('Ichigo');

//funcion con parametros y retorno
const duplica=function(num){
    return num * 2;
}
const doble=duplica(26);
console.log(doble);

//arrow Function, funciones de flechas ES6
/*
(params)=>{
    body function
}
*/
const getFullName=(firstName,lastName)=>{
    return firstName+''+lastName;
}
const nombre=getFullName('Ichigo','Kurosaki');
console.log(nombre);

//podemos omitir () con un único parametro
const minusculas=(word)=>{
    return word.toLowerCase();
}
console.log(minusculas('HELLO'));
const mayusculas=word=>{
    return word.toUpperCase();
}
console.log(minusculas('Hello'));

//podemos omitir llaves y return si solo hay una linea 
const cuadrado=num=>num*num;
console.log(cuadrado(25));