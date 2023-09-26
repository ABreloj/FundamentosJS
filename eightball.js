const respuesta=document.getElementById('respuesta');

function eightball(){
    const opcion=Math.ceil(Math.random()*8);
    let answer;
    switch(opcion){
        case 1:
            answer='No te preocupes, todo saldrá bien ^^'
            break;
        case 2:
            answer='Preocupate, todo saldrá mal D:'
            break;
        case 3:
            answer='Y si en vez de estar perdiento tu tiempo en esta pagina web te pones a solucionar tus problemas'
            break;
        case 4:
            answer='Enserio le cuentas tus problemas a una bola 8 virtual?'
            break;
        case 5:
            answer='Eso parece algo serio, deberias preguntarle a una bola 8 virtual'
            break;
        case 6:
            answer='Posiblemente'
            break;
        case 7:
            answer='Preguntame mañana'
            break;
        case 8:
            answer='Estas totalmete consiente de que las respuestas que doy son totalmente al azar y programadas por un random, y que por nada del mundo deberias darle importancia para tu vida'
            break;
        

    }
    respuesta.innerHTML=answer;
}