import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import App from './../components/app.jsx';
import { action } from './../actions/action.js';
import { reducer } from './../reducers/reducer.js';

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
        <Container />
    )
  }
}

export default AppWrapper;