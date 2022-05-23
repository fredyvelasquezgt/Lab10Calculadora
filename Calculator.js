/* eslint-disable prefer-template */
import React, { useState } from 'react';
import Mexp from 'math-expression-evaluator';
import Numbers from './src/Numbers/Numbers';
import EqualOperator from './src/EqualOperator/EqualOperator';
import NumberAddons from './src/NumberAddons/NumberAddons';
import Operators from './src/Operators/Operators';
import TextModifiersOperator from './src/TextModifiersOperator/TextModifiersOperators';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// numeros de la calculadora
const numerosCalculadora = [
  [{ numero: '1' }, { numero: '2' }, { numero: '3' }],
  [{ numero: '4' }, { numero: '5' }, { numero: '6' }],
  [{ numero: '7' }, { numero: '8' }, { numero: '9' }]];

// objeto de la calculadora
function Calculator() {
  const [pantalla, setPantalla] = useState('0');
  const [stackOperaciones, setStackOperaciones] = useState('');

  // funcion que cambia la pantalla
  const numberPressed = (numero) => {
    let textoPantalla = pantalla;
    if (textoPantalla === 'ERROR') {
      textoPantalla = '0';
    }
    if (textoPantalla.length < 9) {
      let resultadoPantalla = textoPantalla + numero;
      if (resultadoPantalla[0] === '0' && !(resultadoPantalla.includes('.'))) {
        resultadoPantalla = resultadoPantalla.substring(1);
      }
      setPantalla(resultadoPantalla);
    }
  };
  // elimina todo lo del stack y pone 0 en la calculadora
  const handleCOpertor = () => {
    setStackOperaciones('');
    setPantalla('0');
  };

  // elimina un numero de la pantalla
  const handleCeOpertor = () => {
    if (pantalla.length === 1 || pantalla === 'ERROR') {
      setPantalla('0');
    } else {
      setPantalla(pantalla.slice(0, -1));
    }
  };

  // decide los operadores
  const handleModificationOperator = (operatorName) => {
    if (operatorName === 'CE') {
      handleCeOpertor();
    } else {
      handleCOpertor();
    }
  };

  // cuando se utilice el =
  const calcularResultado = () => {
    const resultado = Mexp.eval(stackOperaciones + pantalla);
    if (!Number.isFinite(resultado) || Number.isNaN(resultado) || resultado.toString().length > 9) {
      setPantalla('ERROR');
    } else {
      setPantalla(resultado.toString());
    }
    setStackOperaciones('');
  };

  // mete las operaciones al stack
  const operatorPressed = (operator) => {
    if (!(pantalla === 'ERROR')) {
      let lineaOperaciones = stackOperaciones;
      lineaOperaciones += pantalla + operator;
      setStackOperaciones(lineaOperaciones);
    }
    setPantalla('0');
  };

  // maneja el .
  const pointOperator = () => {
    if (pantalla === 'ERROR') {
      setPantalla('0');
    } else if (pantalla.length < 8 && !pantalla.includes('.')) {
      setPantalla(`${pantalla}.`);
    }
  };

  // maneja el menos adelante del numero
  const plusMinusOperator = () => {
    if (pantalla === 'ERROR') {
      setPantalla('0');
    } else if (pantalla.includes('-')) {
      setPantalla(pantalla.substring(1));
    } else if (pantalla.length < 9) {
      setPantalla(`-${pantalla}`);
    }
  };

  // verifica si es punto o +/-
  const handleAppendersOperator = (operatorName) => {
    if (operatorName === '.') {
      pointOperator();
    } else {
      plusMinusOperator();
    }
  };
  return (
    <div>
      <div className="container-sm">
        {/* esto de aca sera la pantalla de la calculadora */}
        <div className="row">
          <div className="col calc-screen">
            <h1 className="calc-screen-caption">{pantalla}</h1>
          </div>
        </div>
        {/* Primera fila de operaciones */}
        <div className="row">
         


          <NumberAddons operacion="+/-" testid="operator+/-" addonOperator={handleAppendersOperator} />
          <Numbers numero="0" id="number0" testid="testnumber0" calculateNumbers={numberPressed} />
          <NumberAddons operacion="." testid="operator." addonOperator={handleAppendersOperator} />
          <EqualOperator simbolo="=" testid="operator=" calcularResultado={calcularResultado} />
        </div>
        {/* Segunda fila de numeros y operaciones */}
        <div className="row">
          {
                numerosCalculadora[2].map((no) => (
                  <Numbers numero={no.numero} id={'number' + no.numero} testid={'testnumber' + no.numero} calculateNumbers={numberPressed} />
                ))
            }
          <Operators simbolo="x" operador="*" testid="operator*" pushOperation={operatorPressed} />
        </div>
        {/* Tercera fila de numeros y operaciones */}
        <div className="row">
          {
                numerosCalculadora[1].map((no) => (
                  <Numbers numero={no.numero} id={'number' + no.numero} testid={'testnumber' + no.numero} calculateNumbers={numberPressed} />
                ))
            }
          <Operators simbolo="-" operador="-" testid="operator-" pushOperation={operatorPressed} />
        </div>
        {/* Cuarta fila de numeros y operaciones */}
        <div className="row">
          {
                numerosCalculadora[0].map((no) => (
                  <Numbers numero={no.numero} id={'number' + no.numero} testid={'testnumber' + no.numero} calculateNumbers={numberPressed} />
                ))
            }
          <Operators simbolo="+" operador="+" testid="operator+" pushOperation={operatorPressed} />
        </div>
        {/* Quinta fila de numeros y operaciones */}
        <div className="row">
        <TextModifiersOperator simbolo="C" modifyScreen={handleModificationOperator} />
          <TextModifiersOperator simbolo="CE" modifyScreen={handleModificationOperator} />
          <Operators className="modifier-operator-1" simbolo="MOD" testid="operatorMOD" operador=" Mod " pushOperation={operatorPressed} />
          <Operators className="modifier-operator-1" simbolo="÷" testid="operator/" operador="/" pushOperation={operatorPressed} />
        </div>
      </div>

    </div>
  );
}

export default Calculator;
