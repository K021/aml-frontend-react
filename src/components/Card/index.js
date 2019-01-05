import { connect } from 'react-redux';
import Card from './presenter';

function mapStateToProps(state) {
  const {
    base: {
      isProfilePaneOn,
      isNotifPaneOn,
      isPrefPaneOn,
    }
  } = state;

  return {
    isProfilePaneOn,
    isNotifPaneOn,
    isPrefPaneOn,
  };
}

// https://react-redux.js.org/api/connect#connect
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// return: component => wrapper component with the additional props. (#connect-returns)
export default connect(mapStateToProps)(Card);