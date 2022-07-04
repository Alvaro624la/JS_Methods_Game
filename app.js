import { coleccionNiveles } from "./modulos/coleccionNiveles";

// JUEGO

// VARIABLES (global)
let randomMode = 'off';

const main = document.getElementById('main');
let nivelNum = 1;
let aciertosAcc = 0;
let nivelProblema = "";
let nivelRespuesta;
let nivelSolucion = "";
//MODAL
const body = document.getElementById('body');
let focusHere;
// let bgModalBehind;
let modal;
let anchorFocus = document.getElementById('anchorFocus');; // <a> para focus
let content;
let modalBtn;

//CREACIÓN NODOS
//NIVELES
let nuevoNivel = () => {
    main.innerHTML = "";
    coleccionNiveles.forEach((nivel)=>{
        //mostrar nivel final
        if(aciertosAcc === coleccionNiveles.length - 1){
            nivelNum = 'Final';
        };
        //mostrar niveles - funcionamiento
        if(nivel.nivel === nivelNum){
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

            //Focus (inhabilitar textarea)
            focusHere = document.createElement('button');
            body.appendChild(focusHere);
            focusHere.classList.add('focus-here');
            focusHere.id = 'focusHere';

            //BG-MODAL
            // bgModalBehind = document.createElement('div');
            // body.appendChild(bgModalBehind);
            
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
            if(nivelNum === 'Final'){
                solucionContenido1.innerHTML = ``;
                solucionContenido2.innerHTML = ``;
                //clear local storage btn
                let clearBtn = document.getElementById('clearLocalStorageBtn');
                clearBtn.addEventListener('click', ()=>{
                    localStorage.removeItem('Nivel');
                    localStorage.removeItem('Aciertos');
                    nivelNum = 1;
                    aciertosAcc = 0;
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
            // bgModalBehind.classList.add('bg-main-modal-behind');
            focusHere.focus();
            //cerrar el modal
            let closeModalBien = ()=>{
                modal.classList.remove('body__modal--active');
                modalBtn.classList.remove('body__modal__close-btn--active');
                main.style.filter = '';
                // bgModalBehind.classList.remove('bg-main-modal-behind');
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
            nivelNum++;
            aciertosAcc++;
            //local storage CONTADOR
            localStorage.setItem('Nivel', JSON.stringify(nivelNum));
            localStorage.setItem('Aciertos', JSON.stringify(aciertosAcc));
        } else {
            //MODAL AND NO PASS LEVEL
            modal.classList.add('body__modal--active');
            modal.style.boxShadow = 'rgba(255, 0, 0, 0.3) 0px 0px 0px 4px';
            content.innerHTML = `Incorrecto (recuerda utilizar ES6 y/o escribir limpio y legible con espacios correspondientes)`;
            modalBtn.classList.add('body__modal__close-btn--active');
            main.style.filter = 'blur(2px)';
            // bgModalBehind.classList.add('bg-main-modal-behind');
            focusHere.focus();
            
            //cerrar el modal
            let closeModalMal = ()=>{
                modal.classList.remove('body__modal--active');
                modal.style.boxShadow = 'rgba(3, 52, 214, 0.3) 0px 0px 0px 4px';
                modalBtn.classList.remove('body__modal__close-btn--active');
                main.style.filter = '';
                // bgModalBehind.classList.remove('bg-main-modal-behind');
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
        if (e.code == 'Enter' && modal.classList != 'body__modal body__modal--active') {
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
        localStorage.removeItem('Nivel');
        localStorage.removeItem('Aciertos');
        nivelNum = 1;
        aciertosAcc = 0;
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
    if(localStorage.getItem('Nivel')){
        nivelNum = JSON.parse(localStorage.getItem('Nivel'));
        aciertosAcc = JSON.parse(localStorage.getItem('Aciertos'));
        nuevoNivel();
    };
};

//FALTA:
//Opcion de mostrar niveles en orden aleatorio
    //Números aleatorios entre coleccionNiveles.length
    /*
    

    //RANDOM MODE

        randomMode = 'on';
        console.log(nivel.nivel);        

        if(randomMode === 'on'){
            let numeros = nivel.nivel;
            numeros.sort(()=>{return Math.random() - 0.5});
            console.log(numeros);
        };


    */
//Guardar en BBDD la cantidad de usuarios entrados en la pag.
//Guardar en BBDD la cantidad/% de errores y aciertos, y en qué niveles.