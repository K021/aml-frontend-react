import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'redux/newInstance';
import Wizard from './presenter';

function mapDispatchToProps(dispatch) {
  return {
    openLocationPane: bindActionCreators(actionCreators.openLocationPane, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Wizard);