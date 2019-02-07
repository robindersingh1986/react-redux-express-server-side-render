import React from 'react';
import PropTypes from 'prop-types';

const CounterComponent = (props) => (
  <div>
    <div> { props.count } </div>
    <button onClick={ props.inc }>+</button>
    <button onClick={ props.dec }>-</button>
  </div>
);

CounterComponent.defaultProps = {
  count: 0,
  inc: null,
  dec: null,
};

CounterComponent.propTypes = {
  count: PropTypes.number,
  inc: PropTypes.func.isRequired,
  dec: PropTypes.func.isRequired,
};

export default CounterComponent;
