//https://codepen.io/alvaro624la/pen/qBXXVmx
const coleccionNiveles = [
    {nivel: 1, titulo: 'Calentamiento nº1: Array', descripcion: 'Vamos a empezar calentando con los conceptos más básicos. Empecemos por añadir valores a éste array:', problema: "let mascotas = ['perro']", planteamiento: 'Añade, al principio del array, el nuevo "gato" que voy a adoptar para hacer compañia a mi perro.', respuesta: "mascotas.unshift('gato');"},
    {nivel: 2, titulo: 'Calentamiento nº2: Array', descripcion: 'Continuamos calentando. Ahora me ha entrado un ratón en casa... ¡está entre mis mascotas!', problema: "let mascotas = ['gato', 'raton', 'perro'];", planteamiento: 'Modifica el array eliminando el "raton" de entre mis queridas mascotas.', respuesta: "mascotas.splice(1, 1);"},
    {nivel: 3, titulo: 'Calentamiento nº3: Array', descripcion: 'Me encantan los animales, por ello, he decidido presentarme voluntaria y pasear a todos éstos perros. Ayudame a contarlos rápidamente para poder apuntarlo en el registro de la perrera.', problema: "let perros = ['Luby', 'Luna', 'Toby', 'Leo', 'Gin', 'Coco', 'Harry', 'Nelson', 'July', 'Gabe', 'Darleen']; let cantidad = null;", planteamiento: '¿Cuál és el número exacto de perros que tengo que pasear hoy? Asigna el valor resultante a la variable cantidad.', respuesta: "cantidad = perros.length;"},
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
// VARIABLES (global)
const main = document.getElementById('main');
let acc = 1;
let nivelProblema = "";
let nivelSolucion = "";
let nivelRespuesta = "";
// CREACIÓN NODOS
let nuevoNivel = () => {
    main.innerHTML = "";
    coleccionNiveles.forEach((nivel)=>{
        if(nivel.nivel === acc){
            nivelProblema = nivel.problema;
            nivelRespuesta = nivel.respuesta;
            // VARIABLES - TAG NAMEs
            const mainContainer = document.createElement('article');
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
            titulo.innerHTML = nivel.titulo;
            probDesc.innerHTML = nivel.descripcion;
            probCode.innerHTML = nivel.problema;
            probPreg.innerHTML = nivel.planteamiento;
            solucionContenido1.innerHTML = `<textarea id="solText" class="main__container__solucion-flex__contenido__textarea" type="text" spellcheck="false" autocomplete="off" placeholder="Introduce tu respuesta">;</textarea>`;
            solucionContenido2.innerHTML = `<button id="solBtn" class="main__container__solucion-flex__contenido__btn">Comprobar</button>`;
        };
    });










    
//CONSOLA
var _editor, _statusbar, _console, _history = [""], _historyIndex = 0, _consoleEditor;

window.addEventListener("load", function() {
	_statusbar = document.getElementById("status");
	_console = document.getElementById("console");
	_editor = ace.edit("editor");
	_consoleEditor = ace.edit("consoleInput");
	_editor.setOptions({
			theme: 'ace/theme/ayu-dark',
			wrap: true,
			behavioursEnabled: false,
			showInvisibles: false,
			enableSnippets: true,
			displayIndentGuides: true,
			enableLiveAutocompletion: true,
			enableBasicAutocompletion: true,
			enableEmmet: true,
			fontSize: "20px",
			scrollPastEnd: true,
			useWorker: true,
			printMargin: false,
			tabSize: 4,
			fontFamily: "Inconsolata",
			mode: "ace/mode/javascript"
		});
		_consoleEditor.setOptions({
			theme: 'ace/theme/ayu-dark',
			wrap: true,
			highlightActiveLine: false,
			showInvisibles: false,
			enableSnippets: false,
			displayIndentGuides: true,
			enableLiveAutocompletion: false,
			enableBasicAutocompletion: false,
			enableEmmet: false,
			fontSize: "1em",
			printMargin: false,
			tabSize: 4,
			minLines: 1,
			maxLines: 100,
			hScrollBarAlwaysVisible: false,
			vScrollBarAlwaysVisible: false,
			showGutter: false,
			fontFamily: "Inconsolata",
			mode: "ace/mode/javascript"
		});

   	_editor.getSelection().on("changeCursor", function(e, selection) {
   		_statusbar.innerHTML = "Line " + (selection.lead.row+1) + ", Column " + selection.lead.column;
   	});
   	_consoleEditor.on("change", function(e) {
			var newHeight = _consoleEditor.getSession().getScreenLength() * _consoleEditor.renderer.lineHeight + _consoleEditor.renderer.scrollBar.getWidth();
			_consoleEditor.container.style.height = newHeight + "px";
			_consoleEditor.resize();
   	});
    _consoleEditor.commands.addCommand({
      name: "History Up",
      bindKey: {win: "Up", mac: "Up"},
      exec: function(e) {
				if(e.getSelectionRange().start.row === 0) {
					if(_historyIndex === _history.length-1) {
						_history[_historyIndex] = e.getValue().replace(/^\s*/g, '').replace(/\s*$/g, '');
					}
					if(_historyIndex > 0) {
						e.setValue(_history[--_historyIndex], 1);
					}
				}
				else {
					e.getSession().getSelection().moveCursorBy(-1, 0);
				}
      }
    });
    _consoleEditor.commands.addCommand({
      name: "History Down",
      bindKey: {win: "Down", mac: "Down"},
      exec: function(e) {
				if(e.getSelectionRange().end.row === e.getSession().getDocument().getLength() - 1) {
					if(_historyIndex < _history.length-1) {
						e.setValue(_history[++_historyIndex], 1);
					}
				}
				else {
					e.getSession().getSelection().moveCursorBy(1, 0);
				}

      }
    });

   	window.addEventListener('mousemove', _mouseMove);
   	window.addEventListener('mouseup', _mouseUp);
   	window.addEventListener('resize', function() {_editor.resize();_consoleEditor.resize();});
   	_editor.resize();
		_consoleEditor.resize();
});


//Actual Cool Part
function _runJavascript(text) {
	try {
		const f = new Function(text);
		f();
	}
	catch(exception) {
		console.error(exception);
	}
}
function _clearLog() {
	_console.firstElementChild.innerHTML = "";
}

//Redefine console functions
console.reallog = console.log;
console.log = function() {
	var line = document.createElement('div');
	line.className = 'consoleLine';

	var content = [];
	for(var i = 0;i < arguments.length;++i) {
		content.push(_consoleParse(arguments[i]));
	}
	line.innerHTML = content.join("<br>");

	if(line.innerHTML.replace(/\s/g, '') !== "") {
		_console.firstElementChild.appendChild(line, _console.firstElementChild);
	}
}
console.realerror = console.error;
console.error = function() {
	var line = document.createElement('div');
	line.className = 'consoleLine error';
	line.textContent = [].join.call(arguments, "<br>");
	_console.firstElementChild.appendChild(line, _console.firstElementChild);
}

function _consoleParse(arg) {
	if(typeof arg === "boolean" || typeof arg === "undefined" || arg === null) {
		return '<span class="ace_constant ace_language">'+arg.toString()+'</span>';
	}
	else if(typeof arg === "string") {
		return '<span class="ace_string">"'+arg+'"</span>';
	}
	else if(typeof arg === "number") {
		return '<span class="ace_constant ace_numeric">'+arg+'</span>';
	}
	else if(arg instanceof HTMLElement) {
		return '<span class="ace_string">"'+escapeHtml(arg.outerHTML)+'"</span>';
	}
	else if(arg instanceof Array) {
		var tokens = [];
		arg.forEach(function(x) {
			tokens.push(_consoleParse(x));
		});
		return "[" + tokens.join(", ") + "]";
	}
	else if(arg instanceof Object ) {
		var tokens = [];
		Object.keys(arg).forEach(function(key) {
			tokens.push(_consoleParse(key) + ": " + _consoleParse(arg[key]));
		});
		return "{" + tokens.join(", ") + "}";
	}
	return arg.toString();
}


function escapeHtml(unsafe) {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}









/*
///////////////////////////////////////////////////////////////
//COMPROBACIÓN RESULTADO
//VARIABLES (global)
let respuesta = document.getElementById('solText');
let comprobarBtn = document.getElementById('solBtn');
//FUNCIONES
comprobarBtn.addEventListener('click', ()=>{
    if(respuesta.value == nivelRespuesta){
        console.log('bien');
        acc++;
        //CONSOLA AUTOMATICA
        let nombreVar = nivelProblema.split(" ")[1];
        console.log(nombreVar);
        // console.log(Object.keys({nivelProblema})[0]);
        let problema = nivelProblema.split('=');
        console.log(problema);
        let respuesta = nivelRespuesta.split('.');
        console.log(respuesta);
        let añadirPunto = `.${respuesta[1]}`;
        console.log(añadirPunto);
        let juntar = problema[1]+añadirPunto;
        console.log(juntar);
        

        // alert(`¡Correcto!. El resultado del problema ${nivelProblema} y tu respuesta ${respuesta.value} da `);
        nuevoNivel();
    } else {
        console.log('Incorrecto, prueba otra vez');
        // mascotas.unshift('gato');
    }
});
///////////////////////////////////////////////////////////////
*/

};
nuevoNivel();

/*
//CONSOLA AUTOMATICA
let nombreVar = nivelProblema.split(" ")[1];
console.log(`nombreVar (split " ") --> ${nombreVar}`);
// console.log(Object.keys({nivelProblema})[0]);
let problema = nivelProblema.split('=');
console.log(`problema (split =) --> ${problema}`);
let respuesta = nivelRespuesta.split('.');
console.log(`respuesta (split .) --> ${respuesta}`);
let añadirPunto = `.${respuesta[1]}`;
console.log(`añadirPunto . y respuesta[1] --> ${añadirPunto}`);
let juntar = problema[1]+añadirPunto;
console.log(`juntar todo --> ${juntar}`);
console.log('falta operar esta string, pero evaluar solo sirve para darme un numero:');
console.log(eval(new String(juntar)));
console.log(eval(juntar));
*/