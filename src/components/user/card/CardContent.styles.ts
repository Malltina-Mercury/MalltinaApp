import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    marginLeft: width / 25,
  },
  title: {
    textAlign: 'left',
    color: '#1f2937',
    fontSize: 18,
    fontWeight: '600',
  },
  subTitle: {
    textAlign: 'left',
    color: 'grey',
    fontSize: 14,
  },
});
