import React, { useState, useRef, useEffect } from 'react';
import { coleccionNiveles } from "./modulos/coleccionNiveles";
import imgFondo1 from './img/main-background.jpg';
import imgFondo2 from './img/7.jpg';

function App() {
  // JUEGO

  // VARIABLES (global)
  // let randomMode = 'off';

  const main = useRef();
  const [ gameNivelNum, setGameNivelNum ] = useState();
  const [ aciertosAcc, setAciertosAcc ] = useState();

  const [ nivelRespuesta, setNivelRespuesta ] = useState();
  const [ nivelSolucion, setNivelSolucion ] = useState("");

  const [ nivelTitulo, setNivelTitulo ] = useState();

  const respuesta = useRef();
  // Variables para incluir strings con etiquetas html y que se muestren correctamente dentro del DOM y no literalmente los <code>... etc. Via innerHTML.
  const span1 = useRef();
  const span2 = useRef();
  const span3 = useRef();

  //MODAL
  const focusHere = useRef();
  const modal = useRef();
  const content = useRef();
  const modalBtn = useRef();

  //PARA GAME FINISHED/PASSED condition
  const solucionContenido1 = useRef();
  const solucionContenido2 = useRef();

  //Hint / Boton de ayuda
  const hintBtn = useRef();
  const hintModal = useRef();
  //Variable para saber cuando el usuario falle 2 veces
  let intentos = 0;

  // FUNCIONES
  // Mostrar contenido de nivel actual
  const nuevoNivel = () => {
    coleccionNiveles.forEach((nivel)=>{
        //mostrar nivel final
        if(aciertosAcc === coleccionNiveles.length - 1) {
          setGameNivelNum('Final');
          solucionContenido1.current.style.display = 'none';
          solucionContenido2.current.style.display = 'none';
        };
        //mostrar niveles - funcionamiento
        if(gameNivelNum === nivel.nivel){
          span2.current.innerHTML = nivel.problema;
          setNivelRespuesta(nivel.respuesta);
          setNivelSolucion(nivel.solucion);

          setNivelTitulo(nivel.titulo);
          span1.current.innerHTML = nivel.descripcion;
          span3.current.innerHTML = nivel.planteamiento;
        };
    });
  };
  //cargar niveles desde la info del local storage
  useEffect(()=>{
    if(localStorage.getItem('Nivel')){
      // Si existen los items Nivel y Aciertos en el local storage, los obtenemos
      setGameNivelNum(JSON.parse(localStorage.getItem('Nivel')));
      setAciertosAcc(JSON.parse(localStorage.getItem('Aciertos')));
    } else {
      // Si no existe esos items en el local storage, los creamos
      setGameNivelNum(1);
      setAciertosAcc(0);
      localStorage.setItem('Nivel', JSON.stringify(1));
      localStorage.setItem('Aciertos', JSON.stringify(0));
    };
    nuevoNivel();
  });

  // Boton de reinicio del juego
  const startOver = () => {
    // sobreescribir local storage (mejor que eliminarlo)
    localStorage.setItem('Nivel', JSON.stringify(1));
    localStorage.setItem('Aciertos', JSON.stringify(0));
    setGameNivelNum(1);
    setAciertosAcc(0);
    // Limpiamos el contenido o valor del textarea
    respuesta.current.value = '';
    nuevoNivel();
    // Si estas en la patalla final y has pasado el juego, volver a mostrar el textarea y el btn para comprobar
    if (gameNivelNum === 'Final'){
      solucionContenido1.current.style.display = 'block';
      solucionContenido2.current.style.display = 'block';
    };
    // Esconder boton de pista
    hintBtn.current.style.display = 'none';
  };

  const funcionesComunesModalAbrir = () => {
    // Añadir clase para ver modal informativo
    modal.current.classList.add('modal--active');
    // Añadir clase para ver el boton de cierre del modal
    modalBtn.current.classList.add('modal__close-btn--active');
    // Añadir estilo borroso al main para destacar el modal
    main.current.style.filter = 'blur(2px)';
    focusHere.current.focus();
  };

  const funcionesComunesModalCerrar = () => {
    // Eliminar una clase para esconder modal
    modal.current.classList.remove('modal--active');
    // Eliminar una clase para esconder el boton de cierre del modal
    modalBtn.current.classList.remove('modal__close-btn--active');
    // Eliminar estilo borroso del main para volver a verlo claro
    main.current.style.filter = '';
    // Siguiente nivel (siempre que hayamos aumentado el valor de gameNivelNum)
    respuesta.current.focus();
  };
  
  const openHint = () => {
    hintModal.current.innerHTML = `Pista 🔎: ${nivelSolucion}`;

    hintModal.current.className.includes('opened-hint-modal')
    ? hintModal.current.classList.remove('main__container__solucion-flex__contenido__opened-hint-modal')
    : hintModal.current.classList.add('main__container__solucion-flex__contenido__opened-hint-modal');

    hintBtn.current.innerHTML !== 'X' 
      ? (
        hintBtn.current.innerHTML = 'X',
        hintBtn.current.style.backgroundColor = '#f00'
      ) : (
        hintBtn.current.innerHTML = '?',
        hintBtn.current.style.backgroundColor = '#ffff44'
      );
  };

  //COMPROBACIÓN RESULTADO
  let check = ()=>{
    // Variable para obtener la respuesta del usuario cuando coincida con la primera respuesta correcta del objeto coleccionNiveles
    let respuestaCoincidente = '';
    // Obtener la respuesta del usuario en una variable donde eliminamos los posibles espacios que tenga al principio y al final
    let respuestaUsuarioLimpia = respuesta.current.value.match(/[^\s*]\w.*[^\s*]/gi).join();
    // Recorrer el arr con las respuestas del objeto coleccionNiveles y cambiar el valor de la respuestaCoincidente
    nivelRespuesta.map(sol => respuestaUsuarioLimpia === sol ? respuestaCoincidente = sol : false)
    // Condición para cuando la variable respuestaCoincidente tenga un valor distinto a '', será que hemos obtenido una respuesta correcta y procederemos al siguiente nivel con todos los procesos que ésto implica
    if(respuestaCoincidente !== ''){
      funcionesComunesModalAbrir();
      // Cambiar color del textarea temporalmente indicando al usuario si la respuesta ha sido correcta o errónea, por 800ms
      respuesta.current.style.backgroundColor = 'rgba(0, 255, 0, .6)';
      setTimeout(() => respuesta.current.style.backgroundColor = '#fff', 800);
      // Añadir contenido como información y mensaje en el modal
      content.current.innerHTML = `¡Correcto! El resultado es ➔ ${nivelSolucion}`;
      // Cambiar el color del borde del modal a verde
      modal.current.style.boxShadow = 'rgba(100, 255, 100, 0.5) 0px 0px 0px 4px';
      
      // Cerrar modal con ESC key/tecla
      document.addEventListener('keyup', e => {
        if(e.code === 'Escape' && modalBtn.current.className === 'modal__close-btn modal__close-btn--active') {
          funcionesComunesModalCerrar(e);
              // Eliminamos el comportamiento habitual de la tecla Escape para controlarlo nosotros
              e.preventDefault();
        }
      });
      
      // Limpiar valor del textarea
      respuesta.current.value = '';
      // Sumamos 1 al nivel y al contador de aciertos
      setGameNivelNum(gameNivelNum + 1);
      setAciertosAcc(aciertosAcc + 1);
      // Guardamos y sobreescribimos los datos del local storage con estos dos últimos datos
      localStorage.setItem('Nivel', JSON.stringify(gameNivelNum + 1));
      localStorage.setItem('Aciertos', JSON.stringify(aciertosAcc + 1));
      // Dadas todas las operaciones para subir de nivel, procedemos a mostrar los datos del siguiente nivel
      nuevoNivel();
      // Esconder boton de pista (aplico la condición por si sale el error: Uncaught TypeError: Cannot read properties of undefined (reading 'style'))
      hintBtn.current.style.display !== 'none' ? hintBtn.current.style.display = 'none' : false;
    } else {
      funcionesComunesModalAbrir();
      // Cambiar color del textarea temporalmente indicando al usuario si la respuesta ha sido correcta o errónea, por 800ms
      respuesta.current.style.backgroundColor = 'rgba(255, 0, 0, .6)';
      setTimeout(() => respuesta.current.style.backgroundColor = '#fff', 800);
      // Añadir contenido como información y mensaje en el modal
      content.current.innerHTML = `Incorrecto (recuerda utilizar ES6 y/o escribir limpio y legible con espacios correspondientes)`;
      // Cambiar el color del borde del modal a rojo
      modal.current.style.boxShadow = 'rgba(255, 0, 0, 0.3) 0px 0px 0px 4px';

      // Cerrar modal con ESC key/tecla
      document.addEventListener('keyup', e => {
        if(e.code === 'Escape' && modalBtn.current.className === 'modal__close-btn modal__close-btn--active') {
          funcionesComunesModalCerrar(e);
          // Eliminamos el comportamiento habitual de la tecla Escape para controlarlo nosotros
              e.preventDefault();
        }
      });
      // Mostrar botón de pista cuando el usuario falle 2 veces
      intentos++;
      intentos >= 2 ? hintBtn.current.style.display = 'block' : false;
    }
  };
  // catch(error){
  //   //aprovecho el error de no detectar las variables let respuesta y let comprobarBtn para dar un mensaje y eliminar el error con catch.
  //   console.log('You passed the game!');
  //   // console.warn(error);
  // }
  

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

  return (
    <>
    <main ref={main} className="main" style={{backgroundImage: `url(${imgFondo1})`}}>
      {/* PANTALLA NORMAL */}
      <section className="main__container">
        <button className="main__container__start-over-btn" onClick={startOver}></button>
        <article className="main__container__titulo">{nivelTitulo}</article>
        <article className="main__container__problema-cont" style={{backgroundImage: `url(${imgFondo2})`}}>
          <div className="main__container__problema-cont__contenido">
            <span className="main__container__problema-cont__contenido__span1" ref={span1}></span>
            <span className="main__container__problema-cont__contenido__span2" ref={span2}></span>
            <span className="main__container__problema-cont__contenido__span3" ref={span3}></span>
          </div>
        </article>
        <article className="main__container__solucion-flex">
          <div ref={solucionContenido1} className="main__container__solucion-flex__contenido">
            <textarea ref={respuesta} className="main__container__solucion-flex__contenido__textarea" onKeyDown={(e)=>{
              // Es importante que sea Key"DOWN" porque si se ejecuta al levantar el Enter con el key"UP" hará un salto de línea, y los saltos de línea no están pensados como resultado posible en el objeto coleccionNiveles
              if (e.code == 'Enter' && modal.current.classList != 'modal modal--active') {
                e.preventDefault();
                check();
                };
            }} type="text" spellCheck="false" autoComplete="off" placeholder="Introduce tu respuesta"></textarea>
            <button ref={hintBtn} className='main__container__solucion-flex__contenido__hint-btn' onClick={openHint}>?</button>
            <span ref={hintModal} className='main__container__solucion-flex__contenido__closed-hint-modal'></span>
          </div>
          <div ref={solucionContenido2} className="main__container__solucion-flex__contenido">
            <button className="main__container__solucion-flex__contenido__btn" onClick={check}>Comprobar</button>
          </div>
        </article>
      </section>
    </main>
    {/* Focus (inhabilitar textarea) */}
    <button ref={focusHere} className='focus-here'></button>
    {/* MODAL */}
    <div ref={modal} className='modal' style={{backgroundImage: `url(${imgFondo2})`}}>
      <p ref={content} className='modal__content'></p>
      <div ref={modalBtn} className='modal__close-btn' onClick={funcionesComunesModalCerrar}></div>
    </div>
    </>
  )
}

export default App