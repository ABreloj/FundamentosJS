const body=document.querySelector('body');
const red=document.querySelector('#red');
const green=document.querySelector('#green');
const blue=document.querySelector('#blue');
const a=document.querySelector('#a');

function SetColor(){
    //rgb(0,255,25)
    //rgb(0,255,34,0.5)
    const redVal = red.value;
    const greenVal = green.value;
    const blueVal = blue.value;
    const aVal = a.value/100;
    const rgbaColor = `rgb(${ redVal }, ${greenVal}, ${blueVal}, ${ aVal })`;
    body.style.background=rgbaColor;
}

SetColor();



red.addEventListener('input',SetColor);
green.addEventListener('input',SetColor);
blue.addEventListener('input',SetColor);
a.addEventListener('input',SetColor);