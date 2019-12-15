import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
  },

  inputText: {
    color:'white',
    textShadowColor: 'red',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight:16,
    marginLeft: 16,
    marginVertical: 20,  
  },
  inputError: {
    color: 'red',
    fontSize: 12,
    marginTop: 6,
    textAlign: 'right',
  },
  image: {width: 50, height: 50, resizeMode: 'cover'},
});
