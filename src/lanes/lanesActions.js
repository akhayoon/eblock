import * as types from './lanesActionTypes'

export function setLanesFilter(filter) {
  return {
    type: types.SET_LANES_FILTER,
    filter
  }
}

export function changeSearchText(searchText) {
  return {
    type: types.CHANGE_SEARCH_TEXT,
    searchText
  }
}

// A thunk is overkill, but I just want to show how I usually handle async actions
export function fetchLanes(formData)
{
	return (dispatch, getState) => {
    // Please not that these actions REQUEST/SUCCESS/FAILURE are for reference/logging 
    // purposes only and are not used in the reducer.
		dispatch({type: types.FETCH_LANES_REQUEST});

    // This try block is used to control errors that might occur in async actions.
		try {
      const payload = require('../payload.json');
      dispatch({type: types.FETCH_LANES_SUCCESS, payload});
      
      const {data} = payload;
			dispatch({type: types.RECEIVE_LANES, lanes: data.lanes});
		} catch(error) {
			dispatch({type: types.FETCH_LANES_FAILURE});

      // Report this error here to a reporter like Sentry or LogRocket
      // You should also trigger an action to show something to user on the view.
    }
	}
}