/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// se desactivaron las reglas que no dejan que funcionen los botones
import React from 'react';

const TextModifiersOperator = (props) => {
  const items = props;
  const clickOperatorListener = () => {
    items.modifyScreen(items.simbolo);
  };
  return (
    <div className="col modifier-operator-1" onClick={clickOperatorListener}>
      <p className="modifier-caption-1">{items.simbolo}</p>
    </div>
  );
};

export default TextModifiersOperator;
