import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'redux/newInstance';
import Wizard from './presenter';

function mapStateToProps(state) {
  console.log('Header.index', state);
  const {
    newInstance,
  } = state;

  return {
    newInstance,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleInstanceLocationDepth: bindActionCreators(actionCreators.toggleInstanceLocationDepth, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);