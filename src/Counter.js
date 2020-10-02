import React from 'react';
import { connect } from 'react-redux';

function Counter (props) {
  return(
    <div>
      <h1>Counter</h1>
      <p>Count : {props.count}</p>
      <button onClick= {props.onIncrementClick}>Increment</button>
      <button onClick= {props.onDecrememntClick}>Decrememnt</button>
    </div>
  )
}


function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick : ()=> {
      const action = { type : 'INCREMENT'}
      dispatch(action)
    },
    onDecrememntClick : ()=> {
      const action = { type: 'DECREMENT'}
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);