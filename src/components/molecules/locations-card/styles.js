import {StyleSheet, Dimensions} from 'react-native';

// const widht = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
export const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  image: {width: 50, height: 50, resizeMode: 'cover'},
  name: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    flex: 1,
  },
  
});
