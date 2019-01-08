import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'redux/base';
import Header from './presenter';

function mapStateToProps(state) {
  console.log('Header.index', state);
  const {
    base: {
      isSearchOn,
    }
  } = state;

  return {
    isSearchOn,
  };
}

// https://react-redux.js.org/using-react-redux/connect-mapdispatch
// mapDispatchToProps(dispatch, [ownProps])
// : lets you create functions that dispatch when called, 
// and pass those functions as props to your component.
// distpatch: action 을 reducer 에 보내 결과적으로 state 를 바꾸는 함수. (reducer 정보는 App 에서 생성한 store 에 있다.)
function mapDispatchToProps(dispatch) {
  return {
    // https://redux.js.org/api/bindactioncreators
    // return: 주어진 action creator 의 결과 값을 바로 dispatch 하는 함수 또는 그 함수들의 객체 (첫번째 인자로 함수들의 객체를 줄 수도 있음)
    toggleSearch: bindActionCreators(actionCreators.toggleSearch, dispatch),
    openProfile: bindActionCreators(actionCreators.openProfile, dispatch),
    openNotif: bindActionCreators(actionCreators.openNotif, dispatch),
    openPref: bindActionCreators(actionCreators.openPref, dispatch),
  };
}

// https://react-redux.js.org/api/connect#connect
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// return: component => wrapper component with the additional props. (#connect-returns)
export default connect(mapStateToProps, mapDispatchToProps)(Header);