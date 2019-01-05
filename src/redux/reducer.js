// Imports

    
// Action Types (just indicators of actions)
    
const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
const OPEN_PROFILE = 'OPEN_PROFILE';
const OPEN_NOTIF = 'OPEN_NOTIF';
const OPEN_PREF = 'OPEN_PREF';
const TOGGLE_PRORILE = 'TOGGLE_PRORILE';
const TOGGLE_NOTIF = 'TOGGLE_NOTIF';
const TOGGLE_PREF = 'TOGGLE_PREF';
const TOGGLE_NAV = 'TOGGLE_NAV';
    
// Action Creators
// return value of these functions are real 'Actions'.
    
function toggleSearch() {
  return {type: TOGGLE_SEARCH};
}
function openProfile() {
  return {type: OPEN_PROFILE};
}
function openNotif() {
  return {type: OPEN_NOTIF};
}
function openPref() {
  return {type: OPEN_PREF};
}
function toggleProfile() {
  return {type: TOGGLE_PRORILE};
}
function toggleNotif() {
  return {type: TOGGLE_NOTIF};
}
function togglePref() {
  return {type: TOGGLE_PREF};
}
function toggleNav() {
  return {type: TOGGLE_NAV};
}
    
// Reducer
    

const initialState = {
  isSearchOn: false,
  isProfilePaneOn: false,
  isNotifPaneOn: false,
  isPrefPaneOn: false,
  isNavShrink: false,
};


function reducer(state=initialState, action) {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return applyToggleSearch(state, action);
    case OPEN_PROFILE:
      return applyOpenProfile(state, action);
    case OPEN_NOTIF:
      return applyOpenNotif(state, action);
    case OPEN_PREF:
      return applyOpenPref(state, action);
    case TOGGLE_PRORILE:
      return applyToggleProfile(state, action);
    case TOGGLE_NOTIF:
      return applyToggleNotif(state, action);
    case TOGGLE_PREF:
      return applyTogglePref(state, action);
    case TOGGLE_NAV:
      return applyToggleNav(state, action);
    default:
      return state;
  }
}
    
// Reducer Functions

function applyToggleSearch(state, action) {
  if (state.isSearchOn) {
    return {
      ...state,
      isSearchOn: false,
    };
  } else {
    return {
      ...state,
      isSearchOn: true,
    };
  }
  
}
function applyOpenProfile(state, action) {
  if (!state.isProfilePaneOn) return {
    ...state,
    isPrefPaneOn: true,
  };
}
function applyOpenNotif(state, action) {
  if (!state.isNotifPaneOn) return {
    ...state,
    isNotifPaneOn: true,
  };
}
function applyOpenPref(state, action) {
  if (!state.isPrefPaneOn) return {
    ...state,
    isPrefPaneOn: true,
  };
}
function applyToggleProfile(state, action) {
  if (state.isProfilePaneOn) {
    return {
      ...state,
      isProfilePaneOn: false,
    };
  } else {
    return {
      ...state,
      isProfilePaneOn: true,
      isNotifPaneOn: false,
      isPrefPaneOn: false,
    };
  }
}
function applyToggleNotif(state, action) {
  if (state.isNotifPaneOn) {
    return {
      ...state,
      isNotifPaneOn: false,
    };
  } else {
    return {
      ...state,
      isProfilePaneOn: false,
      isNotifPaneOn: true,
      isPrefPaneOn: false,
    };
  }
}
function applyTogglePref(state, action) {
  if (state.isPrefPaneOn) {
    return {
      ...state,
      isPrefPaneOn: false,
    };
  } else {
    return {
      ...state,
      isProfilePaneOn: false,
      isNotifPaneOn: false,
      isPrefPaneOn: true,
    };
  }
}
function applyToggleNav(state, action) {
  if (state.isNavShrink) {
    return {
      ...state,
      isNavShrink: false,
    };
  } else {
    return {
      ...state,
      isNavShrink: true,
    };
  }
}
    
    
// Exports
// 단 한개의 디폴트를 제외한 나머지는 객체 하나에 묶어서 보낸다.
// 나중에 임포트 할 때 해체할당으로 가져간다.
    
const actionCreators = {
  toggleSearch: toggleSearch,
  toggleProfile: toggleProfile,
  toggleNotif: toggleNotif,
  togglePref: togglePref,
  toggleNav: toggleNav,
  openProfile: openProfile,
  openNotif: openNotif,
  openPref: openPref,
};
export { actionCreators };
    
// Default (단 한개 뿐)
    
export default reducer;