const coleccionNiveles = [
    {
        nivel: 1, 
        titulo: 'Calentamiento nº1: Array 🐱', 
        descripcion: 'Vamos a empezar calentando con los conceptos más básicos. Empecemos por añadir valores a éste array:', 
        problema: "let mascotas = ['perro'];", 
        planteamiento: 'Añade, al principio del array, el nuevo "gato" que voy a adoptar para hacer compañia a mi perro.', 
        respuesta: {
            a: "mascotas.unshift('gato');",
            b: "mascotas.unshift( 'gato' );",
            c: 'mascotas.unshift("gato");',
            d: 'mascotas.unshift( "gato" );',
            e: "mascotas.unshift('gato')",
            f: "mascotas.unshift( 'gato' )",
            g: 'mascotas.unshift("gato")',
            h: 'mascotas.unshift( "gato" )'
        },
        solucion: "let mascotas = ['gato', 'perro'];", 
        comprobacion: "mascotas[0].includes('gato')"
    },
    {
        nivel: 2, 
        titulo: 'Calentamiento nº2: Array 🐭', 
        descripcion: 'Continuamos calentando. Ahora me ha entrado un ratón en casa... ¡está entre mis mascotas!', 
        problema: "let mascotas = ['gato', 'raton', 'perro'];", 
        planteamiento: 'Modifica el array eliminando el "raton" de entre mis queridas mascotas.', 
        respuesta: {
            a: "mascotas.splice(1, 1);",
            b: "mascotas.splice(1,1);",
            c: "mascotas.splice( 1, 1 );",
            d: "mascotas.splice(1, 1)",
            e: "mascotas.splice(1,1)",
            f: 'mascotas.splice( 1, 1 )'
        },
        solucion: "let mascotas = ['gato', 'perro'];"
    },
    {
        nivel: 3, 
        titulo: 'Calentamiento nº3: Array 🐶', 
        descripcion: 'He decidido presentarme voluntaria y pasear a todos éstos perros. Ayudame a contarlos rápidamente para poder apuntarlo en el registro de la perrera.', 
        problema: "let perros = ['Luby', 'Luna', 'Toby', 'Leo', 'Coco', 'Harry', 'Nelson', 'July', 'Gabe', 'Darleen']; <br>let cantidad = <em>null</em>;", 
        planteamiento: '¿Cuál és el número exacto de perros que tengo que pasear hoy? Asigna el valor resultante a la variable <code>cantidad</code>.', 
        respuesta: {
            a: "cantidad = perros.length;",
            b: "cantidad=perros.length;",
            c: "cantidad= perros.length;",
            d: "cantidad =perros.length;",
            e: "cantidad = perros.length",
            f: "cantidad=perros.length",
            g: "cantidad= perros.length",
            h: "cantidad =perros.length"
        },
        solucion: "let cantidad = 10;"
    },
    {
        nivel: 4, 
        titulo: 'Nivel 1: Básico ☕',
        descripcion: 'Creo que me faltaba aceite en casa...', 
        problema: "let cintaCaj = ['patatas buenas', 'huevos'];",
        planteamiento: '¿Cómo añado "aceite" al final de la cinta del cajero antes de que acabe de escánear toda la compra?',
        respuesta: {
            a: "cintaCaj.push('aceite');",
            b: 'cintaCaj.push("aceite");',
            c: "cintaCaj.push('aceite')",
            d: 'cintaCaj.push("aceite")',
            e: "cintaCaj.push(' aceite ');",
            f: 'cintaCaj.push(" aceite ");',
            g: "cintaCaj.push(' aceite ')",
            h: 'cintaCaj.push(" aceite ")',
            i: '',
            j: ''
        },
        solucion: "cintaCaj = ['patatas buenas', 'huevos', 'aceite'];"
    },
    {
        nivel: 5, 
        titulo: 'Nivel 2: Básico 🥚',
        descripcion: 'Ya tengo todo preparado para empezar la tortilla, pero me he dado cuenta de que hay patatas en mal estado', 
        problema: "let productos = ['patatas pochas', 'patatas buenas', 'huevos', 'aceite'];",
        planteamiento: '¿Cómo elimino las patatas pochas principio del array?',
        respuesta: {
            a: "productos.shift();",
            b: 'productos.shift()',
            c: "",
            d: '',
            e: "",
            f: "",
            g: '',
            h: "",
            i: '',
            j: ""
        },
        solucion: "productos = ['patatas buenas', 'huevos', 'aceite'];"
    },
    {
        nivel: 6, 
        titulo: 'Nivel 3: Básico 🍅🧀',
        descripcion: 'Voy a acompañar la tortilla con macarrones. En el armario tengo tres ingredientes, pero solo quiero tomate y queso.', 
        problema: "let ingredientes = ['pasas', 'tomate', 'queso'];",
        planteamiento: '¿Cómo parto o descarto éste primer ingrediente dejando los otros dos restantes?',
        respuesta: {
            a: "ingredientes.slice(1);",
            b: 'ingredientes.slice(1)',
            c: "ingredientes.slice( 1 );",
            d: 'ingredientes.slice( 1 )',
            e: "ingredientes.slice(1 );",
            f: "ingredientes.slice(1 )",
            g: 'ingredientes.slice( 1);',
            h: "ingredientes.slice( 1)",
            i: '',
            j: ""
        },
        solucion: "ingredientes = ['tomate', 'queso'];"
    },
    {
        nivel: 7, 
        titulo: 'Nivel 4: Básico 💁',
        descripcion: 'Hoy he ido a mi local de confianza y he visto que hay varias personas esperando.', 
        problema: "let cola = ['Ana', 'Juan', 'Carlos', 'Marimar', 'Silvia'];",
        planteamiento: '¿Cuál es el último índice en la posición de la cola del establecimiento? (La última sé que se llama Silvia)',
        respuesta: {
            a: "cola.lastIndexOf('Silvia');",
            b: 'cola.lastIndexOf("Silvia");',
            c: "cola.lastIndexOf('Silvia')",
            d: 'cola.lastIndexOf("Silvia")',
            e: "cola.lastIndexOf(' Silvia ');",
            f: 'cola.lastIndexOf(" Silvia ");',
            g: "cola.lastIndexOf(' Silvia ')",
            h: 'cola.lastIndexOf(" Silvia ")',
            i: '',
            j: ""
        },
        solucion: "cola = 4; (interpretando que la posicion 0 es la primera)"
    },
    {
        nivel: 8, 
        titulo: 'Nivel 5: Básico 👀',
        descripcion: 'Me parece haber visto a una amiga mía delante. Creo que es Ana.', 
        problema: "let posicion = ['Ana', 'Juan', 'Carlos', 'Marimar', 'Silvia', 'yo'];",
        planteamiento: '¿Cuál es el índice de Ana en el array?',
        respuesta: {
            a: "posicion.indexOf('Ana');",
            b: 'posicion.indexOf("Ana");',
            c: "posicion.indexOf('Ana')",
            d: 'posicion.indexOf("Ana")',
            e: "posicion.indexOf(' Ana ');",
            f: 'posicion.indexOf(" Ana ");',
            g: "posicion.indexOf(' Ana ')",
            h: 'posicion.indexOf(" Ana ")',
            i: '',
            j: ""
        },
        solucion: "posicion = 0; (interpretando que la posición 0 es la primera)"
    },
    {
        nivel: 9, 
        titulo: 'Nivel 6: Básico 🔀',
        descripcion: 'La cola la estaban haciendo al reves y ahora las posiciones de las personas se revertirán.', 
        problema: "let colaReves = ['Ana', 'Juan', 'Carlos', 'Marimar', 'Silvia', 'yo'];",
        planteamiento: '¿Como lo haríamos?',
        respuesta: {
            a: "colaReves.reverse();",
            b: 'colaReves.reverse()',
            c: "",
            d: '',
            e: "",
            f: "",
            g: '',
            h: "",
            i: '',
            j: ""
        },
        solucion: "colaReves = ['yo', 'Silvia', 'Marimar', 'Carlos', 'Juan', 'Ana'];"
    },
    {
        nivel: 10, 
        titulo: 'Nivel 7: Básico 🎨',
        descripcion: 'Llego a casa y continuo con el CSS. He escogido los colores para el backoground de mi página web pero el verde pistacho no me convence.', 
        problema: "let paleta = ['rojo', 'negro', 'verde pistacho'];",
        planteamiento: '¿Cómo puedo quitar éste último color del array?',
        respuesta: {
            a: "paleta.pop();",
            b: 'paleta.pop()',
            c: "",
            d: '',
            e: "",
            f: "",
            g: '',
            h: "",
            i: '',
            j: ""
        },
        solucion: "paleta = ['rojo', 'negro'];"
    },
    {
        nivel: 11, 
        titulo: 'Nivel 1: Junior Front-End 🤞', 
        descripcion: 'Invertir cadena', 
        problema: "let cadena = 'pato donald'; <br>let invertida = <em>undefined</em>;", 
        planteamiento: 'Invierte los caracteres de la variable cadena, y asigalos a la variable <code>invertida</code>.', 
        respuesta: {
            a: "invertida = cadena.split('').reverse().join('');",
            b: 'invertida = cadena.split("").reverse().join("");',
            c: "invertida=cadena.split('').reverse().join('');",
            d: 'invertida=cadena.split("").reverse().join("");',
            e: "invertida = cadena.split('').reverse().join('')",
            f: 'invertida = cadena.split("").reverse().join("")',
            g: "invertida=cadena.split('').reverse().join('')",
            h: 'invertida=cadena.split("").reverse().join("")'
        },
        solucion: "let invertida = 'dlanod otap'"
    },
    {
        nivel: 12, 
        titulo: 'Nivel 2: Junior Front-End 🔢', 
        descripcion: 'He recibido ésta colección de datos:', 
        problema: "let datos = [4, 10, 5, 696, 32, 369, 1000, 12, 5, 1, 2, 4, 21, 22]; <br>let ordenar = <em>undefined</em>;", 
        planteamiento: 'Ordena de forma ascendente éstos datos y asigna el resultado a la variable <code>ordenar</code>.', 
        respuesta: {
            a: "ordenar = datos.sort((a, b) => a - b);",
            b: 'ordenar = datos.sort((a, b) => a-b);',
            c: "ordenar = datos.sort((a, b)=> a - b);",
            d: 'ordenar = datos.sort((a, b)=> a-b);',
            e: "ordenar = datos.sort((a, b)=>a-b);",
            f: "ordenar = datos.sort((a, b) => a - b)",
            g: 'ordenar = datos.sort((a, b) => a-b)',
            h: "ordenar = datos.sort((a, b)=> a - b)",
            i: 'ordenar = datos.sort((a, b)=> a-b)',
            j: "ordenar = datos.sort((a, b)=>a-b)"
        },
        solucion: "let ordenar = [1, 2, 4, 4, 5, 5, 10, 12, 21, 22, 32, 369, 696, 1000];"
    },
    {
        nivel: 13, 
        titulo: 'Nivel 3: Junior Front-End 🕵️‍♀️', 
        descripcion: 'Quiero saber el número total, de todas las "s" que hay en éste trabalenguas:', 
        problema: "let trabalenguas = 'Si tu gusto gustara del gusto que gusta mi gusto, mi gusto gustaría del gusto que gusta tu gusto'; <br>let repet = <em>null</em>;", 
        planteamiento: '¿Cuál es el número de veces que se repite la letra "s" en el trabalenguas?. Asignalo el resultado a la variable <code>repet</code>.', 
        respuesta: {
            a: "repet = trabalenguas.match(/s/gi).length;",
            b: 'repet=trabalenguas.match(/s/gi).length;',
            c: 'repet= trabalenguas.match(/s/gi).length;',
            d: 'repet =trabalenguas.match(/s/gi).length;',
            e: "repet = trabalenguas.match(/s/gi).length",
            f: 'repet=trabalenguas.match(/s/gi).length',
            g: 'repet= trabalenguas.match(/s/gi).length',
            h: 'repet =trabalenguas.match(/s/gi).length'
        },
        solucion: "let repet = '11';"
    },    
    {
        nivel: 14, 
        titulo: 'Nivel 4: Junior Front-End 🧮', 
        descripcion: '', 
        problema: "let cadena = 'El número pi 3,14 es muy largo. 3,141592653589793 y más. En binario es 11,001001 y más.'; <br>let cantidad = <em>null</em>;", 
        planteamiento: '¿Cuál es la cantidad de números que contiene esta cadena?. Asigna el valor a la variable <code>cantidad</code>.', 
        respuesta: {
            a: "cantidad = cadena.match(/[0-9]/g).length;",
            b: 'cantidad=cadena.match(/[0-9]/g).length;',
            c: "cantidad =cadena.match(/[0-9]/g).length;",
            d: 'cantidad= cadena.match(/[0-9]/g).length;',
            e: "cantidad = cadena.match(/[0-9]/g).length",
            f: "cantidad=cadena.match(/[0-9]/g).length",
            g: 'cantidad =cadena.match(/[0-9]/g).length',
            h: "cantidad= cadena.match(/[0-9]/g).length",
        },
        solucion: "let cantidad = 27;"
    },    
    {
        nivel: 15, 
        titulo: 'Finished!🎉', 
        descripcion: "Congratulations, you've finished the JS Methods Game.", 
        problema: "😁let JsMethodsGame = true;😁", 
        planteamiento: 'See more of me, here: <code><a href="https://github.com/Alvaro624la" target="_blank">https://github.com/Alvaro624la</a></code>', 
        respuesta: {
            a: "",
            b: '',
            c: "",
            d: '',
            e: "",
            f: "",
            g: '',
            h: "",
            i: '',
            j: ""
        }, 
        solucion: ""
    },
    {
        nivel: 333, 
        titulo: 'Nivel 4: Junior Front-End #️⃣', 
        descripcion: 'Teniendo esta frase:', problema: "let frase = ' Bueno,  parece   algo   ,  facil'; <br>let palabras = <em>undefined</em>;", 
        planteamiento: '¿Cuál es la cantidad de palabras contiene esta frase?. Asigna el valor a la variable <code>palabras</code>.', 
        respuesta: {
            a: "",
            b: '',
            c: "",
            d: '',
            e: "",
            f: "",
            g: '',
            h: "",
            i: '',
            j: ""
        },
        solucion: ""
    },    
    {
        nivel: 222, 
        titulo: 'Nivel 7: Junior Front-End', 
        descripcion: 'Distancia de Hamming', 
        problema: "", 
        planteamiento: '', 
        respuesta: {
            a: "",
            b: '',
            c: "",
            d: '',
            e: "",
            f: "",
            g: '',
            h: "",
            i: '',
            j: ""
        },
        solucion: ""
    },    
    {
        nivel: 666, 
        titulo: '', 
        descripcion: 'Hoy tengo comida familiar. Quiero poner el nombre de los invitados en las sillas, pero tengo poco espacio para escribir a mi sobrino', 
        problema: "let sobrino = 'Alejandro Daniel Ramirez'", 
        planteamiento: '¿Cuántas palabras/carácteres contiene exactamente el nombre de "Alejandro"? Asigna el valor resultante a la variable "palabras"', 
        respuesta: {
            a: "",
            b: '',
            c: "",
            d: '',
            e: "",
            f: "",
            g: '',
            h: "",
            i: '',
            j: ""
        },
        solucion: ""
    }
];

//IDEAS NUEVOS NIVELES

//-------NOSE-------
// a = ['coche', 'moto'];
// console.log(a.concat('bici'));
//resultado: a = ;

//-------NOSE-------
//let b = ['Álvaro', 'Prado'];
// console.log(b.join(' de '));
//resultado: b = ;

//-------NOSE-------
// let g = ['1', '2', '3'];
// console.log(g.sort());
//resultado: 

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
let acc = 1;
let nivelProblema = "";
let nivelRespuesta;
let nivelSolucion = "";
//MODAL
const body = document.getElementById('body');
let bgModalBehind;
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

            //BG-MODAL
            bgModalBehind = document.createElement('div');
            body.appendChild(bgModalBehind);
            
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
            if(acc === 15){
                solucionContenido1.innerHTML = ``;
                solucionContenido2.innerHTML = ``;
                //clear local storage btn
                let clearBtn = document.getElementById('clearLocalStorageBtn');
                clearBtn.addEventListener('click', ()=>{
                    localStorage.removeItem('contador');
                    acc = 1;
                    nuevoNivel();
                });
            };
        };
    });

    //COMPROBACIÓN RESULTADO
    //VARIABLES (global)
    try{
        let respuesta = document.getElementById('solText');
        let comprobarBtn = document.getElementById('solBtn');

    //FUNCIONES
    //Comprobar:
    let check = ()=>{
        if(
            respuesta.value === nivelRespuesta.a || 
            respuesta.value === nivelRespuesta.b || 
            respuesta.value === nivelRespuesta.c || 
            respuesta.value === nivelRespuesta.d || 
            respuesta.value === nivelRespuesta.e || 
            respuesta.value === nivelRespuesta.f || 
            respuesta.value === nivelRespuesta.g || 
            respuesta.value === nivelRespuesta.h || 
            respuesta.value === nivelRespuesta.i || 
            respuesta.value === nivelRespuesta.j
            ){
            //MODAL and NEXT LEVEL
            modal.classList.add('body__modal--active');
            content.innerHTML = `¡Correcto! El resultado es ➔ ${nivelSolucion}`;
            modalBtn.classList.add('body__modal__close-btn--active');
            main.style.filter = 'blur(2px)';
            bgModalBehind.classList.add('bg-main-modal-behind');
            comprobarBtn.focus();
            //cerrar el modal
            let closeModalBien = ()=>{
                modal.classList.remove('body__modal--active');
                modalBtn.classList.remove('body__modal__close-btn--active');
                main.style.filter = '';
                bgModalBehind.classList.remove('bg-main-modal-behind');
                //NUEVO NIVEL
                nuevoNivel();
            };
            //cerrar modal con CLICK
            modalBtn.addEventListener('click', ()=>{
                closeModalBien();
                respuesta.focus();
            });
            //cerrar modal con ESC key
            document.addEventListener('keyup', (e)=>{
                if(e.code == 'Escape'){
                    e.preventDefault();
                    closeModalBien();
                    respuesta.focus();
                };
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
            //MODAL AND NO PASS LEVEL
            modal.classList.add('body__modal--active');
            modal.style.boxShadow = 'rgba(255, 0, 0, 0.3) 0px 0px 0px 4px';
            content.innerHTML = `Incorrecto (recuerda utilizar ES6 y/o escribir limpio y legible con espacios correspondientes)`;
            modalBtn.classList.add('body__modal__close-btn--active');
            main.style.filter = 'blur(2px)';
            bgModalBehind.classList.add('bg-main-modal-behind');
            comprobarBtn.focus();
            //cerrar el modal
            let closeModalMal = ()=>{
                modal.classList.remove('body__modal--active');
                modal.style.boxShadow = 'rgba(3, 52, 214, 0.3) 0px 0px 0px 4px';
                modalBtn.classList.remove('body__modal__close-btn--active');
                main.style.filter = '';
                bgModalBehind.classList.remove('bg-main-modal-behind');
            };
            //cerrar modal con CLICK
            modalBtn.addEventListener('click', ()=>{
                closeModalMal();
                respuesta.focus();
            });
            //cerrar modal con ESC key
            document.addEventListener('keyup', (e)=>{
                if(e.code == 'Escape'){
                    e.preventDefault();
                    closeModalMal();
                    respuesta.focus();
                };
            });
            //TEXTAREA
            respuesta.style.backgroundColor = 'rgba(255, 0, 0, .6)';
            setTimeout(returnColor, 800);
            function returnColor(){
                respuesta.style.backgroundColor = '#fff';
            };
        }
    };
    //Comprobar al presionar y soltar tecla ENTER
    respuesta.addEventListener('keypress', (e)=>{
        if (e.code == 'Enter') {
        e.preventDefault();
        check();
        };
    });
    //Comprobar con click en btn "comprobar"
    comprobarBtn.addEventListener('click', ()=>{
        check();
    });

    //clear local storage
    let clearBtn = document.getElementById('clearLocalStorageBtn');

    clearBtn.addEventListener('click', ()=>{
        localStorage.removeItem('contador');
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

//FALTA:
//Opcion de mostrar niveles en orden aleatorio
//Guardar en BBDD la cantidad de usuarios entrados en la pag.
//Guardar en BBDD la cantidad/% de errores y aciertos, y en qué niveles.