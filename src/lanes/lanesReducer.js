const initialState = {
  lanes: [],
  filter: 'all',
  searchText: ''
}

export default function lanesReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_LANES':
      return {
        ...state,
        lanes: action.lanes
      }
  
    case 'SET_LANES_FILTER':
      return {
        ...state,
        filter: action.filter
      }

    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }

    default:
      return state
  }
}