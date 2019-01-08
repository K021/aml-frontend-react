

// Action Types (indicators of actions)
const OPEN_LOCATION_PANE = 'OPEN_LOCATION_PANE';
const LOCATION_DEPTH_TOGGLE_BASE = 'LOCATION_DEPTH_TOGGLE_BASE';

// Action Creators
// return value of these functions are real 'Actions'.

function openLocationPane() {
  return {
    type: OPEN_LOCATION_PANE,
  };
}

function toggleInstanceLocationDepth(depth) {
  return {
    type: LOCATION_DEPTH_TOGGLE_BASE,
    info: depth,
  };
}

// Reducer

const initialState = {
  isLocPaneOn: false,
  isInstLoc0On: true,
  isInstLoc1On: false,
  isInstLoc2On: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_LOCATION_PANE:
      return applyOpenLocationPane(state, action);
    case LOCATION_DEPTH_TOGGLE_BASE:
      return applyToogleInstanceLocationDepth(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applyOpenLocationPane(state, action) {
  return {
    ...state,
    isLocPaneOn: true,
  };
}

function applyToogleInstanceLocationDepth(state, action) {
  if (state[`isInstLoc${action.info}On`]) {
    state[`isInstLoc${action.info}On`] = false;
    return state;
  } else {
    state[`isInstLoc${action.info}On`] = true;
    return state;
  }
}

// Exports

const actionCreators = {
  openLocationPane: openLocationPane,
  toggleInstanceLocationDepth: toggleInstanceLocationDepth,
};
export { actionCreators };

export default reducer;