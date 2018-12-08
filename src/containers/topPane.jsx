import TopPane from './../components/topPane.jsx';
import { action } from './../actions/action.js';
import { connect } from 'react-redux';

const mapStateToProps = (state = 0) => {
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