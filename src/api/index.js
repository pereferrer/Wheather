import axios from 'axios';
import {BASE_URL} from '../config/api';
import qs from 'qs';

const instance = axios.create({
  baseURL: BASE_URL,
});


export const getLocations = () => {
  const url = '/data/2.5/find?lat=40.416775&lon=-3.703790&cnt=10&units=metric&APPID=af8e93fc90234e19603c97597d0d4df1';
  return instance.get(url);
};




