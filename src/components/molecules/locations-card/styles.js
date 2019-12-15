import {StyleSheet, Dimensions} from 'react-native';

// const widht = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
export const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {width: 50, height: 50, resizeMode: 'cover'},
  name: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
