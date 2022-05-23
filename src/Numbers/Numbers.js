/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// se desactivaron las reglas que no dejan que funcionen los botones
import React from 'react';
// import PropTypes from 'prop-types';
// { numero, calculateNumbers }
const Numbers = (props) => {
  const item = props;
  const clickNumberListener = () => {
    item.calculateNumbers(item.numero);
  };
  return (
    <div className="col calculator-numbers" id={item.id} data-testid={item.testid} onClick={clickNumberListener}>
      <p className="calculator-appenders">{item.numero}</p>
    </div>
  );
};

export default Numbers;
