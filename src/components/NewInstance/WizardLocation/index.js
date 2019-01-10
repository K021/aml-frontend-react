import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'redux/newInstance';
import Wizard from './presenter';

// function mapStateToProps(state) {
//   console.log('Header.index', state);
//   const {
//     newInstance,
//   } = state;
//
//   return {
//     newInstance,
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    setInstanceLocationName: bindActionCreators(actionCreators.setInstanceLocationName, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Wizard);