//Funciones de Orden superior
//High Order Functions
/*
    Funciones que reciben funciones
    como parametros
*/

const myFunction =()=>{
    console.log('Ejecuta mi funcion');
}
myFunction();
const sameFunction=myFunction;
sameFunction();

const otherSameFunction = myFunction;
otherSameFunction();

const funOne=()=>{
    console.log('Ejecuta funcione one');
}

const funTWo=(username)=>{
    console.log('Ejecuta función Two');
    console.log('Holi uwu '+username)
}

const funThree =(otherFuntion)=>{
    console.log('Iniciar función 3');
    otherFuntion();
    console.log('Termina función 3');
}

funOne();
funTWo('Abraham');
funTWo('Ab');
funThree(funOne);
funThree(()=> console.log('Soy una Arrow function que no se que sea D:'))