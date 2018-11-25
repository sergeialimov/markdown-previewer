import App from './../components/app.jsx';
// import { submitNewNum } from './../actions/submitNewNum.js';
import { connect, Provider } from 'react-redux';
import { reducer } from './../reducers/reducer.js';
import { createStore } from 'redux';
import React, { Component } from 'react';

const store = createStore(reducer);

const mapStateToProps = (state=0) => {
  return {
    num: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNum: (num) => {
      // dispatch(submitNewNum(num));
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

class AppWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}

export default AppWrapper;