const age=18;
if(age>=18){
    console.log('Es mayor');
}

if(age>=18){
    console.log('Es mayor');
}else{
    console.log('Es menor');
}

(age>=18)? console.log('Es mayor'): console.log('Es menor');
(age>=18)? 
console.log('Es mayor'): 
console.log('Es menor');

const ppt=Math.ceil(Math.random()*3);
if(ppt===1){
    console.log('Cayó Piedra');
}else if(ppt===2){
    console.log('Cayó Papel');
}else{
    console.log('Cayó Tijera');
}

const day=Math.ceil(Math.random()*7)
switch(day){
    case 1:
        console.log('Es Domingo');
        break;
    case 2:
        console.log('Es Lunes');
        break;
    case 3:
        console.log('Es Martes');
        break;
    case 4:
        console.log('Es Miercoles');
        break;
    case 5:
        console.log('Es Jueves');
        break;
    case 6:
        console.log('Es Viernes');
        break;
    case 7:
        console.log('Es Sabado');
        break;
}

//Truthy and Flasy
//0->false
//not 0-> true
//''->false
//'*poner algo*'true

let apples=0;

if(apples>0){
    console.log(`Tenemos ${apples} manzanas :D`);
}else{
    console.log(`No hay manzanas :( `);
}

apples=10;
if(apples){
    console.log(`Tenemos ${apples} manzanas :D`);
}else{
    console.log(`No hay manzanas :(`)
}

let userLoggeado='';
let usuarioActual;
userLoggeado?
    usuarioActual= userLoggeado:
    usuarioActual='Invitado';

    userLoggeado='Abraham';

    usuarioActual=userLoggeado || 'Invitado';
    console.log(usuarioActual);