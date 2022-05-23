/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// se desactivaron las reglas que no dejan que funcionen los botones
import React from 'react';
// import PropTypes from 'prop-types';

const NumberAddons = (props) => {
  const item = props;
  const clickOperatorListener = () => {
    item.addonOperator(item.operacion);
  };
  return (
    <div className="col calculator-numbers" data-testid={item.testid} onClick={clickOperatorListener}>
      <p className="calculator-appenders">{item.operacion}</p>
    </div>
  );
};

export default NumberAddons;
