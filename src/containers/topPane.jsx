import { connect } from 'react-redux';
import TopPane from './../components/topPane.jsx';
import { action } from './../actions/action.js';

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

export default connect(mapStateToProps, mapDispatchToProps)(TopPane);