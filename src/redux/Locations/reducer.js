import * as types from './types';

const initialState = {
  isFetching: false,
  list: [],
  total: 0,
  offset: 0,
  item: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_LOCATIONS_FETCHING:
      return {
        ...state,
        isFetching: action.value,
      };

    case types.UPDATE_LOCATIONS_LIST:
      return {
        ...state,
        list: action.value.list,
        total: action.value.total,
      };

    case types.UPDATE_LOCATIONS_ITEM:
      return {
        ...state,
        item: action.value,
      };

      case types.UPDATE_LOCATIONS_OFFSET:
      return {
        ...state,
        offset: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
