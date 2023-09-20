const inputTarea =document.getElementById('inputTarea');
const listaTareas = document.querySelector('#tareas ol');
const tiempo = document.getElementById('tiempo');

const tareas =[];

function addTarea(){
    const dato = inputTarea.value;
    if(dato){
        tareas.push({ tarea : dato, time: tiempo.value });
        inputTarea.value='';
        tiempo.value='';
        //listaTareas.innerHTML= `<li>${ tareas }</li>`;
        showTareas();
    }
    
}

function showTareas(){
    const tareasLi = tareas.map(tarea => `<li>${ tarea.tarea }-${ tarea.time }</li>`)
    listaTareas.innerHTML= tareasLi.join('');
}
