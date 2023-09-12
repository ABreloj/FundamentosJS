//Strings en Javascript

let string="Texto1 "+'uwu';
//se puede usar las comillas dobles y simples
console.log(string);


console.log(string.charAt(5));
console.log(string.endsWith('a'));
console.log(string.length);
console.log(string.repeat(2));
console.log(string.toLowerCase());
console.log(string.toUpperCase());


console.log("I'm Abraham, nice to meet you");

console.log('i\'m Abraham');

//strings multilinea
const menu=`
1-opcion 1
2-opcion 2
3-opcion 3
`;
//altgr+}+espacio
console.log(menu);
//strings templates
//placeholder ${}

const name='Luffy';
const titulo='El futuro rey de los piratas';
const age='19';

console.log("Soy "+ name + " y yo sere " + titulo + " y tengo "+ age + "años");
console.log(`Soy ${name} y yo sere ${titulo} y tengo ${age} años`); //esto es con el altgr + } + espacio
 
