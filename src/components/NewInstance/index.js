import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'redux/newInstance';
// import NewInstanceComponent from './presenter';

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
    openLocationPane: bindActionCreators(actionCreators.openLocationPane, dispatch),
  };
}

const newInstanceConnect = connect(mapStateToProps, mapDispatchToProps);

export default newInstanceConnect;

// export default newInstanceConnect(NewInstanceComponent);