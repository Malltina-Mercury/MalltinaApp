import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    marginLeft: '6%',
  },
  title: {
    textAlign: 'left',
    color: '#1f2937',
    fontSize: 20,
    fontWeight: '600',
  },
  subTitle: {
    textAlign: 'left',
    color: 'grey',
    fontSize: 14,
  },
});
