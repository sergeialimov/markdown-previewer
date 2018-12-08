import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './../components/app.jsx';
import { action } from './../actions/action.js';
import { reducer } from './../reducers/reducer.js';

const extenstion = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, extenstion);

const defaultText = {
  text: 'some text' 
}

const mapStateToProps = (state) => {
  return {
    text: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    translate: (text) => {
      dispatch(action(text));
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

class AppWrapper extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Container />
      </Provider>
    )
  }
}

export default AppWrapper;