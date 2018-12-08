import App from './../components/app.jsx';
import { action } from './../actions/action.js';
import { connect, Provider } from 'react-redux';
import { reducer } from './../reducers/reducer.js';
import { createStore } from 'redux';
import React, { Component } from 'react';

const extenstion = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, extenstion);

const defaultText = {
  text: 'some text'
}

const mapStateToProps = (state = defaultText) => {
  return {
    text: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNum: (text) => {
      dispatch(action(text));
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