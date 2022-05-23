/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// se desactivaron las reglas que no dejan que funcionen los botones
import React from 'react';
// { simbolo, operador, pushOperation }
const Operators = (props) => {
  const item = props;
  const clickOperatorListener = () => {
    item.pushOperation(item.operador);
  };

  return (
    <div className="col calculator-operators" data-testid={item.testid} onClick={clickOperatorListener}>
      <p className="operators-caption">{item.simbolo}</p>
    </div>
  );
};

export default Operators;
