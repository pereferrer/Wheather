import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

const LIMIT = 2;

export const updateList = (list, total) => ({
    type: types.UPDATE_LOCATIONS_LIST,
    value: {list, total},
  });

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

const fetchLocationsList = () => {
  return async (dispatch, getState) => {
    const {offset, list:prevList} = getState().locations;
    try {    

      dispatch(updateFetching(true));
      const getLocationsRes = await api.getLocations();
      const newList = _.get(getLocationsRes, 'data.list', []);
      const list = [...prevList, ...newList.slice(offset,offset+LIMIT)];
      const total = newList.length;

      console.log("ddd" + list);
      
      dispatch(updateList(list, total));
    } catch (e) {
      console.log(e);
      Alert.alert(
        'Atención',
        'Ha ocurrido un error, revise su conexión a internet',
      );
    } finally {
      dispatch(updateFetching(false));
    }
  };
};

export const postLocation = data => {
  return async (dispatch, getState) => {

    const {list: locations} = getState().locations;
    if (!locations) {
      return;
    }

    try {
      dispatch(updateFetching(true));

      const locationData = {...data, location: location.id};

      const {list} = getState().locations;

      const newList = [...list, data];

      dispatch(updateList(newList));

      Actions.popTo('Location');
    } catch (e) {
      console.log("sadds "+e);
      Alert.alert('Error', 'Error añadiendo el personaje');
    } finally {
      dispatch(updateFetching(false));
    }
  };
};

export const updateOffset = value => ({
  type: types.UPDATE_LOCATIONS_OFFSET,
  value,
});

export const initList = () => {
  return dispatch => {
    dispatch(updateList([], 0));
    dispatch(updateOffset(0));
    dispatch(fetchLocationsList());
  };
};

export const fetchNextPage = () => {
  return (dispatch, getState) => {
    const {offset} = getState().locations;
    dispatch(updateOffset(offset + LIMIT));
    dispatch(fetchLocationsList());
  };
};