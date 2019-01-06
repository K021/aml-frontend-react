import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'redux/reducer';
import Nav from './presenter';

function mapStateToProps(state) {
  console.log('Header.index', state);
  const {
    base: {
      isNavShrink,
    }
  } = state;

  return {
    isNavShrink,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleNav: bindActionCreators(actionCreators.toggleNav, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);