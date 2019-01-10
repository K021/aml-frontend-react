import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'redux/newInstance';
import Wizard from './presenter';

function mapStateToProps(state) {
  console.log('Header.index', state);
  const {
    newInstance: {
      instLocName
    },
  } = state;

  return {
    instLocName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openLocationPane: bindActionCreators(actionCreators.openLocationPane, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);