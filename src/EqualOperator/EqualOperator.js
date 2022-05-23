/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// se desactivaron las reglas que no dejan que funcionen los botones
import React from 'react';

const EqualOperator = (props) => {
  const items = props;
  const clickEqualOperator = () => {
    items.calcularResultado();
  };
  return (
    <div className="col modifier-operator" data-testid="testEqual" onClick={clickEqualOperator}>
      <p className="modifier-caption">{items.simbolo}</p>
    </div>
  );
};

export default EqualOperator;
