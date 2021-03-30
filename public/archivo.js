//alert('Esto es una alert desde un archivo Js');

document.write("Hola este es un mensaje en pantalla"+"<br>");

//Manejo de variables

var nombre = "Andrés Ariza";
var edad = 27;

document.write("Hola "+nombre+" tu edad es: "+edad+"<br>");

//var contat = nombre+" "+edad;

//document.write("<br>"+contat);

//DOM Document Object Model

var x = document.getElementById("dato");
//x.innerHTML += `<h1> Hola esta es la variable impresa ${contat} </h1>`;


//IMPLEMENTACIÓN DE ESTRUCTURAS DE CONTROL (IF)
if(edad >= 20){
    x.innerHTML += `<h1>${nombre} ya es mayor de edad </h1>`;
}

//IMPLEMENTACIÓN DE UN FOR
for(var i=0; i<=10; i++){
    document.writeln("Iteración: "+i+"<br>");
}

// VARIABLES LET Y VAR
//VAR se puede implementar afuera del metodo en cambio LET no

//DEFINIR FUNCIONES
function mostrar(nombre2, edad2){
    document.writeln("Hola "+nombre2+" tu edad es: "+edad2);
}
//IMPLEMENTAR LA FUNCIÓN
mostrar("Angie Rivera",24);

function cuadrado (num){
    return num+num;
}

var y = cuadrado(5);
document.writeln("<br>"+" el cuadrado es: "+y);

console.log("El resultado de la función cuadrada es...."+y);

//OBJETOS JSON
//ESTRUCTURAS DE TIPO COLECCIÓN, PERMITEN GUARDAR MULTIPLES DATOS

var auto = {
    marca :'Ford',
    modelo : '2021',
    color : 'Azul',
    Dueño : 'Andrés',
    Placa : 'SWM 44E'
}
document.writeln("<br>"+" la marca del auto es: "+auto.marca+" y el modelo es: "+auto.modelo);

//call backs
//implementamos la función 
function divisio(x,y,callback){
    if(y==0){
        return callback('Error, no se puede dividir entre cero')
    }
    else{
        callback(null, x/y);
    }
}

//implementar callback
division(40, 0, function(err, res){
    if(err){
        return console.log(err);
    }
    console.log("La respuesta: "+res);
});

//Ejemplo2
//Implementación función:

const leerAlumno = (id) => {
    const alumno = {
        id,
        nombre: 'Andrés'
    }

    setTimeout(() => {
        console.log(alumno);
    }, 3000);
}

//Enviar datos a la función
leerAlumno(10);

//Ejemplo3
const leerAlumno = (id, callback) => {
    const alumno = {
        id,
        nombre: 'Andrés'
    }

    setTimeout(() => {
        callback(alumno);
    }, 3000);
}

//Enviar datos a la función + el callback
leerAlumno(2, (alumno)=>{
    console.log('id: ', alumno.id)
    console.log('id: ', alumno.nombre)
});

//PROMESAS
const promesa = new Promise((respuesta, rechazo)=>{
    setTimeout(()=>{
        console.log('Tarea en 5 segundos');
        var temporal = "Promesa OK";

        if(temporal){
            res(temporal);
        }

    },5000);
})

// Implementar la promesa:

promesa.then(resultado => {
    console.log('Then de la promesa: ', resultado);
})
.catch(err => {
    console.log(err)
});

//ASYNC / AWAIT
//Paso 1: Crear una primer función

let getNombre = async()=>{
    return 'Andrés';
}

//Paso 2: Crear una segunda función

let saludo = async()=>{
    let nombre = await getNombre();
    return `Hola ${nombre}`
}

//Paso 3: Implementar ASYNC AWAIT

saludo().then(res=>{
    console.log(res);
}).catch(error=>{
    console.log(error);
})



