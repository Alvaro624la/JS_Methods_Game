const coleccionNiveles = [
    {nivel: 1, titulo: 'Calentamiento nº1: Array 🐱', descripcion: 'Vamos a empezar calentando con los conceptos más básicos. Empecemos por añadir valores a éste array:', problema: "let mascotas = ['perro'];", planteamiento: 'Añade, al principio del array, el nuevo "gato" que voy a adoptar para hacer compañia a mi perro.', respuesta: "mascotas.unshift('gato');", solucion: "let mascotas = ['gato', 'perro'];", comprobacion: "mascotas[0].includes('gato')"},
    
    {nivel: 2, titulo: 'Calentamiento nº2: Array 🐭', descripcion: 'Continuamos calentando. Ahora me ha entrado un ratón en casa... ¡está entre mis mascotas!', problema: "let mascotas = ['gato', 'raton', 'perro'];", planteamiento: 'Modifica el array eliminando el "raton" de entre mis queridas mascotas.', respuesta: "mascotas.splice(1, 1);", solucion: "let mascotas = ['gato', 'perro'];"},
    
    {nivel: 3, titulo: 'Calentamiento nº3: Array 🐶', descripcion: 'Me encantan los animales, por ello, he decidido presentarme voluntaria y pasear a todos éstos perros. Ayudame a contarlos rápidamente para poder apuntarlo en el registro de la perrera.', problema: "let perros = ['Luby', 'Luna', 'Toby', 'Leo', 'Coco', 'Harry', 'Nelson', 'July', 'Gabe', 'Darleen']; <br>let cantidad = <em>null</em>;", planteamiento: '¿Cuál és el número exacto de perros que tengo que pasear hoy? Asigna el valor resultante a la variable <code>cantidad</code>.', respuesta: "cantidad = perros.length;", solucion: "let cantidad = 10;"},
    
    {nivel: 4, titulo: 'Nivel 1: Junior Front-End 🤞', descripcion: 'Invertir cadena', problema: "let cadena = 'pato donald'; <br>let invertida = <em>undefined</em>;", planteamiento: 'Invierte los caracteres de la variable cadena, y asigalos a la variable <code>invertida</code>.', respuesta: "invertida = cadena.split('').reverse().join('');", solucion: "let invertida = 'dlanod otap'"},

    {nivel: 5, titulo: 'Nivel 2: Junior Front-End 🔢', descripcion: 'He recibido ésta colección de datos:', problema: "let datos = [4, 10, 5, 696, 32, 369, 1000, 12, 5, 1, 2, 4, 21, 22]; <br>let ordenar = <em>undefined</em>;", planteamiento: 'Ordena de forma ascendente éstos datos y asigna el resultado a la variable <code>ordenar</code>.', respuesta: "ordenar = datos.sort((a, b)=> a - b);", solucion: "let ordenar = [1, 2, 4, 4, 5, 5, 10, 12, 21, 22, 32, 369, 696, 1000];"},

    {nivel: 6, titulo: 'Nivel 3: Junior Front-End 🕵️‍♀️', descripcion: 'Quiero saber el número total, de todas las "s" que hay en éste trabalenguas:', problema: "let trabalenguas = 'Si tu gusto gustara del gusto que gusta mi gusto, mi gusto gustaría del gusto que gusta tu gusto'; <br>let repet = <em>null</em>;", planteamiento: '¿Cuál es el número de veces que se repite la letra "s" en el trabalenguas?. Asignalo el resultado a la variable <code>repet</code>.', respuesta: "repet = trabalenguas.match(/s/gi).length;", solucion: "let repet = '11'"},
    
    {nivel: 7, titulo: 'Nivel 5: Junior Front-End 🧮', descripcion: '', problema: "let cadena = 'El número pi 3,14 es muy largo. 3,141592653589793 y más. En binario es 11,001001 y más.'; <br>let cantidad = <em>null</em>;", planteamiento: '¿Cuál es la cantidad de números que contiene esta cadena?. Asigna el valor a la variable <code>cantidad</code>.', respuesta: "cantidad = cadena.match(/[0-9]/g).length;", solucion: "let cantidad = 27;"},
    
    {nivel: 8, titulo: 'Nivel 4: Junior Front-End #️⃣', descripcion: 'Teniendo esta frase:', problema: "let frase = ' Bueno,  parece   algo   ,  facil'; <br>let palabras = <em>undefined</em>;", planteamiento: '¿Cuál es la cantidad de palabras contiene esta frase?. Asigna el valor a la variable <code>palabras</code>.', respuesta: "", solucion: ""},

    {nivel: 9, titulo: 'Finished!🎉', descripcion: "Congratulations, you've finished the JS Methods Game.", problema: "😁let JsMethodsGame = true;😁", planteamiento: 'See more of me here: <code>https://github.com/Alvaro624la</code>', respuesta: "", solucion: ""},
    
    {nivel: 10, titulo: 'Nivel 7: Junior Front-End', descripcion: 'Distancia de Hamming', problema: "", planteamiento: '', respuesta: "", solucion: ""},
    
    {nivel: 11, titulo: '', descripcion: '', problema: "", planteamiento: '', respuesta: "", solucion: ""},
    
    {nivel: 666, titulo: '', descripcion: 'Hoy tengo comida familiar. Quiero poner el nombre de los invitados en las sillas, pero tengo poco espacio para escribir a mi sobrino', problema: "let sobrino = 'Alejandro Daniel Ramirez'", planteamiento: '¿Cuántas palabras/carácteres contiene exactamente el nombre de "Alejandro"? Asigna el valor resultante a la variable "palabras"'},

];

//COMPROBACIONES (cambiar de documento al terminar comprobaciones (visible para el cliente))
//NIVEL 1
// var mascotas = ['perro']; 
// mascotas.unshift('gato');
// console.log(mascotas);
// //comprobar
// console.log(mascotas[0].includes('gato'));

//NIVEL 2
// var mascotas = ['gato', 'raton', 'perro'];
// mascotas.splice(1, 1);
// console.log(mascotas);
// let car;
// console.log(car);

//NIVEL 3
// let perros = ['Luby', 'Luna', 'Toby', 'Leo', 'Gin', 'Coco', 'Harry', 'Nelson', 'July', 'Gabe', 'Darleen'];
// let cantidad = null;
// cantidad = perros.length;
// console.log(cantidad);

//NIVEL 4
// let cadena = 'pato donald';
// let invertida = undefined;
// invertida = cadena.split('').reverse().join('');
// console.log(invertida);

//NIVEL 5
// let datos = [4, 10, 5, 696, 32, 369, 1000, 12, 5, 1, 2, 4, 21, 22];
// let ordenar = undefined;
// ordenar = datos.sort((a, b)=> a - b);
// console.log(ordenar);

//NIVEL 6
// let trabalenguas = 'Si tu gusto gustara del gusto que gusta mi gusto, mi gusto gustaría del gusto que gusta tu gusto';
// let repet = null;
// repet = trabalenguas.match(/s/gi).length;
// console.log(repet);

//NIVEL 7
// let cadena = 'El número pi 3,14 es muy largo. 3,141592653589793 y más. En binario es 11,001001 y más.';
// let cantidad;
// cantidad = cadena.match(/[0-9]/g).length;
// console.log(cantidad);

//NIVEL 8











//NIVEL x
// let sobrino = 'Alejandro Daniel Ramirez';
// let palabras = null;

// //contar palabras caracteres string javascript:
// // Quitar los espacios en blanco y pasar el string a minúsculas(si es necesario)
// // Recorrer la cadena de texto en vez de pasarlo a un array.
// // Finalmente guardar el resultado en un object, donde la letra es la key y su total.

// console.log(palabras);


// JUEGO

// VARIABLES (global)
const main = document.getElementById('main');
let acc = 9;
let nivelProblema = "";
let nivelRespuesta = "";
let nivelSolucion = "";
//MODAL
const body = document.getElementById('body');
let modal;
let content;
let modalBtn;


//CREACIÓN NODOS
//NIVELES
let nuevoNivel = () => {
    main.innerHTML = "";
    coleccionNiveles.forEach((nivel)=>{
        if(nivel.nivel === acc){
            nivelProblema = nivel.problema;
            nivelRespuesta = nivel.respuesta;
            nivelSolucion = nivel.solucion;
            // VARIABLES - TAG NAMEs
            const mainContainer = document.createElement('article');
                const startOver = document.createElement('button');
                const titulo = document.createElement('section');
                const probContainer = document.createElement('section');
                    const contenidoProb = document.createElement('div');
                        const probDesc = document.createElement('span');
                        const probCode = document.createElement('span');const probPreg = document.createElement('span');
                const solucionFlex = document.createElement('section');
                    const solucionContenido1 = document.createElement('div');
                    const solucionContenido2 = document.createElement('div');

            // APPENDCHILDs    
            main.appendChild(mainContainer);
            mainContainer.appendChild(startOver);
            mainContainer.appendChild(titulo);
            mainContainer.appendChild(probContainer);
                probContainer.appendChild(contenidoProb);
                    contenidoProb.appendChild(probDesc);
                    contenidoProb.appendChild(probCode);
                    contenidoProb.appendChild(probPreg);
            mainContainer.appendChild(solucionFlex);
                solucionFlex.appendChild(solucionContenido1);
                solucionFlex.appendChild(solucionContenido2);
        
            // AÑADIR CLASES
            mainContainer.classList.add('main__container');
                startOver.classList.add('main__container__start-over-btn');
                titulo.classList.add('main__container__titulo');
                probContainer.classList.add('main__container__problema-cont');
                    contenidoProb.classList.add('main__container__problema-cont__contenido');
                        probDesc.classList.add('main__container__problema-cont__contenido__span1');
                        probCode.classList.add('main__container__problema-cont__contenido__span2');
                        probPreg.classList.add('main__container__problema-cont__contenido__span3');
                solucionFlex.classList.add('main__container__solucion-flex');
                    solucionContenido1.classList.add('main__container__solucion-flex__contenido');
                    solucionContenido2.classList.add('main__container__solucion-flex__contenido');

            // INNER HTML
            startOver.id = 'clearLocalStorageBtn';
            titulo.innerHTML = nivel.titulo;
            probDesc.innerHTML = nivel.descripcion;
            probCode.innerHTML = nivel.problema;
            probPreg.innerHTML = nivel.planteamiento;
            solucionContenido1.innerHTML = `<textarea id="solText" class="main__container__solucion-flex__contenido__textarea" type="text" spellcheck="false" autocomplete="off" placeholder="Introduce tu respuesta"></textarea>`;
            solucionContenido2.innerHTML = `<button id="solBtn" class="main__container__solucion-flex__contenido__btn">Comprobar</button>`;

            //MODAL
            modal = document.createElement('div');
            body.appendChild(modal);
            modal.classList.add('body__modal');
                //CONTENT
                content = document.createElement('p');
                modal.appendChild(content);
                content.classList.add('body__modal__content');
                //CLOSE BTN
                modalBtn = document.createElement('div');
                modal.appendChild(modalBtn);
                modalBtn.classList.add('body__modal__close-btn');

            //GAME FINISHED/PASSED
            if(acc === 9){
                solucionContenido1.innerHTML = ``;
            solucionContenido2.innerHTML = ``;
            };
        };
    });


    //COMPROBACIÓN RESULTADO
    //VARIABLES (global)
    try{
        let respuesta = document.getElementById('solText');
        let comprobarBtn = document.getElementById('solBtn'); 
   
    //FUNCIONES
    comprobarBtn.addEventListener('click', ()=>{
        if(respuesta.value == nivelRespuesta){
            //MODAL
            modal.classList.add('body__modal--active');
            content.innerHTML = `¡Correcto! El resultado es ➔ ${nivelSolucion}`;
            modalBtn.classList.add('body__modal__close-btn--active');
            main.style.filter = 'blur(2px)';
            modalBtn.addEventListener('click', ()=>{
                modal.classList.remove('body__modal--active');
                modalBtn.classList.remove('body__modal__close-btn--active');
                main.style.filter = '';
                //NUEVO NIVEL
                nuevoNivel();
            });
            //TEXTAREA
            respuesta.style.backgroundColor = 'rgba(0, 255, 0, .6)';
            setTimeout(returnColor, 800);
            function returnColor(){
                respuesta.style.backgroundColor = '#fff';
            };
            //CONTADOR
            acc++;
            //local storage CONTADOR
            localStorage.setItem('contador', JSON.stringify(acc));
        } else {
            //MODAL
            modal.classList.add('body__modal--active');
            modal.style.boxShadow = 'rgba(255, 0, 0, 0.3) 0px 0px 0px 4px';
            content.innerHTML = `Incorrecto (recuerda usar comillas simples " ’ " y escribir " ; " al final)`;
            modalBtn.classList.add('body__modal__close-btn--active');
            main.style.filter = 'blur(2px)';
            modalBtn.addEventListener('click', ()=>{
                modal.classList.remove('body__modal--active');
                modal.style.boxShadow = 'rgba(3, 52, 214, 0.3) 0px 0px 0px 4px';
                modalBtn.classList.remove('body__modal__close-btn--active');
                main.style.filter = '';
            });
            //TEXTAREA
            respuesta.style.backgroundColor = 'rgba(255, 0, 0, .6)';
            setTimeout(returnColor, 800);
            function returnColor(){
                respuesta.style.backgroundColor = '#fff';
            };
        }
    });
    //clear local storage
    let clearBtn = document.getElementById('clearLocalStorageBtn');

    clearBtn.addEventListener('click', ()=>{
        localStorage.removeItem('contador');
        // localStorage.clear();
        acc = 1;
        nuevoNivel();
    });
}catch(error){
    //aprovecho el error de no detectar las variables let respuesta y let comprobarBtn para dar un mensaje y eliminar el error con catch.
    console.log('You passed the game!');
}
};
nuevoNivel();

//local storage
window.onload = ()=>{
    if(localStorage.getItem('contador')){
        acc = JSON.parse(localStorage.getItem('contador'));
        nuevoNivel();
    };
};