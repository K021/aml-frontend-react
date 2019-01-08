

// Action Types (indicators of actions)
const LOCATION_DEPTH_TOGGLE_BASE = 'LOCATION_DEPTH_TOGGLE_BASE';

// Action Creators
// return value of these functions are real 'Actions'.

function toogleInstanceLocationDepth(depth) {
  return {
    type: LOCATION_DEPTH_TOGGLE_BASE,
    info: depth,
  };
}

// Reducer

const initialState = {
  isInstLoc0On: true,
  isInstLoc1On: false,
  isInstLoc2On: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOCATION_DEPTH_TOGGLE_BASE:
      return applyToogleInstanceLocation(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applyToogleInstanceLocation(state, action) {
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
  toogleInstanceLocationDepth: toogleInstanceLocationDepth,
};
export { actionCreators };

export default reducer;