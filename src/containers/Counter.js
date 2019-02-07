import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CounterComponent from '../components/CounterComponent';


class Counter extends Component {
  constructor(props) {
    super(props);
    this._incrementFn = this._incrementFn.bind();
    this._decrementFn = this._decrementFn.bind();
  }
  _incrementFn = () => {
    this.props.increment();
  }
  _decrementFn = () => {
    this.props.decrement();
  }
  render() {
      return (
          <CounterComponent
            inc={ this._incrementFn }
            dec={ this._decrementFn }
            count= { this.props.count }
          />
      );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { count: state.count };
};


const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'POST_COUNTER_INCREMENT' }),
    decrement: () => dispatch({ type: 'POST_COUNTER_DECREMENT' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);