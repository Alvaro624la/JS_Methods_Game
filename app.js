//https://codepen.io/alvaro624la/pen/qBXXVmx
const coleccionNiveles = [
    {nivel: 1, titulo: 'Calentamiento nº1: Array', descripcion: 'Vamos a empezar calentando con los conceptos más básicos. Empecemos por añadir valores a éste array', problema: "let mascotas = ['perro'];", planteamiento: 'Añade, al principio del array, el nuevo "gato" que voy a adoptar para hacer compañia a mi perro'},
    {nivel: 2, titulo: 'Calentamiento nº2: Array', descripcion: 'Continuamos calentando. Ahora me ha entrado un ratón en casa... ¡está entre mis mascotas!', problema: "let mascotas = ['gato', 'raton', 'perro'];", planteamiento: 'Modifica el array eliminando el "raton" de entre mis queridas mascotas'},
    {nivel: 3, titulo: 'Calentamiento nº3: Array', descripcion: 'Me encantan los animales, por ello, he decidido presentarme voluntaria y pasear a todos éstos perros. Ayudame a contarlos rápidamente para poder apuntarlo en el registro de la perrera', problema: "let perros = ['Luby', 'Luna', 'Toby', 'Leo', 'Gin', 'Coco', 'Harry', 'Nelson', 'July', 'Gabe', 'Darleen']; let cantidad = null;", planteamiento: '¿Cuál és el número exacto de perros que tengo que pasear hoy? Asigna el valor resultante a la variable cantidad'},
    {nivel: 4, titulo: 'Calentamiento nº4: Array', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 5, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 6, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 7, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 8, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 9, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 10, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 12, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 12, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 13, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 14, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 15, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 16, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 17, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 18, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 19, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 20, titulo: '', descripcion: '', problema: "", planteamiento: ''},
    {nivel: 21, titulo: '', descripcion: 'Hoy tengo comida familiar. Quiero poner el nombre de los invitados en las sillas, pero tengo poco espacio para escribir a mi sobrino', problema: "let sobrino = 'Alejandro Daniel Ramirez'", planteamiento: '¿Cuántas palabras/carácteres contiene exactamente el nombre de "Alejandro"? Asigna el valor resultante a la variable "palabras"'},
];

//COMPROBACIONES (cambiar de documento al terminar comprobaciones (visible para el cliente))
//NIVEL 1
// var mascotas = ['perro']; 
// mascotas.unshift('gato'); 
// console.log(mascotas);

//NIVEL 2
// var mascotas = ['gato', 'raton', 'perro'];
// mascotas.splice(1, 1)
// console.log(mascotas);

//NIVEL 3
// let perros = ['Luby', 'Luna', 'Toby', 'Leo', 'Gin', 'Coco', 'Harry', 'Nelson', 'July', 'Gabe', 'Darleen'];
// let cantidad = null;
// cantidad = perros.length;
// console.log(cantidad);






//NIVEL x
// let sobrino = 'Alejandro Daniel Ramirez';
// let palabras = null;

// //contar palabras caracteres string javascript:
// // Quitar los espacios en blanco y pasar el string a minúsculas(si es necesario)
// // Recorrer la cadena de texto en vez de pasarlo a un array.
// // Finalmente guardar el resultado en un object, donde la letra es la key y su total.

// console.log(palabras);


// JUEGO

// ESTRUCTURA HTML
/* <main id="main" class="main">
    <article id="mainContainer" class="main__container">
        <section id="titulo" class="main__container__titulo"></section>
        <section id="problemaContainer" class="main__container__problema-cont">
            <div id="contenidoProblema" class="main__container__problema-cont__contenido"></div>
        </section>
        <section id="solucion" class="main__container__solucion"></section>
    </article>
</main> */

// VARIABLES
const main = document.getElementById('main');

// CREACIÓN NODOS
coleccionNiveles.forEach((nivel)=>{

    // VARIABLES - TAG NAMEs
    const mainContainer = document.createElement('article');
    const titulo = document.createElement('article');
    const probContainer = document.createElement('article');
        const contenidoProb = document.createElement('div');
    const solucion = document.createElement('article');

    // APPENDCHILDs    
    main.appendChild(mainContainer);
    mainContainer.appendChild(titulo);
    mainContainer.appendChild(probContainer);
        probContainer.appendChild(contenidoProb);
    mainContainer.appendChild(solucion);
    
    // AÑADIR CLASES
    

});
