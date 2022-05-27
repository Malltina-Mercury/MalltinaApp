import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    width: width / 6,
    height: height / 12,
    borderRadius: (width / 6 + height / 12) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: width / 7,
    height: height / 14,
    borderRadius: (width / 7 + height / 14) / 2,
    resizeMode: 'contain',
  },
});
