import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';
import _ from 'lodash';

export const updateList = value => {
  const action = {
    type: types.UPDATE_LOCATIONS_LIST,
    value: value,
  };
  return action;
};

export const updateFetching = value => {
  return {
    type: types.UPDATE_LOCATIONS_FETCHING,
    value: value,
  };
};

export const updateItem = value => {
  return {
    type: types.UPDATE_LOCATIONS_ITEM,
    value,
  };
};

export const fetchLocationsList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(updateFetching(true));
      const getLocationsRes = await api.getLocations();
      const locations = _.get(getLocationsRes, 'data.list', []);
      dispatch(updateList(locations));
    } catch (e) {
      Alert.alert(
        'Atención',
        'Ha ocurrido un error, revise su conexión a internet',
      );
    } finally {
      dispatch(updateFetching(false));
    }
  };
};