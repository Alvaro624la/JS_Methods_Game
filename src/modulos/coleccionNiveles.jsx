export const coleccionNiveles = [
    {
        nivel: 1, 
        titulo: 'Calentamiento nº1: Array 🐱', 
        descripcion: 'Vamos a empezar calentando con los conceptos más básicos. Empecemos por añadir valores a éste array:', 
        problema: "let mascotas = ['perro'];", 
        planteamiento: 'Añade, al principio del array, el nuevo "gato" que voy a adoptar para hacer compañia a mi perro.', 
        respuesta: [
            "mascotas.unshift('gato')",
            "mascotas.unshift('gato');",
            "mascotas.unshift( 'gato');",
            "mascotas.unshift('gato' );",
            "mascotas.unshift('gato') ;",
            "mascotas.unshift(' gato');",
            "mascotas.unshift('gato ');",
            "mascotas.unshift('gato'); ",
            "mascotas.unshift(' gato'); ",
            "mascotas.unshift('gato');;",
            "mascotas.unshift( 'gato');;",
            "mascotas.unshift('gato'); ;",
            "mascotas.unshift('gato');; ",
            "mascotas.unshift(' gato');;",
            "mascotas.unshift('gato ');;",
            "mascotas.unshift( 'gato');; ",
            "mascotas.unshift(' gato');; ",
            "mascotas.unshift('gato ' );",
            "mascotas.unshift('gato');;",
        ],
        solucion: "let mascotas = ['gato', 'perro'];", 
        comprobacion: "mascotas[0].includes('gato')"
    },
    {
        nivel: 2, 
        titulo: 'Calentamiento nº2: Array 🐭', 
        descripcion: 'Continuamos calentando. Ahora me ha entrado un ratón en casa... ¡está entre mis mascotas!', 
        problema: "let mascotas = ['gato', 'raton', 'perro'];", 
        planteamiento: 'Modifica el array eliminando el "raton" de entre mis queridas mascotas.', 
        respuesta: [
            "mascotas.splice(1, 1)",
            "mascotas.splice(1, 1);",
            "mascotas.splice(1,1);",
            "mascotas.splice( 1, 1 );",
            "mascotas.splice( 1 ,1);",
            "mascotas.splice( 1,1)",
        ],
        solucion: "let mascotas = ['gato', 'perro'];"
    },
    {
        nivel: 3, 
        titulo: 'Calentamiento nº3: Array 🐶', 
        descripcion: 'He decidido presentarme voluntaria y pasear a todos éstos perros. Ayudame a contarlos rápidamente para poder apuntarlo en el registro de la perrera.', 
        problema: "let perros = ['Luby', 'Luna', 'Toby', 'Leo', 'Coco', 'Harry', 'Nelson', 'July', 'Gabe', 'Darleen']; <br>let cantidad = <em>null</em>;", 
        planteamiento: '¿Cuál és el número exacto de perros que tengo que pasear hoy? Asigna el valor resultante a la variable <code>cantidad</code>.', 
        respuesta: [
            "cantidad=perros.length",
            "cantidad=perros.length;",
            "cantidad = perros.length;",
            "cantidad= perros.length;",
            "cantidad =perros.length;",
            "cantidad= perros.length",
            "cantidad = perros.length",
            "cantidad= perros.length",
            "cantidad =perros.length",
            "cantidad =perros.length",
            "cantidad= perros.length;",
            "cantidad = perros.length ;",
            "cantidad= perros.length;",
            "cantidad =perros.length;",
            "cantidad =perros.length;",
            "cantidad= perros.length;",
            "cantidad =perros.length;",
            "cantidad= perros.length;",
            "cantidad=perros.length;",
            "cantidad = perros.length;",
            "cantidad= perros.length;",
            "cantidad =perros.length;",
            "cantidad =perros.length;",
            "cantidad= perros.length;",
            "cantidad =perros.length;",
            "cantidad= perros.length;",
            "cantidad = perros.length;"
        ],
        solucion: "let cantidad = 10;"
    },
    {
        nivel: 4, 
        titulo: 'Nivel 1: Básico ☕',
        descripcion: 'Creo que me faltaba aceite en casa...', 
        problema: "let cintaCaj = ['patatas buenas', 'huevos'];",
        planteamiento: '¿Cómo añado "aceite" al final de la cinta del cajero antes de que acabe de escánear toda la compra?',
        respuesta: [
            "cintaCaj.push('aceite')",
            "cintaCaj.push( 'aceite')",
            "cintaCaj.push('aceite' )",
            "cintaCaj.push( 'aceite' )",
            "cintaCaj.push( 'aceite') ",
            "cintaCaj.push( ' aceite' )",
            "cintaCaj.push(' aceite')",
            "cintaCaj.push('aceite ')",
            "cintaCaj.push('aceite');",
            "cintaCaj.push( 'aceite');",
            "cintaCaj.push('aceite' );",
            "cintaCaj.push('aceite') ;",
            "cintaCaj.push( 'aceite' );",
            "cintaCaj.push( 'aceite') ;",
            "cintaCaj.push( 'aceite' ) ;",
            "cintaCaj.push( 'aceite' )",
            "cintaCaj.push( ' aceite' );",
            "cintaCaj.push('aceite' );",
            "cintaCaj.push(' aceite');",
            "cintaCaj.push('aceite ');",
            "cintaCaj.push('aceite' );",
            "cintaCaj.push('aceite' ); ",
            "cintaCaj.push( 'aceite' ); ",
            "cintaCaj.push(' aceite'); ",
            "cintaCaj.push('aceite' ); ",
            "cintaCaj.push('aceite' ) ; ",
            "cintaCaj.push('aceite');;",
            "cintaCaj.push( 'aceite');;",
            "cintaCaj.push('aceite'); ;",
            "cintaCaj.push( 'aceite'); ;",
            "cintaCaj.push('aceite');; ",
            "cintaCaj.push('aceite'); ; ",
            "cintaCaj.push('aceite');;  ",
            "cintaCaj.push( 'aceite');;  ",
            "cintaCaj.push('aceite');;",
            "cintaCaj.push( 'aceite');;",
            "cintaCaj.push('aceite') ;;",
            "cintaCaj.push( 'aceite') ;;",
            "cintaCaj.push('aceite');; ",
            "cintaCaj.push('aceite') ;; ",
            "cintaCaj.push('aceite');;  ",
            "cintaCaj.push( 'aceite');;  ",
            "cintaCaj.push(' aceite');;",
            "cintaCaj.push( ' aceite');; ",
            "cintaCaj.push(' aceite');;  ",
            "cintaCaj.push( ' aceite'); ;;",
            "cintaCaj.push('aceite ');;",
            "cintaCaj.push('aceite ');; ",
            "cintaCaj.push('aceite ');;  ",
            "cintaCaj.push( 'aceite');; ",
            "cintaCaj.push( 'aceite') ;;",
            "cintaCaj.push( 'aceite');;  ",
            "cintaCaj.push(' aceite'); ; ",
            "cintaCaj.push(' aceite');; ",
            "cintaCaj.push('aceite ' );",
            "cintaCaj.push('aceite'); ",
            "cintaCaj.push(' aceite');  ",
            "cintaCaj.push( 'aceite' );  ",
            "cintaCaj.push('aceite' ) ;  ",
            "cintaCaj.push('aceite');;   "
        ],
        solucion: "cintaCaj = ['patatas buenas', 'huevos', 'aceite'];"
    },
    {
        nivel: 5, 
        titulo: 'Nivel 2: Básico 🥚',
        descripcion: 'Ya tengo todo preparado para empezar la tortilla, pero me he dado cuenta de que hay patatas en mal estado', 
        problema: "let productos = ['patatas pochas', 'patatas buenas', 'huevos', 'aceite'];",
        planteamiento: '¿Cómo elimino las patatas pochas principio del array?',
        respuesta: [
            "productos.shift();",
            "productos.shift()",
            "productos.shift(); ",
            "productos.shift();;",
            "productos.shift();; ",
            "productos.shift();;  ",
            "productos.shift(); ;",
            "productos.shift() ;"
        ],
        solucion: "productos = ['patatas buenas', 'huevos', 'aceite'];"
    },
    {
        //duda/problema: no entender bien el enunciado ni el uso de solo 1 parametro para el método slice
        nivel: 6, 
        titulo: 'Nivel 3: Básico 🍅🧀',
        descripcion: 'Voy a acompañar la tortilla con macarrones. En el armario tengo tres ingredientes, pero solo quiero tomate y queso.', 
        problema: "let ingredientes = ['pasas', 'tomate', 'queso'];",
        planteamiento: '¿Cómo parto o descarto éste primer ingrediente dejando los otros dos restantes?',
        respuesta: [
            "ingredientes.slice(1)",
            "ingredientes.slice( 1)",
            "ingredientes.slice(1 )",
            "ingredientes.slice( 1 )",

            "ingredientes.slice(1);",
            "ingredientes.slice( 1);",
            "ingredientes.slice(1 );",
            "ingredientes.slice( 1 );",
            "ingredientes.slice(1 ); ",
            "ingredientes.slice( 1 ); ",

            "ingredientes.slice(1) ;",
            "ingredientes.slice( 1) ;",
            "ingredientes.slice(1 ) ;",
            "ingredientes.slice( 1 ) ;",
            "ingredientes.slice(1 ) ; ",
            "ingredientes.slice( 1 ) ; ",
        ],
        solucion: "ingredientes = ['tomate', 'queso'];"
    },
    {
        nivel: 7, 
        titulo: 'Nivel 4: Básico 💁',
        descripcion: 'Hoy he ido a mi local de confianza y he visto que hay varias personas esperando.', 
        problema: "let cola = ['Ana', 'Juan', 'Carlos', 'Marimar', 'Silvia'];",
        planteamiento: '¿Cuál es el último índice en la posición de la cola del establecimiento? (La última sé que se llama Silvia)',
        respuesta: [
            "cola.lastIndexOf('Silvia');",
            "cola.lastIndexOf(' Silvia ');",
            'cola.lastIndexOf("Silvia");',
            'cola.lastIndexOf(" Silvia ");',
            "cola.lastIndexOf( 'Silvia' );",
            "cola.lastIndexOf( ' Silvia ' );",
            'cola.lastIndexOf( "Silvia" );',
            'cola.lastIndexOf( " Silvia " );',

            "cola.lastIndexOf('Silvia')",
            "cola.lastIndexOf(' Silvia ')",
            'cola.lastIndexOf("Silvia")',
            'cola.lastIndexOf(" Silvia ")',
            "cola.lastIndexOf( 'Silvia' )",
            "cola.lastIndexOf( ' Silvia ' )",
            'cola.lastIndexOf( "Silvia" )',
            'cola.lastIndexOf( " Silvia " )',

            "cola.lastIndexOf('Silvia') ;",
            "cola.lastIndexOf(' Silvia ') ;",
            'cola.lastIndexOf("Silvia") ;',
            'cola.lastIndexOf(" Silvia ") ;',
            "cola.lastIndexOf( 'Silvia' ) ;",
            "cola.lastIndexOf( ' Silvia ' ) ;",
            'cola.lastIndexOf( "Silvia" ) ;',
            'cola.lastIndexOf( " Silvia " ) ;',
        ],
        solucion: "cola = 4; (interpretando que la posicion 0 es la primera)"
    },
    {
        nivel: 8, 
        titulo: 'Nivel 5: Básico 👀',
        descripcion: 'Me parece haber visto a una amiga mía delante. Creo que es Ana.', 
        problema: "let posicion = ['Ana', 'Juan', 'Carlos', 'Marimar', 'Silvia', 'yo'];",
        planteamiento: '¿Cuál es el índice de Ana en el array?',
        respuesta: [
            "posicion.indexOf('Ana');",
            "posicion.indexOf(' Ana ');",
            'posicion.indexOf("Ana");',
            'posicion.indexOf(" Ana ");',
            "posicion.indexOf( 'Ana' );",
            "posicion.indexOf( ' Ana ' );",
            'posicion.indexOf( "Ana" );',
            'posicion.indexOf( " Ana " );',

            "posicion.indexOf('Ana')",
            "posicion.indexOf(' Ana ')",
            'posicion.indexOf("Ana")',
            'posicion.indexOf(" Ana ")',
            "posicion.indexOf( 'Ana' )",
            "posicion.indexOf( ' Ana ' )",
            'posicion.indexOf( "Ana" )',
            'posicion.indexOf( " Ana " )',

            "posicion.indexOf('Ana') ;",
            "posicion.indexOf(' Ana ') ;",
            'posicion.indexOf("Ana") ;',
            'posicion.indexOf(" Ana ") ;',
            "posicion.indexOf( 'Ana' ) ;",
            "posicion.indexOf( ' Ana ' ) ;",
            'posicion.indexOf( "Ana" ) ;',
            'posicion.indexOf( " Ana " ) ;'
        ],
        solucion: "posicion = 0; (interpretando que la posición 0 es la primera)"
    },
    {
        nivel: 9, 
        titulo: 'Nivel 6: Básico 🔀',
        descripcion: 'La cola la estaban haciendo al reves y ahora las posiciones de las personas se revertirán.', 
        problema: "let colaReves = ['Ana', 'Juan', 'Carlos', 'Marimar', 'Silvia', 'yo'];",
        planteamiento: '¿Como lo haríamos?',
        respuesta: [
            "colaReves.reverse()",
            "colaReves.reverse();",
            "colaReves.reverse() ;",
            "colaReves.reverse()  ; ",
            "colaReves.reverse();;",
            "colaReves.reverse() ; ;",
            "colaReves.reverse()  ;;",
            "colaReves.reverse() ;  ;",
            "colaReves.reverse()  ; ;",
        ],
        solucion: "colaReves = ['yo', 'Silvia', 'Marimar', 'Carlos', 'Juan', 'Ana'];"
    },
    {
        nivel: 10, 
        titulo: 'Nivel 7: Básico 🎨',
        descripcion: 'Llego a casa y continuo con el CSS. He escogido los colores para el backoground de mi página web pero el verde pistacho no me convence.', 
        problema: "let paleta = ['rojo', 'negro', 'verde pistacho'];",
        planteamiento: '¿Cómo puedo quitar éste último color del array?',
        respuesta: [
            "paleta.pop()",
            "paleta.pop();",
            "paleta.pop() ;",
            "paleta.pop()  ;",
            "paleta.pop()  ; ",
            "paleta.pop();;",
            "paleta.pop() ; ;",
            "paleta.pop()  ;;",
            "paleta.pop() ;  ;",
            "paleta.pop()  ; ;",
        ],
        solucion: "paleta = ['rojo', 'negro'];"
    },
    {
        nivel: 11, 
        titulo: 'Nivel 1: Junior Front-End 🤞', 
        descripcion: 'Invertir cadena', 
        problema: "let cadena = 'pato donald'; <br>let invertida = <em>undefined</em>;", 
        planteamiento: 'Invierte los caracteres de la variable cadena, y asigalos a la variable <code>invertida</code>.', 
        respuesta: [
            "invertida = cadena.split('').reverse().join('');",
            'invertida = cadena.split("").reverse().join("");',
            "invertida=cadena.split('').reverse().join('');",
            'invertida=cadena.split("").reverse().join("");',
            "invertida = cadena.split('').reverse().join('')",
            'invertida = cadena.split("").reverse().join("")',
            "invertida=cadena.split('').reverse().join('')",
            'invertida=cadena.split("").reverse().join("")',
            "invertida = cadena.split('').reverse().join('') ",
            'invertida = cadena.split("").reverse().join("") ',
            "invertida=cadena.split('').reverse().join('') ",
            'invertida=cadena.split("").reverse().join("") ',
            "invertida = cadena.split('').reverse().join('')  ",
            'invertida = cadena.split("").reverse().join("")  ',
            "invertida=cadena.split('').reverse().join('')  ",
            'invertida=cadena.split("").reverse().join("")  '
        ],
        solucion: "let invertida = 'dlanod otap'"
    },
    {
        nivel: 12, 
        titulo: 'Nivel 2: Junior Front-End 🔢', 
        descripcion: 'He recibido ésta colección de datos:', 
        problema: "let datos = [4, 10, 5, 696, 32, 369, 1000, 12, 5, 1, 2, 4, 21, 22]; <br>let ordenar = <em>undefined</em>;", 
        planteamiento: 'Ordena de forma ascendente éstos datos y asigna el resultado a la variable <code>ordenar</code>.', 
        respuesta: [
            "ordenar = datos.sort((a, b) => a - b);",
            "ordenar = datos.sort(( a, b ) => a - b);",
            "ordenar = datos.sort((a, b)=> a - b);",
            "ordenar = datos.sort(( a, b)=> a - b);",
            "ordenar = datos.sort((a, b)=>a - b);",
            "ordenar = datos.sort(( a, b)=>a - b);",
            "ordenar = datos.sort((a, b) => a-b);",
            "ordenar = datos.sort(( a, b ) => a-b);",
            "ordenar = datos.sort((a, b)=> a-b);",
            "ordenar = datos.sort(( a, b)=> a-b);",
            "ordenar = datos.sort((a, b)=>a-b);",
            "ordenar = datos.sort(( a, b)=>a-b);",
            "ordenar= datos.sort((a, b) => a - b);",
            "ordenar= datos.sort(( a, b ) => a - b);",
            "ordenar= datos.sort((a, b)=> a - b);",
            "ordenar= datos.sort(( a, b)=> a - b);",
            "ordenar= datos.sort((a, b)=>a - b);",
            "ordenar= datos.sort(( a, b)=>a - b);",
            "ordenar= datos.sort((a, b) => a-b);",
            "ordenar= datos.sort(( a, b ) => a-b);",
            "ordenar= datos.sort((a, b)=> a-b);",
            "ordenar= datos.sort(( a, b)=> a-b);",
            "ordenar= datos.sort((a, b)=>a-b);",
            "ordenar= datos.sort(( a, b)=>a-b);",
            "ordenar=datos.sort((a, b) => a - b);",
            "ordenar=datos.sort(( a, b ) => a - b);",
            "ordenar=datos.sort((a, b)=> a - b);",
            "ordenar=datos.sort(( a, b)=> a - b);",
            "ordenar=datos.sort((a, b)=>a - b);",
            "ordenar=datos.sort(( a, b)=>a - b);",
            "ordenar=datos.sort((a, b) => a-b);",
            "ordenar=datos.sort(( a, b ) => a-b);",
            "ordenar=datos.sort((a, b)=> a-b);",
            "ordenar=datos.sort(( a, b)=> a-b);",
            "ordenar=datos.sort((a, b)=>a-b);",
            "ordenar=datos.sort(( a, b)=>a-b);",
            "ordenar =datos.sort((a, b) => a - b);",
            "ordenar =datos.sort(( a, b ) => a - b);",
            "ordenar =datos.sort((a, b)=> a - b);",
            "ordenar =datos.sort(( a, b)=> a - b);",
            "ordenar =datos.sort((a, b)=>a - b);",
            "ordenar =datos.sort(( a, b)=>a - b);",
            "ordenar =datos.sort((a, b) => a-b);",
            "ordenar =datos.sort(( a, b ) => a-b);",
            "ordenar =datos.sort((a, b)=> a-b);",
            "ordenar =datos.sort(( a, b)=> a-b);",
            "ordenar =datos.sort((a, b)=>a-b);",
            "ordenar =datos.sort(( a, b)=>a-b);",
            
            "ordenar = datos.sort((a, b) => a - b)",
            "ordenar = datos.sort(( a, b ) => a - b)",
            "ordenar = datos.sort((a, b)=> a - b)",
            "ordenar = datos.sort(( a, b)=> a - b)",
            "ordenar = datos.sort((a, b)=>a - b)",
            "ordenar = datos.sort(( a, b)=>a - b)",
            "ordenar = datos.sort((a, b) => a-b)",
            "ordenar = datos.sort(( a, b ) => a-b)",
            "ordenar = datos.sort((a, b)=> a-b)",
            "ordenar = datos.sort(( a, b)=> a-b)",
            "ordenar = datos.sort((a, b)=>a-b)",
            "ordenar = datos.sort(( a, b)=>a-b)",
            "ordenar= datos.sort((a, b) => a - b)",
            "ordenar= datos.sort(( a, b ) => a - b)",
            "ordenar= datos.sort((a, b)=> a - b)",
            "ordenar= datos.sort(( a, b)=> a - b)",
            "ordenar= datos.sort((a, b)=>a - b)",
            "ordenar= datos.sort(( a, b)=>a - b)",
            "ordenar= datos.sort((a, b) => a-b)",
            "ordenar= datos.sort(( a, b ) => a-b)",
            "ordenar= datos.sort((a, b)=> a-b)",
            "ordenar= datos.sort(( a, b)=> a-b)",
            "ordenar= datos.sort((a, b)=>a-b)",
            "ordenar= datos.sort(( a, b)=>a-b)",
            "ordenar=datos.sort((a, b) => a - b)",
            "ordenar=datos.sort(( a, b ) => a - b)",
            "ordenar=datos.sort((a, b)=> a - b)",
            "ordenar=datos.sort(( a, b)=> a - b)",
            "ordenar=datos.sort((a, b)=>a - b)",
            "ordenar=datos.sort(( a, b)=>a - b)",
            "ordenar=datos.sort((a, b) => a-b)",
            "ordenar=datos.sort(( a, b ) => a-b)",
            "ordenar=datos.sort((a, b)=> a-b)",
            "ordenar=datos.sort(( a, b)=> a-b)",
            "ordenar=datos.sort((a, b)=>a-b)",
            "ordenar=datos.sort(( a, b)=>a-b)",
            "ordenar =datos.sort((a, b) => a - b)",
            "ordenar =datos.sort(( a, b ) => a - b)",
            "ordenar =datos.sort((a, b)=> a - b)",
            "ordenar =datos.sort(( a, b)=> a - b)",
            "ordenar =datos.sort((a, b)=>a - b)",
            "ordenar =datos.sort(( a, b)=>a - b)",
            "ordenar =datos.sort((a, b) => a-b)",
            "ordenar =datos.sort(( a, b ) => a-b)",
            "ordenar =datos.sort((a, b)=> a-b)",
            "ordenar =datos.sort(( a, b)=> a-b)",
            "ordenar =datos.sort((a, b)=>a-b)",
            "ordenar =datos.sort(( a, b)=>a-b)",

            "ordenar = datos.sort((a, b) => a - b) ;",
            "ordenar = datos.sort(( a, b ) => a - b) ;",
            "ordenar = datos.sort((a, b)=> a - b) ;",
            "ordenar = datos.sort(( a, b)=> a - b) ;",
            "ordenar = datos.sort((a, b)=>a - b) ;",
            "ordenar = datos.sort(( a, b)=>a - b) ;",
            "ordenar = datos.sort((a, b) => a-b) ;",
            "ordenar = datos.sort(( a, b ) => a-b) ;",
            "ordenar = datos.sort((a, b)=> a-b) ;",
            "ordenar = datos.sort(( a, b)=> a-b) ;",
            "ordenar = datos.sort((a, b)=>a-b) ;",
            "ordenar = datos.sort(( a, b)=>a-b) ;",
            "ordenar= datos.sort((a, b) => a - b) ;",
            "ordenar= datos.sort(( a, b ) => a - b) ;",
            "ordenar= datos.sort((a, b)=> a - b) ;",
            "ordenar= datos.sort(( a, b)=> a - b) ;",
            "ordenar= datos.sort((a, b)=>a - b) ;",
            "ordenar= datos.sort(( a, b)=>a - b) ;",
            "ordenar= datos.sort((a, b) => a-b) ;",
            "ordenar= datos.sort(( a, b ) => a-b) ;",
            "ordenar= datos.sort((a, b)=> a-b) ;",
            "ordenar= datos.sort(( a, b)=> a-b) ;",
            "ordenar= datos.sort((a, b)=>a-b) ;",
            "ordenar= datos.sort(( a, b)=>a-b) ;",
            "ordenar=datos.sort((a, b) => a - b) ;",
            "ordenar=datos.sort(( a, b ) => a - b) ;",
            "ordenar=datos.sort((a, b)=> a - b) ;",
            "ordenar=datos.sort(( a, b)=> a - b) ;",
            "ordenar=datos.sort((a, b)=>a - b) ;",
            "ordenar=datos.sort(( a, b)=>a - b) ;",
            "ordenar=datos.sort((a, b) => a-b) ;",
            "ordenar=datos.sort(( a, b ) => a-b) ;",
            "ordenar=datos.sort((a, b)=> a-b) ;",
            "ordenar=datos.sort(( a, b)=> a-b) ;",
            "ordenar=datos.sort((a, b)=>a-b) ;",
            "ordenar=datos.sort(( a, b)=>a-b) ;",
            "ordenar =datos.sort((a, b) => a - b) ;",
            "ordenar =datos.sort(( a, b ) => a - b) ;",
            "ordenar =datos.sort((a, b)=> a - b) ;",
            "ordenar =datos.sort(( a, b)=> a - b) ;",
            "ordenar =datos.sort((a, b)=>a - b) ;",
            "ordenar =datos.sort(( a, b)=>a - b) ;",
            "ordenar =datos.sort((a, b) => a-b) ;",
            "ordenar =datos.sort(( a, b ) => a-b) ;",
            "ordenar =datos.sort((a, b)=> a-b) ;",
            "ordenar =datos.sort(( a, b)=> a-b) ;",
            "ordenar =datos.sort((a, b)=>a-b) ;",
            "ordenar =datos.sort(( a, b)=>a-b) ;"
        ],
        solucion: "let ordenar = [1, 2, 4, 4, 5, 5, 10, 12, 21, 22, 32, 369, 696, 1000];"
    },
    {
        nivel: 13, 
        titulo: 'Nivel 3: Junior Front-End 🕵️‍♀️', 
        descripcion: 'Quiero saber el número total, de todas las "s" que hay en éste trabalenguas:', 
        problema: "let trabalenguas = 'Si tu gusto gustara del gusto que gusta mi gusto, mi gusto gustaría del gusto que gusta tu gusto'; <br>let repet = <em>null</em>;", 
        planteamiento: '¿Cuál es el número de veces que se repite la letra "s" en el trabalenguas?. Asignalo el resultado a la variable <code>repet</code>.', 
        respuesta: [
        "repet = trabalenguas.match(/s/gi).length;",
        'repet=trabalenguas.match(/s/gi).length;',
        'repet= trabalenguas.match(/s/gi).length;',
        'repet =trabalenguas.match(/s/gi).length;',
        "repet = trabalenguas.match(/s/gi).length",
        'repet=trabalenguas.match(/s/gi).length',
        'repet= trabalenguas.match(/s/gi).length',
        'repet =trabalenguas.match(/s/gi).length',
        "repet = trabalenguas.match(/s/gi).length ;",
        'repet=trabalenguas.match(/s/gi).length ;',
        'repet= trabalenguas.match(/s/gi).length ;',
        'repet =trabalenguas.match(/s/gi).length ;'
        ],
        solucion: "let repet = '11';"
    },    
    {
        nivel: 14, 
        titulo: 'Nivel 4: Junior Front-End 🧮', 
        descripcion: '', 
        problema: "let cadena = 'El número pi 3,14 es muy largo. 3,141592653589793 y más. En binario es 11,001001 y más.'; <br>let cantidad = <em>null</em>;", 
        planteamiento: '¿Cuál es la cantidad de números que contiene esta cadena?. Asigna el valor a la variable <code>cantidad</code>.', 
        respuesta: [
        "cantidad = cadena.match(/[0-9]/g).length;",
        'cantidad=cadena.match(/[0-9]/g).length;',
        "cantidad =cadena.match(/[0-9]/g).length;",
        'cantidad= cadena.match(/[0-9]/g).length;',
        "cantidad = cadena.match(/[0-9]/g).length",
        "cantidad=cadena.match(/[0-9]/g).length",
        'cantidad =cadena.match(/[0-9]/g).length',
        "cantidad= cadena.match(/[0-9]/g).length",
        "cantidad = cadena.match(/[0-9]/g).length ;",
        'cantidad=cadena.match(/[0-9]/g).length ;',
        "cantidad =cadena.match(/[0-9]/g).length ;",
        'cantidad= cadena.match(/[0-9]/g).length ;',
        ],
        solucion: "let cantidad = 27;"
    }
    ,
    {
        nivel: 'Final', 
        titulo: 'Finished!🎉', 
        descripcion: "Congratulations, you've finished the JS Methods Game.", 
        problema: "😁let JsMethodsGame = true;😁", 
        planteamiento: 'See more of me, here: <code><a href="https://github.com/Alvaro624la" target="_blank">https://github.com/Alvaro624la</a></code>',
        respuesta: [],
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

//     {
//         nivel: 333, 
//         titulo: 'Nivel 4: Junior Front-End #️⃣', 
//         descripcion: 'Teniendo esta frase:', problema: "let frase = ' Bueno,  parece   algo   ,  facil'; <br>let palabras = <em>undefined</em>;", 
//         planteamiento: '¿Cuál es la cantidad de palabras contiene esta frase?. Asigna el valor a la variable <code>palabras</code>.', 
//         respuesta: {
//             a: "",
//             b: '',
//             c: "",
//             d: '',
//             e: "",
//             f: "",
//             g: '',
//             h: "",
//             i: '',
//             j: ""
//         },
//         solucion: ""
//     },    
//     {
//         nivel: 222, 
//         titulo: 'Nivel 7: Junior Front-End', 
//         descripcion: 'Distancia de Hamming', 
//         problema: "", 
//         planteamiento: '', 
//         respuesta: {
//             a: "",
//             b: '',
//             c: "",
//             d: '',
//             e: "",
//             f: "",
//             g: '',
//             h: "",
//             i: '',
//             j: ""
//         },
//         solucion: ""
//     },    
//     {
//         nivel: 666, 
//         titulo: '', 
//         descripcion: 'Hoy tengo comida familiar. Quiero poner el nombre de los invitados en las sillas, pero tengo poco espacio para escribir a mi sobrino', 
//         problema: "let sobrino = 'Alejandro Daniel Ramirez'", 
//         planteamiento: '¿Cuántas palabras/carácteres contiene exactamente el nombre de "Alejandro"? Asigna el valor resultante a la variable "palabras"', 
//         respuesta: {
//             a: "",
//             b: '',
//             c: "",
//             d: '',
//             e: "",
//             f: "",
//             g: '',
//             h: "",
//             i: '',
//             j: ""
//         },
//         solucion: ""
//     }

/*

Métodos:
    Utilizados:
        unshift
        splice
        length
        push
        shift
        slice
        lastIndexOf
        indexOf
        reverse
        pop
        split
        sort
        match

    Añadir:
        map
        filter
        find
        findIndexOf
        fill
        some
        every
        from
        includes
        search


*/