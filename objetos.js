// Un opbjeto es una colleción de datos
// A traves de key/value llave/valor
/* 
  objeto ={
    key: 'valor',
    'key':'valor'
  }
  objeto.key
  objeto['key']
 */

  const alumno={
    name:'Steve',
    age: 21,
    city: 'New York',
    califications: [10,10,8],
    career: 'TIADSM',
    'last name': 'Jobs',
    'gender':'Male'
  }

  console.log(alumno);
  console.log(alumno.name);
  console.log(alumno.age);
  console.log(alumno.city);
  console.log(alumno.califications);
  console.log(alumno["last name"]);
  console.log(alumno.gender);

  alumno.height = 2.30;
  console.log(alumno);

const group={
    name: '4A DSM',
    career: 'TIADSM',
    clasroom: 'Lab redes 1', 
    subjects: ['Aplicaciones','Modelado','Englis'],
    alumns: [alumno, alumno, alumno]
}

console.log(group);
console.log(group.subjects[1]);
console.log(alumno[0],califications[0]);